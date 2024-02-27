import "./MiniPalette.css";

export const MiniPalette = ({ palette }) => {
  console.log(palette);

  if (!palette) {
    return null;
  }

  return (
    <div className="root">
      <div className="colors">
        <h5 className="title">
          {palette.paletteName} <span className="emoji">{palette.emoji}</span>
        </h5>
      </div>
    </div>
  );
};
