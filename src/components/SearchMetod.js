import axios from "axios";
import React, { useState} from 'react';
import { useNavigate } from "react-router-dom";

const SearchMetod = ({pokemonsTypes, setPokemons, setPage}) => {

  const navigate = useNavigate()
  const [ pokemonSearched, setPokemonSearched ] = useState("")
  
  const filterPokemons = (url) => {
    axios
      .get(url)
      .then(res => setPokemons(res.data.pokemon))
    setPage(1)
  }
  const search = () => navigate(`/pokedex/${pokemonSearched.toLowerCase()}`);
  
  const enterPress = (e) => {
    if(e.charCode === 13){
      search()
    }
  }
  

  return ( 
    <>
      <select onChange={e => filterPokemons(e.target.value)} >
        {
          pokemonsTypes.map(pokemonType => (
            <option key={pokemonType.url} value={pokemonType.url}>
              {pokemonType.name}
            </option>
          ))
        }
      </select>
      <input
      type="text"
      value={pokemonSearched}
      onChange={(e) => setPokemonSearched(e.target.value)}
      pattern="[a-zA-Z0-9]{1,25}"
      placeholder='Name: "Pikachu" or ID: "25"'
      onKeyPress={e => enterPress(e)}
      />
      <button onClick={search} >Submit</button>
    </>
   );
}
 
export default SearchMetod;