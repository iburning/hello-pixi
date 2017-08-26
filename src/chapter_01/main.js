/**
 * @fileoverview Creating the Renderer and Stage
 * @author burning <iburning@live.cn>
 * @version 2017.08.23
 */

// console.log('PIXI', PIXI)

// Create the render
// let renderer = PIXI.autoDetectRenderer(256, 256, {
//   antialias: false,
//   transparent: false,
//   resolution: 1
// })

//Aliases
const Container = PIXI.Container
const Loader = PIXI.loader
const Rectangle = PIXI.Rectangle
const Renderer = PIXI.autoDetectRenderer
const Resources = PIXI.loader.resources
const Sprite = PIXI.Sprite
const TextureCache = PIXI.utils.TextureCache
const Texture = PIXI.Texture

const UNIT = 40

const renderer = Renderer(UNIT * 2 * 16, UNIT * 2 * 9)

// Add the canvas to the HTML document
document.body.appendChild(renderer.view)

// Create a container object called the 'stage'
const stage = new Container()
console.log('stage', stage)

// Tell the 'renderder' to 'render' the 'stage'
renderer.render(stage)

// scaleToWindow(renderer.view)
//
// window.addEventListener("resize", event => {
//   scaleToWindow(renderer.view)
// })


Loader.add([
  "assets/sonic.png",
  "assets/building_1.png"
]).load(setup)


function setup() {
  // // Create the sprite from the texture
  // let sonic = new Sprite(Resources["assets/sonic.png"].texture)
  // sonic.scale.x = 0.25
  // sonic.scale.y = 0.25
  // sonic.x = 100
  // sonic.y = 50
  //
  // // sonic.anchor.x = 0.5
  // // sonic.anchor.y = 0.5
  // // sonic.rotation = 0.5
  // // Add the sprite to the stage
  // stage.addChild(sonic)

  // console.log('Resources', Resources)
  // console.log('TextureCache', TextureCache)

  // Create the 'tileset' sprite from the texture
  let texture = TextureCache["assets/building_1.png"]
  // console.log('texture', texture)

  // Create a rectangle object that defines the position and
  // size of the sub-image you want to extract from the texture
  let rectangle = new Rectangle(0, 0, UNIT * 2, UNIT * 3)
  // console.log('rectangle', rectangle)

  // Tell the texture to use that rectangular section
  texture.frame = rectangle

  // Create the sprite from the texture
  let build = new Sprite(texture)

  // Position the sprite on the canvas
  // build.x = stage.width / 2
  // build.y = stage.height / 2
  build.x = UNIT * 2
  build.y = UNIT * 2

  // // Scale the sprite up so it's 3 times bigger than the original image
  // build.scale.set(3, 3)

  // Add the sprite to the stage
  stage.addChild(build)


  // Render the stage
  renderer.render(stage)
}
