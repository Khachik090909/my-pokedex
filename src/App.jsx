import "./App.css";
import PokemonCard from './components/PokemonCard'
import { useState } from 'react';

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
const pokemon = pokemonList;



function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);

const handleClickSuivant = () => {
 setPokemonIndex(pokemonIndex + 1);
}
const handleClickPrecedent = () => {
 setPokemonIndex(pokemonIndex - 1);
}
  return (
    
   <div>
    <PokemonCard pokemon = {pokemon[pokemonIndex]}  />
    <div  style={{display:'flex'}}>
      <div >

      <button  onClick={handleClickPrecedent}>Précédent</button>
        {pokemonIndex > 0 && <p>il y a bien un précédent   </p>}
      
      </div>
    <div>
      
      <button  onClick={handleClickSuivant}>Suivant</button>
      {pokemonIndex<pokemon.length-1 && <p>il y a bien un suivant</p>}
    </div>
    
    </div>
    
    
   </div>
  );
}



export default App;
