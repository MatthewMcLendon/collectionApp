const pokemonComponent = (pokemon) => {
  return `
    <section class="pokemon_card">
    <div class="pokemon_header">
    <div class="pokemon_name">${pokemon.name}</div>
    <div class="pokemon_picture">
    <img class="pokemon_art">${pokemon.images.large}</img
    </div>
    <div class="pokemon_type">${pokemon.types}</div>
    </div>
    
    </section>
  `
}

export default pokemonComponent