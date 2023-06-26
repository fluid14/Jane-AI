import React from 'react';
import '../styles/index.sass';
import Layout from '../components/shared/Layout/Layout';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ToastContainer theme='dark' />
    </Layout>
  );
}
