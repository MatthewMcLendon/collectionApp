const targetElement = document.querySelector(".nav-bar");

export const navBar = () => {
  targetElement.innerHTML = `
    <a href="/" class="nav-link">Home</a>
    <a href="/pokemon.html" class="nav-link">Pokemon Cards</a>
    <a href="/mtg.html" class="nav-link">MTG Cards</a>
    <a href="/boardgame.html" class="nav-link">BoardGames</a>
    <a href="/miniatures.html" class="nav-link">Miniatures</a>
    `;
};
