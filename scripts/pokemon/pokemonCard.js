import { usePokemonCollectionIds } from "./pokemonCardProvider.js"

const pokemonComponent = (pokemon) => {
  return `
    <section class="pokemon_card">
    <div class="pokemon_header">
    <div class="pokemon_name">${pokemon.name}</div>
    <div class="pokemon_picture">
    <img class="pokemon_art"src="${pokemon.images.small}">
    </div>
    <div class="pokemon_type">${pokemon.types}</div>
    <button class="button" id="add_pokemon_button--${pokemon.id}">Add</button>

    </div>
    
    </section>
  `
}

// this goes up there v^
// ${buttonSelector(pokemon.id)}

// const buttonSelector = (id) => {
//   let collectionIDs = usePokemonCollectionIds()
//   let inCollection = false

//   collectionIDs.split(",").map((collectionId) => {
//     if (collectionId === id) {
//       inCollection = true
//     }
//   })

//   if (inCollection) {
//     return `<button class="button" id="delete_pokemon_button">Delete</button>`
//   } else {
//     return `<button class="button" id="add_pokemon_button--${pokemon.id}">Add</button>`
//   }
// }

export default pokemonComponent