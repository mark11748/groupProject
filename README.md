# _{Bunker Escape}_

#### _{Text Based Web Game with Control Pad}, {7.17.17}_

#### By _**{Mark Woodward, Camden Swita, Brian Beal, Nicholas Raethke}**_

## Description

_{This is a text-based game set in a bunker that consists of a 3x3 grid (see map below). The user clicks on directional buttons that move the user towards the edge of the room and describe what is there.  There may be a wall, a door, and/or an item.  The action button opens doors and picks up items.  The object of the game is to find the key and then the exit. }_

## Specs



| Expected Input | Example | Expected Output |
| --- | --- | --- | --- |
| User clicks arrow keys toward open space | -> | move to next cell |
| User clicks arrow key toward closed space | -> x | feedback: example "can't move here" |
| User moves toward unlocked door with arrow key | -> -> | user moves to corresponding cell |
| User moves toward locked door without key | -> x | feedback: example 'this door is locked, you need a key' |
| user 'sees' object | ~~~~ | feedback: 'there is a box, would you like to open it?' |
| user picks up object and places it in inventory | click pick up button | x item has been added to your inventory |

## Map

| This | is | a | map | of | the | game |
| --- | --- | --- | --- | --- |
| - | x | - | x | - | x | - |
| x | roomNorthWest (x2, y0) | <-> | roomNorth (x2, y1) | <-> | roomNorthEast (x2, y2) This is the starting point | x |
| - | <-> | - | x | - | x | - |
| x | roomWest (x1, y0) | <-> | roomCentral (x1, y1) This room has the key | x | roomEast (x1, y2) | exit/goal |
| - | <-> | - | x | - | <-> with key | - |
| x | roomSouthWest (x0, y0) | <-> | roomSouth (x0, y1) | <-> | roomSouthEast (x0, y2) | x |
| - | x | - | x | - | x | - |

Key
x = unavailable move, needs feedback
- = Null/no diagonal movement
<-> = movement allowed back and forth

## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Mark Woodward, Camden Swita, Brian Beal, Nicholas Raethke https://github.com/okiguess/groupProject nicholas.raethke@gmail.com}_

## Technologies Used

_{This game was built with HTML5, CSS, and Javascript.  We are also referencing bootstrap.css and JQuery 3.2.1}_

### License

*{Consider this Creative Commons and Open Source.  Use at your own risk.}*

Copyright (c) 2017 **_{Mark Woodward, Camden Swita, Brian Beal, Nicholas Raethke}_**
