
const btnAñadirLista = document.getElementById("btnAñadirL");
const divLista = document.getElementById("tarjeta");
 btnAñadirLista.addEventListener('click',()=>{
    divLista.innerHTML='<div class="card"><div class="form-group"><input id="inputList" type="text" class="form-control" placeholder="Añadir una Lista"><button type="button" class="btn btn-primary" onclick="getInfoList()" >Añadir</button></form></div>';
    btnAñadirLista.style.display="none";
 });

 const getInfoList = () => {
  let listName = document.getElementById(inputList.value);
  if(inputList.value === ""){
    }else{
    addToList(inputList.value);
  }
 };

 const card = (nameList) => { 
  divLista.innerHTML=`<div class="card"><div class="form-group" id="tarjetaNew"><strong><p>${nameList}</p></strong><button class="btn btn-outline-success m-0 p-0 my-2 my-sm-0 space btnCard"  type="button">
  <h6 class="m-0 p-0"><i class="fas fa-plus space"></i>Añadir Tarjeta...</h6>
</button></form></div>`;
 }