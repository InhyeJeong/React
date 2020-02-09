let TicTacToe = require('./tictactoe')
let tictactoe
beforeEach(() => tictactoe = new TicTacToe())
describe('Test TicTacToe', () => {
  test('Take One Field', () => {
    tictactoe.takeField()
    expect(tictactoe.getCurrentField()).toBe(8)
  })
})