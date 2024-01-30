import { Palette } from "./Palette";
import seedColors from "./seedColors";

const App = () => {
  return <Palette {...seedColors[4]} />;
};

export default App;
