import { useState } from "react";
import { ColorBox } from "./ColorBox";
import "./Palette.css";
import { Navbar } from "./Navbar";

export const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);

  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox color={color} key={color.name} />
  ));

  return (
    <div className="palette">
      <Navbar level={level} setLevel={setLevel} />
      <div className="palette-colors">{colorBoxes}</div>
    </div>
  );
};
