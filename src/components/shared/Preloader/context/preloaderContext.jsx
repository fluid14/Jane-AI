import React from 'react';
import { createContext, useState } from 'react';

const PreloaderContext = createContext(false);

const PreloaderContextProvider = ({ children }) => {
  const [preloaderState, setPreloaderState] = useState(false);

  const showPreloader = () => {
    setPreloaderState(() => true);
  };

  const hidePreloader = () => {
    setPreloaderState(() => false);
  };

  return (
    <PreloaderContext.Provider value={{ preloaderState, showPreloader, hidePreloader }}>
      {children}
    </PreloaderContext.Provider>
  );
};

export { PreloaderContextProvider, PreloaderContext };
