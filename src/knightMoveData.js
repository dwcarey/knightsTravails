class KnightData {
  constructor(root) {
    this.root = root;
    this.moveOne = null;
    this.moveTwo = null;
    this.moveThree = null;
    this.moveFour = null;
    this.moveFive = null;
    this.moveSix = null;
    this.moveSeven = null;
    this.moveEight = null;
  }

  // get legal moves - mopve to knioght treee class
  // convert this to add nodes to above tree
  getLegalMoves(knightLocation) {
    const legalMovesArray = [
      [knightLocation[0] - 2, knightLocation[1] - 1],
      [knightLocation[0] - 2, knightLocation[1] + 1],
      [knightLocation[0] + 2, knightLocation[1] - 1],
      [knightLocation[0] + 2, knightLocation[1] + 1],
      [knightLocation[0] - 1, knightLocation[1] - 2],
      [knightLocation[0] - 1, knightLocation[1] + 2],
      [knightLocation[0] + 1, knightLocation[1] - 2],
      [knightLocation[0] + 1, knightLocation[1] + 2],
    ];

    const validMovesArray = legalMovesArray.filter((move) => (
      move[0] >= 0 && move[0] <= 7 && move[1] >= 0 && move[1] <= 7
    ));

    return validMovesArray;
  }
  

  findKnightPath(root, destination = [3, 3]) {


    //queue array and
    //visited "Set()"
    //startnode = new Knight & push to queue
    //then push all possible moves to queue 
    //store each parent move? another node i guess
    //return tree of parent moves + most recent move

    
    if (root === null || root === undefined) {
      return null;
    }
    const knightLocation = root.root;
    console.log(`knight location: ${knightLocation}`);
    console.log(`destination: ${destination}`);

    if (knightLocation[0] === destination[0] && knightLocation[1] === destination[1]) {
      return root;
    }

    const movesArray = this.getLegalMoves(knightLocation);


    this.moveOne = this.findKnightPath(movesArray[0], destination);
    this.moveTwo = this.findKnightPath(movesArray[1], destination);
    this.moveThree = this.findKnightPath(movesArray[2], destination);
    this.moveFour = this.findKnightPath(movesArray[3], destination);
    this.moveFive = this.findKnightPath(movesArray[4], destination);
    this.moveSix = this.findKnightPath(movesArray[5], destination);
    this.moveSeven = this.findKnightPath(movesArray[6], destination);
    this.moveEight = this.findKnightPath(movesArray[7], destination);

    return null;

    /*
      findShortestPath(start, destination) {
    const queue = [];
    const visited = new Set();

    const startNode = new KnightData(start);
    queue.push(startNode);
    visited.add(`${start[0]},${start[1]}`);

    while (queue.length > 0) {
      const currentNode = queue.shift();

      if (currentNode.root[0] === destination[0] && currentNode.root[1] === destination[1]) {
        return currentNode.moves;
      }

      const movesArray = this.getLegalMoves(currentNode.root);

      for (const move of movesArray) {
        const moveKey = `${move[0]},${move[1]}`;

        if (!visited.has(moveKey)) {
          const newNode = new KnightData(move);
          newNode.moves = currentNode.moves + 1;
          queue.push(newNode);
          visited.add(moveKey);
        }
      }
    }

    // If the destination is unreachable
    return -1;
  }
}

*/
  }
}

export { KnightData };
