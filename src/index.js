import './style.css';
import { Gameboard } from './gameboardData';
import { KnightData } from './knightMoveData';
import { drawPage } from './DOMcontroller';
import { buttonEventListeners, gameBoardEvents } from './eventHandlers';

const mainGameboard = new Gameboard();
console.log(mainGameboard);

mainGameboard.populateSquares(mainGameboard);
console.log(mainGameboard);

const knight = mainGameboard.placeKnight(mainGameboard);
console.log(mainGameboard);

drawPage();
mainGameboard.drawGameboardDOM(mainGameboard);
buttonEventListeners();
gameBoardEvents();

export { mainGameboard, knight };

