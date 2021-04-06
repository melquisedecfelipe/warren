import React from 'react'

import MoneyCountUp from '../../components/MoneyCountUp'

import { render } from '../../testWithTheme'

describe('MoneyCountUp', () => {
  it('should render money count up without errors', () => {
    const { container } = render(<MoneyCountUp end={1000} />)

    expect(container).toBeInTheDocument()
  })
})
