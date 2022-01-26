import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CheckImage from './CheckImage';
import CheckColor from './CheckColor';
import pokeball from '../images/pokeball.png'
import { useSelector } from 'react-redux';

const PokemonsInfo = ({url}) => {

  const [ pokemon, setPokemon ] = useState({})
  const isDark = useSelector(state => state.isDark)
  
  useEffect(() => {
    axios
    .get(url)
    .then(res => setPokemon(res.data))
  },[url]);

  const [imageDreamWord, imageHome, imageOficcialArtwork, imageDefault] = CheckImage(pokemon)

  const darkColor = "#292524"
  
  return ( 
    <Link to={`/pokedex/${pokemon.id}`} className='pokemon-card' style={{background: `${isDark ? darkColor : CheckColor(pokemon)}`,color: `${isDark && "#fff"}`}} >
      <img 
      className='pokeball' 
      src={pokeball} alt="pokeball"/>
      <img 
      className='main-pokemon-images' 
      src={imageDreamWord ? imageDreamWord : imageOficcialArtwork ? imageOficcialArtwork : imageHome ? imageHome : imageDefault } 
      alt="Pokemon" />
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