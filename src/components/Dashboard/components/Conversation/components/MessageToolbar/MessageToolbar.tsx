import React from 'react';
import * as styles from './MessageToolbar.module.sass';
import { useContext } from 'react';
import { MessageContext } from '@/context/messageContext';
import cs from 'classnames';
import { ActionsContext } from '@/context/actionsContext';

export const MessageToolbar = ({ children }) => {
  const { usedTokens, resetConversation } = useContext(MessageContext);
  const { toggleActionsList } = useContext(ActionsContext);

  const handleReset = () => resetConversation();

  return (
    <div className={styles.messageToolbar}>
      <button
        className={cs(styles.button, styles.action)}
        type='button'
        onClick={toggleActionsList}
      >
        /...
      </button>
      {children}
      <div className={styles.bottomWrap}>
        <button className={styles.button} type='button' onClick={handleReset}>
          Reset conversation
        </button>
        <p className={styles.tokenCounter}>{usedTokens} / 8192</p>
      </div>
    </div>
  );
};
