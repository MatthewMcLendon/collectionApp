import { getPokemon } from "./pokemonCardProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".pokemon-search-container")
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





