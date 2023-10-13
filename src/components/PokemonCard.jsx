import propTyypes from 'prop-types';

function PokemonCard({pokemon}) {

  return(
    pokemon.imgSrc ?
   (<div>
    <figure><img src={pokemon.imgSrc} alt="" /></figure>
    <figcaption>{pokemon.name}</figcaption>
    </div>
    ) : <p>????</p>
  )
    
  
 
  }
  PokemonCard.propTypes = {
    pokemon: propTyypes.shape({
      name: propTyypes.string.isRequired,
      imgSrc: propTyypes.string,
    }).isRequired ,
  };

  
  export default PokemonCard;