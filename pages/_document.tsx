import Document, { Html, Head, Main, NextScript } from 'next/document'
import Layout from '../components/Layout/Layout'

class MyDocument extends Document {
  render() {
    return (
      <Html className="dark">
        <Head />
        <body className="dark:bg-gray-800">
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