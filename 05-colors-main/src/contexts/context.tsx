// Own Create Context and using Generics
import { Dispatch, useReducer, PropsWithChildren } from 'react';

import {
  colorReducer,
  initialState,
  UpdateColorActions,
} from '../services/color-reducer';

import { createContext } from './createContext';

type ColorContextState = {
  hexColor: string;
  dispatch: Dispatch<UpdateColorActions>;
};

export const [useColorContext, ContextProvider] =
  createContext<ColorContextState>();

export const useContext = useColorContext;

export const ColorProvider = ({ children }: PropsWithChildren) => {
  const [{ hexColor }, dispatch] = useReducer(colorReducer, initialState);

  return (
    <ContextProvider value={{ hexColor, dispatch }}>{children}</ContextProvider>
  );
};
