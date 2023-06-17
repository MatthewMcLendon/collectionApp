import { latestBoardgame } from "../boardgames/boardgameLatest.js";
import { latestMiniature } from "../miniatures/miniaturesLatest.js";
import { boardgameEventHandler } from "../boardgames/boardgameHandler.js";

const targetElement = document.querySelector(".nav-bar");
const targetContent = document.querySelector(".content-container");
const eventHub = document.querySelector(".container");

export const navBar = () => {
  renderNavbar();
  contentSelector();
};

const contentSelector = () => {
  renderLatest();
  latestBoardgame();
  latestMiniature();

  eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "home-link") {
      clickEvent.preventDefault();

      renderLatest();
      latestBoardgame();
      latestMiniature();
    }

    if (clickEvent.target.id === "boardgame-link") {
      clickEvent.preventDefault();

      renderBoardgames();
      boardgameEventHandler();
    }
  });
};

const renderLatest = () => {
  targetContent.innerHTML = `
    <div class="latest-boardgame"></div>
    <div class="latest-miniature"></div>
    `;
};

const renderBoardgames = () => {
  targetContent.innerHTML = `
    <div class="boardgame-search-container"></div>
    <div class="boardgame-list-container"></div>
    `;
};

const renderNavbar = () => {
  targetElement.innerHTML = `
    <a href="/" class="nav-link" id="home-link">Home</a>
    <a href="/pokemon.html" class="nav-link" id="pokemon-link">Pokemon Cards</a>
    <a href="/mtg.html" class="nav-link" id="mtg-link">MTG Cards</a>
    <a href="/boardgame.html" class="nav-link" id="boardgame-link">BoardGames</a>
    <a href="/miniatures.html" class="nav-link id="miniatures-link">Miniatures</a>
    `;
};
