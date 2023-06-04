import settings from "../.settings.js";

// api reference at https://www.boardgameatlas.com/api/docs/search

let boardgames = [];

export const useBoardgames = () => {
  return boardgames;
};

export const getBoardgames = () => {
  return fetch(
    `https://api.boardgameatlas.com/api/search?random&pretty=true&client_id=${settings.client_id}`
  )
    .then((response) => response.json())
    .then((response) => {
      boardgames = response.games.slice();
    });
};
