import type {AppProps} from 'next/app'
import Head from 'next/head'
import {ThemeProvider} from '../providers/theme.provider'
import '../styles/globals.css'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Head>
        <title>Donald Silveira | Frontend Engineer</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
