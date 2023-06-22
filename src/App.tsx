import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home id="home" />
    </BrowserRouter>
  );
}

export default App;
