import { miniatureList } from "./miniaturesList.js";
import { miniatureForm } from "./miniaturesForm.js";
import { getMiniatureCollection, saveMiniature } from "./miniaturesProvider.js";

const eventHub = document.querySelector(".container");

export const miniatureEventHandler = () => {
  pageSetup();

  eventHub.addEventListener("click", (clickEvent) => {
    clickEvent.preventDefault();
    if (clickEvent.target.id === "miniature-form-submit") {
      const newMiniature = {
        title: document.querySelector("#miniature-form-title").value,
        game: document.querySelector("#miniature-form-game").value,
        imageURL: document.querySelector("#miniature-form-imageURL").value,
        storeURL: document.querySelector("#miniature-form-storeURL").value,
        count: document.querySelector("#miniature-form-count").value,
      };

      saveMiniature(newMiniature)
        .then(getMiniatureCollection)
        .then(miniatureList)
        .then(miniatureForm);
    }
  });
};

const pageSetup = () => {
  getMiniatureCollection().then(miniatureList).then(miniatureForm);
};
