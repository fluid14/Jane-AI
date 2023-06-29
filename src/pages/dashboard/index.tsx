import React from 'react';
import { Conversation } from '@/components/Dashboard/components/Conversation/Conversation';
import { MessageContextProvider } from '@/context/messageContext';
import { ActionsList } from '@/components/Dashboard/components/ActionsList/ActionsList';
import { ActionsContextProvider } from '@/context/actionsContext';

export default function Dashboard() {
  return (
    <>
      <ActionsContextProvider>
        <MessageContextProvider>
          <ActionsList />
          <Conversation />
        </MessageContextProvider>
      </ActionsContextProvider>
    </>
  );
}
