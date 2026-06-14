import React, { Component } from "react";
import { connect } from "react-redux";
import { makeMove } from "../../store";
import FieldLayout from "./FieldLayout";

class Field extends Component {
  handleCellClick = (index) => {
    this.props.makeMove(index);
  };

  render() {
    const { field } = this.props;
    return <FieldLayout field={field} onCellClick={this.handleCellClick} />;
  }
}

const mapDispatchToProps = (dispatch) => ({
  makeMove: (index) => dispatch(makeMove(index)),
});

export default connect(null, mapDispatchToProps)(Field);
