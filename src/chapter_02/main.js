/**
 * @fileoverview Moving Sprites
 * @author burning <iburning@live.cn>
 * @version 2017.08.24
 */


//Aliases
const Container = PIXI.Container
const Loader = PIXI.loader
const Rectangle = PIXI.Rectangle
const Renderer = PIXI.autoDetectRenderer
const Resources = PIXI.loader.resources
const Sprite = PIXI.Sprite
const TextureCache = PIXI.utils.TextureCache
const Texture = PIXI.Texture

const UNIT = 45
const SPEED = 10

// Set the game's current state to 'play'
let state = play
let rockman = null

const renderer = Renderer(50 * 16, 50 * 9)
//Set the canvas's border style and background color
renderer.view.style.border = "1px solid #333"
renderer.backgroundColor = "0xFFFFFF"

// Add the canvas to the HTML document
document.getElementById("pixi").appendChild(renderer.view)

// Create a container object called the 'stage'
const stage = new Container()

// Tell the 'renderder' to 'render' the 'stage'
renderer.render(stage)

// scaleToWindow(renderer.view)
//
// window.addEventListener("resize", event => {
//   scaleToWindow(renderer.view)
// })


Loader.add([
  "assets/rockman.gif",
]).load(setup)


function setup() {
  // Create the 'tileset' sprite from the texture
  let texture = TextureCache["assets/rockman.gif"]
  // console.log('texture', texture)

  // Create a rectangle object that defines the position and
  // size of the sub-image you want to extract from the texture
  let rectangle = new Rectangle(100, 0, UNIT * 2, UNIT * 3)
  // console.log('rectangle', rectangle)

  // Tell the texture to use that rectangular section
  texture.frame = rectangle

  // Create the sprite from the texture
  rockman = new Sprite(texture)

  // Position the sprite on the canvas
  rockman.x = 0
  rockman.y = UNIT * 2

  rockman.vx = SPEED
  rockman.vy = 0

  // // Scale the sprite up so it's 3 times bigger than the original image
  // build.scale.set(3, 3)

  // Add the sprite to the stage
  stage.addChild(rockman)


  // // Render the stage
  // renderer.render(stage)

  initKeyboard()

  // Start the game loop
  gameLoop()
}


function gameLoop000() {
  // Loop this function 60 times pre second
  requestAnimationFrame(gameLoop)

  // Move the sprite 1 pixel pre frame
  rockman.x += rockman.vx
  rockman.y += rockman.vy

  rockman.vx *= 0.9

  // Render the stage
  renderer.render(stage)
}

function gameLoop() {
  // Loop this function 60 times pre second
  requestAnimationFrame(gameLoop)

  // Update the current game state:
  state()

  // Render the stage
  renderer.render(stage)
}


function play() {
  // console.log('playing...')
  // Move the sprite 1 pixel pre frame
  rockman.x += rockman.vx
  rockman.y += rockman.vy

  rockman.vx *= 0.9
}

function initKeyboard() {
  // Capture the keyboard arrow keys
  let left = keyboard(37)
  let up = keyboard(38)
  let right = keyboard(39)
  let down = keyboard(40)

  // Left arrow key 'press' method
  left.press = () => {
    // Change the sprite's velocity when the key is pressed
    rockman.vx = -SPEED
    rockman.vy = 0
  }

  // Left arrow key 'release' method
  left.release = () => {
    // If the left arrow has been released, and the right arrow isn't down,
    // and the pixie isn't moving vertically, stop the sprite from moving
    // by setting its velocity to zero
    if (!right.isDown && rockman.vy === 0) {
      rockman.vx = 0
    }
  }

  right.press = () => {
    // Change the sprite's velocity when the key is pressed
    rockman.vx = SPEED
    rockman.vy = 0
  }

  right.release = () => {
    if (!left.isDown && rockman.vy === 0) {
      rockman.vx = 0
    }
  }
}
