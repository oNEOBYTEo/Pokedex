import { HashRouter, Route, Routes } from "react-router-dom";
import Pokemons from "././components/Pokemons"
import Config from "./components/Config";
import NameInput from "./components/NameInput";
import PokemonDetail from "./components/PokemonDetail";
import ProtectedRoutes from "./components/ProctectedRoutes";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<NameInput />} />
        <Route element={<ProtectedRoutes/>} >
          <Route path="/pokedex" element={<Pokemons />} />
          <Route path="/pokedex/:id" element={<PokemonDetail />} />
          <Route path="/config" element={<Config />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
