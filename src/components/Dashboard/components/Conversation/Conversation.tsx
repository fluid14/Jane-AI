import React from 'react';
import * as styles from './Conversation.module.sass';
import { Messages } from '@/components/Dashboard/components/Conversation/components/Messages/Messages';
import { MessageInput } from '@/components/Dashboard/components/Conversation/components/MessageInput/MessageInput';
import { MessageToolbar } from '@/components/Dashboard/components/Conversation/components/MessageToolbar/MessageToolbar';

export const Conversation = () => {
  return (
    <div className={styles.conversationWrap}>
      <Messages />
      <MessageToolbar>
        <MessageInput />
      </MessageToolbar>
    </div>
  );
};
