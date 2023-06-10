let mtgCards = []
const setMtgCards = (cardsArray) => {
  mtgCards = cardsArray.slice()
}

export const useMtgCards = () => mtgCards.slice()

export const getMtgCards = () => {
  return fetch("http://localhost:8088/mtg")
    .then(response => response.json())
    .then(setMtgCards)
}

export const editMtgCards = mtgObject => {
  return fetch(`http://localhost:8088/mtg/${mtgObject.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(mtgObject)
  }).then(getMtgCards)
}

export const deleteMtgCard = (mtgCardId) => {
  return fetch(`http://localhost:8088/mtg/${mtgCardId}`, {
    method: "DELETE"
  }).then(getMtgCards)
}

export const saveMtgCard = (card) => {
  return fetch("http://localhost:8088/mtg", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(card)
  }).then(getMtgCards)
}
