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
  const hand = [];
  for (let i = 0; i < numCards; i++) {
    hand.push(deck.shift());
  }
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