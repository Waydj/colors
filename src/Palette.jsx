import { ColorBox } from "./ColorBox";
import './Palette.css'

export const Palette = ({ colors }) => {
  const colorBoxes = colors.map((color) => (
    <ColorBox color={color} key={color.name} />
  ));

  return (
    <div className="palette">
      <div className="palette-colors">{colorBoxes}</div>
    </div>
  );
};
