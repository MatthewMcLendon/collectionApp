import { getPokemon, addPokemon } from "./pokemonCardProvider.js"
import { pokemonList } from "./pokemonCardList.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".pokemon-search-container")
const cardListContentTarget = document.querySelector(".pokemon-collection-list-container")
let searchValue = ""

const pokemonSearchComponent = () => {
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "pokemonSearch") {
      searchValue = document.querySelector("#searchField").value
      const message = new CustomEvent("pokemonSearchClicked", {
        detail: {
          pokemonSearch: searchValue
        }
      })
      eventHub.dispatchEvent(message)
      clickEvent.preventDefault()

      getPokemon(searchValue)
        .then(pokemonList)

      cardListContentTarget.innerHTML = ""

    }


    if (clickEvent.target.id.startsWith("add_pokemon_button--")) {
      const [prefix, id] = clickEvent.target.id.split("--")
      const newPokemonCard = {
        id: id
      }
      addPokemon(newPokemonCard)
    }

  })

  const render = () => {
    contentTarget.innerHTML = `
      <form class="searchForm">
        <input type="text" id="searchField" isRequired/>
        <button id="pokemonSearch">search</button>
      </form>
    `
  }
  render()
}

export default pokemonSearchComponent





