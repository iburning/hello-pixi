/**
 * @fileoverview Pingpong
 * @author burning <iburning@live.cn>
 * @version 2017.08.29
 */

import { Container, Loader, Renderer, Text } from './PIXI'
import Ball from './Ball'
import Bat from './Bat'

const UNIT = 8

// Create a new instance of the Bump collision library
const bump = new Bump(PIXI)

// Create a Pixi renderer
const renderer = Renderer(UNIT * 20 * 3, UNIT * 20 * 4)
// Set the canvas's border style and background color
renderer.view.style.border = "1px solid #333333"
renderer.backgroundColor = "0xEFEFEF"

// Add the canvas to the HTML document
document.getElementById("pixi").appendChild(renderer.view)

// Create a container object called the 'stage'
const stage = new Container()

let gameScene = null
let gameOverScene = null

// Set the initial game state
let state = play
let ball = new Ball(UNIT * 2)
let bat = new Bat(UNIT * 10, UNIT)  // 球拍
let message = null

linkFont("assets/Pixilator.ttf")

// Load resources (images and fonts) and run the 'setup' function when it's done
Loader.add([
  "assets/Pixilator.ttf"
]).load(setup)


function setup() {
  gameScene = new Container()
  stage.addChild(gameScene)

  ball.vx = 5
  ball.vy = 10
  gameScene.addChild(ball)

  bat.x = (renderer.view.width - bat.width) / 2
  bat.y = renderer.view.height - UNIT * 10
  bat.speed = 10
  bindKeyBorad(bat)
  gameScene.addChild(bat)


  gameOverScene = new Container()
  gameOverScene.visible = false


  // Set the game's current state to 'play'
  state = play

  // Start the game loop
  gameLoop()
}


function gameLoop() {
  // Loop this function 60 times per second
  requestAnimationFrame(gameLoop)

  // Run the current state
  state()

  // Render the stage
  renderer.render(stage)
}


function play() {
  ball.x += ball.vx
  ball.y += ball.vy

  bat.x += bat.vx
  bat.y += bat.vy

  let collision = bump.contain(ball, {
    x: 0,
    y: 0,
    width: renderer.view.width,
    height: renderer.view.height
  })

  if (collision) {
    // console.log("collision", collision)
    // Reverse the sprite's 'vx' value if it hits the left or right
    if (collision.has("left") || collision.has("right")) {
      ball.vx = -ball.vx
    }

    // Reverse the sprite's 'vy' vlaue if it hits the top or bottom
    if (collision.has("top") || collision.has("bottom")) {
      ball.vy = -ball.vy
    }
  }

  bump.contain(bat, {
    x: UNIT,
    y: renderer.view.height - UNIT * 20,
    width: renderer.view.width - UNIT,
    height: renderer.view.height - UNIT
  })

  let hitTest = bump.rectangleCollision(ball, bat)
  if (hitTest) {
    console.log('hitTest', hitTest)
    if (hitTest == "top" || hitTest == "bottom") {
      ball.vy = -ball.vy
    }
  }
}


function end() {
  gameScene.visible = false
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
