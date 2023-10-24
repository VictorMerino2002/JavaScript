const simbol = {
    spade: "&#9824;",
    heart: "&#9829;",
    club: "&#9827;",
    diamond: "&#9830;"
  };
  
  var deck = [
    [1, simbol.spade],
    [2, simbol.spade],
    [3, simbol.spade],
    [4, simbol.spade],
    [5, simbol.spade],
    [6, simbol.spade],
    [7, simbol.spade],
    [8, simbol.spade],
    [9, simbol.spade],
    [10, simbol.spade],
    [11, simbol.spade],
    [12, simbol.spade],
    [13, simbol.spade],
    [1, simbol.heart],
    [2, simbol.heart],
    [3, simbol.heart],
    [4, simbol.heart],
    [5, simbol.heart],
    [6, simbol.heart],
    [7, simbol.heart],
    [8, simbol.heart],
    [9, simbol.heart],
    [10, simbol.heart],
    [11, simbol.heart],
    [12, simbol.heart],
    [13, simbol.heart],
    [1, simbol.club],
    [2, simbol.club],
    [3, simbol.club],
    [4, simbol.club],
    [5, simbol.club],
    [6, simbol.club],
    [7, simbol.club],
    [8, simbol.club],
    [9, simbol.club],
    [10, simbol.club],
    [11, simbol.club],
    [12, simbol.club],
    [13, simbol.club],
    [1, simbol.diamond],
    [2, simbol.diamond],
    [3, simbol.diamond],
    [4, simbol.diamond],
    [5, simbol.diamond],
    [6, simbol.diamond],
    [7, simbol.diamond],
    [8, simbol.diamond],
    [9, simbol.diamond],
    [10, simbol.diamond],
    [11, simbol.diamond],
    [12, simbol.diamond],
    [13, simbol.diamond]
  ];
  
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  // Set the card color to red if it is a diamond or a heart
  function colorCard(number, deck, div) {
    if (deck[number][1] === simbol.diamond || deck[number][1] === simbol.heart) {
      div.style.color = "red";
    }
  }
  
  function createCard(deck) {
    // Create the blank card
    var card = document.createElement("div");
    card.setAttribute("class", "card");
    number = getRandomInt(deck.length);
    // Add the left number to the card
    var numberCardLeft = document.createElement("div");
    colorCard(number, deck, numberCardLeft);
    numberCardLeft.setAttribute("class", "number-card left");
    numberCardLeft.innerHTML = deck[number][0] + deck[number][1];
    card.setAttribute("data-value", deck[number][0]);
    card.appendChild(numberCardLeft);
    // Add the symbol to the card
    var symbolCard = document.createElement("div");
    colorCard(number, deck, symbolCard);
    symbolCard.setAttribute("class", "center-card");
    symbolCard.innerHTML = deck[number][1];
    card.appendChild(symbolCard);
    // Add the right number to the card
    var numberCardRight = document.createElement("div");
    colorCard(number, deck, numberCardRight);
    numberCardRight.setAttribute("class", "number-card right");
    numberCardRight.innerHTML = deck[number][0] + deck[number][1];
    card.appendChild(numberCardRight);
  
    return [number, card];
  }
  
  async function getCardDealer(numOfCards) {
    var dealer = document.getElementById("dealer");
    for (var i = 0; i < numOfCards; i++) {
      await sleep(400);
      var cardAndNumber = createCard(deck);
      var card = cardAndNumber[1];
      var number = cardAndNumber[0];
      deck.splice(number, 1);
      dealer.appendChild(card);
      console.log(deck);
    }
  }
  
  async function getCardPlayer(numOfCards) {
    var player = document.getElementById("player");
    for (var i = 0; i < numOfCards; i++) {
      await sleep(400);
      var cardAndNumber = createCard(deck);
      var card = cardAndNumber[1];
      var number = cardAndNumber[0];
      deck.splice(number, 1);
      player.appendChild(card);
    }
    compareSum();
  }
  
  function sumCards(playerDiv) {
    var cards = playerDiv.getElementsByClassName("card");
    var suma = 0;
    for (var i = 0; i < cards.length; i++) {
      suma += parseInt(cards[i].dataset.value);
    }
    return suma
  }

  function compareSum(){
    var playerSum = sumCards(player);
    if(playerSum == 21){
        alert("Has ganado");
    }else if(playerSum >21){
        alert("Has perdido");
    }
  }
  
  async function play() {
    var controller = document.getElementById("controller");
    var playButton = document.getElementById("play");
    playButton.remove();
  
    getCardPlayer(2);
    await sleep(1500);
    getCardDealer(1);
  
    var moreCards = document.createElement("button");
    moreCards.innerHTML = "Pedir más cartas";
    moreCards.onclick = function () {
      getCardPlayer(1);
      compareSum();
    };
    controller.appendChild(moreCards);
    var standDown = document.createElement("button");
    standDown.innerHTML = "Plantarse";
    standDown.onclick =async function () {
      console.log("Player stands");
      var dealerSum = sumCards(dealer);
      while(dealerSum < 17){
        getCardDealer(1);
        await sleep(1000);
        dealerSum = sumCards(dealer);
        if(dealerSum >21){
          alert("Has ganado");
        }
      }
      dealerSum = sumCards(dealer);
      alert(dealerSum);
      var playerSum = sumCards(player);
      if(dealerSum<playerSum && dealerSum < 21){
        alert("Has ganado");
      }
      else{
        alert("Has perdido");
      }
    };
    controller.appendChild(standDown);
  }
  