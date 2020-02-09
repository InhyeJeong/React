// - 3 x 3 그리드를 가진 9개의 필드가 있다.
// - X, O 돌을 놓는 두 명의 플레이어가 있다.
// - 게임이 종료되기 전까지 플레이어들이 번갈아가면서 필드에 돌을 놓는다.
// - 이미 돌이 놓인 필드에는 돌을 놓을 수 없다.
// [게임 종료 조건]
// * 승리
// - 한 플레이어가 한 행의 모든 필드에 돌을 놓았을 때 ---> 012 / 345 / 678
// - 한 플레이어가 한 열의 모든 필드에 돌을 놓았을 때 ---> 036 / 147 / 258
// - 한 플레이어가 한 대각선의 모든 필드에 돌을 놓았을 때 ---> 048 / 246
// * 무승부
// - 마지막 필드에 돌이 놓일 때
class TicTacToe {
  constructor () {
    this.fieldArray = Array(9).fill(false)
    this.players = {
      0: new Player('Player A'),
      1: new Player('Player B'),
    }
  }
  generateRandomNumber (min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    return randomNumber
  }
  takeField (playerId) {
    //  1) 본인 차례마다 패를 놓고, 
    let randomNumber = this.generateRandomNumber(0, 8)
    if (this.fieldArray[randomNumber] !== true) {
      this.fieldArray[randomNumber] = true
    }
    //  2) 그 인덱스를 해당 플레이어에 저장한다.
    const player = this.players[playerId]
    player.saveFieldIndex(randomNumber)
    //  3) 그 인덱스가 win규칙에 해당되면 winner가 된다
  }
  checkWinnerCondition () {
    let isColumnBingo = this.checkColumnRule()
    let isRowBingo = this.checkRowRule()
    let isCrossBingo = this.checkCrossRule()

    return isColumnBingo || isRowBingo || isCrossBingo
  }
  checkColumnRule () {
    let randomNumber = this.generateRandomNumber(0, 2)
    let columnRule = randomNumber * 3

    if (this.fieldArray[columnRule] &&
       this.fieldArray[columnRule + 1] &&
       this.fieldArray[columnRule + 2]) {
      console.log('행 Column 빙고')
      return true
    }
    return false
  }
  checkRowRule () {
    let randomNumber = this.generateRandomNumber(0, 2)
    let rowRule = randomNumber

    if (this.fieldArray[rowRule] &&
       this.fieldArray[rowRule + 3] &&
       this.fieldArray[rowRule + 6]) {
      console.log('열 Row 빙고')
      return true
    }
    return false
  }
  generateOddNumber (min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    if (randomNumber % 2 === 0) {
      return randomNumber
    } else {
      //  max가 홀수로 들어올 경우 max보다 높은 값을 리턴할 수 있으므로 재귀
      return this.generateOddNumber(min, max)
    }
  }
  checkCrossRule () {
    //  왼쪽 대각선 빙고
    // [0,x,x
    // x,4,x,
    // x,x,8]

    //  오른쪽 대각선 빙고
    // [x,x,2
    // x,4,x,
    // 6,x,8]

    let crossRule = this.generateOddNumber(0, 2)
    let direction = 4
    if (crossRule === 0) {
      direction = 4
    } else {
      direction = 2
    }
    if (this.fieldArray[crossRule] &&
       this.fieldArray[crossRule + direction] &&
       this.fieldArray[crossRule + (direction * 2)]) {
      console.log('대각선 Cross 빙고')
      return true
    }
    return false
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
  saveFieldIndex (fieldIndex) {
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