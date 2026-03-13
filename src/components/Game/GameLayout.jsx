import PropTypes from 'prop-types';
import styles from './Game.module.css';

function GameLayout({ children, onRestart }) {
  return (
    <div className={styles.game}>
      {children}
      <button className={styles.restartButton} onClick={onRestart}>
        Начать заново
      </button>
    </div>
  );
}

GameLayout.propTypes = {
  children: PropTypes.node.isRequired,
  onRestart: PropTypes.func.isRequired,
};

export default GameLayout;
