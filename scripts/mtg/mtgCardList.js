import { getMtgCards, useMtgCards, editMtgCards, deleteMtgCard } from "./mtgCardProvider.js";
import mtgCardComponent from "./mtgCard.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".mtg-card-list")

const mtgCardListComponent = () => {

  eventHub.addEventListener("mtgCardHasBeenEdited", event => {
    const updatedMtgCards = useMtgCards()
    render(updatedMtgCards)
  })

  eventHub.addEventListener("showMtgCardButtonClicked", event => {
    const cards = useMtgCards()
    render(cards)
  })

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("delete-mtg--")) {
      const [prefix, mtgCardId] = clickEvent.target.id.split("--")
      deleteMtgCard(mtgCardId).then(
        () => {
          const theNewMtgCards = useMtgCards()
          render(theNewMtgCards)
        }
      )
    }

    if (clickEvent.target.id.startsWith("edit-mtg--")) {
      const [prefix, mtgCardId] = clickEvent.target.id.split("--")
      const editEvent = new CustomEvent("editButtonClicked", {
        detail: {
          mtgCardId: mtgCardId
        }
      })
      eventHub.dispatchEvent(editEvent)
    }
  })

  const render = (element) => {
    contentTarget.innerHTML = `
    <section class="card_box">
    <p class="card_thingy">here are your cards</p>
    <div class="card_cards">
     ${element.map(currentElement => {
      return mtgCardComponent(currentElement)
    }
    ).join("")
      }
   </div>
 </section>
    `
  }
}


export default mtgCardListComponent