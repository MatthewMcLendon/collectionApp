import { miniatureList } from "./miniaturesList.js";
import { miniatureForm } from "./miniaturesForm.js";
import {
  getMiniatureCollection,
  saveMiniature,
  deleteMinature,
  getMiniatureByID,
  useMiniatures,
  updateMiniature,
} from "./miniaturesProvider.js";

const eventHub = document.querySelector(".container");
let miniatureID = "";

export const miniatureEventHandler = () => {
  pageSetup();

  eventHub.addEventListener("click", (clickEvent) => {
    // add mini to collection
    if (clickEvent.target.id === "miniature-form-submit") {
      clickEvent.preventDefault();
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
      clickEvent.preventDefault();
      const miniatureID = clickEvent.target.parentElement.id;
      deleteMinature(miniatureID)
        .then(getMiniatureCollection)
        .then(miniatureList);
    }

    // render update form
    if (clickEvent.target.className === "miniature-update") {
      clickEvent.preventDefault();
      miniatureID = clickEvent.target.parentElement.id;

      getMiniatureByID(miniatureID).then(() => {
        const miniatureToUpdate = useMiniatures();
        miniatureForm(miniatureToUpdate);
        document.querySelector("#miniature-form-title").value =
          miniatureToUpdate.title;
        document.querySelector("#miniature-form-game").value =
          miniatureToUpdate.game;
        document.querySelector("#miniature-form-imageURL").value =
          miniatureToUpdate.imageURL;
        document.querySelector("#miniature-form-storeURL").value =
          miniatureToUpdate.storeURL;
        document.querySelector("#miniature-form-count").value =
          miniatureToUpdate.count;
      });
      window.scrollTo(0, 0);
    }

    // update mini in collection
    if (clickEvent.target.id === "miniature-form-update") {
      clickEvent.preventDefault();
      const updatedMiniature = {
        id: miniatureID,
        title: document.querySelector("#miniature-form-title").value,
        game: document.querySelector("#miniature-form-game").value,
        imageURL: document.querySelector("#miniature-form-imageURL").value,
        storeURL: document.querySelector("#miniature-form-storeURL").value,
        count: document.querySelector("#miniature-form-count").value,
      };

      console.log(updatedMiniature);

      updateMiniature(updatedMiniature)
        .then(getMiniatureCollection)
        .then(miniatureList)
        .then(miniatureForm);
    }
  });
};

const pageSetup = () => {
  getMiniatureCollection().then(miniatureList).then(miniatureForm);
};
