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
      <section>
        <h1>Pokemons</h1>
        <p>Welcome {name}!</p>
        <SearchMetod pokemonsTypes={pokemonsTypes} setPokemons={setPokemons} setPage={setPage} />
        <Link to="/config">{<IoMdCog />}</Link>
        <ul className="pokemons-list">
          {
            paginatedCharacters.map(pokemon => (
              <li key={pokemon.url ? pokemon.url : pokemon.pokemon.url} className="pokemon-column">
                <PokemonInfo url={pokemon.url ? pokemon.url : pokemon.pokemon.url} />
              </li>
            ))
          }
        </ul>
      </section>
      <div>
        <ButtonsPreNext 
          page={page} 
          totalPages={totalPages}
          setPage={setPage}
          length={pokemons.length}
        />
      </div>
    </>
   );
}
 
export default Pokemons;