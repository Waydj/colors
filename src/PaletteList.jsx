import { Link } from "react-router-dom";
import { MiniPalette } from "./MiniPalette";

export const PaletteList = ({ palettes }) => {
  return (
    <div>
      <MiniPalette />
      <h1>PaletteList</h1>
      {palettes.map((palette) => (
        <MiniPalette key={palette.id} palette={palette} />
        // <p key={palette.id}>
        //   <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
        // </p>
      ))}
    </div>
  );
};
