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



MainImage.updateMainImage = function (thumbnail) {
  return function () {};
};

function MainImage(props) {
  var images = props.images;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    class: "img-contianer",
    className: "jsx-1424536014",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    width: "100%",
    src: "https://".concat(images[0].mainUrl),
    alt: "main image",
    className: "jsx-1424536014",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1424536014",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Title"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-1424536014",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Desrptions"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1424536014" + " " + "thumbnails",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, images.map(function (thumb) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      key: thumb,
      src: "https://".concat(thumb.humbnailUrl),
      alt: thumb,
      onClick: MainImage.updateMainImage(thumb),
      className: "jsx-1424536014",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1424536014",
    __self: this
  }, "p.jsx-1424536014{font-family:'Open Sans',sans-serif;}.img-container.jsx-1424536014{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}@media (max-width:600px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXVsbXVyZmYvQ29kZVByb2plY3RzL2ludGVydmlld3MvbGRzY2h1cmNoLXdlYmRldi9jb21wb25lbnRzL01haW5JbWFnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQndCLEFBR3lELEFBTXZCLG1DQUxqQix1Q0FNQSIsImZpbGUiOiIvVXNlcnMvcGF1bG11cmZmL0NvZGVQcm9qZWN0cy9pbnRlcnZpZXdzL2xkc2NodXJjaC13ZWJkZXYvY29tcG9uZW50cy9NYWluSW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuTWFpbkltYWdlLnVwZGF0ZU1haW5JbWFnZSA9IHRodW1ibmFpbCA9PiAoKSA9PiB7XG4gICAgXG59XG5mdW5jdGlvbiBNYWluSW1hZ2UocHJvcHMpIHtcbiAgICBjb25zdCB7IGltYWdlcyB9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzcz1cImltZy1jb250aWFuZXJcIj5cbiAgICAgICAgICAgIDxpbWcgd2lkdGg9XCIxMDAlXCIgc3JjPXtgaHR0cHM6Ly8ke2ltYWdlc1swXS5tYWluVXJsfWB9IGFsdD1cIm1haW4gaW1hZ2VcIiAvPlxuICAgICAgICAgICAgPGgxPlRpdGxlPC9oMT5cbiAgICAgICAgICAgIDxoND5EZXNycHRpb25zPC9oND5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGh1bWJuYWlsc1wiPlxuICAgICAgICAgICAgICAgIHtpbWFnZXMubWFwKHRodW1iID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICBrZXk9e3RodW1ifVxuICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovLyR7dGh1bWIuaHVtYm5haWxVcmx9YH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXt0aHVtYn1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17TWFpbkltYWdlLnVwZGF0ZU1haW5JbWFnZSh0aHVtYil9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmltZy1jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IE1haW5JbWFnZTsgXG4iXX0= */\n/*@ sourceURL=/Users/paulmurff/CodeProjects/interviews/ldschurch-webdev/components/MainImage.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (MainImage);

/***/ })

})
//# sourceMappingURL=index.js.2f181d68a26134808426.hot-update.js.map