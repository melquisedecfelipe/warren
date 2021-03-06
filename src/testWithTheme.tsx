import '@testing-library/jest-dom'

import React, { FC, ReactElement } from 'react'

import { render, RenderOptions } from '@testing-library/react'

import { ThemeProvider } from 'styled-components'

import theme from './styles'
import GlobalStyle from './styles/global'

const AllTheProviders: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }
