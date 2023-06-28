import React from 'react';
import * as styles from './Layout.module.sass';
import { PreloaderContextProvider } from '@/components/shared/Preloader/context/preloaderContext';
import { Header } from '@/components/shared/Header/Header';
import { Preloader } from '@/components/shared/Preloader/Preloader';

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
