import React from 'react';
import * as style from './MessageToolbar.module.sass';
import { useContext } from 'react';
import { MessageContext } from '../../../../context/messageContext.jsx';

export const MessageToolbar = ({ children }) => {
  const { usedTokens, resetConversation } = useContext(MessageContext);

  const handleReset = () => resetConversation();

  return (
    <div className={style.messageToolbar}>
      <div className={style.topWrap}>
        <button className={style.button} type='button'>
          actions
        </button>
      </div>
      {children}
      <div className={style.bottomWrap}>
        <button className={style.button} type='button' onClick={handleReset}>
          Reset conversation
        </button>
        <p className={style.tokenCounter}>{usedTokens}/8192</p>
      </div>
    </div>
  );
};
