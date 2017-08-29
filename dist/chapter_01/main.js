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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("/**\n * @fileoverview Creating the Renderer and Stage\n * @author burning <iburning@live.cn>\n * @version 2017.08.23\n */\n\n// console.log('PIXI', PIXI)\n\n// Create the render\n// let renderer = PIXI.autoDetectRenderer(256, 256, {\n//   antialias: false,\n//   transparent: false,\n//   resolution: 1\n// })\n\n//Aliases\nvar Container = PIXI.Container;\nvar Loader = PIXI.loader;\nvar Rectangle = PIXI.Rectangle;\nvar Renderer = PIXI.autoDetectRenderer;\nvar Resources = PIXI.loader.resources;\nvar Sprite = PIXI.Sprite;\nvar TextureCache = PIXI.utils.TextureCache;\nvar Texture = PIXI.Texture;\n\nvar UNIT = 40;\n\nvar renderer = Renderer(UNIT * 2 * 16, UNIT * 2 * 9);\n\n// Add the canvas to the HTML document\ndocument.body.appendChild(renderer.view);\n\n// Create a container object called the 'stage'\nvar stage = new Container();\nconsole.log('stage', stage);\n\n// Tell the 'renderder' to 'render' the 'stage'\nrenderer.render(stage);\n\n// scaleToWindow(renderer.view)\n//\n// window.addEventListener(\"resize\", event => {\n//   scaleToWindow(renderer.view)\n// })\n\n\nLoader.add([\"assets/sonic.png\", \"assets/building_1.png\"]).load(setup);\n\nfunction setup() {\n  // // Create the sprite from the texture\n  // let sonic = new Sprite(Resources[\"assets/sonic.png\"].texture)\n  // sonic.scale.x = 0.25\n  // sonic.scale.y = 0.25\n  // sonic.x = 100\n  // sonic.y = 50\n  //\n  // // sonic.anchor.x = 0.5\n  // // sonic.anchor.y = 0.5\n  // // sonic.rotation = 0.5\n  // // Add the sprite to the stage\n  // stage.addChild(sonic)\n\n  // console.log('Resources', Resources)\n  // console.log('TextureCache', TextureCache)\n\n  // Create the 'tileset' sprite from the texture\n  var texture = TextureCache[\"assets/building_1.png\"];\n  // console.log('texture', texture)\n\n  // Create a rectangle object that defines the position and\n  // size of the sub-image you want to extract from the texture\n  var rectangle = new Rectangle(0, 0, UNIT * 2, UNIT * 3);\n  // console.log('rectangle', rectangle)\n\n  // Tell the texture to use that rectangular section\n  texture.frame = rectangle;\n\n  // Create the sprite from the texture\n  var build = new Sprite(texture);\n\n  // Position the sprite on the canvas\n  // build.x = stage.width / 2\n  // build.y = stage.height / 2\n  build.x = UNIT * 2;\n  build.y = UNIT * 2;\n\n  // // Scale the sprite up so it's 3 times bigger than the original image\n  // build.scale.set(3, 3)\n\n  // Add the sprite to the stage\n  stage.addChild(build);\n\n  // Render the stage\n  renderer.render(stage);\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2hhcHRlcl8wMS9tYWluLmpzPzY0ODQiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwiUElYSSIsIkxvYWRlciIsImxvYWRlciIsIlJlY3RhbmdsZSIsIlJlbmRlcmVyIiwiYXV0b0RldGVjdFJlbmRlcmVyIiwiUmVzb3VyY2VzIiwicmVzb3VyY2VzIiwiU3ByaXRlIiwiVGV4dHVyZUNhY2hlIiwidXRpbHMiLCJUZXh0dXJlIiwiVU5JVCIsInJlbmRlcmVyIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ2aWV3Iiwic3RhZ2UiLCJjb25zb2xlIiwibG9nIiwicmVuZGVyIiwiYWRkIiwibG9hZCIsInNldHVwIiwidGV4dHVyZSIsInJlY3RhbmdsZSIsImZyYW1lIiwiYnVpbGQiLCJ4IiwieSIsImFkZENoaWxkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBTUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBTUEsWUFBWUMsS0FBS0QsU0FBdkI7QUFDQSxJQUFNRSxTQUFTRCxLQUFLRSxNQUFwQjtBQUNBLElBQU1DLFlBQVlILEtBQUtHLFNBQXZCO0FBQ0EsSUFBTUMsV0FBV0osS0FBS0ssa0JBQXRCO0FBQ0EsSUFBTUMsWUFBWU4sS0FBS0UsTUFBTCxDQUFZSyxTQUE5QjtBQUNBLElBQU1DLFNBQVNSLEtBQUtRLE1BQXBCO0FBQ0EsSUFBTUMsZUFBZVQsS0FBS1UsS0FBTCxDQUFXRCxZQUFoQztBQUNBLElBQU1FLFVBQVVYLEtBQUtXLE9BQXJCOztBQUVBLElBQU1DLE9BQU8sRUFBYjs7QUFFQSxJQUFNQyxXQUFXVCxTQUFTUSxPQUFPLENBQVAsR0FBVyxFQUFwQixFQUF3QkEsT0FBTyxDQUFQLEdBQVcsQ0FBbkMsQ0FBakI7O0FBRUE7QUFDQUUsU0FBU0MsSUFBVCxDQUFjQyxXQUFkLENBQTBCSCxTQUFTSSxJQUFuQzs7QUFFQTtBQUNBLElBQU1DLFFBQVEsSUFBSW5CLFNBQUosRUFBZDtBQUNBb0IsUUFBUUMsR0FBUixDQUFZLE9BQVosRUFBcUJGLEtBQXJCOztBQUVBO0FBQ0FMLFNBQVNRLE1BQVQsQ0FBZ0JILEtBQWhCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBakIsT0FBT3FCLEdBQVAsQ0FBVyxDQUNULGtCQURTLEVBRVQsdUJBRlMsQ0FBWCxFQUdHQyxJQUhILENBR1FDLEtBSFI7O0FBTUEsU0FBU0EsS0FBVCxHQUFpQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsTUFBSUMsVUFBVWhCLGFBQWEsdUJBQWIsQ0FBZDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFJaUIsWUFBWSxJQUFJdkIsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0JTLE9BQU8sQ0FBM0IsRUFBOEJBLE9BQU8sQ0FBckMsQ0FBaEI7QUFDQTs7QUFFQTtBQUNBYSxVQUFRRSxLQUFSLEdBQWdCRCxTQUFoQjs7QUFFQTtBQUNBLE1BQUlFLFFBQVEsSUFBSXBCLE1BQUosQ0FBV2lCLE9BQVgsQ0FBWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQUcsUUFBTUMsQ0FBTixHQUFVakIsT0FBTyxDQUFqQjtBQUNBZ0IsUUFBTUUsQ0FBTixHQUFVbEIsT0FBTyxDQUFqQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0FNLFFBQU1hLFFBQU4sQ0FBZUgsS0FBZjs7QUFHQTtBQUNBZixXQUFTUSxNQUFULENBQWdCSCxLQUFoQjtBQUNEIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgQ3JlYXRpbmcgdGhlIFJlbmRlcmVyIGFuZCBTdGFnZVxuICogQGF1dGhvciBidXJuaW5nIDxpYnVybmluZ0BsaXZlLmNuPlxuICogQHZlcnNpb24gMjAxNy4wOC4yM1xuICovXG5cbi8vIGNvbnNvbGUubG9nKCdQSVhJJywgUElYSSlcblxuLy8gQ3JlYXRlIHRoZSByZW5kZXJcbi8vIGxldCByZW5kZXJlciA9IFBJWEkuYXV0b0RldGVjdFJlbmRlcmVyKDI1NiwgMjU2LCB7XG4vLyAgIGFudGlhbGlhczogZmFsc2UsXG4vLyAgIHRyYW5zcGFyZW50OiBmYWxzZSxcbi8vICAgcmVzb2x1dGlvbjogMVxuLy8gfSlcblxuLy9BbGlhc2VzXG5jb25zdCBDb250YWluZXIgPSBQSVhJLkNvbnRhaW5lclxuY29uc3QgTG9hZGVyID0gUElYSS5sb2FkZXJcbmNvbnN0IFJlY3RhbmdsZSA9IFBJWEkuUmVjdGFuZ2xlXG5jb25zdCBSZW5kZXJlciA9IFBJWEkuYXV0b0RldGVjdFJlbmRlcmVyXG5jb25zdCBSZXNvdXJjZXMgPSBQSVhJLmxvYWRlci5yZXNvdXJjZXNcbmNvbnN0IFNwcml0ZSA9IFBJWEkuU3ByaXRlXG5jb25zdCBUZXh0dXJlQ2FjaGUgPSBQSVhJLnV0aWxzLlRleHR1cmVDYWNoZVxuY29uc3QgVGV4dHVyZSA9IFBJWEkuVGV4dHVyZVxuXG5jb25zdCBVTklUID0gNDBcblxuY29uc3QgcmVuZGVyZXIgPSBSZW5kZXJlcihVTklUICogMiAqIDE2LCBVTklUICogMiAqIDkpXG5cbi8vIEFkZCB0aGUgY2FudmFzIHRvIHRoZSBIVE1MIGRvY3VtZW50XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlcmVyLnZpZXcpXG5cbi8vIENyZWF0ZSBhIGNvbnRhaW5lciBvYmplY3QgY2FsbGVkIHRoZSAnc3RhZ2UnXG5jb25zdCBzdGFnZSA9IG5ldyBDb250YWluZXIoKVxuY29uc29sZS5sb2coJ3N0YWdlJywgc3RhZ2UpXG5cbi8vIFRlbGwgdGhlICdyZW5kZXJkZXInIHRvICdyZW5kZXInIHRoZSAnc3RhZ2UnXG5yZW5kZXJlci5yZW5kZXIoc3RhZ2UpXG5cbi8vIHNjYWxlVG9XaW5kb3cocmVuZGVyZXIudmlldylcbi8vXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBldmVudCA9PiB7XG4vLyAgIHNjYWxlVG9XaW5kb3cocmVuZGVyZXIudmlldylcbi8vIH0pXG5cblxuTG9hZGVyLmFkZChbXG4gIFwiYXNzZXRzL3NvbmljLnBuZ1wiLFxuICBcImFzc2V0cy9idWlsZGluZ18xLnBuZ1wiXG5dKS5sb2FkKHNldHVwKVxuXG5cbmZ1bmN0aW9uIHNldHVwKCkge1xuICAvLyAvLyBDcmVhdGUgdGhlIHNwcml0ZSBmcm9tIHRoZSB0ZXh0dXJlXG4gIC8vIGxldCBzb25pYyA9IG5ldyBTcHJpdGUoUmVzb3VyY2VzW1wiYXNzZXRzL3NvbmljLnBuZ1wiXS50ZXh0dXJlKVxuICAvLyBzb25pYy5zY2FsZS54ID0gMC4yNVxuICAvLyBzb25pYy5zY2FsZS55ID0gMC4yNVxuICAvLyBzb25pYy54ID0gMTAwXG4gIC8vIHNvbmljLnkgPSA1MFxuICAvL1xuICAvLyAvLyBzb25pYy5hbmNob3IueCA9IDAuNVxuICAvLyAvLyBzb25pYy5hbmNob3IueSA9IDAuNVxuICAvLyAvLyBzb25pYy5yb3RhdGlvbiA9IDAuNVxuICAvLyAvLyBBZGQgdGhlIHNwcml0ZSB0byB0aGUgc3RhZ2VcbiAgLy8gc3RhZ2UuYWRkQ2hpbGQoc29uaWMpXG5cbiAgLy8gY29uc29sZS5sb2coJ1Jlc291cmNlcycsIFJlc291cmNlcylcbiAgLy8gY29uc29sZS5sb2coJ1RleHR1cmVDYWNoZScsIFRleHR1cmVDYWNoZSlcblxuICAvLyBDcmVhdGUgdGhlICd0aWxlc2V0JyBzcHJpdGUgZnJvbSB0aGUgdGV4dHVyZVxuICBsZXQgdGV4dHVyZSA9IFRleHR1cmVDYWNoZVtcImFzc2V0cy9idWlsZGluZ18xLnBuZ1wiXVxuICAvLyBjb25zb2xlLmxvZygndGV4dHVyZScsIHRleHR1cmUpXG5cbiAgLy8gQ3JlYXRlIGEgcmVjdGFuZ2xlIG9iamVjdCB0aGF0IGRlZmluZXMgdGhlIHBvc2l0aW9uIGFuZFxuICAvLyBzaXplIG9mIHRoZSBzdWItaW1hZ2UgeW91IHdhbnQgdG8gZXh0cmFjdCBmcm9tIHRoZSB0ZXh0dXJlXG4gIGxldCByZWN0YW5nbGUgPSBuZXcgUmVjdGFuZ2xlKDAsIDAsIFVOSVQgKiAyLCBVTklUICogMylcbiAgLy8gY29uc29sZS5sb2coJ3JlY3RhbmdsZScsIHJlY3RhbmdsZSlcblxuICAvLyBUZWxsIHRoZSB0ZXh0dXJlIHRvIHVzZSB0aGF0IHJlY3Rhbmd1bGFyIHNlY3Rpb25cbiAgdGV4dHVyZS5mcmFtZSA9IHJlY3RhbmdsZVxuXG4gIC8vIENyZWF0ZSB0aGUgc3ByaXRlIGZyb20gdGhlIHRleHR1cmVcbiAgbGV0IGJ1aWxkID0gbmV3IFNwcml0ZSh0ZXh0dXJlKVxuXG4gIC8vIFBvc2l0aW9uIHRoZSBzcHJpdGUgb24gdGhlIGNhbnZhc1xuICAvLyBidWlsZC54ID0gc3RhZ2Uud2lkdGggLyAyXG4gIC8vIGJ1aWxkLnkgPSBzdGFnZS5oZWlnaHQgLyAyXG4gIGJ1aWxkLnggPSBVTklUICogMlxuICBidWlsZC55ID0gVU5JVCAqIDJcblxuICAvLyAvLyBTY2FsZSB0aGUgc3ByaXRlIHVwIHNvIGl0J3MgMyB0aW1lcyBiaWdnZXIgdGhhbiB0aGUgb3JpZ2luYWwgaW1hZ2VcbiAgLy8gYnVpbGQuc2NhbGUuc2V0KDMsIDMpXG5cbiAgLy8gQWRkIHRoZSBzcHJpdGUgdG8gdGhlIHN0YWdlXG4gIHN0YWdlLmFkZENoaWxkKGJ1aWxkKVxuXG5cbiAgLy8gUmVuZGVyIHRoZSBzdGFnZVxuICByZW5kZXJlci5yZW5kZXIoc3RhZ2UpXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY2hhcHRlcl8wMS9tYWluLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);