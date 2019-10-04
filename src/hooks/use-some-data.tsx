import React, { createContext, useContext, FC } from 'react';
import { assertContext } from '../utils/assert-context';

type Data = {
  /* some data in the real code */
};

type ContextValue = Data | null;

// pass undefined as any, because we run assertContext at runtime
const SomeDataContext = createContext<ContextValue>(undefined as any);

export function useSomeData() {
  const context = useContext(SomeDataContext);
  assertContext(context, 'SomeData');
  return context;
}

export const SomeDataProvider: FC = ({ children }) => {
  // try to get data...
  // ...but for this demo always pass null
  return (
    <SomeDataContext.Provider value={null}>{children}</SomeDataContext.Provider>
  );
};
