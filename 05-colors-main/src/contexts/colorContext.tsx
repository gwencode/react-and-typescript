import { createContext, Dispatch, useReducer, PropsWithChildren } from 'react';
import {
  colorReducer,
  initialState,
  UpdateColorActions,
} from '../services/color-reducer';

type ColorContextState = {
  hexColor: string;
  dispatch: Dispatch<UpdateColorActions>;
};

export const ColorContext = createContext<ColorContextState>({
  hexColor: '#FFADEF',
} as ColorContextState);

export const ColorProvider = ({ children }: PropsWithChildren) => {
  const [{ hexColor }, dispatch] = useReducer(colorReducer, initialState);

  return (
    <ColorContext.Provider value={{ hexColor, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
};
