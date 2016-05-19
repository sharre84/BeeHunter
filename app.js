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

var beeSplat = $("#beeSplat")[0];
var container = $("#container");
var newPosY = Math.random() * 600;
var newPosX = Math.random() * 800;
var $scoreBoard = $('#scoreBoard');
var $scoreBoard2 = $('#scoreBoard2');
var counter = 0;

game.currentPlayer = game.player1

function switchTurns() {
  if (game.currentPlayer == game.player1) {
    game.currentPlayer = game.player2;
  } else {
    soundLoop.pause()
    checkWinner()
    clearAll()
    temp = document.getElementById('countdown');
    temp.innerHTML = "GAME OVER!";
  }
}

var checkWinner = function(){
  if (game.player1.score > game.player2.score){
    alert("Player 1 has won!")
  } else if(game.player1.score == game.player2.score){
      alert("It's a draw!")
    }
    else {
      alert("Player 2 has won!")
    }
  }

  $("#container").parent().css({position: 'relative'});
  $("#container").css({top: 100, left: 100, position:'absolute'});

  function Bee(dateCreated){
    this.dateCreated = dateCreated;
    this.x = Math.round(Math.random() * 800);
    this.y = Math.round(Math.random() * 600);

    container.append('<img class="bee" src="images/bee1234.gif">');
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
      beeSplat.pause()
      beeSplat.currentTime = 0;
      beeSplat.play();
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

function startGame(){
  $("#start-game").off("click")
  var bee1 = new Bee(Date.now())
  var bee2 = new Bee(Date.now())
  var bee3 = new Bee(Date.now())
  var bee4 = new Bee(Date.now())
  var bee5 = new Bee(Date.now())

  soundLoop.play();
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
      alert("Time is up!")
      switchTurns()
      return;
    }

    seconds--;
    temp = document.getElementById('countdown');
    temp.innerHTML = seconds;
    timeoutMyOswego = setTimeout(countdown, 1000);
  }

  $("#start-game").on("click", startGame)

  $('#reset').click(function() {
    location.reload();
  });

var clearAll = function() {
    clearAll = $('.bee').remove();
  }

  soundLoop = new Audio('sounds/bee.mp3');
  if (typeof soundLoop.loop == 'boolean') {
      soundLoop.loop = true;
  } else
  {
      soundLoop.addEventListener('ended', function() {
          this.currentTime = 0;
          this.play();
      }, false);
  }
