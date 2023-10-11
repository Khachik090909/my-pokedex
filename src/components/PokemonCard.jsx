
function PokemonCard() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];
  const pokemon = pokemonList[1];
  return(
  pokemon.imgSrc !== undefined
    ? 
   (<div>
    <figure><img src={pokemon.imgSrc} alt="Bulbasaur" /></figure>,
    <figcaption>{pokemon.name}</figcaption>
    </div>
    ) : <p>????</p>
  )
  }

  
  export default PokemonCard;