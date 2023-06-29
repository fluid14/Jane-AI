import React from 'react';
import { createContext, useState } from 'react';
import { useAxios } from '@/hooks/useAxios';
import routes from '../routes.json';

const MessageContext = createContext(null);

const MessageContextProvider = ({ children }) => {
  const [apiService, apiService2] = useAxios();
  const [messages, setMessages] = useState([]);
  const [usedTokens, setUsedTokens] = useState(0);

  const request = async (message) => {
    setMessages((prev) => [...prev, { text: message, isQuestion: true }]);
    setTimeout(
      () => setMessages((prev) => [...prev, { text: "I'm thinking", isQuestion: false }]),
      1000,
    );
    await apiService2
      .post(routes.brain, { query: message }, {})
      .then(({ data: { answer, tokens } }) => {
        setMessages((prev) => prev.slice(0, -1));
        setMessages((prev) => [...prev, { text: answer, isQuestion: false }]);
        if (tokens) setUsedTokens(() => tokens);
      });
  };

  const resetConversation = async () => {
    await apiService2.post(routes.resetConversation, {}, {}).then((props) => {
      setMessages([]);
      setUsedTokens(0);
    });
  };

  return (
    <MessageContext.Provider value={{ messages, request, usedTokens, resetConversation }}>
      {children}
    </MessageContext.Provider>
  );
};

export { MessageContextProvider, MessageContext };
