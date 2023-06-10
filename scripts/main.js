import { navBar } from "./navigation/navbar.js";
import { boardgameEventHandler } from "./boardgames/boardgameHandler.js";
import { latestBoardgame } from "./boardgames/boardgameLatest.js";
import mtgCardFormComponent from "./mtg/mtgCardForm.js";
import { getMtgCards } from "./mtg/mtgCardProvider.js"
import mtgCardListComponent from "./mtg/mtgCardList.js"
import pokemonSearchComponent from "./pokemon/pokemonCardSearch.js";


navBar();

if (window.location.href === "http://localhost:3000/boardgame") {
  boardgameEventHandler();
}

if (window.location.href === "http://localhost:3000/") {
  latestBoardgame();
}

// pokemonSearchComponent()

if (window.location.href === "http://localhost:3000/mtg") {
  mtgCardFormComponent()
  getMtgCards()
  mtgCardListComponent()
}
