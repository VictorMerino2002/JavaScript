// Crea un elemento de botón
var button = document.createElement("button");
// Asigna un texto al botón
button.innerText = "Siguiente capitulo";
// Añade un evento de clic al botón
button.addEventListener("click", function() {
  loadAllEpisodes();
  ejecutarDespuesDeEspera();
});

// Establece los estilos CSS para el botón
button.style.position = "fixed";
button.style.bottom = "10px";
button.style.right = "10px";
button.style.zIndex = "9999";

// Añade el botón al cuerpo de la página
document.body.appendChild(button);

function loadAllEpisodes() {
  const episodeList = document.getElementById('episodeList');
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.addedNodes.length > 0) {
        episodeList.scrollTop = episodeList.scrollHeight;
        return;
      }
    }
  });

  observer.observe(episodeList, { childList: true, subtree: true });
  episodeList.scrollTop = episodeList.scrollHeight;
}

function ejecutarDespuesDeEspera() {
  setTimeout(() => {
    const episodeElements = document.querySelectorAll('li.fa-play-circle');
    let lastUnwatchedEpisodeLink;
    for (let i = episodeElements.length - 1; i >= 0; i--) {
      const checkbox = episodeElements[i].querySelector('input[type="checkbox"]');
      if (checkbox && !checkbox.checked) {
        lastUnwatchedEpisodeLink = episodeElements[i].querySelector('a').getAttribute('href');
        break;
      }
    }
    if (lastUnwatchedEpisodeLink) {
      window.location.href = lastUnwatchedEpisodeLink;
    }
  }, 1000);
}
