import {
  getBoardgameCollection,
  getBoardgamesByID,
  getBoardgamesByName,
  useCollectionIDs,
  saveBoardgame,
  deleteBoardgame,
} from "./boardgameProvider.js";
import { boardgameList } from "./boardgameList.js";
import { boardgameSearchComponent } from "./boardgameSearch.js";

const eventHub = document.querySelector(".container");

export const boardgameEventHandler = () => {
  // get initial list, setup page elements
  pageSetup();

  eventHub.addEventListener("click", (clickEvent) => {
    // search by name
    if (clickEvent.target.id === "boardgame-search-button") {
      clickEvent.preventDefault();
      const searchName = document.querySelector(
        ".boardgame-search-input"
      ).value;
      getBoardgamesByName(searchName).then(boardgameList);
    }

    // add game to collection
    if (clickEvent.target.className === "add-to-collection-button") {
      const newBoardgame = { id: clickEvent.target.parentElement.id };
      saveBoardgame(newBoardgame).then(pageSetup);
    }

    // remove game from collection
    if (clickEvent.target.className === "remove-from-collection-button") {
      deleteBoardgame(clickEvent.target.parentElement.id).then(pageSetup);
    }
  });
};

const pageSetup = () => {
  let collectionIDs = "";
  getBoardgameCollection()
    .then(() => {
      collectionIDs = useCollectionIDs();
      getBoardgamesByID(collectionIDs).then(boardgameList);
    })
    .then(boardgameSearchComponent);
};
