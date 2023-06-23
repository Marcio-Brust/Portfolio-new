import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Cursos } from "./components/Cursos/Cursos";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home id="home" />
      <Cursos id="cursos" />
    </BrowserRouter>
  );
}

export default App;
