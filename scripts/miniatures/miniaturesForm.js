const targetElement = document.querySelector(".miniatures-form-container");

export const miniatureForm = (update) => {
  targetElement.innerHTML = `
    <form class="miniature-form" id="empty">
        <h2>Add to collection</h2>
        <input id="miniature-form-id" type="hidden">
        <div class="miniature-form-divider">
            <label for="miniature-form-title">Name of miniature:</label>
            <input type="text" id="miniature-form-title" placeholder="Miniature name">
        </div>
        <div class="miniature-form-divider">
            <label for="miniature-form-game">Game miniature is for:</label>
            <input type="text" id="miniature-form-game" placeholder="Game for the miniature">
        </div>
        <div class="miniature-form-divider">
            <label for="miniature-form-imageURL">Link to miniature image:</label>
            <input type="text" id="miniature-form-imageURL" placeholder="URL for image">
        </div>
        <div class="miniature-form-divider">
            <label for="miniature-form-storeURL">Link to store page:</label>
            <input type="text" id="miniature-form-storeURL" placeholder="URL for store page">
        </div>
        <div class="miniature-form-divider">
            <label for="miniature-form-count">Number in collection:</label>
            <input type="number" id="miniature-form-count" placeholder="Number in collection">
     </div>
     ${buttonSelector(update)}
    </form>
    `;
};

const buttonSelector = (update) => {
  let button = "";

  if (update) {
    button = `<button id="miniature-form-update">Update</button>`;
  } else {
    button = `<button id="miniature-form-submit">Submit</button>`;
  }
  return button;
};
