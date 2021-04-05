import React from 'react'
import { FiX } from 'react-icons/fi'

import { ModalContainer, ModalContent } from './styles'

import Button from '../Button'

interface ModalProps {
  handleToggle: () => void
  title: string
  width?: string
}

const Modal: React.FC<ModalProps> = ({
  children,
  handleToggle,
  title,
  width
}) => {
  return (
    <ModalContainer>
      <ModalContent width={width}>
        <header>
          <h3>{title}</h3>
          <Button hasStyle="icon" onClick={() => handleToggle()}>
            <FiX />
          </Button>
        </header>
        {children}
      </ModalContent>
    </ModalContainer>
  )
}

export default Modal
