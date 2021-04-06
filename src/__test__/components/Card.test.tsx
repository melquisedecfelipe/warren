import React from 'react'
import { FiX } from 'react-icons/fi'

import Card from '../../components/Card'

import { render } from '../../testWithTheme'

const cardProps = {
  background: '#fff',
  end: 100,
  icon: FiX,
  title: 'Test Card'
}

describe('Card', () => {
  it('should render card without errors', () => {
    const { container } = render(<Card {...cardProps} />)

    expect(container).toBeInTheDocument()
  })
})
