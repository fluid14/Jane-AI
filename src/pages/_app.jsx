import React from 'react';
import '../styles/index.sass';
import Layout from '../components/shared/Layout/Layout';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

require('@fortawesome/fontawesome-svg-core').library.add(fas, far, fab);
config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ToastContainer theme='dark' />
    </Layout>
  );
}
