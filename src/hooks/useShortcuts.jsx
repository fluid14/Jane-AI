import { useContext } from 'react';
import { ActionsContext } from '../context/actionsContext';
import { isRegistered, register } from '@tauri-apps/api/globalShortcut';
import { invoke } from '@tauri-apps/api/tauri';
import { readText } from '@tauri-apps/api/clipboard';
import { MessageContext } from '../context/messageContext';

export const useShortcuts = () => {
  const { actions, setActiveAction } = useContext(ActionsContext);
  const { setMessageText } = useContext(MessageContext);

  const registerShortcut = async (shortcut, action) => {
    if (await isRegistered(shortcut)) {
      console.warn('Shortcut already registered');
    } else {
      await register(shortcut, async () => {
        setActiveAction(action);
        await openAppWindow();
      });
    }
  };

  const openAppWindow = async () => {
    await invoke('toggle_window');
    const clipboardText = await readText();
    setMessageText(clipboardText);
  };

  const defaultShortcuts = async () => {
    const shortcuts = [{ shortcut: 'CommandOrControl+Shift+C', action: null }];
    for (const { shortcut, action } of shortcuts) {
      await registerShortcut(shortcut, action);
    }
  };

  const initShortcuts = async () => {
    await defaultShortcuts();
    for (const action of actions?.filter(({ shortcut: filterShortcut }) => filterShortcut)) {
      const { shortcut } = action;
      await registerShortcut(shortcut, action);
    }
  };

  return { initShortcuts };
};
