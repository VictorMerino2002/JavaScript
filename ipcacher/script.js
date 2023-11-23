// Verifica si el navegador soporta la geolocalización
if ("geolocation" in navigator) {
    // Obtiene la ubicación actual
    navigator.geolocation.getCurrentPosition(function(position) {
      var latitud = position.coords.latitude;
      var longitud = position.coords.longitude;
  
      console.log(latitud +" " + longitud);
    }, function(error) {
      // Maneja los errores de geolocalización
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.error("El usuario denegó la solicitud de geolocalización.");
          break;
        case error.POSITION_UNAVAILABLE:
          console.error("La información de ubicación no está disponible.");
          break;
        case error.TIMEOUT:
          console.error("Se ha agotado el tiempo para obtener la ubicación.");
          break;
        case error.UNKNOWN_ERROR:
          console.error("Se produjo un error desconocido.");
          break;
      }
    });
  } else {
    // El navegador no soporta geolocalización
    console.error("La geolocalización no es compatible con este navegador.");
  }
  