let {Tennis, Player} = require('./tennis')
let tennis
let player = new Player()
const playerA = 0
const playerB = 1
beforeEach(() => {
  tennis = new Tennis()
  player = new Player()
})
describe('Test Tennis', () => {
  test('Take player A Field', () => {
    const currentScore = 15
    tennis.takeField('A', currentScore)
    expect(tennis.getPlayerScore('A')).toBe(15)
  })
})