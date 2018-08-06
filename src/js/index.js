
const btnAñadirLista = document.getElementById("btnAñadirL");
const divLista = document.getElementById("tarjeta");
btnAñadirLista.addEventListener('click', () => {
  divLista.innerHTML = '<div class="card"><div class="form-group"><input id="inputList" type="text" class="form-control" placeholder="Añadir una Lista"><button type="button" class="btnForm btn-primary" onclick="getInfoList()" >Añadir Lista</button><button type="button" class="btnCerrar btn-primary" onclick="close()"><i class="fas fa-times"></i></button></div></div>';
  btnAñadirLista.style.display = "none";
  //const inputTarget = document.getElementById(inputList).focus();
  inputList.focus();
});

const getInfoList = () => {
  let listName = document.getElementById(inputList.value);
  if (inputList.value === "") {
  } else {
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
  divCard.innerHTML = `<div id="addCard"><textarea id="inputCard" placeholder="Titulo de la Tarjeta..."></textarea>
  <button type="button" class=" btn-primary btnForm" onclick="newCards()">Añadir Tarjeta</button><button type="button" class="btnCerrar btn-primary"><i class="fas fa-times"></i></button>
  </div>`;
  inputCard.focus();
}

const newCards = (name) => {
  const newCard = document.getElementById("cards");
  const titleCard=document.getElementById("inputCard");
  newCard.innerHTML = `<div class="cards"><p>${titleCard.value}</p></div>`;
  titleCard.value="";
}

const close = () => {
  divLista.innerHTML = '<div class="card"></div>';
  btnAñadirLista.style.display = "block";
}