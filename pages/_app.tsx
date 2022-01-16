import '../styles/index.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyle } from '../components/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Radio Stations</title>
        <meta name="description" content="Listen some cool radio!"></meta>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
