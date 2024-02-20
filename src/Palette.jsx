import { useState } from "react";
import { Navbar } from "./Navbar";
import { ColorBox } from "./ColorBox";
import "./Palette.css";

export const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState("hex");

  const changeFormat = (format) => {
    setFormat(format.value);
  };

  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox color={color} background={color[format]} key={color.name} />
  ));

  return (
    <div className="palette">
      <Navbar level={level} setLevel={setLevel} changeFormat={changeFormat} />
      <div className="palette-colors">{colorBoxes}</div>
    </div>
  );
};
