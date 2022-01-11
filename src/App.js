import { useState } from 'react';
import './App.css';
import Hand from './components/Hand';

function App() {
  const [deck, setDeck] = useState();
  const [playerHand, setPlayerHand] = useState();

  function BuildDeck() {
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

    setDeck(deck);
    return deck;
}

  function Deal(numCards) {
    const hand = [];
    for (let i = 0; i < numCards; i++) {
      hand.push(deck.shift());
    }
    setDeck(deck);
    setPlayerHand(hand);
    return hand;
  }

  return (
    <div className="App">
      {!deck && <button onClick={() => setDeck(BuildDeck())}>Start Game</button>}
      {deck && <button onClick={() => setPlayerHand(Deal(5))}>Deal Hand</button>}
      {playerHand && <Hand hand={playerHand} />}
      {/* {deck && JSON.stringify(deck)} */}
    </div>
  );
}

export default App;