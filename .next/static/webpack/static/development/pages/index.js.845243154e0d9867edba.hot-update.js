webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_TextBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TextBody */ "./components/TextBody.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
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
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-2861737818",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", {
    className: "jsx-2861737818",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "LDS Article Page"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-2861737818",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Open+Sans",
    rel: "stylesheet",
    className: "jsx-2861737818",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), "Hello world", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-2861737818",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "scoped!"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_TextBody__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "24893833",
    __self: this
  }, "p.jsx-2861737818{color:blue;font-family:'Open Sans',sans-serif;}div.jsx-2861737818{background:red;}@media (max-width:600px){div.jsx-2861737818{background:blue;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXVsbXVyZmYvQ29kZVByb2plY3RzL2ludGVydmlld3MvbGRzY2h1cmNoLXdlYmRldi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQm9CLEFBR3dCLEFBS0ksQUFJRyxXQVJrQixJQUt0QyxDQUlFLDhCQVBGIiwiZmlsZSI6Ii9Vc2Vycy9wYXVsbXVyZmYvQ29kZVByb2plY3RzL2ludGVydmlld3MvbGRzY2h1cmNoLXdlYmRldi9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgVGV4dEJvZHkgZnJvbSAnLi4vY29tcG9uZW50cy9UZXh0Qm9keSc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuICBcbiAgSGVsbG9Xb3JsZC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyByZXEgfSkgPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2ludGVydmlldy1wcm9qZWN0LTE3OTg3Lmhlcm9rdWFwcC5jb20vYXBpL2FydGljbGUnKTtcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICByZXR1cm4geyBhcnRpY2xlczoganNvbiB9O1xuICB9O1xuICBcbiAgZnVuY3Rpb24gSGVsbG9Xb3JsZCh7IGFydGljbGVzIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICA8dGl0bGU+TERTIEFydGljbGUgUGFnZTwvdGl0bGU+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICBIZWxsbyB3b3JsZFxuICAgICAgICA8cD5zY29wZWQhPC9wPlxuICAgICAgICA8VGV4dEJvZHkvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcblxuICAgICAgICAgIH1cbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgIGRpdiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgXG4gIGV4cG9ydCBkZWZhdWx0IEhlbGxvV29ybGQ7Il19 */\n/*@ sourceURL=/Users/paulmurff/CodeProjects/interviews/ldschurch-webdev/pages/index.js */"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "903278394",
    __self: this
  }, "body{background:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXVsbXVyZmYvQ29kZVByb2plY3RzL2ludGVydmlld3MvbGRzY2h1cmNoLXdlYmRldi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQzJCLEFBRzhCLGlCQUNuQiIsImZpbGUiOiIvVXNlcnMvcGF1bG11cmZmL0NvZGVQcm9qZWN0cy9pbnRlcnZpZXdzL2xkc2NodXJjaC13ZWJkZXYvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFRleHRCb2R5IGZyb20gJy4uL2NvbXBvbmVudHMvVGV4dEJvZHknO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbiAgXG4gIEhlbGxvV29ybGQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcmVxIH0pID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9pbnRlcnZpZXctcHJvamVjdC0xNzk4Ny5oZXJva3VhcHAuY29tL2FwaS9hcnRpY2xlJyk7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIHsgYXJ0aWNsZXM6IGpzb24gfTtcbiAgfTtcbiAgXG4gIGZ1bmN0aW9uIEhlbGxvV29ybGQoeyBhcnRpY2xlcyB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgPHRpdGxlPkxEUyBBcnRpY2xlIFBhZ2U8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuc1wiIHJlbD1cInN0eWxlc2hlZXRcIi8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgSGVsbG8gd29ybGRcbiAgICAgICAgPHA+c2NvcGVkITwvcD5cbiAgICAgICAgPFRleHRCb2R5Lz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6IGJsdWU7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBibHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBIZWxsb1dvcmxkOyJdfQ== */\n/*@ sourceURL=/Users/paulmurff/CodeProjects/interviews/ldschurch-webdev/pages/index.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (HelloWorld);

/***/ })

})
//# sourceMappingURL=index.js.845243154e0d9867edba.hot-update.js.map