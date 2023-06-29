import React from 'react';
import { ActionsList } from '../../components/Settings/components/ActionsList/ActionsList';
import { ActionsContextProvider } from '../../context/actionsContext';

export default function Settings() {
  return (
    <ActionsContextProvider>
      <ActionsList />
    </ActionsContextProvider>
  );
}
