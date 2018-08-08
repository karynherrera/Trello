let countList = 0;
let countCard=0;
const btnAñadirLista = document.getElementById("btnAñadirL");
const divLista = document.getElementById("tarjeta");

btnAñadirLista.addEventListener('click', () => {
  console.log("creamos lista1");
  btnAñadirLista.style.display="none";
  showList();
});

const showList=()=>{
  //divLista.style.display="none";
  countList=countList+1;
  inputListId = "input"+countList;
  btnListaId = "btnLista"+countList;
  btnAddId ="addId"+countList;
  IdCard ="card"+countList;
  btnCloseId ="card"+countList;
 
  divLista.innerHTML += `<section id="${IdCard}" class="card show">
  <div class="form-group"><input id="${inputListId}" type="text" class="form-control" placeholder="Añadir una Lista" autofocus="autofocus">
  <button id="${btnListaId}" type="button" class="btnForm btn-primary" onclick="getInfoList()" >Añadir Lista
  </button>
  <button id="${btnCloseId}" type="button"  class="btnCerrar btn-primary" >
  <i class="fas fa-times">
  </i>
  </button> 
  </div>
  </section>
  <button id="${btnAddId}" class="btn-outline-success m-0 my-2 my-sm-0 mx-2 space btnFake " type="button" onclick="clean()">
  <h7 class="m-0 p-0"><i class="fas fa-plus space"></i>Añada Otra Lista...</h7>
</button>`;
const btn = document.getElementById(btnCloseId);
btn.addEventListener('onclick',()=>{
  close();
 });
  return(0);
};

const clean=()=>{
  const btnAdd = document.getElementById(btnAddId);
  btnAdd.style.display="none";
  showList();
}

const activate=()=>{
  btnListaId.disabled=false;
}

const getInfoList = () => {
  const cardVacia = document.getElementById(IdCard);
  cardVacia.style.display="none";
  const inputList = document.getElementById(inputListId);
  if (inputList.value === "") {
    btnListaId.disabled=true;
    inputList.focus();
  } else {
    btnListaId.disabled=false;
    addToList(inputList.value);
  }
}

const card = (nameList) => {
  countCard=countCard+1;
  tarjetaNewId = "tarjetaNew"+countCard;
  addCardId = "addCard"+countCard;
  cardsId = "cards"+countCard;
  divLista.innerHTML += `<div class="card"><div class="form-group" id="${tarjetaNewId}"><strong><p>${nameList}</p></strong><div id="${cardsId}"></div><div id="${addCardId}"><button class="btnForm btn-outline-success m-0 p-0 my-2 my-sm-0 space btnCard"  type="button"  onclick="createCard()">
  <h6 class="m-0 p-0"><i class="fas fa-plus space"></i>Añadir Tarjeta...</h6>
</button></div></div></div>`;
}

const createCard = () => {
  inputCardId = "inputCard"+countCard;
  btnAddCardId = "btnAddCard"+countCard;
  const divCard = document.getElementById(addCardId);
  divCard.innerHTML = `<textarea class="inputCard" id="${inputCardId}" placeholder="Titulo de la Tarjeta..." onclick="activar()" autofocus="autofocus"></textarea>
  <button id="${btnAddCardId}" type="button" class=" btn-primary btnForm" onclick="getInfoCards()">Añadir Tarjeta</button><button type="button" onclick="close()" class="btnCerrar btn-primary"><i class="fas fa-times"></i></button>
  `;
  
}

const activar=()=>{
  btnAddCardId.disabled=false; 
}

const getInfoCards = () => {
  
  let inputCard = document.getElementById(inputCardId);
  if (inputCard.value === "") {
    btnAddCardId.disabled=true;
    inputCard.focus();
  } else {
    btnAddCardId.disabled=false;
    addToCards(inputCard.value);
  }
};

const newCards = (name) => {
  const newCard = document.getElementById(cardsId);
  const titleCard=document.getElementById(inputCardId);
  newCard.innerHTML += `<div><p class="tarea">${name}</p></div>`;
  titleCard.value="";
  titleCard.focus();
}




const close = () => {
  console.log("holi");
  const newCard = document.getElementById(IdCard);
  newCard.classList.remove('show');
  newCard.classList.add('disappear');
  console.log(IdCard);
}