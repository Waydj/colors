import { Link } from "react-router-dom";
import { MiniPalette } from "./MiniPalette";
import "./PaletteList.css";

export const PaletteList = ({ palettes }) => {
  return (
    <div className="palette-list">
      <div className="palette-list-container">
        <nav className="palette-list-nav">
          <h1>PaletteList</h1>
        </nav>
        <div className="palettes-list">
          {palettes.map((palette) => (
            <MiniPalette key={palette.id} palette={palette} />
            // <p key={palette.id}>
            //   <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
            // </p>
          ))}
        </div>
      </div>
    </div>
  );
};
