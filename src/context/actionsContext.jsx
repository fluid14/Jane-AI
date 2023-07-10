import React from 'react';
import { createContext, useState } from 'react';
import routes from '../routes.json';
import { useAxios } from '../hooks/useAxios';

const ActionsContext = createContext(null);
const ActionsContextProvider = ({ children }) => {
  const { apiService } = useAxios();
  const [actions, setActions] = useState(null);
  const [actionsListState, setActionsList] = useState(false);
  const [activeAction, _setActiveAction] = useState(null);

  const getActions = async () =>
    await apiService.get(routes.actions).then(({ data }) => setActions(() => data));

  const addAction = async (fields) => {
    fields.category = 'actions';
    await apiService.post(routes.actions, fields, {}).then(() => getActions());
  };

  const updateAction = async (id, fields) => {
    await apiService
      .put(routes.editAction.replace('{actionId}', id), fields, {})
      .then(() => getActions());
  };

  const deleteActions = async (id) =>
    await apiService.delete(routes.editAction.replace('{actionId}', id)).then(() => getActions());

  const toggleActionsList = () => setActionsList((prev) => !prev);

  const setActiveAction = (action) => _setActiveAction(() => action);

  return (
    <ActionsContext.Provider
      value={{
        actions,
        getActions,
        addAction,
        deleteActions,
        updateAction,
        actionsListState,
        toggleActionsList,
        activeAction,
        setActiveAction,
      }}
    >
      {children}
    </ActionsContext.Provider>
  );
};

export { ActionsContextProvider, ActionsContext };
