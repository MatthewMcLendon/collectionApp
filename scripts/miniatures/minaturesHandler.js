import { miniatureList } from "./miniaturesList.js";
import { getMiniatureCollection } from "./miniaturesProvider.js";

export const miniatureEventHandler = () => {
  getMiniatureCollection().then(miniatureList);
};
