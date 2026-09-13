import Square from './Square';
import { calculateWinner } from '../utils/calculateWinner';

export default function Board({ xIsNext, squares, onPlay }) {
  const winInfo = calculateWinner(squares);
  const winner = winInfo ? winInfo.winner : null;
  const winningLine = winInfo ? winInfo.winningLine : [];

  function handleClick(i) {
    if (squares[i] || winner) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  let status;
  if (winner) {
    status = `🎉 Gagnant : ${winner}`;
  } else if (!squares.includes(null)) {
    status = '🤝 Match nul !';
  } else {
    status = `Prochain joueur : ${xIsNext ? 'X' : 'O'}`;
  }

  return (
    <div className="board-container">
      <div className="status">{status}</div>
      <div className="board">
        {squares.map((square, i) => (
          <Square
            key={i}
            value={square}
            onSquareClick={() => handleClick(i)}
            isWinningSquare={winningLine.includes(i)}
          />
        ))}
      </div>
    </div>
  );
}