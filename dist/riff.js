<<<<<<< HEAD
var riff =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/newriff.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/max-api/index.js":
/*!***************************************!*\
  !*** ./node_modules/max-api/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { homepage } = __webpack_require__(/*! ./package.json */ \"./node_modules/max-api/package.json\");\n\nthrow new Error(\n`It appears that you installed the 'max-api' package from npm. This leads to undesired behaviour and errors.\n\nPlease remove the package using 'npm uninstall max-api'.\n\nFor more info please visit ${homepage}\n`);\n\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/max-api/index.js?");

/***/ }),

/***/ "./node_modules/max-api/package.json":
/*!*******************************************!*\
  !*** ./node_modules/max-api/package.json ***!
  \*******************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, contributors, deprecated, description, files, homepage, keywords, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"_from\\\":\\\"max-api\\\",\\\"_id\\\":\\\"max-api@2.0.0\\\",\\\"_inBundle\\\":false,\\\"_integrity\\\":\\\"sha512-/hw9GTWwjrVfh9sHplIbry2g6T9ShE3AYeIqndmJ5DfpiwU4gm62a+aiAW9yJGOaKm18L09xOeFlXEhkP/Ilpg==\\\",\\\"_location\\\":\\\"/max-api\\\",\\\"_phantomChildren\\\":{},\\\"_requested\\\":{\\\"type\\\":\\\"tag\\\",\\\"registry\\\":true,\\\"raw\\\":\\\"max-api\\\",\\\"name\\\":\\\"max-api\\\",\\\"escapedName\\\":\\\"max-api\\\",\\\"rawSpec\\\":\\\"\\\",\\\"saveSpec\\\":null,\\\"fetchSpec\\\":\\\"latest\\\"},\\\"_requiredBy\\\":[\\\"#DEV:/\\\",\\\"#USER\\\"],\\\"_resolved\\\":\\\"https://registry.npmjs.org/max-api/-/max-api-2.0.0.tgz\\\",\\\"_shasum\\\":\\\"f93ebfc2e6358e01b9e93f266deac85688ed2513\\\",\\\"_spec\\\":\\\"max-api\\\",\\\"_where\\\":\\\"/Users/mikewilliams/Documents/Ableton Sets/Mike's Clips/Max MIDI Effect/scribble4max/scribble4max\\\",\\\"author\\\":{\\\"name\\\":\\\"Cycling '74\\\"},\\\"bugs\\\":{\\\"url\\\":\\\"https://github.com/Cycling74/n4m-max-api/issues\\\"},\\\"bundleDependencies\\\":false,\\\"contributors\\\":[{\\\"name\\\":\\\"Ben Bracken\\\",\\\"email\\\":\\\"ben@cycling74.com\\\"},{\\\"name\\\":\\\"Florian Demmer\\\",\\\"email\\\":\\\"florian@cycling74.com\\\"}],\\\"deprecated\\\":false,\\\"description\\\":\\\"Placeholder / Stub Node package for users that accidentally install \\\\\\\"max-api\\\\\\\" when attempting to use the dynamic \\\\\\\"max-api\\\\\\\" within [node.script]\\\",\\\"files\\\":[\\\"index.js\\\"],\\\"homepage\\\":\\\"https://github.com/Cycling74/n4m-max-api#readme\\\",\\\"keywords\\\":[\\\"Max\\\",\\\"Max MSP\\\",\\\"Node For Max\\\",\\\"node.script\\\",\\\"max-api\\\"],\\\"license\\\":\\\"MIT\\\",\\\"main\\\":\\\"index.js\\\",\\\"name\\\":\\\"max-api\\\",\\\"repository\\\":{\\\"type\\\":\\\"git\\\",\\\"url\\\":\\\"git+https://github.com/Cycling74/n4m-max-api.git\\\"},\\\"scripts\\\":{\\\"test\\\":\\\"echo \\\\\\\"Error: no test specified\\\\\\\" && exit 1\\\"},\\\"version\\\":\\\"2.0.0\\\"}\");\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/max-api/package.json?");

/***/ }),

/***/ "./node_modules/scribbletune/index.js":
/*!********************************************!*\
  !*** ./node_modules/scribbletune/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,\"a\",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=\"\",n(n.s=2)}([function(e,t){(()=>{\"use strict\";var e={413:e=>{e.exports=JSON.parse('{\"5th\":\"100000010000\",\"M7#5sus4\":\"100001001001\",\"7#5sus4\":\"100001001010\",\"sus4\":\"100001010000\",\"M7sus4\":\"100001010001\",\"7sus4\":\"100001010010\",\"7no5\":\"100010000010\",\"aug\":\"100010001000\",\"M7b6\":\"100010001001\",\"maj7#5\":\"100010001001\",\"7#5\":\"100010001010\",\"7b13\":\"100010001010\",\"M\":\"100010010000\",\"maj7\":\"100010010001\",\"7th\":\"100010010010\",\"6th\":\"100010010100\",\"7add6\":\"100010010110\",\"7b6\":\"100010011010\",\"Mb5\":\"100010100000\",\"M7b5\":\"100010100001\",\"7b5\":\"100010100010\",\"maj#4\":\"100010110001\",\"7#11\":\"100010110010\",\"M6#11\":\"100010110100\",\"7#11b13\":\"100010111010\",\"m#5\":\"100100001000\",\"mb6M7\":\"100100001001\",\"m7#5\":\"100100001010\",\"m\":\"100100010000\",\"m/ma7\":\"100100010001\",\"m7\":\"100100010010\",\"m6\":\"100100010100\",\"mMaj7b6\":\"100100011001\",\"dim\":\"100100100000\",\"oM7\":\"100100100001\",\"m7b5\":\"100100100010\",\"dim7\":\"100100100100\",\"o7M7\":\"100100100101\",\"4th\":\"100101000010\",\"madd4\":\"100101010000\",\"m7add11\":\"100101010010\",\"+add#9\":\"100110001000\",\"7#5#9\":\"100110001010\",\"7#9\":\"100110010010\",\"13#9\":\"100110010110\",\"7#9b13\":\"100110011010\",\"maj7#9#11\":\"100110110001\",\"7#9#11\":\"100110110010\",\"13#9#11\":\"100110110110\",\"7#9#11b13\":\"100110111010\",\"sus2\":\"101000010000\",\"M9#5sus4\":\"101001001001\",\"sus24\":\"101001010000\",\"M9sus4\":\"101001010001\",\"11th\":\"101001010010\",\"9sus4\":\"101001010010\",\"13sus4\":\"101001010110\",\"9no5\":\"101010000010\",\"13no5\":\"101010000110\",\"M#5add9\":\"101010001000\",\"maj9#5\":\"101010001001\",\"9#5\":\"101010001010\",\"9b13\":\"101010001010\",\"Madd9\":\"101010010000\",\"maj9\":\"101010010001\",\"9th\":\"101010010010\",\"6/9\":\"101010010100\",\"maj13\":\"101010010101\",\"M7add13\":\"101010010101\",\"13th\":\"101010010110\",\"M9b5\":\"101010100001\",\"9b5\":\"101010100010\",\"13b5\":\"101010100110\",\"9#5#11\":\"101010101010\",\"maj9#11\":\"101010110001\",\"9#11\":\"101010110010\",\"69#11\":\"101010110100\",\"M13#11\":\"101010110101\",\"13#11\":\"101010110110\",\"9#11b13\":\"101010111010\",\"m9#5\":\"101100001010\",\"madd9\":\"101100010000\",\"mM9\":\"101100010001\",\"m9\":\"101100010010\",\"m69\":\"101100010100\",\"m13\":\"101100010110\",\"mMaj9b6\":\"101100011001\",\"m9b5\":\"101100100010\",\"m11A\":\"101101001010\",\"m11\":\"101101010010\",\"b9sus\":\"110001010010\",\"11b9\":\"110001010010\",\"7sus4b9b13\":\"110001011010\",\"alt7\":\"110010000010\",\"7#5b9\":\"110010001010\",\"Maddb9\":\"110010010000\",\"M7b9\":\"110010010001\",\"7b9\":\"110010010010\",\"13b9\":\"110010010110\",\"7b9b13\":\"110010011010\",\"7#5b9#11\":\"110010101010\",\"7b9#11\":\"110010110010\",\"13b9#11\":\"110010110110\",\"7b9b13#11\":\"110010111010\",\"mb6b9\":\"110100001000\",\"7b9#9\":\"110110010010\"}')},722:e=>{e.exports=JSON.parse('{\"major pentatonic\":\"101010010100\",\"ionian pentatonic\":\"100011010001\",\"mixolydian pentatonic\":\"100011010010\",\"ritusen\":\"101001010100\",\"egyptian\":\"101001010010\",\"neopolitan major pentatonic\":\"100011100010\",\"vietnamese 1\":\"100101011000\",\"pelog\":\"110100011000\",\"kumoijoshi\":\"110001011000\",\"hirajoshi\":\"101100011000\",\"iwato\":\"110001100010\",\"in-sen\":\"110001010010\",\"lydian pentatonic\":\"100010110001\",\"malkos raga\":\"100101001010\",\"locrian pentatonic\":\"100101100010\",\"minor pentatonic\":\"100101010010\",\"minor six pentatonic\":\"100101010100\",\"flat three pentatonic\":\"101100010100\",\"flat six pentatonic\":\"101010011000\",\"scriabin\":\"110010010100\",\"whole tone pentatonic\":\"100010101010\",\"lydian #5P pentatonic\":\"100010101001\",\"lydian dominant pentatonic\":\"100010110010\",\"minor #7M pentatonic\":\"100101010001\",\"super locrian pentatonic\":\"100110100010\",\"minor hexatonic\":\"101101010001\",\"augmented\":\"100110011001\",\"major blues\":\"101110010100\",\"piongio\":\"101001010110\",\"prometheus neopolitan\":\"110010100110\",\"prometheus\":\"101010100110\",\"mystery #1\":\"110010101010\",\"six tone symmetric\":\"110011001100\",\"whole tone\":\"101010101010\",\"messiaen\\'s mode #5\":\"110001110001\",\"minor blues\":\"100101110010\",\"locrian major\":\"101011101010\",\"double harmonic lydian\":\"110010111001\",\"harmonic minor\":\"101101011001\",\"altered\":\"110110101010\",\"locrian #2\":\"101101101010\",\"mixolydian b6\":\"101011011010\",\"lydian dominant\":\"101010110110\",\"lydian\":\"101010110101\",\"lydian augmented\":\"101010101101\",\"dorian b2\":\"110101010110\",\"melodic minor\":\"101101010101\",\"locrian\":\"110101101010\",\"ultralocrian\":\"110110101100\",\"locrian 6\":\"110101100110\",\"augmented heptatonic\":\"100111011001\",\"romanian minor\":\"101100110110\",\"dorian #4\":\"101100110110\",\"lydian diminished\":\"101100110101\",\"phrygian\":\"110101011010\",\"leading whole tone\":\"101010101011\",\"lydian minor\":\"101010111010\",\"phrygian dominant\":\"110011011010\",\"balinese\":\"110101011001\",\"neopolitan major\":\"110101010101\",\"aeolian\":\"101101011010\",\"harmonic major\":\"101011011001\",\"double harmonic major\":\"110011011001\",\"dorian\":\"101101010110\",\"hungarian minor\":\"101100111001\",\"hungarian major\":\"100110110110\",\"oriental\":\"110011100110\",\"flamenco\":\"110110110010\",\"todi raga\":\"110100111001\",\"mixolydian\":\"101011010110\",\"persian\":\"110011101001\",\"major\":\"101011010101\",\"enigmatic\":\"110010101011\",\"major augmented\":\"101011001101\",\"lydian #9\":\"100110110101\",\"messiaen\\'s mode #4\":\"111001111001\",\"purvi raga\":\"110011111001\",\"spanish heptatonic\":\"110111011010\",\"bebop\":\"101011010111\",\"bebop minor\":\"101111010110\",\"bebop major\":\"101011011101\",\"bebop locrian\":\"110101111010\",\"minor bebop\":\"101101011011\",\"diminished\":\"101101101101\",\"ichikosucho\":\"101011110101\",\"minor six diminished\":\"101101011101\",\"half-whole diminished\":\"110110110110\",\"kafi raga\":\"100111010111\",\"messiaen\\'s mode #6\":\"101011101011\",\"composite blues\":\"101111110110\",\"messiaen\\'s mode #3\":\"101110111011\",\"messiaen\\'s mode #7\":\"111101111101\",\"chromatic\":\"111111111111\",\"ionian\":\"101011010101\",\"minor\":\"101101011010\"}')}},n={};function r(t){var i=n[t];if(void 0!==i)return i.exports;var o=n[t]={exports:{}};return e[t](o,o.exports,r),o.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})};var i={};(()=>{r.r(i),r.d(i,{chord:()=>c,chords:()=>a,inlineChord:()=>o,scale:()=>u,scales:()=>s});var e=r(722),t=r(413),n=function(n){var r=n.scale,i=n.chord,o=r||i,a=r?\"scale\":\"chord\";if(\"string\"!=typeof o)throw\"\".concat(o,\" is not a valid input for \").concat(a);var s=o.indexOf(\" \"),c=o.slice(s+1),u=o.slice(0,s),p=u.replace(/\\d/g,\"\"),d=+u.replace(/\\D/g,\"\");if(isNaN(d))throw\"\".concat(u[0],\" does not have a valid octave\");if(!e[c]&&!t[c])throw\"\".concat(o,\" is not a valid \").concat(a);for(var l=function(e,t){var n=[\"C\",\"Db\",\"D\",\"Eb\",\"E\",\"F\",\"Gb\",\"G\",\"Ab\",\"A\",\"Bb\",\"B\"].map((function(e){return e+t})),r=[\"C\",\"Db\",\"D\",\"Eb\",\"E\",\"F\",\"Gb\",\"G\",\"Ab\",\"A\",\"Bb\",\"B\"].map((function(e){return e+(t+1)})),i=n.concat(r);return i.slice(i.indexOf(e+t))}(p,d),f=[],h=0,m=0,v=r?e:t;h<v[c].length;)\"1\"===v[c][h]&&f.push(l[m]),h++,m++;return f},o=function(e){var t,r,i=\"b9sus\",o=4;return e.includes(i)?(r=i,t=e.slice(0,e.indexOf(i))):(t=e[0],r=e.slice(1),\"b\"!==e[1]&&\"#\"!==e[1]||(t+=e[1],r=e.slice(2))),e.includes(\"_\")&&(o=+e.split(\"_\")[1],r=r.slice(0,r.indexOf(\"_\"))),n({chord:t+o+\" \"+r})},a=function(){return Object.keys(t)},s=function(){return Object.keys(e)},c=function(e){return n({chord:e})},u=function(e){return n({scale:e})}})();var o=t;for(var a in i)o[a]=i[a];i.__esModule&&Object.defineProperty(o,\"__esModule\",{value:!0})})()},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.flat=t.dice=t.pickOne=t.sizzleMap=t.shuffle=t.expandStr=t.isNote=void 0,t.isNote=function(e){return/^[a-gA-G](?:#|b)?\\d$/.test(e)},t.expandStr=function(e){return e=(e=(e=(e=JSON.stringify(e.split(\"\"))).replace(/,\"\\[\",/g,\", [\")).replace(/\"\\[\",/g,\"[\")).replace(/,\"\\]\"/g,\"]\"),JSON.parse(e)},t.shuffle=function(e){var t=e.length-1;return e.forEach((function(n,r){var i=Math.round(Math.random()*t);e[r]=e[i],e[i]=n})),e},t.sizzleMap=function(e){void 0===e&&(e=127);var t=Math.PI,n=[t/6,t/4,t/3,t/2,2*t/3,3*t/4,5*t/6,t],r=[0,t/6,t/4,t/3,t/2,2*t/3,3*t/4,5*t/6];return r.reverse(),n.concat(r).map((function(t){return Math.round(Math.sin(t)*e)}))},t.pickOne=function(e){return e.length>1?e[Math.round(Math.random())]:e[0]},t.dice=function(){return!!Math.round(Math.random())},t.flat=function(e){return e.reduce((function(e,t){return e.concat(t)}),[])}},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.midi=t.arp=t.progression=t.getChordsByProgression=t.getChordDegrees=t.clip=t.chords=t.chord=t.modes=t.scales=t.mode=t.scale=void 0;var r=n(0);Object.defineProperty(t,\"scales\",{enumerable:!0,get:function(){return r.scales}}),Object.defineProperty(t,\"modes\",{enumerable:!0,get:function(){return r.scales}}),Object.defineProperty(t,\"chords\",{enumerable:!0,get:function(){return r.chords}}),Object.defineProperty(t,\"scale\",{enumerable:!0,get:function(){return r.scale}}),Object.defineProperty(t,\"mode\",{enumerable:!0,get:function(){return r.scale}}),Object.defineProperty(t,\"chord\",{enumerable:!0,get:function(){return r.chord}});var i=n(3);Object.defineProperty(t,\"clip\",{enumerable:!0,get:function(){return i.clip}});var o=n(4);Object.defineProperty(t,\"getChordDegrees\",{enumerable:!0,get:function(){return o.getChordDegrees}}),Object.defineProperty(t,\"getChordsByProgression\",{enumerable:!0,get:function(){return o.getChordsByProgression}}),Object.defineProperty(t,\"progression\",{enumerable:!0,get:function(){return o.progression}});var a=n(5);Object.defineProperty(t,\"arp\",{enumerable:!0,get:function(){return a.arp}});var s=n(6);Object.defineProperty(t,\"midi\",{enumerable:!0,get:function(){return s.midi}})},function(e,t,n){\"use strict\";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(t,\"__esModule\",{value:!0}),t.clip=void 0;var i=n(1),o=n(0),a={\"1m\":2048,\"2m\":4096,\"3m\":6144,\"4m\":8192,\"1n\":512,\"2n\":256,\"4n\":128,\"8n\":64,\"16n\":32},s=function(e){if(i.isNote(e))return[e];if(Array.isArray(e))return e.forEach((function(e){if(!i.isNote(e))throw new TypeError(\"array must comprise valid notes\")})),e;if(!Array.isArray(e)){var t=o.inlineChord(e);if(t&&t.length)return t}throw new Error(\"Chord \"+e+\" not found\")};t.clip=function(e){if(\"string\"==typeof(e=r(r({},{notes:[\"C4\"],pattern:\"x\",shuffle:!1,sizzle:!1,sizzleReps:1,arpegiate:!1,subdiv:\"4n\",amp:100,accentLow:70,randomNotes:null,effects:[],offlineRendering:!1}),e||{})).notes&&(e.notes=e.notes.replace(/\\s{2,}/g,\" \"),e.notes=e.notes.split(\" \")),e.notes=e.notes.map(s),/[^x\\-_\\[\\]R]/.test(e.pattern))throw new TypeError(\"pattern can only comprise x - _ [ ], found \"+e.pattern);e.shuffle&&(e.notes=i.shuffle(e.notes)),e.randomNotes&&\"string\"==typeof e.randomNotes&&(e.randomNotes=e.randomNotes.replace(/\\s{2,}/g,\" \").split(/\\s/)),e.randomNotes&&(e.randomNotes=e.randomNotes.map(s));var t=[],n=0,o=function(r,i,a){var s=0;r.forEach((function(c,u){if(\"string\"==typeof c){var p=\"-\"===c?null:e.notes[n];if(\"R\"===c&&(Math.round(Math.random())||e.randomNotes)&&(p=e.randomNotes?e.randomNotes[Math.round(Math.random()*(e.randomNotes.length-1))]:e.notes[n]),\"x\"!==c&&\"R\"!==c||n++,\"x\"!==c&&\"-\"!==c&&\"R\"!==c||(t.push({note:p,length:i,level:\"R\"!==c||e.randomNotes?e.amp:e.accentLow}),s+=i),\"_\"===c&&t.length&&(t[t.length-1].length+=i,s+=i),a&&s!==a&&u===r.length-1){var d=Math.abs(a-s),l=t[t.length-1];l.length>d?l.length=l.length-d:l.length=l.length+d}n===e.notes.length&&(n=0)}if(Array.isArray(c)){var f=!1;c.length%2==0&&i%2==0||(f=!0),o(c,Math.round(i/c.length),f&&i),s+=i}}))};if(o(i.expandStr(e.pattern),a[e.subdiv]||a[\"4n\"],!1),e.sizzle){var c=[],u=!0===e.sizzle?\"sin\":e.sizzle,p=t.length,d=e.amp,l=e.sizzleReps,f=d/(p/l);if(\"sin\"===u||\"cos\"===u)for(var h=0;h<p;h++){var m=Math[u](h*Math.PI/(p/l))*d;c.push(Math.round(Math.abs(m)))}if(\"rampUp\"===u)for(m=0,h=0;h<p;h++)h%(p/l)==0?m=0:m+=f,c.push(Math.round(Math.abs(m)));if(\"rampDown\"===u)for(m=d,h=0;h<p;h++)h%(p/l)==0?m=d:m-=f,c.push(Math.round(Math.abs(m)));for(h=0;h<c.length;h++)t[h].level=c[h]?c[h]:1}if(e.accent){if(/[^x\\-]/.test(e.accent))throw new TypeError(\"Accent can only have x and - characters\");for(var v=0,y=0,b=t;y<b.length;y++){var g=b[y];m=\"x\"===e.accent[v]?e.amp:e.accentLow;e.sizzle&&(m=(g.level+m)/2),g.level=Math.round(m),(v+=1)===e.accent.length&&(v=0)}}return t}},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.progression=t.getChordsByProgression=t.getChordDegrees=void 0;var r=n(0),i=n(1);t.getChordDegrees=function(e){var t={ionian:[\"I\",\"ii\",\"iii\",\"IV\",\"V\",\"vi\",\"vii°\"],dorian:[\"i\",\"ii\",\"III\",\"IV\",\"v\",\"vi°\",\"VII\"],phrygian:[\"i\",\"II\",\"III\",\"iv\",\"v°\",\"VI\",\"vii\"],lydian:[\"I\",\"II\",\"iii\",\"iv°\",\"V\",\"vi\",\"vii\"],mixolydian:[\"I\",\"ii\",\"iii°\",\"IV\",\"v\",\"vi\",\"VII\"],aeolian:[\"i\",\"ii°\",\"III\",\"iv\",\"v\",\"VI\",\"VII\"],locrian:[\"i°\",\"II\",\"iii\",\"iv\",\"V\",\"VI\",\"vii\"],\"melodic minor\":[\"i\",\"ii\",\"III+\",\"IV\",\"V\",\"vi°\",\"vii°\"],\"harmonic minor\":[\"i\",\"ii°\",\"III+\",\"iv\",\"V\",\"VI\",\"vii°\"]};return t.major=t.ionian,t.minor=t.aeolian,t[e]||[]};var o={i:0,ii:1,iii:2,iv:3,v:4,vi:5,vii:6};t.getChordsByProgression=function(e,t){var n=e.split(\" \");n[0].match(/\\d/)||(n[0]+=\"4\",e=n.join(\" \"));var i=r.scale(e);return t.replace(/\\s*,+\\s*/g,\" \").split(\" \").map((function(e,t){var n=function(e){var t=e.replace(/\\W/g,\"\"),n=\"M\";return t.toLowerCase()===t&&(n=\"m\"),e.indexOf(\"°\")>-1?n+\"7b5\":e.indexOf(\"+\")>-1?n+\"#5\":e.indexOf(\"7\")>-1?\"M\"===n?\"maj7\":\"m7\":n}(e),r=o[e.replace(/\\W|\\d/g,\"\").toLowerCase()],a=i[r],s=a.replace(/\\D+/,\"\");return a.replace(/\\d/,\"\")+n+\"_\"+s})).toString().replace(/,/g,\" \")};var a=function(e){var t=e.T,n=e.P,r=e.D;return function(e){void 0===e&&(e=4);var o=[];o.push(i.pickOne(t));var a=1;for(a<e-1&&(o.push(i.pickOne(n)),a++),a<e-1&&i.dice()&&(o.push(i.pickOne(n)),a++),a<e-1&&(o.push(i.pickOne(r)),a++),a<e-1&&(o.push(i.pickOne(n)),a++),a<e-1&&(o.push(i.pickOne(r)),a++),a<e-1&&i.dice()&&(o.push(i.pickOne(n)),a++);a<e;)o.push(i.pickOne(r)),a++;return o}},s=a({T:[\"I\",\"vi\"],P:[\"ii\",\"IV\"],D:[\"V\"]}),c=a({T:[\"i\",\"VI\"],P:[\"ii\",\"iv\"],D:[\"V\"]});t.progression=function(e,t){return void 0===t&&(t=4),\"major\"===e||\"M\"===e?s(t):\"minor\"===e||\"m\"===e?c(t):void 0}},function(e,t,n){\"use strict\";var r=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],a=0,s=o.length;a<s;a++,i++)r[i]=o[a];return r};Object.defineProperty(t,\"__esModule\",{value:!0}),t.arp=void 0;var i=n(0),o=function(e,t){var n=function(e){return e.replace(/\\d/,\"\")+(+e.replace(/\\D/g,\"\")+1)},i=e.map(n),o=i.map(n);return r(e,i,o).slice(0,t)};t.arp=function(e){var t=[],n={count:4,order:\"0123\",chords:\"\"};if(\"string\"==typeof e)n.chords=e;else{if(e.order&&e.order.match(/\\D/g))throw new TypeError(\"Invalid value for order\");if(e.count>8||e.count<2)throw new TypeError(\"Invalid value for count\");e.count&&!e.order&&(n.order=Array.from(Array(e.count).keys()).join(\"\")),Object.assign(n,e)}if(\"string\"==typeof n.chords)for(var a=function(e){var a=o(i.inlineChord(e),n.count),s=n.order.split(\"\").map((function(e){return a[e]}));t=r(t,s)},s=0,c=n.chords.split(\" \");s<c.length;s++){a(c[s])}else{if(!Array.isArray(n.chords))throw new TypeError(\"Invalid value for chords\");for(var u=function(e){var i=o(e,n.count),a=n.order.split(\"\").map((function(e){return i[e]}));t=r(t,a)},p=0,d=n.chords;p<d.length;p++){u(d[p])}}return t}},function(e,t,n){\"use strict\";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,\"default\",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)\"default\"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return i(t,e),t},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,\"__esModule\",{value:!0}),t.midi=void 0;var s=a(n(7)),c=o(n(8));t.midi=function(e,t,n){void 0===t&&(t=\"music.mid\");var r=p(e,n).toBytes();return null===t?r:(t.endsWith(\".mid\")||(t+=\".mid\"),\"undefined\"!=typeof window&&window.URL&&window.URL.createObjectURL?u(r,t):(s.default.writeFileSync(t,r,\"binary\"),void console.log(\"MIDI file generated: \"+t+\".\")))};var u=function(e,t){for(var n=new Uint8Array(e.length),r=0;r<e.length;r++){var i=e.charCodeAt(r);n[r]=i}var o=new Blob([n],{type:\"audio/midi\"}),a=document.createElement(\"a\");return a.href=\"undefined\"!=typeof window&&void 0!==window.URL&&void 0!==window.URL.createObjectURL&&window.URL.createObjectURL(o)||\"\",a.download=t,a.innerText=\"Download MIDI file\",a},p=function(e,t){var n=new c.File,r=new c.Track;\"number\"==typeof t&&r.setTempo(t),n.addTrack(r);for(var i=0,o=e;i<o.length;i++){var a=o[i],s=a.level||127;a.note?\"string\"==typeof a.note?(r.noteOn(0,a.note,a.length,s),r.noteOff(0,a.note,a.length,s)):r.addChord(0,a.note,a.length,s):r.noteOff(0,\"\",a.length)}return n}},function(e,t){e.exports=__webpack_require__(/*! fs */ \"fs\")},function(e,t,n){(function(e){var n={};!function(e){var t=e.DEFAULT_VOLUME=90,n=(e.DEFAULT_DURATION=128,e.DEFAULT_CHANNEL=0,{midi_letter_pitches:{a:21,b:23,c:12,d:14,e:16,f:17,g:19},midiPitchFromNote:function(e){var t=/([a-g])(#+|b+)?([0-9]+)$/i.exec(e),r=t[1].toLowerCase(),i=t[2]||\"\";return 12*parseInt(t[3],10)+n.midi_letter_pitches[r]+(\"#\"==i.substr(0,1)?1:-1)*i.length},ensureMidiPitch:function(e){return\"number\"!=typeof e&&/[^0-9]/.test(e)?n.midiPitchFromNote(e):parseInt(e,10)},midi_pitches_letter:{12:\"c\",13:\"c#\",14:\"d\",15:\"d#\",16:\"e\",17:\"f\",18:\"f#\",19:\"g\",20:\"g#\",21:\"a\",22:\"a#\",23:\"b\"},midi_flattened_notes:{\"a#\":\"bb\",\"c#\":\"db\",\"d#\":\"eb\",\"f#\":\"gb\",\"g#\":\"ab\"},noteFromMidiPitch:function(e,t){var r,i=0,o=e;t=t||!1;return e>23&&(o=e-12*(i=Math.floor(e/12)-1)),r=n.midi_pitches_letter[o],t&&r.indexOf(\"#\")>0&&(r=n.midi_flattened_notes[r]),r+i},mpqnFromBpm:function(e){var t=Math.floor(6e7/e),n=[];do{n.unshift(255&t),t>>=8}while(t);for(;n.length<3;)n.push(0);return n},bpmFromMpqn:function(e){if(void 0!==e[0]){0;for(var t=0,n=e.length-1;n>=0;++t,--n)e[t]<<n}return Math.floor(6e7/e)},codes2Str:function(e){return String.fromCharCode.apply(null,e)},str2Bytes:function(e,t){if(t)for(;e.length/2<t;)e=\"0\"+e;for(var n=[],r=e.length-1;r>=0;r-=2){var i=0===r?e[r]:e[r-1]+e[r];n.unshift(parseInt(i,16))}return n},translateTickTime:function(e){for(var t=127&e;e>>=7;)t<<=8,t|=127&e|128;for(var n=[];n.push(255&t),128&t;)t>>=8;return n}}),r=function(e){if(!this)return new r(e);!e||null===e.type&&void 0===e.type||null===e.channel&&void 0===e.channel||null===e.param1&&void 0===e.param1||(this.setTime(e.time),this.setType(e.type),this.setChannel(e.channel),this.setParam1(e.param1),this.setParam2(e.param2))};r.NOTE_OFF=128,r.NOTE_ON=144,r.AFTER_TOUCH=160,r.CONTROLLER=176,r.PROGRAM_CHANGE=192,r.CHANNEL_AFTERTOUCH=208,r.PITCH_BEND=224,r.prototype.setTime=function(e){this.time=n.translateTickTime(e||0)},r.prototype.setType=function(e){if(e<r.NOTE_OFF||e>r.PITCH_BEND)throw new Error(\"Trying to set an unknown event: \"+e);this.type=e},r.prototype.setChannel=function(e){if(e<0||e>15)throw new Error(\"Channel is out of bounds.\");this.channel=e},r.prototype.setParam1=function(e){this.param1=e},r.prototype.setParam2=function(e){this.param2=e},r.prototype.toBytes=function(){var e=[],t=this.type|15&this.channel;return e.push.apply(e,this.time),e.push(t),e.push(this.param1),void 0!==this.param2&&null!==this.param2&&e.push(this.param2),e};var i=function(e){if(!this)return new i(e);this.setTime(e.time),this.setType(e.type),this.setData(e.data)};i.SEQUENCE=0,i.TEXT=1,i.COPYRIGHT=2,i.TRACK_NAME=3,i.INSTRUMENT=4,i.LYRIC=5,i.MARKER=6,i.CUE_POINT=7,i.CHANNEL_PREFIX=32,i.END_OF_TRACK=47,i.TEMPO=81,i.SMPTE=84,i.TIME_SIG=88,i.KEY_SIG=89,i.SEQ_EVENT=127,i.prototype.setTime=function(e){this.time=n.translateTickTime(e||0)},i.prototype.setType=function(e){this.type=e},i.prototype.setData=function(e){this.data=e},i.prototype.toBytes=function(){if(!this.type)throw new Error(\"Type for meta-event not specified.\");var e=[];if(e.push.apply(e,this.time),e.push(255,this.type),Array.isArray(this.data))e.push(this.data.length),e.push.apply(e,this.data);else if(\"number\"==typeof this.data)e.push(1,this.data);else if(null!==this.data&&void 0!==this.data){e.push(this.data.length);var t=this.data.split(\"\").map((function(e){return e.charCodeAt(0)}));e.push.apply(e,t)}else e.push(0);return e};var o=function(e){if(!this)return new o(e);var t=e||{};this.events=t.events||[]};o.START_BYTES=[77,84,114,107],o.END_BYTES=[0,255,47,0],o.prototype.addEvent=function(e){return this.events.push(e),this},o.prototype.addNoteOn=o.prototype.noteOn=function(e,i,o,a){return this.events.push(new r({type:r.NOTE_ON,channel:e,param1:n.ensureMidiPitch(i),param2:a||t,time:o||0})),this},o.prototype.addNoteOff=o.prototype.noteOff=function(e,i,o,a){return this.events.push(new r({type:r.NOTE_OFF,channel:e,param1:n.ensureMidiPitch(i),param2:a||t,time:o||0})),this},o.prototype.addNote=o.prototype.note=function(e,t,n,r,i){return this.noteOn(e,t,r,i),n&&this.noteOff(e,t,n,i),this},o.prototype.addChord=o.prototype.chord=function(e,t,n,r){if(!Array.isArray(t)&&!t.length)throw new Error(\"Chord must be an array of pitches\");return t.forEach((function(t){this.noteOn(e,t,0,r)}),this),t.forEach((function(t,r){0===r?this.noteOff(e,t,n):this.noteOff(e,t)}),this),this},o.prototype.setInstrument=o.prototype.instrument=function(e,t,n){return this.events.push(new r({type:r.PROGRAM_CHANGE,channel:e,param1:t,time:n||0})),this},o.prototype.setTempo=o.prototype.tempo=function(e,t){return this.events.push(new i({type:i.TEMPO,data:n.mpqnFromBpm(e),time:t||0})),this},o.prototype.toBytes=function(){var e=0,t=[],r=o.START_BYTES,i=o.END_BYTES;this.events.forEach((function(n){var r=n.toBytes();e+=r.length,t.push.apply(t,r)})),e+=i.length;var a=n.str2Bytes(e.toString(16),4);return r.concat(a,t,i)};var a=function(e){if(!this)return new a(e);var t=e||{};if(t.ticks){if(\"number\"!=typeof t.ticks)throw new Error(\"Ticks per beat must be a number!\");if(t.ticks<=0||t.ticks>=32768||t.ticks%1!=0)throw new Error(\"Ticks per beat must be an integer between 1 and 32767!\")}this.ticks=t.ticks||128,this.tracks=t.tracks||[]};a.HDR_CHUNKID=\"MThd\",a.HDR_CHUNK_SIZE=\"\\0\\0\\0\u0006\",a.HDR_TYPE0=\"\\0\\0\",a.HDR_TYPE1=\"\\0\u0001\",a.prototype.addTrack=function(e){return e?(this.tracks.push(e),this):(e=new o,this.tracks.push(e),e)},a.prototype.toBytes=function(){var e=this.tracks.length.toString(16),t=a.HDR_CHUNKID+a.HDR_CHUNK_SIZE;return parseInt(e,16)>1?t+=a.HDR_TYPE1:t+=a.HDR_TYPE0,t+=n.codes2Str(n.str2Bytes(e,2)),t+=String.fromCharCode(this.ticks/256,this.ticks%256),this.tracks.forEach((function(e){t+=n.codes2Str(e.toBytes())})),t},e.Util=n,e.File=a,e.Track=o,e.Event=r,e.MetaEvent=i}(n),null!==e?e.exports=n:null!==t?t=n:this.Midi=n}).call(this,n(9)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,\"loaded\",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,\"id\",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}]));\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/scribbletune/index.js?");

/***/ }),

/***/ "./src/newriff.js":
/*!************************!*\
  !*** ./src/newriff.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar maxApi = __webpack_require__(/*! max-api */ \"./node_modules/max-api/index.js\");\n\nvar scribble = __webpack_require__(/*! scribbletune */ \"./node_modules/scribbletune/index.js\");\n\nmaxApi.post('hello from v4 in riff');\n\nvar repeat = function repeat(str) {\n  var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n  var replacedStr = '';\n\n  for (var i = 0; i < count; i++) {\n    replacedStr += str;\n  }\n\n  return replacedStr;\n};\n\nmaxApi.addHandler('makeClip', function () {\n  //we create an event handler function to contain the script. For more information on how this works, see Node for Max documantation https://docs.cycling74.com/nodeformax/api/\n  var constructClip = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var parameters, _parameters$scale, scale, _parameters$pattern, pattern, _parameters$ab, ab, _parameters$subdiv, subdiv, sizzle, _parameters$sizzleRep, sizzleReps, useScaleNotesForR, repeatPattern, mode, clipA, clipB, clipC, clip;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return maxApi.getDict('parameters');\n\n          case 2:\n            parameters = _context.sent;\n            //we fetch the main dictionary \"parameters\"\n            //we retrieve the parameters\n            _parameters$scale = parameters.scale, scale = _parameters$scale === void 0 ? 'C3 phrygian' : _parameters$scale, _parameters$pattern = parameters.pattern, pattern = _parameters$pattern === void 0 ? 'x-xRx_RR' : _parameters$pattern, _parameters$ab = parameters.ab, ab = _parameters$ab === void 0 ? 'AAAB' : _parameters$ab, _parameters$subdiv = parameters.subdiv, subdiv = _parameters$subdiv === void 0 ? 0 : _parameters$subdiv, sizzle = parameters.sizzle, _parameters$sizzleRep = parameters.sizzleReps, sizzleReps = _parameters$sizzleRep === void 0 ? 1 : _parameters$sizzleRep, useScaleNotesForR = parameters.useScaleNotesForR, repeatPattern = parameters.repeatPattern; // The Riff logic comes here\n\n            sizzle = sizzle === 'none' ? false : sizzle;\n            useScaleNotesForR = !!parseInt(useScaleNotesForR);\n            repeatPattern = parseInt(repeatPattern);\n            mode = scribble.scale(scale);\n            clipA = scribble.clip({\n              notes: mode[0],\n              pattern: repeat(pattern, repeatPattern),\n              randomNotes: useScaleNotesForR ? mode.slice(1) : null,\n              subdiv: subdiv,\n              sizzle: sizzle,\n              sizzleReps: sizzleReps\n            });\n            clipB = scribble.clip({\n              notes: mode[0],\n              pattern: repeat(pattern, repeatPattern),\n              randomNotes: useScaleNotesForR ? mode.slice(2) : null,\n              subdiv: subdiv,\n              sizzle: sizzle,\n              sizzleReps: sizzleReps\n            });\n            clipC = scribble.clip({\n              notes: mode[1],\n              pattern: repeat(pattern, repeatPattern),\n              randomNotes: useScaleNotesForR ? mode.slice(3) : null,\n              subdiv: subdiv,\n              sizzle: sizzle,\n              sizzleReps: sizzleReps\n            });\n\n            clip = function () {\n              // AAAB AB A AABB BAAA ABA BAB AABC ABBC ABCC ABC BAC CBA\n              return ab.split('').reduce(function (acc, b) {\n                switch (b) {\n                  case 'A':\n                    acc = [].concat(_toConsumableArray(acc), _toConsumableArray(clipA));\n                    break;\n\n                  case 'B':\n                    acc = [].concat(_toConsumableArray(acc), _toConsumableArray(clipB));\n                    break;\n\n                  case 'C':\n                    acc = [].concat(_toConsumableArray(acc), _toConsumableArray(clipC));\n                    break;\n                }\n\n                return acc;\n              }, []);\n            }();\n\n            _context.next = 14;\n            return (//we send the Scribbletune clip to the other dictionary\n              maxApi.setDict('clip1', {\n                scribbleObjects: clip\n              })\n            );\n\n          case 14:\n            maxApi.outlet('bang'); //we send a bang out to let the rest of the patch know to do its thing\n\n          case 15:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }))();\n});\n\n//# sourceURL=webpack://%5Bname%5D/./src/newriff.js?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack://%5Bname%5D/external_%22fs%22?");

/***/ })

/******/ });
=======
const maxApi = require('max-api');
const scribble = require('scribbletune');

maxApi.post('hello from v4 in riff');

const repeat = (str, count = 1) => {
  let replacedStr = '';
  for (let i = 0; i < count; i++) {
    replacedStr += str;
  }
  return replacedStr;
};

maxApi.addHandler('makeClip', () => {
  //we create an event handler function to contain the script. For more information on how this works, see Node for Max documantation https://docs.cycling74.com/nodeformax/api/
  const constructClip = (async () => {
    const parameters = await maxApi.getDict('parameters'); //we fetch the main dictionary "parameters"

    //we retrieve the parameters
    let {
      scale = 'C3 phrygian',
      pattern = 'x-xRx_RR',
      ab = 'AAAB',
      subdiv = 0,
      sizzle,
      sizzleReps = 1,
      useScaleNotesForR,
      repeatPattern,
    } = parameters;

    // The Riff logic comes here
    sizzle = sizzle === 'none' ? false : sizzle;
    useScaleNotesForR = !!parseInt(useScaleNotesForR);
    repeatPattern = parseInt(repeatPattern);
    const mode = scribble.scale(scale);

    const clipA = scribble.clip({
      notes: mode[0],
      pattern: repeat(pattern, repeatPattern),
      randomNotes: useScaleNotesForR ? mode.slice(1) : null,
      subdiv,
      sizzle,
      sizzleReps,
    });

    const clipB = scribble.clip({
      notes: mode[0],
      pattern: repeat(pattern, repeatPattern),
      randomNotes: useScaleNotesForR ? mode.slice(2) : null,
      subdiv,
      sizzle,
      sizzleReps,
    });

    const clipC = scribble.clip({
      notes: mode[1],
      pattern: repeat(pattern, repeatPattern),
      randomNotes: useScaleNotesForR ? mode.slice(3) : null,
      subdiv,
      sizzle,
      sizzleReps,
    });

    const clip = (() => {
      // AAAB AB A AABB BAAA ABA BAB AABC ABBC ABCC ABC BAC CBA
      return ab.split('').reduce((acc, b) => {
        switch (b) {
          case 'A':
            acc = [...acc, ...clipA];
            break;

          case 'B':
            acc = [...acc, ...clipB];
            break;

          case 'C':
            acc = [...acc, ...clipC];
            break;
        }

        return acc;
      }, []);
    })();

    await //we send the Scribbletune clip to the other dictionary
    maxApi.setDict('clip1', {
      scribbleObjects: clip,
    });

    maxApi.outlet('bang'); //we send a bang out to let the rest of the patch know to do its thing
  })();
});
>>>>>>> upstream/master
