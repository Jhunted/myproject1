/*----- constants -----*/
var suits = ['spade', 'club', 'diamond', 'heart'];
var ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14'];
var player1Deck = [];
var player2Deck = [];
var player1Card = ('');
var player2Card = ('');
var player1Hand = ('');
var player2Hand = ('');
var shuffledDeck;
var warDeck = [];
var masterDeck = [];
var isWar = false;

// build a 'master' deck of 'card' objects used to create shuffled decks
//var masterDeck = buildMasterDeck();
//renderDeckInContainer(masterDeck, document.getElementById('master-deck-container'));

/*----- app's state (variables) -----*/
var shuffledDeck;

/*----- cached element references -----*/
var shuffledContainer = document.getElementById('shuffled-deck-container');

/*----- event listeners -----*/
document.querySelector('button').addEventListener('click', renderShuffledDeck);

/*----- functions -----*/
init();
renderShuffledDeck();

function init() 
    {
        masterDeck = buildMasterDeck();      
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
  console.log('Shuffled Deck', shuffledDeck)
  splitCards(shuffledDeck);
}




function buildMasterDeck() {
    var deck = [];
    suits.forEach(function(suit) {
      ranks.forEach(function(rank) {
        deck.push({
          // the 'face' property maps to the CSS classes for cards
         face: `${suit}${rank}`,
         suit: `${suit}`,
         rank: `${rank}`
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
    player1Deck = shuffledDeck.slice(0, 26);
     console.log('player one has these cards ', player1Deck)
    player2Deck = shuffledDeck.slice(26, 53);
     console.log('player two has these cards ', player2Deck)
}

function playCards(deck1, deck2) {
    // POP to pull cards out, UNSHIFT to push cards in. 
    player1Card = deck1[0];
    player2Card = deck2[0];
    warDeck += (deck1[0], deck2[0]);
    //console.log(warDeck);
    player1Deck.shift();
    player2Deck.shift();

    compare();
    for (var i = 0; i >= 1; i++)
    {
        player1Card.push(player1Deck[i]);
    }
    // player1Card = player1Deck.pop(); 
    // player2Card = player2Deck.pop();
    // pull a card from each players respective decks
    // call "compareHand function "


}


function compare() {
    if (player1Card.rank === player2Card.rank && (player1Deck.length !== 1 || player2Deck.length !== 1) && !isWar)
    {
        console.log("***War BITCH***");
        warAction();    
    } 
    else 
    {
        console.log("***comparing cards***");
        //TODO: give the winner of the comparison the cards in the 'war' array
        player1Card.rank > player2Card.rank
        ?
            (player1Deck.push(warDeck),
            // console.log(player1Card.face),
            // console.log(player2Card.face))
            console.log("player 1: " + player1Card.face+ "\n player 2: " + player2Card.face + "\n player 1 wins!")) 
        : 
            (player2Deck.push(warDeck),
            // console.log(player1Card.face),
            // console.log(player2Card.face))
            console.log("player 1: " + player1Card.face + "\n player 2: " + player2Card.face + "\n player 2 wins!"));
        player1Card = ('');
        player2Card = ('');
    }

}

// on play round button, begin game 




//function compareHand(deck1, deck2) {
    // pull P1 & P2's respective decks
    
    // who ever hads the higher card, will win both cards, call "redistribute function "

    // in the event of a tie, proceed with "war action" function 

//}

function warAction() {
    var warA = 4;
    isWar = true;
    //both players have enough cards to play war
    if (player1Deck.length >= warA && player2Deck.length >= warA)
    {
        for(var i = 0; i < 3; i++)
        {
            war.push(player1Deck.pop());
            war.push(player2Deck.pop());
        }
        
        
        
        compare();
    }
    // //player 1 doesn't have enough cards
    // else if (player1Deck.length <= warA && player2Deck.length >= warA)
    // {
    //     insufficientCardsPop(player1Deck, player2Deck);
    //     compare();
    // }
    // //player 2 doesn't have enough cards
    // else if (player2Deck.length <= warA && player1Deck.length >= warA)
    // {
    //     insufficientCardsPop(player2Deck, player1Deck);
    //     compare();
    // }
    // //neither player has enough cards
    // else if (player1Deck.length <= warA && player2Deck.length <= warA)
    // {
    //     for(var i = 0; i < player1Deck.length; i++)
    //     {
    //         war += player1Deck.pop();
    //     }
    //     for(var i = 0; i < player2Deck.length; i++)
    //     {
    //         war += player2Deck.pop();
    //     }
    //     compare();
    // }
    isWar = false;
}

// function insufficientCardsPop(deck1, deck2)
// {
//         for(var i = 0; i < deck1.length; i++)
//         {
//             war += deck1.pop();
//         }
//         for(var i = 0; i < 3; i++)
//         {
//             war += deck2.pop();
//         }
// }



