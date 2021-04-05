import React from 'react'

import { useRecoilValue } from 'recoil'
import { transactionsAtom } from 'recoil/transaction'

import { dateFormat, moneyFormat } from 'utils/format'

import { Table } from './styles'

import Modal from '../Modal'

interface ExtractModalProps {
  handleToggle: () => void
}

const ExtractModal: React.FC<ExtractModalProps> = ({ handleToggle }) => {
  const transactions = useRecoilValue(transactionsAtom)

  return (
    <Modal handleToggle={handleToggle} title="Extrato" width="500px">
      <Table>
        <table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Valor</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction._id}>
                <td>{transaction.type}</td>
                <td>{moneyFormat(Number(transaction.value))}</td>
                <td>{dateFormat(transaction.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Table>
    </Modal>
  )
}

export default ExtractModal
