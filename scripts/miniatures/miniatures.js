export const miniatureComponent = (miniature) => {
  return `
    <div class="miniature-card" id="${miniature.id}">
        <div class="miniature-title">${miniature.title}</div>
        <div class="miniature-game">${miniature.game}</div>
        <image class="miniature-image" src="${miniature.imageURL}">
        <figcaption class="miniature-link"><a href="${miniature.storeURL}">Info page</a></figcaption>
        <div class="miniature-count">Number in collection: ${miniature.count}</div>
    </div>
    `;
};
