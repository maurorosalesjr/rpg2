import $ from 'jquery';
import'bootstrap';
import'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css';
import {Game, Player, turnActivity, rollDice} from './game.js';

const activity = turnActivity(diceRollNumber);


function diceRollToPlay(game, activity) {
  if (activity === "battleMonster") {
    game.monsterHealth = 20;
    $("#battleAMonster").show();
  } else if (activity === "findFood") {
    $("#findFood").show();
  } else if (activity === "tripAndFall") {
    $("#tripAndFall").show();
  }
}

$(document).ready(function() {

  const playerName = $('#playerName').val();
  const playerType = $('#playerType').val();
  let player1 = new Player(playerType);
  let currentGame = new Game(player1);
  $("#monsterHealth").text(currentGame.monsterHealth);
  $("#playerHealth").text(currentGame.player.hp);
  $("#playerXp").text(currentGame.player.xp);
  $("#playerLevel").text(currentGame.player.level);
  $("#diceNumber").text(currentGame.diceRollNumber);
  $("#playerTypeDisplay").text(playerType);
  $("playerNameDisplay").text(playerName);

  $('form#createPlayer').submit(function(event) {
    event.preventDefault();
    $(".intro").hide();
    $(".play").show();
    $(".playerStatus").show();
  });

  $('button#diceRoll').click(function(){
    $(".play").hide();
    $(".gameActivity").hide();
    diceRollToPlay(currentGame, (currentGame.takeTurn()));
  });

})