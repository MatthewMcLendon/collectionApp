import { useCollectionIDs } from "./boardgameProvider.js";

export const boardgameComponent = (boardgame) => {
  return `
    <div class="boardgame-card" id=${boardgame.id}>
        <h2 class="boardgame-name">${boardgame.name}</h1>
        <image class="boardgame-image" src=${boardgame.images.small}>
        <div class="boardgame-description">${boardgame.description}</div>
        ${buttonSelector(boardgame.id)}
    </div>
    `;
};

const buttonSelector = (id) => {
  let collectionIDs = useCollectionIDs();
  let inCollection = false;

  collectionIDs.split(",").map((collectionID) => {
    if (collectionID === id) {
      inCollection = true;
    }
  });

  if (inCollection) {
    return `<button class="remove-from-collection-button">Remove from collection</button>`;
  } else {
    return `<button class="add-to-collection-button">Add to collection</button>`;
  }
};
