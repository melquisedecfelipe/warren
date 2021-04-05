import React from 'react'

import { Provider as NextAuthProvider } from 'next-auth/client'
import { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

import { ThemeProvider } from 'styled-components'

import theme from 'styles'
import GlobalStyle from 'styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <NextAuthProvider session={pageProps.session}>
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  </NextAuthProvider>
)

export default MyApp
