const btnNuevaTarea = document.querySelector(".btn-new-tarea");
const addNewTarea = document.getElementById("new-tarea-submit");
const btnClose = document.getElementById("btn-close");
const inputContainer = document.querySelector(".new-tarea-container");

btnNuevaTarea.addEventListener("click",()=>{
    inputContainer.style.display = "flex";
});

btnClose.addEventListener("click",()=>{
    inputContainer.style.display = "none";
})

addNewTarea.addEventListener("click",()=>{
    let nombreTarea = document.getElementById("nombre").value;
    let horaTareaNueva = document.getElementById("hora").value;
    let color = document.getElementById("color").value;

    localStorage.setItem(nombreTarea, JSON.stringify([false, horaTareaNueva,color]));
    crearTarea(nombreTarea);
    document.getElementById("nombre").value = '';
    document.getElementById("hora").value = '';
    document.getElementById("color").value = '';

    inputContainer.style.display = "none";
});