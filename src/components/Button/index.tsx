import React, { ButtonHTMLAttributes } from 'react'

import { ButtonContainer } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  hasStyle?: 'button' | 'outline' | 'link' | 'icon'
  isLoading?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  hasStyle,
  isLoading,
  ...rest
}) => {
  return (
    <ButtonContainer
      type="button"
      disabled={isLoading}
      hasStyle={hasStyle}
      {...rest}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
