
const CheckImage = (pokemon) => {

  const imageDreamWord = pokemon?.sprites?.other?.dream_world?.front_default
  const imageOficcialArtwork = pokemon.sprites?.other?.["official-artwork"]?.front_default;
  const imageHome =  pokemon?.sprites?.other?.home?.front_default;
  const imageDefault = pokemon?.sprites?.front_default;

  return [imageDreamWord, imageHome, imageOficcialArtwork, imageDefault];
}
 
export default CheckImage;