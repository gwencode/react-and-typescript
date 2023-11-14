import { rgb } from 'color-convert';

// type HexColor = `#${string}`;

type colorState = {
  hexColor: string
}

export const initialState: colorState = {
  hexColor: "#BADA55"
}

type UpdateHexColor = {
  type: 'update-hex-color';
  payload: colorState
}

type UpdateBtnColor = {
  type: 'update-btn-color';
  payload: colorState
}

type UpdateRGBColor = {
  type: 'update-rgb-color';
  payload: { rgb: [number, number, number]}
}

export type UpdateColorActions = UpdateHexColor | UpdateRGBColor | UpdateBtnColor

export const colorReducer = (
  state: colorState = initialState,
  action: UpdateColorActions
): colorState => {
  switch (action.type) {
    case 'update-hex-color': {
      const { hexColor } = action.payload;
      return {...state, hexColor };
    }
    case 'update-rgb-color': {
      const hexColor = `#${rgb.hex(action.payload.rgb)}`;
      return {...state, hexColor };
    }
    case 'update-btn-color': {
      const { hexColor } = action.payload;
      return {...state, hexColor };
    }
    default:
      return state;
  }
}
