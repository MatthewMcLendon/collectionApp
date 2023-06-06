import { useBoardgames, getBoardgames } from "./boardgameProvider.js";
import { boardgameList } from "./boardgameList.js";

const eventHub = document.querySelector(".container");

export const getInitialBoardgames = () => {
  let boardgames = [];
  getBoardgames()
    .then(() => {
      boardgames = useBoardgames();
      console.log(boardgames);
    })
    .then(boardgameList);
};

// Needed routes: search by name, update, delete, add to profile
// export const boardgameEventHandler = () => {
//     eventHub.addEventListener("click", (clickEvent) => {})
// }
