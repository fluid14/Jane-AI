import React from 'react';
import * as styles from './MessageToolbar.module.sass';
import { useContext } from 'react';
import { MessageContext } from '../../../../context/messageContext.jsx';

export const MessageToolbar = ({ children }) => {
  const { usedTokens, resetConversation } = useContext(MessageContext);

  const handleReset = () => resetConversation();

  return (
    <div className={styles.messageToolbar}>
      <div className={styles.topWrap}>
        <button className={styles.button} type='button'>
          actions
        </button>
      </div>
      {children}
      <div className={styles.bottomWrap}>
        <button className={styles.button} type='button' onClick={handleReset}>
          Reset conversation
        </button>
        <p className={styles.tokenCounter}>{usedTokens}/8192</p>
      </div>
    </div>
  );
};
