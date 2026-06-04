import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import FieldLayout from "./FieldLayout";
import { makeMove } from "../../store";

function Field({ field }) {
  const dispatch = useDispatch();

  const handleCellClick = (index) => {
    dispatch(makeMove(index));
  };

  return <FieldLayout field={field} onCellClick={handleCellClick} />;
}

Field.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Field;
