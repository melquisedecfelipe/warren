import React from 'react'

import Template from '../../components/Template'

import { render } from '../../testWithTheme'

describe('Template', () => {
  it('should render template without errors', () => {
    const { container } = render(<Template />)

    expect(container).toBeInTheDocument()
  })
})
