//TO_DO: REPLACE posX/Y variables with player.id[posX,posY] array

function Player (name,job,loc,posX,posY) {
  //char name and job is set by char after game starts
  this.name = "UNSET";
  this.job  = "UNSET";
  //_loc_ is the 'zone' or area you're in.
  this.loc  = "ERR";
  //player.id is defined as [posX,posY]
  //_posX_/_posY_ are passed to _loc_ to aquire the actual cell object or point at which the player resides on the local map.
  this.id = ["ERR","ERR"];

}
//the set methods for the player are as follows
player.prototype.setName(name) {
    this.name=name;
}
player.prototype.setJob(job) {
    this.job=job;
}
player.prototype.setLoc(loc) {
    this.loc=loc;
}
player.prototype.setPosX(posX) {
    this.id[0]=posX;
}
player.prototype.setPosY(posY) {
    this.id[1]=posY;
}
//player traversal methods (prototype)
player.prototype.getRoom() {
    var PC = this;
    PC.loc.cells.forEach(cell) {
      if(cell.id[0] === PC.id[0] && cell.id[1] === PC.id[1]) {

      }
    };
}
player.prototype.mvUp(){}
player.prototype.mvDown(){}
player.prototype.mvLeft(){}
player.prototype.mvRight(){}
/********************************************************************************/
/*the locale seperates the traversable cells into various 'zones' rather than confining everything to a single gameboard. it can handle zone-wide events affecting all cells it contains */
function locale (name,cells,events) {
  this.name   =name;
  this.cells  =cells;
  this.events =events;
}

/********************************************************************************/
/* !IMPORTANT!-ID properties/members should always be used as two-element arrays to hold the X/Y pos of the object in question-!IMPORTANT!  Cell definition needs setDescription function.*/
function cell (n,nID,s,sID,e,eID,w,wID,contents,name,id,items) {
  //what's it's name?
  this.name=name;
  //room description goes bellow:
  this.desc="[PLACEHOLDER]";
  this.id  =id;
  //what's it connected to?
  this.nID=nID;
  this.sID=sID;
  this.eID=eID;
  this.wID=wID;
  //is the direction passable?
  this.n=n;
  this.s=s;
  this.e=e;
  this.w=w;
  //does it have items?
  this.items=items;
}
//cell.prototype.
$(document).ready(function(){

});
