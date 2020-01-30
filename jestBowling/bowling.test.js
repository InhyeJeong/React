var Bowling = require('./bowling')
let bowling
beforeEach(() => bowling = new Bowling())
describe('Test Bowling', () => {
  function rollMany (length, pins) {
    for (let i = 0; i < length; i++) {
      bowling.roll(pins)
    }
  }
  test('Test All Ones', () => {
    let length = 20
    let pins = 1
    rollMany(length, pins)
    expect(bowling.getScore()).toBe(20)
  })
  test('Test Gutter Game', () => {
    let length = 20
    let pins = 0
    rollMany(length, pins)
    expect(bowling.getScore())
  })
  test('Test One Spare', () => {
    rollSpare()
    bowling.roll(3);
    let length = 17
    let pins = 0
    rollMany(length, pins);
    expect(bowling.getScore()).toBe(16)
  })
  function rollSpare () {
    bowling.roll(5);
    bowling.roll(5);
  }
  test('Test One Strike', () => {
    rollStrike()
    bowling.roll(3);
    bowling.roll(4);
    let length = 16
    let pins = 0
    rollMany(length, pins);
    expect(bowling.getScore()).toBe(24)
  })
  function rollStrike () {
    bowling.roll(10);
  }
  test('Test Perfect Game !!!!', () => {
    let length = 12
    let pins = 10
    rollMany(length, pins);
    expect(bowling.getScore()).toBe(300)
  })
})