// import { MouseEventHandler, useContext } from 'react';
import { MouseEventHandler } from 'react';
import Button from '../shared/button';
import ColorChangeSwatch from '../shared/color-change-swatch';
// import { ColorContext } from '../../contexts/colorContext';
import { useContext } from '../../contexts/context';

type SavedColorProps = {
  name: string;
  hexColor: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onRemove?: () => void;
};

const SavedColor = ({ name, hexColor, onClick, onRemove }: SavedColorProps) => {
  const { dispatch } = useContext();

  return (
    <article className="flex place-content-between items-center gap-2">
      <ColorChangeSwatch
        hexColor={hexColor}
        onClick={(e) => {
          e.preventDefault();
          dispatch({
            type: 'update-hex-color',
            payload: { hexColor },
          });
        }}
      />
      <h3 className="whitespace-nowrap text-sm">{name}</h3>
      <Button variant="destructive" size="small" onClick={onRemove}>
        Remove
      </Button>
    </article>
  );
};

export default SavedColor;
