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


      //get legal moves - mopve to knioght treee class
      //convert this to add nodes to above tree
  getLegalMoves(knightLocation) {
    const legalMovesArray = [];

    legalMovesArray.push([knightLocation[0] - 2, knightLocation[1] - 1]);
    legalMovesArray.push([knightLocation[0] - 2, knightLocation[1] + 1]);
    legalMovesArray.push([knightLocation[0] + 2, knightLocation[1] - 1]);
    legalMovesArray.push([knightLocation[0] + 2, knightLocation[1] + 1]);
    legalMovesArray.push([knightLocation[0] - 1, knightLocation[1] - 2]);
    legalMovesArray.push([knightLocation[0] - 1, knightLocation[1] + 2]);
    legalMovesArray.push([knightLocation[0] + 1, knightLocation[1] - 2]);
    legalMovesArray.push([knightLocation[0] + 1, knightLocation[1] + 2]);

    for (let i = 0; i < legalMovesArray.length; i += 1) {
      if (legalMovesArray[i][0] < 0
        || legalMovesArray[i][0] > 7
        || legalMovesArray[i][1] < 0
        || legalMovesArray[i][1] > 7
      ) {
        legalMovesArray.splice(i, 1);
      }
    }
    return legalMovesArray;
  }

  findKnightPath(knightLocation, destination) {
    console.log(`knight location: ${knightLocation}`);
    console.log(`destination: ${destination}`);



  }

}

export { KnightData };