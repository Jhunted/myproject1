/*----- constants -----*/
var suits = ['spades', 'clubs', 'diamonds', 'hearts'];
var ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14'];
var player1Card = [];
var player2Card = [];
var warDeck = [];
var isWar = false;

/*----- app's state (variables) -----*/
var shuffledDeck;
var player1Deck = [];
var player2Deck = [];

/*----- cached element references -----*/
// var shuffledContainer = document.getElementById('shuffled-deck-container');
const player1cardrender = document.querySelector('.cardplayer1');
const player2cardrender = document.querySelector('.cardplayer2');


/*----- event listeners -----*/
document.getElementById('play').addEventListener('click', playCards);
document.getElementById('end').addEventListener('click', endGame);
document.getElementById('reset').addEventListener('click', resetGame);

/*----- functions -----*/
init();
renderShuffledDeck();




function init() 
    {
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

function renderShuffledDeck() 
{
  var tempDeck = masterDeck.slice();
  shuffledDeck = [];
  while (tempDeck.length) 
  {
    var rndIdx = Math.floor(Math.random() * tempDeck.length);
    shuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
  }
  
  splitCards(shuffledDeck);
}

function splitCards(shuffledDeck) 
{
    player1Deck = shuffledDeck.slice(0, 26);
    player2Deck = shuffledDeck.slice(26, 53);
}


function playCards() {
    let p1card = player1Deck.shift();
    let p2card = player2Deck.shift();
    warDeck.push(p1card);
    warDeck.push(p2card);
    renderCard();
    
    testFucntion(p1card, p2card, warDeck);
    warDeck = [];
    
};

let testFucntion = (c1, c2, warDeck) => {
    
    console.log('should be readable obj', c1)
    console.log('test function response', c1.rank + " and " + c2.rank)
    if (c1.rank > c2.rank) {
        console.log('p1 wins');
       player1Deck = player1Deck.concat(warDeck);
        
    }
    if (c1.rank < c2.rank) {
        console.log('p2 wins');
       player2Deck = player2Deck.concat(warDeck);
        
    }
    if (c1.rank === c2.rank) { 
        console.log("************LET THERE BE WAR, BITCH!***************");
        war();
    }
}

function war() {
    warDeck = warDeck.concat(player1Deck.splice(0, 3));
    warDeck = warDeck.concat(player2Deck.splice(0, 3));
    playCards(warDeck);
}

function renderWinner() {
    if (player1Deck.length > player2Deck.length) { 
        console.log('player 1 wins')
    } else if (player2Deck.length === player1Deck.length) {
        console.log('tie game')
    } else {
        console.log('winner')
    }

    };




function renderCard() {
    player1cardrender.innerHTML = `<div class="card ${warDeck[0].suit} ${warDeck[0].rank}"></div>`;
    player2cardrender.innerHTML = `<div class="card ${warDeck[1].suit} ${warDeck[1].rank}"></div>`;
}

    function resetGame() {
        init();
}

function endGame() {
    renderWinner();
}