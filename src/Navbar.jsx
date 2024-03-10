import Slider from "rc-slider";
import Select from "react-select";
import "rc-slider/assets/index.css";
import "./Navbar.css";

const options = [
  { value: "hex", label: "Hex - #ffffff" },
  { value: "rgb", label: "RGB - rgb(255,255,255)" },
  { value: "rgba", label: "RGBA - rgba(255,255,255,1)" },
];

export const Navbar = ({
  level,
  setLevel,
  changeFormat,
  noShowingAllColors,
}) => {
  return (
    <header className="navbar">
      <div className="logo">
        <a href="/">
          <h1>React Colors</h1>
        </a>
      </div>
      {!noShowingAllColors && (
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className="slider">
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              onChange={setLevel}
              step={100}
            />
          </div>
        </div>
      )}
      <div className="select-container">
        <Select
          defaultValue={options[0]}
          onChange={changeFormat}
          options={options}
        />
      </div>
    </header>
  );
};
