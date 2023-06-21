import React from 'react';
import * as styles from './MessageToolbar.module.sass';
import { useContext } from 'react';
import { MessageContext } from '../../../../context/messageContext.jsx';

export const MessageToolbar = () => {
  const { usedTokens, resetConversation } = useContext(MessageContext);

  const handleReset = () => resetConversation();

  return (
    <div className={styles.messageToolbar}>
      <button className={styles.reset} type='button' onClick={handleReset}>
        Reset conversation
      </button>
      <p className={styles.tokenCounter}>{usedTokens}/8192</p>
    </div>
  );
};
