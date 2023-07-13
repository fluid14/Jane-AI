import React, { useContext, useEffect } from 'react';
import { Conversation } from '../components/Dashboard/components/Conversation/Conversation';
import { ActionsList } from '../components/Dashboard/components/ActionsList/ActionsList';
import { ActionsContext } from '../context/actionsContext';
import { useShortcuts } from '../hooks/useShortcuts';
import { move_window, Position } from 'tauri-plugin-positioner-api';

export default function Dashboard() {
  const { actions, getActions } = useContext(ActionsContext);
  const { initShortcuts } = useShortcuts();

  useEffect(() => {
    initShortcuts();
    move_window(Position.TopRight);
  }, [actions]);

  return (
    <>
      <ActionsList />
      <Conversation />
    </>
  );
}
