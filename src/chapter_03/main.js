/**
 * @fileoverview Shapes Text and Groups
 * @author burning <iburning@live.cn>
 * @version 2017.08.27
 */

//Aliases
const Container = PIXI.Container
const Graphics = PIXI.Graphics
const Loader = PIXI.loader
const Rectangle = PIXI.Rectangle
const Renderer = PIXI.autoDetectRenderer
const Resources = PIXI.loader.resources
const Sprite = PIXI.Sprite
const TextureCache = PIXI.utils.TextureCache
const Texture = PIXI.Texture

const UNIT = 32

const renderer = Renderer(UNIT * 2 * 16, UNIT * 2 * 9)
//Set the canvas's border style and background color
renderer.view.style.border = "1px solid #ccc";
renderer.backgroundColor = "0xFFFFFF";

// Add the canvas to the HTML document
document.getElementById("pixi").appendChild(renderer.view)

// Create a container object called the 'stage'
const stage = new Container()

// Set the initial game state
let state = play

// Load resources (images and fonts) and then run the 'setup' function
// Loader.add([
//   // "fonts/puzzler.ttf"
// ]).load(setup)

setup()

function setup() {
  // Create a Graphics object
  // let shape = new Graphics()
  let rectangle = new Graphics()

  // Set the fill color
  // shape.beginFill(hexColorCode)
  rectangle.beginFill(0xFFFFFF);

  // Set the line style
  // shape.lineStyle(lineThickness, hexColorCode, alpha)
  rectangle.lineStyle(1, 0x333333, 1)

  // Draw the shape
  // Use 'drawRect', 'drawCircle', 'drawEllipse',
  // 'drawRoundedRect' or 'drawPolygon' to draw the shape
  // rectangle.drawRect(x, y, width, height)
  rectangle.drawRect(0, 0, UNIT * 5, UNIT * 5)

  // End the color fill
  // shape.endFill()
  rectangle.endFill()

  // Position the shape
  // shape.position.set(x, y)
  rectangle.position.set(UNIT, UNIT)

  // Add the shape to the stage
  // stage.addChild(shape)
  stage.addChild(rectangle)


  let rectangle2 = new Graphics()
  rectangle2.beginFill(0xFFFFFF);
  rectangle2.lineStyle(10, 0x333333, 1)
  rectangle2.drawRect(0, 0, UNIT * 5, UNIT * 5)
  rectangle2.endFill()
  rectangle2.position.set(UNIT * 6, UNIT)
  stage.addChild(rectangle2)

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
}
