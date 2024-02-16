import { useState } from "react";
import Slider from "rc-slider";
import { ColorBox } from "./ColorBox";
import "rc-slider/assets/index.css";
import "./Palette.css";

export const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500);

  const colorBoxes = palette.colors[level].map((color) => (
    <ColorBox color={color} key={color.name} />
  ));

  return (
    <div className="palette">
      <div className="slider">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          onChange={setLevel}
          step={100}
        />
      </div>
      <div className="palette-colors">{colorBoxes}</div>
    </div>
  );
};
