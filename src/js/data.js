let arrayLista = [];

// agrega a un arreglo de objetos los datos de la lista 
const addToList = (idlist, nameList) => {
  let lista = new Object();
  lista.id = idlist;
  lista.name = nameList;
  lista.tareas = [];
  arrayLista.push(lista);
  console.log(arrayLista);
  let i = arrayLista.findIndex(e => e.id === idlist);
  let arrListas = arrayLista[i];
  console.log(arrListas);
  return (card(arrListas, idlist));
  /*
  arrayTareas.push(nameList);
  console.log(arrayTareas);
  return (card(nameList));*/
};

const addToCards = (idList, nameCard, idNewCard, idNewTarea, idBtnTarea) => {
  console.log(idList);
  console.log(idNewCard);
  console.log(idNewTarea);
  let result;

  let found = arrayLista.find(item => {
    if (item.id === idList) {
      /*let datos = new Object();
      datos.name = nameCard;
      datos.cardId = idNewCard;
      datos.tareaId = idNewTarea;
      datos.btnId = idBtnTarea;*/
      item.tareas.push({
        name: nameCard,
        cardId: idNewCard,
        tareaId: idNewTarea,
        btnId: idBtnTarea,
      });
      newCards(idList, nameCard)
      return result = true;
    } else {
      return result = false;
    }
  });
  console.log(arrayLista);
  //if(result){
  //console.log("item.id "+item.id+" idList "+idList);
  //nameList.tareas.push(nameCard);
  //arrayCards.push(nameCard);
  //console.log(arrayLista);
  //return (newCards(idList,nameCard));
  //}


};