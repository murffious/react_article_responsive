webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MainImage.js":
/*!*********************************!*\
  !*** ./components/MainImage.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/paulmurff/CodeProjects/interviews/ldschurch-webdev/components/MainImage.js";



function MainImage(props) {
  var _this = this;

  var images = props.images;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "img-contianer",
    className: "jsx-1424536014",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    width: "100%",
    src: "https://".concat(images[0].mainUrl),
    alt: "main image",
    className: "jsx-1424536014",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1424536014",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Title"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-1424536014",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Desrptions"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1424536014" + " " + "thumbnails",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, images.map(function (thum) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      key: thumb,
      src: "https://".concat(thumbnailUrl),
      alt: thumb,
      onClick: _this.updateMainImage(thumb),
      className: "jsx-1424536014",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1424536014",
    __self: this
  }, "p.jsx-1424536014{font-family:'Open Sans',sans-serif;}.img-container.jsx-1424536014{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}@media (max-width:600px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXVsbXVyZmYvQ29kZVByb2plY3RzL2ludGVydmlld3MvbGRzY2h1cmNoLXdlYmRldi9jb21wb25lbnRzL01haW5JbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQndCLEFBR3lELEFBTXZCLG1DQUxqQix1Q0FNQSIsImZpbGUiOiIvVXNlcnMvcGF1bG11cmZmL0NvZGVQcm9qZWN0cy9pbnRlcnZpZXdzL2xkc2NodXJjaC13ZWJkZXYvY29tcG9uZW50cy9NYWluSW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuZnVuY3Rpb24gTWFpbkltYWdlKHByb3BzKSB7XG4gICAgY29uc3QgeyBpbWFnZXMgfSA9IHByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbWctY29udGlhbmVyXCI+XG4gICAgICAgICAgICA8aW1nIHdpZHRoPVwiMTAwJVwiIHNyYz17YGh0dHBzOi8vJHtpbWFnZXNbMF0ubWFpblVybH1gfSBhbHQ9XCJtYWluIGltYWdlXCIgLz5cbiAgICAgICAgICAgIDxoMT5UaXRsZTwvaDE+XG4gICAgICAgICAgICA8aDQ+RGVzcnB0aW9uczwvaDQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRodW1ibmFpbHNcIj5cbiAgICAgICAgICAgICAgICB7aW1hZ2VzLm1hcCh0aHVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBrZXk9e3RodW1ifVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovLyR7dGh1bWJuYWlsVXJsfWB9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17dGh1bWJ9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudXBkYXRlTWFpbkltYWdlKHRodW1iKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW1nLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgTWFpbkltYWdlOyJdfQ== */\n/*@ sourceURL=/Users/paulmurff/CodeProjects/interviews/ldschurch-webdev/components/MainImage.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (MainImage);

/***/ })

})
//# sourceMappingURL=index.js.cdd16b1aacef872c3a0c.hot-update.js.map