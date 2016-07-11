# WDI LDN 21 PROJECT 1

##About The Game

Switch Tile is a simple game where the player must reorganise the tiles into the correct order.

This game was inspired by the "15 Tiles" game, which features a 4x4 grid with one missing tile that the player must slide pieces into to organise them into the correct order.

Initially the plan was to replicate this game logic, however I found that it made the game too challenging for the player and difficult to test win conditions. 

Instead, the player can click any tile and it will swap places with the "blank" (which is now filled with a Pikachu gif.)

The challenge is to organise all the tiles within the allocated time limit.  

##How It Works

Using a constructor function a grid of list item elements are generated on the DOM. Using a loop their index positions are pushed into an array which is used as a baseline for the win condition.

Then, another function shuffles array and loops through each li to randomise their data-index attribute.

When a player clicks on a tile, the Pikachu and clicked element swap data-index and classes; giving the appearance that they have switched places. A function to check for win is run on each click which loops through the li elements and pushes their data-index into an array, which is then compared to the original baseline array to determine if the player has moved all the tiles into the correct order. 


##Resources

The game was coded in jQuery and javascript. I also utilised animations from the animate.css library and dialog modals (in place of alerts) using a jQuery ui library. 


##Wins 
- Different difficulty Levels.
- Randomly generating colors.
- Getting the timer to work. 
- Styling and sound effects.


##Challenges / Bugs
One bug I had was that if the player clicks on the tile at the same time as the timer runs out and the shuffle function executes; all the tiles would become the same as the clicked element. A "solution" for this was to use an Alert to force a "pause" to prevent the user from clicking on a tile. This was later changed to a jQuery ui modal for styling improvements. 

Another challenge was getting the styling to transfer when the elements were shuffled. I had to create a function to reset the classes of the elements after being shuffled. 

I was hoping to make the game optimised for mobile; however to give the grid appearance of the li elements, the exact dimensions had to be calculated within the constructor function which required a set pixel height/width for the ol the li elements were appended to. 

I could resize the grid so it would fit on the smallest mobile screen (under 320 pixels); however this makes the tiles too small for the desktop demo for the project. 

##Enhancements

Hoping to improve on the game in the future by adding:

- Object Oriented Programming.
- Responsive/mobile design.
- Power-ups to lengthen time limit.
- Additional difficulty levels such as limiting the number of moves the player can make to complete the game, or different time-limits.







