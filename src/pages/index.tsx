import React, { useEffect } from 'react'
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
import ExtractModal from 'components/ExtractModal'
import SEO from 'components/SEO'
import Template from 'components/Template'
import TransactionModal from 'components/TransactionModal'

import useModal from 'hooks/useModal'

import { api } from 'services/api'

import { moneyFormat } from 'utils/format'

import { GetUserTransactions } from 'types'

import colors from 'styles/colors'
import {
  HomeContainer,
  Header,
  Actions,
  Transactions,
  Card
} from 'styles/pages/Home'

import dolar from '../../static/dolar.jpg'

export default function Films() {
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
      try {
        const { data } = await api.get<GetUserTransactions>('/user')

        const { input, output, total, transactions } = data

        set(inputAtom, input)
        set(outputAtom, output)
        set(totalAtom, total)
        set(transactionsAtom, transactions)
      } catch (error) {
        console.log({ error })
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
    <Template>
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
            >
              <header>
                <p>Entrada</p>
                <FiArrowUp />
              </header>
              <h2 title={moneyFormat(values.output || 0)}>
                {moneyFormat(values.input || 0)}
              </h2>
            </Card>
            <Card
              background={`linear-gradient(30deg, ${colors.wheel.red}, ${colors.wheel.redSecondary})`}
            >
              <header>
                <p>Saida</p>
                <FiArrowDown />
              </header>
              <h2 title={moneyFormat(values.output || 0)}>
                {moneyFormat(values.output || 0)}
              </h2>
            </Card>
          </div>
          <Card
            background={`linear-gradient(-30deg, rgba(31, 58, 147, 0.7), rgba(70, 106, 224, 0.5)), url(${dolar});`}
          >
            <header>
              <p>Total</p>
              <FiDollarSign />
            </header>
            <h2 title={moneyFormat(values.output || 0)}>
              {moneyFormat(values.total || 0)}
            </h2>
          </Card>
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
