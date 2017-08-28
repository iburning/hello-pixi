/**
 * @fileoverview Shapes Text and Groups
 * @author burning <iburning@live.cn>
 * @version 2017.08.27
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
const TextureCache = PIXI.utils.TextureCache
const Texture = PIXI.Texture

const UNIT = 32
const LINE_ALPHA = 1
const LINE_COLOR = 0x333333
const LINE_THICKNESS = 1
const SHAPE_BACKGROUND_COLOR = 0xffffff;

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

let myLine

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


  // let rectangle2 = new Graphics()
  // rectangle2.beginFill(0xFFFFFF);
  // rectangle2.lineStyle(10, 0x333333, 1)
  // rectangle2.drawRect(0, 0, UNIT * 5, UNIT * 5)
  // rectangle2.endFill()
  // rectangle2.position.set(UNIT * 6, UNIT)
  // stage.addChild(rectangle2)

  let r = UNIT * 2.5
  let circle = new Graphics()
  circle.beginFill(SHAPE_BACKGROUND_COLOR)
  circle.lineStyle(LINE_THICKNESS, LINE_COLOR, LINE_ALPHA)
  circle.drawCircle(0, 0, r)
  circle.endFill()
  // circle.position.set(UNIT * 7 + r, UNIT + r)
  // stage.addChild(circle)
  let circleTexture = circle.generateTexture()
  let circleSprite = new Sprite(circleTexture)
  circleSprite.position.set(UNIT * 7, UNIT)
  stage.addChild(circleSprite)


  let rX = UNIT * 5
  let rY = UNIT * 2.5
  let ellipse = new Graphics()
  ellipse.beginFill(SHAPE_BACKGROUND_COLOR)
  ellipse.lineStyle(LINE_THICKNESS, LINE_COLOR, LINE_ALPHA)
  ellipse.drawEllipse(0, 0, rX, rY)
  ellipse.endFill()
  // ellipse.position.set(UNIT * 14.5 + r, UNIT + r)
  // stage.addChild(ellipse)
  let ellipseTexture = ellipse.generateTexture()
  let ellipseSprite = new Sprite(ellipseTexture)
  ellipseSprite.position.set(UNIT * 13, UNIT)
  stage.addChild(ellipseSprite)


  let line = new Graphics()
  line.lineStyle(LINE_THICKNESS, LINE_COLOR, LINE_ALPHA)
  line.moveTo(0, 0)
  line.lineTo(UNIT * 10, UNIT * 2.5)
  // line.position.set(UNIT, UNIT * 7)
  // stage.addChild(line)
  let lineTexture = line.generateTexture()
  let lineSprite = new Sprite(lineTexture)
  lineSprite.position.set(UNIT, UNIT * 7)
  stage.addChild(lineSprite)


  // Create the line
  myLine = new Graphics()
  stage.addChild(myLine)

  // Add 'angelA' and 'angelB' properties
  myLine.angleA = 0
  myLine.angleB = 0

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

  let r = (UNIT * 20 - UNIT * 10) / 4
  // Make the line's start point rotate clockwise
  // around x/y point UNIT * 5, UNIT * 5
  myLine.angleA += 0.02
  let rotatingA = rotateAroundPoint(UNIT * 10, UNIT * 10, r, r, myLine.angleA)

  // Make the line's end point rotate counter-clockwise
  // around x/y point UNIT * 10, UNIT * 10
  myLine.angleB -= 0.02
let rotatingB = rotateAroundPoint(UNIT * 20, UNIT * 10, r, r, myLine.angleB)

  // Clear the line to reset it from the previous frame
  myLine.clear()

  //Draw the line using the rotating points as start and end points
  myLine.lineStyle(LINE_THICKNESS, LINE_COLOR, LINE_ALPHA)
  // console.log('A', rotatingA.x, rotatingA.y)
  // console.log('B', rotatingB.x, rotatingB.y)
  myLine.moveTo(rotatingA.x, rotatingA.y)
  myLine.lineTo(rotatingB.x, rotatingB.y)
}


function rotateAroundPoint(pointX, pointY, distanceX, distanceY, angle) {
  let point = {}
  point.x = pointX + Math.cos(angle) * distanceX
  point.y = pointY + Math.sin(angle) * distanceY
  return point
}
