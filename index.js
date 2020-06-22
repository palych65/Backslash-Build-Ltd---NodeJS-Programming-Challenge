// You may choose to add new functions and additional modules
const boardState = {
	// complete this enum with all the possible states of a noughts and crosses board (there's more than 3)
	CROSSES_WIN: 'CROSSES_WIN',
	NOUGHTS_WIN: 'NOUGHTS_WIN',
	DRAW: 'DRAW',
	NOT_FINISHED: 'NOT_FINISHED',
	ERRORX: 'CROSSES_CHEATED',
	ERRORO: 'NOUGHTS_CHEATED',
};

function getStateOfBoard(board) {

	// check for cheating
	let countX = 0;
	let countO = 0;
	for (let index = 0; index < 9; index++) {
		if (board[index] === 'X') {
			countX = countX + 1;
		}
		if (board[index] === 'O') {
			countO = countO + 1;
		}
	}
	if (countX - countO > 1) {
		return boardState.ERRORX;
	}
	if (countO - countX > 0) {
		return boardState.ERRORO;
	}

	// start of the main check
	// rows check
	for (let index = 0; index < 9;) {
		if (board[index] === board[index + 1] && board[index + 1] === board[index + 2] && board[index + 2] === 'X') {
			return boardState.CROSSES_WIN;
		}
		if (board[index] === board[index + 1] && board[index + 1] === board[index + 2] && board[index + 2] === 'O') {
			return boardState.NOUGHTS_WIN;
		}
		index = index + 3;
	}

	// column check
	for (let index = 0; index < 3; index++) {
		if (board[index] === board[index + 3] && board[index + 3] === board[index + 6] && board[index + 6] === 'X') {
			return boardState.CROSSES_WIN;
		}
		if (board[index] === board[index + 3] && board[index + 3] === board[index + 6] && board[index + 6] === 'O') {
			return boardState.NOUGHTS_WIN;
		}
	}

	// diagonal check
	for (let index = 0; index < 1; index++) {
		if (board[index] === board[index + 4] && board[index + 4] === board[index + 8] && board[index + 8] === 'X') {
			return boardState.CROSSES_WIN;
		}
		if (board[index] === board[index + 4] && board[index + 4] === board[index + 8] && board[index + 8] === 'O') {
			return boardState.NOUGHTS_WIN;
		}
		if (board[index + 2] === board[index + 4] && board[index + 4] === board[index + 6] && board[index + 6] === 'X') {
			return boardState.CROSSES_WIN;
		}
		if (board[index + 2] === board[index + 4] && board[index + 4] === board[index + 6] && board[index + 6] === 'O') {
			return boardState.NOUGHTS_WIN;
		}
	}

	// check for not finished game, if above didnt return
	for (let index = 0; index < 9; index++) {
		if (board[index] === '_') {
			return boardState.NOT_FINISHED;
		}
	}

	// otherwise draw
	return boardState.DRAW;
}

const args = process.argv.slice(2); //input and deleting node with path
for (let i = 0; i < args.length; i++) { // write results
	console.log(getStateOfBoard(args[i]));
}
