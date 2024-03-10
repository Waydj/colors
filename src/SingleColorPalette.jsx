import { ColorBox } from "./ColorBox";

export const SingleColorPalette = ({ palette, color }) => {
  const gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }

    return shades.slice(1);
  };

  const shades = gatherShades(palette, color);

  const colorBoxes = shades.map((shade) => (
    <ColorBox
      key={shade.name}
      color={shade}
      background={shade.hex}
      noLink={true}
    />
  ));

  return (
    <div className="palette">
      <h1>palette</h1>
      <div className="palette-colors">{colorBoxes}</div>
    </div>
  );
};
