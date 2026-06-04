import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { restart } from "../../store";
import styles from "./Game.module.css";

function GameLayout({ children }) {
  const dispatch = useDispatch();

  const handleRestart = () => {
    dispatch(restart());
  };

  return (
    <div className={styles.game}>
      {children}
      <button className={styles.restartButton} onClick={handleRestart}>
        Начать заново
      </button>
    </div>
  );
}

GameLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GameLayout;
