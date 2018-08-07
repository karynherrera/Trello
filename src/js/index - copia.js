
let countclickList = 0;
const btnAñadirLista = document.getElementById("btnAñadirL");
const divLista = document.getElementById("tarjeta");
btnAñadirLista.addEventListener('click', () => {
  countclickList=countclickList++;

  if(divLista.innerHTML === ''){
    divLista.innerHTML = '<div class="col"><div class="card"><div class="form-group"><input id="inputList" type="text" class="form-control" placeholder="Añadir una Lista" onclick="activate()"><button id="btnLista"  type="button" class="btnForm btn-primary" onclick="getInfoList()" >Añadir Lista</button><button type="button" class="btnCerrar btn-primary" onclick="close()"><i class="fas fa-times"></i></button></div></div></div>';
  inputList.focus();

  }else{
    divLista.innerHTML += '<div class="col"><div class="card"><div class="form-group"><input id="inputList" type="text" class="form-control" placeholder="Añadir una Lista" onclick="activate()"><button id="btnLista"  type="button" class="btnForm btn-primary" onclick="getInfoList()" >Añadir Lista</button><button type="button" class="btnCerrar btn-primary" onclick="close()"><i class="fas fa-times"></i></button></div></div></div>';
  //btnAñadirLista.style.display = "none";
  //btnAñadirLista.style.position='20%';
  //divLista.classList.add("move");
  //btnAñadirLista.classList.add("move");
  //inputList.focus();
  }
  
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
  divLista.innerHTML += `<div class="card"><div class="form-group" id="tarjetaNew"><strong><p>${nameList}</p></strong><div id="cards"></div><div id="addCard"><button class="btnForm btn-outline-success m-0 p-0 my-2 my-sm-0 space btnCard"  type="button"  onclick="createCard()">
  <h6 class="m-0 p-0"><i class="fas fa-plus space"></i>Añadir Tarjeta...</h6>
</button></div></div></div>`;
}

const createCard = () => {
  const divCard = document.getElementById("addCard");
  divCard.innerHTML += `<textarea id="inputCard" placeholder="Titulo de la Tarjeta..." onclick="activar()"></textarea>
  <button id="btnAddCard" type="button" class=" btn-primary btnForm" onclick="getInfoCards()">Añadir Tarjeta</button><button type="button" class="btnCerrar btn-primary"><i class="fas fa-times"></i></button>
  `;
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


/////////////////////////////////////////////////////
//////////////////////////////////////////////////
///////////////////////////////////////////////////

let countList = 0;
let inputcount =4;
let sectionCount=0;
const btnAñadirLista = document.getElementById("btnAñadirL");
const divLista = document.getElementById("tarjeta");
btnAñadirLista.addEventListener('click', () => {
  console.log("creamos lista1");
  showList();
});

const showList=()=>{
  countList++;
  divLista.innerHTML = `<section class="card">
  <div class="form-group"><input type="text" class="form-control" placeholder="Añadir una Lista" autofocus="autofocus">
  <button type="button" class="btnForm btn-primary" onclick="getInfoList()" >Añadir Lista
  </button>
  <button type="button" class="btnCerrar btn-primary">
  <i class="fas fa-times">
  </i>
  </button> 
  </div>
  </section>`;
  
  return(0);
};

const getInfoList = () => {
  inputcount=inputcount+1;
  let inputList= document.getElementsByTagName('input')[inputcount];
  if (inputList.value === "") {
    //btnLista.disabled=true;
    inputList.focus();
  } else {
    //btnLista.disabled=false;
    addToList(inputList.value);
  }
}



const card = (nameList) => {

  sectionCount=sectionCount+3;
  let sectionCard= document.getElementsByTagName('section')[sectionCount];
  let idCard= "id" + sectionCount;

  console.log(idCard);
  divLista.innerHTML += `<div class="card"><div class="form-group" id="tarjetaNew"><strong><p>${nameList}</p></strong><div id="cards"></div><div id="${idCard}"><button class="btnForm btn-outline-success m-0 p-0 my-2 my-sm-0 space btnCard"  type="button"  onclick="createCard()">
  <h6 class="m-0 p-0"><i class="fas fa-plus space"></i>Añadir Tarjeta...</h6>
</button></div></div></div>`;
 const prueba = document.getElementById(idCard);
 prueba.innerHTML='<div>hola mundo</div>';
} 
