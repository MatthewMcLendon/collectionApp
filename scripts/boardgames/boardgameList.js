import { boardgameComponent } from "./boardgame.js";
import { useBoardgames } from "./boardgameProvider.js";

const targetElement = document.querySelector(".boardgame-list-container");

export const boardgameList = () => {
  const boardgames = useBoardgames();

  targetElement.innerHTML = boardgames
    .map((boardgame) => {
      return boardgameComponent(boardgame);
    })
    .join("");
};
