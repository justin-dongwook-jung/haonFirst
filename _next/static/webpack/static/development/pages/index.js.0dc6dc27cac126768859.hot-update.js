webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ImageSlider.js":
/*!***********************************!*\
  !*** ./components/ImageSlider.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-alice-carousel */ "./node_modules/react-alice-carousel/lib/react-alice-carousel.js");
/* harmony import */ var react_alice_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-alice-carousel/lib/alice-carousel.css */ "./node_modules/react-alice-carousel/lib/alice-carousel.css");
/* harmony import */ var react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_alice_carousel_lib_alice_carousel_css__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var ImgForSlide = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "ImageSlider__ImgForSlide",
  componentId: "sc-x9yhuj-0"
})(["width:100%;"]);
var StyledSlider = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_alice_carousel__WEBPACK_IMPORTED_MODULE_2___default.a).withConfig({
  displayName: "ImageSlider__StyledSlider",
  componentId: "sc-x9yhuj-1"
})(["width:100%;"]);
var ImageSlider = /*#__PURE__*/function (_React$Component) {
  _inherits(ImageSlider, _React$Component);
  var _super = _createSuper(ImageSlider);
  function ImageSlider(props) {
    var _this;
    _classCallCheck(this, ImageSlider);
    _this = _super.call(this, props);
    _this.state = {
      currentIndex: 0,
      images: [{
        origin: "".concat(_this.props.prefix, "/static/images/img_01.jpeg"),
        thumbnail: "".concat(_this.props.prefix, "/static/images/img_01.jpeg")
      }, {
        origin: "".concat(_this.props.prefix, "/static/images/img_02.jpeg"),
        thumbnail: "".concat(_this.props.prefix, "/static/images/img_02.jpeg")
      }, {
        origin: "".concat(_this.props.prefix, "/static/images/img_03.jpeg"),
        thumbnail: "".concat(_this.props.prefix, "/static/images/img_03.jpeg")
      }, {
        origin: "".concat(_this.props.prefix, "/static/images/img_04.jpeg"),
        thumbnail: "".concat(_this.props.prefix, "/static/images/img_04.jpeg")
      }, {
        origin: "".concat(_this.props.prefix, "/static/images/img_05.jpeg"),
        thumbnail: "".concat(_this.props.prefix, "/static/images/img_05.jpeg")
      }, {
        origin: "".concat(_this.props.prefix, "/static/images/img_06.jpeg"),
        thumbnail: "".concat(_this.props.prefix, "/static/images/img_06.jpeg")
      }, {
        origin: "".concat(_this.props.prefix, "/static/images/img_07.jpeg"),
        thumbnail: "".concat(_this.props.prefix, "/static/images/img_07.jpeg")
      }, {
        origin: "".concat(_this.props.prefix, "/static/images/img_08.jpeg"),
        thumbnail: "".concat(_this.props.prefix, "/static/images/img_08.jpeg")
      }, {
        origin: "".concat(_this.props.prefix, "/static/images/img_09.jpeg"),
        thumbnail: "".concat(_this.props.prefix, "/static/images/img_09.jpeg")
      }, {
        origin: "".concat(_this.props.prefix, "/static/images/img_10.jpeg"),
        thumbnail: "".concat(_this.props.prefix, "/static/images/img_10.jpeg")
      }]
    };
    _this.handle = {
      getGalleryItems: _this.state.images.map(function (item, idx) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImgForSlide, {
          key: idx,
          src: item.origin
        });
      })
    };
    return _this;
  }
  _createClass(ImageSlider, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var getGalleryItems = this.handle.getGalleryItems;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "hide"
      }, "Image Slider"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledSlider, {
        items: getGalleryItems,
        dotsDisabled: false,
        buttonsDisabled: true,
        ref: function ref(el) {
          return _this2.Carousel = el;
        }
      }));
    }
  }]);
  return ImageSlider;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (ImageSlider);

/***/ })

})
//# sourceMappingURL=index.js.0dc6dc27cac126768859.hot-update.js.map