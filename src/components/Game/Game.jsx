import { useState } from 'react';
import GameLayout from './GameLayout';
import Information from '../Information/Information';
import Field from '../Field/Field';

const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Горизонтали
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Вертикали
  [0, 4, 8], [2, 4, 6] // Диагонали
];

function Game() {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(Array(9).fill(''));

  const checkWinner = (field) => {
    for (let i = 0; i < WIN_PATTERNS.length; i++) {
      const [a, b, c] = WIN_PATTERNS[i];
      if (field[a] && field[a] === field[b] && field[a] === field[c]) {
        return field[a];
      }
    }
    return null;
  };

  const checkDraw = (field) => {
    return field.every(cell => cell !== '');
  };

  const handleCellClick = (index) => {
    if (field[index] !== '' || isGameEnded || isDraw) return;

    const newField = [...field];
    newField[index] = currentPlayer;
    setField(newField);

    const winner = checkWinner(newField);
    if (winner) {
      setIsGameEnded(true);
      return;
    }

    if (checkDraw(newField)) {
      setIsDraw(true);
      return;
    }

    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const handleRestart = () => {
    setCurrentPlayer('X');
    setIsGameEnded(false);
    setIsDraw(false);
    setField(Array(9).fill(''));
  };

  return (
    <GameLayout onRestart={handleRestart}>
      <Information
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
      <Field
        field={field}
        onCellClick={handleCellClick}
      />
    </GameLayout>
  );
}

export default Game;
