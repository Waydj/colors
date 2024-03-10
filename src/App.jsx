import { Route, Routes, useParams } from "react-router-dom";
import { PaletteList } from "./PaletteList";
import { Palette } from "./Palette";
import { SingleColorPalette } from "./SingleColorPalette";
import { generatePalette } from "./colorHelpers";
import seedColors from "./seedColors";

const findPalette = (id) => {
  return seedColors.find((palette) => palette.id === id);
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

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PaletteList palettes={seedColors} />} />
      <Route path="/palette/:id" element={<PaletteComponent />} />
      <Route
        path="/palette/:paletteId/:colorId"
        element={<SinglePaletteComponent />}
      />
    </Routes>
  );
};

export default App;
