  function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bee2")) {
        image.src = "images/bee123.gif";
    } else {
        image.src = "images/bee2.gif";
    }
}

var body = $("body")
var container = $("#container")
// var myImg = document.querySelector('img')
var newPosY = Math.random() * 600;
var newPosX = Math.random() * 800;
var score = 0;
var $scoreBoard = $('#scoreBoard')

$("#container").parent().css({position: 'relative'});
$("#container").css({top: 100, left: 100, position:'absolute'});

// myImg.style.top = newPosY + "px";
// myImg.style.left = newPosX + "px";

function Bee(dateCreated){
  this.dateCreated = dateCreated;
  this.x = Math.round(Math.random() * 800);
  this.y = Math.round(Math.random() * 600);

  container.append('<img src="images/bee123.gif">');
  this.$selector = $('img').last();
  this.$selector.attr('style', 'top:' + this.y + 'px;left:' + this.x + 'px;')

  this.$selector.on('click', function(){
    score ++
    new Bee(Date.now())
    $scoreBoard.html(score)
    $(this).remove()
  })

}

var bee1 = new Bee(Date.now())
var bee2 = new Bee(Date.now())
var bee3 = new Bee(Date.now())
var bee4 = new Bee(Date.now())
var bee5 = new Bee(Date.now())
var bee6 = new Bee(Date.now())
var bee7 = new Bee(Date.now())
var bee8 = new Bee(Date.now())



// countdown timer
var seconds;
  var temp;

  function countdown() {
    seconds = document.getElementById('countdown').innerHTML;
    seconds = parseInt(seconds, 10);

    if (seconds == 1) {
      temp = document.getElementById('countdown');
      temp.innerHTML = "GAME OVER";
      alert(score)
      return;
    }

    seconds--;
    temp = document.getElementById('countdown');
    temp.innerHTML = seconds;
    timeoutMyOswego = setTimeout(countdown, 1000);
  }

  countdown();
