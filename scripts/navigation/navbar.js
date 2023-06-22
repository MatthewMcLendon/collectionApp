import { latestBoardgame } from "../boardgames/boardgameLatest.js";
import { latestMiniature } from "../miniatures/miniaturesLatest.js";
import { boardgameEventHandler } from "../boardgames/boardgameHandler.js";
import { miniatureEventHandler } from "../miniatures/minaturesHandler.js";
import { getMtgCards } from "../mtg/mtgCardProvider.js";
import mtgCardFormComponent from "../mtg/mtgCardForm.js";
import mtgCardListComponent from "../mtg/mtgCardList.js";
import pokemonSearchComponent from "../pokemon/pokemonCardSearch.js";
import { getPokemonCollection } from "../pokemon/pokemonCardProvider.js";
import { pokemonList } from "../pokemon/pokemonCardList.js";
import { pokemonCollectionList } from "../pokemon/pokemonCollectionList.js";

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
    clickEvent.preventDefault();

    if (clickEvent.target.id === "home-link") {
      renderLatest();
      latestBoardgame();
      latestMiniature();
    }

    if (clickEvent.target.id === "pokemon-link") {
      renderPokemon();
      pokemonSearchComponent();
      getPokemonCollection().then(pokemonCollectionList);
    }

    if (clickEvent.target.id === "mtg-link") {
      renderMtg();
      mtgCardFormComponent();
      getMtgCards().then(mtgCardListComponent);
    }

    if (clickEvent.target.id === "boardgame-link") {
      renderBoardgames();
      boardgameEventHandler();
    }

    if (clickEvent.target.id === "miniatures-link") {
      renderMiniatures();
      miniatureEventHandler();
    }
  });
};

const renderLatest = () => {
  targetContent.innerHTML = `
   <div class="latest-boardgame"></div>
   <div class="latest-miniature"></div>
   `;
};

const renderPokemon = () => {
  targetContent.innerHTML = `
   <div class="pokemon-nav-container">
    <a class="pokemon-collection-link" href="">My Card Collection</a>
    <div class="pokemon-search-container"></div>
   </div>
   <div class="pokemon-list-container"></div>
   <div class="pokemon-collection-list-container"></div>
   `;
};

const renderMtg = () => {
  targetContent.innerHTML = `
   <div class="mtg-card-form"></div>
   <div class="mtg-card-list"></div>
   `;
};

const renderBoardgames = () => {
  targetContent.innerHTML = `
   <div class="boardgame-search-container"></div>
   <div class="boardgame-list-container"></div>
   `;
};

const renderMiniatures = () => {
  targetContent.innerHTML = `
    <div class="miniatures-form-container"></div>
    <div class="miniatures-list-container"></div>
    `;
};

const renderNavbar = () => {
  targetElement.innerHTML = `
    <h1 class="page-title">Collections</h1>
    <a href="/" class="nav-link" id="home-link">Home</a>
    <a href="/" class="nav-link" id="pokemon-link">Pokemon Cards</a>
    <a href="/" class="nav-link" id="mtg-link">MTG Cards</a>
    <a href="/" class="nav-link" id="boardgame-link">BoardGames</a>
    <a href="/" class="nav-link" id="miniatures-link">Miniatures</a>
    `;
};
