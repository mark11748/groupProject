# _{Bunker Escape}_

#### _{Text Based Web Game with Control Pad}, {7.17.17}_

#### By _**{Mark Woodward, Camden Swita, Brian Beal, Nicholas Raethke}**_

## Description

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

## Specs



|Expected Input |Example |Expected Output |
|--|-- |-- |-- |
|User clicks arrow keys toward open space| -> |move to next cell|
|User clicks arrow key toward closed space| -> x|feedback: example "can't move here"
|User moves toward unlocked door with arrow key| -> -> |user moves to corresponding cell|
|User moves toward locked door without key|-> x |feedback: example 'this door is locked, you need a key'|
|user 'sees' object|~~~~| feedback: 'there is a box, would you like to open it?'
|user picks up object and places it in inventory| click pick up button | x item has been added to your inventory|

## Map

|This| is | a| map | of| the| game
|---|---|---|
|-|x|-|x|-|x|-|
|x|roomNorthWest (x3, y1)|<->|roomNorth (x3, y2) This is the start point|<->|roomNorthEast|x|
|-|<->|-|x|-|x|-|
|x|roomWest (x2, y1)|<->|roomCentral (x2, y2) This room has the key|x|roomEast (x2, y2)|exit/goal|
|-|<->|-|x|-|<-> with keycard|-|
|x|roomSouthWest (x1, y1)|<->|roomSouth (x2, y1)|<->|roomSouthEast (x3, y1)|x|
|-|x|-|x|-|x|-|

Key
x = unavailable move, needs feedback
- = Null/no diagonal movement
<-> = movement allowed back and forth


## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2015 **_{List of contributors or company name}_**
