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
  $("#actionIngo").text("There is a ")
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



function Cell (name,description,room,posX,posY,n,s,e,w,nID,sID,eID,wID,items) {
  //what's it's name?
  this.name=name || "default";
  //room description goes bellow:
  this.description="[PLACEHOLDER]";
  //ids are as follows _parrentRoom_ , _X-coordinate_ , _Y-coordinate_
  this.id = [room,posX,posY];
  //is the direction passable? uses border object
  this.n=n;
  this.s=s;
  this.e=e;
  this.w=w;
  //does it have items?
  this.items=items;
}

function Border(edgeType) {
  this.type = edgeType; // CAN BE: wall(0)/open(1)/door(2)/exits(3)
  //this.isOpen   = false; OUT OF SCOPE -- too much work
  this.isLocked = false;
  this.isExit   = false;
  //this.nextRoom = this.id[0].name; OUT OF SCOPE -- redundant: Cell.id can reference parrent room

    }
}
