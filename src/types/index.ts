export interface Transaction {
  _id: string
  date: string
  type: 'Depósito' | 'Resgate' | 'Pagamento'
  value: string
}

export interface GetUserTransactions {
  input: number
  output: number
  total: number
  transactions: Transaction[]
}

export interface PostUserTransactions {
  _id: string
  email: string
  input: number
  output: number
  total: number
  transactions: Transaction[]
}
