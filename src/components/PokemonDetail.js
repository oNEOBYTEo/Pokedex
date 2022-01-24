import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CheckImage from "./CheckImage";

const PokemonDetail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});

  
  useEffect(() => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => setPokemon(res.data));
  }, [id]);
  
  const [imageDreamWord, imageHome, imageOficcialArtwork, imageDefault] = CheckImage(pokemon)
  console.log(pokemon)
  return (
    <main>
      <article className="pokemon-detail">

        <section className="pokemon-header">
          <h1>Pokemon Detail</h1>
          <h2>{pokemon.name}</h2>
          <img src={imageDreamWord ? imageDreamWord : imageOficcialArtwork ? imageOficcialArtwork : imageHome ? imageHome : imageDefault } alt="pokemon" />
        </section>
        <section className="middle">
          <h2>Type/s</h2>
          <ul className="types">
            <li>
              <span>{pokemon.types?.[0]?.type?.name}</span>
            </li>
            {
              pokemon.types?.[1]?.type?.name ? (
                <li>
                  <span>{pokemon.types?.[1]?.type?.name}</span>
                </li>
              ) : (<li style={{display: 'none'}}></li>)
            }
            
          </ul>
        </section>
        <section className="middle">
          <h2>Features</h2>
          <ul>
            <li>Pokemon Weight: {pokemon.weight}/Hg</li>
            <li>Pokemon Height: {pokemon.height}/Dm</li>
          </ul>
        </section>
        <section className="middle">
          <h2>Moves</h2>
          <ul>
            {
              pokemon?.moves?.map( pokemonMove =>  <li key={pokemonMove.move.url}>{pokemonMove.move.name}</li>)
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
                  <div id={pokemonStats?.stat?.name} className="stat__progress" style={{width: `${pokemonStats?.base_stat}%`}}>.</div>
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