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
  countList=countList+1;
  inputList = "input"+countList;
  divLista.innerHTML = `<section class="card">
  <div class="form-group"><input id="${inputList}" type="text" class="form-control" placeholder="Añadir una Lista" autofocus="autofocus">
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
  //let inputList= document.getElementsByTagName('input')[inputcount];
  const inputList = document.getElementById(inputList);
  if (inputList.value === "") {
    //btnLista.disabled=true;
    inputList.focus();
  } else {
    //btnLista.disabled=false;
    addToList(inputList.value);
  }
}

const card = (nameList) => {
  divLista.innerHTML += `<div class="card"><div class="form-group" id="tarjetaNew"><strong><p>${nameList}</p></strong><div id="cards"></div><div id="addCard"><button class="btnForm btn-outline-success m-0 p-0 my-2 my-sm-0 space btnCard"  type="button"  onclick="createCard()">
  <h6 class="m-0 p-0"><i class="fas fa-plus space"></i>Añadir Tarjeta...</h6>
</button></div></div></div>`;
}

/*
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
} */
