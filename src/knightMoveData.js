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
  getLegalMoves(knightLocation, root) {
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

    [this.moveOne, this.moveTwo, this.moveThree,
      this.moveFour, this.moveFive, this.moveSix,
      this.moveSeven, this.moveEight] = validMovesArray.map((move) => new KnightData(move));

    return root;
  }

  findKnightPath(root, destination = [3, 3]) {
    if (root === null || root === undefined) {
      return null;
    }
  
    let currentRoot = root;
  
    while (currentRoot !== null) {
      const knightLocation = currentRoot.root;
      console.log(`knight location: ${knightLocation}`);
      console.log(`destination: ${destination}`);
  
      if (knightLocation[0] === destination[0] && knightLocation[1] === destination[1]) {
        return currentRoot;
      }
  
      const populatedKnight = this.getLegalMoves(knightLocation, currentRoot);
      console.log(populatedKnight);
  
      // Recursive call to findKnightPath with all non-null moves
      const moves = [populatedKnight.moveOne, populatedKnight.moveTwo, populatedKnight.moveThree, populatedKnight.moveFour, populatedKnight.moveFive, populatedKnight.moveSix, populatedKnight.moveSeven, populatedKnight.moveEight];
      for (let i = 0; i < moves.length; i++) {
        if (moves[i] !== null && moves[i] !== undefined) {
          const nextRoot = moves[i];
          const result = this.findKnightPath(nextRoot, destination);
          if (result !== null) {
            return result;
          }
        }
      }
  
      currentRoot = null; // Set currentRoot to null if all moves were null
    }
  
    return null;
  }
  
}

export { KnightData };
