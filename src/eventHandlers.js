import { mainGameboard, knight } from '.';

let placeKnightActive = false;
let placeDestinationActive = false;

function buttonEventListeners() {
  const placeKnightButton = document.getElementById('placeKnightButton');
  const placeDestinationButton = document.getElementById('placeDestinationButton');
  const calculateButton = document.getElementById('calculateButton');

  placeKnightButton.addEventListener('click', () => {
    placeKnightActive = true;
    placeKnightButton.classList.add('selected');
    placeDestinationActive = false;
    placeDestinationButton.classList.remove('selected');
  });

  placeDestinationButton.addEventListener('click', () => {
    placeKnightActive = false;
    placeKnightButton.classList.remove('selected');
    placeDestinationActive = true;
    placeDestinationButton.classList.add('selected');
  });

  calculateButton.addEventListener('click', () => {
    const destination = mainGameboard.getDesintationLocation();
    const shortestPathArray = knight.findKnightPath(knight, destination);
    console.log(shortestPathArray);

    for (let i = 1; i < shortestPathArray.length; i += 1) {
      const x = shortestPathArray[i][0];
      const y = shortestPathArray[i][1];
      mainGameboard.board[x][y].setPathPosition(i);
    }
    mainGameboard.drawGameboardDOM(mainGameboard);
  });
}

function gameBoardEvents() {
  const gameboard = document.getElementById('gameboardContainer');

  gameboard.addEventListener('click', (e) => {
    if (e.target.classList.contains('square')) {
      const x = parseInt(e.target.id.split('-')[0], 10);
      const y = parseInt(e.target.id.split('-')[1], 10);

      console.log(x);

      if (placeKnightActive === true) {
        console.log(`place knight ${x}-${y}`);
        knight.setRoot([x, y]);
        mainGameboard.setKnightLocation([x, y]);
        mainGameboard.drawGameboardDOM(mainGameboard);
      }
      if (placeDestinationActive === true) {
        console.log(`place destination ${x}-${y}`);
        mainGameboard.setDestinationLocation([x, y]);
        mainGameboard.drawGameboardDOM(mainGameboard);
      }
    }
  });
}

export { buttonEventListeners, gameBoardEvents };
