/*=====================================*/

// THIS SCRIPT FOR FINALIZED OR POLISHED CODE

/*=====================================*/

//TO_DO: REPLACE posX/Y variables with player.id[posX,posY] array


function Player (name,loc,posX,posY) {
  //char name (this.job not implemented) is set by char after game starts
  this.name = name                  || "UNSET";
  //_loc_ is the 'zone' or area you're in containing the 'cell'.
  this.loc  = loc                   || "ERR";
  this.cell = loc.cells[posX][posY] || "ERR";
  //player.id is defined as [posX,posY]
  //_posX_/_posY_ are passed to _loc_ to aquire the actual cell object or point at which the player resides on the local map.
  this.id = ["ERR","ERR"];
}
//the set methods for the player are as follows
Player.prototype.setName(name) {
    this.name=name;
}
Player.prototype.setLoc(loc) {
    this.loc=loc;
}
Player.prototype.setPosX(posX) {
    this.id[0]=posX;
}
Player.prototype.setPosY(posY) {
    this.id[1]=posY;
}
//player traversal methods (prototype)
Player.prototype.setCell() {
    //itterate through player's current room
    this.loc.cells.forEach(cell) {
      //look for cell matching the players id
      if(cell.id[0] === this.id[0] && cell.id[1] === this.id[1]) {
        this.cell = cell; //set player's cell to the referenced cell
      }
    };
}
Player.prototype.mvUp(){
  //if not out of bounds
  if (this.cell.n != false){
    //if not wall
    if (this.cell.n.type < 0){
      //if not locked door
      if (this.cell.n.isLocked !== true){
        this.id[1]++;
        this.setCell();
      }
    }
  }
}
Player.prototype.mvDown(){
  //if not out of bounds
  if (this.cell.s != false){
    //if not wall
    if (this.cell.s.type < 0){
      //if not locked door
      if (this.cell.s.isLocked !== true){
        this.id[1]--;
        this.setCell();
      }
    }
  }
}
Player.prototype.mvRight(){
  //if not out of bounds
  if (this.cell.e != false){
    //if not wall
    if (this.cell.e.type < 0){
      //if not locked door
      if (this.cell.e.isLocked !== true){
        this.id[0]++;
        this.setCell();
      }
    }
  }
}
Player.prototype.mvLeft(){
  //if not out of bounds
  if (this.cell.w != false){
    //if not wall
    if (this.cell.w.type < 0){
      //if not locked door
      if (this.cell.w.isLocked !== true){
        this.id[0]--;
        this.setCell();
      }
    }
  }
}

//this.job  = "UNSET"; //simple player stat for testing;
/*
Player.prototype.setJob(job) {
    this.job=job;
}
*/
/********************************************************************************/
/*the locale seperates the traversable cells into various 'zones' rather than confining everything to a single gameboard. it can handle zone-wide events affecting all cells it contains */
function Locale (name,cells,events) {
  this.name   = name;
  this.cells  = cells;
  //this.events = events;
}

/********************************************************************************/
/* !IMPORTANT!-ID properties/members should always be used as two-element arrays to hold the X/Y pos of the object in question-!IMPORTANT!  Cell definition needs setDescription function.*/
function Cell (n,nID,s,sID,e,eID,w,wID,contents,name,id,items) {
  //what's it's name?
  this.name=name;
  //room description goes bellow:
  this.desc="[PLACEHOLDER]";
  this.id  =id;
  /*
  ORIGINAL STRUCTURE -- MAYBE REMOVED SOON
  //what's it connected to?
  this.nID=nID;
  this.sID=sID;
  this.eID=eID;
  this.wID=wID;
  */
  //is the direction passable?
  this.n=n;
  this.s=s;
  this.e=e;
  this.w=w;
  //does it have items?
  this.items=items;
}
/**********************************************************************************/

//cell.prototype.
$(document).ready(function(){

});
