import { miniatureList } from "./miniaturesList.js";
import { miniatureForm } from "./miniaturesForm.js";
import {
  getMiniatureCollection,
  saveMiniature,
  deleteMinature,
} from "./miniaturesProvider.js";

const eventHub = document.querySelector(".container");

export const miniatureEventHandler = () => {
  pageSetup();

  eventHub.addEventListener("click", (clickEvent) => {
    clickEvent.preventDefault();

    // add mini to collection
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

    // delete mini from collection
    if (clickEvent.target.className === "miniature-delete") {
      const miniatureID = clickEvent.target.parentElement.id;
      deleteMinature(miniatureID)
        .then(getMiniatureCollection)
        .then(miniatureList);
    }

    // update mini in collection
    if (clickEvent.target.className === "miniature-update") {
      const miniatureID = clickEvent.target.parentElement.id;
      console.log("update", miniatureID);
    }
  });
};

const pageSetup = () => {
  getMiniatureCollection().then(miniatureList).then(miniatureForm);
};
