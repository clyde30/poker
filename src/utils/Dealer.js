  import { SortCards } from "./SortCards";
  import { RankHand } from "./RankHand";
  
  export function BuildDeck() {
    const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    const names = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
    const values = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const deck = [];

    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
      for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
        deck.push({
          suit: suits[suitIdx],
          value: values[valueIdx],
          name: names[valueIdx]
        });
      }
    }

    return ShuffleDeck(deck);
}

export function Deal(numCards, deck) {
  let hand = [];
  for (let i = 0; i < numCards; i++) {
    hand.push(deck.shift());
  }
  hand = SortCards(hand);
  hand.rank = RankHand(hand);
  hand.name = GetHandName(hand.rank);

  return hand;
}

function ShuffleDeck(deck) {
  let shuffledDeck = [];
  while (deck.length > 0) {
    let randomIdx = Math.floor(Math.random() * deck.length);
    shuffledDeck.push(deck[randomIdx]);
    deck.splice(randomIdx, 1);
  }
  return shuffledDeck;
}

function GetHandName(rank) {
  let name = '';
  switch (rank) {
    case 1:
      name = 'pair';
      break;
    case 2:
      name = 'two pair';
      break;
    case 3:
      name = 'three of a kind';
      break;
    case 4:
      name = 'straight';
      break;
    case 5:
      name = 'flush';
      break;
    case 6:
      name = 'full house';
      break;
    case 7:
      name = 'four of a kind';
      break;
    case 8:
      name = 'straight flush';
      break;
    default:
      name = 'high card';
  }
  return name;
}