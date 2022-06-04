import { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';

import 'tailwindcss/tailwind.css';
import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
