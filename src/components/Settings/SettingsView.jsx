import { Theme } from '../../theme/Theme.jsx';
import { SettingsContextProvider } from './context/settingsContext';
import { ActionsList } from './components/ActionsList/ActionsList.jsx';

export const SettingsView = () => {
  return (
    <Theme>
      <SettingsContextProvider>
        <ActionsList />
      </SettingsContextProvider>
    </Theme>
  );
};
