import React from 'react';
import { ActionsWrap } from '@/components/Dashboard/components/Actions/ActionsWrap/AtionsWrap';
import { Conversation } from '@/components/Dashboard/components/Conversation/Conversation';
import { MessageContextProvider } from '@/components/Dashboard/context/messageContext';

export default function Dashboard() {
  return (
    <>
      <MessageContextProvider>
        {/*<ActionsWrap />*/}
        <Conversation />
      </MessageContextProvider>
    </>
  );
}
