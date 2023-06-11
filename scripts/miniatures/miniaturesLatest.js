import { useMiniatures, getMiniatureCollection } from "./miniaturesProvider.js";

const targetElement = document.querySelector(".latest-miniature");

export const latestMiniature = () => {
  getMiniatureCollection().then(() => {
    const miniatures = useMiniatures();
    const latestMiniature = miniatures.slice(-1)[0];
    return (targetElement.innerHTML = `
    <div class="miniature-card">
    <h2>Latest Miniature<h2>
    <h3 class="miniature-title">${latestMiniature.title}</h3>
    <div class="miniature-game">${latestMiniature.game}</div>
    <image class="miniature-image" src="${latestMiniature.imageURL}">
        <figcaption class="miniature-link"><a href="${latestMiniature.storeURL}" target="_blank">Info page</a></figcaption>
        <div class="miniature-count">Number in collection: ${latestMiniature.count}</div>
    </div>
    `);
  });
};
