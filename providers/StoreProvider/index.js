import React, { createContext, useContext, useReducer } from 'react';

const StoreContext = createContext({});

export function useStoreValue() {
  return useContext(StoreContext);
}

export default function StoreProvider({ children, initialState, reducer }) {
  return <StoreContext.Provider value={useReducer(reducer, initialState)}>{children}</StoreContext.Provider>;
}
