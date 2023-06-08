export const miniatureComponent = (miniature) => {
  return `
    <div class="miniature-card" id="${miniature.id}">
        <h2 class="miniature-title">${miniature.title}</h2>
        <div class="miniature-game">${miniature.game}</div>
        <image class="miniature-image" src="${miniature.imageURL}">
        <figcaption class="miniature-link"><a href="${miniature.storeURL}" target="_blank">Info page</a></figcaption>
        <div class="miniature-count">Number in collection: ${miniature.count}</div>
        <button class="miniature-update">Update</button>
        <button class="miniature-delete">Delete</button>
    </div>
    `;
};
