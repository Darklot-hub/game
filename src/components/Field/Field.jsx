import PropTypes from "prop-types";
import FieldLayout from "./FieldLayout";
import store from "../../store";
import { makeMove } from "../../store";

function Field({ field }) {
  const handleCellClick = (index) => {
    store.dispatch(makeMove(index));
  };

  return <FieldLayout field={field} onCellClick={handleCellClick} />;
}

Field.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Field;
