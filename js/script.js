/*----- constants -----*/
var suits = ['s', 'c', 'd', 'h'];
var ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
var player1Deck = [];
var player2Deck = [];
var player1Card = ('');
var player2Card = ('');
var war = [];
// build a 'master' deck of 'card' objects used to create shuffled decks
var masterDeck = buildMasterDeck();
renderDeckInContainer(masterDeck, document.getElementById('master-deck-container'));

/*----- app's state (variables) -----*/
var shuffledDeck;

/*----- cached element references -----*/
var shuffledContainer = document.getElementById('shuffled-deck-container');

/*----- event listeners -----*/
document.querySelector('button').addEventListener('click', renderShuffledDeck);

/*----- functions -----*/
function renderShuffledDeck() {
  // create a copy of the masterDeck (leave masterDeck untouched!)
  var tempDeck = masterDeck.slice();
  shuffledDeck = [];
  while (tempDeck.length) {
    var rndIdx = Math.floor(Math.random() * tempDeck.length);
    shuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
  }
}

function splitCards(deck) {
    var i = 0;
    while(i != deck.length) {
        player1Hand.push(deck[i]);
        player2Hand.push(deck[(i+1)]);
        i+=2
    }
}



function compare() {
   
    if (player1Card === player2Card)
    {
        war();    
    } 
    else 
    {
        player1Card > player2Card ? player1Deck.push() : player2Deck.push();
    }

}

function war() {
    var warA = 4;
    if (player1Deck.length >= warA && player2Deck.length >= warA)
        {
            for(var i = 0; i < 3; i++)
            {
                player1Deck.pop();
            }
            for(var i = 0; i < 3; i++)
            {
                player2Deck.pop();
            }
        }
    if else(player1Deck.length <= warA)
        {
            
        }
}

