import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" crossOrigin="true"/>
            </Head>
              <body className={'overflow-x-hidden'}>
                <Main />
                <NextScript />
              </body>
        </Html>
  )
}
