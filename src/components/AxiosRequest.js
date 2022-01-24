import axios from "axios";
import { useState, useEffect } from 'react';

const AxiosRequest = () => {
  const [ pokemons, setPokemons ] = useState([]);

  const [ pokemonsTypes, setPokemonsTypes ] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118")
      .then(res => setPokemons(res.data.results))
  }, [])

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then(res => setPokemonsTypes(res.data.results))
    
  },[])

  return [setPokemons, pokemons, pokemonsTypes];
}
 
export default AxiosRequest;