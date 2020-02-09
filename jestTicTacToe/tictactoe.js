// - 3 x 3 그리드를 가진 9개의 필드가 있다.
// - X, O 돌을 놓는 두 명의 플레이어가 있다.
// - 게임이 종료되기 전까지 플레이어들이 번갈아가면서 필드에 돌을 놓는다.
// - 이미 돌이 놓인 필드에는 돌을 놓을 수 없다.
// [게임 종료 조건]
// * 승리
// - 한 플레이어가 한 행의 모든 필드에 돌을 놓았을 때
// - 한 플레이어가 한 열의 모든 필드에 돌을 놓았을 때
// - 한 플레이어가 한 대각선의 모든 필드에 돌을 놓았을 때
// * 무승부
// - 마지막 필드에 돌이 놓일 때
class TicTacToe {
  constructor () {
    this.fieldArray = Array(9).fill("")
  }
  takeField () {
    let randomNumber = Math.floor(Math.random() * 10)
    if (this.fieldArray[randomNumber] !== 'X') {
      this.fieldArray[randomNumber] = 'X'
    }
  }
  getCurrentField () {
    let currentFieldLength = this.fieldArray.length
    for (let i = 0; i < this.fieldArray.length; i ++) {
      if (this.fieldArray[i] === 'X') {
        currentFieldLength = currentFieldLength - 1
      }
    }
    return currentFieldLength
  }
}

module.exports = TicTacToe