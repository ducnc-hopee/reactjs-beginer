import { useState } from 'react';
import GameBoard from './GameBoard'; // your board rendering component
import { calculateWinner } from '../../utils/caculateWinner'; // logic-only helper

export default function TrackGame() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;
  const winner = calculateWinner(currentSquares);

  // Play or update move
  function handlePlay(i) {
    // Prevent move if game is over or cell is filled
    if (currentSquares[i] || winner) return;

    const nextSquares = currentSquares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';

    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  // Jump to previous move (undo)
  function jumpTo(move) {
    setCurrentMove(move);
  }

  // Status message logic
  const status = winner
    ? `Winner: ${winner}`
    : currentSquares.every(square => square !== null)
      ? 'Game is tied!'
      : `Next Player: ${xIsNext ? 'X' : 'O'}`;

  // Move list for undo navigation
  const moves = history.map((_, move) => {
    const description = move === 0 ? 'Go to game start' : `Go to move #${move}`;
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="status">{status}</div>

      <div className="game-board">
        <GameBoard squares={currentSquares} onSquareClick={handlePlay} />
      </div>

      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}