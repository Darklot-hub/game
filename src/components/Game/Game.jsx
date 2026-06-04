import { useSelector } from "react-redux";
import GameLayout from "./GameLayout";
import Information from "../Information/Information";
import Field from "../Field/Field";

function Game() {
  const currentPlayer = useSelector((state) => state.currentPlayer);
  const isGameEnded = useSelector((state) => state.isGameEnded);
  const isDraw = useSelector((state) => state.isDraw);
  const field = useSelector((state) => state.field);

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
