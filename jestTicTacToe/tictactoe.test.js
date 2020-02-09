const { TicTacToe, Player } = require('./tictactoe')
let tictactoe
beforeEach(() => tictactoe = new TicTacToe())
describe('Test TicTacToe', () => {
  const PLAYER_A_ID = 0
  const PLAYER_B_ID = 1
  const TABLE_SIZE = 3
  // test('A player Take One Field', () => {
  //   tictactoe.takeField(PLAYER_A_ID)
  //   expect(tictactoe.getCurrentField()).toBe(8)
  // })
  function startField () {
    console.log('here')
    let currentPlayer = PLAYER_A_ID
    for (let i = 0; i < TABLE_SIZE * TABLE_SIZE; i++) {
      tictactoe.takeField(currentPlayer)
      let isWinner = tictactoe.checkWinnerCondition(currentPlayer)
      if (isWinner) {
        console.log('winner!!!', currentPlayer)
        return
      } else {
        console.log('무승부')
      }
      //  플레이어 교체
      if (currentPlayer === PLAYER_A_ID) {
        currentPlayer = PLAYER_B_ID
      } else {
        currentPlayer = PLAYER_A_ID
      }
    }
  }
  test('Test Column Bingo', () => {
    startField()

    // expect(tictactoe.checkWinnerCondition(PLAYER_A_ID)).toBe(true)
  })
})