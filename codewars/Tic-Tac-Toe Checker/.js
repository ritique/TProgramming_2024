function isSolved(board) {

    function checkWin(player) {

        for (let row = 0; row < 3; row++) {
            if (board[row][0] === player && board[row][1] === player && board[row][2] === player) {
                return true;
            }
        }

        for (let col = 0; col < 3; col++) {
            if (board[0][col] === player && board[1][col] === player && board[2][col] === player) {
                return true;
            }
        }

        if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
            return true;
        }
        if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
            return true;
        }
        return false;
    }

    if (checkWin(1)) {
        return 1;
    }

    if (checkWin(2)) {
        return 2;
    }

    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (board[row][col] === 0) {
                return -1; 
            }
        }
    }

    return 0;
}