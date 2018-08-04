
const btnAñadirLista = document.getElementById("btnAñadirL");
const divLista = document.getElementById("tarjeta");
 btnAñadirLista.addEventListener('click',()=>{
    divLista.innerHTML='<div class="card"><div class="form-group"><input type="text" class="form-control" placeholder="Añadir una Lista"><button type="button" class="btn btn-primary">Añadir</button></form></div>';
    btnAñadirLista.style.display="none";
 });