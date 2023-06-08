import { miniatureComponent } from "./miniatures.js";
import { useMiniatures } from "./miniaturesProvider.js";

const targetElement = document.querySelector(".miniatures-list-container");

export const miniatureList = () => {
  let miniatures = useMiniatures();

  targetElement.innerHTML = `${miniatures.map((miniature) => {
    return miniatureComponent(miniature);
  })}`;
};
