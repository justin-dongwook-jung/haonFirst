webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Share.js":
/*!*****************************!*\
  !*** ./components/Share.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Share = /*#__PURE__*/function (_React$Component) {
  _inherits(Share, _React$Component);
  var _super = _createSuper(Share);
  function Share(props) {
    var _this;
    _classCallCheck(this, Share);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "handles", {
      sendLink: function sendLink(e) {
        Kakao.Link.sendCustom({
          templateId: 93045
        });
      }
    });
    return _this;
  }
  _createClass(Share, [{
    key: "render",
    value: function render() {
      var StyledH2 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
        displayName: "Share__StyledH2",
        componentId: "sc-1u20n5z-0"
      })(["display:inline-block;margin-bottom:0;color:#fff;"]);
      var Btn = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
        displayName: "Share__Btn",
        componentId: "sc-1u20n5z-1"
      })(["float:right;width:34px;height:34px;margin-top:-5px;background-image:url(\"", "/static/images/kakaolink_btn_medium.png\");background-size:34px 34px;background-position:center center;background-repeat:no-repeat;&:active{background-image:url(\"", "/static/images/kakaolink_btn_medium_ov.png\");}"], this.props.prefix, this.props.prefix);
      var StyledArticle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].article.withConfig({
        displayName: "Share__StyledArticle",
        componentId: "sc-1u20n5z-2"
      })(["margin-bottom:0!important;padding-top:20px;padding-bottom:40px;background-color:#333;"]);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledArticle, {
        className: "wrap-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledH2, null, "\uACF5\uC720\uD558\uAE30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Btn, {
        onClick: this.handles.sendLink
      }));
    }
  }]);
  return Share;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (Share);

/***/ })

})
//# sourceMappingURL=index.js.586722e1a353780eb02f.hot-update.js.map