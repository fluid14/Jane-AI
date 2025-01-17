import React from 'react';
import * as styles from './MessageInput.module.sass';
import { useContext, useRef } from 'react';
import { MessageContext } from '../../../../../../context/messageContext';
import { ActionsContext } from '../../../../../../context/actionsContext';

export const MessageInput = () => {
  const { request: brainRequest, message, setMessageText } = useContext(MessageContext);
  const { actionsListState, toggleActionsList } = useContext(ActionsContext);

  const sendButtonRef = useRef();
  const inputRef = useRef();

  const handleChange = ({ target: { value } }) => setMessageText(value);

  const handleSend = async () => {
    if (actionsListState) toggleActionsList();
    sendButtonRef.current.disabled = true;
    inputRef.current.disabled = true;
    setMessageText('');
    await brainRequest(message).then(() => {
      sendButtonRef.current.disabled = false;
      inputRef.current.disabled = false;
    });
  };

  const handleKeypress = (e) => {
    if (e.charCode === 13) {
      if (!e.shiftKey) {
        handleSend();
      }
    }
  };

  return (
    <div className={styles.inputWrap}>
      <div className={styles.autoGrowInput}>
        <textarea
          className={styles.textarea}
          rows='1'
          value={message}
          onChange={handleChange}
          onKeyPress={handleKeypress}
          ref={inputRef}
          placeholder={'Type a message...'}
        />
        <span className={styles.text}>{message}</span>
      </div>
      <button className={styles.button} onClick={handleSend} ref={sendButtonRef} />
    </div>
  );
};
