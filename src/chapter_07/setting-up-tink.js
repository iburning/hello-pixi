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
const GRAVITY = 1
const COLOR_BLACK = 0x333333
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
let gameScene

// Create a new instance of Bump, the collision module
const bump = new Bump(PIXI)

// Create a new instance of Tink, the interactive module.
// const tink = new Tink(PIXI, renderer.view, scale)
const tink = new Tink(PIXI, renderer.view)

// Define any variables that might be used in more than one function
let sprite
let boxs = {}
let boxId = 0


// Append link tag to html header
linkFont("assets/Pixilator.ttf")


// Load resources (images and fonts) and then run the 'setup' function
Loader.add([
  "assets/Pixilator.ttf"
]).load(setup)


function setup() {
  gameScene = new Container()
  stage.addChild(gameScene)

  // Make the pointer
  const pointer = tink.makePointer()
  pointer.tap = () => {
    // console.log('tap', pointer.x, pointer.y)

    let grapich = new Graphics()
    grapich.beginFill(COLOR_BLACK)
    grapich.lineStyle(0)
    grapich.drawRect(0, 0, UNIT * 5, UNIT * 5)
    grapich.endFill()

    let box = new Sprite(grapich.generateTexture())
    box.anchor.set(0.5, 0.5)
    box.x = pointer.x
    box.y = pointer.y
    box.vy = 0
    box.id = boxId
    gameScene.addChild(box)
    // console.log('box', boxId, box.id, box)

    boxs[boxId] = box
    boxId++
  }

  // pointer.hitTestSprite(sprite)

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

  // boxs.forEach(box => {
  //   box.y += box.vy
  //   box.vy += GRAVITY
  // })

  for (let id in boxs) {
    let box = boxs[id]
    if (box) {
      box.y += box.vy
      box.vy += GRAVITY

      bump.contain(box, {
        x: 0,
        y: 0,
        width: renderer.view.width,
        height: renderer.view.height
      })
    }
  }
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
