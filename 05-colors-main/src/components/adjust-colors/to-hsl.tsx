import { hex } from 'color-convert';
import LabeledInput from '../shared/labeled-input';
import { Dispatch } from 'react';
import { UpdateColorActions } from '../../services/color-reducer';

type HexToHSLProps = {
  hexColor: string;
  dispatch: Dispatch<UpdateColorActions>;
};

const HexToHSL = ({ hexColor, dispatch }: HexToHSLProps) => {
  const color = hex.hsl(hexColor);
  const [h, s, l] = color;

  const updateHSL = ({ hue = h, satur = s, light = l }) => {
    dispatch({
      type: 'update-hsl-color',
      payload: { hsl: [hue, satur, light] },
    });
  };

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput
        label="H"
        type="number"
        value={h}
        onChange={(e) => updateHSL({ hue: e.target.valueAsNumber })}
      />
      <LabeledInput
        label="S"
        type="number"
        value={s}
        onChange={(e) => updateHSL({ satur: e.target.valueAsNumber })}
      />
      <LabeledInput
        label="L"
        type="number"
        value={l}
        onChange={(e) => updateHSL({ light: e.target.valueAsNumber })}
      />
    </section>
  );
};

export default HexToHSL;
