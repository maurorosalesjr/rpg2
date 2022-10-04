import {Player} from './../src/js/game.js';

describe('Player', () => {



  test('should create a player', () => {
    const player = new Player(playerType);
    expect(this.playerType).toEqual(playerType);
  });


});