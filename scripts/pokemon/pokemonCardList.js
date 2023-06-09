import { usePokemon } from "./pokemonCardProvider.js"
import pokemonComponent from "./pokemonCard.js"


const contentTarget = document.querySelector(".pokemon-list-container")

export const pokemonList = () => {
  const pokemon = usePokemon()

  contentTarget.innerHTML = pokemon.map((pokemonCard) => {
    return pokemonComponent(pokemonCard)
  }).join("")
}




