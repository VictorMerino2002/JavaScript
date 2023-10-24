const contador = document.getElementById("contador");

function chechDiasConsecutivos(){

    let fechaActual = new Date().getDate();

    if(!localStorage.getItem("diasConsecutivos")){
        console.log("No Existe");
        localStorage.setItem("diasConsecutivos",`[0,${fechaActual}]`);
    }


    let tareas = [];
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
                
                tareas.push(objeto[0]);
            }
        } catch{}
    }

    let contadorTrue = 0;
    for(i in tareas){
        if(tareas[i]){
            contadorTrue++
        }
    }

    let diasConsecutivos = JSON.parse(localStorage.getItem("diasConsecutivos"))[0];
    if(contadorTrue == tareas.length){
        let ultimaFecha = JSON.parse(localStorage.getItem("diasConsecutivos"))[1];
        if(ultimaFecha == fechaActual-1){
            console.log("sI");
            localStorage.setItem("diasConsecutivos",`[${diasConsecutivos+1},${fechaActual}]`);
            contador.innerHTML = `<div>Dias Consecutivos:</div><div>${diasConsecutivos+1}</div>`;
        }else{
            localStorage.setItem("diasConsecutivos",`[${diasConsecutivos},${fechaActual}]`);
        }
        //localStorage.setItem("diasConsecutivos",`[${diasConsecutivos+1},${}]`)
    }return `<div>Dias Consecutivos:</div><div>${diasConsecutivos}</div>`;

    
}

contador.innerHTML = chechDiasConsecutivos();

