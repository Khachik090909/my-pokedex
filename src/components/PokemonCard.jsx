
function PokemonCard({pokemon}) {
 console.log(pokemon);
  
  return(
   
   <div>
    <figure><img src={pokemon.imgSrc} alt="Bulbasaur" /></figure>,
    <figcaption>{pokemon.name}</figcaption>
    </div>
    
  )
  }

  
  export default PokemonCard;