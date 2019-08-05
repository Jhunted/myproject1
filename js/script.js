

// constants

var suits = ['s', 'c', 'd', 'h'];
var ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
let deck = Array.from(new Array(52), (x, i) => i);
var warrA = [], player1Hand = [], player2Hand = [];
var playDeck = '', player2Deck = '', player1Card = '', player2Card = '';

var playing = false;

// functions

function fillArray() {
    var deck = [];
    for (var i = 0; i < 52; i++)
        deck[i] = i;

    shuffle(deck);
    splitCards(deck);
}

