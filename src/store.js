import { createStore } from 'redux';

// Начальное состояние
const initialState = {
  currentPlayer: 'X',   // 'X' или 'O'
  isGameEnded: false,
  isDraw: false,
  field: Array(9).fill(''),
};

// Типы действий
export const ActionTypes = {
  MAKE_MOVE: 'MAKE_MOVE',
  RESTART: 'RESTART',
};

// Action creators
export const makeMove = (index) => ({
  type: ActionTypes.MAKE_MOVE,
  payload: index,
});

export const restart = () => ({
  type: ActionTypes.RESTART,
});

// Вспомогательные функции для проверки победы/ничьи
const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

const checkWinner = (field) => {
  for (let pattern of WIN_PATTERNS) {
    const [a, b, c] = pattern;
    if (field[a] && field[a] === field[b] && field[a] === field[c]) {
      return field[a];
    }
  }
  return null;
};

const checkDraw = (field) => field.every(cell => cell !== '');

// Редьюсер (чистая функция)
const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.MAKE_MOVE: {
      const { index } = action.payload;
      // Если клетка уже занята или игра завершена – не меняем состояние
      if (state.field[index] !== '' || state.isGameEnded || state.isDraw) {
        return state;
      }

      const newField = [...state.field];
      newField[index] = state.currentPlayer;

      const winner = checkWinner(newField);
      const draw = !winner && checkDraw(newField);

      if (winner) {
        return {
          ...state,
          field: newField,
          isGameEnded: true,
        };
      }

      if (draw) {
        return {
          ...state,
          field: newField,
          isDraw: true,
        };
      }

      // Смена игрока
      const nextPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
      return {
        ...state,
        field: newField,
        currentPlayer: nextPlayer,
      };
    }

    case ActionTypes.RESTART:
      return initialState;

    default:
      return state;
  }
};

// Создаём store
const store = createStore(gameReducer);

export default store;
