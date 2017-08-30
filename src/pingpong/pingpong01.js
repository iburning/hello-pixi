/**
 * @fileoverview Pingpong
 * @author burning <iburning@live.cn>
 * @version 2017.08.29
 */

import { Container, Loader, Renderer, Resources, Text } from './PIXI'
import Ball from './Ball'
import Bat from './Bat'
import Tinker from './Tinker'
import ScoreView from './ScoreView'

const UNIT = 8
const GRAVITY = 0.15  // 重力加速度

// Create a new instance of the Bump collision library
const bump = new Bump(PIXI)

// Create a Pixi renderer
const renderer = Renderer(UNIT * 20 * 3, UNIT * 20 * 4)
// Set the canvas's border style and background color
// renderer.view.style.border = "1px solid #333333"
renderer.backgroundColor = "0xEFEFEF"

// Add the canvas to the HTML document
// document.getElementById("pixi").appendChild(renderer.view)
document.body.appendChild(renderer.view)

// Scale the canvas to the maximum window
let scale = scaleToWindow(renderer.view) || 1
console.log('scale', scale)

// Create a new instance of Tink, the interactive module.
const tink = new Tink(PIXI, renderer.view, scale)

// Create a container object called the 'stage'
const stage = new Container()


let gameScene = null
let gameOverScene = null

// Set the initial game state
let state = stop
let ball = new Ball(UNIT * 2)
let bat = new Bat(UNIT * 15, UNIT * 2)  // 球拍，防止穿越，球拍厚度要大于小球的直径
let batTinker = new Tinker(UNIT * 15, UNIT * 15)
let scoreDisplay = null
let message = null
let score = 0
let miss = 0
let health = 3

linkFont("assets/Pixilator.ttf")

// Load resources (images and fonts) and run the 'setup' function when it's done
Loader.add([
  "assets/Pixilator.ttf"
]).load(setup)


function setup() {
  // console.log('Resources', Resources)

  gameScene = new Container()
  stage.addChild(gameScene)

  // 因为依赖字体下载，所以将实例化放在setup中
  scoreDisplay = new ScoreView(0)
  scoreDisplay.view.x = (renderer.view.width - scoreDisplay.view.width) / 2
  scoreDisplay.view.y = UNIT * 3
  gameScene.addChild(scoreDisplay.view)

  ball.speed = 10
  ball.vx = 5
  ball.vy = ball.speed
  ball.maxSpeed = 18
  ball.acceleration =  2
  gameScene.addChild(ball)

  bat.x = (renderer.view.width - bat.width) / 2
  bat.y = renderer.view.height - UNIT * 30
  // bindKeyBorad(bat)
  gameScene.addChild(bat)
  // tink.makeDraggable(bat)

  batTinker.x = (renderer.view.width - batTinker.width) / 2
  batTinker.y = renderer.view.height - UNIT * 30
  // bindKeyBorad(bat)
  gameScene.addChild(batTinker)
  tink.makeDraggable(batTinker)

  // Make the pointer
  const pointer = tink.makePointer()
  pointer.press = () => {
    console.log('press', pointer.x, pointer.y)
    // Set the game's current state to 'play'
    if (state != end) {
      state = play
    }
  }

  pointer.release = () => {
    console.log('release', pointer.x, pointer.y)
    // Set the game's current state to 'play'
    if (state != end) {
      state = stop
    }
  }

  // pointer.press = () => {
  //   // console.log('press', pointer.x, pointer.y)
  //   batTinker.x = pointer.x
  //   batTinker.y = pointer.y
  // }


  gameOverScene = new Container()
  stage.addChild(gameOverScene)
  let message = new Text("Game Over", { font: "48px Pixilator" })
  message.x = (renderer.view.width - message.width) / 2
  message.y = (renderer.view.height - message.height) / 2 - UNIT * 10
  gameOverScene.addChild(message)
  gameOverScene.visible = false

  // Start the game loop
  gameLoop()
}


function gameLoop() {
  // Loop this function 60 times per second
  requestAnimationFrame(gameLoop)

  // Run the current state
  state()

  tink.update()   // !important

  // Render the stage
  renderer.render(stage)
}


function play() {
  ball.vy += GRAVITY
  ball.x += ball.vx
  ball.y += ball.vy

  // bat.x += bat.vx
  // bat.y += bat.vy
  bat.x = batTinker.x
  // bat.y = batTinker.y - UNIT * 5

  bump.contain(bat, {
    x: UNIT,
    y: renderer.view.height / 2,
    width: renderer.view.width - UNIT,
    height: renderer.view.height - UNIT
  })

  let collision = bump.contain(ball, {
    x: 0,
    y: 0,
    width: renderer.view.width,
    height: renderer.view.height
  })

  if (collision) {
    console.log("collision", collision, score, miss, ball.vx, ball.vy)
    // Reverse the sprite's 'vx' value if it hits the left or right
    if (collision.has("left") || collision.has("right")) {
      ball.vx = -ball.vx
    }

    if (collision.has("top")) {
      ball.vy = -ball.vy
    }

    if (collision.has("bottom")) {
      health--
      miss++
      scoreDisplay.setMiss(miss)
      if (health <= 0) {
        state = end
      }
      // ball.vy = -ball.vy
      ball.vx = (ball.vx > 0) ? ball.speed : -ball.speed
      ball.vy = -ball.speed
    }
  }

  let hitTest = bump.rectangleCollision(ball, bat)
  if (hitTest) {
    console.log('hitTest', hitTest)
    if (hitTest == "bottom") {
      score++
      scoreDisplay.setScore(score)
    }

    if (hitTest == "top" || hitTest == "bottom") {
      if (Math.abs(ball.vx) < ball.maxSpeed) {
        ball.vx += ball.acceleration
      }

      if (Math.abs(ball.vy) < ball.maxSpeed) {
        ball.vy += ball.acceleration
      }

      ball.vy = -ball.vy
    }
  }
}

function stop() {
  // gameScene.visible = true
}

function end() {
  // gameScene.visible = false
  gameOverScene.visible = true
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


function bindKeyBorad(object) {
  // Capture the keyboard arrow keys
  let left = keyboard(37)
  let right = keyboard(39)
  let up = keyboard(38)
  let down = keyboard(40)

  // Left arrow key 'press' method
  left.press = function () {
    // Change the object's velocity when the key is pressed
    object.vx = -object.speed
    object.vy = 0
  }

  // Left arrow key 'elease' method
  left.release = function () {
    // If the left arrow has been released, and the right arrow isn't down,
    // and the object isn't moving vertically, stop the sprite from moving
    // by setting its velocity to zero
    if (!right.isDown && object.vy === 0) {
      object.vx = 0
    }
  }

  //Right
  right.press = function () {
    object.vx = object.speed
    object.vy = 0
  }

  right.release = function () {
    if (!left.isDown && object.vy === 0) {
      object.vx = 0
    }
  }

  // Up
  up.press = function () {
    object.vy = -object.speed
    object.vx = 0
  }

  up.release = function () {
    if (!down.isDown && object.vx === 0) {
      object.vy = 0
    }
  }

  // Down
  down.press = function () {
    object.vy = object.speed
    object.vx = 0
  }

  down.release = function () {
    if (!up.isDown && object.vx === 0) {
      object.vy = 0
    }
  }
}
