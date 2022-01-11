  export function BuildDeck() {
    const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    const values = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
    const deck = [];

    for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
      for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
        deck.push({
          suit: suits[suitIdx],
          value: values[valueIdx]
        });
      }
    }

    return ShuffleDeck(deck);
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