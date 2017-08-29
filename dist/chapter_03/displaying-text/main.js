/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports) {

eval("/**\n * @fileoverview Displaying Text\n * @author burning <iburning@live.cn>\n * @version 2017.08.28\n */\n\n//Aliases\n// console.log('PIXI', PIXI)\nvar Container = PIXI.Container;\nvar Graphics = PIXI.Graphics;\nvar Loader = PIXI.loader;\nvar Rectangle = PIXI.Rectangle;\nvar Renderer = PIXI.autoDetectRenderer;\nvar Resources = PIXI.loader.resources;\nvar Sprite = PIXI.Sprite;\nvar Text = PIXI.Text;\nvar TextureCache = PIXI.utils.TextureCache;\nvar Texture = PIXI.Texture;\n\nvar UNIT = 32;\nvar COLOR = 0x333333;\n\nvar renderer = Renderer(UNIT * 2 * 16, UNIT * 2 * 9);\n//Set the canvas's border style and background color\nrenderer.view.style.border = \"1px solid #ccc\";\nrenderer.backgroundColor = \"0xFFFFFF\";\n\n// Add the canvas to the HTML document\ndocument.getElementById(\"pixi\").appendChild(renderer.view);\n\n// Create a container object called the 'stage'\nvar stage = new Container();\n\n// Set the initial game state\nvar state = play;\n\nvar message = void 0;\nlinkFont(\"assets/Pixilator.ttf\");\n\n// Load resources (images and fonts) and then run the 'setup' function\nLoader.add([\"assets/Pixilator.ttf\"]).load(setup);\n\nfunction setup() {\n  message = new Text(\"Hello Pixi!\", {\n    font: \"64px Pixilator\",\n    fill: COLOR\n  });\n  message.x = (renderer.view.width - message.width) / 2;\n  message.y = (renderer.view.height - message.height) / 2;\n  stage.addChild(message);\n\n  // Start the game loop\n  gameLoop();\n}\n\nfunction gameLoop() {\n  // Loop this function 60 times per second\n  requestAnimationFrame(gameLoop);\n\n  // Run the current state\n  state();\n\n  //Render the stage\n  renderer.render(stage);\n}\n\nfunction play() {\n  // Any animation or game logic code goes here\n  // let text = [\n  //   \"Hello Pixi!\",\n  //   \"Let's Rock n' Roll\",\n  //   \"no BUG no Cry\"\n  // ]\n  // message.text = text[parseInt(Math.random() * 3)]\n}\n\nfunction linkFont(source) {\n  console.log(\"linkFont\", source);\n  // Use the font's filename as the 'fontFamily' name.\n  // This code captures the font file's name without the extension or file path\n  var fontFamily = source.split(\"/\").pop().split(\".\")[0];\n\n  // Append an '@font-face' style rule to the head of the HTML document\n  var newStyle = document.createElement(\"style\");\n  var fontFace = \"@font-face {\\n    font-family: \\\"\" + fontFamily + \"\\\";\\n    src: url(\\\"\" + source + \"\\\");\\n  }\";\n  newStyle.appendChild(document.createTextNode(fontFace));\n  document.head.appendChild(newStyle);\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2hhcHRlcl8wMy9kaXNwbGF5aW5nLXRleHQuanM/OGQ4YiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJQSVhJIiwiR3JhcGhpY3MiLCJMb2FkZXIiLCJsb2FkZXIiLCJSZWN0YW5nbGUiLCJSZW5kZXJlciIsImF1dG9EZXRlY3RSZW5kZXJlciIsIlJlc291cmNlcyIsInJlc291cmNlcyIsIlNwcml0ZSIsIlRleHQiLCJUZXh0dXJlQ2FjaGUiLCJ1dGlscyIsIlRleHR1cmUiLCJVTklUIiwiQ09MT1IiLCJyZW5kZXJlciIsInZpZXciLCJzdHlsZSIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsInN0YWdlIiwic3RhdGUiLCJwbGF5IiwibWVzc2FnZSIsImxpbmtGb250IiwiYWRkIiwibG9hZCIsInNldHVwIiwiZm9udCIsImZpbGwiLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwiYWRkQ2hpbGQiLCJnYW1lTG9vcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciIsInNvdXJjZSIsImNvbnNvbGUiLCJsb2ciLCJmb250RmFtaWx5Iiwic3BsaXQiLCJwb3AiLCJuZXdTdHlsZSIsImNyZWF0ZUVsZW1lbnQiLCJmb250RmFjZSIsImNyZWF0ZVRleHROb2RlIiwiaGVhZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQU1BO0FBQ0E7QUFDQSxJQUFNQSxZQUFZQyxLQUFLRCxTQUF2QjtBQUNBLElBQU1FLFdBQVdELEtBQUtDLFFBQXRCO0FBQ0EsSUFBTUMsU0FBU0YsS0FBS0csTUFBcEI7QUFDQSxJQUFNQyxZQUFZSixLQUFLSSxTQUF2QjtBQUNBLElBQU1DLFdBQVdMLEtBQUtNLGtCQUF0QjtBQUNBLElBQU1DLFlBQVlQLEtBQUtHLE1BQUwsQ0FBWUssU0FBOUI7QUFDQSxJQUFNQyxTQUFTVCxLQUFLUyxNQUFwQjtBQUNBLElBQU1DLE9BQU9WLEtBQUtVLElBQWxCO0FBQ0EsSUFBTUMsZUFBZVgsS0FBS1ksS0FBTCxDQUFXRCxZQUFoQztBQUNBLElBQU1FLFVBQVViLEtBQUthLE9BQXJCOztBQUVBLElBQU1DLE9BQU8sRUFBYjtBQUNBLElBQU1DLFFBQVEsUUFBZDs7QUFFQSxJQUFNQyxXQUFXWCxTQUFTUyxPQUFPLENBQVAsR0FBVyxFQUFwQixFQUF3QkEsT0FBTyxDQUFQLEdBQVcsQ0FBbkMsQ0FBakI7QUFDQTtBQUNBRSxTQUFTQyxJQUFULENBQWNDLEtBQWQsQ0FBb0JDLE1BQXBCLEdBQTZCLGdCQUE3QjtBQUNBSCxTQUFTSSxlQUFULEdBQTJCLFVBQTNCOztBQUVBO0FBQ0FDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLFdBQWhDLENBQTRDUCxTQUFTQyxJQUFyRDs7QUFFQTtBQUNBLElBQU1PLFFBQVEsSUFBSXpCLFNBQUosRUFBZDs7QUFFQTtBQUNBLElBQUkwQixRQUFRQyxJQUFaOztBQUVBLElBQUlDLGdCQUFKO0FBQ0FDLFNBQVMsc0JBQVQ7O0FBR0E7QUFDQTFCLE9BQU8yQixHQUFQLENBQVcsQ0FDVCxzQkFEUyxDQUFYLEVBRUdDLElBRkgsQ0FFUUMsS0FGUjs7QUFLQSxTQUFTQSxLQUFULEdBQWlCO0FBQ2ZKLFlBQVUsSUFBSWpCLElBQUosQ0FBUyxhQUFULEVBQXdCO0FBQ2hDc0IsVUFBTSxnQkFEMEI7QUFFaENDLFVBQU1sQjtBQUYwQixHQUF4QixDQUFWO0FBSUFZLFVBQVFPLENBQVIsR0FBWSxDQUFDbEIsU0FBU0MsSUFBVCxDQUFja0IsS0FBZCxHQUFzQlIsUUFBUVEsS0FBL0IsSUFBd0MsQ0FBcEQ7QUFDQVIsVUFBUVMsQ0FBUixHQUFZLENBQUNwQixTQUFTQyxJQUFULENBQWNvQixNQUFkLEdBQXVCVixRQUFRVSxNQUFoQyxJQUEwQyxDQUF0RDtBQUNBYixRQUFNYyxRQUFOLENBQWVYLE9BQWY7O0FBRUE7QUFDQVk7QUFDRDs7QUFHRCxTQUFTQSxRQUFULEdBQW9CO0FBQ2xCO0FBQ0FDLHdCQUFzQkQsUUFBdEI7O0FBRUE7QUFDQWQ7O0FBRUE7QUFDQVQsV0FBU3lCLE1BQVQsQ0FBZ0JqQixLQUFoQjtBQUNEOztBQUdELFNBQVNFLElBQVQsR0FBZ0I7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOztBQUdELFNBQVNFLFFBQVQsQ0FBa0JjLE1BQWxCLEVBQTBCO0FBQ3hCQyxVQUFRQyxHQUFSLENBQVksVUFBWixFQUF3QkYsTUFBeEI7QUFDQTtBQUNBO0FBQ0EsTUFBSUcsYUFBYUgsT0FBT0ksS0FBUCxDQUFhLEdBQWIsRUFBa0JDLEdBQWxCLEdBQXdCRCxLQUF4QixDQUE4QixHQUE5QixFQUFtQyxDQUFuQyxDQUFqQjs7QUFFQTtBQUNBLE1BQUlFLFdBQVczQixTQUFTNEIsYUFBVCxDQUF1QixPQUF2QixDQUFmO0FBQ0EsTUFBSUMsaURBQ2NMLFVBRGQsNEJBRVVILE1BRlYsY0FBSjtBQUlBTSxXQUFTekIsV0FBVCxDQUFxQkYsU0FBUzhCLGNBQVQsQ0FBd0JELFFBQXhCLENBQXJCO0FBQ0E3QixXQUFTK0IsSUFBVCxDQUFjN0IsV0FBZCxDQUEwQnlCLFFBQTFCO0FBQ0QiLCJmaWxlIjoiMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGZpbGVvdmVydmlldyBEaXNwbGF5aW5nIFRleHRcbiAqIEBhdXRob3IgYnVybmluZyA8aWJ1cm5pbmdAbGl2ZS5jbj5cbiAqIEB2ZXJzaW9uIDIwMTcuMDguMjhcbiAqL1xuXG4vL0FsaWFzZXNcbi8vIGNvbnNvbGUubG9nKCdQSVhJJywgUElYSSlcbmNvbnN0IENvbnRhaW5lciA9IFBJWEkuQ29udGFpbmVyXG5jb25zdCBHcmFwaGljcyA9IFBJWEkuR3JhcGhpY3NcbmNvbnN0IExvYWRlciA9IFBJWEkubG9hZGVyXG5jb25zdCBSZWN0YW5nbGUgPSBQSVhJLlJlY3RhbmdsZVxuY29uc3QgUmVuZGVyZXIgPSBQSVhJLmF1dG9EZXRlY3RSZW5kZXJlclxuY29uc3QgUmVzb3VyY2VzID0gUElYSS5sb2FkZXIucmVzb3VyY2VzXG5jb25zdCBTcHJpdGUgPSBQSVhJLlNwcml0ZVxuY29uc3QgVGV4dCA9IFBJWEkuVGV4dFxuY29uc3QgVGV4dHVyZUNhY2hlID0gUElYSS51dGlscy5UZXh0dXJlQ2FjaGVcbmNvbnN0IFRleHR1cmUgPSBQSVhJLlRleHR1cmVcblxuY29uc3QgVU5JVCA9IDMyXG5jb25zdCBDT0xPUiA9IDB4MzMzMzMzXG5cbmNvbnN0IHJlbmRlcmVyID0gUmVuZGVyZXIoVU5JVCAqIDIgKiAxNiwgVU5JVCAqIDIgKiA5KVxuLy9TZXQgdGhlIGNhbnZhcydzIGJvcmRlciBzdHlsZSBhbmQgYmFja2dyb3VuZCBjb2xvclxucmVuZGVyZXIudmlldy5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjY2NjXCJcbnJlbmRlcmVyLmJhY2tncm91bmRDb2xvciA9IFwiMHhGRkZGRkZcIlxuXG4vLyBBZGQgdGhlIGNhbnZhcyB0byB0aGUgSFRNTCBkb2N1bWVudFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaXhpXCIpLmFwcGVuZENoaWxkKHJlbmRlcmVyLnZpZXcpXG5cbi8vIENyZWF0ZSBhIGNvbnRhaW5lciBvYmplY3QgY2FsbGVkIHRoZSAnc3RhZ2UnXG5jb25zdCBzdGFnZSA9IG5ldyBDb250YWluZXIoKVxuXG4vLyBTZXQgdGhlIGluaXRpYWwgZ2FtZSBzdGF0ZVxubGV0IHN0YXRlID0gcGxheVxuXG5sZXQgbWVzc2FnZVxubGlua0ZvbnQoXCJhc3NldHMvUGl4aWxhdG9yLnR0ZlwiKVxuXG5cbi8vIExvYWQgcmVzb3VyY2VzIChpbWFnZXMgYW5kIGZvbnRzKSBhbmQgdGhlbiBydW4gdGhlICdzZXR1cCcgZnVuY3Rpb25cbkxvYWRlci5hZGQoW1xuICBcImFzc2V0cy9QaXhpbGF0b3IudHRmXCJcbl0pLmxvYWQoc2V0dXApXG5cblxuZnVuY3Rpb24gc2V0dXAoKSB7XG4gIG1lc3NhZ2UgPSBuZXcgVGV4dChcIkhlbGxvIFBpeGkhXCIsIHtcbiAgICBmb250OiBcIjY0cHggUGl4aWxhdG9yXCIsXG4gICAgZmlsbDogQ09MT1JcbiAgfSlcbiAgbWVzc2FnZS54ID0gKHJlbmRlcmVyLnZpZXcud2lkdGggLSBtZXNzYWdlLndpZHRoKSAvIDJcbiAgbWVzc2FnZS55ID0gKHJlbmRlcmVyLnZpZXcuaGVpZ2h0IC0gbWVzc2FnZS5oZWlnaHQpIC8gMlxuICBzdGFnZS5hZGRDaGlsZChtZXNzYWdlKVxuXG4gIC8vIFN0YXJ0IHRoZSBnYW1lIGxvb3BcbiAgZ2FtZUxvb3AoKVxufVxuXG5cbmZ1bmN0aW9uIGdhbWVMb29wKCkge1xuICAvLyBMb29wIHRoaXMgZnVuY3Rpb24gNjAgdGltZXMgcGVyIHNlY29uZFxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApXG5cbiAgLy8gUnVuIHRoZSBjdXJyZW50IHN0YXRlXG4gIHN0YXRlKClcblxuICAvL1JlbmRlciB0aGUgc3RhZ2VcbiAgcmVuZGVyZXIucmVuZGVyKHN0YWdlKVxufVxuXG5cbmZ1bmN0aW9uIHBsYXkoKSB7XG4gIC8vIEFueSBhbmltYXRpb24gb3IgZ2FtZSBsb2dpYyBjb2RlIGdvZXMgaGVyZVxuICAvLyBsZXQgdGV4dCA9IFtcbiAgLy8gICBcIkhlbGxvIFBpeGkhXCIsXG4gIC8vICAgXCJMZXQncyBSb2NrIG4nIFJvbGxcIixcbiAgLy8gICBcIm5vIEJVRyBubyBDcnlcIlxuICAvLyBdXG4gIC8vIG1lc3NhZ2UudGV4dCA9IHRleHRbcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIDMpXVxufVxuXG5cbmZ1bmN0aW9uIGxpbmtGb250KHNvdXJjZSkge1xuICBjb25zb2xlLmxvZyhcImxpbmtGb250XCIsIHNvdXJjZSlcbiAgLy8gVXNlIHRoZSBmb250J3MgZmlsZW5hbWUgYXMgdGhlICdmb250RmFtaWx5JyBuYW1lLlxuICAvLyBUaGlzIGNvZGUgY2FwdHVyZXMgdGhlIGZvbnQgZmlsZSdzIG5hbWUgd2l0aG91dCB0aGUgZXh0ZW5zaW9uIG9yIGZpbGUgcGF0aFxuICBsZXQgZm9udEZhbWlseSA9IHNvdXJjZS5zcGxpdChcIi9cIikucG9wKCkuc3BsaXQoXCIuXCIpWzBdXG5cbiAgLy8gQXBwZW5kIGFuICdAZm9udC1mYWNlJyBzdHlsZSBydWxlIHRvIHRoZSBoZWFkIG9mIHRoZSBIVE1MIGRvY3VtZW50XG4gIGxldCBuZXdTdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKVxuICBsZXQgZm9udEZhY2UgPSBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiJHtmb250RmFtaWx5fVwiO1xuICAgIHNyYzogdXJsKFwiJHtzb3VyY2V9XCIpO1xuICB9YFxuICBuZXdTdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShmb250RmFjZSkpXG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobmV3U3R5bGUpXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2hhcHRlcl8wMy9kaXNwbGF5aW5nLXRleHQuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ })

/******/ });