import React, { Component } from 'react';
import MemoryCard from './components/MemoryCard.jsx';
import './App.css';

function generateDeck() {
  let symbols = ['∆', 'ø', '£', '$', '•', '§', '+', 'ß']
  let deck = []
  
  for (let i = 0; i < 16; i++) {
    deck.push({
      isFlipped: false,
      symbol: symbols[i%8]
    })
    
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {deck: []};
    this.state = {pickedCards: []};
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Memory Game</h1>
          <h4>Match Cards to win</h4>
        </header>
        <div class="grid-container">
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
        </div>
        <div class="grid-container">
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
        </div>
        <div class="grid-container">
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
        </div>
        <div class="grid-container">
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
          <MemoryCard></MemoryCard>
        </div>
      </div>
    );
  }
}

export default App;
