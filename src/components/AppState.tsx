import React, {createContext, useContext, useState } from 'react';

interface AppStateValue {
  cart: {
    items: {id: number; name: string; price: number}[];
  };
}

const defaultStateVlaue: AppStateValue = {
  cart: {
    items: [],
  }
};

export const AppStateContext = createContext(defaultStateVlaue);

export const AppSetStateContext = createContext<React.Dispatch<React.SetStateAction<AppStateValue>> | undefined>(undefined);

export const useSetState = () => {
  const setState = useContext(AppSetStateContext);
  if (!setState) {
    throw new Error('useSetState was called outside of the AppSetStateContext Provider');
  }
  return setState;
}

const AppStateProvider: React.FC = ({children}) => {
  const [state, setState] = useState(defaultStateVlaue);
  return (
    <AppStateContext.Provider value={state}>
      <AppSetStateContext.Provider value={setState}>
        {children}
      </AppSetStateContext.Provider>
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
