/**
 * @fileoverview Button
 * @author burning <iburning@live.cn>
 * @version 2017.08.30
 */

//Aliases
// console.log('PIXI', PIXI)
const Container = PIXI.Container
const Loader = PIXI.loader
const Renderer = PIXI.autoDetectRenderer
const Resources = PIXI.loader.resources

const UNIT = 8
const GRAVITY = 1
const COLOR_BLACK = 0x333333
const COLOR_WHITE = 0xFFFFFF

// Create a Pixi stage and renderer
const stage = new Container()
const renderer = Renderer(750, 1200)
// renderer.view.style.border = "1px solid #ccc"
renderer.backgroundColor = COLOR_WHITE
document.body.appendChild(renderer.view)

// Scale the canvas to the maximum window
let scale = scaleToWindow(renderer.view)

// Set the initial game state
let state = play
let gameScene

// Create a new instance of Bump, the collision module
const bump = new Bump(PIXI)

// Create a new instance of Tink, the interactive module.
// const tink = new Tink(PIXI, renderer.view, scale)
const tink = new Tink(PIXI, renderer.view, scale)

// Define any variables that might be used in more than one function


// Append link tag to html header
linkFont("assets/Pixilator.ttf")


// Load resources (images and fonts) and then run the 'setup' function
Loader.add([
  "assets/Pixilator.ttf",
  "assets/button.json"
]).load(setup)


function setup() {
  // Get a reference to the texture atlas frame ids
  let frameIds = Resources["assets/button.json"].textures
  let buttonFrames = [
    frameIds["up.png"],
    frameIds["over.png"],
    frameIds["down.png"]
  ]

  gameScene = new Container()
  stage.addChild(gameScene)

  let playButton = tink.button(buttonFrames, 32, 96)
  playButton.x = (renderer.view.width - playButton.width) / 2
  playButton.y = (renderer.view.height - playButton.height) / 2
  gameScene.addChild(playButton)

  playButton.press = () => {
    console.log('playButton press')
  }

  // Start the game loop
  gameLoop()
}


function gameLoop() {
  // Loop this function 60 times per second
  requestAnimationFrame(gameLoop)

  // Run the current state
  state()

  tink.update()

  //Render the stage
  renderer.render(stage)
}


function play() {
  // Any animation or game logic code goes here
}

function end() {
  console.log("end")
}


function linkFont(source) {
  // console.log("linkFont", source)
  // Use the font's filename as the 'fontFamily' name.
  // This code captures the font file's name without the extension or file path
  let fontFamily = source.split("/").pop().split(".")[0]

  // Append an '@font-face' style rule to the head of the HTML document
  let newStyle = document.createElement("style")
  let fontFace = `@font-face {
    font-family: "${fontFamily}";
    src: url("${source}");
  }`
  newStyle.appendChild(document.createTextNode(fontFace))
  document.head.appendChild(newStyle)
}
