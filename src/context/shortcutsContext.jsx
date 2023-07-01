import React, { createContext, useContext } from 'react';
import { register, isRegistered } from '@tauri-apps/api/globalShortcut';
import { invoke } from '@tauri-apps/api/tauri';
import { ActionsContext } from '@/context/actionsContext';

const ShortcutsContext = createContext(null);

const ShortcutsContextProvider = ({ children }) => {
  const openAppWindow = async () => {
    await invoke('toggle_window');
  };

  const initShortcuts = async (actions = [], setActiveAction) => {
    console.log(actions);
    for (const { shortcut, title } of actions.filter(
      ({ shortcut: filterShortcut }) => filterShortcut,
    )) {
      console.log(title);
      if (await isRegistered(shortcut)) {
        console.warn('Shortcut already registered');
      } else {
        await register(shortcut, async () => {
          console.log('Shortcut triggered');
          console.log(title);
          setActiveAction(title);
          await openAppWindow();
        });
      }
    }
  };

  return (
    <ShortcutsContext.Provider value={{ initShortcuts }}>{children}</ShortcutsContext.Provider>
  );
};

export { ShortcutsContextProvider, ShortcutsContext };
