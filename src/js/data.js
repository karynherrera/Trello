let arrayLista = [];

// agrega a un arreglo de objetos los datos de la lista 
const addToList = (idlist, nameList) => {
  let lista = new Object();
  lista.id = idlist;
  lista.name = nameList;
  lista.tareas = [];
  arrayLista.push(lista);
  console.log(arrayLista);
  let i = arrayLista.findIndex(e=>e.id===idlist);
  let arrListas = arrayLista[i];
  console.log(arrListas);
  return (card(arrListas));
  /*
  arrayTareas.push(nameList);
  console.log(arrayTareas);
  return (card(nameList));*/
};

const addToCards = (idList,nameCard) => {
  let arrayCards = [];
  let result;
  let found = arrayLista.find(item => {
    if (item.id === idList) {
      item.tareas.push(nameCard);
      newCards(idList,nameCard)
      return result = true;
    } else {
      return result = false;
    } 
  });
  //if(result){
    //console.log("item.id "+item.id+" idList "+idList);
  //nameList.tareas.push(nameCard);
  //arrayCards.push(nameCard);
  //console.log(arrayLista);
  //return (newCards(idList,nameCard));
  //}
  
  
};