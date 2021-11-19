import { Head } from 'next/head';
import { Layout } from 'ui/layout';
import './styles.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
