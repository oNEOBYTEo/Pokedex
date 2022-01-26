import { useSelector } from 'react-redux';
import AxiosRequest from './AxiosRequest';
import PokemonInfo from "./PokemonInfo";
import SearchMetod from './SearchMetod';
import Senttings from './Settings';
import ButtonsPreNext from './ButtonsPreNext'
import { Link } from 'react-router-dom';
import { IoMdCog } from "react-icons/io"; 

const Pokemons = () => {
  const name = useSelector((state) => state.name)

  const [setPokemons, pokemons, pokemonsTypes] = AxiosRequest()

  const [setPage, paginatedCharacters, totalPages, page] = Senttings(pokemons)
 

  return ( 
    <>
      <section className="pokemons-container">
        <div className="pokemons-header">
          <h1 className="header-item">Pokemons</h1>
          <p className="header-item">Welcome {name}!</p>
          <SearchMetod pokemonsTypes={pokemonsTypes} setPokemons={setPokemons} setPage={setPage} className="header-item" />
          <Link to="/config" className="config" >{<IoMdCog />}</Link>
        </div>
        <ul className="pokemons-list">

          {
            paginatedCharacters.map(pokemon => (
              <li key={pokemon.url ? pokemon.url : pokemon.pokemon.url} className="pokemon">
                <PokemonInfo url={pokemon.url ? pokemon.url : pokemon.pokemon.url}/>
              </li>
            ))
          }
        </ul>
        <div className="pokemons-buttons">
          <ButtonsPreNext 
            page={page} 
            totalPages={totalPages}
            setPage={setPage}
            length={pokemons.length}
          />
        </div>
      </section>
    </>
   );
}
 
export default Pokemons;