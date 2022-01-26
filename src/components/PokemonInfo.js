import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CheckImage from './CheckImage';
import CheckColor from './CheckColor';
import pokeball from '../images/pokeball.png'

const PokemonsInfo = ({url}) => {

  const [ pokemon, setPokemon ] = useState({})
  
  useEffect(() => {
    axios
    .get(url)
    .then(res => setPokemon(res.data))
  },[url]);

  const [imageDreamWord, imageHome, imageOficcialArtwork, imageDefault] = CheckImage(pokemon)

  console.log(typeof(CheckColor(pokemon)))
  
  return ( 
    <Link to={`/pokedex/${pokemon.id}`} className='pokemon-card' style={{background: `${CheckColor(pokemon)}`}} >
      <img className='pokeball' src={pokeball} alt="pokeball"/>
      <img className='main-pokemon-images' src={imageDreamWord ? imageDreamWord : imageOficcialArtwork ? imageOficcialArtwork : imageHome ? imageHome : imageDefault } alt="Pokemon" />
      <ul className="pokemon-info">
        <li>Name: {pokemon.name}</li>
        <li>Principal Type: {pokemon.types?.[0]?.type?.name}</li>
        <li>HP: {pokemon.stats?.[0]?.base_stat}</li>
        <li>Attack: {pokemon.stats?.[1]?.base_stat}</li>
        <li>Defense {pokemon.stats?.[2]?.base_stat}</li>
        <li>Speed: {pokemon.stats?.[5]?.base_stat} </li>
      </ul>
    </Link>
   );
}
 
export default PokemonsInfo;