module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/TextBody.js":
/*!********************************!*\
  !*** ./components/TextBody.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/paulmurff/CodeProjects/interviews/ldschurch-webdev/components/TextBody.js";



function TextBody() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2861737818",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2861737818",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci nulla pellentesque dignissim enim sit amet venenatis urna. Pharetra et ultrices neque ornare. Sem et tortor consequat id porta nibh venenatis. Ac turpis egestas maecenas pharetra convallis posuere morbi leo. Morbi tristique senectus et netus et. Elementum eu facilisis sed odio morbi quis. Mauris ultrices eros in cursus turpis. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Commodo elit at imperdiet dui accumsan sit amet. Maecenas ultricies mi eget mauris. Volutpat maecenas volutpat blandit aliquam etiam erat. Et netus et malesuada fames ac turpis."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2861737818",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Ac tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Aliquet bibendum enim facilisis gravida neque. Nisl nisi scelerisque eu ultrices vitae auctor. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Est ullamcorper eget nulla facilisi etiam dignissim diam. Magna fringilla urna porttitor rhoncus dolor purus. Hendrerit gravida rutrum quisque non tellus orci ac. Amet justo donec enim diam vulputate ut pharetra. Pellentesque diam volutpat commodo sed egestas egestas. Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Quis auctor elit sed vulputate. Sodales ut eu sem integer vitae justo eget magna. Mi quis hendrerit dolor magna eget est lorem. Egestas sed tempus urna et pharetra pharetra massa. Consequat nisl vel pretium lectus quam id leo in vitae. Vel risus commodo viverra maecenas accumsan lacus. Turpis cursus in hac habitasse platea. Tristique et egestas quis ipsum."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2861737818",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Vitae turpis massa sed elementum tempus. Nunc sed id semper risus in hendrerit gravida rutrum. Malesuada bibendum arcu vitae elementum. Malesuada proin libero nunc consequat interdum varius. Nisi scelerisque eu ultrices vitae auctor. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Lectus quam id leo in vitae. Ultricies lacus sed turpis tincidunt id aliquet risus feugiat in. Et netus et malesuada fames ac turpis egestas maecenas pharetra. Viverra orci sagittis eu volutpat odio. Nunc sed velit dignissim sodales ut eu. Eget velit aliquet sagittis id consectetur purus ut faucibus. Quis vel eros donec ac odio tempor orci dapibus ultrices. Eu augue ut lectus arcu. Et malesuada fames ac turpis egestas sed tempus urna. Tristique magna sit amet purus gravida quis blandit turpis. Varius quam quisque id diam vel quam elementum pulvinar etiam."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-2861737818",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Sub Heading "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2861737818",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Turpis tincidunt id aliquet risus feugiat in ante metus. Amet volutpat consequat mauris nunc congue nisi. Ipsum dolor sit amet consectetur adipiscing. Faucibus pulvinar elementum integer enim neque volutpat. Lorem ipsum dolor sit amet consectetur adipiscing elit duis tristique. Vel pretium lectus quam id. Ultricies lacus sed turpis tincidunt id aliquet risus. Lectus arcu bibendum at varius vel. Urna et pharetra pharetra massa massa. Nibh mauris cursus mattis molestie."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "24893833",
    __self: this
  }, "p.jsx-2861737818{color:blue;font-family:'Open Sans',sans-serif;}div.jsx-2861737818{background:red;}@media (max-width:600px){div.jsx-2861737818{background:blue;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXVsbXVyZmYvQ29kZVByb2plY3RzL2ludGVydmlld3MvbGRzY2h1cmNoLXdlYmRldi9jb21wb25lbnRzL1RleHRCb2R5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCb0IsQUFHd0IsQUFLSSxBQUlHLFdBUmtCLElBS3RDLENBSUUsOEJBUEYiLCJmaWxlIjoiL1VzZXJzL3BhdWxtdXJmZi9Db2RlUHJvamVjdHMvaW50ZXJ2aWV3cy9sZHNjaHVyY2gtd2ViZGV2L2NvbXBvbmVudHMvVGV4dEJvZHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5cbmZ1bmN0aW9uIFRleHRCb2R5KCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gT3JjaSBudWxsYSBwZWxsZW50ZXNxdWUgZGlnbmlzc2ltIGVuaW0gc2l0IGFtZXQgdmVuZW5hdGlzIHVybmEuIFBoYXJldHJhIGV0IHVsdHJpY2VzIG5lcXVlIG9ybmFyZS4gU2VtIGV0IHRvcnRvciBjb25zZXF1YXQgaWQgcG9ydGEgbmliaCB2ZW5lbmF0aXMuIEFjIHR1cnBpcyBlZ2VzdGFzIG1hZWNlbmFzIHBoYXJldHJhIGNvbnZhbGxpcyBwb3N1ZXJlIG1vcmJpIGxlby4gTW9yYmkgdHJpc3RpcXVlIHNlbmVjdHVzIGV0IG5ldHVzIGV0LiBFbGVtZW50dW0gZXUgZmFjaWxpc2lzIHNlZCBvZGlvIG1vcmJpIHF1aXMuIE1hdXJpcyB1bHRyaWNlcyBlcm9zIGluIGN1cnN1cyB0dXJwaXMuIFJob25jdXMgZXN0IHBlbGxlbnRlc3F1ZSBlbGl0IHVsbGFtY29ycGVyIGRpZ25pc3NpbSBjcmFzIHRpbmNpZHVudCBsb2JvcnRpcyBmZXVnaWF0LiBDb21tb2RvIGVsaXQgYXQgaW1wZXJkaWV0IGR1aSBhY2N1bXNhbiBzaXQgYW1ldC4gTWFlY2VuYXMgdWx0cmljaWVzIG1pIGVnZXQgbWF1cmlzLiBWb2x1dHBhdCBtYWVjZW5hcyB2b2x1dHBhdCBibGFuZGl0IGFsaXF1YW0gZXRpYW0gZXJhdC4gRXQgbmV0dXMgZXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+QWMgdG9ydG9yIHZpdGFlIHB1cnVzIGZhdWNpYnVzIG9ybmFyZSBzdXNwZW5kaXNzZSBzZWQgbmlzaSBsYWN1cy4gQWxpcXVldCBiaWJlbmR1bSBlbmltIGZhY2lsaXNpcyBncmF2aWRhIG5lcXVlLiBOaXNsIG5pc2kgc2NlbGVyaXNxdWUgZXUgdWx0cmljZXMgdml0YWUgYXVjdG9yLiBTZWQgdWxsYW1jb3JwZXIgbW9yYmkgdGluY2lkdW50IG9ybmFyZSBtYXNzYSBlZ2V0IGVnZXN0YXMgcHVydXMuIEVzdCB1bGxhbWNvcnBlciBlZ2V0IG51bGxhIGZhY2lsaXNpIGV0aWFtIGRpZ25pc3NpbSBkaWFtLiBNYWduYSBmcmluZ2lsbGEgdXJuYSBwb3J0dGl0b3IgcmhvbmN1cyBkb2xvciBwdXJ1cy4gSGVuZHJlcml0IGdyYXZpZGEgcnV0cnVtIHF1aXNxdWUgbm9uIHRlbGx1cyBvcmNpIGFjLiBBbWV0IGp1c3RvIGRvbmVjIGVuaW0gZGlhbSB2dWxwdXRhdGUgdXQgcGhhcmV0cmEuIFBlbGxlbnRlc3F1ZSBkaWFtIHZvbHV0cGF0IGNvbW1vZG8gc2VkIGVnZXN0YXMgZWdlc3Rhcy4gVml2ZXJyYSBtYXVyaXMgaW4gYWxpcXVhbSBzZW0gZnJpbmdpbGxhIHV0IG1vcmJpIHRpbmNpZHVudC4gUXVpcyBhdWN0b3IgZWxpdCBzZWQgdnVscHV0YXRlLiBTb2RhbGVzIHV0IGV1IHNlbSBpbnRlZ2VyIHZpdGFlIGp1c3RvIGVnZXQgbWFnbmEuIE1pIHF1aXMgaGVuZHJlcml0IGRvbG9yIG1hZ25hIGVnZXQgZXN0IGxvcmVtLiBFZ2VzdGFzIHNlZCB0ZW1wdXMgdXJuYSBldCBwaGFyZXRyYSBwaGFyZXRyYSBtYXNzYS4gQ29uc2VxdWF0IG5pc2wgdmVsIHByZXRpdW0gbGVjdHVzIHF1YW0gaWQgbGVvIGluIHZpdGFlLiBWZWwgcmlzdXMgY29tbW9kbyB2aXZlcnJhIG1hZWNlbmFzIGFjY3Vtc2FuIGxhY3VzLiBUdXJwaXMgY3Vyc3VzIGluIGhhYyBoYWJpdGFzc2UgcGxhdGVhLiBUcmlzdGlxdWUgZXQgZWdlc3RhcyBxdWlzIGlwc3VtLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cD5WaXRhZSB0dXJwaXMgbWFzc2Egc2VkIGVsZW1lbnR1bSB0ZW1wdXMuIE51bmMgc2VkIGlkIHNlbXBlciByaXN1cyBpbiBoZW5kcmVyaXQgZ3JhdmlkYSBydXRydW0uIE1hbGVzdWFkYSBiaWJlbmR1bSBhcmN1IHZpdGFlIGVsZW1lbnR1bS4gTWFsZXN1YWRhIHByb2luIGxpYmVybyBudW5jIGNvbnNlcXVhdCBpbnRlcmR1bSB2YXJpdXMuIE5pc2kgc2NlbGVyaXNxdWUgZXUgdWx0cmljZXMgdml0YWUgYXVjdG9yLiBDb25zZWN0ZXR1ciBwdXJ1cyB1dCBmYXVjaWJ1cyBwdWx2aW5hciBlbGVtZW50dW0gaW50ZWdlciBlbmltIG5lcXVlIHZvbHV0cGF0LiBMZWN0dXMgcXVhbSBpZCBsZW8gaW4gdml0YWUuIFVsdHJpY2llcyBsYWN1cyBzZWQgdHVycGlzIHRpbmNpZHVudCBpZCBhbGlxdWV0IHJpc3VzIGZldWdpYXQgaW4uIEV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3RhcyBtYWVjZW5hcyBwaGFyZXRyYS4gVml2ZXJyYSBvcmNpIHNhZ2l0dGlzIGV1IHZvbHV0cGF0IG9kaW8uIE51bmMgc2VkIHZlbGl0IGRpZ25pc3NpbSBzb2RhbGVzIHV0IGV1LiBFZ2V0IHZlbGl0IGFsaXF1ZXQgc2FnaXR0aXMgaWQgY29uc2VjdGV0dXIgcHVydXMgdXQgZmF1Y2lidXMuIFF1aXMgdmVsIGVyb3MgZG9uZWMgYWMgb2RpbyB0ZW1wb3Igb3JjaSBkYXBpYnVzIHVsdHJpY2VzLiBFdSBhdWd1ZSB1dCBsZWN0dXMgYXJjdS4gRXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzIHNlZCB0ZW1wdXMgdXJuYS4gVHJpc3RpcXVlIG1hZ25hIHNpdCBhbWV0IHB1cnVzIGdyYXZpZGEgcXVpcyBibGFuZGl0IHR1cnBpcy4gVmFyaXVzIHF1YW0gcXVpc3F1ZSBpZCBkaWFtIHZlbCBxdWFtIGVsZW1lbnR1bSBwdWx2aW5hciBldGlhbS5cbiAgICAgICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgICAgICA8aDQ+U3ViIEhlYWRpbmcgPC9oND5cbiAgICAgICAgICAgICAgICA8cD5OdW5jIG1pIGlwc3VtIGZhdWNpYnVzIHZpdGFlIGFsaXF1ZXQgbmVjIHVsbGFtY29ycGVyLiBUdXJwaXMgdGluY2lkdW50IGlkIGFsaXF1ZXQgcmlzdXMgZmV1Z2lhdCBpbiBhbnRlIG1ldHVzLiBBbWV0IHZvbHV0cGF0IGNvbnNlcXVhdCBtYXVyaXMgbnVuYyBjb25ndWUgbmlzaS4gSXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzY2luZy4gRmF1Y2lidXMgcHVsdmluYXIgZWxlbWVudHVtIGludGVnZXIgZW5pbSBuZXF1ZSB2b2x1dHBhdC4gTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0IGR1aXMgdHJpc3RpcXVlLiBWZWwgcHJldGl1bSBsZWN0dXMgcXVhbSBpZC4gVWx0cmljaWVzIGxhY3VzIHNlZCB0dXJwaXMgdGluY2lkdW50IGlkIGFsaXF1ZXQgcmlzdXMuIExlY3R1cyBhcmN1IGJpYmVuZHVtIGF0IHZhcml1cyB2ZWwuIFVybmEgZXQgcGhhcmV0cmEgcGhhcmV0cmEgbWFzc2EgbWFzc2EuIE5pYmggbWF1cmlzIGN1cnN1cyBtYXR0aXMgbW9sZXN0aWUuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcblxuICAgICAgICAgIH1cbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IFRleHRCb2R5OyJdfQ== */\n/*@ sourceURL=/Users/paulmurff/CodeProjects/interviews/ldschurch-webdev/components/TextBody.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "903278394",
    __self: this
  }, "body{background:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXVsbXVyZmYvQ29kZVByb2plY3RzL2ludGVydmlld3MvbGRzY2h1cmNoLXdlYmRldi9jb21wb25lbnRzL1RleHRCb2R5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDMkIsQUFHOEIsaUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9wYXVsbXVyZmYvQ29kZVByb2plY3RzL2ludGVydmlld3MvbGRzY2h1cmNoLXdlYmRldi9jb21wb25lbnRzL1RleHRCb2R5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG5mdW5jdGlvbiBUZXh0Qm9keSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIE9yY2kgbnVsbGEgcGVsbGVudGVzcXVlIGRpZ25pc3NpbSBlbmltIHNpdCBhbWV0IHZlbmVuYXRpcyB1cm5hLiBQaGFyZXRyYSBldCB1bHRyaWNlcyBuZXF1ZSBvcm5hcmUuIFNlbSBldCB0b3J0b3IgY29uc2VxdWF0IGlkIHBvcnRhIG5pYmggdmVuZW5hdGlzLiBBYyB0dXJwaXMgZWdlc3RhcyBtYWVjZW5hcyBwaGFyZXRyYSBjb252YWxsaXMgcG9zdWVyZSBtb3JiaSBsZW8uIE1vcmJpIHRyaXN0aXF1ZSBzZW5lY3R1cyBldCBuZXR1cyBldC4gRWxlbWVudHVtIGV1IGZhY2lsaXNpcyBzZWQgb2RpbyBtb3JiaSBxdWlzLiBNYXVyaXMgdWx0cmljZXMgZXJvcyBpbiBjdXJzdXMgdHVycGlzLiBSaG9uY3VzIGVzdCBwZWxsZW50ZXNxdWUgZWxpdCB1bGxhbWNvcnBlciBkaWduaXNzaW0gY3JhcyB0aW5jaWR1bnQgbG9ib3J0aXMgZmV1Z2lhdC4gQ29tbW9kbyBlbGl0IGF0IGltcGVyZGlldCBkdWkgYWNjdW1zYW4gc2l0IGFtZXQuIE1hZWNlbmFzIHVsdHJpY2llcyBtaSBlZ2V0IG1hdXJpcy4gVm9sdXRwYXQgbWFlY2VuYXMgdm9sdXRwYXQgYmxhbmRpdCBhbGlxdWFtIGV0aWFtIGVyYXQuIEV0IG5ldHVzIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPkFjIHRvcnRvciB2aXRhZSBwdXJ1cyBmYXVjaWJ1cyBvcm5hcmUgc3VzcGVuZGlzc2Ugc2VkIG5pc2kgbGFjdXMuIEFsaXF1ZXQgYmliZW5kdW0gZW5pbSBmYWNpbGlzaXMgZ3JhdmlkYSBuZXF1ZS4gTmlzbCBuaXNpIHNjZWxlcmlzcXVlIGV1IHVsdHJpY2VzIHZpdGFlIGF1Y3Rvci4gU2VkIHVsbGFtY29ycGVyIG1vcmJpIHRpbmNpZHVudCBvcm5hcmUgbWFzc2EgZWdldCBlZ2VzdGFzIHB1cnVzLiBFc3QgdWxsYW1jb3JwZXIgZWdldCBudWxsYSBmYWNpbGlzaSBldGlhbSBkaWduaXNzaW0gZGlhbS4gTWFnbmEgZnJpbmdpbGxhIHVybmEgcG9ydHRpdG9yIHJob25jdXMgZG9sb3IgcHVydXMuIEhlbmRyZXJpdCBncmF2aWRhIHJ1dHJ1bSBxdWlzcXVlIG5vbiB0ZWxsdXMgb3JjaSBhYy4gQW1ldCBqdXN0byBkb25lYyBlbmltIGRpYW0gdnVscHV0YXRlIHV0IHBoYXJldHJhLiBQZWxsZW50ZXNxdWUgZGlhbSB2b2x1dHBhdCBjb21tb2RvIHNlZCBlZ2VzdGFzIGVnZXN0YXMuIFZpdmVycmEgbWF1cmlzIGluIGFsaXF1YW0gc2VtIGZyaW5naWxsYSB1dCBtb3JiaSB0aW5jaWR1bnQuIFF1aXMgYXVjdG9yIGVsaXQgc2VkIHZ1bHB1dGF0ZS4gU29kYWxlcyB1dCBldSBzZW0gaW50ZWdlciB2aXRhZSBqdXN0byBlZ2V0IG1hZ25hLiBNaSBxdWlzIGhlbmRyZXJpdCBkb2xvciBtYWduYSBlZ2V0IGVzdCBsb3JlbS4gRWdlc3RhcyBzZWQgdGVtcHVzIHVybmEgZXQgcGhhcmV0cmEgcGhhcmV0cmEgbWFzc2EuIENvbnNlcXVhdCBuaXNsIHZlbCBwcmV0aXVtIGxlY3R1cyBxdWFtIGlkIGxlbyBpbiB2aXRhZS4gVmVsIHJpc3VzIGNvbW1vZG8gdml2ZXJyYSBtYWVjZW5hcyBhY2N1bXNhbiBsYWN1cy4gVHVycGlzIGN1cnN1cyBpbiBoYWMgaGFiaXRhc3NlIHBsYXRlYS4gVHJpc3RpcXVlIGV0IGVnZXN0YXMgcXVpcyBpcHN1bS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+Vml0YWUgdHVycGlzIG1hc3NhIHNlZCBlbGVtZW50dW0gdGVtcHVzLiBOdW5jIHNlZCBpZCBzZW1wZXIgcmlzdXMgaW4gaGVuZHJlcml0IGdyYXZpZGEgcnV0cnVtLiBNYWxlc3VhZGEgYmliZW5kdW0gYXJjdSB2aXRhZSBlbGVtZW50dW0uIE1hbGVzdWFkYSBwcm9pbiBsaWJlcm8gbnVuYyBjb25zZXF1YXQgaW50ZXJkdW0gdmFyaXVzLiBOaXNpIHNjZWxlcmlzcXVlIGV1IHVsdHJpY2VzIHZpdGFlIGF1Y3Rvci4gQ29uc2VjdGV0dXIgcHVydXMgdXQgZmF1Y2lidXMgcHVsdmluYXIgZWxlbWVudHVtIGludGVnZXIgZW5pbSBuZXF1ZSB2b2x1dHBhdC4gTGVjdHVzIHF1YW0gaWQgbGVvIGluIHZpdGFlLiBVbHRyaWNpZXMgbGFjdXMgc2VkIHR1cnBpcyB0aW5jaWR1bnQgaWQgYWxpcXVldCByaXN1cyBmZXVnaWF0IGluLiBFdCBuZXR1cyBldCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMgbWFlY2VuYXMgcGhhcmV0cmEuIFZpdmVycmEgb3JjaSBzYWdpdHRpcyBldSB2b2x1dHBhdCBvZGlvLiBOdW5jIHNlZCB2ZWxpdCBkaWduaXNzaW0gc29kYWxlcyB1dCBldS4gRWdldCB2ZWxpdCBhbGlxdWV0IHNhZ2l0dGlzIGlkIGNvbnNlY3RldHVyIHB1cnVzIHV0IGZhdWNpYnVzLiBRdWlzIHZlbCBlcm9zIGRvbmVjIGFjIG9kaW8gdGVtcG9yIG9yY2kgZGFwaWJ1cyB1bHRyaWNlcy4gRXUgYXVndWUgdXQgbGVjdHVzIGFyY3UuIEV0IG1hbGVzdWFkYSBmYW1lcyBhYyB0dXJwaXMgZWdlc3RhcyBzZWQgdGVtcHVzIHVybmEuIFRyaXN0aXF1ZSBtYWduYSBzaXQgYW1ldCBwdXJ1cyBncmF2aWRhIHF1aXMgYmxhbmRpdCB0dXJwaXMuIFZhcml1cyBxdWFtIHF1aXNxdWUgaWQgZGlhbSB2ZWwgcXVhbSBlbGVtZW50dW0gcHVsdmluYXIgZXRpYW0uXG4gICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgPGg0PlN1YiBIZWFkaW5nIDwvaDQ+XG4gICAgICAgICAgICAgICAgPHA+TnVuYyBtaSBpcHN1bSBmYXVjaWJ1cyB2aXRhZSBhbGlxdWV0IG5lYyB1bGxhbWNvcnBlci4gVHVycGlzIHRpbmNpZHVudCBpZCBhbGlxdWV0IHJpc3VzIGZldWdpYXQgaW4gYW50ZSBtZXR1cy4gQW1ldCB2b2x1dHBhdCBjb25zZXF1YXQgbWF1cmlzIG51bmMgY29uZ3VlIG5pc2kuIElwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2NpbmcuIEZhdWNpYnVzIHB1bHZpbmFyIGVsZW1lbnR1bSBpbnRlZ2VyIGVuaW0gbmVxdWUgdm9sdXRwYXQuIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCBkdWlzIHRyaXN0aXF1ZS4gVmVsIHByZXRpdW0gbGVjdHVzIHF1YW0gaWQuIFVsdHJpY2llcyBsYWN1cyBzZWQgdHVycGlzIHRpbmNpZHVudCBpZCBhbGlxdWV0IHJpc3VzLiBMZWN0dXMgYXJjdSBiaWJlbmR1bSBhdCB2YXJpdXMgdmVsLiBVcm5hIGV0IHBoYXJldHJhIHBoYXJldHJhIG1hc3NhIG1hc3NhLiBOaWJoIG1hdXJpcyBjdXJzdXMgbWF0dGlzIG1vbGVzdGllLlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBUZXh0Qm9keTsiXX0= */\n/*@ sourceURL=/Users/paulmurff/CodeProjects/interviews/ldschurch-webdev/components/TextBody.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (TextBody);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_TextBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TextBody */ "./components/TextBody.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/Users/paulmurff/CodeProjects/interviews/ldschurch-webdev/pages/index.js";






HelloWorld.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var req, res, json;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref.req;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('https://interview-project-17987.herokuapp.com/api/article');

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            json = _context.sent;
            return _context.abrupt("return", {
              articles: json
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

function HelloWorld(_ref3) {
  var articles = _ref3.articles;
  console.log(articles);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2861737818",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", {
    className: "jsx-2861737818",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "LDS Article Page"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-2861737818",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Open+Sans",
    rel: "stylesheet",
    className: "jsx-2861737818",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-2861737818",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "scoped!"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_TextBody__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "24893833",
    __self: this
  }, "p.jsx-2861737818{color:blue;font-family:'Open Sans',sans-serif;}div.jsx-2861737818{background:red;}@media (max-width:600px){div.jsx-2861737818{background:blue;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXVsbXVyZmYvQ29kZVByb2plY3RzL2ludGVydmlld3MvbGRzY2h1cmNoLXdlYmRldi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Qm9CLEFBR3dCLEFBS0ksQUFJRyxXQVJrQixJQUt0QyxDQUlFLDhCQVBGIiwiZmlsZSI6Ii9Vc2Vycy9wYXVsbXVyZmYvQ29kZVByb2plY3RzL2ludGVydmlld3MvbGRzY2h1cmNoLXdlYmRldi9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgVGV4dEJvZHkgZnJvbSAnLi4vY29tcG9uZW50cy9UZXh0Qm9keSc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuICBcbiAgSGVsbG9Xb3JsZC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyByZXEgfSkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2ludGVydmlldy1wcm9qZWN0LTE3OTg3Lmhlcm9rdWFwcC5jb20vYXBpL2FydGljbGUnKTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICByZXR1cm4geyBhcnRpY2xlczoganNvbiB9O1xuICB9O1xuICBcbiAgZnVuY3Rpb24gSGVsbG9Xb3JsZCh7IGFydGljbGVzIH0pIHtcbiAgICBjb25zb2xlLmxvZyhhcnRpY2xlcylcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICA8dGl0bGU+TERTIEFydGljbGUgUGFnZTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgIFxuICAgICAgICA8cD5zY29wZWQhPC9wPlxuICAgICAgICA8VGV4dEJvZHkvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcblxuICAgICAgICAgIH1cbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IEhlbGxvV29ybGQ7Il19 */\n/*@ sourceURL=/Users/paulmurff/CodeProjects/interviews/ldschurch-webdev/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "903278394",
    __self: this
  }, "body{background:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXVsbXVyZmYvQ29kZVByb2plY3RzL2ludGVydmlld3MvbGRzY2h1cmNoLXdlYmRldi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQzJCLEFBRzhCLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvcGF1bG11cmZmL0NvZGVQcm9qZWN0cy9pbnRlcnZpZXdzL2xkc2NodXJjaC13ZWJkZXYvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFRleHRCb2R5IGZyb20gJy4uL2NvbXBvbmVudHMvVGV4dEJvZHknO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbiAgXG4gIEhlbGxvV29ybGQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcmVxIH0pID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9pbnRlcnZpZXctcHJvamVjdC0xNzk4Ny5oZXJva3VhcHAuY29tL2FwaS9hcnRpY2xlJyk7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIHsgYXJ0aWNsZXM6IGpzb24gfTtcbiAgfTtcbiAgXG4gIGZ1bmN0aW9uIEhlbGxvV29ybGQoeyBhcnRpY2xlcyB9KSB7XG4gICAgY29uc29sZS5sb2coYXJ0aWNsZXMpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgPHRpdGxlPkxEUyBBcnRpY2xlIFBhZ2U8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuc1wiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICBcbiAgICAgICAgPHA+c2NvcGVkITwvcD5cbiAgICAgICAgPFRleHRCb2R5Lz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBIZWxsb1dvcmxkOyJdfQ== */\n/*@ sourceURL=/Users/paulmurff/CodeProjects/interviews/ldschurch-webdev/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (HelloWorld);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/paulmurff/CodeProjects/interviews/ldschurch-webdev/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map