import React, { useMemo, useState } from 'react'
import CurrencyInput from 'react-currency-input-field'

import { useRecoilCallback, useRecoilValue } from 'recoil'
import {
  inputAtom,
  outputAtom,
  totalAtom,
  transactionsAtom
} from 'recoil/transaction'

import { api } from 'services/api'

import { PostUserTransactions } from 'types'

import { Form } from './styles'

import Button from '../Button'
import Modal from '../Modal'

interface TransactionModalProps {
  handleToggle: () => void
}

const TransactionModal: React.FC<TransactionModalProps> = ({
  handleToggle
}) => {
  const [type, setType] = useState('')
  const [value, setValue] = useState('')

  const total = useRecoilValue(totalAtom)

  const errorMessage = useMemo(() => {
    if (Number(value) <= 0) {
      return `Valor ${value} inválido.`
    }

    if ((type === 'Resgate' || type === 'Pagamento') && total < Number(value)) {
      return `Valor do ${type} maior que o valor total em conta.`
    }

    return ''
  }, [total, type, value])

  const handleSubmit = useRecoilCallback(
    ({ set }) => async () => {
      try {
        const { data } = await api.post<PostUserTransactions>('/user', {
          type,
          value
        })

        if (data) {
          const { transactions } = data

          switch (type) {
            case 'Depósito':
              set(inputAtom, oldInput => oldInput + Number(value))
              set(totalAtom, oldTotal => oldTotal + Number(value))
              break

            default:
              set(outputAtom, oldOutput => oldOutput + Number(value))
              set(totalAtom, oldTotal => oldTotal - Number(value))
              break
          }

          set(transactionsAtom, oldTransactions => {
            return [...transactions, ...oldTransactions]
          })

          handleToggle()
        }
      } catch (error) {
        console.log(error)
      }
    },
    [type, value]
  )

  return (
    <Modal title="Realizar transação" handleToggle={handleToggle}>
      <Form
        onSubmit={event => {
          event.preventDefault()
          handleSubmit()
        }}
      >
        <div>
          <label htmlFor="type">Tipo</label>
          <select
            name="type"
            id="type"
            required
            value={type}
            onChange={event => setType(event.target.value)}
          >
            <option value="">Selecione</option>
            <option value="Depósito">Depósito</option>
            <option value="Resgate">Resgate</option>
            <option value="Pagamento">Pagamento</option>
          </select>
        </div>
        <div>
          <label htmlFor="value">Valor</label>
          <CurrencyInput
            prefix="R$ "
            decimalSeparator=","
            groupSeparator="."
            id="value"
            placeholder="R$ 0,00"
            required
            value={value}
            onValueChange={value => setValue(value)}
            maxLength={9}
          />
        </div>
        {!!errorMessage && <small>{errorMessage}</small>}
        <Button type="submit" disabled={!!errorMessage}>
          Salvar
        </Button>
      </Form>
    </Modal>
  )
}

export default TransactionModal
