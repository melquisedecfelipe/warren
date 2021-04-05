import React from 'react'

import Modal from '../../components/Modal'

import { render } from '../../testWithTheme'

const modalProps = {
  handleToggle: jest.fn(),
  title: 'Test Modal'
}

describe('Modal', () => {
  it('should render modal without errors', () => {
    const { container } = render(<Modal {...modalProps} />)

    expect(container).toBeInTheDocument()
  })
})
