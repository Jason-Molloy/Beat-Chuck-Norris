import GameService from './gameService.js'

let _gs = new GameService()

function draw() {
  let target = _gs.Target
  let template = `
  
  `
}


export default class GameController {
  constructor() { }

  addItemToTarget(attackName) {
    _gs.addItemToTarget(itemIndex)
  }
  attackTarget(attackName) {
    _gs.attackTarget(attackName)
    draw()
  }
}