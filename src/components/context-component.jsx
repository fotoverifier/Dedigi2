// src/context/state.js
'use client';
import { createContext, useContext,useState } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
    const [globalImage, setGlobalImage] = useState();

  return (
    <AppContext.Provider value={{globalImage, setGlobalImage}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}