import React, {createContext, useReducer} from 'react';
import authInitState from './initialStates/authInitState';
import contactsInitState from './initialStates/contactsInitState';
import authReducer from './reducers/authReducer';
import contactsReducer from './reducers/contactsReducer';

export const GlobalContext = createContext({});

export default function GlobalProvider({children}) {
  const [authState, authDispatch] = useReducer(authReducer, authInitState);
  const [contactsState, contactsDispatch] = useReducer(
    contactsReducer,
    contactsInitState,
  );

  return (
    <GlobalContext.Provider
      value={{authState, authDispatch, contactsState, contactsDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
}
