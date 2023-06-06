import {
  useBoardgames,
  getBoardgames,
  getBoardgamesByName,
} from "./boardgameProvider.js";
import { boardgameList } from "./boardgameList.js";
import { boardgameSearchComponent } from "./boardgameSearch.js";

const eventHub = document.querySelector(".container");

export const boardgameEventHandler = () => {
  // get initial list, setup page elements
  getInitialBoardgames();

  eventHub.addEventListener("click", (clickEvent) => {
    // search by name
    if (clickEvent.target.id === "boardgame-search-button") {
      clickEvent.preventDefault();
      const searchName = document.querySelector(
        ".boardgame-search-input"
      ).value;
      getBoardgamesByName(searchName).then(boardgameList);
    }
  });

  // Needed routes: update, delete, add to profile
};

const getInitialBoardgames = () => {
  let boardgames = [];
  getBoardgames()
    .then(() => {
      boardgames = useBoardgames();
    })
    .then(boardgameSearchComponent)
    .then(boardgameList);
};
