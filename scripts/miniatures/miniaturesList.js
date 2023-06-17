import { miniatureComponent } from "./miniatures.js";
import { useMiniatures } from "./miniaturesProvider.js";

export const miniatureList = () => {
  let miniatures = useMiniatures();
  const targetElement = document.querySelector(".miniatures-list-container");

  targetElement.innerHTML = `${miniatures
    .map((miniature) => {
      return miniatureComponent(miniature);
    })
    .join("")}`;
};
