import { rgb, hsl } from 'color-convert';

// type HexColor = `#${string}`;

export type ColorState = {
  hexColor: string
}

export const initialState: ColorState = {
  hexColor: "#BADA55"
}

type UpdateHexColor = {
  type: 'update-hex-color';
  payload: ColorState
}

type UpdateBtnColor = {
  type: 'update-btn-color';
  payload: ColorState
}

type UpdateRGBColor = {
  type: 'update-rgb-color';
  payload: { rgb: [number, number, number]}
}

type UpdateHSLColor = {
  type: 'update-hsl-color';
  payload: { hsl: [number, number, number]}
}

export type UpdateColorActions =
  | UpdateHexColor
  | UpdateRGBColor
  | UpdateBtnColor
  | UpdateHSLColor

export const colorReducer = (
  state: ColorState = initialState,
  action: UpdateColorActions
): ColorState => {
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
    case 'update-hsl-color': {
      const hexColor = `#${hsl.hex(action.payload.hsl)}`;
      return {...state, hexColor };
    }
    default:
      return state;
  }
}
