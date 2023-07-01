import { register } from '@tauri-apps/api/globalShortcut';
import { invoke } from '@tauri-apps/api/tauri';

const openAppWindow = async () => {
  await invoke('toggle_window');
};

export const initShortcuts = async (actions = []) => {
  console.log(actions);
  await register('CommandOrControl+Shift+C', async () => {
    console.log('Shortcut triggered');
    await openAppWindow();
  });
};
