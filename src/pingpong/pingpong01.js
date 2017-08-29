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
let bat = new Bat(UNIT * 15, UNIT)  // 球拍
let message = null

linkFont("assets/Pixilator.ttf")

// Load resources (images and fonts) and run the 'setup' function when it's done
Loader.add([
  "assets/Pixilator.ttf"
]).load(setup)


function setup() {
  gameScene = new Container()
  stage.addChild(gameScene)

  gameScene.addChild(ball)

  bat.x = (renderer.view.width - bat.width) / 2
  bat.y = renderer.view.height - UNIT * 2
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
