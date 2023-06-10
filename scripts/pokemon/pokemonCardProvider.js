import settings from "../.settings.js"

let pokemon = []

export const usePokemon = () => {
  return pokemon
}

const setPokemon = (pokemonArray) => {
  pokemon = pokemonArray.slice
}

export const getPokemonCollection = () => {
  return fetch(`http://localhost:8088/pokemon`)
    .then(response => response.json())
    .then(setPokemon)
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


export const deletePokemon = (pokemonId) => {
  return fetch(`http://localhost:8088/pokemon/${pokemonId}`, {
    method: "DELETE"
  }).then(getPokemon)
}

export const addPokemon = (pokemon) => {
  return fetch("http://localhost:8088/pokemon", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(pokemon)
  }).then(getPokemon)
}
