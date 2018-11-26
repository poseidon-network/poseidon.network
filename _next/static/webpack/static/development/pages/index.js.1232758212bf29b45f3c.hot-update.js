webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Indicators.tsx":
/*!***********************************!*\
  !*** ./components/Indicators.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "./components/Layout.tsx");
/* harmony import */ var _Indicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Indicator */ "./components/Indicator.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content */ "./components/Content.tsx");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data */ "./data.ts");
var _jsxFileName = "/Users/chihsuan/Projects/poseidon.network/components/Indicators.tsx";






var Indicators = function Indicators() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    bgColor: "#222633",
    color: "#fff",
    padding: "32px 32px 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_3__["default"], {
    direction: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, _data__WEBPACK_IMPORTED_MODULE_4__["indicators"].map(function (_ref) {
    var value = _ref.value,
        unit = _ref.unit,
        description = _ref.description;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Indicator__WEBPACK_IMPORTED_MODULE_2__["default"], {
      value: value,
      unit: unit,
      description: description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Indicators);

/***/ })

})
//# sourceMappingURL=index.js.1232758212bf29b45f3c.hot-update.js.map