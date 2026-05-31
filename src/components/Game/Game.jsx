import { useState, useEffect } from 'react';
import store from '../../store';
import GameLayout from './GameLayout';
import Information from '../Information/Information';
import Field from '../Field/Field';

function Game() {
  // Состояние для хранения текущего состояния store
  const [gameState, setGameState] = useState(() => store.getState());

  useEffect(() => {
    // Подписываемся на изменения store
    const unsubscribe = store.subscribe(() => {
      console.log('Store changed, new state:', store.getState());
      setGameState(store.getState()); // обновляем состояние
    });
    return unsubscribe;
  }, []);

  const { currentPlayer, isGameEnded, isDraw, field } = gameState;

  return (
    <GameLayout>
      <Information
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
      <Field field={field} />
    </GameLayout>
  );
}

export default Game;
