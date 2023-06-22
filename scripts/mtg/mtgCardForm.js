import {
  saveMtgCard,
  getMtgCards,
  editMtgCards,
  useMtgCards,
} from "./mtgCardProvider.js";

const eventHub = document.querySelector(".container");

export const resetMtgCardForm = () => {
  document.querySelector("#card-art").value = "";
  document.querySelector("#card-name").value = "";
  document.querySelector("#card-cost").value = "";
  document.querySelector("#card-type").value = "";
  document.querySelector("#card-text").value = "";
};

const mtgCardFormComponent = () => {
  eventHub.addEventListener("editButtonClicked", (event) => {
    const mtgCardToBeEdited = event.detail.mtgCardId;
    const allMtgCards = useMtgCards();
    const theFoundMtgCard = allMtgCards.find((currentMtgCard) => {
      return currentMtgCard.id === parseInt(mtgCardToBeEdited, 10);
    });

    document.querySelector("#card-id").value = theFoundMtgCard.id;
    document.querySelector("#card-art").value = theFoundMtgCard.art;
    document.querySelector("#card-name").value = theFoundMtgCard.name;
    document.querySelector("#card-cost").value = theFoundMtgCard.cost;
    document.querySelector("#card-type").value = theFoundMtgCard.type;
    document.querySelector("#card-text").value = theFoundMtgCard.text;
  });

  eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "saveMtgCard") {
      const hiddenInputValue = document.querySelector("#card-id").value;
      if (hiddenInputValue !== "") {
        const editedMtgCard = {
          id: parseInt(document.querySelector("#card-id").value, 10),
          art: document.querySelector("#card-art").value,
          name: document.querySelector("#card-name").value,
          cost: document.querySelector("#card-cost").value,
          type: document.querySelector("#card-type").value,
          text: document.querySelector("#card-text").value,
        };

        editMtgCards(editedMtgCard)
          .then(() => {
            eventHub.dispatchEvent(new CustomEvent("cardHasBeenEdited"));
          })
          .then(() => resetMtgCardForm());
      } else {
        const newMtgCard = {
          art: document.querySelector("#card-art").value,
          name: document.querySelector("#card-name").value,
          cost: document.querySelector("#card-cost").value,
          type: document.querySelector("#card-type").value,
          text: document.querySelector("#card-text").value,
        };
        saveMtgCard(newMtgCard).then(() => {
          const message = new CustomEvent("cardCreated");
          eventHub.dispatchEvent(message);
        });
      }
    }
  });

  eventHub.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "show-mtg-cards") {
      const message = new CustomEvent("showMtgCardButtonClicked");
      eventHub.dispatchEvent(message);
    }
  });

  const render = () => {
    const contentTarget = document.querySelector(".mtg-card-form");

    contentTarget.innerHTML = `
    <div class="mtg-card-form">
    <button id="saveMtgCard">add card</button>
    <button id="show-mtg-cards">show cards</button>
    <div>
    <input type="hidden" id="card-id"/>
    <label for="card-art">art: </label>
    <input type="text" id="card-art"/>
    <label for="card-name">name: </label>
    <input type="text" id="card-name"/>
    <label for="card-cost">cost: </label>
    <input type="text" id="card-cost"/>
    <label for="card-type">type: </label>
    <input type="text" id="card-type"/>
    <label for="card-text">text: </label>
    <input type="text" id="card-text"/>
    </div>
    </div>
    `;
  };
  render();
};

export default mtgCardFormComponent;
