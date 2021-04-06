import React, { useEffect, useState } from 'react'
import { FiArrowDown, FiArrowUp, FiDollarSign } from 'react-icons/fi'

import { useSession } from 'next-auth/client'
import { useRecoilCallback, useRecoilValue } from 'recoil'
import {
  inputAtom,
  outputAtom,
  totalAtom,
  transactionsAtom,
  valuesSelector
} from 'recoil/transaction'

import Button from 'components/Button'
import Card from 'components/Card'
import ExtractModal from 'components/ExtractModal'
import SEO from 'components/SEO'
import Template from 'components/Template'
import TransactionModal from 'components/TransactionModal'

import useModal from 'hooks/useModal'

import { api } from 'services/api'

import { GetUserTransactions } from 'types'

import colors from 'styles/colors'
import { HomeContainer, Header, Actions, Transactions } from 'styles/pages/Home'

import dolar from '../../static/dolar.jpg'

export default function Films() {
  const [loading, setLoading] = useState(false)

  const {
    isShowing: extractModalShowing,
    handleToggle: extractModalToggle
  } = useModal()
  const {
    isShowing: transactionModalShowing,
    handleToggle: transactionModalToggle
  } = useModal()

  const values = useRecoilValue(valuesSelector)

  const [session] = useSession()

  const getTransaction = useRecoilCallback(
    ({ set }) => async () => {
      setLoading(true)

      try {
        const { data } = await api.get<GetUserTransactions>('/user')

        const { input, output, total, transactions } = data

        set(inputAtom, input)
        set(outputAtom, output)
        set(totalAtom, total)
        set(transactionsAtom, transactions)
      } catch (error) {
        console.log({ error })
      } finally {
        setLoading(false)
      }
    },
    []
  )

  useEffect(() => {
    if (session) {
      getTransaction()
    }
  }, [session])

  return (
    <Template loading={loading}>
      <SEO title="Home" />

      <HomeContainer hasSession={!!session}>
        <Header>
          <div>
            <h3>Sua conta</h3>
            <p>Veja como e onde tem gastado seu dinheiro.</p>
          </div>

          <Actions>
            <Button hasStyle="link" onClick={() => extractModalToggle()}>
              Extrato
            </Button>
            <Button hasStyle="outline" onClick={() => transactionModalToggle()}>
              Adicionar nova transação
            </Button>
          </Actions>
        </Header>

        <Transactions>
          <div>
            <Card
              background={`linear-gradient(30deg, ${colors.wheel.green}, ${colors.wheel.greenSecondary})`}
              end={values.input}
              icon={FiArrowUp}
              title="Entrada"
            />
            <Card
              background={`linear-gradient(30deg, ${colors.wheel.red}, ${colors.wheel.redSecondary})`}
              end={values.output}
              icon={FiArrowDown}
              title="Saida"
            />
          </div>
          <Card
            background={`linear-gradient(-30deg, rgba(31, 58, 147, 0.7), rgba(70, 106, 224, 0.5)), url(${dolar});`}
            end={values.total}
            icon={FiDollarSign}
            title="Total"
          />
        </Transactions>
      </HomeContainer>

      {extractModalShowing && (
        <ExtractModal handleToggle={() => extractModalToggle()} />
      )}

      {transactionModalShowing && (
        <TransactionModal handleToggle={() => transactionModalToggle()} />
      )}
    </Template>
  )
}
