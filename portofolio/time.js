function mostrarHoraActual() {
    // Obtener la fecha y hora actual
    var fechaHora = new Date();
  
    // Obtener los componentes de la fecha y hora
    var horas = fechaHora.getHours();
    var minutos = fechaHora.getMinutes();
    var segundos = fechaHora.getSeconds();
  
    // Formatear los componentes de la hora
    if (horas < 10) {
      horas = '0' + horas;
    }
  
    if (minutos < 10) {
      minutos = '0' + minutos;
    }
  
    if (segundos < 10) {
      segundos = '0' + segundos;
    }
  
    // Mostrar la hora actual en la consola o en una página HTML
    // O bien, si quieres mostrarlo en una página HTML:
    document.getElementById('actual-time').innerHTML = horas + ':' + minutos;
  }
  mostrarHoraActual();
  // Actualizar la hora cada segundo (1000 milisegundos)
  setInterval(mostrarHoraActual, 1000);
  