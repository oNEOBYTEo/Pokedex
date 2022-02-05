import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckImage from "./CheckImage";
import CheckColor from "./CheckColor";
import { useSelector } from "react-redux";

const PokemonDetail = () => {
  const { id } = useParams();
  const [isClose, setIsClose] = useState(true)
  const [pokemon, setPokemon] = useState({});
  const isDark = useSelector(state => state.isDark)
  
  useEffect(() => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => setPokemon(res.data));
  }, [id]);
  
  const [imageDreamWord, imageHome, imageOficcialArtwork, imageDefault] = CheckImage(pokemon)

  const moreInfo = () => setIsClose(!isClose)

  const darkColor = "#292524"

  return (
    <main style={{background: `${isDark ? darkColor : CheckColor(pokemon)}`}}>
      <article className="pokemon-detail">

        <section className="pokemon-header">
          <h1>Pokemon Detail</h1>
          <h2>{pokemon.name} / ID: {pokemon.id}</h2>
          <img src={imageDreamWord ? imageDreamWord : imageOficcialArtwork ? imageOficcialArtwork : imageHome ? imageHome : imageDefault } alt="pokemon" />
        </section>
        <section className="middle">
          <h2>Type/s</h2>
          <ul className="types">
            <li style={{
              background: `${isDark ? darkColor : CheckColor(pokemon)}`, 
              color: `${isDark && "#fff"}`}} >
              <span>{pokemon.types?.[0]?.type?.name}</span>
            </li>
            {
              pokemon.types?.[1]?.type?.name ? (
                <li style={{
                  background: `${isDark ? darkColor : CheckColor(pokemon)}`,
                  color: `${isDark && "#fff"}`}}>
                  <span>{pokemon.types?.[1]?.type?.name}</span>
                </li>
              ) : (<li style={{display: 'none'}}></li>)
            }
            
          </ul>
        </section>
        <section className="middle feature">
          <h2>Features</h2>
          <ul>
            <li>Pokemon Weight: {pokemon.weight}/Hg</li>
            <li>Pokemon Height: {pokemon.height}/Dm</li>
          </ul>
          <button 
          className={`moves__button ${isClose && "moves__button--rotate"}`}
          onClick={moreInfo} 
          style={{background: `${isDark ? darkColor : CheckColor(pokemon)}`}}>
            ^
            </button>
        </section>
        <section 
          className={`middle moves-container`} 
          style={{height: isClose ? 0 : "500px"}}
        >
          <h2>Moves</h2>
          <ul>
            {
              pokemon?.moves?.map( pokemonMove =>  <li key={pokemonMove.move.url} className="moves">{pokemonMove.move.name}</li>)
            }
          </ul>
        </section>
        <div className="container">
          <h2>Pokemon Stats</h2>
          {
            pokemon?.stats?.map( pokemonStats => (
              <div key={pokemonStats.stat.url} className="stats" >
                <span className="stat__name"> 
                  {pokemonStats?.stat?.name}
                </span>
                <div className="stat__percent">
                  <div id={pokemonStats?.stat?.name} className="stat__progress" style={{width: `${pokemonStats?.base_stat}%`}}>&nbsp;</div>
                </div>
                <span className="stat__value">
                  {pokemonStats?.base_stat}%
                </span>
              </div>
            ))
          }
        </div>
      </article>
    </main>
  );
};

export default PokemonDetail;