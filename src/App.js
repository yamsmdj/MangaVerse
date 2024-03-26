import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Produits from "./pages/Produit";
import Wrapper from "./components/wrapper";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Accueil />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
