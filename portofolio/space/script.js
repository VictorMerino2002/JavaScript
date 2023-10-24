let playerDiv = document.getElementById("player");
let gameWidth = document.getElementById("gameScreen").clientWidth - playerDiv.clientWidth; // Resta el ancho del div
let playerPosition = 300;

function checkPosition() {
  if (playerPosition < 300) {
    playerPosition = 300;
  } else if (playerPosition > gameWidth+300) {
    playerPosition = gameWidth+300;
  }
  playerDiv.style.left = playerPosition + "px";
}

document.addEventListener('keydown', (e) => {
  const key = e.key;

  switch (key) {
    case "a":
      playerPosition -= (gameWidth/2);
      break;
    case "d":
      playerPosition += (gameWidth/2);
      break;
  }
  checkPosition();
});

checkPosition();
