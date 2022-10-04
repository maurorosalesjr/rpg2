// function turnActivity(diceRollNumber) {
//   let rollActivity;
//   const diceRollActivityMap = {
//     1 : "battleMonster",
//     2 : "tripAndFall",
//     3 : "findFood",
//     4 : "findFood",
//     5 : "tripAndFall",
//     6 : "battleMonster",
//   };
//   rollActivity = diceRollActivityMap[diceRollNumber];
//   return rollActivity;
// }
export { rollDice };

function rollDice() {
  let diceRoll = Math.floor((Math.random()*6) + 1);
  console.log(diceRoll);
  if(diceRoll === 1 || diceRoll === 2){
    return "tripAndFall";
  } else if (diceRoll === 3 || diceRoll === 4 || diceRoll === 5){
    return "battleMonster";
  } else {
    return "findFood";
  }
}
//^^^^^^^^ above can be smashed together

export class Game { // first class citizen
  constructor(player) {
    this.player = player;
    this.monsterHealth = 0;
    this.diceRollNumber = 0;
  }

  takeTurn() {
    this.diceRollNumber = rollDice();
    return this.diceRollNumber;
  }

  battleAttack() {
    this.monsterHealth -= this.player.weaponDamage;
    if (this.monsterHealth >0) {
      this.player.hp -= 5;
    } else if (this.monsterHealth <=0) {
      this.player.xp += 15;
      return "Good job! You killed the monster!";
    }
  }

  tripAndFall() {
    this.player.hp -= 5;
    this.player.xp += 5;
  }

  findFood() {
    this.player.hp += 5;
    this.player.xp += 10;
  }
}
// ^^^^^^^^^^^^^^^^^^^ above can be made into a more functional function



// ^^^^^^^^^^^^^^^^^^^ above can be made into a more functional function