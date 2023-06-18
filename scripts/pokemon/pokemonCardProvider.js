import settings from "../.settings.js"

let searchedPokemon = []
let pokemonCollection = []

export const useSearchedPokemon = () => {
  return searchedPokemon
}

export const useCollectedPokemon = () => {
  return pokemonCollection
}

export const usePokemonCollectionIds = () => {
  return pokemonCollectionIds
}

const setSearchedPokemon = (pokemonArray) => {
  searchedPokemon = pokemonArray
}

const setPokemonCollection = (pokemonArray) => {
  pokemonCollection = pokemonArray
}


export const getPokemonCollection = () => {
  let pokemonIds = ""
  return fetch(`http://localhost:8088/pokemon`)
    .then((response) => response.json())
    .then((response) => {
      response.map((pokemon) => {
        pokemonIds += `,${pokemon.id}`
      });
      pokemonCollectionIds = pokemonIds
    })
}

export const getPokemon = (pokemonSearch) => {
  return fetch(`https://api.pokemontcg.io/v2/cards?q=name:"${pokemonSearch}"`)
    .then(response => response.json())
    .then(parsedPokemon => {
      // console.table(parsedPokemon)
      setSearchedPokemon(parsedPokemon)
      // pokemon = parsedPokemon.results
    })
}


export const deletePokemon = (pokemonId) => {
  return fetch(`http://localhost:8088/pokemon/${pokemonId}`, {
    method: "DELETE"
  }).then(getPokemon)
}

export const addPokemon = (pokemon) => {
  return fetch(`http://localhost:8088/pokemon`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(pokemon)
  })
}


