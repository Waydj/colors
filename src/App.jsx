import { Palette } from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

const App = () => {
  return <Palette palette={generatePalette(seedColors[4])} />;
};

export default App;
