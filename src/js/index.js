
const btnAñadirLista = document.getElementById("btnAñadirL");
const divLista = document.getElementById("tarjeta");
 btnAñadirLista.addEventListener('click',()=>{
    divLista.innerHTML='<div class="card"><div class="form-group"><input id="inputList" type="text" class="form-control" placeholder="Añadir una Lista"><button type="button" class="btn btn-primary" onclick="getInfoList()" >Añadir</button></form></div>';
    btnAñadirLista.style.display="none";
 });

 const getInfoList = () => {
  let listName=document.getElementById(inputList.value);
  if(inputList.value===""){
    console.log("Input Vacio");
    }else{
    console.log("Input lleno");
    addToList(inputList.value);
  }
  
 };