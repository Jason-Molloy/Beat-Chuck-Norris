import Target from '../models/target.js';
import Item from '../models/item.js';

let _target = new Target("Chuck Norris", 100, 1, 5, 10)
let joe = new Item('Joe Piscopo', 1, 'Sidekicks', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYjjkC1AMAsrNhpNbpe14XcOVgD-S2gy-Ej3KK5OqFx4HnK2CBg', 'looked at funny');
let macho = new Item('Macho Man Randy Savage', 7, 'Walker, TR - Fight or Die', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0TxHmQ9TCxpvyoh8Ir9I1lVNlnghQcugZT4nFOSDTeUA3bCn2', 'suplex slammed');
let dave = new Item('David Carradine', 10, 'Lone Wolf McQuade', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3AL-67f8knSmRtIPD6fWk67DJWYnLNOv6oNorzOWRuQW9Wp-Hqg', 'hit with some nasty "Kung-Fu"');
let bruce = new Item('Bruce Lee', 20, 'Way of the Dragon', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSePtGaEjrLadaEm8qW5uAXGp1TJw8lIonFDP8cM8THmqV3_Q', 'kicked with a reverse roundhouse');
let _items = [joe, macho, dave, bruce];

export default class GameService {
  constructor() { }
  get Target() {
    return {
      name: _target.name,
      health: _target.health,
      attacks: _target.attacks,
      items: _target.items,
      hits: _target.hits
    }
  }

  addItemToTarget(itemIndex) {
    //   === ask___()
  }
  attackTarget(attackName) {

  }
}