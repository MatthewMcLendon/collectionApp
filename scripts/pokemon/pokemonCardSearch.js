const targetElement = document.querySelector(".pokemon-search-container")

export const pokemonSearchComponent = () => {
  targetElement.innerHTML = `
  <form class="pokemon-search-form">
    <input class="pokemon-search-input" type="text" name="pokemon-search-input"> 
    <button class="pokemon-search-button" id="pokemon-search-button">Search</button>
  </form>
  `
}