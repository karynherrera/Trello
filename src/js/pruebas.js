let countList = 0;
let countCard = 0;
const btnAñadirLista = document.getElementById("btnAñadirL");
const divLista = document.getElementById("tarjeta");

btnAñadirLista.addEventListener('click', () => {
  console.log("creamos lista1");
  btnAñadirLista.style.display = "none";
  showList();
});

//showList() pinta el formulario para agregar una nueva lista
const showList = () => {
  //divLista.style.display="none";
  countList = countList + 1;
  inputListId = "input" + countList;
  btnListaId = "btnLista" + countList;
  btnAddId = "addId" + countList;
  IdCard = "card" + countList;
  btnCloseId = "btnClose" + countList;

  divLista.innerHTML += `<section id="${IdCard}" class="card show">
  <div class="form-group"><input id="${inputListId}" type="text" class="form-control" placeholder="Añadir una Lista" autofocus="autofocus">
  <button id="${btnListaId}" type="button" class="btnForm btn-primary" onclick="getInfoList(IdCard)" >Añadir Lista
  </button>
  <button id="${btnCloseId}" type="button" class="btnCerrar btn-primary" onclick="close()" ><i class="fas fa-times" onclick="close()">
  </i>
  </button>
  </div>
  </section>
  <button id="${btnAddId}" class="btn-outline-success m-0 my-2 my-sm-0 mx-2 space btnFake " type="button" onclick="clean()">
  <h7 class="m-0 p-0"><i class="fas fa-plus space"></i>Añada Otra Lista...</h7>
</button>`;
  return (0);
};

const clean = () => {
  const btnAdd = document.getElementById(btnAddId);
  btnAdd.style.display = "none";
  showList();
}

const activate = () => {
  btnListaId.disabled = false;
}

// getInfoList() verifica si esta algun campo vacio, sino, llama a la sig funcion
const getInfoList = (idLista) => {
  const cardVacia = document.getElementById(IdCard);
  cardVacia.style.display = "none";
  const inputList = document.getElementById(inputListId);
  if (inputList.value === "") {
    btnListaId.disabled = true;
    inputList.focus();
  } else {
    btnListaId.disabled = false;
    addToList(idLista, inputList.value);
  }
}

//la funcion card() pinta el form para agregar una tarea
const card = (arrayList, idlist) => {
  console.log(arrayList.name);
  nameLista = arrayList.name;
  idLista = arrayList.id;
 // console.log("idLista sacado del array " + idLista);
 // console.log("idLista traido dela funcion " + idlist);
  countCard = countCard + 1;
  tarjetaNewId = "tarjetaNew" + countCard;
  addCardId = "addCard" + countCard;
  cardsId = "cards" + countCard;
  plusCard = "agregarCard" + countCard;
  divLista.innerHTML += `<div class="card"><div class="form-group" id="${tarjetaNewId}"><strong><p>${nameLista}</p></strong><div id="${cardsId}"></div><div id="${addCardId}"><button id="${plusCard}" class="btnForm btn-outline-success m-0 p-0 my-2 my-sm-0 space btnCard"  type="button"  onclick="currentData(idLista,tarjetaNewId,cardsId,this.id)">
  <h6 class="m-0 p-0"><i class="fas fa-plus space"></i>Añadir Tarjeta...</h6>
</button></div></div></div>`;
let idNewCard = document.getElementById(tarjetaNewId);
let idNewTarea = document.getElementById(cardsId);
let idBtnTarea = document.getElementById(plusCard);
}

const currentData = (idLista,idNewCard,idNewTarea,idBtnTarea) => {
  console.log("ids actuales "+idLista,idNewCard,idNewTarea,idBtnTarea);
    let btn,idCurrentList;
    //btn=idBtn.charAt(idBtn.length-1);
    //addCardId = "addCard"+btn;
    createCard(idLista,idNewCard,idNewTarea,idBtnTarea);
  }

  const createCard = (idLista,idNewCard,idNewTarea,idBtnTarea) => {
    console.log("ids en createcard "+idLista,idNewCard,idNewTarea,idBtnTarea);
    inputCardId = "inputCard" + countCard;
    btnAddCardId = "btnAddCard" + countCard;
    btnCerrar = "btnCloseCard" + countCard;
    const divCard = document.getElementById(addCardId);
    divCard.innerHTML = `<textarea class="inputCard" id="${inputCardId}" placeholder="Titulo de la Tarjeta..." onclick="activar()" autofocus="autofocus"></textarea>
  <button id="${btnAddCardId}" type="button" class=" btn-primary btnForm" onclick="getInfoCards('${idLista}','${idNewCard}','${addCardId}','${btnAddCardId}')">Añadir Tarjeta</button><button id="${btnCerrar}" type="button" onclick="close()" class="btnCerrar btn-primary"><i class="fas fa-times"></i></button>
  `;
  
  }

  const activar = () => {
    btnAddCardId.disabled = false;
  }

  const getInfoCards = (idLista,idNewCard,idNewTarea,idBtnTarea) => {
    console.log("ids actuales en getinfocards "+idLista,idNewCard,idNewTarea,idBtnTarea);
    let inputCard = document.getElementById(inputCardId);
    if (inputCard.value === "") {
      btnAddCardId.disabled = true;
      inputCard.focus();
    } else {
      btnAddCardId.disabled = false;
      addToCards(idLista,inputCard.value,idNewCard,idNewTarea,idBtnTarea);
    }
  };

  const newCards = (idList, name) => {
    const cardVacia = document.getElementById(addCardId);
    cardVacia.innerHTML = `<button id="${plusCard}" class="btnForm btn-outline-success m-0 p-0 my-2 my-sm-0 btnCard"  type="button"  onclick="createCard(idLista)">
  <h6 class="m-0 p-0"><i class="fas fa-plus space"></i>Añadir Tarjeta...</h6>
</button>`;
    const listaReference = document.getElementById(IdCard);
    const newCard = document.getElementById(cardsId);
    const titleCard = document.getElementById(inputCardId);
    newCard.innerHTML += `<div><p class="tarea">${name}</p></div>`;

  }

  
  const close = () => {
    console.log("holi");
    //const newCard = document.getElementById("IdCard");
    //newCard.style.display="none";
  }