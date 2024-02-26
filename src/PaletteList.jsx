import { Link } from "react-router-dom";

export const PaletteList = ({ palettes }) => {
  return (
    <div>
      <h1>PaletteList</h1>
      {palettes.map((palette) => (
        <p key={palette.id}>
          <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
        </p>
      ))}
    </div>
  );
};
