import React from 'react'

import Button from '../../components/Button'

import { render, screen } from '../../testWithTheme'

describe('Button', () => {
  it('should render button style without errors', () => {
    render(<Button hasStyle="button">Test Button</Button>)

    expect(
      screen.getByRole('button', { name: /test button/i })
    ).toBeInTheDocument()
  })

  it('should render button disabled style without errors', () => {
    render(
      <Button hasStyle="button" disabled>
        Test Button Disabled
      </Button>
    )

    expect(
      screen.getByRole('button', { name: /test button disabled/i })
    ).toBeInTheDocument()
  })
})
