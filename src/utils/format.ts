export const dateFormat = (value: string) => {
  const date = new Date(value)

  return new Intl.DateTimeFormat('pt-BR').format(date)
}

export const moneyFormat = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}
