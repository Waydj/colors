import { ColorBox } from "./ColorBox";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Palette.css";
import { useState } from "react";

export const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);

  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox color={color} key={color.name} />
  ));

  return (
    <div className="palette">
      <Slider
        defaultValue={level}
        min={100}
        max={900}
        onChange={setLevel}
        step={100}
      />
      <div className="palette-colors">{colorBoxes}</div>
    </div>
  );
};
