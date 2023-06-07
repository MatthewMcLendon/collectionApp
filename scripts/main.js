import { navBar } from "./navigation/navbar.js";
import { boardgameEventHandler } from "./boardgames/boardgameHandler.js";
import { latestBoardgame } from "./boardgames/boardgameLatest.js";

navBar();

if (window.location.href === "http://localhost:3000/boardgame") {
  boardgameEventHandler();
}

if (window.location.href === "http://localhost:3000/") {
  latestBoardgame();
}
