/**
 * @fileoverview Tinker
 * @author burning <iburning@live.cn>
 * @version 2017.08.30
 */

import { Graphics, Sprite } from './PIXI'

export default class Tinker {
  constructor(width, height, alpha) {
    alpha = alpha || 0
    let grapich = new Graphics()

    grapich.beginFill(0x000000, alpha)
    grapich.lineStyle(0)
    grapich.drawRect(0, 0, width, height)
    grapich.endFill()

    let sprite = new Sprite(grapich.generateTexture())
    sprite.x = 0
    sprite.y = 0
    sprite.vx = 0
    sprite.vy = 0
    // console.log('Ball', sprite)
    return sprite
  }
}
