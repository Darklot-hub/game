import { useState, useEffect } from "react";
import store from "../../store";
import GameLayout from "./GameLayout";
import Information from "../Information/Information";
import Field from "../Field/Field";

function Game() {
  // Принудительный ререндер при изменении store
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      // Вызываем ререндер
      forceUpdate((prev) => prev + 1);
    });
    return unsubscribe;
  }, []);

  // Данные из store
  const { currentPlayer, isGameEnded, isDraw, field } = store.getState();

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
