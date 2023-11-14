import { Dispatch } from 'react';
import ColorChangeSwatch from '../shared/color-change-swatch';
import { UpdateColorActions } from '../../services/color-reducer';

type RelatedColorPaletteProps = {
  title: string;
  hexColors: string[];
  dispatch: Dispatch<UpdateColorActions>;
};

const RelatedColorPalette = ({
  title,
  hexColors,
  dispatch,
}: RelatedColorPaletteProps) => {
  const updateHexColor = (hexColor: string) => {
    dispatch({
      type: 'update-btn-color',
      payload: { hexColor },
    });
  };

  return (
    <section>
      <h3 className="mb-4">{title}</h3>
      <div className="grid grid-cols-3 gap-2">
        {hexColors.map((hexColor) => {
          return (
            <ColorChangeSwatch
              key={hexColor}
              hexColor={hexColor}
              className="h-full w-full"
              onClick={(e) => {
                e.preventDefault();
                updateHexColor(hexColor);
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RelatedColorPalette;
