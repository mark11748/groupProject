//Brian's iteration of Back-end logic
function Player (name, posX, posY) {
  this.name = name;
  this.posX = posX;
  this.posY = posY;
}

Player.prototype.mvup = function() {
  this.posY += 1;
}

Player.prototype.mvdown = function() {
  this.posY -= 1;
}

Player.prototype.mvright = function() {
  this.posX += 1;
}

Player.prototype.mvleft = function() {
  this.posX -= 1;
}


//Brian's iteration of User Interface logic
$(document).ready(function() {
  var currentName = prompt("Please enter your name: ");
  var currentPlayer = new Player(currentName, 0, 0);
  console.log(currentPlayer);
  $("#cellInfo ul").append("<li>You start out in a cave</li>");
  $("#up").click(function() {
    currentPlayer.mvup();
    if (currentPlayer.posY === 3) {
      currentPlayer.posY = 2;
      alert("wall there");
    } else {
      alert("move works");
    }
    console.log(currentPlayer);
  })
  $("#down").click(function() {
    currentPlayer.mvdown();
    if (currentPlayer.posY === -1) {
      currentPlayer.posY = 0;
      alert("wall there");
    } else {
      alert("move works");
    }
    console.log(currentPlayer);
  })
  $("#right").click(function() {
    currentPlayer.mvright();
    if (currentPlayer.posX === 3) {
      currentPlayer.posX = 2;
      alert("wall there");
    } else {
      alert("move works");
    }
    console.log(currentPlayer);
  })
  $("#left").click(function() {
    currentPlayer.mvleft();
    if (currentPlayer.posX === -1) {
      currentPlayer.posX = 0;
      alert("wall there");
    } else {
      alert("move works");
    }
    console.log(currentPlayer);
  })
});







    // <button id="up">North</button>
    // <button id="down">South</button>
    // <button id="right">East</button>
    // <button id="left">West</button>
