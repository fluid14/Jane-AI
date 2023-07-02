import React from 'react';
import * as styles from './Conversation.module.sass';
import { Messages } from './components/Messages/Messages';
import { MessageInput } from './components/MessageInput/MessageInput';
import { MessageToolbar } from './components/MessageToolbar/MessageToolbar';

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
