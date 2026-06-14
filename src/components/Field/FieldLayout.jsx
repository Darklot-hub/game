import React, { Component } from 'react';

class FieldLayout extends Component {
  render() {
    const { field, onCellClick } = this.props;
    return (
      <div className="grid grid-cols-3 gap-1 bg-gray-700 p-1 rounded">
        {field.map((value, idx) => (
          <button
            key={idx}
            onClick={() => onCellClick(idx)}
            className="w-24 h-24 bg-white flex items-center justify-center text-4xl font-bold cursor-pointer hover:bg-gray-100 focus:outline-none"
          >
            {value}
          </button>
        ))}
      </div>
    );
  }
}

export default FieldLayout;
