import settings from "../.settings.js";

// api reference at https://www.boardgameatlas.com/api/docs/search

let boardgames = [];
let collectionIDs = "";

export const useBoardgames = () => {
  return boardgames;
};

export const useCollectionIDs = () => {
  return collectionIDs;
};

export const getBoardgameCollection = () => {
  let boardgameIDs = "";
  return fetch(`http://localhost:8088/boardgames`)
    .then((response) => response.json())
    .then((response) => {
      response.map((game) => {
        boardgameIDs += `${game.id},`;
      });
      collectionIDs = boardgameIDs;
    });
};

export const getBoardgamesByID = (boardgameIDs) => {
  return fetch(
    `https://api.boardgameatlas.com/api/search?ids=${boardgameIDs}&pretty=true&client_id=${settings.client_id}`
  )
    .then((response) => response.json())
    .then((response) => {
      boardgames = response.games.slice();
    });
};

export const getBoardgamesByName = (searchName) => {
  return fetch(
    `https://api.boardgameatlas.com/api/search?name=${searchName}&pretty=true&client_id=${settings.client_id}`
  )
    .then((response) => response.json())
    .then((response) => {
      boardgames = response.games.slice();
    });
};

export const saveBoardgame = (newBoardgame) => {
  return fetch(`http://localhost:8088/boardgames`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBoardgame),
  });
};

export const deleteBoardgame = (boardgameID) => {
  return fetch(`http://localhost:8088/boardgames/${boardgameID}`, {
    method: "DELETE",
  });
};
