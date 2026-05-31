import PropTypes from "prop-types";
import styles from "./Game.module.css";
import store from "../../store";
import { restart } from "../../store";

function GameLayout({ children }) {
  const handleRestart = () => {
    store.dispatch(restart());
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
