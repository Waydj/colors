import { Route, Routes, useParams } from "react-router-dom";
import { PaletteList } from "./PaletteList";
import { Palette } from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

const RouteComponent = () => {
  const params = useParams();

  const findPalette = (id) => {
    return seedColors.find((palette) => palette.id === id);
  };

  return <Palette palette={generatePalette(findPalette(params.id))} />;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PaletteList palettes={seedColors} />} />
      <Route path="/palette/:id" element={<RouteComponent />} />
    </Routes>
  );
};

export default App;
