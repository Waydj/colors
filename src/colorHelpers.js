import chroma from "chroma-js";

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export const generatePalette = (colors) => {
  let newPalette = {
    paletteName: colors.paletteName,
    id: colors.id,
    emoji: colors.emoji,
    colors: {},
  };

  for (let level of levels) {
    newPalette.colors[level] = [];
  }

  for (let color of colors.colors) {
    let scale = getScale(color.color, 10).reverse();

    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)"),
      });
    }
  }

  return newPalette;
};

const getRange = (hexColor) => {
  const end = "#fff";
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
};

const getScale = (color, numberOfColors) => {
  return chroma.scale(getRange(color)).mode("lab").colors(numberOfColors);
};
