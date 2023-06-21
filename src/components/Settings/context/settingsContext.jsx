import React from 'react';
import { createContext, useState } from 'react';
import { apiService } from '@/services/api.service';
import routes from '../../../routes.json';

const SettingsContext = createContext(null);

const SettingsContextProvider = ({ children }) => {
  const [actions, setActions] = useState([]);

  const getActions = async () => {
    await apiService.get(routes.actions).then(({ data }) => setActions(() => data));
  };

  const addActions = async (fields) => {
    await apiService.post(routes.addActions, fields, {});
  };

  return (
    <SettingsContext.Provider value={{ actions, getActions, addActions }}>
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContextProvider, SettingsContext };
