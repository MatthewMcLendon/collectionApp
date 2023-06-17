import { boardgameComponent } from "./boardgame.js";
import { useBoardgames } from "./boardgameProvider.js";

export const boardgameList = () => {
  const boardgames = useBoardgames();
  const targetElement = document.querySelector(".boardgame-list-container");

  targetElement.innerHTML = boardgames
    .map((boardgame) => {
      return boardgameComponent(boardgame);
    })
    .join("");
};
