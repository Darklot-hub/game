import React, { Component } from "react";

class InformationLayout extends Component {
  getStatus() {
    const { currentPlayer, isGameEnded, isDraw } = this.props;
    if (isDraw) return "Ничья";
    if (isGameEnded) return `Победа: ${currentPlayer}`;
    return `Ходит: ${currentPlayer}`;
  }

  render() {
    return (
      <div className="text-2xl mb-5 font-bold text-gray-800">
        {this.getStatus()}
      </div>
    );
  }
}

export default InformationLayout;
