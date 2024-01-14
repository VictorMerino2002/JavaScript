function loadAllEpisodes() {
    return new Promise((resolve) => {
      const episodeList = document.getElementById('episodeList');
      const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (mutation.addedNodes.length > 0) {
            episodeList.scrollTop = episodeList.scrollHeight;
            return;
          }
        }
        resolve();
      });
  
      observer.observe(episodeList, { childList: true, subtree: true });
      episodeList.scrollTop = episodeList.scrollHeight;
    });
  }
  
  // Cargar todos los episodios antes de buscar el último sin marcar como visto
  loadAllEpisodes().then(() => {
    const episodeElements = document.querySelectorAll('li.fa-play-circle');
    let lastUnwatchedEpisodeLink;
    for (let i = episodeElements.length - 1; i >= 0; i--) {
      const checkbox = episodeElements[i].querySelector('input[type="checkbox"]');
      if (checkbox && !checkbox.checked) {
        lastUnwatchedEpisodeLink = episodeElements[i].querySelector('a').getAttribute('href');
        break;
      }
    }
  });

// Función que se ejecutará después de 3 segundos
function ejecutarDespuesDeEspera() {
    // Obtener todos los elementos <li> con clase "fa-play-circle"
    const episodeElements = document.querySelectorAll('li.fa-play-circle');
  
    // Buscar el último episodio sin marcar como visto
    let lastUnwatchedEpisodeLink;
    for (let i = episodeElements.length - 1; i >= 0; i--) {
      const checkbox = episodeElements[i].querySelector('input[type="checkbox"]');
      // Verificar si el episodio existe y no tiene la clase "checked"
      if (checkbox && !checkbox.checked) {
        lastUnwatchedEpisodeLink = episodeElements[i].querySelector('a').getAttribute('href');
        break;
      }
    }
  
    // Redirigir a la página del último episodio sin marcar como visto
    if (lastUnwatchedEpisodeLink) {
      window.location.href = lastUnwatchedEpisodeLink;
    }
  }
  
  // Esperar 3 segundos (3000 milisegundos) antes de llamar a la función
  setTimeout(ejecutarDespuesDeEspera, 3000);
