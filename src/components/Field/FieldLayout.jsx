import PropTypes from "prop-types";
import styles from "./Field.module.css";

function FieldLayout({ field, onCellClick }) {
  return (
    <div className={styles.field}>
      {field.map((value, index) => (
        <button
          key={index}
          className={styles.cell}
          onClick={() => onCellClick(index)}
        >
          {value}
        </button>
      ))}
    </div>
  );
}

FieldLayout.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCellClick: PropTypes.func.isRequired,
};

export default FieldLayout;
