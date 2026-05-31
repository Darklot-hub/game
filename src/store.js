import { createStore } from "redux";

const initialState = {
	currentPlayer: "X",
	isGameEnded: false,
	isDraw: false,
	field: Array(9).fill(""),
};

export const ActionTypes = {
	MAKE_MOVE: "MAKE_MOVE",
	RESTART: "RESTART",
};

export const makeMove = (index) => ({
	type: ActionTypes.MAKE_MOVE,
	payload: { index }, // оборачиваем в объект
});

export const restart = () => ({
	type: ActionTypes.RESTART,
});

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
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

const checkDraw = (field) => field.every((cell) => cell !== "");

const gameReducer = (state = initialState, action) => {
	console.log("Reducer received action:", action.type, action.payload);

	switch (action.type) {
		case ActionTypes.MAKE_MOVE: {
			const { index } = action.payload;
			console.log("Making move at index:", index);
			console.log("Current state:", state);

			if (
				state.field[index] !== "" ||
				state.isGameEnded ||
				state.isDraw
			) {
				console.log("Move invalid: cell occupied or game ended");
				return state;
			}

			const newField = [...state.field];
			newField[index] = state.currentPlayer;
			console.log("New field:", newField);

			const winner = checkWinner(newField);
			const draw = !winner && checkDraw(newField);

			if (winner) {
				console.log("Winner:", winner);
				return {
					...state,
					field: newField,
					isGameEnded: true,
				};
			}

			if (draw) {
				console.log("Draw");
				return {
					...state,
					field: newField,
					isDraw: true,
				};
			}

			const nextPlayer = state.currentPlayer === "X" ? "O" : "X";
			console.log("Next player:", nextPlayer);
			return {
				...state,
				field: newField,
				currentPlayer: nextPlayer,
			};
		}

		case ActionTypes.RESTART:
			console.log("Restarting game");
			return initialState;

		default:
			return state;
	}
};

const store = createStore(gameReducer);
export default store;
