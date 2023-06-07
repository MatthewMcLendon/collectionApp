import settings from "../.settings.js"

let pokemon = []

export const usePokemon = () => {
  return pokemon
}

export const getPokemon = (pokemonSearch) => {
  return fetch(`https://api.pokemontcg.io/v2/cards?q=name:"${pokemonSearch}"`)
    .then(response => response.json())
    .then(
      parsedPokemon => {
        console.table(parsedPokemon.results)
        pokemon = parsedPokemon.results
      }
    )
}
