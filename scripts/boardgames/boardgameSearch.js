export const boardgameSearchComponent = () => {
  const targetElement = document.querySelector(".boardgame-search-container");

  targetElement.innerHTML = `
  <form class="boardgame-search-form">
    <input class="boardgame-search-input" type="text" name="boardgame-search-input" placeholder="Name of boardgame?"> 
    <button class="boardgame-search-button" id="boardgame-search-button">Search</button>
  </form>
  `;
};
