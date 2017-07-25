/*============================================================================*/

//          THIS SCRIPT FOR NON-FINALIZED OR TEST CODE

/*----------------------------------------------------------------------------*/
//   TO DO: TEST IN MV FUNCTIONS FOR OFFSET CELLS OR NON-RECTANGULAR ROOMS
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
    if (Number.isInteger(posX))
      {this.id[0]=posX;}
}
Player.prototype.setPosY = function(posY) {
  if (Number.isInteger(posY))
    {this.id[1]=posY;}
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
  if ((this.id[1]-1) >= 0){
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
  if ((this.id[1]+1) <= this.loc.cells[this.id[0]].length-1){
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
  if ((this.id[0]+1) <= this.loc.cells.length-1){
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
  if ((this.id[0]-1) >= 0){
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
//WORKS BUT BE CAREFUL OF OBJECTS ASSIGNED BY REF. RATHER THAN VAL.
Locale.prototype.cellDebug = function(){
  //var x = 0;
  //var y = 0;
  //If room has been defined/not empty
  if (this.cells.length>0) {
    //this moves through the outter (x-axis) array of arrays
    this.cells.forEach(function(cell_X,x) {
      //this moves through the inner (y-axis) arrays
      cell_X.forEach(function(cell_Y,y) {
        //if array cell contains a Cell object
        if (typeof cell_Y === "object") {
          //debugger;
          cell_Y.name = cell_Y.name +" "+x.toString()+","+y.toString();
        }
        //y+=1;
      })
      //x+=1;
      //y =0;
    })
  }
}
Locale.prototype.addNorthRow = function () {
  //for each X position add a space to the start of the corresponding Y array
  this.cells.forEach(function (cell){cell.unshift(undefined);})
};
Locale.prototype.addSouthRow = function () {
  //for each X position add a space to the end of the corresponding Y array
  this.cells.forEach(function (cell){cell.push(undefined);})
};
Locale.prototype.addWestRow = function () {
  var width  = this.cells[0].length;
  //the x array grows from the left;
  this.cells.unshift(new Array (width));
  this.cells[0].forEach(function(cell){cell=undefined;});
};
Locale.prototype.addEastRow = function () {
  var width  = this.cells[0].length;
  var newMax = this.cells.length;
  //the x array grows from the right;
  this.cells.push(new Array (width));
  this.cells[newMax].forEach(function(cell){cell=undefined;});
};

function Cell (name        = "[PLACEHOLDER_Cl_NAME]",
               description = "[PLACEHOLDER_DESC]",
               rm          = "[PLACEHOLDER_Rm_NAME]",
               n,s,e,w,
               items       = [])
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
//TESTED COPY FUNCTION
Cell.prototype.copyOf = function(){
  var newCell = new Cell (this.name,this.description,this.rmName,
                          this.n.copyOf(),this.s.copyOf(),this.e.copyOf(),this.w.copyOf(),[]);
  return newCell;
}
//NEED TO TEST COPY FUNCTION
Cell.prototype.copyOfItems = function(){
  var newCell = new Cell (this.name,this.description,this.rmName,
                          this.n.copyOf(),this.s.copyOf(),this.e.copyOf(),this.w.copyOf(),[]);
  //if old cell has items push them onto the items array of new cell
  if (this.items.length) {
    this.items.forEach(function(item){newCell.items.push(item.copyOf())});
  }
  return newCell;
}

function Border(edgeType) {
  this.type = edgeType; // CAN BE: wall(0)/open(1)/door(2)
  //this.isOpen   = false; OUT OF SCOPE -- too much work
  this.isLocked = false;
  this.isExit   = false;
  //this.nextRoom = this.id[0].name; OUT OF SCOPE -- redundant: Cell.rmName can reference parrent room
}
//TESTED COPY FUNCTION
Border.prototype.copyOf = function(){return new Border(this.type);} //TEST COPY FUNCTION

//BUILD TESTROOM
var cell_Empty = new Cell("EMPTY CELL","An empty cell","TestRm",new Border(1),new Border(1),new Border(1),new Border(1),[]);
// !WARNING! : create()'s arg acts as PROTOTYPE. in console cells will be unset. -- Object.create(cell_Empty); --
var testCell_0_0 = cell_Empty.copyOf();
var testCell_0_1 = cell_Empty.copyOf();
var testCell_0_2 = cell_Empty.copyOf();
var testCell_1_0 = cell_Empty.copyOf();
var testCell_1_1 = cell_Empty.copyOf();
var testCell_1_2 = cell_Empty.copyOf();
var testCell_2_0 = cell_Empty.copyOf();
var testCell_2_1 = cell_Empty.copyOf();
var testCell_2_2 = cell_Empty.copyOf();

var testRoom     = new Locale("TestRm",
                              [[testCell_0_0,testCell_0_1,testCell_0_2],
                               [testCell_1_0,testCell_1_1,testCell_1_2],
                               [testCell_2_0,testCell_2_1,testCell_2_2]]);

var player1 = new Player("Bob",testRoom,1,1);
