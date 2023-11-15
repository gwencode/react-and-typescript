// import { useReducer, useState, useContext } from 'react';
// import { useContext } from 'react';
import { useContext } from '../contexts/context';
import SavedColors from './saved-colors';
import RelatedColors from './related-colors';
import AdjustColors from './adjust-colors';
import ColorPicker from './color-picker';
// import { colorReducer, initialState } from '../services/color-reducer';
// import { ColorContext } from '../contexts/colorContext';

const Application = () => {
  // const [hexColor, setHexColor] = useState('#e56e24');
  // const [{ hexColor }, dispatch] = useReducer(colorReducer, initialState);
  const { hexColor, dispatch } = useContext();

  return (
    <div className="mx-auto grid max-w-3xl grid-cols-1 gap-8 p-8 pb-40 dark:bg-slate-900 dark:text-white sm:grid-cols-2">
      <ColorPicker
        hexColor={hexColor}
        onChange={(e) =>
          dispatch({
            type: 'update-hex-color',
            payload: { hexColor: e.target.value },
          })
        }
      />
      <AdjustColors dispatch={dispatch} hexColor={hexColor} />
      <RelatedColors dispatch={dispatch} hexColor={hexColor} />
      <SavedColors hexColor={hexColor} />
    </div>
  );
};

export default Application;
