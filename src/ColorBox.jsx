import './ColorBox.css'

export const ColorBox = ({ color }) => {
  return (
    <div style={{ background: color.color }} className="color-box">
      <span>{color.name}</span>
      <span>More</span>
    </div>
  );
};
