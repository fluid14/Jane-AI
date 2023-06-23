import React from 'react';
import { createContext, useState } from 'react';
import routes from '../../../routes.json';
import { useAxios } from '@/hooks/useAxios';

const SettingsContext = createContext(null);
const SettingsContextProvider = ({ children }) => {
  const [apiService] = useAxios();
  const [actions, setActions] = useState([]);

  const getActions = async () =>
    await apiService.get(routes.actions).then(({ data }) => setActions(() => data));

  const addActions = async (fields) => await apiService.post(routes.addActions, fields, {});

  const deleteActions = async (record) =>
    await apiService.delete(routes.actions, { params: { record } }).then(() => getActions());

  return (
    <SettingsContext.Provider value={{ actions, getActions, addActions, deleteActions }}>
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContextProvider, SettingsContext };
