import Document, { Html, Head, Main, NextScript } from 'next/document'
import Layout from '../components/Layout/Layout'

class MyDocument extends Document {
  render() {
    return (
      <Html>
         <Head>
          <link
            rel="stylesheet"
            href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
          />
         </Head>
        <body>
          <Layout>
            <Main />
            <NextScript />
          </Layout>
        </body>
      </Html>
    )
  }
}

export default MyDocument