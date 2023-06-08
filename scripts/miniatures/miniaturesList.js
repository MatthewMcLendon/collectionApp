import { miniatureComponent } from "./miniatures.js";
import { useMiniatures } from "./miniaturesProvider.js";

const targetElement = document.querySelector(".miniatures-list-container");

export const miniatureList = () => {
  let miniatures = useMiniatures();
  console.log(miniatures);

  targetElement.innerHTML = `<h1>Test<h1>`;
};
