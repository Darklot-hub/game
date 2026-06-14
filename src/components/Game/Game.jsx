import React, { Component } from "react";
import { connect } from "react-redux";
import GameLayout from "./GameLayout";
import Information from "../Information/Information";
import Field from "../Field/Field";

class Game extends Component {
  render() {
    const { currentPlayer, isGameEnded, isDraw, field } = this.props;
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
}

const mapStateToProps = (state) => ({
  currentPlayer: state.currentPlayer,
  isGameEnded: state.isGameEnded,
  isDraw: state.isDraw,
  field: state.field,
});

export default connect(mapStateToProps)(Game);
