$(document).ready(function()      {

  player1.checkCell();
  $('#cellInfo .panel-body .well span#pcLocation').text(" "+player1.loc.name+" - "+player1.cell.name);

  $('#moveUp').click(function()   {
    player1.mvUp();
    player1.checkCell();
    player1.checkInventory();
    $('#cellInfo .panel-body .well span#pcLocation').text(" "+player1.loc.name+" - "+player1.cell.name);
  });
  $('#moveRight').click(function(){
    player1.mvRight();
    player1.checkCell();
    player1.checkInventory();
    $('#cellInfo .panel-body .well span#pcLocation').text(" "+player1.loc.name+" - "+player1.cell.name);
  });
  $('#moveLeft').click(function() {
    player1.mvLeft();
    player1.checkCell();
    player1.checkInventory();
    $('#cellInfo .panel-body .well span#pcLocation').text(" "+player1.loc.name+" - "+player1.cell.name);
  });
  $('#moveDown').click(function() {
    player1.mvDown();
    player1.checkCell();
    player1.checkInventory();
    $('#cellInfo .panel-body .well span#pcLocation').text(" "+player1.loc.name+" - "+player1.cell.name);
  });
  $("div.well ul#cellItems li.item").click(function() {
    var cellItem = this;
    var itemIndex=$("ul#cellItems li.item").index(cellItem);
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
});
