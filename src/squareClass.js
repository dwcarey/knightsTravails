class Square {
  constructor(position) {
    this.position = position;
    this.colour = null;
    this.hasKnight = false;
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
}

export { Square };
