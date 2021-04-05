import React from 'react'

import SEO from '../../components/SEO'

import { render } from '../../testWithTheme'

describe('SEO', () => {
  it('should render SEO without errors', () => {
    const { container } = render(<SEO title="Test SEO" />)

    expect(container).toBeInTheDocument()
  })
})
