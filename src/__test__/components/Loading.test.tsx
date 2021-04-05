import React from 'react'

import Loading from '../../components/Loading'

import { render } from '../../testWithTheme'

describe('Loading', () => {
  it('should render loading without errors', () => {
    const { container } = render(<Loading loading />)

    expect(container).toBeInTheDocument()
  })
})
