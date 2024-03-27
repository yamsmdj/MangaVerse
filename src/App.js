import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Produits from "./pages/Produits";
import Wrapper from "./components/wrapper";
import Contact from "./pages/Contact";
import MonProduit from "./pages/MonProduit";
import Connexion from "./pages/Connexion";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/produits" element={<Produits />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/monproduit/:id" element={<MonProduit />}></Route>
          <Route path="/connexion" element={<Connexion />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="*" element={<Accueil />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
