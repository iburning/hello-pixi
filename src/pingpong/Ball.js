/**
 * @fileoverview Ball
 * @author burning <iburning@live.cn>
 * @version 2017.08.29
 */

import { Graphics, Sprite } from './PIXI'

export default class Ball {
  constructor(size) {
    let grapich = new Graphics()

    grapich.beginFill(0x333333)
    grapich.lineStyle(1, 0x333333, 1)
    grapich.drawRect(0, 0, size, size)
    grapich.endFill()

    let sprite = new Sprite(grapich.generateTexture())
    // console.log('Ball', sprite)
    return sprite
  }
}
