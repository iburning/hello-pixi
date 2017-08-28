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

eval("/**\n * @fileoverview Displaying Text\n * @author burning <iburning@live.cn>\n * @version 2017.08.28\n */\n\n//Aliases\n// console.log('PIXI', PIXI)\nvar Container = PIXI.Container;\nvar Graphics = PIXI.Graphics;\nvar Loader = PIXI.loader;\nvar Rectangle = PIXI.Rectangle;\nvar Renderer = PIXI.autoDetectRenderer;\nvar Resources = PIXI.loader.resources;\nvar Sprite = PIXI.Sprite;\nvar TextureCache = PIXI.utils.TextureCache;\nvar Texture = PIXI.Texture;\n\nvar UNIT = 32;\nvar LINE_ALPHA = 1;\nvar LINE_COLOR = 0x333333;\nvar LINE_THICKNESS = 1;\nvar SHAPE_BACKGROUND_COLOR = 0xffffff;\n\nvar renderer = Renderer(UNIT * 2 * 16, UNIT * 2 * 9);\n//Set the canvas's border style and background color\nrenderer.view.style.border = \"1px solid #ccc\";\nrenderer.backgroundColor = \"0xFFFFFF\";\n\n// Add the canvas to the HTML document\ndocument.getElementById(\"pixi\").appendChild(renderer.view);\n\n// Create a container object called the 'stage'\nvar stage = new Container();\n\n// Set the initial game state\nvar state = play;\n\nvar myLine = void 0;\n\n// Load resources (images and fonts) and then run the 'setup' function\n// Loader.add([\n//   // \"fonts/puzzler.ttf\"\n// ]).load(setup)\n\nsetup();\n\nfunction setup() {\n  var message = new Text(\"Hello Pixi!\", {\n    font: \"48px Impact\",\n    fill: \"#66666\"\n  });\n  message.x = renderer.view.width / 2 - message.width / 2;\n  message.y = renderer.view.height / 2 - message.height / 2;\n\n  stage.addChild(message);\n\n  // Start the game loop\n  gameLoop();\n}\n\nfunction gameLoop() {\n  // Loop this function 60 times per second\n  requestAnimationFrame(gameLoop);\n\n  // Run the current state\n  state();\n\n  //Render the stage\n  renderer.render(stage);\n}\n\nfunction play() {\n  // Any animation or game logic code goes here\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2hhcHRlcl8wMy9kaXNwbGF5aW5nLXRleHQuanM/OGQ4YiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJQSVhJIiwiR3JhcGhpY3MiLCJMb2FkZXIiLCJsb2FkZXIiLCJSZWN0YW5nbGUiLCJSZW5kZXJlciIsImF1dG9EZXRlY3RSZW5kZXJlciIsIlJlc291cmNlcyIsInJlc291cmNlcyIsIlNwcml0ZSIsIlRleHR1cmVDYWNoZSIsInV0aWxzIiwiVGV4dHVyZSIsIlVOSVQiLCJMSU5FX0FMUEhBIiwiTElORV9DT0xPUiIsIkxJTkVfVEhJQ0tORVNTIiwiU0hBUEVfQkFDS0dST1VORF9DT0xPUiIsInJlbmRlcmVyIiwidmlldyIsInN0eWxlIiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwic3RhZ2UiLCJzdGF0ZSIsInBsYXkiLCJteUxpbmUiLCJzZXR1cCIsIm1lc3NhZ2UiLCJUZXh0IiwiZm9udCIsImZpbGwiLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwiYWRkQ2hpbGQiLCJnYW1lTG9vcCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQU1BO0FBQ0E7QUFDQSxJQUFNQSxZQUFZQyxLQUFLRCxTQUF2QjtBQUNBLElBQU1FLFdBQVdELEtBQUtDLFFBQXRCO0FBQ0EsSUFBTUMsU0FBU0YsS0FBS0csTUFBcEI7QUFDQSxJQUFNQyxZQUFZSixLQUFLSSxTQUF2QjtBQUNBLElBQU1DLFdBQVdMLEtBQUtNLGtCQUF0QjtBQUNBLElBQU1DLFlBQVlQLEtBQUtHLE1BQUwsQ0FBWUssU0FBOUI7QUFDQSxJQUFNQyxTQUFTVCxLQUFLUyxNQUFwQjtBQUNBLElBQU1DLGVBQWVWLEtBQUtXLEtBQUwsQ0FBV0QsWUFBaEM7QUFDQSxJQUFNRSxVQUFVWixLQUFLWSxPQUFyQjs7QUFFQSxJQUFNQyxPQUFPLEVBQWI7QUFDQSxJQUFNQyxhQUFhLENBQW5CO0FBQ0EsSUFBTUMsYUFBYSxRQUFuQjtBQUNBLElBQU1DLGlCQUFpQixDQUF2QjtBQUNBLElBQU1DLHlCQUF5QixRQUEvQjs7QUFFQSxJQUFNQyxXQUFXYixTQUFTUSxPQUFPLENBQVAsR0FBVyxFQUFwQixFQUF3QkEsT0FBTyxDQUFQLEdBQVcsQ0FBbkMsQ0FBakI7QUFDQTtBQUNBSyxTQUFTQyxJQUFULENBQWNDLEtBQWQsQ0FBb0JDLE1BQXBCLEdBQTZCLGdCQUE3QjtBQUNBSCxTQUFTSSxlQUFULEdBQTJCLFVBQTNCOztBQUVBO0FBQ0FDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLFdBQWhDLENBQTRDUCxTQUFTQyxJQUFyRDs7QUFFQTtBQUNBLElBQU1PLFFBQVEsSUFBSTNCLFNBQUosRUFBZDs7QUFFQTtBQUNBLElBQUk0QixRQUFRQyxJQUFaOztBQUVBLElBQUlDLGVBQUo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUFDOztBQUVBLFNBQVNBLEtBQVQsR0FBaUI7QUFDZixNQUFJQyxVQUFVLElBQUlDLElBQUosQ0FBUyxhQUFULEVBQXdCO0FBQ3BDQyxVQUFNLGFBRDhCO0FBRXBDQyxVQUFNO0FBRjhCLEdBQXhCLENBQWQ7QUFJQUgsVUFBUUksQ0FBUixHQUFZakIsU0FBU0MsSUFBVCxDQUFjaUIsS0FBZCxHQUFzQixDQUF0QixHQUEwQkwsUUFBUUssS0FBUixHQUFnQixDQUF0RDtBQUNBTCxVQUFRTSxDQUFSLEdBQVluQixTQUFTQyxJQUFULENBQWNtQixNQUFkLEdBQXVCLENBQXZCLEdBQTJCUCxRQUFRTyxNQUFSLEdBQWlCLENBQXhEOztBQUVBWixRQUFNYSxRQUFOLENBQWVSLE9BQWY7O0FBRUE7QUFDQVM7QUFDRDs7QUFHRCxTQUFTQSxRQUFULEdBQW9CO0FBQ2xCO0FBQ0FDLHdCQUFzQkQsUUFBdEI7O0FBRUE7QUFDQWI7O0FBRUE7QUFDQVQsV0FBU3dCLE1BQVQsQ0FBZ0JoQixLQUFoQjtBQUNEOztBQUdELFNBQVNFLElBQVQsR0FBZ0I7QUFDZDtBQUNEIiwiZmlsZSI6IjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgRGlzcGxheWluZyBUZXh0XG4gKiBAYXV0aG9yIGJ1cm5pbmcgPGlidXJuaW5nQGxpdmUuY24+XG4gKiBAdmVyc2lvbiAyMDE3LjA4LjI4XG4gKi9cblxuLy9BbGlhc2VzXG4vLyBjb25zb2xlLmxvZygnUElYSScsIFBJWEkpXG5jb25zdCBDb250YWluZXIgPSBQSVhJLkNvbnRhaW5lclxuY29uc3QgR3JhcGhpY3MgPSBQSVhJLkdyYXBoaWNzXG5jb25zdCBMb2FkZXIgPSBQSVhJLmxvYWRlclxuY29uc3QgUmVjdGFuZ2xlID0gUElYSS5SZWN0YW5nbGVcbmNvbnN0IFJlbmRlcmVyID0gUElYSS5hdXRvRGV0ZWN0UmVuZGVyZXJcbmNvbnN0IFJlc291cmNlcyA9IFBJWEkubG9hZGVyLnJlc291cmNlc1xuY29uc3QgU3ByaXRlID0gUElYSS5TcHJpdGVcbmNvbnN0IFRleHR1cmVDYWNoZSA9IFBJWEkudXRpbHMuVGV4dHVyZUNhY2hlXG5jb25zdCBUZXh0dXJlID0gUElYSS5UZXh0dXJlXG5cbmNvbnN0IFVOSVQgPSAzMlxuY29uc3QgTElORV9BTFBIQSA9IDFcbmNvbnN0IExJTkVfQ09MT1IgPSAweDMzMzMzM1xuY29uc3QgTElORV9USElDS05FU1MgPSAxXG5jb25zdCBTSEFQRV9CQUNLR1JPVU5EX0NPTE9SID0gMHhmZmZmZmZcblxuY29uc3QgcmVuZGVyZXIgPSBSZW5kZXJlcihVTklUICogMiAqIDE2LCBVTklUICogMiAqIDkpXG4vL1NldCB0aGUgY2FudmFzJ3MgYm9yZGVyIHN0eWxlIGFuZCBiYWNrZ3JvdW5kIGNvbG9yXG5yZW5kZXJlci52aWV3LnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNjY2NcIlxucmVuZGVyZXIuYmFja2dyb3VuZENvbG9yID0gXCIweEZGRkZGRlwiXG5cbi8vIEFkZCB0aGUgY2FudmFzIHRvIHRoZSBIVE1MIGRvY3VtZW50XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBpeGlcIikuYXBwZW5kQ2hpbGQocmVuZGVyZXIudmlldylcblxuLy8gQ3JlYXRlIGEgY29udGFpbmVyIG9iamVjdCBjYWxsZWQgdGhlICdzdGFnZSdcbmNvbnN0IHN0YWdlID0gbmV3IENvbnRhaW5lcigpXG5cbi8vIFNldCB0aGUgaW5pdGlhbCBnYW1lIHN0YXRlXG5sZXQgc3RhdGUgPSBwbGF5XG5cbmxldCBteUxpbmVcblxuLy8gTG9hZCByZXNvdXJjZXMgKGltYWdlcyBhbmQgZm9udHMpIGFuZCB0aGVuIHJ1biB0aGUgJ3NldHVwJyBmdW5jdGlvblxuLy8gTG9hZGVyLmFkZChbXG4vLyAgIC8vIFwiZm9udHMvcHV6emxlci50dGZcIlxuLy8gXSkubG9hZChzZXR1cClcblxuc2V0dXAoKVxuXG5mdW5jdGlvbiBzZXR1cCgpIHtcbiAgbGV0IG1lc3NhZ2UgPSBuZXcgVGV4dChcIkhlbGxvIFBpeGkhXCIsIHtcbiAgICBmb250OiBcIjQ4cHggSW1wYWN0XCIsXG4gICAgZmlsbDogXCIjNjY2NjZcIlxuICB9KVxuICBtZXNzYWdlLnggPSByZW5kZXJlci52aWV3LndpZHRoIC8gMiAtIG1lc3NhZ2Uud2lkdGggLyAyXG4gIG1lc3NhZ2UueSA9IHJlbmRlcmVyLnZpZXcuaGVpZ2h0IC8gMiAtIG1lc3NhZ2UuaGVpZ2h0IC8gMlxuXG4gIHN0YWdlLmFkZENoaWxkKG1lc3NhZ2UpXG5cbiAgLy8gU3RhcnQgdGhlIGdhbWUgbG9vcFxuICBnYW1lTG9vcCgpXG59XG5cblxuZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gIC8vIExvb3AgdGhpcyBmdW5jdGlvbiA2MCB0aW1lcyBwZXIgc2Vjb25kXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcClcblxuICAvLyBSdW4gdGhlIGN1cnJlbnQgc3RhdGVcbiAgc3RhdGUoKVxuXG4gIC8vUmVuZGVyIHRoZSBzdGFnZVxuICByZW5kZXJlci5yZW5kZXIoc3RhZ2UpXG59XG5cblxuZnVuY3Rpb24gcGxheSgpIHtcbiAgLy8gQW55IGFuaW1hdGlvbiBvciBnYW1lIGxvZ2ljIGNvZGUgZ29lcyBoZXJlXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2hhcHRlcl8wMy9kaXNwbGF5aW5nLXRleHQuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n");

/***/ })

/******/ });