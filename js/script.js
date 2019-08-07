/*----- constants -----*/
var suits = ['spade', 'club', 'diamond', 'heart'];
var ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14'];
var player1Card = [];
var player2Card = [];
var warDeck = [];
var isWar = false;

// build a 'master' deck of 'card' objects used to create shuffled decks
//var masterDeck = buildMasterDeck();
//renderDeckInContainer(masterDeck, document.getElementById('master-deck-container'));

/*----- app's state (variables) -----*/
var shuffledDeck;
var player1Deck = [];
var player2Deck = [];

/*----- cached element references -----*/
var shuffledContainer = document.getElementById('shuffled-deck-container');

/*----- event listeners -----*/
//document.querySelector('button').addEventListener('click', playCards());

/*----- functions -----*/
init();
renderShuffledDeck();

function init() 
    {
        masterDeck = buildMasterDeck();      
    }
   
    function buildMasterDeck() {
        var deck = [];
        suits.forEach(function(suit) {
          ranks.forEach(function(rank) {
            deck.push({
             face: `${suit}${rank}`,
             suit: `${suit}`,
             rank: `${rank}`
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
  console.log('Shuffled Deck', shuffledDeck)
  splitCards(shuffledDeck);
}

function splitCards(shuffledDeck) 
{
    player1Deck = shuffledDeck.slice(0, 26);
    player2Deck = shuffledDeck.slice(26, 53);
}

console.log('player one has these cards ', player1Deck)
console.log('player two has these cards ', player2Deck)

function playCards(arr) {
    let p1card = player1Deck.pop()
    let p2card = player2Deck.pop()
    warDeck.push(p1card)
    warDeck.push(p2card)
    
    testFucntion(p1card, p2card, warDeck)
    //render();
};

let testFucntion = (c1, c2, warDeck) => {
    let newData = JSON.stringify(c1)
    console.log('should be readable obj', c1)
    console.log('test function response', c1.rank + " and " + c2.rank)
    if (c1.rank > c2.rank) {
        console.log('p1 wins')
       player1Deck = player1Deck.concat(warDeck);
        // push at stake arr into player deck
        // player1Deck.push(arr) 
        // Look into array concat
    }
    if (c1.rank < c2.rank) {
        console.log('p2 wins')
       player2Deck = player2Deck.concat(warDeck);
        // push at stake arr into player deck
        // player2Deck.push(arr)
    }
    if (c1.rank === c2.rank) {
        //call war function 
        war(c1, c2)
    }
}

function war(c1, c2) {
    let warArr = []
    warArr.push(c1, c2)
    // splice off three cards from each person, and push into war arr
    console.log(warArr)

    playCards(warArr)
}

//********************************************************************************************************** */
// function render() {
//     player1.innerHTML = warDeck[0].value,
//     player2.innerHTML = warDeck[1].value;
// }
    



    // lacal variable to hold player cards
    //let p1card = player1Deck.pop()
    //let p2card = player2Deck.pop()
//r2) {
//     if((pp1card, p2cardlayer1Card % 13) > (player2Card % 13)) { 
//         $('.result').html("Player wins!")
//         // player1Card.push(player2Deck)
//         // playp1cecphcift();

//         // player2D
        // -> Gets both cards, and war arr if applicable
    // eval if P2 > P1
        // -> Gets both cards, and war arr if applicableard = deck1[''];
//     // player2Card = deck2[''];
//     // warDeck += (deck1[0]);
 //pass down  car dd vlaalues//     // warDeck += (deck2[0]);
//     //console.log(warDeck);
    
 //)   {Action}
//ap1c, p2c,    let warArr = []
    //warArr.pushbuildMasterDeck(p1c, p2c)    // create local scope vairable to hold values of new cards that we pop from each player arr
    // create local scope arr, to store the cards at stake
    // push cards passed into warAction into warArr
    // pull out three cards from each player and push into the newly instantiated arr
    // pop off one more care from each player and set it equal to the variables you created

    //pass down the card values into the compare function. dont forget to pass down warArr too. 




   

//     compare();
//     for (var i = 0; i >= 1; i++)
//     {
//         player1Card.push(player1Deck[i]);
//     }
//     // player1Card = player1Deck.pop(); 
//     // player2Card = player2Deck.pop();
//     // pull a card from each players respective decks
//     // call "compareHand function "


// }


// function compare(warDeck) {
//         if (warDeck[0] > warDeck[1]) {
//             player1Deck.push(warDeck[0, 1]);
//         } else if 
//              (warDeck[0] < warDeck[1]) {
//                 player2Deck.push(warDeck[0, 1]);
//             } else {
//                     //warAction();
//                     console.log('tie');
//                 }
// }
            

            
    


//     if (player1Card.rank === player2Card.rank)
//     {
//         console.log("***War BITCH***");
//         warAction();    
//     } 
//     else 
//     {
//         console.log("***comparing cards***");
//         //TODO: give the winner of the comparison the cards in the 'war' array
//         player1Card.rank > player2Card.rank
//         ?(player1Deck.push(warDeck),
//             // console.log(player1Card.face),
//             // console.log(player2Card.face))
//             console.log("player 1: " + player1Card.face+ "\n player 2: " + player2Card.face + "\n player 1 wins!")) 
//         : (player2Deck.push(warDeck),
//             // console.log(player1Card.face),
//             // console.log(player2Card.face))
//             console.log("player 1: " + player1Card.face + "\n player 2: " + player2Card.face + "\n player 2 wins!"));
//         player1Card = ('');
//         player2Card = ('');
//     }
//     warDeck = [];
// }

// // on play round button, begin game 

// //function compareHand(deck1, deck2) {
//     // pull P1 & P2's respective decks
    
//     // who ever hads the higher card, will win both cards, call "redistribute function "

//     // in the event of a tie, proceed with "war action" function 

// //}

// function warAction() {
//     var warA = 4;
//     isWar = true;
//     //both players have enough cards to play war
//     if (player1Deck.length >= warA && player2Deck.length >= warA)
//     {
//         for(var i = 0; i < 3; i++)
//         {
//             warDeck += player1Deck[0];
//             player1Deck.shift();
//             warDeck += player2Deck[0];
//             player2Deck.shift();
//         }
//         compare();
//     }
//      //player 1 doesn't have enough cards
//      else if (player1Deck.length <= warA && player2Deck.length >= warA)
//      {
//          insufficientCardsPop(player1Deck, player2Deck);
//          compare();
//      }
//      //player 2 doesn't have enough cards
//      else if (player2Deck.length <= warA && player1Deck.length >= warA)
//      {
//          insufficientCardsPop(player2Deck, player1Deck);
//          compare();
//      }
//      //neither player has enough cards
//      else if (player1Deck.length <= warA && player2Deck.length <= warA)
//      {
//          for(var i = 0; i < player1Deck.length; i++)
//          {
//              war += player1Deck.pop();
//          }
//          for(var i = 0; i < player2Deck.length; i++)
//          {
//              war += player2Deck.pop();
//          }
//          compare();
//      }
//     isWar = false
// }

// // function insufficientCardsPop(deck1, deck2)
// // {
// //         for(var i = 0; i < deck1.length; i++)
// //         {
// //             war += deck1.pop();
// //         }
// //         for(var i = 0; i < 3; i++)
// //         {
// //             war += deck2.pop();
// //         }
// // }


// // document.getElementById("button").addEventListener("click", playCards);
// }


// function updateCount() {
// 	$('.playCount').html("Player cards: " + player1Deck.length);
// 	$('.compCount').html("Computer cards: " + player2Deck.length);
// }
