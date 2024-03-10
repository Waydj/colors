import { Route, Routes, useParams } from "react-router-dom";
import { PaletteList } from "./PaletteList";
import { Palette } from "./Palette";
import { SingleColorPalette } from "./SingleColorPalette";
import { generatePalette } from "./colorHelpers";
import seedColors from "./seedColors";

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
      <Route
        path="/palette/:paletteId/:colorId"
        element={<SingleColorPalette />}
      />
    </Routes>
  );
};

export default App;
