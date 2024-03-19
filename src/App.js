
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./components/pages/Accueil";
import Produits from "./components/pages/Produits";
import Wrapper from "./components/wrapper";
import Contact from "./components/pages/Contact";


function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
