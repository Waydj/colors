import { Route, Routes, useParams } from "react-router-dom";
import { PaletteList } from "./PaletteList";
import { Palette } from "./Palette";
import { SingleColorPalette } from "./SingleColorPalette";
import { NewPaletteForm } from "./NewPaletteForm";
import { generatePalette } from "./colorHelpers";
import seedColors from "./seedColors";
import { useState } from "react";

const App = () => {
  const [palettes, setPalettes] = useState(seedColors);

  const findPalette = (id) => {
    return palettes.find((palette) => palette.id === id);
  };

  const PaletteComponent = () => {
    const params = useParams();

    return <Palette palette={generatePalette(findPalette(params.id))} />;
  };

  const SinglePaletteComponent = () => {
    const params = useParams();

    return (
      <SingleColorPalette
        color={params.colorId}
        palette={generatePalette(findPalette(params.paletteId))}
      />
    );
  };

  const savePalette = (newPalette) => {
    setPalettes((prev) => [...prev, newPalette]);
  };

  return (
    <Routes>
      <Route path="/" element={<PaletteList palettes={palettes} />} />
      <Route
        path="/palette/new"
        element={<NewPaletteForm savePalette={savePalette} />}
      />
      <Route path="/palette/:id" element={<PaletteComponent />} />
      <Route
        path="/palette/:paletteId/:colorId"
        element={<SinglePaletteComponent />}
      />
    </Routes>
  );
};

export default App;
