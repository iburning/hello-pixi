/**
 * @fileoverview Treasure Hunter
 * @author burning <iburning@live.cn>
 * @version 2017.08.28
 */

//Aliases
// console.log('PIXI', PIXI)
const Container = PIXI.Container
const Graphics = PIXI.Graphics
const Loader = PIXI.loader
const Rectangle = PIXI.Rectangle
const Renderer = PIXI.autoDetectRenderer
const Resources = PIXI.loader.resources
const Sprite = PIXI.Sprite
const Text = PIXI.Text
const TextureCache = PIXI.utils.TextureCache
const Texture = PIXI.Texture

// Create a new instance of the Bump collision library
const bump = new Bump(PIXI)

// Create a Pixi renderer
const renderer = Renderer(512, 512)
// Set the canvas's border style and background color
renderer.view.style.border = "1px solid #000"
renderer.backgroundColor = "0xFFFFFF"

// Add the canvas to the HTML document
document.getElementById("pixi").appendChild(renderer.view)

// Create a container object called the 'stage'
const stage = new Container()

// Set the initial game state
let state = play


// Load resources (images and fonts) and run the 'setup' function when it's done
Loader.add([
  "assets/treasureHunter.json",
  "assets/Pixilator.ttf"
]).load(setup)


function setup() {
  // Create an 'id' alias for the texture atlas frame ids
  id = Resources["assets/treasureHunter.json"].textures
  console.log('id', id)

  // The 'gameScene' container that contains all the main game sprites
  let gameScene = new Container()
  stage.addChild(gameScene)

  // Create the main sprites:
  // The 'dungeon' sprite
  let dungeon = new Sprite(id['dungeon.png'])
  gameScene.addChild(dungeon)

  // The 'door' sprite
  let door = new Sprite(id['door.png'])
  door.position.set(32, 0)
  gameScene.addChild(door)

  // The 'explorer' sprite
  let explorer = new Sprite(id['explorer.png'])
  explorer.x = 64
  explorer.y = (gameScene.height - explorer.height) / 2
  explorer.vx = 0
  explorer.vy = 0
  gameScene.addChild(explorer)

  // The 'treasure' sprite
  let treasure = new Sprite(id['treasure.png'])
  treasure.x = gameScene.width - treasure.height - 48
  treasure.y = (gameScene.height - treasure.height) / 2
  gameScene.addChild(treasure)

  // The 'blobs' enemy sprites
  let numberOfBlobs = 6
  let spacing = 48
  let xOffset = 150
  let speed = 2
  let direction = 1

  //An array to store all the blob monsters
  let blobs = []

  // Make as many blobs as there are 'numberOfBlobs'
  for (let i = 0; i < numberOfBlobs; i++) {
    // Make a blob
    let blob = new Sprite(id["blob.png"])

    // Space each blob horizontally according to the 'spacing' value.
    // 'xOffset' determines the point from the left of the screen
    // at which the first blob should be added
    let x = spacing * i + xOffset

    // Give the blob a random y position
    let y = randomInt(0, stage.height - blob.height)

    // Set the blob's position
    blob.x = x
    blob.y = y

    // Set the blob's vertical velocity. 'direction' will be either '1' or '-1'.
    // '1' means enemy will move down and '-1' means the blob will move up.
    // Multiplying 'direction' by 'speed' determines the blob's vertical direction
    blob.vy = speed * direction

    // Reverse the direction for the next blob
    direction *= -1

    // Push the blob into the 'blobs' array
    blobs.push(blob)
    // Add the blob to the 'gameScene'
    gameScene.addChild(blob)
  }

  // Set the game's current state to 'play'
  state = play

  // Start the game loop
  gameLoop()
}


function gameLoop() {
  // Loop this function 60 times per second
  requestAnimationFrame(gameLoop)

  // Run the current state
  state()

  // Render the stage
  renderer.render(stage)
}


function play() {
  // All the game logic goes here
}


function end() {
  // All the code that should run at the end of the game goes here
}


// The game's helper functions:
// 'keyboard', 'hitTestRectangle', 'contain' and 'randomInt'

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
