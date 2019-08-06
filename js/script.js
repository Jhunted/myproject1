/*----- constants -----*/
var suits = ['s', 'c', 'd', 'h'];
var ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
var player1Deck = [];
var player2Deck = [];
var player1Card = ('');
var player2Card = ('');
var player1Hand = ('');
var player2Hand = ('');
var masterDeck = buildMasterDeck();
var shuffledDeck;
var war = [];


// build a 'master' deck of 'card' objects used to create shuffled decks
var masterDeck = buildMasterDeck();
//renderDeckInContainer(masterDeck, document.getElementById('master-deck-container'));

/*----- app's state (variables) -----*/
var shuffledDeck;

/*----- cached element references -----*/
var shuffledContainer = document.getElementById('shuffled-deck-container');

/*----- event listeners -----*/
document.querySelector('button').addEventListener('click', renderShuffledDeck);

/*----- functions -----*/
init();

function init() 
    {
        buildMasterDeck();
        
    }


function renderShuffledDeck() 
{
  // create a copy of the masterDeck (leave masterDeck untouched!)
  var tempDeck = masterDeck.slice();
  shuffledDeck = [];
  while (tempDeck.length) 
  {
    var rndIdx = Math.floor(Math.random() * tempDeck.length);
    shuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
  }
  splitCards(shuffledDeck);
}


renderShuffledDeck();

function buildMasterDeck() {
    var deck = [];
    suits.forEach(function(suit) {
      ranks.forEach(function(rank) {
        deck.push({
          // the 'face' property maps to the CSS classes for cards
          face: `${suit}${rank}`,
        });
      });
    });
    return deck;
  }
  
  


function splitCards(shuffledDeck) 
{
     var i = 0;
     while(i != player1Deck.length, player2Deck.length) 
     {
         player1Card.push(player1Deck[i]);
         player2Card.push(player2Deck[(i+1)]);
         i+=2
     }
     //onsole.log(`Player one's deck is ${deck1}`)
    player1Deck = shuffledDeck.slice(0, 26);
    player2Deck = shuffledDeck.slice(26, 53);
}

 

function compare() {
   
    if (player1Card === player2Card && (player1Deck.length !== 1 || player2Deck.length !== 1))
    {
        war();    
    } 
    else 
    {
        //TODO: give the winner of the comparison the cards in the 'war' array
        player1Card > player2Card ? (player1Deck.push(player2Card, player1Card)  ): player2Deck.push(player1Card, player2Card);
        player1Card = ('');
        player2Card = ('');
    }

}

function war() {
    var warA = 4;
    //both players have enough cards to play war
    if (player1Deck.length >= warA && player2Deck.length >= warA)
    {
        for(var i = 0; i < 3; i++)
        {
            war += player1Deck.pop();
        }
        for(var i = 0; i < 3; i++)
        {
            war += player2Deck.pop();
        }
        compare();
    }
    //player 1 doesn't have enough cards
    else if (player1Deck.length <= warA && player2Deck.length >= warA)
    {
        insufficientCardsPop(player1Deck, player2Deck);
        compare();
    }
    //player 2 doesn't have enough cards
    else if (player2Deck.length <= warA && player1Deck.length >= warA)
    {
        insufficientCardsPop(player2Deck, player1Deck);
        compare();
    }
    //neither player has enough cards
    else if (player1Deck.length <= warA && player2Deck.length <= warA)
    {
        for(var i = 0; i < deck1.length; i++)
        {
            war += player1Deck.pop();
        }
        for(var i = 0; i < player2Deck.length; i++)
        {
            war += player2Deck.pop();
        }
        compare();
    }
}

function insufficientCardsPop(deck1, deck2)
{
        for(var i = 0; i < deck1.length; i++)
        {
            war += deck1.pop();
        }
        for(var i = 0; i < 3; i++)
        {
            war += deck2.pop();
        }
}



