/*----- constants -----*/
var suits = ['spades', 'clubs', 'diamonds', 'hearts'];
var ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14'];
var player1Card = [];
var player2Card = [];
var warDeck = [];
var isWar = false;
const counterplayer1 = document.getElementById('counterplayer1')
const counterplayer2 = document.getElementById('counterplayer2')
let cardCount

/*----- app's state (variables) -----*/
var shuffledDeck;
var player1Deck = [];
var player2Deck = [];

/*----- cached element references -----*/
const player1cardrender = document.querySelector('.cardplayer1');
const player2cardrender = document.querySelector('.cardplayer2');

document.getElementById('play').addEventListener('click', playCards);
document.getElementById('end').addEventListener('click', endGame);
document.getElementById('reset').addEventListener('click', resetGame);

/*----- functions -----*/
init();
splitCards(copyDeck());

function init() 
    {
        console.log("RESETTING GAME");
        cardCount = {
            player1: 0,
            player2: 0
        };
            cardCounter();
        masterDeck = buildMasterDeck();  
        player1cardrender.innerHTML = `<div class="card back-blue"></div>`;
        player2cardrender.innerHTML = `<div class="card back-blue"></div>`;    
    }
   
    function buildMasterDeck() {
        var deck = [];
        suits.forEach(function(suit) {
          ranks.forEach(function(rank) {
            deck.push({
             face: `${suit}${rank}`,
             suit: `${suit}`,
             rank: `r${rank}`
            });
          });
        });
        return deck;
    }

function copyDeck() 
{
  var tempDeck = masterDeck.slice();
  shuffledDeck = [];
  while (tempDeck.length) 
  {
    var rndIdx = Math.floor(Math.random() * tempDeck.length);
    shuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
  }
  
   return shuffledDeck;
}

function splitCards(shuffledDeck) 
{
    player1Deck = shuffledDeck.slice(0, 26);
    player2Deck = shuffledDeck.slice(26, 53);
}

function playCards() {

    if(player1Deck.length === 0 || player2Deck.length === 0)
    {
        renderWinner();
    }
    cardCounter();

    let p1card = player1Deck.shift();
    let p2card = player2Deck.shift();


    warDeck.push(p1card);
    warDeck.push(p2card);

    renderCard();
        
    comparison(p1card, p2card, warDeck);
    warDeck = [];
    
};

let comparison = (c1, c2, warDeck) => {
    if (c1.rank > c2.rank) {
       player1Deck = player1Deck.concat(warDeck);
        
    }
    if (c1.rank < c2.rank) {
       player2Deck = player2Deck.concat(warDeck);
        
    }
    if (c1.rank === c2.rank) { 
        war();
        window.alert("WAR!")
    }
    cardCounter();
}

function war() {
    warDeck = warDeck.concat(player1Deck.splice(0, 3));
    warDeck = warDeck.concat(player2Deck.splice(0, 3));
    playCards(warDeck);
}

function renderWinner() {
    if (player1Deck.length > player2Deck.length) { 
        window.alert("player 1 wins");
        
    }  else if (player2Deck.length > player1Card.length){
        window.alert("Comp wins")
    
    }
    else if (player2Deck.length === player1Deck.length) {
        window.alert("tie game!")
    
    }
};

function cardCounter() {
    cardCount.player1 = (counterplayer1.textContent = player1Deck.length);
    cardCount.player2 = (counterplayer2.textContent = player2Deck.length);
}

function renderCard() {
    player1cardrender.innerHTML = `<div class="card ${warDeck[0].suit} ${warDeck[0].rank}"></div>`;
    player2cardrender.innerHTML = `<div class="card ${warDeck[1].suit} ${warDeck[1].rank}"></div>`;
}

function resetGame() {
    init();
    splitCards(copyDeck());
    cardCounter();
}

function endGame() {
    window.alert('game Over')
    renderWinner();
}