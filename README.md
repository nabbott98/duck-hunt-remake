# project1
Intended project  -- Duck Hunt Recreation -- Note: If recreating a game is not acceptable I can change the theme to shooting airplanes from a battleship per se, so the concept of the game is similar but not look
Version of game can be found here - https://www.retrogames.cz/play_1185-NES.php?language=EN

Backup Idea - Shoots and Ladders remake

Picture for added effect: Duck-Hunt-Game-Preview.png

Duck Hunt is a game deceloped for NES, THis game simulates the experience of duck hunting with one heckin doggo friend. I intend to implement modes that include(but are not limited to) multiple ducks, difficulty in flight speed and pattern and potentially the spread of fire from hunting weapon used. Upon shooting said ducks a score displays and then the doggo friend goes and fetches them and shows off their hard work!


Technologies Used - 
HTML, CSS, JS, CANVAS

Asssets I intend on using: one of retro or updated, both appear to be copyright free recreations - images can be found in this repo
- Retro themed: https://www.mariomayhem.com/downloads/sprites/duck_hunt_nes_sprites.php
- Updated: https://www.spriters-resource.com/fullview/63915/

As a user, I want the ability to... 
  - Choose difficulty
  - Choose hunting weapon
  - Click to shoot
  - Ducks to be reactive to shots
  - View ducks flying around
  - View score
  - View bullets
  - View ducks per round
  - View score per duck
  - View crosshair where mouse is
  - View round #

WireFrames - 
-Wireframes inside repo


Player: {
  Crosshair x: (x location on the canvas)
  crosshair y: (y location on the canvas)
  height: (should be about the height of a duck - maybe smaller for higher difficulty)
  width: (should be about the height of a duck - maybe smaller for higher difficulty)
  color: (image from assets download)
  action: (onClick method to shoot rifle)
  render: (a method that displays the crosshair on the screen)
}

Duck: {
  x: (x location on the canvas - random flight movement function)
  y: (y location on the canvas - random flight movement function)
  height: (should about the height of the right-side background shrub)
  width: (should about the height of the right-side background shrub)
  color: (image from assets download - Colors can be red, blue, green)
  alive: (a boolean that determines if user has shot the rifle when crosshair collision with duck === true)
  render: (a method that displays the image on the screen)
}

Dog: {
  x: (x location on the canvas)
  y: (y location on the canvas)
  height: (should about 1.5-2x the size of a duck)
  width: (should about 1.5-2x the size of a duck)
  color: (image from assets download)
  status: (dog will pop up holding ducks depending on weather or not one was shot)
  render: (a method that displays the image on the screen)
}

function - gameloop - holds the entire logic that runs the game
function - detectHit - used to see if corsshair has collided with duck when mouse is clicked
function - duckFlight - used to move the ducks around the screen, random flight to be determined by function
