const pokemonComponent = (pokemon) => {
  return `
    <section class="pokemon_card">
    <div class="pokemon_header">
    <div class="pokemon_name">${pokemon.name}</div>
    <div class="pokemon_picture">
    <img class="pokemon_art"src="${pokemon.images.small}">
    </div>
    <div class="pokemon_type">${pokemon.types}</div>
    <button class="button" id="add_pokemon--${pokemon.id}">Add</button>
    <button class="button" id="delete_pokemon_button">Delete</button>
    </div>
    
    </section>
  `
}

export default pokemonComponent