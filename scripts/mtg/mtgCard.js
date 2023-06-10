const mtgCardComponent = (card) => {

  return `
  <section class="card_card">
  <div class="card_header">
   <img class = "card-art" src="${card.art}">
   <div class ="card-name">name: ${card.name}</div>
   <div class ="card-cost">cost: ${card.cost}</div>
   <div class ="card-type">type: ${card.type}</div>
   <div class ="card-text">text: ${card.text}</div>
   <button class="button" id="edit-mtg--${card.id}">edit</button>
   <button class="button" id="delete-mtg--${card.id}">delete</button>
 </div>
 </section>
  `
}

export default mtgCardComponent