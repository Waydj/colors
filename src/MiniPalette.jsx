import "./MiniPalette.css";

export const MiniPalette = ({ palette }) => {
  console.log(palette);

  if (!palette) {
    return null;
  }

  return (
    <div className="mini-palette">
      <div className="mini-palette-colors">
        <h5 className="mini-palette-title">
          {palette.paletteName} <span className="mini-palette-emoji">{palette.emoji}</span>
        </h5>
      </div>
    </div>
  );
};
