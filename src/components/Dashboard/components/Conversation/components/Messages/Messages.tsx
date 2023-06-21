import React from 'react';
import * as styles from './Messages.module.sass';
import { MessageContext } from '@/components/Dashboard/context/messageContext';
import { useContext } from 'react';
import cs from 'classnames';

export const Messages = () => {
  const { messages } = useContext(MessageContext);

  return (
    <div className={styles.messages}>
      {messages?.map(({ text, isQuestion }, index) => (
        <div className={cs(styles.messageCloud, { [styles.isQuestion]: isQuestion })} key={index}>
          {/*<MarkdownPreview className={styles.text} source={text} />*/}
          {text}
        </div>
      ))}
    </div>
  );
};
