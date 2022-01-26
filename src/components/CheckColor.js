
const CheckColor = (pokemon) => {

  switch(pokemon?.types?.[0]?.type?.name){
    case "normal":
      return "#94a3b8";
    case "fighting":
      return "#b4530996"
    case "flying":
      return "#818cf8";
    case "poison" :
      return "#c084fc" ;
    case "ground":
      return "#7c2c12";
    case "rock":
      return "#78716c";
    case "bug":
      return "#bef264";
    case "ghost":
      return "#bae6fd";
    case "steel":
      return "#64748b";
    case "fire":
      return "#fb923c";
    case "water":
      return "#67e8f9";
    case "grass":
      return "#4ade80";
    case "electric":
      return "#fde047";
    case "psychic":
      return "#fb7185";
    case "ice":
      return "#22d3ee";
    case "dragon":
      return "#f87171";
    case "dark":
      return "#a78bfa";
    case "fairy":
      return "#f9a8d4";
    case "shadow":
      return "#a1a1aa";
    default:
      return "#0f172a"
  }
}
 
export default CheckColor;