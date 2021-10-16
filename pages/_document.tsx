import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
          />
        </Head>
        <body className="transform ease-in-out duration-500">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
