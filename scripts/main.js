import { navBar } from "./navigation/navbar.js";
import { boardgameEventHandler } from "./boardgames/boardgameHandler.js";
import { latestBoardgame } from "./boardgames/boardgameLatest.js";
import { miniatureEventHandler } from "./miniatures/minaturesHandler.js";
import { latestMiniature } from "./miniatures/miniaturesLatest.js";
import mtgCardFormComponent from "./mtg/mtgCardForm.js";
import { getMtgCards } from "./mtg/mtgCardProvider.js";
import mtgCardListComponent from "./mtg/mtgCardList.js";
import pokemonSearchComponent from "./pokemon/pokemonCardSearch.js";

navBar();

// if (window.location.href === "http://localhost:3000/") {
//   latestBoardgame();
//   latestMiniature();
// }

// pokemonSearchComponent()

if (window.location.href === "http://localhost:3000/mtg") {
  mtgCardFormComponent();
  getMtgCards();
  mtgCardListComponent();
}

if (window.location.href === "http://localhost:3000/boardgame") {
  boardgameEventHandler();
}

if (window.location.href === "http://localhost:3000/miniatures") {
  miniatureEventHandler();
}

// refactor all pages to a single index.html.
