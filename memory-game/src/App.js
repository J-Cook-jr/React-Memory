import React from 'react';
import MemoryCard from './components/MemoryCard.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <h4>Match Cards to win</h4>
      </header>
      <MemoryCard></MemoryCard>
    </div>
  );
}

export default App;
