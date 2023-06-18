import settings from "../.settings.js"

let searchedPokemon = []
let pokemonCollection = []
let pokemonCollectionIds = []

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

const setPokemonCollectionIds = (pokemonArray) => {
  pokemonCollectionIds = pokemonArray
}

const setPokemonCollection = (pokemonArray) => {
  pokemonCollection = pokemonArray
  // console.log(pokemonCollection)
}

export const getPokemonById = (pokemonIds) => {
  let foundPokemonIds = []
  pokemonIds.map((element) => {
    fetch(`https://api.pokemontcg.io/v2/cards?q=id:"${element.id}"`)
      .then(response => response.json())
      .then(parsedPokemon => {
        // console.table(parsedPokemon)
        foundPokemonIds.push(parsedPokemon)
      })

    // pokemon = parsedPokemon.results
  },
    // console.log(foundPokemonIds),
    setPokemonCollection(foundPokemonIds),
    // return pokemonCollection

  )



}

export const getPokemonCollection = () => {
  return fetch(`http://localhost:8088/pokemon`)
    .then((response) => response.json())
    .then(parsedPokemon => {
      // console.table(parsedPokemon)
      setPokemonCollectionIds(parsedPokemon)
      // pokemon = parsedPokemon.results
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


