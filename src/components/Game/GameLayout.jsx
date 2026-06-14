import React, { Component } from "react";
import { connect } from "react-redux";
import { restartAsync } from "../../store";

class GameLayout extends Component {
  handleRestart = () => {
    this.props.restartAsync();
  };

  render() {
    const { children } = this.props;
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        {children}
        <button
          onClick={this.handleRestart}
          className="mt-5 px-5 py-2 bg-green-500 text-white rounded cursor-pointer hover:bg-green-600"
        >
          Начать заново
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  restartAsync: () => dispatch(restartAsync()),
});

export default connect(null, mapDispatchToProps)(GameLayout);
