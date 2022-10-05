import { Game, rollDice } from './game.js';
import { Player, createPlayer } from './player.js';
import $ from 'jquery';
import'bootstrap';
import'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';

// const game = Game;
const activity = rollDice();


$(document).ready(function() {

  $('form#createPlayer').submit(function(event) {
    event.preventDefault();
    $(".intro").hide();
    $(".play").show();
    $(".playerStatus").show();
    const player = createPlayer();

    const yourName = $('#playerName').val();
    let player1 = new Player(player);
    // let currentGame = new Game(player1);
    //$("#monsterHealth").text(currentGame.monsterHealth);
    $("#playerHealth").text(player1.hp);
    $("#playerXp").text(player1.xp);
    $("#playerLevel").text(player1.level);
    $("#diceNumber").text(rollDice().diceRoll);
    $("#playerTypeDisplay").text(player1.occupation);
    $("playerNameDisplay").text(yourName);

  });

  $('button#diceRoll').click(function(){
    // $(".play").hide();
    diceRollToPlay(rollDice);
  });

  function diceRollToPlay() {
    if (activity === "battleMonster") {
      // game.monsterHealth = 20;
      $("#battle").show();
      $("#food").hide();
      $("trip").hide();
    } else if (activity === "findFood") {
      $("#food").show();
      $("trip").hide();
      $("battle").hide();
    } else if (activity === "tripAndFall") {
      $("#trip").show();
      $("#food").hide();
      $("battle").hide();
    }
  }

  $('button#load').click(function(){
    $(".gameActivity").html("");
    $(".gameActivity").hide();
    $(".play").show();
  });
});