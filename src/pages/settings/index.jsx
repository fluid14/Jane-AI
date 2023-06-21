import React from 'react';
import { SettingsContextProvider } from '../../components/Settings/context/settingsContext';
import { ActionsList } from '../../components/Settings/components/ActionsList/ActionsList';

export default function Settings() {
  return (
    <SettingsContextProvider>
      <ActionsList />
    </SettingsContextProvider>
  );
}
