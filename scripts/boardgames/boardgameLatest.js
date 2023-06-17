import {
  useCollectionIDs,
  useBoardgames,
  getBoardgamesByID,
  getBoardgameCollection,
} from "./boardgameProvider.js";

export const latestBoardgame = () => {
  const targetElement = document.querySelector(".latest-boardgame");
  let collectionIDs = "";
  let game = {};

  getBoardgameCollection().then(() => {
    collectionIDs = useCollectionIDs();
    let latestBoardgame = collectionIDs.split(",").slice(-1);

    getBoardgamesByID(latestBoardgame[0]).then(() => {
      game = useBoardgames();
      targetElement.innerHTML = `
      <div class="boardgame-card" id=${game[0].id}>
        <h2 class="latest-boardgame-header">Latest Boardgame:</h2>
        <h3 class="boardgame-name">${game[0].name}</h1>
        <image class="boardgame-image" src=${game[0].images.small}>
        <div class="boardgame-description">${game[0].description}</div>
      </div>`;
    });
  });
};
