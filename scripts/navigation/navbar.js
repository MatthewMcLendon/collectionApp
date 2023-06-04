const targetElement = document.querySelector(".nav-bar");

export const navBar = () => {
  targetElement.innerHTML = `
    <a href="/" class="nav-link">Home</a>
    <a href="/" class="nav-link">Pokemon Cards</a>
    <a href="/" class="nav-link">MTG Cards</a>
    <a href="/" class="nav-link">Collection C</a>
    <a href="/" class="nav-link">Collection D</a>
    `;
};
