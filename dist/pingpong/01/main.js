!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"d",function(){return a}),n.d(t,"e",function(){return s}),n.d(t,"f",function(){return c});var i=PIXI.Container,r=PIXI.Graphics,o=PIXI.loader,a=(PIXI.Rectangle,PIXI.autoDetectRenderer),s=(PIXI.loader.resources,PIXI.Sprite),c=PIXI.Text;PIXI.utils.TextureCache,PIXI.Texture},,,,,,,,function(e,t,n){"use strict";function i(){p=new c.a,x.addChild(p),I=new d.a(0),I.view.x=(w.view.width-I.view.width)/2,I.view.y=3*v,p.addChild(I.view),m.speed=10,m.vx=5,m.vy=m.speed,m.maxSpeed=18,m.acceleration=2,p.addChild(m),g.x=(w.view.width-g.width)/2,g.y=w.view.height-10*v,g.speed=15,s(g),p.addChild(g),y=new c.a,x.addChild(y);var e=new c.f("Game Over",{font:"48px Pixilator"});e.x=(w.view.width-e.width)/2,e.y=(w.view.height-e.height)/2,y.addChild(e),y.visible=!1,b=o,r()}function r(){requestAnimationFrame(r),b(),w.render(x)}function o(){m.vy+=f,m.x+=m.vx,m.y+=m.vy,g.x+=g.vx,g.y+=g.vy;var e=h.contain(m,{x:0,y:0,width:w.view.width,height:w.view.height});e&&(console.log("collision",e,C,P,m.vx,m.vy),(e.has("left")||e.has("right"))&&(m.vx=-m.vx),e.has("top")&&(m.vy=-m.vy),e.has("bottom")&&(X--,P++,I.setMiss(P),X<=0&&(b=a),m.vx=m.vx>0?m.speed:-m.speed,m.vy=-m.speed)),h.contain(g,{x:v,y:w.view.height-20*v,width:w.view.width-v,height:w.view.height-v});var t=h.rectangleCollision(m,g);t&&(console.log("hitTest",t),"bottom"==t&&(C++,I.setScore(C)),"top"!=t&&"bottom"!=t||(Math.abs(m.vx)<m.maxSpeed&&(m.vx+=m.acceleration),Math.abs(m.vy)<m.maxSpeed&&(m.vy+=m.acceleration),m.vy=-m.vy))}function a(){y.visible=!0}function s(e){var t=keyboard(37),n=keyboard(39),i=keyboard(38),r=keyboard(40);t.press=function(){e.vx=-e.speed,e.vy=0},t.release=function(){n.isDown||0!==e.vy||(e.vx=0)},n.press=function(){e.vx=e.speed,e.vy=0},n.release=function(){t.isDown||0!==e.vy||(e.vx=0)},i.press=function(){e.vy=-e.speed,e.vx=0},i.release=function(){r.isDown||0!==e.vx||(e.vy=0)},r.press=function(){e.vy=e.speed,e.vx=0},r.release=function(){i.isDown||0!==e.vx||(e.vy=0)}}Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),u=n(9),l=n(10),d=n(11),v=8,f=.15,h=new Bump(PIXI),w=Object(c.d)(20*v*3,20*v*4);w.view.style.border="1px solid #333333",w.backgroundColor="0xEFEFEF",document.getElementById("pixi").appendChild(w.view);var x=new c.a,p=null,y=null,b=o,m=new u.a(2*v),g=new l.a(15*v,2*v),I=null,C=0,P=0,X=3;!function(e){var t=e.split("/").pop().split(".")[0],n=document.createElement("style"),i='@font-face {\n    font-family: "'+t+'";\n    src: url("'+e+'");\n  }';n.appendChild(document.createTextNode(i)),document.head.appendChild(n)}("assets/Pixilator.ttf"),c.c.add(["assets/Pixilator.ttf"]).load(i)},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=n(0),o=function e(t){i(this,e);var n=new r.b;n.beginFill(3355443),n.lineStyle(1,3355443,1),n.drawRect(0,0,t,t),n.endFill();var o=new r.e(n.generateTexture());return o.x=0,o.y=0,o.vx=0,o.vy=0,o};t.a=o},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=n(0),o=function e(t,n){i(this,e);var o=new r.b;o.beginFill(3355443),o.lineStyle(1,3355443,1),o.drawRect(0,0,t,n),o.endFill();var a=new r.e(o.generateTexture());return a.x=0,a.y=0,a.vx=0,a.vy=0,a};t.a=o},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=n(0),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),a=function(){function e(t){i(this,e),t=t||0,this.view=new r.a,this.score=new r.f("SCORE: "+t,{font:"24px Pixilator"}),this.view.addChild(this.score),this.miss=new r.f("Miss: 0",{font:"16px Pixilator"}),this.miss.x=(this.view.width-this.miss.width)/2,this.miss.y=this.score.height+8,this.view.addChild(this.miss)}return o(e,[{key:"setScore",value:function(e){this.score.text="SCORE: "+e}},{key:"setMiss",value:function(e){this.miss.text="Miss: "+e}}]),e}();t.a=a}]);
//# sourceMappingURL=main.js.map