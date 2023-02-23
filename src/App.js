import Home from "./pages/Home";
import Sucess from "./pages/Success";
import { NavTitle } from "./styles/Navbar";
import PhillipLogo from "../src/img/PhillipLogo.png";
import KomIgjen from "./pages/Komigjen";
import { ImageLogo } from "./styles/Styles";

function App() {
  return (
    <div>
      <ImageLogo src={PhillipLogo} alt="logo" />
      <NavTitle>Phillips Karriere</NavTitle>
      <Home />
      <Sucess />
      <KomIgjen />
    </div>
  );
}

export default App;
