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
const bump = new Bump(PIXI)

const UNIT = 8
const COLOR_PRIMARY = 0x333333
const COLOR_WHITE = 0xffffff
const LINE_ALPHA = 1
const LINE_COLOR = COLOR_PRIMARY
const LINE_THICKNESS = 1

const SPEED = 8

const renderer = Renderer(UNIT * 8 * 16, UNIT * 8 * 9)
//Set the canvas's border style and background color
renderer.view.style.border = "1px solid #ccc"
renderer.backgroundColor = COLOR_WHITE

// Add the canvas to the HTML document
document.getElementById("pixi").appendChild(renderer.view)

// Create a container object called the 'stage'
const stage = new Container()

// Set the initial game state
let state = play

let message
let rect1, rect2

linkFont("assets/Pixilator.ttf")


// Load resources (images and fonts) and then run the 'setup' function
Loader.add([
  "assets/Pixilator.ttf"
]).load(setup)


function setup() {
  rect1 = new Graphics()
  rect1.beginFill(COLOR_PRIMARY)
  rect1.lineStyle(LINE_THICKNESS * 2, LINE_COLOR, LINE_ALPHA)
  rect1.endFill()
  rect1.drawRect(0, 0, UNIT, UNIT)
  // rect1.drawCircle(0, 0, UNIT)
  rect1.position.set(0, 0)
  rect1.vx = SPEED
  rect1.vy = SPEED
  stage.addChild(rect1)


  rect2 = new Graphics()
  rect2.beginFill(COLOR_PRIMARY)
  rect2.lineStyle(LINE_THICKNESS, LINE_COLOR, LINE_ALPHA)
  rect2.endFill()
  rect2.drawRect(0, 0, UNIT * 5 * 16, UNIT * 2.5 * 9)
  rect2.x = (renderer.view.width - rect2.width) / 2
  rect2.y = (renderer.view.height - rect2.height) / 2
  rect2.vx = 0
  rect2.vy = SPEED / 2
  stage.addChild(rect2)
  // rect2 = new Sprite(_rect2.generateTexture())
  // // rect2.pivot.set(rect2.width / 2, rect2.height / 2)
  // rect2.anchor.set(0.5, 0.5)
  // rect2.x = renderer.view.width / 2
  // rect2.y = renderer.view.height / 2
  // rect2.rotation = 0
  // stage.addChild(rect2)

  // message = new Text("Hello Pixi!", {
  //   font: "64px Pixilator",
  //   fill: COLOR
  // })
  // message.x = (renderer.view.width - message.width) / 2
  // message.y = (renderer.view.height - message.height) / 2
  // stage.addChild(message)

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

  rect1.x += rect1.vx
  rect1.y += rect1.vy

  // // check for a collision between the rect1 and the rect2
  let collision1 = bump.rectangleCollision(rect1, rect2)
  if (collision1) {
    console.log("collision1", typeof collision1, collision1)
    // state = stop
    if (collision1 == "left" || collision1 == "right") {
      rect1.vx = -rect1.vx
    }

    if (collision1 == "top" || collision1 == "bottom") {
      rect1.vy = -rect1.vy
    }
  }

  // Use the 'contain' function to keep the sprite inside the canvas
  let collision2 = bump.contain(rect1, {
    x: 0,
    y: 0,
    width: renderer.view.width,
    height: renderer.view.height
  })

  // Check for a collision.
  // If the value of 'collision' isn't 'undefined'
  // then you know the sprite hit a boundary

  if (collision2) {
    // console.log("collision", collision)
    // Reverse the sprite's 'vx' value if it hits the left or right
    if (collision2.has("left") || collision2.has("right")) {
      rect1.vx = -rect1.vx
    }

    // Reverse the sprite's 'vy' vlaue if it hits the top or bottom
    if (collision2.has("top") || collision2.has("bottom")) {
      rect1.vy = -rect1.vy
    }
  }

  rect2.x += rect2.vx
  rect2.y += rect2.vy

  let collision3 = bump.contain(rect2, {
    x: 0,
    y: rect1.height,
    width: renderer.view.width,
    height: renderer.view.height - rect1.height
  })

  if (collision3) {
    if (collision3.has("left") || collision3.has("right")) {
      rect2.vx = -rect2.vx
    }

    if (collision3.has("top") || collision3.has("bottom")) {
      rect2.vy = -rect2.vy
    }
  }
}

function stop() {
  console.log("stop")
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
