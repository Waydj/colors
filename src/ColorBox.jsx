import "./ColorBox.css";

export const ColorBox = ({ color }) => {
  const { name, color: background } = color;

  return (
    <div style={{ background }} className="color-box">
      <div className="copy-container">
        <div className="box-content">
          <span>{name}</span>
        </div>
        <button className="copy-button">Copy</button>
      </div>
      <span className="see-more">more</span>
    </div>
  );
};
