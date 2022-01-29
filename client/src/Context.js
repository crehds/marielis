import React, { createContext, useContext, useReducer } from 'react';

const Context = createContext();

let initialState = {
  home: 'Products'
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_HOME':
      return { home: action.payload };
    default:
      console.log(state);
      return state;
  }
};

export const Provider = ({ children }) => (
  <Context.Provider value={useReducer(reducer, initialState)}>
    {children}
  </Context.Provider>
);

export const useStateValue = () => useContext(Context);
