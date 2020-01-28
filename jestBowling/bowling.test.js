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
    bowling.roll(5);
    bowling.roll(5); // spare
    bowling.roll(3);
    let length = 17
    let pins = 0
    rollMany(length, pins);
    expect(bowling.getScore()).toBe(16)
  })
})