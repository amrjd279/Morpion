import { useState } from 'react';
import Board from './components/Board';
import './App.css';

export default function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  const moves = history.map((squares, move) => {
    let description = move > 0 ? `Aller au coup n°${move}` : 'Début de la partie';
    
    return (
      <li key={move}>
        <button 
          className={`history-btn ${move === currentMove ? 'active' : ''}`}
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <h1>❌ Morpion React ⭕️</h1>
      <div className="game-body">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        
        <div className="game-info">
          <h2>Historique</h2>
          <ol>{moves}</ol>
          <button className="reset-btn" onClick={resetGame}>
            🔄 Nouvelle partie
          </button>
        </div>
      </div>
    </div>
  );
}