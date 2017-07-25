/*=====================================*/

// THIS SCRIPT FOR NON-FINALIZED OR TEST CODE

/*=====================================*/


function Item (name, type, posX, posY) {
  this.name = name;
  this.type  = type;
  this.posX  = posX;
  this.posY  = posY;
}

// checks cell for item property (true/false)
if (Player.cell.items == true) {
// if Cell item property is true, list out items in Cell.items array
  $("#actionInfo").text("There is a ")
  Cell.items.forEach(item){
    $("#actionInfo").text("<li>" + item.name + "</li>");
  }
}
// function Key () {
//   this.name = "unnamed_item";
//   this.description = "UNSET";
//   this.useText = "You used the "+this.name;
//
// }
/*
UNUSED MEMBERS:
===============
>>a value of -1 is "unlimited", 0 is "unuseable"/"passive-use" item
this.useCount  = 1;
this.stackSize = 1;
this.slots     = 1;
*/

/*----------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------*/

function Player (name="UNSET",loc="UNSET",posX=0,posY=0) {
  //char name (this.job not implemented) is set by char after game starts
  this.name = name;
  //_loc_ is the 'zone' or area you're in containing the 'cell'.
  this.loc  = loc;
  this.cell = loc.cells[posX][posY];
  //player.id is defined as [posX,posY]
  //_posX_/_posY_ are passed to _loc_ to aquire the actual cell object or point at which the player resides on the local map.
  this.id = [posX,posY];
}
//the set methods for the player are as follows
Player.prototype.setName = function(name) {
    this.name=name;
}
Player.prototype.setLoc = function(loc) {
    this.loc=loc;
}
Player.prototype.setPosX = function(posX) {
    this.id[0]=posX;
}
Player.prototype.setPosY = function(posY) {
    this.id[1]=posY;
}
//player traversal methods (prototype)
Player.prototype.setCell = function() {
  //if players coordinates are numbers
  if (Number.isInteger(this.id[0]) && Number.isInteger(this.id[1])) {
    //set players new cell location by using player.cell[x,y] to grab the indexes for player.loc.cell[x-axis][y-axis]
    this.cell = this.loc.cells[this.id[0]][this.id[1]];
  }
  //if NaN
  else {alert("Sorry, an error has occurd: Player coordinates were set to an invalid value.");}
}
Player.prototype.mvUp = function(){
  //if not out of bounds
  if (this.cell.n != false){
    //if not wall
    if (this.cell.n.type > 0){
      //if not locked door
      if (this.cell.n.isLocked !== true){
        this.id[1]--;
        this.setCell();
      }
      else {} //YOU NEED A KEY ITEM
    }
    else {}   //THERE IS A WALL BLOCKING YOU
  }
  else {}     //THAT WAY IS OUT OF BOUNDS
}
Player.prototype.mvDown = function(){
  //if not out of bounds
  if (this.cell.s != false){
    //if not wall
    if (this.cell.s.type > 0){
      //if not locked door
      if (this.cell.s.isLocked !== true){
        this.id[1]++;
        this.setCell();
      }
      else {} //YOU NEED A KEY ITEM
    }
    else {}   //THERE IS A WALL BLOCKING YOU
  }
  else {}     //THAT WAY IS OUT OF BOUNDS
}
Player.prototype.mvRight = function(){
  //if not out of bounds
  if (this.cell.e != false){
    //if not wall
    if (this.cell.e.type > 0){
      //if not locked door
      if (this.cell.e.isLocked !== true){
        this.id[0]++;
        this.setCell();
      }
      else {} //YOU NEED A KEY ITEM
    }
    else {}   //THERE IS A WALL BLOCKING YOU
  }
  else {}     //THAT WAY IS OUT OF BOUNDS
}
Player.prototype.mvLeft = function(){
  //if not out of bounds
  if (this.cell.w != false){
    //if not wall
    if (this.cell.w.type > 0){
      //if not locked door
      if (this.cell.w.isLocked !== true){
        this.id[0]--;
        this.setCell();
      }
      else {} //YOU NEED A KEY ITEM
    }
    else {}   //THERE IS A WALL BLOCKING YOU
  }
  else {}     //THAT WAY IS OUT OF BOUNDS
}


//!THE BELLOW CODE REGARDING: Locale,Cell,Border AND DECLARED INSTANCES SUCCESSFULLY CREATES A WORKING GAMEBOARD!

function Locale (name="[PLACEHOLDER_Rm_NAME]",cells=[]) {
  this.name   = name;
  this.cells  = cells;
  //this.events = events;
}

function Cell (name        = "[PLACEHOLDER_Cl_NAME]",
               description = "[PLACEHOLDER_DESC]",
               rm          = "[PLACEHOLDER_Rm_NAME]",
               n,s,e,w,
               items)
{
  //what's it's name?
  this.name=name;
  //room description goes bellow:
  this.description=description;
  this.rmName=rm;
  //is the direction passable? uses border object
  this.n=n;
  this.s=s;
  this.e=e;
  this.w=w;
  //does it have items?
  this.items=items;
}

function Border(edgeType) {
  this.type = edgeType; // CAN BE: wall(0)/open(1)/door(2)
  //this.isOpen   = false; OUT OF SCOPE -- too much work
  this.isLocked = false;
  this.isExit   = false;
  //this.nextRoom = this.id[0].name; OUT OF SCOPE -- redundant: Cell.rmName can reference parrent room

}

//BUILD TESTROOM
var testCell_0_0 = new Cell("cell 0,0","An empty cell","TestRm",new Border(1),new Border(1),new Border(1),new Border(1),[]);
var testCell_0_1 = new Cell("cell 0,1","An empty cell","TestRm",new Border(1),new Border(1),new Border(1),new Border(1),[]);
var testCell_0_2 = new Cell("cell 0,2","An empty cell","TestRm",new Border(1),new Border(1),new Border(1),new Border(1),[]);
var testCell_1_0 = new Cell("cell 1,0","An empty cell","TestRm",new Border(1),new Border(1),new Border(1),new Border(1),[]);
var testCell_1_1 = new Cell("cell 1,1","An empty cell","TestRm",new Border(1),new Border(1),new Border(1),new Border(1),[]);
var testCell_1_2 = new Cell("cell 1,2","An empty cell","TestRm",new Border(1),new Border(1),new Border(1),new Border(1),[]);
var testCell_2_0 = new Cell("cell 2,0","An empty cell","TestRm",new Border(1),new Border(1),new Border(1),new Border(1),[]);
var testCell_2_1 = new Cell("cell 2,1","An empty cell","TestRm",new Border(1),new Border(1),new Border(1),new Border(1),[]);
var testCell_2_2 = new Cell("cell 2,2","An empty cell","TestRm",new Border(1),new Border(1),new Border(1),new Border(1),[]);

var testRoom     = new Locale("TestRm",
                              [[testCell_0_0,testCell_0_1,testCell_0_2],
                               [testCell_1_0,testCell_1_1,testCell_1_2],
                               [testCell_2_0,testCell_2_1,testCell_2_2]]);

var player1 = new Player("Bob",testRoom,1,1);
