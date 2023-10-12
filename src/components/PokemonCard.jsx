import propTyypes from 'prop-types';

function PokemonCard({pokemon}) {
 console.log(pokemon);
  
  return(
   
   <div>
    <figure><img src={pokemon.imgSrc} alt="Bulbasaur" /></figure>,
    <figcaption>{pokemon.name}</figcaption>
    </div>
    
  )
 
  }
  PokemonCard.propTypes = {
    pokemon: propTyypes.shape({
      name: propTyypes.string.isRequired,
      imgSrc: propTyypes.string.isRequired,
    }),
  };

  
  export default PokemonCard;