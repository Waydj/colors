import "./MiniPalette.css";

export const MiniPalette = ({ palette, handleClick }) => {
  if (!palette) {
    return null;
  }

  return (
    <div className="mini-palette" onClick={() => handleClick(palette.id)}>
      <div className="mini-palette-colors">
        {palette.colors.map((color) => (
          <div
            className="mini-palette-color"
            style={{ backgroundColor: color.color }}
            key={color.name}
            title={color.name}
            aria-label={color.name}
            role="button"
          ></div>
        ))}
      </div>
      <h5 className="mini-palette-title">
        {palette.paletteName}{" "}
        <span className="mini-palette-emoji">{palette.emoji}</span>
      </h5>
    </div>
  );
};
