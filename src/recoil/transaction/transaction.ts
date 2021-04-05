import { atom, selector } from 'recoil'

import { Transaction } from 'types'

export const inputAtom = atom({
  key: 'inputAtom',
  default: 0
})

export const outputAtom = atom({
  key: 'outputAtom',
  default: 0
})

export const totalAtom = atom({
  key: 'totalAtom',
  default: 0
})

export const transactionsAtom = atom({
  key: 'transactionsAtom',
  default: [] as Transaction[]
})

export const valuesSelector = selector({
  key: 'valuesSelector',
  get: ({ get }) => {
    const input = get(inputAtom)
    const output = get(outputAtom)
    const total = get(totalAtom)

    return { input, output, total }
  }
})
