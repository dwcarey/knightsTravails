class Gameboard {
  constructor() {
    this.root = this.createGameBoard();
  }

  createGameBoard() {
    const gameBoardArray = [];
    for (let i = 0; i < 8; i += 1) {
      const row = [];
      for (let j = 0; j < 8; j += 1) {
        const square = [`${i}-${j}`];
        row.push(square);
      }
      gameBoardArray.push(row);
    }
    return gameBoardArray;
  }

  gameboardDOM(array) {
    const gameboardHolder = document.createElement('div');
    gameboardHolder.id = 'gameboardHolder';

    for (let i = 0; i < array.length; i += 1) {
      const rowHolder = document.createElement('div');
      rowHolder.id = 'rowHolder';
      for (let j = 0; j < array[i].length; j += 1) {
        const square = document.createElement('div');
        square.id = `square-${i}-${j}`;
        square.classList.add('square');
        rowHolder.appendChild(square);
      }
      gameboardHolder.appendChild(rowHolder);
    }
    return document.body.appendChild(gameboardHolder);
  }
}

export { Gameboard };
