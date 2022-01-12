import { useState } from 'react';
import './App.css';
import Hand from './components/Hand';
import {BuildDeck} from './utils/Dealer';
import { SortCards } from './utils/SortCards';
import { Deal } from './utils/Dealer';

function App() {
  const [deck, setDeck] = useState();
  const [playerHand, setPlayerHand] = useState();

  return (
    <div className="App">
      <div>{deck && deck.length}</div>
      {!deck && <button onClick={() => setDeck(BuildDeck())}>New Game</button>}
      {deck && <button onClick={() => setPlayerHand(SortCards(Deal(5, deck)))}>Deal Hand</button>}
      {playerHand && <Hand hand={playerHand} />}
    </div>
  );
}

export default App;