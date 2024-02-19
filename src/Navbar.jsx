import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Navbar.css";

export const Navbar = ({ level, setLevel }) => {
  return (
    <header className="navbar">
      <div className="logo">
        <a href="/">
          <h1>React Colors</h1>
        </a>
      </div>
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
    </header>
  );
};
