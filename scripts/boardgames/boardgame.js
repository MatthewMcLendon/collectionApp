export const boardgameComponent = (boardgame) => {
  return `
    <div class="boardgame-card" id=${boardgame.id}>
        <h2 class="boardgame-name">${boardgame.handle}</h1>
        <image class="boardgame-image" src=${boardgame.images.small}>
        <div class="boardgame-description">${boardgame.description}</div>
        <button class="boardgame-add-to-collection">Add to collection</div>
    </div>
    `;
};
