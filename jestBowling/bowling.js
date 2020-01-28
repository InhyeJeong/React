class Bowling {
  constructor() {
    this.score = 0;
    this.rolls = Array(21);
    this.currentRoll = 0;
  }
  getScore () {
    this.score = 0
    for (let i = 1; i < this.rolls.length; i++) {
      this.score += this.rolls[i-1]
    }
    return this.score;
  }

  addScore () {
    this.score += 1;
  }

  roll (pins) {
    this.score += pins
    this.rolls[this.currentRoll++] = pins;
  }
}

module.exports = Bowling;