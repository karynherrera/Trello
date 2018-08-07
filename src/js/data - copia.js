let arrayTareas = [];
let arrayCards = [];
const addToList = (nameList) => {
    arrayTareas.push(nameList);
    console.log(arrayTareas);
  return(card(nameList));
 };

 const addToCards = (nameCard) => {
  arrayCards.push(nameCard);
    console.log(arrayCards);
  return(newCards(nameCard));
 };