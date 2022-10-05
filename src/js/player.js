export class Player{
  constructor(playerName) {
    this.playerName = playerName;
    this.age = 20;
    this.level = 1;
    this.hp = 20;
    this.xp = 0; 
    this.occupation = "peasant";
    this.backstory = "You come from a long line of peasants doing peasant things. Wanting to break the cycle of peasantry you decide that it's the adventurer's life for you.";
  }
}
export { createPlayer };

function createPlayer() {
  const player = new Player();
  const topPlayer = new Player({...player, age : 69, level : 420, hp : 200, occupation : "Highest Wizard", backstory : "You've trained your whole life to be an adventurer. Some at the guild say you've been training for too long. You are now OP and only the Gods are your rivals"});
  const anotherPlayer = new Player({...player, age : 17, occupation : "Barbarian", backstory : "You grew up on the streets, and it makes you mad. No one likes it when you're mad. Instead of taking it out on the townsfolk, you decide to head out into the world searching for some anger management, in the form of your fist in a monster's head."});
  let playerRoll = Math.floor((Math.random() * 6) +1);
  console.log(playerRoll);
  if(playerRoll === 1 || playerRoll === 2){
    console.log(player);
    return player;
  } else if (playerRoll === 6){
    console.log(topPlayer);
    return topPlayer;
  } else {
    console.log(anotherPlayer);
    return anotherPlayer;
  } 
} 
