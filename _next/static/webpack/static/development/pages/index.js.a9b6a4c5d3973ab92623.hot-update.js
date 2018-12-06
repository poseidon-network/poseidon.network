webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Layout */ "./components/Layout.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Content */ "./components/Content.tsx");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data */ "./data.ts");

var _jsxFileName = "/Users/chihsuan/Projects/poseidon.network/components/Header.tsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var loadImage = function loadImage(src) {
  return new Promise(function (resolve, reject) {
    var image = new Image();

    image.onload = function () {
      return resolve(src);
    };

    image.onerror = function (err) {
      return reject(err);
    };

    image.src = src;
  });
};

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      mapSrc: '/static/img-map@3x.png'
    });

    return _this;
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return loadImage('/static/map.gif');

              case 2:
                this.setState({
                  mapSrc: '/static/map.gif'
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
        bgColor: "#222633",
        color: "#fff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1401144650" + " " + "description-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1401144650" + " " + "bg-rect",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1401144650" + " " + "bg-rect",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1401144650" + " " + "bg-rect",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: "jsx-1401144650",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, _data__WEBPACK_IMPORTED_MODULE_5__["header"].description)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
        alt: "our nodes in the world map",
        src: this.state.mapSrc,
        className: "jsx-1401144650" + " " + "map",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "1401144650",
        css: "p.jsx-1401144650{text-align:center;font-size:22px;font-weight:bold;line-height:1.36;height:90px;white-space:pre-line;}.map.jsx-1401144650{width:100%;margin-bottom:0px;height:100%;max-width:920px;}.description-container.jsx-1401144650{position:relative;}.bg-rect.jsx-1401144650{width:311px;height:6px;opacity:0.3;position:absolute;background-image:linear-gradient(to right,rgba(170,209,204,0),#aad1cc 52%,rgba(170,209,204,0));}.bg-rect.jsx-1401144650:nth-child(1){top:37px;}.bg-rect.jsx-1401144650:nth-child(2){top:66px;}.bg-rect.jsx-1401144650:nth-child(3){top:95px;}@media only screen and (min-width:600px){p.jsx-1401144650{font-size:26px;margin-bottom:80px;line-height:1.40;}.bg-rect.jsx-1401144650:nth-child(1){top:45px;}.bg-rect.jsx-1401144650:nth-child(2){top:82px;}.bg-rect.jsx-1401144650:nth-child(3){top:118px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jaGloc3Vhbi9Qcm9qZWN0cy9wb3NlaWRvbi5uZXR3b3JrL2NvbXBvbmVudHMvSGVhZGVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q3NCLEFBR2lDLEFBU1AsQUFPTyxBQUlOLEFBUUgsQUFJQSxBQUlBLEFBS1EsQUFNTixBQUlBLEFBSUMsU0ExQmQsQUFJQSxBQUlBLEFBV0UsQUFJQSxDQUlBLENBOUNrQixDQVdQLEdBcUJVLEdBekNOLEFBZ0JqQixLQUtjLE1BWEEsSUFUSyxDQXlDRSxDQXBCRCxNQVhGLFNBVEMsQ0F5Q2pCLEVBcEJ3RyxJQVgxRyxVQVRjLFlBQ1MscUJBQ3ZCLGdEQW1CQSIsImZpbGUiOiIvVXNlcnMvY2hpaHN1YW4vUHJvamVjdHMvcG9zZWlkb24ubmV0d29yay9jb21wb25lbnRzL0hlYWRlci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuL0xheW91dCc7XG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnO1xuaW1wb3J0IHsgaGVhZGVyIH0gZnJvbSAnLi4vZGF0YSc7XG5cbmNvbnN0IGxvYWRJbWFnZSA9IChzcmM6IHN0cmluZykgPT4gKFxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHNyYyk7XG4gICAgaW1hZ2Uub25lcnJvciA9IGVyciA9PiByZWplY3QoZXJyKTtcbiAgICBpbWFnZS5zcmMgPSBzcmM7XG4gIH0pXG4pO1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBtYXBTcmM6ICcvc3RhdGljL2ltZy1tYXBAM3gucG5nJyxcbiAgfTtcblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBhd2FpdCBsb2FkSW1hZ2UoJy9zdGF0aWMvbWFwLmdpZicpO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbWFwU3JjOiAnL3N0YXRpYy9tYXAuZ2lmJyxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dCBiZ0NvbG9yPVwiIzIyMjYzM1wiIGNvbG9yPVwiI2ZmZlwiPlxuICAgICAgICA8Q29udGVudD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWN0XCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctcmVjdFwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXJlY3RcIiAvPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHsgaGVhZGVyLmRlc2NyaXB0aW9uIH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW1nIGFsdD1cIm91ciBub2RlcyBpbiB0aGUgd29ybGQgbWFwXCIgY2xhc3NOYW1lPVwibWFwXCIgc3JjPXt0aGlzLnN0YXRlLm1hcFNyY30gLz5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zNjtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5tYXAge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogOTIwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbi1jb250YWluZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iZy1yZWN0IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDMxMXB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgxNzAsIDIwOSwgMjA0LCAwKSwgI2FhZDFjYyA1MiUsIHJnYmEoMTcwLCAyMDksIDIwNCwgMCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYmctcmVjdDpudGgtY2hpbGQoMSkge1xuICAgICAgICAgICAgICB0b3A6IDM3cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5iZy1yZWN0Om50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgIHRvcDogNjZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJnLXJlY3Q6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICAgICAgdG9wOiA5NXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQwO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmJnLXJlY3Q6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgICB0b3A6IDQ1cHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuYmctcmVjdDpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgIHRvcDogODJweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5iZy1yZWN0Om50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICAgICAgdG9wOiAxMThweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9Db250ZW50PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iXX0= */\n/*@ sourceURL=/Users/chihsuan/Projects/poseidon.network/components/Header.tsx */",
        __self: this
      })));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.a9b6a4c5d3973ab92623.hot-update.js.map