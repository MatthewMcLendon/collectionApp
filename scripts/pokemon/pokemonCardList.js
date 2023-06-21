//import statements
import {
  useSearchedPokemon,
  useCollectedPokemon,
  addPokemon,
} from "./pokemonCardProvider.js";
import pokemonComponent from "./pokemonCard.js";

//eventHub and contentTarget
// const contentTarget = document.querySelector(".pokemon-list-container")

//function that loops through objects and renders the list, clickEvents inside method (edit and delete)
export const pokemonList = () => {
  const contentTarget = document.querySelector(".pokemon-list-container");

  const pokemon = useSearchedPokemon();

  const render = (pokemon) => {
    contentTarget.innerHTML = pokemon
      .map((element) => {
        return pokemonComponent(element);
      })
      .join("");
  };
  // console.log(pokemon)
  render(pokemon.data);
};
