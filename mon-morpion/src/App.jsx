import { useState } from 'react';
import './App.css'

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  
  const [xIsNext, setXIsNext] = useState(true);

  
  const [squares, setSquares] = useState(Array(9).fill(null));
}