import { dateFormat, moneyFormat } from '../../utils/format'

describe('dateFormat', () => {
  it('should format date to brazil', () => {
    expect(dateFormat('1997-10-21T00:00:00.532+00:00')).toBe('20/10/1997')
  })
})

describe('moneyFormat', () => {
  it('should format money to brazil', () => {
    expect(moneyFormat(100)).toBe('R$\xa0100,00')
  })
})
