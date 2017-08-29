/**
 * @fileoverview Bat
 * @author burning <iburning@live.cn>
 * @version 2017.08.29
 */

import { Graphics, Sprite } from './PIXI'

export default class Ball {
  constructor(width, height) {
    let grapich = new Graphics()

    grapich.beginFill(0x333333)
    grapich.lineStyle(1, 0x333333, 1)
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
