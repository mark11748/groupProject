//object array for any item that gets placed in inventory
player.prototype.inventory = {
  items: [
  ]
};


//constructor for using key on the locked door
player.inventory.push({
  name: 'key',
  icon: 'img/PLACEHOLDERS/item/redcardkey.jpg',
  effect: function(unlock) {
    console.log('The keycard opens' + unlock.purpleDoor);
  }
});

item = {

}
