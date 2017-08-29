/**
 * @fileoverview ScoreView
 * @author burning <iburning@live.cn>
 * @version 2017.08.29
 */

import { Container, Text } from './PIXI'

export default class ScoreView {
  constructor(score) {
    score = score || 0
    this.view = new Container()

    this.score = new Text("SCORE: " + score, { font: "24px Pixilator" })
    this.view.addChild(this.score)

    this.miss = new Text("Miss: 0", { font: "16px Pixilator" })
    this.miss.x = (this.view.width - this.miss.width) / 2
    this.miss.y = this.score.height + 8
    this.view.addChild(this.miss)
  }

  setScore(score) {
    // console.log('ScoreView.setScore', score)
    this.score.text = "SCORE: " + score
  }

  setMiss(miss) {
    // console.log('ScoreView.setScore', score)
    this.miss.text = "Miss: " + miss
  }
}
