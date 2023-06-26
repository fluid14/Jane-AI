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

  const addAction = async (fields) =>
    await apiService.post(routes.actions, { fields }, {}).then(() => getActions());

  const updateAction = async (id, fields) => {
    await apiService.put(routes.actions, { id, fields }, {}).then(() => getActions());
  };

  const deleteActions = async (record) =>
    await apiService.delete(routes.actions, { params: { record } }).then(() => getActions());

  return (
    <SettingsContext.Provider
      value={{ actions, getActions, addAction, deleteActions, updateAction }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContextProvider, SettingsContext };
