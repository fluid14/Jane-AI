import React, { useContext, useEffect } from 'react';
import { Conversation } from '../components/Dashboard/components/Conversation/Conversation';
import { ActionsList } from '../components/Dashboard/components/ActionsList/ActionsList';
import { ActionsContext } from '../context/actionsContext';
import { useShortcuts } from '../hooks/useShortcuts';

export default function Dashboard() {
  const { actions, getActions } = useContext(ActionsContext);
  const { initShortcuts } = useShortcuts();

  useEffect(() => {
    initShortcuts();
  }, [actions]);

  return (
    <>
      <ActionsList />
      <Conversation />
    </>
  );
}
