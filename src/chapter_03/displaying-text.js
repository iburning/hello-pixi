/**
 * @fileoverview Displaying Text
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

const UNIT = 32
const COLOR = 0x333333

const renderer = Renderer(UNIT * 2 * 16, UNIT * 2 * 9)
//Set the canvas's border style and background color
renderer.view.style.border = "1px solid #ccc"
renderer.backgroundColor = "0xFFFFFF"

// Add the canvas to the HTML document
document.getElementById("pixi").appendChild(renderer.view)

// Create a container object called the 'stage'
const stage = new Container()

// Set the initial game state
let state = play

let message
linkFont("assets/Pixilator.ttf")


// Load resources (images and fonts) and then run the 'setup' function
Loader.add([
  "assets/Pixilator.ttf"
]).load(setup)


function setup() {
  message = new Text("Hello Pixi!", {
    font: "64px Pixilator",
    fill: COLOR
  })
  message.x = (renderer.view.width - message.width) / 2
  message.y = (renderer.view.height - message.height) / 2
  stage.addChild(message)

  // Start the game loop
  gameLoop()
}


function gameLoop() {
  // Loop this function 60 times per second
  requestAnimationFrame(gameLoop)

  // Run the current state
  state()

  //Render the stage
  renderer.render(stage)
}


function play() {
  // Any animation or game logic code goes here
  // let text = [
  //   "Hello Pixi!",
  //   "Let's Rock n' Roll",
  //   "no BUG no Cry"
  // ]
  // message.text = text[parseInt(Math.random() * 3)]
}


function linkFont(source) {
  console.log("linkFont", source)
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
