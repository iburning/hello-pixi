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
const ACCELERATION_X = 1    // 水平方向加速度
const ACCELERATION_Y = 3    // 垂直方向加速度
const GRAVITY = 1  // 0.5         // 重力加速度
const FRICTION = 0.9     // 摩擦系数（速度衰减）


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
  let rectangle = new Rectangle(140, 0, 50, 100)
  // console.log('rectangle', rectangle)

  // Tell the texture to use that rectangular section
  texture.frame = rectangle

  // Create the sprite from the texture
  rockman = new Sprite(texture)
  console.log("rockman", rockman)

  // Center the sprite
  rockman.x = renderer.view.width / 2 - rockman.width / 2
  rockman.y = renderer.view.height / 2 - rockman.height / 2

  // Initialize the sprites's velocity variables
  rockman.vx = 0
  rockman.vy = 0

  rockman.accelerationX = 0
  rockman.accelerationY = 0
  rockman.frictionX = FRICTION
  rockman.frictionY = FRICTION

  // Add the sprite to the stage
  stage.addChild(rockman)

  // // Render the stage
  // renderer.render(stage)

  initKeyboard()

  // Start the game loop
  gameLoop()
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
  // Apply acceleration by adding acceleration to the sprite's volocity
  rockman.vx += rockman.accelerationX
  rockman.vy += rockman.accelerationY

  // Apply friction by multiplying sprite's velocity by the friction
  rockman.vx *= rockman.frictionX
  rockman.vy *= rockman.frictionY

  // Gravity
  rockman.vy += GRAVITY

  // Apply the velocity to the sprite's position to make it move
  rockman.x += rockman.vx
  rockman.y += rockman.vy

  // Use the 'contain' function to keep the sprite inside the canvas
  let collision = contain(rockman, {
    x: 0,
    y: 0,
    width: renderer.view.width,
    height: renderer.view.height
  })

  // Check for a collision.
  // If the value of 'collision' isn't 'undefined'
  // then you know the sprite hit a boundary

  if (collision) {
    console.log("collision", collision)
    // Reverse the sprite's 'vx' value if it hits the left or right
    if (collision.has("left") || collision.has("right")) {
      rockman.vx = -rockman.vx
    }

    // Reverse the sprite's 'vy' vlaue if it hits the top or bottom
    if (collision.has("top") || collision.has("bottom")) {
      rockman.vy = -rockman.vy
    }
  }
}

function initKeyboard() {
  // Capture the keyboard arrow keys
  let left = keyboard(37)
  let up = keyboard(38)
  let right = keyboard(39)
  let down = keyboard(40)

  // Left arrow key 'press' method
  left.press = () => {
    rockman.accelerationX = -ACCELERATION_X
  }

  // Left arrow key 'release' method
  left.release = () => {
    if (!right.isDown) {
      rockman.accelerationX = 0
    }
  }

  right.press = () => {
    rockman.accelerationX = ACCELERATION_X
  }

  right.release = () => {
    if (!left.isDown) {
      rockman.accelerationX = 0
    }
  }

  up.press = () => {
    rockman.accelerationY = -ACCELERATION_Y
  }

  up.release = () => {
    if (!down.isDown) {
      rockman.accelerationY = 0
    }
  }

  down.press = () => {
    rockman.accelerationY = ACCELERATION_Y
  }

  down.release = () => {
    if (!up.isDown) {
      rockman.accelerationY = 0
    }
  }
}
