$(document).ready(function(){
  $('#cellInfo .panel-body .well span#pcLocation').text(" "+player1.loc.name+" - "+player1.cell.name);
  $('#moveUp').click(function(){
    player1.mvUp();
    $('#cellInfo .panel-body .well span#pcLocation').text(" "+player1.loc.name+" - "+player1.cell.name)
  });
  $('#moveRight').click(function(){
    player1.mvRight();
    $('#cellInfo .panel-body .well span#pcLocation').text(" "+player1.loc.name+" - "+player1.cell.name)
  });
  $('#moveLeft').click(function(){
    player1.mvLeft();
    $('#cellInfo .panel-body .well span#pcLocation').text(" "+player1.loc.name+" - "+player1.cell.name)
  });
  $('#moveDown').click(function(){
    player1.mvDown();
    $('#cellInfo .panel-body .well span#pcLocation').text(" "+player1.loc.name+" - "+player1.cell.name)
  });

});
