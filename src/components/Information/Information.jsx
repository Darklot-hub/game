import React, { Component } from "react";
import InformationLayout from "./InformationLayout";

class Information extends Component {
  render() {
    const { currentPlayer, isGameEnded, isDraw } = this.props;
    return (
      <InformationLayout
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
    );
  }
}

export default Information;
