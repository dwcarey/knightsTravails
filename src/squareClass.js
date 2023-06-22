class Square {
  constructor(position) {
    this.position = position;
    this.colour = null;
    this.hasKnight = false;
    this.pathPosition = null;
    this.isDestination = false;
  }

  setColour(colour) {
    this.colour = colour;
  }

  getColour() {
    return this.colour;
  }

  setHasKnight(hasKnight) {
    this.hasKnight = hasKnight;
  }

  getHasKnight() {
    return this.hasKnight;
  }

  getPathPosition() {
    return this.pathPosition;
  }

  setPathPosition(pathPosition) {
    this.pathPosition = pathPosition;
  }

  getIsDestination() {
    return this.isDestination;
  }

  setIsDestination(destination) {
    this.isDestination = destination;
  }
}

export { Square };
