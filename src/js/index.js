import { Game, rollDice } from './game.js';
import { Player, createPlayer } from './player.js';
import $ from 'jquery';
import'bootstrap';
import'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';

// const game = Game;
const activity = rollDice();
function clearFields() {
  $('.gameActivity').html("");
  rollDice().append();
}

$(document).ready(function() {

  $('form#createPlayer').submit(function(event) {
    event.preventDefault();
    $(".intro").hide();
    $(".play").show();
    $(".playerStatus").show();
    const player = createPlayer();

    const yourName = $('#playerName').val();
    console.log( $('#playerName').val());
    let player1 = new Player(player);
    // let currentGame = new Game(player1);
    //$("#monsterHealth").text(currentGame.monsterHealth);
    $("#playerHealth").html(`<p>${player1.hp}</p>`);
    $("#playerXp").html(`<p>${player1.xp}</p>`);
    $("#playerLevel").html(`<p>${player1.level}</p>`);
    $("#diceRoll").text(rollDice().diceRoll);
    $("#occupation").html(`<p>${player1.occupation}</p>`);
    $("#playerNameDisplay").html(`<p>${yourName}</p>`);
    console.log(`${player1.occupation}`);
  });

  $('button#diceRoll').click(function(){
    clearFields();
    diceRollToPlay(rollDice());
  });

  function diceRollToPlay() {
    console.log(activity);
    if (activity === "battle") {
      // game.monsterHealth = 20;
      $(".gameActivity").append(`
      <h3>Now you get to FIGHT A MONSTER!!</h3>
      <p>You hear a branch crack behind you, as you turn around you are startled byt the monster ready to pounce</p>`
      );
      
    } else if (activity === "trip") {
      $(".gameActivity").append(`
      <h3>You tripped and fell</h3>
      <p>During the last fall, your trip cost you 5hp. You must have been falling with experience, because you also gained 5xp!</p>
      `);
    } else if (activity === "food") {
      $(".gameActivity").append(`
      <h3>You found food!</h3>
      <p>While picking up your die, you see seomthing out of the corner of your eye. You find GENERIC FOOD, giving you 5hp and 10xp!</p>
      `);
    }
  }

  
});