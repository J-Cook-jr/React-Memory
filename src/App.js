import React, { Component } from 'react';
import MemoryCard from './components/MemoryCard.jsx';
import './App.css';

function generateDeck() {
  let symbols = ['∆', 'ø', '£', '$', '•', '§', '+', 'ß'];
  let deck = [];

  for (let i = 0; i < 16; i++) {
    deck.push({
      isFlipped: false,
      symbol: symbols[i % 8]
    })
  }
  return shuffle(deck);
}

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: generateDeck(),
      pickedCards: []
    }
  }

  pickCard(cardIndex) {
    if (this.state.deck[cardIndex].isFlipped) {
      return;
    }
    let cardToFlip = { ...this.state.deck[cardIndex] };
    cardToFlip.isFlipped = true;

    let newPickedCards = this.state.pickedCards.concat(cardIndex);
    let newDeck = this.state.deck.map((card, index) => {
      if (cardIndex === index) {
        return  cardToFlip
      }
      return card
    })
    this.setState({deck: newDeck, pickedCards: newPickedCards}
    );
  }
  
  
  render() {
    let cardsJSX = this.state.deck.map((card, index) => {
      return <MemoryCard symbol={card.symbol} isFlipped={card.isFlipped} key={index} />
    })

    return (
      <div className="App">
        <header className="App-header">
          <h1>Memory Game</h1>
          <h4>Match Cards to win</h4>
        </header>
        <div class="grid-container">
          {cardsJSX.slice(0, 4)}
        </div>
        <div class="grid-container">
          {cardsJSX.slice(4, 8)}
        </div>
        <div class="grid-container">
          {cardsJSX.slice(8, 12)}
        </div>
        <div class="grid-container">
          {cardsJSX.slice(12, 16)}
        </div>
      </div>
    );
  }
}

export default App;
