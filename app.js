  function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bee2")) {
        image.src = "images/bee123.gif";
    } else {
        image.src = "images/bee2.gif";
    }
}


var myImg = document.querySelector('img')
var newPosY = Math.random() * 600;
var newPosX = Math.random() * 800;

  myImg.style.top = newPosY + "px";
  myImg.style.left = newPosX + "px";
  // myImg.addEventListener("click");
