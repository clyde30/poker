import { useState } from 'react';
import './App.css';
import Hand from './components/Hand';
import {BuildDeck} from './utils/Dealer';

function App() {
  const [deck, setDeck] = useState();
  const [playerHand, setPlayerHand] = useState();



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
      {!deck && <button onClick={() => setDeck(BuildDeck())}>New Game</button>}
      {deck && <button onClick={() => setPlayerHand(Deal(5))}>Deal Hand</button>}
      {playerHand && <Hand hand={playerHand} />}
      {/* {deck && JSON.stringify(deck)} */}
    </div>
  );
}

export default App;