import './style.css';
import { Gameboard } from './gameboardData';
import { KnightData } from './knightMoveData';

const mainGameboard = new Gameboard();
console.log(mainGameboard);

mainGameboard.populateSquares(mainGameboard);
console.log(mainGameboard);

mainGameboard.placeKnight(mainGameboard);
console.log(mainGameboard);

mainGameboard.drawGameboardDOM(mainGameboard);

const knightLocation = mainGameboard.getKnightLocation();
console.log(knightLocation);