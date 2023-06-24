import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Cursos } from "./components/Cursos/Cursos";
import { Projetos } from "./components/Projetos/Projetos";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home id="home" />
      <Cursos id="cursos" />
      <Projetos/>
    </BrowserRouter>
  );
}

export default App;
