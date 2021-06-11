webpackHotUpdate("static/development/pages/qlauncher.js",{

/***/ "./components/qlauncher/Link.tsx":
/*!***************************************!*\
  !*** ./components/qlauncher/Link.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qrcode */ "./node_modules/qrcode/lib/browser.js");
/* harmony import */ var qrcode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qrcode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Section */ "./components/Section.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Content */ "./components/Content.tsx");
/* harmony import */ var _H1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../H1 */ "./components/H1.tsx");
/* harmony import */ var _H2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../H2 */ "./components/H2.tsx");
/* harmony import */ var _P__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../P */ "./components/P.tsx");
/* harmony import */ var _Col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Col */ "./components/Col.tsx");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../i18n */ "./i18n.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants */ "./constants/index.ts");



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// @ts-ignore











var Link = function Link(_ref) {
  var sn = _ref.sn,
      version = _ref.version,
      t = _ref.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      qrcode = _useState2[0],
      setQRCode = _useState2[1];

  var generateQRCode =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = version === '2' ? "qapp://edge.binding?type=QL2&brand=POSEIDON&sn=".concat(sn) : "NAS-QNAP-".concat(sn);
              _context.t0 = setQRCode;
              _context.next = 4;
              return qrcode__WEBPACK_IMPORTED_MODULE_2___default.a.toDataURL(data, {
                errorCorrectionLevel: 'H',
                scale: 12,
                margin: 0
              });

            case 4:
              _context.t1 = _context.sent;
              (0, _context.t0)(_context.t1);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function generateQRCode() {
      return _ref2.apply(this, arguments);
    };
  }();

  generateQRCode();
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    bgColor: _constants__WEBPACK_IMPORTED_MODULE_11__["styles"].darkLight,
    color: _constants__WEBPACK_IMPORTED_MODULE_11__["styles"].primaryColor,
    padding: "10vh 0",
    mStyle: "padding-top: 30px; padding-bottom: 30px;"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_5__["default"], {
    direction: "row",
    mStyle: "flex-direction: column-reverse;",
    sStyle: "flex-direction: column-reverse;"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Col__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_H1__WEBPACK_IMPORTED_MODULE_6__["default"], {
    margin: "0 0 10px",
    sStyle: "text-align: left; margin-top: 2.5rem;"
  }, "2"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_H2__WEBPACK_IMPORTED_MODULE_7__["default"], {
    margin: "0 0 10px",
    sStyle: "text-align: left;"
  }, t('link.title')), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_P__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sStyle: "text-align: left;"
  }, t('link.description')), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-940955682" + " " + "qrcode"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "jsx-940955682" + " " + "qrcode-wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: qrcode,
    className: "jsx-940955682" + " " + "qrcode-img"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-940955682" + " " + "qrcode-text"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "/static/ic-scan.svg",
    className: "jsx-940955682" + " " + "icon"
  }), "Scan Me")))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Col__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: "margin: 0 80px;",
    mStyle: "margin: 0 auto;"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "/static/qlauncher_img_2@2x.png",
    className: "jsx-940955682" + " " + "instruction-img"
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "940955682",
    css: "img.jsx-940955682{width:100%;max-width:500px;object-fit:contain;}.qrcode.jsx-940955682{width:100%;}.qrcode-wrapper.jsx-940955682{width:250px;padding:20px 20px 0;background-color:#90cfbe;}.qrcode-img.jsx-940955682{width:100%;min-width:initial;background-color:white;padding:12px;margin:auto;display:block;}.icon.jsx-940955682{width:initial;background-color:transparent;padding:0;margin:0 4px 0;}.qrcode-text.jsx-940955682{margin:0;padding:8px 0;color:#1d202b;font-size:24px;font-weight:bold;text-align:center;}@media only screen and (max-width:1024px){img.jsx-940955682{width:100%;margin-bottom:20px;}.instruction-img.jsx-940955682{min-width:220px;height:30vh;display:block;margin:auto;margin-top:3rem;}.qrcode-wrapper.jsx-940955682{width:80%;max-width:250px;}.qrcode.jsx-940955682{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:2.5rem;}}@media only screen and (max-width:554px){img.jsx-940955682{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9SL0Rlc2t0b3AvcG9zZWlkb24ubmV0d29yay9jb21wb25lbnRzL3FsYXVuY2hlci9MaW5rLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRWtCLEFBR3NCLEFBTUEsQUFJQyxBQU1ELEFBU0csQUFPTCxBQVVJLEFBS0ssQUFRTixBQUtHLEFBUUYsU0FuQ0MsQ0F1QkksQ0F2REYsQUFNbEIsQUFVb0IsQUEwQkcsQUEwQnJCLENBMURvQixFQWVTLEVBc0JmLE9BZEEsR0F1QmQsQ0F2RG1CLENBK0NILENBL0JPLENBMEJ2QixFQWhDeUIsS0F1QlYsS0FlRCxDQXZCSixHQXhCWixNQWdCZSxBQWlCSSxDQVJGLENBdUJHLEdBdENwQixRQU9jLEdBU2QsQ0FRb0IsQ0FlbEIsSUFTeUIsR0F4Q1gsVUFpQmhCLElBaEJBLGtGQXdDc0Isa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9SL0Rlc2t0b3AvcG9zZWlkb24ubmV0d29yay9jb21wb25lbnRzL3FsYXVuY2hlci9MaW5rLnRzeCIsInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1pZ25vcmVcbmltcG9ydCBTY3JvbGxBbmltYXRpb24gZnJvbSAncmVhY3QtYW5pbWF0ZS1vbi1zY3JvbGwnO1xuaW1wb3J0IFFSQ29kZSBmcm9tICdxcmNvZGUnO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uL1NlY3Rpb24nO1xuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi4vQ29udGVudCc7XG5pbXBvcnQgSDEgZnJvbSAnLi4vSDEnO1xuaW1wb3J0IEgyIGZyb20gJy4uL0gyJztcbmltcG9ydCBQIGZyb20gJy4uL1AnO1xuaW1wb3J0IENvbCBmcm9tICcuLi9Db2wnO1xuXG5pbXBvcnQgeyB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9pMThuJztcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBzbjogc3RyaW5nO1xuICB2ZXJzaW9uOiBzdHJpbmc7XG59XG5cbmNvbnN0IExpbmsgPSAoeyBzbiwgdmVyc2lvbiwgdCB9OiBJUHJvcHMgJiBJVHJhbnMpID0+IHtcbiAgY29uc3QgW3FyY29kZSwgc2V0UVJDb2RlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuXG4gIGNvbnN0IGdlbmVyYXRlUVJDb2RlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPVxuICAgICAgdmVyc2lvbiA9PT0gJzInXG4gICAgICAgID8gYHFhcHA6Ly9lZGdlLmJpbmRpbmc/dHlwZT1RTDImYnJhbmQ9UE9TRUlET04mc249JHtzbn1gXG4gICAgICAgIDogYE5BUy1RTkFQLSR7c259YDtcblxuICAgIHNldFFSQ29kZShcbiAgICAgIGF3YWl0IFFSQ29kZS50b0RhdGFVUkwoZGF0YSwge1xuICAgICAgICBlcnJvckNvcnJlY3Rpb25MZXZlbDogJ0gnLFxuICAgICAgICBzY2FsZTogMTIsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH0pLFxuICAgICk7XG4gIH07XG4gIGdlbmVyYXRlUVJDb2RlKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvblxuICAgICAgYmdDb2xvcj17c3R5bGVzLmRhcmtMaWdodH1cbiAgICAgIGNvbG9yPXtzdHlsZXMucHJpbWFyeUNvbG9yfVxuICAgICAgcGFkZGluZz1cIjEwdmggMFwiXG4gICAgICBtU3R5bGU9XCJwYWRkaW5nLXRvcDogMzBweDsgcGFkZGluZy1ib3R0b206IDMwcHg7XCJcbiAgICA+XG4gICAgICA8Q29udGVudFxuICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxuICAgICAgICBtU3R5bGU9XCJmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XCJcbiAgICAgICAgc1N0eWxlPVwiZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1wiXG4gICAgICA+XG4gICAgICAgIDxDb2w+XG4gICAgICAgICAgPEgxIG1hcmdpbj1cIjAgMCAxMHB4XCIgc1N0eWxlPVwidGV4dC1hbGlnbjogbGVmdDsgbWFyZ2luLXRvcDogMi41cmVtO1wiPlxuICAgICAgICAgICAgMlxuICAgICAgICAgIDwvSDE+XG4gICAgICAgICAgPEgyIG1hcmdpbj1cIjAgMCAxMHB4XCIgc1N0eWxlPVwidGV4dC1hbGlnbjogbGVmdDtcIj5cbiAgICAgICAgICAgIHt0KCdsaW5rLnRpdGxlJyl9XG4gICAgICAgICAgPC9IMj5cbiAgICAgICAgICA8UCBzU3R5bGU9XCJ0ZXh0LWFsaWduOiBsZWZ0O1wiPnt0KCdsaW5rLmRlc2NyaXB0aW9uJyl9PC9QPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicXJjb2RlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInFyY29kZS13cmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicXJjb2RlLWltZ1wiIHNyYz17cXJjb2RlfSAvPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJxcmNvZGUtdGV4dFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaWNvblwiIHNyYz1cIi9zdGF0aWMvaWMtc2Nhbi5zdmdcIiAvPlxuICAgICAgICAgICAgICAgIFNjYW4gTWVcbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHN0eWxlPVwibWFyZ2luOiAwIDgwcHg7XCIgbVN0eWxlPVwibWFyZ2luOiAwIGF1dG87XCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbnN0cnVjdGlvbi1pbWdcIiBzcmM9XCIvc3RhdGljL3FsYXVuY2hlcl9pbWdfMkAyeC5wbmdcIiAvPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvQ29udGVudD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICAgIH1cblxuICAgICAgICAucXJjb2RlIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5xcmNvZGUtd3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAwO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5MGNmYmU7XG4gICAgICAgIH1cblxuICAgICAgICAucXJjb2RlLWltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWluLXdpZHRoOiBpbml0aWFsO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDEycHg7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG5cbiAgICAgICAgLmljb24ge1xuICAgICAgICAgIHdpZHRoOiBpbml0aWFsO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwIDRweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnFyY29kZS10ZXh0IHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgICAgY29sb3I6ICMxZDIwMmI7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW5zdHJ1Y3Rpb24taW1nIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwdmg7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnFyY29kZS13cmFwcGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5xcmNvZGUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMi41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTU0cHgpIHtcbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9TZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRyYW5zbGF0aW9uKCdxbGF1bmNoZXInKShMaW5rKTtcbiJdfQ== */\n/*@ sourceURL=/Users/R/Desktop/poseidon.network/components/qlauncher/Link.tsx */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_10__["withTranslation"])('qlauncher')(Link));

/***/ })

})
//# sourceMappingURL=qlauncher.js.0f4dfc19da1672dc1c51.hot-update.js.map