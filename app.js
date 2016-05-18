var game = {
  player1: {
    score: 0,
    scoreBoard: document.querySelector("#scoreBoard")
  },
  player2: {
    score: 0,
    scoreBoard: document.querySelector("#scoreBoard2")
  },
  currentPlayer: null
}

game.currentPlayer = game.player1

function switchTurns() {
  if (game.currentPlayer == game.player1) {
    game.currentPlayer = game.player2;
  } else {

    // invoke the check winner function
  }
}

// function that checks for winner and announces winner

var checkWinner = function(){
 if (game.player1.score > game.player2.score){
     alert("Player 1 won!")}
    else{
      alert("Player 2 won!")
    }
  }

// function that initializes the game and starts


var container = $("#container")
var newPosY = Math.random() * 600;
var newPosX = Math.random() * 800;
// var score = 0;
var $scoreBoard = $('#scoreBoard')
var $scoreBoard2 = $('#scoreBoard2')
var counter = 0;

$("#container").parent().css({position: 'relative'});
$("#container").css({top: 100, left: 100, position:'absolute'});

function Bee(dateCreated){
  this.dateCreated = dateCreated;
  this.x = Math.round(Math.random() * 800);
  this.y = Math.round(Math.random() * 600);

  container.append('<img src="images/bee123.gif">');
  this.$selector = $('img').last();
  this.$selector.attr('style', 'top:' + this.y + 'px;left:' + this.x + 'px;')

  var self = this
  this.move = function(){
    this.$selector.animate({
      top: Math.round(Math.random() * 600),
      left: Math.round(Math.random() * 800)
    }, Math.round(Math.random() * 500) + 1000, function(){
      self.move()
    })
  }

  this.move()

  this.$selector.on('click', function(){
    if(game.currentPlayer == game.player1) {
      game.player1.score ++
      new Bee(Date.now())
      $scoreBoard.html(game.player1.score)
      $(this).remove()
    }
    else if (game.currentPlayer == game.player2) {
      game.player2.score ++
      new Bee(Date.now())
      $scoreBoard2.html(game.player2.score)
      $(this).remove()
      if (counter == 0) {
        $('#countdown').html(15)
        countdown()
        counter ++
      }
    }
  })
}


var bee1 = new Bee(Date.now())
var bee2 = new Bee(Date.now())
var bee3 = new Bee(Date.now())
var bee4 = new Bee(Date.now())


// countdown timer
function startGame(){
  $("#start-game").off("click")

  countdown();
}

var seconds;
var temp;

function countdown() {
  seconds = document.getElementById('countdown').innerHTML;
  seconds = parseInt(seconds, 10);

  if (seconds == 1) {
    temp = document.getElementById('countdown');
    temp.innerHTML = "Next!";
    alert("Press 'Start Game' for next player turn!")
    switchTurns()
    return;
  }

  seconds--;
  temp = document.getElementById('countdown');
  temp.innerHTML = seconds;
  timeoutMyOswego = setTimeout(countdown, 1000);
}

$("#start-game").on("click", startGame)
