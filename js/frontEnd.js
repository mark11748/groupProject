$(document).ready(function()      {

  player1.checkCell();
  $('#cellInfo .panel-body .well span#pcLocation').text(" "+player1.loc.name+" - "+player1.cell.name);
  $("#pcLocation").append(player1.cell.description);

  $('#moveUp').click(function()   {
    var moveUp = player1.mvUp();
    $("p#actionInfo").empty();
    player1.checkCell();
    player1.checkInventory();
    $("p#actionInfo").prepend(moveUp);
    $('#cellInfo .panel-body .well span#pcLocation').text(" "+player1.loc.name+" - "+player1.cell.name);
    $("#pcLocation").append(player1.cell.description);
  });
  $('#moveRight').click(function(){
    var moveRight = player1.mvRight();
    $("p#actionInfo").empty()
    player1.checkCell();
    player1.checkInventory();
    $("p#actionInfo").prepend(moveRight);
    $('#cellInfo .panel-body .well span#pcLocation').text(" "+player1.loc.name+" - "+player1.cell.name);
    $("#pcLocation").append(player1.cell.description);
  });
  $('#moveLeft').click(function() {
    var moveLeft = player1.mvLeft();
    $("p#actionInfo").empty()
    player1.checkCell();
    player1.checkInventory();
    $("p#actionInfo").prepend(moveLeft);
    $('#cellInfo .panel-body .well span#pcLocation').text(" "+player1.loc.name+" - "+player1.cell.name);
    $("#pcLocation").append(player1.cell.description);
  });
  $('#moveDown').click(function() {
    var moveDown = player1.mvDown();
    $("p#actionInfo").empty()
    player1.checkCell();
    player1.checkInventory();
    $("p#actionInfo").prepend(moveDown);
    $('#cellInfo .panel-body .well span#pcLocation').text(" "+player1.loc.name+" - "+player1.cell.name)
    $("#pcLocation").append(player1.cell.description);
  });

  /*
  $("div.well ul#cellItems li.item").click(function() {
    var cellItem = this;
    var itemIndex=$("ul#cellItems li.item").index(cellItem);
    console.log(itemIndex);
    player1.inventoryAdd(itemIndex);
    $("div.well ul#heldItems").append("<li class=\"item\">" + player1.items[(player1.items.length-1)].info.name + "</li>");   //add to inventory display
    $("ul#cellItems li:nth-child("+(itemIndex+1).toString()+")").remove();                                         //remove from cell display
    player1.checkCell();
    player1.checkInventory();
  });

  $("div.well ul#heldItems li.item").click(function(){
    var itemIndex=$("div.well ul#heldItems li.item").index(this);
    if (player1.items[itemIndex] instanceof KeyItem){
      player1.items[itemIndex].useKey();
      player1.checkInventory();
    }
  });
  */
});
