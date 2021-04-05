import React from 'react'

import { ContainerTemplate, Hero } from './styles'

import Loading from '../Loading'
import SignInButton from '../SignInButton'

interface TemplateProps {
  loading?: boolean
}

const Template: React.FC<TemplateProps> = ({ loading, children }) => {
  return (
    <ContainerTemplate>
      <Loading loading={loading} />

      <Hero>
        <section>
          <h1>Um banco de dev pra dev</h1>
          <h3>Um novo jeito de fazer transferências e pagamentos</h3>

          <SignInButton />
        </section>
        <img src="/static/money.jpg" alt="Money Image" />
      </Hero>

      <section>{children}</section>
    </ContainerTemplate>
  )
}

export default Template
