import React from 'react';
import * as styles from './MessageInput.module.sass';
import { useContext, useRef, useState } from 'react';
import { MessageContext } from '../../../../context/messageContext.jsx';

export const MessageInput = () => {
  const [message, setMessage] = useState('');
  const { request: brainRequest } = useContext(MessageContext);

  const sendButtonRef = useRef();
  const inputRef = useRef();

  const handleChange = ({ target: { value } }) => setMessage(value);

  const handleSend = async () => {
    sendButtonRef.current.disabled = true;
    inputRef.current.disabled = true;
    setMessage('');
    await brainRequest(message).then(() => {
      sendButtonRef.current.disabled = false;
      inputRef.current.disabled = false;
    });
  };

  const handleKeypress = (e) => {
    if (e.charCode === 13) {
      handleSend();
    }
  };

  return (
    <div className={styles.inputWrap}>
      <input
        type='text'
        className={styles.input}
        placeholder='Message'
        value={message}
        onChange={handleChange}
        onKeyPress={handleKeypress}
        ref={inputRef}
      />
      <button className={styles.button} onClick={handleSend} ref={sendButtonRef} />
    </div>
  );
};
