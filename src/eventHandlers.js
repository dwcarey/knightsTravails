import { mainGameboard } from ".";
import { knight } from ".";

  let placeKnightActive = false;
  let placeDestinationActive = false;

function buttonEventListeners() {
  const placeKnightButton = document.getElementById('placeKnightButton');
  const placeDestinationButton = document.getElementById('placeDestinationButton');
  const calculateButton = document.getElementById('calculateButton');


  placeKnightButton.addEventListener('click', () => {
    placeKnightActive = true;
    placeDestinationActive = false;
  })

  placeDestinationButton.addEventListener('click', () => {
    placeKnightActive = false;
    placeDestinationActive = true;
  })

  calculateButton.addEventListener('click', () => {
    const destination = mainGameboard.getDesintationLocation();
    const knightLocation = mainGameboard.getKnightLocation();

    console.log(knight.findKnightPath(knight, destination));
  })
}

function gameBoardEvents() {
    const gameboard = document.getElementById('gameboardContainer');

    gameboard.addEventListener('click', (e) => {
        if (e.target.classList.contains('square')) {
            let x = parseInt(e.target.id.split('-')[0], 10);
            let y = parseInt(e.target.id.split('-')[1], 10);

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
    })
}


export { buttonEventListeners, gameBoardEvents }