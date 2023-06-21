import React from 'react';
import * as style from './Preloader.module.sass';
import { PreloaderContext } from './context/preloaderContext.jsx';
import { useContext } from 'react';

export const Preloader = () => {
  const { preloaderState } = useContext(PreloaderContext);

  return preloaderState && <div className={style.preloader} />;
};
