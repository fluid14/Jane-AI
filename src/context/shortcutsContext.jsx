import React from 'react';
import { createContext, useState } from 'react';
import routes from '../routes.json';
import { useAxios } from '../hooks/useAxios';
import { register } from '@tauri-apps/api/globalShortcut';
import { invoke } from '@tauri-apps/api/tauri';

const ShortcutsContext = createContext(null);
const ShortcutsContextProvider = ({ children }) => {
  const openAppWindow = async () => {
    await invoke('toggle_window');
  };

  const initShortcuts = async () => {
    await register('CommandOrControl+Shift+C', async () => {
      console.log('Shortcut triggered');
      await openAppWindow();
    });
  };

  return (
    <ShortcutsContext.Provider
      value={{
        initShortcuts,
      }}
    >
      {children}
    </ShortcutsContext.Provider>
  );
};

export { ShortcutsContextProvider, ShortcutsContext };
