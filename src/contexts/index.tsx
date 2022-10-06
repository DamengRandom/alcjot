import type { ReactNode } from 'react';
import { createContext, useState } from 'react';

import type { IStateProps } from '@/types/common';

export const ContextStates = createContext<null | {
  states: any;
  setStates: any;
}>(null);

export default function AlcjotContexts({ children }: { children: ReactNode }) {
  const [states, setStates] = useState<IStateProps>({
    isDarkMode: false,
  });

  return (
    <ContextStates.Provider value={{ states, setStates }}>
      {children}
    </ContextStates.Provider>
  );
}
