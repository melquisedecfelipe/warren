import React from 'react'
import { IconBaseProps } from 'react-icons'

import { CardContainer } from './styles'

import MoneyCountUp from '../MoneyCountUp'

interface CardProps {
  background: string
  end: number
  icon: React.ComponentType<IconBaseProps>
  title: string
}

const Card: React.FC<CardProps> = ({ background, end, icon: Icon, title }) => {
  return (
    <CardContainer background={background}>
      <header>
        <p>{title}</p>
        <Icon />
      </header>

      <div>
        <small>R$</small>
        <MoneyCountUp end={end} />
      </div>
    </CardContainer>
  )
}

export default Card
