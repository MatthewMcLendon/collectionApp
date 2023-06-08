import { miniatureList } from "./miniaturesList.js";
import { miniatureForm } from "./miniaturesForm.js";
import { getMiniatureCollection } from "./miniaturesProvider.js";

export const miniatureEventHandler = () => {
  getMiniatureCollection().then(miniatureList).then(miniatureForm);
};
