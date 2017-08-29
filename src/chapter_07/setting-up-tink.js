/**
 * @fileoverview Setting Up Tink
 * @author burning <iburning@live.cn>
 * @version 2017.08.29
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

const UNIT = 8
const COLOR_WHITE = 0xFFFFFF

// Create a Pixi stage and renderer
const stage = new Container()
const renderer = Renderer(UNIT * 8 * 16, UNIT * 8 * 9)
renderer.view.style.border = "1px solid #ccc"
renderer.backgroundColor = COLOR_WHITE
document.getElementById("pixi").appendChild(renderer.view)

// // Scale the canvas to the maximum window
// let scale = scaleToWindow(renderer.view)

// Set the initial game state
let state = play

// Create a new instance of Bump, the collision module
const bump = new Bump(PIXI)

// Create a new instance of Tink, the interactive module.
// const tink = new Tink(PIXI, renderer.view, scale)
const tink = new Tink(PIXI, renderer.view)

// Define any variables that might be used in more than one function



// Append link tag to html header
linkFont("assets/Pixilator.ttf")


// Load resources (images and fonts) and then run the 'setup' function
Loader.add([
  "assets/Pixilator.ttf"
]).load(setup)


function setup() {

  // Make the pointer
  const pointer = tink.makePointer()
  pointer.tap = () => {
    console.log('tap')
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
