import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ColorBox } from "./ColorBox";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const SingleColorPalette = ({ palette, color }) => {
  const [format, setFormat] = useState("hex");

  const changeFormat = (format) => {
    setFormat(format.value);
    toast.success("Format changed to " + format.value);
  };

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
      background={shade[format]}
      noLink={true}
    />
  ));

  return (
    <div className="single-color-palette palette">
      <Navbar changeFormat={changeFormat} noShowingAllColors={true} />
      <div className="palette-colors">
        {colorBoxes}
        <div className="go-back color-box">
          <Link to={`/palette/${palette.id}`} className="back-button">
            Go back
          </Link>
        </div>
      </div>
      <Footer palette={palette} />
    </div>
  );
};
