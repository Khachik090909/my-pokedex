
function NavBar({ setPokemonIndex,pokemonList})
{ 

  
    return(
        <div>
          {pokemonList.map((pokemon, index) => (
            
            <button key={pokemon.name} onClick={() => {setPokemonIndex(index);
            pokemon.name==="pikachu"&& alert("pika pikachu !!!") }}>
              {pokemon.name}
            </button>
           
          ))
          }
  
       
      </div>
    )
}

export default NavBar;