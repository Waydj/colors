import { useNavigate } from "react-router-dom";
import { MiniPalette } from "./MiniPalette";
import "./PaletteList.css";

export const PaletteList = ({ palettes }) => {
  const navigate = useNavigate();

  const goToPalette = (id) => navigate(`/palette/${id}`);

  return (
    <div className="palette-list">
      <div className="palette-list-container">
        <nav className="palette-list-nav">
          <h1>PaletteList</h1>
        </nav>
        <div className="palettes-list">
          {palettes.map((palette) => (
            <MiniPalette
              key={palette.id}
              palette={palette}
              handleClick={goToPalette}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
