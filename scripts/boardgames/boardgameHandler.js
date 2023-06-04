import { useBoardgames, getBoardgames } from "./boardgameProvider.js";

const eventHub = document.querySelector(".container");

export const getInitialBoardgames = () => {
  let boardgames = [];
  getBoardgames().then(() => {
    boardgames = useBoardgames();
    console.log(boardgames);
  });
};

// export const boardgameEventHandler = () => {
//     eventHub.addEventListener("click", (clickEvent) => {})
// }
