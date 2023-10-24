"use strict";

function checkButton(btn, tarea) {
    const tareaData = JSON.parse(localStorage.getItem(tarea));
    const isCompleted = tareaData[0];
    const icon = isCompleted ? "" : "✔️";
    btn.style.setProperty("--content",icon);
}

function checkFecha(tareaData){
    const actualDay = new Date().getDate();
    localStorage.setItem("date",actualDay);
    tareaData = (actualDay != localStorage.getItem("date"))? false : tareaData;
    return  tareaData;
}

function crearTarea(nombre) {
    const tareaData = JSON.parse(localStorage.getItem(nombre));

    const tarea = document.createElement("div");
    tarea.className = "tarea";
    tarea.style.background = tareaData[2];

    const titulo = document.createElement("b");
    titulo.textContent = nombre;
    tarea.appendChild(titulo);

    const btnRemove = document.createElement("button");
    btnRemove.className = "btn-remove";
    btnRemove.addEventListener("click", ()=>{
        if(window.confirm("Quieres eliminar esta tarea?")){
            localStorage.removeItem(nombre);
            contenedor.removeChild(tarea);
        }
    })
    tarea.appendChild(btnRemove);

    const horaTarea = document.createElement("i");
    horaTarea.textContent = tareaData[1];
    tarea.appendChild(horaTarea);

    const btnTarea = document.createElement("button");
    btnTarea.className = "btn-tarea";
    btnTarea.addEventListener("click", () => {
        tareaData[0] = !tareaData[0];
        localStorage.setItem(nombre, JSON.stringify(tareaData));
        checkButton(btnTarea, nombre);
        chechDiasConsecutivos();
    });

    tarea.appendChild(btnTarea);

    const contenedor = document.getElementById("contenedor"); 
    contenedor.appendChild(tarea);

    tareaData[0] = checkFecha(tareaData[0]);
    localStorage.setItem(nombre, JSON.stringify(tareaData));
    checkButton(btnTarea, nombre); 
}

function loadAllTask(){
    for (var i = 0; i < localStorage.length; i++) {
        var clave = localStorage.key(i); // Obtiene la clave actual
    
        // Obtiene el objeto asociado a la clave actual
        var objetoAlmacenado = localStorage.getItem(clave);
    
        try {
            // Intenta parsear el objeto almacenado en JSON
            var objeto = JSON.parse(objetoAlmacenado);
    
            // Verifica si el objeto es un objeto y contiene un array
            if (typeof objeto === 'object' && (objeto[0].toString() == "true" || objeto[0].toString() == "false")) {
                // Muestra todas las propiedades del objeto
                crearTarea(clave);
            }
        } catch{}
    }
}

loadAllTask();
