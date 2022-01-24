import { useState } from 'react';
import { useSelector } from 'react-redux';


const Senttings = (pokemons) => {

  const [page, setPage] = useState(1);
  const pokemonsPerPage = useSelector(state => state.pokemonsPerPage)
  const lastIndex = page * pokemonsPerPage;
  const firstIndex = lastIndex - pokemonsPerPage;

  const paginatedCharacters = pokemons.slice(firstIndex, lastIndex)

  const totalPages = Math.ceil(pokemons.length / pokemonsPerPage);
  
  return [setPage, paginatedCharacters, totalPages, page];
}
 
export default Senttings;