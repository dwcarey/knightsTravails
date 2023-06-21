import './style.css';
import { Gameboard } from './gameboardData';
import { KnightData } from './knightMoveData';

const mainGameboard = new Gameboard();
console.log(mainGameboard);

mainGameboard.populateSquares(mainGameboard);
console.log(mainGameboard);

const knight = mainGameboard.placeKnight(mainGameboard);
console.log(mainGameboard);

mainGameboard.drawGameboardDOM(mainGameboard);

console.log(knight.findKnightPath(knight));

