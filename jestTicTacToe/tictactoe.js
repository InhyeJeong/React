// - 3 x 3 그리드를 가진 9개의 필드가 있다.
// - X, O 돌을 놓는 두 명의 플레이어가 있다.
// - 게임이 종료되기 전까지 플레이어들이 번갈아가면서 필드에 돌을 놓는다.
// - 이미 돌이 놓인 필드에는 돌을 놓을 수 없다.
// [게임 종료 조건]
// * 승리
// - 한 플레이어가 한 행의 모든 필드에 돌을 놓았을 때 ---> 012 / 345 / 678
// - 한 플레이어가 한 열의 모든 필드에 돌을 놓았을 때 ---> 036 / 147 / 258
// - 한 플레이어가 한 대각선의 모든 필드에 돌을 놓았을 때 ---> 048 / 247
// * 무승부
// - 마지막 필드에 돌이 놓일 때
class TicTacToe {
  constructor () {
    this.fieldArray = Array(9).fill(false)
    this.players = {
      0: new Player('Player A'),
      1: new Player('Player B'),
    }
    // [x,x,x
    // o,o,o,
    // x,x,x]
  }
  takeField (playerId) {
    //  1) 본인 차례마다 패를 놓고, 
    let randomNumber = Math.floor(Math.random() * 10)
    if (this.fieldArray[randomNumber] !== true) {
      this.fieldArray[randomNumber] = true
    }
    //  2) 그 인덱스를 해당 플레이어에 저장한다.
    const player = this.players[playerId]
    player.takePoint(randomNumber)
    //  3) 그 인덱스가 win규칙에 해당되면 winner가 된다
  }
  getCurrentField () {
    let currentFieldLength = this.fieldArray.length
    for (let i = 0; i < this.fieldArray.length; i ++) {
      if (this.fieldArray[i] === true) {
        currentFieldLength = currentFieldLength - 1
      }
    }
    return currentFieldLength
  }
}

class Player {
  constructor (name) {
    this.name = name
    this.fieldIndexList = []
  }
  takePoint (fieldIndex) {
    this.fieldIndexList.push(fieldIndex)
  }
  getName () {
    return this.name
  }
}

module.exports = {
  TicTacToe,
  Player,
}