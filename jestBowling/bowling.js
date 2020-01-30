class Bowling {
  constructor() {
    this.rolls = Array(21);
    this.currentRoll = 0;
    this.SPARE_NUMBER = 10
    this.STRIKE_NUMBER = 10
  }
  getScore () {
    let score = 0
    let frameIndex = 0
    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(frameIndex)) {
        score += this.STRIKE_NUMBER + this.strikeBonus(frameIndex)
        frameIndex++
      } else if (this.isSpare(frameIndex)) {
        score += this.SPARE_NUMBER + this.spareBonus(frameIndex)
        frameIndex += 2
      } else {
        score += this.sumOfBallsInFrame(frameIndex)
        frameIndex += 2
      }
    }
    return score;
  }

  sumOfBallsInFrame (frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1]
  }

  spareBonus (frameIndex) {
    return this.rolls[frameIndex + 2]
  }

  strikeBonus (frameIndex) {
    return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2]
  }

  isSpare (frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex+1] === this.SPARE_NUMBER
  }

  isStrike (frameIndex) {
    return this.rolls[frameIndex] === this.STRIKE_NUMBER
  }

  roll (pins) {
    this.rolls[this.currentRoll++] = pins;
  }
}

module.exports = Bowling;