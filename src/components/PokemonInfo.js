import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CheckImage from './CheckImage';

const PokemonsInfo = ({url}) => {

  const [ pokemon, setPokemon ] = useState({})
  
  useEffect(() => {
    axios
    .get(url)
    .then(res => setPokemon(res.data))
    
  },[url]);

  const [imageDreamWord, imageHome, imageOficcialArtwork, imageDefault] = CheckImage(pokemon)
  
  return ( 
    <Link to={`/pokedex/${pokemon.id}`} className='pokemon-card' >
      {pokemon.name}
      <img src={imageDreamWord ? imageDreamWord : imageOficcialArtwork ? imageOficcialArtwork : imageHome ? imageHome : imageDefault } alt="Pokemon" />
    </Link>
   );
}
 
export default PokemonsInfo;