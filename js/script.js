

// constants

var suits = ['s', 'c', 'd', 'h'];
var ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
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

function shuffle(deck) {
    for(var j, x, i = deck.length; i; j = Math.floor(Math.random() * i), x = deck[--i], deck[i] = deck[j], deck[j] = x);
    return deck;
}

