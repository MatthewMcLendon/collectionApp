import {
  useCollectedPokemon,
  getPokemonCollection,
  getPokemonById,
  usePokemonCollectionIds,
} from "./pokemonCardProvider.js";
import pokemonComponent from "./pokemonCard.js";

//eventHub and contentTarget
// const eventHub = document.querySelector(".container")
// const contentTarget = document.querySelector(".pokemon-collection-list-container")
// const searchListContentTarget = document.querySelector(".pokemon-list-container")

//function that loops through objects and renders the list, clickEvents inside method (edit and delete)
export const pokemonCollectionList = () => {
  const eventHub = document.querySelector(".container");
  const contentTarget = document.querySelector(
    ".pokemon-collection-list-container"
  );
  const searchListContentTarget = document.querySelector(
    ".pokemon-list-container"
  );

  const pokemon = usePokemonCollectionIds();
  getPokemonById(pokemon);
  const foundPokemon = useCollectedPokemon();

  eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.className === "pokemon-collection-link") {
      clickEvent.preventDefault();
      // console.log(foundPokemon)
      render(foundPokemon);

      searchListContentTarget.innerHTML = "";
      document.querySelector("#searchField").value = "";
    }
  });

  const render = (pokemon) => {
    contentTarget.innerHTML = pokemon
      .map((element) => {
        // console.log(element.data[0])
        return pokemonComponent(element.data[0]);
      })
      .join("");
  };
};
