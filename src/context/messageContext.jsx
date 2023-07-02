import React, { useContext } from 'react';
import { createContext, useState } from 'react';
import { useAxios } from '../hooks/useAxios';
import routes from '../routes.json';
import { ActionsContext } from './actionsContext';

const MessageContext = createContext(null);

const MessageContextProvider = ({ children }) => {
  const { apiService2 } = useAxios();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [usedTokens, setUsedTokens] = useState(0);
  const { activeAction, setActiveAction } = useContext(ActionsContext);

  const request = async (message) => {
    let query = null;
    let mappedMessage = null;
    if (activeAction) {
      mappedMessage = `${activeAction.title}: ${message}`;
      query = `
      ${activeAction.prompt}
      
      query
      \`\`\`
      ${message}
      \`\`\` 
      `;
    } else {
      query = message;
      mappedMessage = message;
    }

    setMessages((prev) => [...prev, { text: mappedMessage, isQuestion: true }]);
    setTimeout(
      () => setMessages((prev) => [...prev, { text: "I'm thinking", isQuestion: false }]),
      1000,
    );

    await apiService2.post(routes.brain, { query }, {}).then(({ data: { answer, tokens } }) => {
      setMessages((prev) => prev.slice(0, -1));
      setMessages((prev) => [...prev, { text: answer, isQuestion: false }]);
      if (tokens) setUsedTokens(() => tokens);
      setActiveAction(null);
    });
  };

  const resetConversation = async () => {
    await apiService2.post(routes.resetConversation, {}, {}).then((props) => {
      setMessages([]);
      setUsedTokens(0);
    });
  };

  const setMessageText = (text) => setMessage(() => text);

  return (
    <MessageContext.Provider
      value={{ message, setMessageText, messages, request, usedTokens, resetConversation }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export { MessageContextProvider, MessageContext };
