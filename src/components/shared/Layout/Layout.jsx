import React from 'react';
import * as styles from './Layout.module.sass';
import { PreloaderContextProvider } from '../Preloader/context/preloaderContext';
import { Header } from '../Header/Header';
import { Preloader } from '../Preloader/Preloader';

export default function Layout({ children }) {
  return (
    <PreloaderContextProvider>
      <div className={styles.themeWrap}>
        <Header />
        <Preloader />
        {children}
      </div>
    </PreloaderContextProvider>
  );
}
