const { TicTacToe, Player } = require('./tictactoe')
let tictactoe
beforeEach(() => tictactoe = new TicTacToe())
describe('Test TicTacToe', () => {
  const PLAYER_A_ID = 0
  const PLAYER_B_ID = 1
  test('A player Take One Field', () => {
    tictactoe.takeField(PLAYER_A_ID)
    expect(tictactoe.getCurrentField()).toBe(8)
  })
})