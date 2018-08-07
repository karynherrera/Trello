
const btnAñadirLista = document.getElementById("btnAñadirL");
const divLista = document.getElementById("tarjeta");
btnAñadirLista.addEventListener('click', () => {
  divLista.innerHTML = '<div class="card"><div class="form-group"><input id="inputList" type="text" class="form-control" placeholder="Añadir una Lista" onclick="activate()"><button id="btnLista"  type="button" class="btnForm btn-primary" onclick="getInfoList()" >Añadir Lista</button><button type="button" class="btnCerrar btn-primary" onclick="close()"><i class="fas fa-times"></i></button></div></div>';
  //btnAñadirLista.style.display = "none";
  //btnAñadirLista.style.position='20%';
  //btnAñadirLista.classList.add("move");
  //const inputTarget = document.getElementById(inputList).focus();
  inputList.focus();
  //btnAñadirLista.style.display = "block";
});

const activate=()=>{
  btnLista.disabled=false;
}

const getInfoList = () => {
  let listName = document.getElementById(inputList.value);
  if (inputList.value === "") {
    btnLista.disabled=true;
    inputList.focus();
  } else {
    btnLista.disabled=false;
    addToList(inputList.value);
  }
};

const card = (nameList) => {
  divLista.innerHTML = `<div class="card"><div class="form-group" id="tarjetaNew"><strong><p>${nameList}</p></strong><div id="cards"></div><div id="addCard"><button class="btnForm btn-outline-success m-0 p-0 my-2 my-sm-0 space btnCard"  type="button"  onclick="createCard()">
  <h6 class="m-0 p-0"><i class="fas fa-plus space"></i>Añadir Tarjeta...</h6>
</button></div></form></div>`;
}

const createCard = () => {
  const divCard = document.getElementById("addCard");
  divCard.innerHTML = `<div id="addCard"><textarea id="inputCard" placeholder="Titulo de la Tarjeta..." onclick="activar()"></textarea>
  <button id="btnAddCard" type="button" class=" btn-primary btnForm" onclick="getInfoCards()">Añadir Tarjeta</button><button type="button" class="btnCerrar btn-primary"><i class="fas fa-times"></i></button>
  </div>`;
  inputCard.focus();
}

const activar=()=>{
  btnAddCard.disabled=false; 
}

const getInfoCards = () => {
  let listName = document.getElementById(inputCard.value);
  if (inputCard.value === "") {
    btnAddCard.disabled=true;
    inputCard.focus();
  } else {
    btnAddCard.disabled=false;
    addToCards(inputCard.value);
  }
};

const newCards = (name) => {
  const newCard = document.getElementById("cards");
  const titleCard=document.getElementById("inputCard");
  newCard.innerHTML += `<div><p>${name}</p></div>`;
  titleCard.value="";
  inputCard.focus();
}

const close = () => {
  divLista.innerHTML = '<div class="tarjeta"></div>';
  //btnAñadirLista.style.display = "block";
}