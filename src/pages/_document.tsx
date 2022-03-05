import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <body className="font-body bg-slate-100 transition-colors overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
