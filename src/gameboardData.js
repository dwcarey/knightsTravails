import { Square } from "./squareClass";
class Gameboard {
  constructor() {
    this.board = this.createGameBoard();
  }

  createGameBoard() {
    const m = 8;
    const n = 8;

    const chessboard = new Array(m);

    for (let i = 0; i < m; i += 1) {
      chessboard[i] = new Array(n);
    }
    return chessboard;
  }

  populateSquares() {
    for (let i = 0; i < this.board.length; i += 1) {
      for (let j = 0; j < this.board[i].length; j += 1) {
        const square = new Square([i, j]);

        if (i % 2 === 0) {
          if (j % 2 === 0) {
            square.setColour('white');
          }
          else {
            square.setColour('black');
          }
        }

        if (i % 2 !== 0) {
          if (j % 2 !== 0) {
            square.setColour('white');
          }
          else {
            square.setColour('black');
          }
        }

        this.board[i][j] = square;
      }
    }
  }

  placeKnight() {
      const x = Math.floor(Math.random() * 7);
      const y = Math.floor(Math.random() * 7);
      const selectedSquare = this.board[x][y];
      selectedSquare.setHasKnight(true);
  }


  drawGameboardDOM() {
    const gameboardContainer = document.createElement('div');
    gameboardContainer.id = 'gameboardContainer';

    for (let i = 0; i < this.board.length; i += 1) {
      const rowHolder = document.createElement('div');
      rowHolder.id = 'rowHolder';

      for (let j = 0; j < this.board[i].length; j += 1) {
        const currentSquare = this.board[i][j];
        const squareDOM = document.createElement('div');

        if (currentSquare.getColour() === 'black') {
          squareDOM.classList.add('black');
        }
        else {
          squareDOM.classList.add('white');
        }

        if (currentSquare.getHasKnight() === true) {
          squareDOM.textContent = 'K';
        }

        squareDOM.classList.add('square');

        rowHolder.appendChild(squareDOM);
      }
      gameboardContainer.appendChild(rowHolder);
    }
    document.body.appendChild(gameboardContainer);
  }
}

export { Gameboard };
