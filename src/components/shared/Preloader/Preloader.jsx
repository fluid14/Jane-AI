import React from 'react';
import * as styles from './Preloader.module.sass';
import { PreloaderContext } from './context/preloaderContext.jsx';
import { useContext } from 'react';

export const Preloader = () => {
  const { preloaderState } = useContext(PreloaderContext);

  return preloaderState && <div className={styles.preloader} />;
};
