((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

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
      }, {
        origin: "".concat(_this.props.prefix, "/static/images/img_11.jpeg"),
        thumbnail: "".concat(_this.props.prefix, "/static/images/img_11.jpeg")
      }, {
        origin: "".concat(_this.props.prefix, "/static/images/img_12.jpeg"),
        thumbnail: "".concat(_this.props.prefix, "/static/images/img_12.jpeg")
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

/***/ }),

/***/ "./components/Intro.js":
/*!*****************************!*\
  !*** ./components/Intro.js ***!
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
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Intro = /*#__PURE__*/function (_React$Component) {
  _inherits(Intro, _React$Component);
  var _super = _createSuper(Intro);
  function Intro(props) {
    _classCallCheck(this, Intro);
    return _super.call(this, props);
  }
  _createClass(Intro, [{
    key: "render",
    value: function render() {
      var BoxText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
        displayName: "Intro__BoxText",
        componentId: "sc-wqmxbd-0"
      })(["margin-top:3em;margin-bottom:3.4em;"]);
      var TextThanks = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
        displayName: "Intro__TextThanks",
        componentId: "sc-wqmxbd-1"
      })(["font-size:1.2em;text-align:center;&:after{content:\"\";display:block;width:15px;height:2px;margin:1.8em auto;background-color:#eee;}"]);
      var ImgWho = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
        displayName: "Intro__ImgWho",
        componentId: "sc-wqmxbd-2"
      })(["width:215px;margin:0 auto;"]);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "hide"
      }, "Intro"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "content-large",
        src: "".concat(this.props.prefix, "/static/images/intro.jpg")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BoxText, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextThanks, null, "Happy 1st Birthday ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\uD558\uC628\uC774\uC758 \uCCAB \uC0DD\uC77C\uC744 \uCD95\uD558\uD574\uC8FC\uC138\uC694."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextThanks, null, "2023\uB144 5\uC6D4 27\uC77C \uD1A0\uC694\uC77C 11\uC2DC 30\uBD84 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\uB354\uBE14\uC720\uD398\uC2A4\uD0C0 \uC11C\uCD08")));
    }
  }]);
  return Intro;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (Intro);

/***/ }),

/***/ "./components/Location.js":
/*!********************************!*\
  !*** ./components/Location.js ***!
  \********************************/
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

var MapBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Location__MapBox",
  componentId: "sc-4mgcec-0"
})(["height:300px;margin-right:-30px;margin-left:-30px;& .custom-overlay{position:relative;display:block;width:80px;margin-bottom:50px;font-weight:bold;text-align:center;border:1px solid #111;background-color:#fff;&:after{content:\"\";position:absolute;bottom:-6px;left:34px;display:block;width:10px;height:10px;border-right:1px solid #111;border-bottom:1px solid #111;background-color:#fff;transform:rotate(45deg);}}"]);
var ButtonBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Location__ButtonBox",
  componentId: "sc-4mgcec-1"
})(["position:absolute;right:30px;margin-top:-25px;z-index:10;"]);
var NaviLink = function NaviLink(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: props.className,
    href: props.href,
    onClick: props.onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.src
  }));
};
var StyledNaviLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(NaviLink).withConfig({
  displayName: "Location__StyledNaviLink",
  componentId: "sc-4mgcec-2"
})(["float:left;width:45px;height:45px;margin-left:15px;background-color:none;border-radius:50%;box-shadow:4px 4px 10px rgba(0,0,0,0.1);cursor:pointer;& img{width:100%;border-radius:50%;}"]);
var WayBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Location__WayBox",
  componentId: "sc-4mgcec-3"
})(["margin-top:50px;& > p{margin-top:-5px;line-height:1.6;}& > p > b{font-weight:normal;}"]);
var Address = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "Location__Address",
  componentId: "sc-4mgcec-4"
})(["margin-top:25px;"]);
var ColorSpan = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "Location__ColorSpan",
  componentId: "sc-4mgcec-5"
})(["font-weight:400;color:", ";word-break:keep-all;"], function (props) {
  return props.color;
});
var Location = /*#__PURE__*/function (_React$Component) {
  _inherits(Location, _React$Component);
  var _super = _createSuper(Location);
  function Location(props) {
    var _this;
    _classCallCheck(this, Location);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "getMap", function () {
      var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
      var options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(37.492436, 127.007921),
        level: 4
      };
      var map = new kakao.maps.Map(container, options);
      var positionMark = new kakao.maps.LatLng(37.492436, 127.007921);
      var marker = new kakao.maps.Marker({
        position: positionMark
      });
      marker.setMap(map);
    });
    _defineProperty(_assertThisInitialized(_this), "openKakaoNavi", function (e) {
      e.preventDefault();
      Kakao.Navi.start({
        name: "더블유페스타 서초점",
        x: 127.00807096817688,
        y: 37.49253377122232,
        coordType: "wgs84"
      });
    });
    return _this;
  }
  _createClass(Location, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getMap();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        className: "wrap-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\uC11C\uCD08 W\uD398\uC2A4\uD0C0(\uB354\uBE14\uC720\uD398\uC2A4\uD0C0)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MapBox, {
        id: "map"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNaviLink, {
        src: "".concat(this.props.prefix, "/static/images/kakaonavi_btn.jpg"),
        href: "#!",
        onClick: function onClick(e) {
          return _this2.openKakaoNavi(e);
        },
        onClickCapture: function onClickCapture(e) {
          return _this2.openKakaoNavi(e);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledNaviLink, {
        src: "".concat(this.props.prefix, "/static/images/tmap_btn.jpg"),
        href: "https://api2.sktelecom.com/tmap/app/routes?appKey=Vkbugqw22G1b1WAKvCUlY4tN0MwXiaWJ7BcxydoS&name=W\uD398\uC2A4\uD0C0&lon=127.007921&lat=37.492436"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Address, null, "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC11C\uCD08\uAD6C", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " \uBC18\uD3EC\uB300\uB85C 138(\uC591\uC9C4\uBE4C\uB529) \uC9C0\uD558 1\uCE35"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WayBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "\uC790\uAC00\uC6A9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\uB0B4\uBE44\uAC8C\uC774\uC158\uC5D0 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "\uB354\uBE14\uC720\uD398\uC2A4\uD0C0 \uC11C\uCD08\uC810"), " \uAC80\uC0C9", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\uC8FC\uCC28 2\uC2DC\uAC04 \uBB34\uB8CC")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WayBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "\uC9C0\uD558\uCCA0\uB85C \uC624\uC2DC\uB294 \uBC29\uBC95"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "\uC11C\uCD08\uC5ED 8\uBC88\uCD9C\uAD6C(", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorSpan, {
        color: "#61b057"
      }, "2\uD638\uC120"), ")"), "\uBC14\uB85C \uC55E \uC591\uC9C4\uBE4C\uB529")));
    }
  }]);
  return Location;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (Location);

/***/ }),

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

/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.browser.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/is-what/dist/index.esm.js":
/*!************************************************!*\
  !*** ./node_modules/is-what/dist/index.esm.js ***!
  \************************************************/
/*! exports provided: getType, isAnyObject, isArray, isBlob, isBoolean, isDate, isEmptyArray, isEmptyObject, isEmptyString, isError, isFile, isFullArray, isFullObject, isFullString, isFunction, isMap, isNaNValue, isNull, isNullOrUndefined, isNumber, isObject, isObjectLike, isOneOf, isPlainObject, isPrimitive, isPromise, isRegExp, isSet, isString, isSymbol, isType, isUndefined, isWeakMap, isWeakSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return getType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAnyObject", function() { return isAnyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlob", function() { return isBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyArray", function() { return isEmptyArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyObject", function() { return isEmptyObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyString", function() { return isEmptyString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isError", function() { return isError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFile", function() { return isFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFullArray", function() { return isFullArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFullObject", function() { return isFullObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFullString", function() { return isFullString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMap", function() { return isMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNaNValue", function() { return isNaNValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNull", function() { return isNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNullOrUndefined", function() { return isNullOrUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectLike", function() { return isObjectLike; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOneOf", function() { return isOneOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPrimitive", function() { return isPrimitive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPromise", function() { return isPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return isRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSet", function() { return isSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSymbol", function() { return isSymbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isType", function() { return isType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWeakMap", function() { return isWeakMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWeakSet", function() { return isWeakSet; });
/**
 * Returns the object type of the given payload
 *
 * @param {*} payload
 * @returns {string}
 */
function getType(payload) {
    return Object.prototype.toString.call(payload).slice(8, -1);
}
/**
 * Returns whether the payload is undefined
 *
 * @param {*} payload
 * @returns {payload is undefined}
 */
function isUndefined(payload) {
    return getType(payload) === 'Undefined';
}
/**
 * Returns whether the payload is null
 *
 * @param {*} payload
 * @returns {payload is null}
 */
function isNull(payload) {
    return getType(payload) === 'Null';
}
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is PlainObject}
 */
function isPlainObject(payload) {
    if (getType(payload) !== 'Object')
        return false;
    return payload.constructor === Object && Object.getPrototypeOf(payload) === Object.prototype;
}
/**
 * Returns whether the payload is a plain JavaScript object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is PlainObject}
 */
function isObject(payload) {
    return isPlainObject(payload);
}
/**
 * Returns whether the payload is a an empty object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is { [K in any]: never }}
 */
function isEmptyObject(payload) {
    return isPlainObject(payload) && Object.keys(payload).length === 0;
}
/**
 * Returns whether the payload is a an empty object (excluding special classes or objects with other prototypes)
 *
 * @param {*} payload
 * @returns {payload is PlainObject}
 */
function isFullObject(payload) {
    return isPlainObject(payload) && Object.keys(payload).length > 0;
}
/**
 * Returns whether the payload is an any kind of object (including special classes or objects with different prototypes)
 *
 * @param {*} payload
 * @returns {payload is PlainObject}
 */
function isAnyObject(payload) {
    return getType(payload) === 'Object';
}
/**
 * Returns whether the payload is an object like a type passed in < >
 *
 * Usage: isObjectLike<{id: any}>(payload) // will make sure it's an object and has an `id` prop.
 *
 * @template T this must be passed in < >
 * @param {*} payload
 * @returns {payload is T}
 */
function isObjectLike(payload) {
    return isAnyObject(payload);
}
/**
 * Returns whether the payload is a function (regular or async)
 *
 * @param {*} payload
 * @returns {payload is AnyFunction}
 */
function isFunction(payload) {
    return typeof payload === 'function';
}
/**
 * Returns whether the payload is an array
 *
 * @param {any} payload
 * @returns {payload is any[]}
 */
function isArray(payload) {
    return getType(payload) === 'Array';
}
/**
 * Returns whether the payload is a an array with at least 1 item
 *
 * @param {*} payload
 * @returns {payload is any[]}
 */
function isFullArray(payload) {
    return isArray(payload) && payload.length > 0;
}
/**
 * Returns whether the payload is a an empty array
 *
 * @param {*} payload
 * @returns {payload is []}
 */
function isEmptyArray(payload) {
    return isArray(payload) && payload.length === 0;
}
/**
 * Returns whether the payload is a string
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isString(payload) {
    return getType(payload) === 'String';
}
/**
 * Returns whether the payload is a string, BUT returns false for ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isFullString(payload) {
    return isString(payload) && payload !== '';
}
/**
 * Returns whether the payload is ''
 *
 * @param {*} payload
 * @returns {payload is string}
 */
function isEmptyString(payload) {
    return payload === '';
}
/**
 * Returns whether the payload is a number (but not NaN)
 *
 * This will return `false` for `NaN`!!
 *
 * @param {*} payload
 * @returns {payload is number}
 */
function isNumber(payload) {
    return getType(payload) === 'Number' && !isNaN(payload);
}
/**
 * Returns whether the payload is a boolean
 *
 * @param {*} payload
 * @returns {payload is boolean}
 */
function isBoolean(payload) {
    return getType(payload) === 'Boolean';
}
/**
 * Returns whether the payload is a regular expression (RegExp)
 *
 * @param {*} payload
 * @returns {payload is RegExp}
 */
function isRegExp(payload) {
    return getType(payload) === 'RegExp';
}
/**
 * Returns whether the payload is a Map
 *
 * @param {*} payload
 * @returns {payload is Map<any, any>}
 */
function isMap(payload) {
    return getType(payload) === 'Map';
}
/**
 * Returns whether the payload is a WeakMap
 *
 * @param {*} payload
 * @returns {payload is WeakMap<any, any>}
 */
function isWeakMap(payload) {
    return getType(payload) === 'WeakMap';
}
/**
 * Returns whether the payload is a Set
 *
 * @param {*} payload
 * @returns {payload is Set<any>}
 */
function isSet(payload) {
    return getType(payload) === 'Set';
}
/**
 * Returns whether the payload is a WeakSet
 *
 * @param {*} payload
 * @returns {payload is WeakSet<any>}
 */
function isWeakSet(payload) {
    return getType(payload) === 'WeakSet';
}
/**
 * Returns whether the payload is a Symbol
 *
 * @param {*} payload
 * @returns {payload is symbol}
 */
function isSymbol(payload) {
    return getType(payload) === 'Symbol';
}
/**
 * Returns whether the payload is a Date, and that the date is valid
 *
 * @param {*} payload
 * @returns {payload is Date}
 */
function isDate(payload) {
    return getType(payload) === 'Date' && !isNaN(payload);
}
/**
 * Returns whether the payload is a Blob
 *
 * @param {*} payload
 * @returns {payload is Blob}
 */
function isBlob(payload) {
    return getType(payload) === 'Blob';
}
/**
 * Returns whether the payload is a File
 *
 * @param {*} payload
 * @returns {payload is File}
 */
function isFile(payload) {
    return getType(payload) === 'File';
}
/**
 * Returns whether the payload is a Promise
 *
 * @param {*} payload
 * @returns {payload is Promise<any>}
 */
function isPromise(payload) {
    return getType(payload) === 'Promise';
}
/**
 * Returns whether the payload is an Error
 *
 * @param {*} payload
 * @returns {payload is Error}
 */
function isError(payload) {
    return getType(payload) === 'Error';
}
/**
 * Returns whether the payload is literally the value `NaN` (it's `NaN` and also a `number`)
 *
 * @param {*} payload
 * @returns {payload is typeof NaN}
 */
function isNaNValue(payload) {
    return getType(payload) === 'Number' && isNaN(payload);
}
/**
 * Returns whether the payload is a primitive type (eg. Boolean | Null | Undefined | Number | String | Symbol)
 *
 * @param {*} payload
 * @returns {(payload is boolean | null | undefined | number | string | symbol)}
 */
function isPrimitive(payload) {
    return (isBoolean(payload) ||
        isNull(payload) ||
        isUndefined(payload) ||
        isNumber(payload) ||
        isString(payload) ||
        isSymbol(payload));
}
/**
 * Returns true whether the payload is null or undefined
 *
 * @param {*} payload
 * @returns {(payload is null | undefined)}
 */
var isNullOrUndefined = isOneOf(isNull, isUndefined);
function isOneOf(a, b, c, d, e) {
    return function (value) {
        return a(value) || b(value) || (!!c && c(value)) || (!!d && d(value)) || (!!e && e(value));
    };
}
/**
 * Does a generic check to check that the given payload is of a given type.
 * In cases like Number, it will return true for NaN as NaN is a Number (thanks javascript!);
 * It will, however, differentiate between object and null
 *
 * @template T
 * @param {*} payload
 * @param {T} type
 * @throws {TypeError} Will throw type error if type is an invalid type
 * @returns {payload is T}
 */
function isType(payload, type) {
    if (!(type instanceof Function)) {
        throw new TypeError('Type must be a function');
    }
    if (!Object.prototype.hasOwnProperty.call(type, 'prototype')) {
        throw new TypeError('Type is not a class');
    }
    // Classes usually have names (as functions usually have names)
    var name = type.name;
    return getType(payload) === name || Boolean(payload && payload.constructor === type);
}




/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);


/***/ }),

/***/ "./node_modules/merge-anything/dist/index.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/merge-anything/dist/index.esm.js ***!
  \*******************************************************/
/*! exports provided: default, concatArrays, merge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concatArrays", function() { return concatArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony import */ var is_what__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-what */ "./node_modules/is-what/dist/index.esm.js");


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function assignProp(carry, key, newVal, originalObject) {
    var propType = originalObject.propertyIsEnumerable(key)
        ? 'enumerable'
        : 'nonenumerable';
    if (propType === 'enumerable')
        carry[key] = newVal;
    if (propType === 'nonenumerable') {
        Object.defineProperty(carry, key, {
            value: newVal,
            enumerable: false,
            writable: true,
            configurable: true
        });
    }
}
function mergeRecursively(origin, newComer, extensions) {
    // work directly on newComer if its not an object
    if (!Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(newComer)) {
        // extend merge rules
        if (extensions && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(extensions)) {
            extensions.forEach(function (extend) {
                newComer = extend(origin, newComer);
            });
        }
        return newComer;
    }
    // define newObject to merge all values upon
    var newObject = {};
    if (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(origin)) {
        var props_1 = Object.getOwnPropertyNames(origin);
        var symbols_1 = Object.getOwnPropertySymbols(origin);
        newObject = __spreadArrays(props_1, symbols_1).reduce(function (carry, key) {
            // @ts-ignore
            var targetVal = origin[key];
            if ((!Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(key) && !Object.getOwnPropertyNames(newComer).includes(key)) ||
                (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isSymbol"])(key) && !Object.getOwnPropertySymbols(newComer).includes(key))) {
                assignProp(carry, key, targetVal, origin);
            }
            return carry;
        }, {});
    }
    var props = Object.getOwnPropertyNames(newComer);
    var symbols = Object.getOwnPropertySymbols(newComer);
    var result = __spreadArrays(props, symbols).reduce(function (carry, key) {
        // re-define the origin and newComer as targetVal and newVal
        var newVal = newComer[key];
        var targetVal = (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(origin))
            // @ts-ignore
            ? origin[key]
            : undefined;
        // extend merge rules
        if (extensions && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(extensions)) {
            extensions.forEach(function (extend) {
                newVal = extend(targetVal, newVal);
            });
        }
        // When newVal is an object do the merge recursively
        if (targetVal !== undefined && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(newVal)) {
            newVal = mergeRecursively(targetVal, newVal, extensions);
        }
        assignProp(carry, key, newVal, newComer);
        return carry;
    }, newObject);
    return result;
}
/**
 * Merge anything recursively.
 * Objects get merged, special objects (classes etc.) are re-assigned "as is".
 * Basic types overwrite objects or other basic types.
 *
 * @param {(IConfig | any)} origin
 * @param {...any[]} newComers
 * @returns the result
 */
function merge(origin) {
    var newComers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        newComers[_i - 1] = arguments[_i];
    }
    var extensions = null;
    var base = origin;
    if (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isPlainObject"])(origin) && origin.extensions && Object.keys(origin).length === 1) {
        base = {};
        extensions = origin.extensions;
    }
    return newComers.reduce(function (result, newComer) {
        return mergeRecursively(result, newComer, extensions);
    }, base);
}

function concatArrays(originVal, newVal) {
    if (Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(originVal) && Object(is_what__WEBPACK_IMPORTED_MODULE_0__["isArray"])(newVal)) {
        // concat logic
        return originVal.concat(newVal);
    }
    return newVal; // always return newVal as fallback!!
}

/* harmony default export */ __webpack_exports__["default"] = (merge);



/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/checkPropTypes.js":
/*!***************************************************************************************************************************!*\
  !*** delegated ./node_modules/next/node_modules/prop-types/checkPropTypes.js from dll-reference dll_e21296ef0094940af1b6 ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_e21296ef0094940af1b6 */ "dll-reference dll_e21296ef0094940af1b6"))("./node_modules/next/node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/factoryWithTypeCheckers.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/next/node_modules/prop-types/checkPropTypes.js");

var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/index.js":
/*!************************************************************!*\
  !*** ./node_modules/next/node_modules/prop-types/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/next/node_modules/prop-types/factoryWithTypeCheckers.js")(isValidElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************************************************************************************!*\
  !*** delegated ./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_e21296ef0094940af1b6 ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_e21296ef0094940af1b6 */ "dll-reference dll_e21296ef0094940af1b6"))("./node_modules/next/node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!***************************************************************************************************!*\
  !*** delegated ./node_modules/object-assign/index.js from dll-reference dll_e21296ef0094940af1b6 ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_e21296ef0094940af1b6 */ "dll-reference dll_e21296ef0094940af1b6"))("./node_modules/object-assign/index.js");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/prop-types.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/prop-types.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultProps = exports.propTypes = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var propTypes = {
  autoHeight: _propTypes["default"].bool,
  autoPlay: _propTypes["default"].bool,
  autoPlayDirection: _propTypes["default"].string,
  autoPlayInterval: _propTypes["default"].number,
  buttonsDisabled: _propTypes["default"].bool,
  children: _propTypes["default"].array,
  controlsStrategy: _propTypes["default"].oneOf(['default', 'responsive']),
  disableAutoPlayOnAction: _propTypes["default"].bool,
  dotsDisabled: _propTypes["default"].bool,
  duration: _propTypes["default"].number,
  fadeOutAnimation: _propTypes["default"].bool,
  infinite: _propTypes["default"].bool,
  items: _propTypes["default"].array,
  keysControlDisabled: _propTypes["default"].bool,
  mouseTrackingEnabled: _propTypes["default"].bool,
  onInitialized: _propTypes["default"].func,
  onResized: _propTypes["default"].func,
  onSlideChange: _propTypes["default"].func,
  onSlideChanged: _propTypes["default"].func,
  playButtonEnabled: _propTypes["default"].bool,
  preventEventOnTouchMove: _propTypes["default"].bool,
  responsive: _propTypes["default"].object,
  shouldHandleResizeEvent: _propTypes["default"].func,
  showSlideInfo: _propTypes["default"].bool,
  slideToIndex: _propTypes["default"].number,
  stagePadding: _propTypes["default"].object,
  startIndex: _propTypes["default"].number,
  stopAutoPlayOnHover: _propTypes["default"].bool,
  swipeDelta: _propTypes["default"].number,
  swipeDisabled: _propTypes["default"].bool,
  touchTrackingEnabled: _propTypes["default"].bool,
  transitionTimingFunction: _propTypes["default"].string
};
exports.propTypes = propTypes;
var defaultProps = {
  autoHeight: false,
  autoPlay: false,
  autoPlayDirection: 'ltr',
  autoPlayInterval: 250,
  buttonsDisabled: false,
  children: [],
  controlsStrategy: 'default',
  disableAutoPlayOnAction: false,
  dotsDisabled: false,
  duration: 250,
  fadeOutAnimation: false,
  infinite: true,
  items: [],
  keysControlDisabled: false,
  mouseTrackingEnabled: false,
  playButtonEnabled: false,
  preservePosition: false,
  preventEventOnTouchMove: false,
  responsive: {},
  showSlideInfo: false,
  slideToIndex: 0,
  stagePadding: {},
  startIndex: 0,
  stopAutoPlayOnHover: true,
  swipeDisabled: false,
  swipeDelta: 10,
  touchTrackingEnabled: true,
  transitionTimingFunction: 'ease-out'
};
exports.defaultProps = defaultProps;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/react-alice-carousel.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/react-alice-carousel.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _vanillaSwipe = _interopRequireDefault(__webpack_require__(/*! vanilla-swipe */ "./node_modules/vanilla-swipe/lib/index.js"));

var Utils = _interopRequireWildcard(__webpack_require__(/*! ./utils */ "./node_modules/react-alice-carousel/lib/utils/index.js"));

var Views = _interopRequireWildcard(__webpack_require__(/*! ./views */ "./node_modules/react-alice-carousel/lib/views/index.js"));

var _propTypes = __webpack_require__(/*! ./prop-types */ "./node_modules/react-alice-carousel/lib/prop-types.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var AliceCarousel = function (_React$PureComponent) {
  _inherits(AliceCarousel, _React$PureComponent);

  var _super = _createSuper(AliceCarousel);

  function AliceCarousel(props) {
    var _this;

    _classCallCheck(this, AliceCarousel);

    _this = _super.call(this, props);

    _initialiseProps.call(_assertThisInitialized(_this));

    var slides = Utils.getSlides(props);
    var clones = Utils.cloneCarouselItems(slides);
    _this.state = {
      clones: clones,
      currentIndex: 1,
      duration: props.duration,
      initialStageHeight: 0,
      isAutoPlaying: false,
      isAutoplayCanceledOnAction: false,
      slides: slides,
      stagePadding: {},
      style: Utils.getDefaultStyles()
    };
    _this.hasUserAction = false;
    _this.slideTo = _this.slideTo.bind(_assertThisInitialized(_this));
    _this.slidePrev = _this.slidePrev.bind(_assertThisInitialized(_this));
    _this.slideNext = _this.slideNext.bind(_assertThisInitialized(_this));
    _this._onTouchMove = _this._onTouchMove.bind(_assertThisInitialized(_this));
    _this._handleOnDotClick = _this._handleOnDotClick.bind(_assertThisInitialized(_this));
    _this._throttledOnTouchMove = Utils.throttle(_this._onTouchMove, 10);
    _this._debouncedHandleOnWindowResize = Utils.debounce(_this._handleOnWindowResize, 100);
    return _this;
  }

  _createClass(AliceCarousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._setInitialState();

      this._setupSwipeHandlers();

      this._resetAllIntermediateProps();

      window.addEventListener('resize', this._debouncedHandleOnWindowResize);

      if (!this.props.keysControlDisabled) {
        window.addEventListener('keyup', this._handleOnKeyUp);
      }

      this.props.autoPlay && this._play();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.autoHeight && this.stageComponent && !this.state.initialStageHeight) {
        var initialStageHeight = Utils.getGalleryItemHeight(this.stageComponent, this.props, this.state);
        this.setState({
          initialStageHeight: initialStageHeight
        });
      }

      if (this.props.duration !== prevProps.duration) {
        this.setState({
          duration: this.props.duration
        });
      }

      if (this.props.fadeOutAnimation !== prevProps.fadeOutAnimation) {
        this.setState({
          fadeoutAnimationProcessing: false
        }, this._resetAnimationProps);
      }

      if (this.props.slideToIndex !== prevProps.slideToIndex) {
        this._onSlideToIndexChange(this.state.currentIndex, this.props.slideToIndex);
      }

      if (this.props.autoPlay !== prevProps.autoPlay) {
        this.props.autoPlay ? this._play() : this._pause();
        this.setState({
          isAutoPlaying: this.props.autoPlay
        });
      }

      if (this.props.stagePadding !== prevProps.stagePadding || this.props.responsive !== prevProps.responsive || this.props.infinite !== prevProps.infinite || this.props.items !== prevProps.items) {
        this._resetAllIntermediateProps();

        this.setState(Utils.calculateInitialProps(this.props, this.stageComponent));
      }

      if (this.props.keysControlDisabled !== prevProps.keysControlDisabled) {
        this.props.keysControlDisabled ? window.removeEventListener('keyup', this._handleOnKeyUp) : window.addEventListener('keyup', this._handleOnKeyUp);
      }

      if (!this.swipingStarted && (this.props.mouseTrackingEnabled !== prevProps.mouseTrackingEnabled || this.props.touchTrackingEnabled !== prevProps.touchTrackingEnabled || this.props.preventEventOnTouchMove !== prevProps.preventEventOnTouchMove || this.props.swipeDelta !== prevProps.swipeDelta)) {
        this.swiper.update({
          delta: this.props.swipeDelta,
          mouseTrackingEnabled: this.props.mouseTrackingEnabled,
          touchTrackingEnabled: this.props.touchTrackingEnabled,
          preventDefaultTouchmoveEvent: this.props.preventEventOnTouchMove
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._pause();

      this._resetAllIntermediateProps();

      this.swiper.destroy();
      window.removeEventListener('keyup', this._handleOnKeyUp);
      window.removeEventListener('resize', this._debouncedHandleOnWindowResize);
    }
  }, {
    key: "slideTo",
    value: function slideTo() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (this._isClickDisabled(index)) return;

      this._pause();

      this._disableAnimation();

      this._isFadeOutAnimationAllowed() && this.setAnimationPropsOnDotClick(index);

      this._slideToItem(index);
    }
  }, {
    key: "slidePrev",
    value: function slidePrev(e) {
      if (e && e.isTrusted) {
        this.hasUserAction = true;
      }

      if (this._isClickDisabled()) return;

      this._pause();

      this._disableAnimation();

      this._isFadeOutAnimationAllowed() && this._setAnimationPropsOnClick('prev');

      if (Utils.itemInfo(this.state).isPrevSlideDisabled) {
        return this._onInactiveItem();
      }

      this._slideToItem(this.state.currentIndex - 1);
    }
  }, {
    key: "slideNext",
    value: function slideNext(e) {
      if (e && e.isTrusted) {
        this.hasUserAction = true;
      }

      if (this._isClickDisabled()) return;

      this._pause();

      this._disableAnimation();

      this._isFadeOutAnimationAllowed() && this._setAnimationPropsOnClick('next');

      if (Utils.itemInfo(this.state).isNextSlideDisabled) {
        return this._onInactiveItem();
      }

      this._slideToItem(this.state.currentIndex + 1);
    }
  }, {
    key: "_handleOnDotClick",
    value: function _handleOnDotClick(index) {
      this.hasUserAction = true;
      this.slideTo(index);
    }
  }, {
    key: "_setupSwipeHandlers",
    value: function _setupSwipeHandlers() {
      this.swiper = new _vanillaSwipe["default"]({
        element: this.rootComponent,
        delta: this.props.swipeDelta,
        onSwiping: this._throttledOnTouchMove,
        onSwiped: this._onTouchEnd,
        rotationAngle: 5,
        mouseTrackingEnabled: this.props.mouseTrackingEnabled,
        touchTrackingEnabled: this.props.touchTrackingEnabled,
        preventDefaultTouchmoveEvent: this.props.preventEventOnTouchMove,
        preventTrackingOnMouseleave: true
      });
      this.swiper.init();
    }
  }, {
    key: "_onSlideChange",
    value: function _onSlideChange() {
      if (this.props.onSlideChange) {
        this.props.onSlideChange(this._getEventObject());
      }
    }
  }, {
    key: "_onSlideChanged",
    value: function _onSlideChanged() {
      var _this2 = this;

      var _this$state = this.state,
          isAutoPlaying = _this$state.isAutoPlaying,
          isAutoplayCanceledOnAction = _this$state.isAutoplayCanceledOnAction;
      var _this$props = this.props,
          disableAutoPlayOnAction = _this$props.disableAutoPlayOnAction,
          onSlideChanged = _this$props.onSlideChanged;

      if (disableAutoPlayOnAction && this.hasUserAction && !isAutoplayCanceledOnAction) {
        this.setState({
          isAutoplayCanceledOnAction: true,
          isAutoPlaying: false
        }, function () {
          _this2._allowAnimation();

          if (onSlideChanged) {
            onSlideChanged(_this2._getEventObject());
          }
        });
      } else {
        isAutoPlaying && this._play();

        this._allowAnimation();

        if (onSlideChanged) {
          onSlideChanged(this._getEventObject());
        }
      }
    }
  }, {
    key: "_onInitialized",
    value: function _onInitialized(initialState) {
      this.rootComponentDimensions = Utils.getElementDimensions(this.rootComponent);

      if (this.props.onInitialized) {
        this.props.onInitialized(this._getEventObject(initialState));
      }
    }
  }, {
    key: "_onResized",
    value: function _onResized() {
      if (this.props.onResized) {
        this.props.onResized(this._getEventObject());
      }
    }
  }, {
    key: "_setInitialState",
    value: function _setInitialState() {
      var initialState = Utils.calculateInitialProps(this.props, this.stageComponent);
      this.setState(initialState, this._onInitialized(initialState));
    }
  }, {
    key: "_checkSlidePosition",
    value: function _checkSlidePosition(shouldSkipRecalculation) {
      this._stopSwipeAnimation();

      this._resetAnimationProps();

      this._resetSwipePositionProps();

      shouldSkipRecalculation ? this._skipSlidePositionRecalculation() : this._updateSlidePosition();
    }
  }, {
    key: "_setAutoPlayInterval",
    value: function _setAutoPlayInterval() {
      var _this3 = this;

      var _this$props2 = this.props,
          autoPlayDirection = _this$props2.autoPlayDirection,
          autoPlayInterval = _this$props2.autoPlayInterval;
      this._autoPlayIntervalId = setTimeout(function () {
        if (!_this3.isHovered) {
          autoPlayDirection === 'rtl' ? _this3.slidePrev() : _this3.slideNext();
        }
      }, autoPlayInterval);
    }
  }, {
    key: "_clearAutoPlayInterval",
    value: function _clearAutoPlayInterval() {
      clearTimeout(this._autoPlayIntervalId);
      this._autoPlayIntervalId = undefined;
    }
  }, {
    key: "_clearUpdateSlidePositionIntervalId",
    value: function _clearUpdateSlidePositionIntervalId() {
      clearTimeout(this._updateSlidePositionIntervalId);
      this._updateSlidePositionIntervalId = undefined;
    }
  }, {
    key: "_play",
    value: function _play() {
      this._setAutoPlayInterval();
    }
  }, {
    key: "_slideToItem",
    value: function _slideToItem(index) {
      var _this4 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this._onSlideChange();

      var _options$duration = options.duration,
          duration = _options$duration === void 0 ? this.state.duration : _options$duration,
          _options$shouldSkipRe = options.shouldSkipRecalculation,
          shouldSkipRecalculation = _options$shouldSkipRe === void 0 ? false : _options$shouldSkipRe;
      var translate3d = Utils.getTranslate3dPosition(index, this.state);
      this.setState(_objectSpread({
        currentIndex: index,
        translate3d: translate3d
      }, this._getIntermediateStateProps(duration, shouldSkipRecalculation)), function () {
        return _this4._checkSlidePosition(shouldSkipRecalculation);
      });
    }
  }, {
    key: "_onTouchMove",
    value: function _onTouchMove(e, deltaX, deltaY, absX, absY) {
      this.hasUserAction = true;

      if (this._isSwipeDisabled()) {
        return;
      }

      if (!this.swipingStarted && Utils.isVerticalTouchMoveDetected(e, absX, absY)) {
        return;
      }

      this.swipingStarted = true;

      this._pause();

      this._disableAnimation();

      this._startSwipeAnimation();

      this._clearUpdateSlidePositionIntervalId();

      this.touchEndTimeoutId && clearTimeout(this.touchEndTimeoutId);
      var _this$state2 = this.state,
          slides = _this$state2.slides,
          items = _this$state2.items,
          itemWidth = _this$state2.itemWidth,
          infinite = _this$state2.infinite,
          stagePadding = _this$state2.stagePadding;
      var slidesLength = slides.length;
      var direction = Utils.getSwipeDirection(this.prevSwipPosition, deltaX);
      this.prevSwipPosition = deltaX;

      var position = this._getTranslateXPosition(deltaX);

      if (infinite === false) {
        var _minSwipeLimit = Utils.getMinSwipeLimitIfNotInfinite(items, itemWidth);

        var _maxSwipeLimit = Utils.getMaxSwipeLimitIfNotInfinite(slidesLength, itemWidth);

        if (Utils.shouldRecalculateSwipePosition(position, _minSwipeLimit, _maxSwipeLimit)) {
          return;
        }

        Utils.animate(this.stageComponent, {
          position: position
        });

        this._setSwipePositionProps({
          position: position,
          direction: direction
        });

        return;
      }

      var minPosition = Utils.getMinSwipePosition(items, itemWidth);
      var minSwipeLimit = Utils.getMinSwipeLimit(minPosition, stagePadding);
      var maxPosition = Utils.getMaxSwipePosition(items, itemWidth, slidesLength);
      var maxSwipeLimit = Utils.getMaxSwipeLimit(maxPosition, stagePadding, itemWidth);

      if (Utils.shouldRecalculateSwipePosition(position, minSwipeLimit, maxSwipeLimit)) {
        try {
          recalculatePosition();
        } catch (err) {
          Utils.debug(err);
        }
      }

      Utils.animate(this.stageComponent, {
        position: position
      });

      this._setSwipePositionProps({
        position: position,
        direction: direction
      });

      function recalculatePosition() {
        var direction = Utils.getSwipeDirection(0, deltaX);
        direction === 'RIGHT' ? position = position + slidesLength * -itemWidth : position = position + maxPosition - items * itemWidth;

        if (Utils.shouldRecalculateSwipePosition(position, minSwipeLimit, maxSwipeLimit)) {
          recalculatePosition();
        }
      }
    }
  }, {
    key: "_beforeTouchEnd",
    value: function _beforeTouchEnd() {
      var _this5 = this;

      var _this$swipePosition = this.swipePosition,
          direction = _this$swipePosition.direction,
          position = _this$swipePosition.position;
      var transitionTimingFunction = this.props.transitionTimingFunction;
      var _this$state3 = this.state,
          itemWidth = _this$state3.itemWidth,
          items = _this$state3.items,
          duration = _this$state3.duration,
          infinite = _this$state3.infinite;
      var swipeIndex = Utils.calculateSwipeIndex(itemWidth, position, direction);
      var currentIndex = Utils.getSwipeIndexOnBeforeTouchEnd(swipeIndex, items);
      var translateXPosition = Utils.getSwipePositionOnBeforeTouchEnd(swipeIndex, itemWidth);

      if (infinite === false) {
        this._isInfiniteModeDisabledBeforeTouchEnd(swipeIndex, currentIndex);

        return;
      }

      Utils.animate(this.stageComponent, {
        position: translateXPosition,
        duration: duration,
        transitionTimingFunction: transitionTimingFunction
      });
      this.touchEndAnimation = true;
      this.touchEndTimeoutId = setTimeout(function () {
        if (_this5._isSwipeAnimationLastFrame()) {
          if (_this5.state.isAnimationCanceled) {
            return _this5._handleOnAnimationCanceled();
          }

          var nextItemIndex = Utils.getNextItemIndexBeforeTouchEnd(translateXPosition, _this5.state);
          var nextTranslateXPosition = Utils.getTranslate3dPosition(nextItemIndex, _this5.state);
          Utils.animate(_this5.stageComponent, {
            position: nextTranslateXPosition
          });

          _this5._slideToItem(nextItemIndex, {
            duration: 0,
            shouldSkipRecalculation: true
          });
        }
      }, duration);
    }
  }, {
    key: "_isInfiniteModeDisabledBeforeTouchEnd",
    value: function _isInfiniteModeDisabledBeforeTouchEnd(swipeIndex, currentIndex) {
      var _this6 = this;

      var transitionTimingFunction = this.props.transitionTimingFunction;
      var _this$state4 = this.state,
          items = _this$state4.items,
          itemWidth = _this$state4.itemWidth,
          duration = _this$state4.duration,
          slides = _this$state4.slides;
      var position = Utils.getTranslate3dPosition(currentIndex, {
        itemWidth: itemWidth,
        items: items
      });

      if (swipeIndex < items) {
        currentIndex = Utils.recalculateCurrentIndexOnBeforeTouchEnd();
        position = Utils.recalculatePositionOnBeforeTouchEnd(items, itemWidth);
      }

      if (swipeIndex > slides.length) {
        currentIndex = Utils.recalculateCurrentIndexOnBeforeTouchEnd(slides.length, items);
        position = Utils.recalculatePositionOnBeforeTouchEnd(slides.length, itemWidth);
      }

      Utils.animate(this.stageComponent, {
        position: position,
        duration: duration,
        transitionTimingFunction: transitionTimingFunction
      });
      this.touchEndAnimation = true;
      this.touchEndTimeoutId = setTimeout(function () {
        if (_this6._isSwipeAnimationLastFrame()) {
          if (_this6.state.isAnimationCanceled) {
            return _this6._handleOnAnimationCanceled();
          }

          Utils.animate(_this6.stageComponent, {
            position: position
          });

          _this6._slideToItem(currentIndex, {
            duration: 0,
            shouldSkipRecalculation: true
          });
        }
      }, duration);
    }
  }, {
    key: "_renderPrevButton",
    value: function _renderPrevButton() {
      var _Utils$itemInfo = Utils.itemInfo(this.state),
          isPrevSlideDisabled = _Utils$itemInfo.isPrevSlideDisabled;

      return _react["default"].createElement(Views.PrevNextButton, {
        name: "prev",
        disabled: isPrevSlideDisabled,
        onClick: this.slidePrev
      });
    }
  }, {
    key: "_renderNextButton",
    value: function _renderNextButton() {
      var _Utils$itemInfo2 = Utils.itemInfo(this.state),
          isNextSlideDisabled = _Utils$itemInfo2.isNextSlideDisabled;

      return _react["default"].createElement(Views.PrevNextButton, {
        name: "next",
        disabled: isNextSlideDisabled,
        onClick: this.slideNext
      });
    }
  }, {
    key: "_renderPlayPauseButton",
    value: function _renderPlayPauseButton() {
      var isAutoPlaying = this.state.isAutoPlaying;
      return _react["default"].createElement(Views.PlayPauseButton, {
        isPlaying: isAutoPlaying,
        onClick: this._playPauseToggle
      });
    }
  }, {
    key: "_renderDotsNavigation",
    value: function _renderDotsNavigation() {
      return _react["default"].createElement(Views.DotsNavigation, {
        state: this.state,
        onClick: this._handleOnDotClick
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state5 = this.state,
          style = _this$state5.style,
          translate3d = _this$state5.translate3d,
          clones = _this$state5.clones;
      var wrapperStyles = Utils.getWrapperStyles(this.stageComponent, this.props, this.state);
      var stageStyles = Utils.getStageStyles({
        translate3d: translate3d
      }, style);
      var dotsDisabled = Utils.shouldDisableDots(this.props, this.state);
      return _react["default"].createElement("div", {
        className: "alice-carousel"
      }, _react["default"].createElement("div", {
        ref: this._setRootComponentRef
      }, _react["default"].createElement("div", {
        style: wrapperStyles,
        className: "alice-carousel__wrapper",
        onMouseEnter: this._handleOnMouseEnter,
        onMouseLeave: this._handleOnMouseLeave
      }, _react["default"].createElement("ul", {
        style: stageStyles,
        className: "alice-carousel__stage",
        ref: this._setStageComponentRef
      }, clones.map(this._renderStageItem)))), this.props.showSlideInfo ? this._renderSlideInfo() : null, dotsDisabled ? null : this._renderDotsNavigation(), !this.props.buttonsDisabled ? this._renderPrevButton() : null, !this.props.buttonsDisabled ? this._renderNextButton() : null, this.props.playButtonEnabled ? this._renderPlayPauseButton() : null);
    }
  }]);

  return AliceCarousel;
}(_react["default"].PureComponent);

exports["default"] = AliceCarousel;

var _initialiseProps = function _initialiseProps() {
  var _this7 = this;

  this._handleOnWindowResize = function (e) {
    var shouldHandleResizeEvent = _this7.props.shouldHandleResizeEvent;
    var currentDimensions = Utils.getElementDimensions(_this7.rootComponent);
    var shouldProcessEvent = shouldHandleResizeEvent || Utils.shouldHandleResizeEvent;

    if (shouldProcessEvent(e, _this7.rootComponentDimensions, currentDimensions)) {
      _this7.rootComponentDimensions = currentDimensions;

      _this7._disableAnimation();

      _this7._pause();

      var _this7$state = _this7.state,
          currentIndex = _this7$state.currentIndex,
          isAutoPlaying = _this7$state.isAutoPlaying;

      var isAnimationCanceled = _this7._isSwipeAnimationProcessing();

      var initialProps = Utils.preserveProps(_this7.props, {
        startIndex: currentIndex
      });
      var currState = Utils.calculateInitialProps(initialProps, _this7.stageComponent);
      var translate3d = Utils.getTranslate3dPosition(currState.currentIndex, currState);

      var nextState = _objectSpread({}, currState, {
        translate3d: translate3d,
        isAnimationCanceled: isAnimationCanceled,
        isAutoPlaying: isAutoPlaying,
        initialStageHeight: 0
      });

      if (isAnimationCanceled) Utils.animate(_this7.stageComponent, {
        position: translate3d
      });

      _this7.setState(nextState, function () {
        _this7._resetAllIntermediateProps();

        isAutoPlaying && _this7._play();

        _this7._onResized();
      });
    }
  };

  this._handleOnAnimationCanceled = function () {
    _this7._resetAllIntermediateProps();

    _this7.setState({
      isAnimationCanceled: false
    });
  };

  this._handleOnKeyUp = function (e) {
    switch (e.code) {
      case 'Space':
        return _this7.props.autoPlay && _this7._playPauseToggle();

      case 'ArrowLeft':
        return _this7.slidePrev();

      case 'ArrowRight':
        return _this7.slideNext();
    }
  };

  this._handleOnMouseEnter = function () {
    if (_this7.props.stopAutoPlayOnHover && _this7.state.isAutoPlaying) {
      _this7.isHovered = true;

      _this7._pause();
    }
  };

  this._handleOnMouseLeave = function () {
    if (_this7.state.isAutoPlaying) {
      _this7.isHovered = false;

      _this7._play();
    }
  };

  this._onSlideToIndexChange = function (currentIndex, slideToIndex) {
    if (slideToIndex === currentIndex + 1) {
      _this7.slideNext();
    } else if (slideToIndex === currentIndex - 1) {
      _this7.slidePrev();
    } else {
      _this7.slideTo(slideToIndex);
    }
  };

  this._onInactiveItem = function () {
    _this7._onSlideChange();

    _this7._onSlideChanged();
  };

  this._getFadeOutAnimationState = function (shouldRecalculate) {
    if (shouldRecalculate || _this7._isFadeOutAnimationAllowed()) {
      return {
        fadeoutAnimationProcessing: false
      };
    }

    return {};
  };

  this._setRootComponentRef = function (node) {
    return _this7.rootComponent = node;
  };

  this._setStageComponentRef = function (node) {
    return _this7.stageComponent = node;
  };

  this._allowAnimation = function () {
    return _this7.allowAnimation = true;
  };

  this._disableAnimation = function () {
    return _this7.allowAnimation = false;
  };

  this._skipSlidePositionRecalculation = function () {
    if (_this7._isFadeOutAnimationAllowed()) {
      return _this7._resetFadeOutAnimationState();
    }

    _this7._onSlideChanged();
  };

  this._updateSlidePosition = function () {
    _this7._updateSlidePositionIntervalId = setTimeout(function () {
      if (_this7._shouldRecalculatePosition()) {
        _this7._recalculateSlidePosition();
      } else if (_this7._isFadeOutAnimationAllowed()) {
        _this7._resetFadeOutAnimationState();
      } else {
        _this7._onSlideChanged();
      }
    }, _this7.state.duration);
  };

  this._resetFadeOutAnimationState = function () {
    _this7.setState({
      fadeoutAnimationProcessing: false
    }, _this7._onSlideChanged);
  };

  this._resetAllIntermediateProps = function () {
    _this7.prevSwipPosition = 0;
    _this7.swipingStarted = false;

    _this7._stopSwipeAnimation();

    _this7._resetAnimationProps();

    _this7._resetSwipePositionProps();

    _this7._clearUpdateSlidePositionIntervalId();

    _this7._allowAnimation();
  };

  this._recalculateSlidePosition = function () {
    var style = Utils.getDefaultStyles();
    var currentIndex = Utils.recalculateCurrentSlideIndex(_this7.state);
    var translate3d = Utils.recalculateTranslatePosition(_this7.state);

    _this7.setState(_objectSpread({
      currentIndex: currentIndex,
      translate3d: translate3d,
      style: style
    }, _this7._getFadeOutAnimationState()), function () {
      return _this7._onSlideChanged();
    });
  };

  this._getEventObject = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this7.state;
    var itemsInSlide = state.items,
        item = state.currentIndex;

    var _Utils$itemInfo3 = Utils.itemInfo(state),
        isNextSlideDisabled = _Utils$itemInfo3.isNextSlideDisabled,
        isPrevSlideDisabled = _Utils$itemInfo3.isPrevSlideDisabled;

    var slide = Utils.getActiveSlideIndex(isNextSlideDisabled, state);
    return {
      item: item,
      slide: slide,
      itemsInSlide: itemsInSlide,
      isNextSlideDisabled: isNextSlideDisabled,
      isPrevSlideDisabled: isPrevSlideDisabled
    };
  };

  this.setAnimationPropsOnDotClick = function (itemIndex) {
    var _this7$state2 = _this7.state,
        currentIndex = _this7$state2.currentIndex,
        itemWidth = _this7$state2.itemWidth;
    var fadeOutIndex = currentIndex + 1;
    var fadeOutOffset = Utils.getFadeOutOffsetOnDotClick(itemIndex, currentIndex, itemWidth);

    _this7._setAnimationProps({
      fadeOutIndex: fadeOutIndex,
      fadeOutOffset: fadeOutOffset,
      allowFadeOutAnimation: true
    });
  };

  this._pause = function () {
    _this7._clearAutoPlayInterval();
  };

  this._playPauseToggle = function () {
    var isAutoPlaying = _this7.state.isAutoPlaying;
    _this7.hasUserAction = true;

    _this7.setState({
      isAutoPlaying: !isAutoPlaying,
      isAutoplayCanceledOnAction: true
    }, function () {
      isAutoPlaying ? _this7._pause() : _this7._play();
    });
  };

  this._getIntermediateStateProps = function (duration, shouldSkipRecalculation) {
    var transitionTimingFunction = _this7.props.transitionTimingFunction;

    var condition = !shouldSkipRecalculation && _this7._isFadeOutAnimationAllowed();

    return Utils.getIntermediateTransitionProps(condition, duration, transitionTimingFunction);
  };

  this._startSwipeAnimation = function () {
    _this7.swipeAnimation = true;
  };

  this._stopSwipeAnimation = function () {
    _this7.swipeAnimation = false;
    _this7.touchEndAnimation = false;
    _this7.touchEndTimeoutId = null;
  };

  this._setAnimationProps = function (newProps) {
    var prevProps = _this7.animationProps || {};
    _this7.animationProps = _objectSpread({}, prevProps, {}, newProps);
  };

  this._resetAnimationProps = function () {
    _this7.animationProps = {};
  };

  this._setSwipePositionProps = function (newProps) {
    var prevProps = _this7.swipePosition || {};
    _this7.swipePosition = _objectSpread({}, prevProps, {}, newProps);
  };

  this._resetSwipePositionProps = function () {
    _this7.swipePosition = {};
  };

  this._getTranslateXPosition = function (deltaX) {
    var translate3d = _this7.state.translate3d;
    var lastSwipePosition = _this7.swipePosition.lastSwipePosition;
    var position = lastSwipePosition || translate3d;

    if (_this7.touchEndAnimation) {
      _this7.touchEndAnimation = false;
      var translateX = Utils.getTranslateX(_this7.stageComponent);

      if (translateX) {
        return translateX;
      }
    }

    return position - Math.floor(deltaX);
  };

  this._onTouchEnd = function () {
    if (!_this7.swipingStarted || _this7._isSwipeDisabled()) return;
    _this7.swipingStarted = false;
    _this7.prevSwipPosition = 0;

    _this7._setSwipePositionProps({
      lastSwipePosition: _this7.swipePosition.position
    });

    _this7._beforeTouchEnd();
  };

  this._isClickDisabled = function (itemIndex) {
    var _this7$state3 = _this7.state,
        currentIndex = _this7$state3.currentIndex,
        isAnimationCanceled = _this7$state3.isAnimationCanceled;
    return currentIndex === itemIndex || isAnimationCanceled || !_this7.allowAnimation || _this7.swipeAnimation;
  };

  this._isFadeOutAnimationAllowed = function () {
    var _this7$state4 = _this7.state,
        stagePadding = _this7$state4.stagePadding,
        items = _this7$state4.items;
    var hasNoStagePadding = !(stagePadding.paddingLeft || stagePadding.paddingRight);
    return _this7.props.fadeOutAnimation && items === 1 && hasNoStagePadding;
  };

  this._isSwipeDisabled = function () {
    var _this7$state5 = _this7.state,
        isAnimationCanceled = _this7$state5.isAnimationCanceled,
        fadeoutAnimationProcessing = _this7$state5.fadeoutAnimationProcessing;
    return _this7.props.swipeDisabled || fadeoutAnimationProcessing || isAnimationCanceled;
  };

  this._isSwipeAnimationLastFrame = function () {
    return !_this7.swipingStarted;
  };

  this._isSwipeAnimationProcessing = function () {
    return _this7.touchEndTimeoutId;
  };

  this._shouldRecalculatePosition = function () {
    var _this7$state6 = _this7.state,
        slides = _this7$state6.slides,
        currentIndex = _this7$state6.currentIndex;
    return currentIndex < 0 || currentIndex >= slides.length;
  };

  this._setAnimationPropsOnClick = function (direction) {
    var _this7$state7 = _this7.state,
        currentIndex = _this7$state7.currentIndex,
        itemWidth = _this7$state7.itemWidth;
    var fadeOutIndex = Utils.getFadeOutIndexOnClick(currentIndex);
    var fadeOutOffset = Utils.getFadeOutOffsetOnClick(direction, itemWidth);

    _this7._setAnimationProps({
      fadeOutIndex: fadeOutIndex,
      fadeOutOffset: fadeOutOffset,
      allowFadeOutAnimation: true
    });
  };

  this._renderSlideInfo = function () {
    var _this7$state8 = _this7.state,
        currentIndex = _this7$state8.currentIndex,
        slides = _this7$state8.slides;
    return _react["default"].createElement(Views.SlideInfo, {
      slidesLength: slides.length,
      currentIndex: currentIndex
    });
  };

  this._renderStageItem = function (item, i) {
    var style = Utils.itemStyles(i, _this7.state, _this7.animationProps);
    var className = Utils.itemClassName(i, _this7.state, _this7.animationProps);
    return _react["default"].createElement(Views.StageItem, {
      styles: style,
      className: className,
      key: "stage-item-".concat(i),
      item: item
    });
  };
};

AliceCarousel.propTypes = _propTypes.propTypes;
AliceCarousel.defaultProps = _propTypes.defaultProps;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/animation.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/animation.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animate = animate;
exports.getTranslateX = getTranslateX;
exports.getTransformMatrix = getTransformMatrix;
exports.isAnimatedItem = exports.getTranslate3dPosition = void 0;

var Utils = _interopRequireWildcard(__webpack_require__(/*! ./index */ "./node_modules/react-alice-carousel/lib/utils/index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function animate(element, options) {
  var _ref = options || {},
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 0 : _ref$position,
      _ref$duration = _ref.duration,
      duration = _ref$duration === void 0 ? 0 : _ref$duration,
      _ref$transitionTiming = _ref.transitionTimingFunction,
      transitionTimingFunction = _ref$transitionTiming === void 0 ? 'step-start' : _ref$transitionTiming;

  if (Utils.isElement(element)) {
    element.style['transition'] = "transform ".concat(duration, "ms ").concat(transitionTimingFunction);
    element.style['transform'] = "translate3d(".concat(position, "px, 0, 0)");
  }

  return element;
}

function getTranslateX(element) {
  var matrix = getTransformMatrix(element);
  var tx = matrix && matrix[4] || '';
  return Number(tx);
}

function getTransformMatrix(element) {
  if (Utils.isElement(element)) {
    var _getComputedStyle = getComputedStyle(element),
        transform = _getComputedStyle.transform;

    var matched = transform.match(/(-?[0-9.]+)/g);
    return matched || [];
  }

  return [];
}

var getTranslate3dPosition = function getTranslate3dPosition() {
  var currentIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var itemWidth = state.itemWidth,
      items = state.items,
      infinite = state.infinite,
      _state$stagePadding = state.stagePadding,
      stagePadding = _state$stagePadding === void 0 ? {} : _state$stagePadding;

  if (infinite) {
    var paddingLeft = stagePadding.paddingLeft,
        paddingRight = stagePadding.paddingRight;

    if (paddingLeft || paddingRight) {
      currentIndex += 1;
    }
  }

  return (items + currentIndex) * -itemWidth || 0;
};

exports.getTranslate3dPosition = getTranslate3dPosition;

var isAnimatedItem = function isAnimatedItem() {
  var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var animationProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var allowFadeOutAnimation = animationProps.allowFadeOutAnimation,
      fadeOutIndex = animationProps.fadeOutIndex;
  return !!allowFadeOutAnimation && fadeOutIndex === i;
};

exports.isAnimatedItem = isAnimatedItem;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/classnames.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/classnames.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemClassName = exports.isClonedItem = exports.isActiveItem = void 0;

var Utils = _interopRequireWildcard(__webpack_require__(/*! ./index */ "./node_modules/react-alice-carousel/lib/utils/index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var isActiveItem = function isActiveItem() {
  var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var currentIndex = state.currentIndex,
      items = state.items,
      infinite = state.infinite,
      _state$stagePadding = state.stagePadding,
      stagePadding = _state$stagePadding === void 0 ? {} : _state$stagePadding;

  if (infinite && (stagePadding.paddingLeft || stagePadding.paddingRight)) {
    currentIndex += 1;
  }

  var index = currentIndex + items;
  return i >= index && i < index + items;
};

exports.isActiveItem = isActiveItem;

var isClonedItem = function isClonedItem() {
  var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var infinite = state.infinite,
      items = state.items,
      _state$slides = state.slides,
      slides = _state$slides === void 0 ? [] : _state$slides;
  return infinite === false && (i < items || i > slides.length + items - 1);
};

exports.isClonedItem = isClonedItem;

var itemClassName = function itemClassName() {
  var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var state = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var animationProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var isActive = isActiveItem(i, state) ? ' __active' : '';
  var isCloned = isClonedItem(i, state) ? ' __cloned' : '';
  var isAnimated = Utils.isAnimatedItem(i, animationProps) ? ' animated animated-out fadeOut' : '';
  return 'alice-carousel__stage-item' + isActive + isCloned + isAnimated;
};

exports.itemClassName = itemClassName;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/common.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/common.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateInitialProps = exports.setTotalItemsInSlide = exports.preserveProps = void 0;

var Utils = _interopRequireWildcard(__webpack_require__(/*! ./index */ "./node_modules/react-alice-carousel/lib/utils/index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var preserveProps = function preserveProps(props, values) {
  var _ref = props || {},
      preservePosition = _ref.preservePosition;

  return preservePosition ? _objectSpread({}, props, {}, values) : props;
};

exports.preserveProps = preserveProps;

var setTotalItemsInSlide = function setTotalItemsInSlide(responsiveConfig, childrenLength) {
  var items = 1;

  if (responsiveConfig) {
    var configKeys = Object.keys(responsiveConfig);

    if (configKeys.length) {
      configKeys.forEach(function (width) {
        if (width < window.innerWidth) {
          items = Math.min(responsiveConfig[width].items, childrenLength) || items;
        }
      });
    }
  }

  return items;
};

exports.setTotalItemsInSlide = setTotalItemsInSlide;

var calculateInitialProps = function calculateInitialProps(props, el) {
  var startIndex = props.startIndex,
      responsive = props.responsive,
      infinite = props.infinite,
      autoPlay = props.autoPlay;
  var style = Utils.getDefaultStyles();
  var slides = Utils.getSlides(props);
  var stagePadding = Utils.getStagePadding(props);
  var items = setTotalItemsInSlide(responsive, slides.length);
  var currentIndex = Utils.setStartIndex(slides.length, startIndex);

  var _Utils$getElementDime = Utils.getElementDimensions(el),
      galleryWidth = _Utils$getElementDime.width;

  var itemWidth = Utils.getItemWidth(galleryWidth, items);
  var clones = Utils.cloneCarouselItems(slides, items, {
    stagePadding: stagePadding,
    infinite: infinite
  });
  var translate3d = Utils.getTranslate3dPosition(currentIndex, {
    itemWidth: itemWidth,
    items: items,
    stagePadding: stagePadding,
    infinite: infinite
  });
  return {
    items: items,
    itemWidth: itemWidth,
    currentIndex: currentIndex,
    slides: slides,
    clones: clones,
    infinite: infinite,
    translate3d: translate3d,
    stagePadding: stagePadding,
    style: style,
    isAutoPlaying: autoPlay
  };
};

exports.calculateInitialProps = calculateInitialProps;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/debug.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/debug.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debug = debug;

function debug() {
  if (window.__DEBUG__) {
    var _console;

    (_console = console).debug.apply(_console, arguments); 


    return arguments;
  }
}

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/elements.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/elements.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getElementDimensions = getElementDimensions;
exports.shouldHandleResizeEvent = shouldHandleResizeEvent;
exports.shouldDisableDots = shouldDisableDots;
exports.getCurrentIndex = exports.getNextItemIndexBeforeTouchEnd = exports.isElement = exports.getSlideInfo = exports.getGalleryItemHeight = exports.getNextItem = exports.getItemWidth = exports.isStagePadding = exports.getStagePadding = exports.itemInfo = exports.getSlides = exports.cloneCarouselItems = void 0;

var Utils = _interopRequireWildcard(__webpack_require__(/*! ./index */ "./node_modules/react-alice-carousel/lib/utils/index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var cloneCarouselItems = function cloneCarouselItems() {
  var children = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var itemsInSlide = arguments.length > 1 ? arguments[1] : undefined;
  var props = arguments.length > 2 ? arguments[2] : undefined;
  var items = itemsInSlide || 1;

  var _ref = props || {},
      stagePadding = _ref.stagePadding,
      infinite = _ref.infinite;

  var _ref2 = stagePadding || {},
      paddingLeft = _ref2.paddingLeft,
      paddingRight = _ref2.paddingRight;

  if (items > children.length) {
    items = children.length;
  }

  if (infinite) {
    if (paddingLeft || paddingRight) {
      if (itemsInSlide < children.length) {
        items = itemsInSlide + 1;
      } else {
        var lastElement = children.slice(-1);
        var firstElement = children.slice(0, 1);

        var _clonesBefore = lastElement.concat(children);

        var _clonesAfter = children.concat(firstElement);

        return [].concat(_clonesBefore, children, _clonesAfter);
      }
    }
  }

  var clonesAfter = children.slice(0, items);
  var clonesBefore = children.slice(children.length - items);
  return [].concat(clonesBefore, children, clonesAfter);
};

exports.cloneCarouselItems = cloneCarouselItems;

var getSlides = function getSlides(props) {
  var _ref3 = props || {},
      children = _ref3.children,
      _ref3$items = _ref3.items,
      items = _ref3$items === void 0 ? [] : _ref3$items;

  return children && children.length ? children : items;
};

exports.getSlides = getSlides;

var itemInfo = function itemInfo(props) {
  var _ref4 = props || {},
      items = _ref4.items,
      currentIndex = _ref4.currentIndex,
      infinite = _ref4.infinite,
      _ref4$slides = _ref4.slides,
      slides = _ref4$slides === void 0 ? [] : _ref4$slides;

  var isPrevSlideDisabled = infinite === false && currentIndex === 0;
  var isNextSlideDisabled = infinite === false && slides.length - items === currentIndex;
  return {
    isPrevSlideDisabled: isPrevSlideDisabled,
    isNextSlideDisabled: isNextSlideDisabled
  };
};

exports.itemInfo = itemInfo;

var getStagePadding = function getStagePadding(props) {
  var _ref5 = props || {},
      _ref5$stagePadding = _ref5.stagePadding,
      stagePadding = _ref5$stagePadding === void 0 ? {} : _ref5$stagePadding;

  var paddingLeft = Math.abs(stagePadding.paddingLeft) || 0;
  var paddingRight = Math.abs(stagePadding.paddingRight) || 0;
  return {
    paddingLeft: paddingLeft,
    paddingRight: paddingRight
  };
};

exports.getStagePadding = getStagePadding;

var isStagePadding = function isStagePadding() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref6 = props.stagePadding || {},
      paddingLeft = _ref6.paddingLeft,
      paddingRight = _ref6.paddingRight;

  return paddingLeft || paddingRight;
};

exports.isStagePadding = isStagePadding;

var getItemWidth = function getItemWidth() {
  var galleryWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var totalItems = arguments.length > 1 ? arguments[1] : undefined;
  var width = Number(galleryWidth);
  var items = Number(totalItems);
  return width && items > 0 ? width / items : 0;
};

exports.getItemWidth = getItemWidth;

var getNextItem = function getNextItem(stageComponent, itemIndex) {
  var children = stageComponent && stageComponent.children || [];
  return children[itemIndex] && children[itemIndex].firstChild || null;
};

exports.getNextItem = getNextItem;

var getGalleryItemHeight = function getGalleryItemHeight(stageComponent, props, state) {
  var currentIndex = state.currentIndex;
  var slidesOffset = Utils.calculateSlidesOffset(props, state);
  var itemIndex = Utils.getIndexForItemHeightCalculation(currentIndex, slidesOffset);
  var element = getNextItem(stageComponent, itemIndex);

  if (isElement(element)) {
    var styles = getComputedStyle(element);
    var marginTop = parseFloat(styles['marginTop']);
    var marginBottom = parseFloat(styles['marginBottom']);
    return Math.ceil(element.offsetHeight + marginTop + marginBottom);
  }
};

exports.getGalleryItemHeight = getGalleryItemHeight;

var getSlideInfo = function getSlideInfo() {
  var currentIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var slidesLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var slideIndex = currentIndex + 1;

  if (slideIndex < 1) {
    slideIndex = slidesLength;
  } else if (slideIndex > slidesLength) {
    slideIndex = 1;
  }

  return {
    slideIndex: slideIndex,
    slidesLength: slidesLength
  };
};

exports.getSlideInfo = getSlideInfo;

var isElement = function isElement(element) {
  try {
    return element instanceof Element || element instanceof HTMLDocument;
  } catch (e) {
    return false;
  }
};

exports.isElement = isElement;

var getNextItemIndexBeforeTouchEnd = function getNextItemIndexBeforeTouchEnd(currentTranslateXPosition) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var infinite = props.infinite,
      _props$items = props.items,
      items = _props$items === void 0 ? 1 : _props$items,
      _props$itemWidth = props.itemWidth,
      itemWidth = _props$itemWidth === void 0 ? 0 : _props$itemWidth,
      _props$slides = props.slides,
      slides = _props$slides === void 0 ? [] : _props$slides,
      _props$stagePadding = props.stagePadding,
      stagePadding = _props$stagePadding === void 0 ? {} : _props$stagePadding;
  var paddingLeft = stagePadding.paddingLeft,
      paddingRight = stagePadding.paddingRight;

  if (itemWidth <= 0 || items > slides.length) {
    return 0;
  }

  var currentIndex = getCurrentIndex(currentTranslateXPosition, itemWidth, items);

  if (infinite && (paddingLeft || paddingRight)) {
    currentIndex -= 1;
  }

  if (currentIndex === slides.length) {
    return 0;
  }

  if (currentIndex < 0) {
    return slides.length + currentIndex;
  }

  return currentIndex;
};

exports.getNextItemIndexBeforeTouchEnd = getNextItemIndexBeforeTouchEnd;

var getCurrentIndex = function getCurrentIndex(currentTranslateXPosition, itemWidth, items) {
  var value = Math.abs(currentTranslateXPosition / itemWidth);
  return Math.floor(value) - items;
};

exports.getCurrentIndex = getCurrentIndex;

function getElementDimensions(element) {
  if (element && element.getBoundingClientRect) {
    var _element$getBoundingC = element.getBoundingClientRect(),
        width = _element$getBoundingC.width,
        height = _element$getBoundingC.height;

    return {
      width: width,
      height: height
    };
  }

  return {};
}

function shouldHandleResizeEvent(e) {
  var prevDimensions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var currentDimensions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return prevDimensions.width !== currentDimensions.width;
}

function shouldDisableDots(props, state) {
  var _ref7 = props || {},
      dotsDisabled = _ref7.dotsDisabled,
      controlsStrategy = _ref7.controlsStrategy;

  var _ref8 = state || {},
      items = _ref8.items,
      slides = _ref8.slides;

  if (dotsDisabled) {
    return true;
  }

  if (controlsStrategy === 'responsive' && items === slides.length) {
    return true;
  }

  return false;
}

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _animation = __webpack_require__(/*! ./animation */ "./node_modules/react-alice-carousel/lib/utils/animation.js");

Object.keys(_animation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _animation[key];
    }
  });
});

var _common = __webpack_require__(/*! ./common */ "./node_modules/react-alice-carousel/lib/utils/common.js");

Object.keys(_common).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _common[key];
    }
  });
});

var _debug = __webpack_require__(/*! ./debug */ "./node_modules/react-alice-carousel/lib/utils/debug.js");

Object.keys(_debug).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _debug[key];
    }
  });
});

var _elements = __webpack_require__(/*! ./elements */ "./node_modules/react-alice-carousel/lib/utils/elements.js");

Object.keys(_elements).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _elements[key];
    }
  });
});

var _swipe = __webpack_require__(/*! ./swipe */ "./node_modules/react-alice-carousel/lib/utils/swipe.js");

Object.keys(_swipe).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _swipe[key];
    }
  });
});

var _timers = __webpack_require__(/*! ./timers */ "./node_modules/react-alice-carousel/lib/utils/timers.js");

Object.keys(_timers).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _timers[key];
    }
  });
});

var _math = __webpack_require__(/*! ./math */ "./node_modules/react-alice-carousel/lib/utils/math.js");

Object.keys(_math).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _math[key];
    }
  });
});

var _style = __webpack_require__(/*! ./style */ "./node_modules/react-alice-carousel/lib/utils/style.js");

Object.keys(_style).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _style[key];
    }
  });
});

var _classnames = __webpack_require__(/*! ./classnames */ "./node_modules/react-alice-carousel/lib/utils/classnames.js");

Object.keys(_classnames).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _classnames[key];
    }
  });
});

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/math.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/math.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getIndexForItemHeightCalculation = exports.calculateSlidesOffset = exports.recalculateTranslatePosition = exports.recalculateCurrentSlideIndex = exports.isTheLastDotIndex = exports.getItemIndexForDotNavigation = exports.getDotsNavigationLength = exports.getMaxSwipeLimitIfNotInfinite = exports.shouldRecalculateSwipePosition = exports.getMinSwipeLimitIfNotInfinite = exports.getSlideOffset = exports.getMaxSwipeLimit = exports.getMinSwipeLimit = exports.getMinSwipePosition = exports.getMaxSwipePosition = exports.recalculateCurrentIndexOnBeforeTouchEnd = exports.recalculatePositionOnBeforeTouchEnd = exports.getFadeOutOffsetOnClick = exports.getFadeOutIndexOnClick = exports.getFadeOutOffsetOnDotClick = exports.setStartIndex = exports.getSlideIndexForMultipleItems = exports.getSlideIndexForNotMultipleItems = exports.getActiveSlideIndex = exports.getDotsLength = void 0;

var Utils = _interopRequireWildcard(__webpack_require__(/*! ./index */ "./node_modules/react-alice-carousel/lib/utils/index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getDotsLength = function getDotsLength(slidesLength, items) {
  if (slidesLength && items) {
    var dots = Math.floor(slidesLength / items);
    return slidesLength % items === 0 ? dots - 1 : dots;
  }

  return 0;
};

exports.getDotsLength = getDotsLength;

var getActiveSlideIndex = function getActiveSlideIndex(isNextSlideDisabled) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var index = props.currentIndex,
      items = props.items,
      _props$slides = props.slides,
      slides = _props$slides === void 0 ? [] : _props$slides;
  var currentIndex = index + items;
  var slidesLength = slides.length;
  return items === 1 ? getSlideIndexForNotMultipleItems(currentIndex, items, slidesLength) : getSlideIndexForMultipleItems(currentIndex, items, slidesLength, isNextSlideDisabled);
};

exports.getActiveSlideIndex = getActiveSlideIndex;

var getSlideIndexForNotMultipleItems = function getSlideIndexForNotMultipleItems(currentIndex, items, slidesLength) {
  if (currentIndex < items) return slidesLength - items;
  if (currentIndex > slidesLength) return 0;
  return currentIndex - 1;
};

exports.getSlideIndexForNotMultipleItems = getSlideIndexForNotMultipleItems;

var getSlideIndexForMultipleItems = function getSlideIndexForMultipleItems(currentIndex, items, slidesLength, isNextSlideDisabled) {
  var dotsLength = getDotsLength(slidesLength, items);
  if (currentIndex === slidesLength + items) return 0;
  if (isNextSlideDisabled || currentIndex < items && currentIndex !== 0) return dotsLength;

  if (currentIndex === 0) {
    return slidesLength % items === 0 ? dotsLength : dotsLength - 1;
  }

  return items > 0 ? Math.floor(currentIndex / items) - 1 : 0;
};

exports.getSlideIndexForMultipleItems = getSlideIndexForMultipleItems;

var setStartIndex = function setStartIndex(childrenLength, index) {
  var startIndex = index ? Math.abs(Math.ceil(index)) : 0;
  return Math.min(startIndex, childrenLength - 1) || 0;
};

exports.setStartIndex = setStartIndex;

var getFadeOutOffsetOnDotClick = function getFadeOutOffsetOnDotClick(itemIndex, currentIndex, itemWidth) {
  if (itemIndex < currentIndex) {
    return (currentIndex - itemIndex) * -itemWidth || 0;
  } else {
    return (itemIndex - currentIndex) * itemWidth || 0;
  }
};

exports.getFadeOutOffsetOnDotClick = getFadeOutOffsetOnDotClick;

var getFadeOutIndexOnClick = function getFadeOutIndexOnClick(currentIndex) {
  return currentIndex === 0 ? 1 : currentIndex + 1;
};

exports.getFadeOutIndexOnClick = getFadeOutIndexOnClick;

var getFadeOutOffsetOnClick = function getFadeOutOffsetOnClick(direction, itemWidth) {
  return direction === 'next' ? itemWidth : -itemWidth;
};

exports.getFadeOutOffsetOnClick = getFadeOutOffsetOnClick;

var recalculatePositionOnBeforeTouchEnd = function recalculatePositionOnBeforeTouchEnd(items, itemWidth) {
  return -getMinSwipePosition(items, itemWidth);
};

exports.recalculatePositionOnBeforeTouchEnd = recalculatePositionOnBeforeTouchEnd;

var recalculateCurrentIndexOnBeforeTouchEnd = function recalculateCurrentIndexOnBeforeTouchEnd(slidesLength, items) {
  return slidesLength - items || 0;
};

exports.recalculateCurrentIndexOnBeforeTouchEnd = recalculateCurrentIndexOnBeforeTouchEnd;

var getMaxSwipePosition = function getMaxSwipePosition(items, itemWidth, slidesLength) {
  return (slidesLength + items) * itemWidth || 0;
};

exports.getMaxSwipePosition = getMaxSwipePosition;

var getMinSwipePosition = function getMinSwipePosition(items, itemWidth) {
  return items * itemWidth || 0;
};

exports.getMinSwipePosition = getMinSwipePosition;

var getMinSwipeLimit = function getMinSwipeLimit() {
  var minSwipePosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var stagePadding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _stagePadding$padding = stagePadding.paddingLeft,
      paddingLeft = _stagePadding$padding === void 0 ? 0 : _stagePadding$padding;
  return paddingLeft ? minSwipePosition : 0;
};

exports.getMinSwipeLimit = getMinSwipeLimit;

var getMaxSwipeLimit = function getMaxSwipeLimit() {
  var maxSwipePosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var stagePadding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var itemWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var _stagePadding$padding2 = stagePadding.paddingRight,
      paddingRight = _stagePadding$padding2 === void 0 ? 0 : _stagePadding$padding2;
  return paddingRight ? maxSwipePosition + itemWidth : maxSwipePosition;
};

exports.getMaxSwipeLimit = getMaxSwipeLimit;

var getSlideOffset = function getSlideOffset(itemWidth) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  return Math.min(itemWidth / 2, offset) || 0;
};

exports.getSlideOffset = getSlideOffset;

var getMinSwipeLimitIfNotInfinite = function getMinSwipeLimitIfNotInfinite(items, itemWidth) {
  return items * itemWidth - getSlideOffset(itemWidth) || 0;
};

exports.getMinSwipeLimitIfNotInfinite = getMinSwipeLimitIfNotInfinite;

var shouldRecalculateSwipePosition = function shouldRecalculateSwipePosition(currentPosition, minPosition, maxPosition) {
  return currentPosition >= 0 - minPosition || Math.abs(currentPosition) >= maxPosition;
};

exports.shouldRecalculateSwipePosition = shouldRecalculateSwipePosition;

var getMaxSwipeLimitIfNotInfinite = function getMaxSwipeLimitIfNotInfinite(slidesLength, itemWidth) {
  return slidesLength * itemWidth + getSlideOffset(itemWidth) || 0;
};

exports.getMaxSwipeLimitIfNotInfinite = getMaxSwipeLimitIfNotInfinite;

var getDotsNavigationLength = function getDotsNavigationLength(slidesLength, items) {
  if (Number(items) !== 0) {
    return Math.ceil(slidesLength / items) || 0;
  }

  return 0;
};

exports.getDotsNavigationLength = getDotsNavigationLength;

var getItemIndexForDotNavigation = function getItemIndexForDotNavigation(index, isTheLastIndex, slidesLength, itemsLength) {
  var result = isTheLastIndex ? slidesLength - itemsLength : index * itemsLength;
  return result || 0;
};

exports.getItemIndexForDotNavigation = getItemIndexForDotNavigation;

var isTheLastDotIndex = function isTheLastDotIndex(index, infinite, dotsLength) {
  return infinite === false && index === dotsLength - 1;
};

exports.isTheLastDotIndex = isTheLastDotIndex;

var recalculateCurrentSlideIndex = function recalculateCurrentSlideIndex() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var currentIndex = state.currentIndex,
      _state$slides = state.slides,
      slides = _state$slides === void 0 ? [] : _state$slides;
  return currentIndex < 0 ? slides.length - 1 : 0;
};

exports.recalculateCurrentSlideIndex = recalculateCurrentSlideIndex;

var recalculateTranslatePosition = function recalculateTranslatePosition() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var items = state.items,
      itemWidth = state.itemWidth,
      _state$stagePadding = state.stagePadding,
      stagePadding = _state$stagePadding === void 0 ? {} : _state$stagePadding,
      _state$slides2 = state.slides,
      slides = _state$slides2 === void 0 ? [] : _state$slides2;
  var maxSlidePosition = slides.length - 1;
  var currentIndex = state.currentIndex < 0 ? maxSlidePosition : 0;
  var nextIndex = currentIndex === 0 ? items : maxSlidePosition + items;

  if (stagePadding.paddingLeft || stagePadding.paddingRight) {
    return (nextIndex + 1) * -itemWidth || 0;
  }

  return nextIndex * -itemWidth || 0;
};

exports.recalculateTranslatePosition = recalculateTranslatePosition;

var calculateSlidesOffset = function calculateSlidesOffset(props, state) {
  var items = state.items,
      infinite = state.infinite;
  var offset = infinite && Utils.isStagePadding(props) ? 1 : 0;
  return items + offset;
};

exports.calculateSlidesOffset = calculateSlidesOffset;

var getIndexForItemHeightCalculation = function getIndexForItemHeightCalculation(currentIndex, slidesOffset) {
  return currentIndex + slidesOffset;
};

exports.getIndexForItemHeightCalculation = getIndexForItemHeightCalculation;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/style.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/style.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWrapperStyles = exports.getStageStyles = exports.getDefaultStyles = exports.itemStyles = exports.getIntermediateTransitionProps = void 0;

var Utils = _interopRequireWildcard(__webpack_require__(/*! ./index */ "./node_modules/react-alice-carousel/lib/utils/index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getIntermediateTransitionProps = function getIntermediateTransitionProps(condition, duration) {
  var transitionTimingFunction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return condition ? {
    fadeoutAnimationProcessing: true,
    style: {
      transition: 'transform 0ms'
    }
  } : {
    style: {
      transition: "transform ".concat(duration, "ms ").concat(transitionTimingFunction)
    }
  };
};

exports.getIntermediateTransitionProps = getIntermediateTransitionProps;

var itemStyles = function itemStyles(i, state, animationProps) {
  var _ref = animationProps || {},
      _ref$fadeOutOffset = _ref.fadeOutOffset,
      fadeOutOffset = _ref$fadeOutOffset === void 0 ? 0 : _ref$fadeOutOffset;

  var _ref2 = state || {},
      _ref2$itemWidth = _ref2.itemWidth,
      itemWidth = _ref2$itemWidth === void 0 ? 0 : _ref2$itemWidth,
      _ref2$duration = _ref2.duration,
      duration = _ref2$duration === void 0 ? 0 : _ref2$duration;

  return Utils.isAnimatedItem(i, animationProps) ? {
    transform: "translateX(".concat(fadeOutOffset, "px)"),
    animationDuration: "".concat(duration, "ms"),
    width: "".concat(itemWidth, "px")
  } : {
    width: "".concat(itemWidth, "px")
  };
};

exports.itemStyles = itemStyles;

var getDefaultStyles = function getDefaultStyles(options) {
  var _ref3 = options || {},
      _ref3$duration = _ref3.duration,
      duration = _ref3$duration === void 0 ? 0 : _ref3$duration,
      _ref3$transitionTimin = _ref3.transitionTimingFunction,
      transitionTimingFunction = _ref3$transitionTimin === void 0 ? '' : _ref3$transitionTimin;

  return {
    transition: "transform ".concat(duration, "ms ").concat(transitionTimingFunction)
  };
};

exports.getDefaultStyles = getDefaultStyles;

var getStageStyles = function getStageStyles() {
  var nextStyles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var currentStyles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _nextStyles$translate = nextStyles.translate3d,
      translate3d = _nextStyles$translate === void 0 ? 0 : _nextStyles$translate,
      height = nextStyles.height;
  var transform = "translate3d(".concat(translate3d, "px, 0, 0)");
  return _objectSpread({}, currentStyles, {
    transform: transform,
    height: height
  });
};

exports.getStageStyles = getStageStyles;

var getWrapperStyles = function getWrapperStyles(element) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var _Utils$getStagePaddin = Utils.getStagePadding(props),
      paddingLeft = _Utils$getStagePaddin.paddingLeft,
      paddingRight = _Utils$getStagePaddin.paddingRight;

  var height = props.autoHeight && Utils.getGalleryItemHeight(element, props, state);
  var transition = height && "height ".concat(state.duration, "ms");
  return {
    height: height,
    transition: transition,
    paddingLeft: "".concat(paddingLeft, "px"),
    paddingRight: "".concat(paddingRight, "px")
  };
};

exports.getWrapperStyles = getWrapperStyles;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/swipe.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/swipe.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSwipePositionOnBeforeTouchEnd = exports.getSwipeIndexOnBeforeTouchEnd = exports.getSwipeIndex = exports.getSwipeOffset = exports.getSwipeDirection = exports.calculateSwipeIndex = exports.isVerticalTouchMoveDetected = void 0;

var isVerticalTouchMoveDetected = function isVerticalTouchMoveDetected(e, deltaX, deltaY) {
  var gap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 20;
  return deltaY > deltaX && deltaX < gap;
};

exports.isVerticalTouchMoveDetected = isVerticalTouchMoveDetected;

var calculateSwipeIndex = function calculateSwipeIndex(itemWidth, position, direction) {
  var index = getSwipeIndex(position, itemWidth);
  var offset = getSwipeOffset(direction);
  return index + offset;
};

exports.calculateSwipeIndex = calculateSwipeIndex;

var getSwipeDirection = function getSwipeDirection() {
  var prevDeltaX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var deltaX = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var vector = Math.round((prevDeltaX - deltaX) * 100);
  return vector < 0 ? 'LEFT' : 'RIGHT';
};

exports.getSwipeDirection = getSwipeDirection;

var getSwipeOffset = function getSwipeOffset(direction) {
  return direction === 'LEFT' ? 1 : 0;
};

exports.getSwipeOffset = getSwipeOffset;

var getSwipeIndex = function getSwipeIndex(position, itemWidth) {
  var swipePosition = Math.abs(position);
  return Math.floor(swipePosition / itemWidth);
};

exports.getSwipeIndex = getSwipeIndex;

var getSwipeIndexOnBeforeTouchEnd = function getSwipeIndexOnBeforeTouchEnd(swipeIndex, items) {
  return swipeIndex - items || 0;
};

exports.getSwipeIndexOnBeforeTouchEnd = getSwipeIndexOnBeforeTouchEnd;

var getSwipePositionOnBeforeTouchEnd = function getSwipePositionOnBeforeTouchEnd(swipeIndex, itemWidth) {
  return swipeIndex * -itemWidth || 0;
};

exports.getSwipePositionOnBeforeTouchEnd = getSwipePositionOnBeforeTouchEnd;

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/utils/timers.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/utils/timers.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounce = debounce;
exports.throttle = throttle;

function debounce(func) {
  var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var timer = null;
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(function () {
      func.apply(_this, args);
      timer = null;
    }, ms);
  };
}

function throttle(func, ms) {
  var isThrottled, savedArgs, savedThis;
  return function () {
    if (isThrottled) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);
    isThrottled = true;
    setTimeout(function () {
      isThrottled = false;

      if (savedArgs) {
        func.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  };
}

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/views/DotsNavigation.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/views/DotsNavigation.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DotsNavigation = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js"));

var Utils = _interopRequireWildcard(__webpack_require__(/*! ../utils */ "./node_modules/react-alice-carousel/lib/utils/index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DotsNavigation = function DotsNavigation(_ref) {
  var state = _ref.state,
      _onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave;
  var slides = state.slides,
      items = state.items,
      infinite = state.infinite;

  var _Utils$itemInfo = Utils.itemInfo(state),
      isNextSlideDisabled = _Utils$itemInfo.isNextSlideDisabled;

  var dotsLength = Utils.getDotsNavigationLength(slides.length, items);
  return _react["default"].createElement("ul", {
    className: "alice-carousel__dots"
  }, slides.map(function (item, i) {
    if (i < dotsLength) {
      var isTheLastDotIndex = Utils.isTheLastDotIndex(i, infinite, dotsLength);
      var itemIndex = Utils.getItemIndexForDotNavigation(i, isTheLastDotIndex, slides.length, items);
      var activeIndex = Utils.getActiveSlideIndex(isNextSlideDisabled, state);
      var className = activeIndex === i ? ' __active' : '';
      return _react["default"].createElement("li", {
        key: "dot-item-".concat(i),
        onClick: function onClick() {
          return _onClick(itemIndex);
        },
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        className: "alice-carousel__dots-item".concat(className)
      });
    }
  }));
};

exports.DotsNavigation = DotsNavigation;
DotsNavigation.propTypes = {
  state: _propTypes["default"].object.isRequired,
  onClick: _propTypes["default"].func.isRequired,
  onMouseEnter: _propTypes["default"].func,
  onMouseLeave: _propTypes["default"].func
};

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/views/PlayPauseButton.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/views/PlayPauseButton.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayPauseButton = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PlayPauseButton = function PlayPauseButton(_ref) {
  var isPlaying = _ref.isPlaying,
      onClick = _ref.onClick;
  return _react["default"].createElement("div", {
    className: "alice-carousel__play-btn"
  }, _react["default"].createElement("div", {
    className: "alice-carousel__play-btn-wrapper"
  }, _react["default"].createElement("div", {
    onClick: onClick,
    className: "alice-carousel__play-btn-item".concat(isPlaying ? ' __pause' : '')
  })));
};

exports.PlayPauseButton = PlayPauseButton;
PlayPauseButton.propTypes = {
  isPlaying: _propTypes["default"].bool,
  onClick: _propTypes["default"].func
};

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/views/PrevNextButton.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/views/PrevNextButton.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrevNextButton = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PrevNextButton = function PrevNextButton(_ref) {
  var name = _ref.name,
      disabled = _ref.disabled,
      onClick = _ref.onClick;
  var className = "alice-carousel__".concat(name, "-btn-item").concat(disabled ? ' __inactive' : '');
  return _react["default"].createElement("div", {
    className: "alice-carousel__".concat(name, "-btn")
  }, _react["default"].createElement("div", {
    className: "alice-carousel__".concat(name, "-btn-wrapper")
  }, _react["default"].createElement("p", {
    className: className,
    onClick: onClick
  }, _react["default"].createElement("span", {
    "data-area": name
  }))));
};

exports.PrevNextButton = PrevNextButton;
PrevNextButton.propTypes = {
  name: _propTypes["default"].oneOf(['next', 'prev']),
  disabled: _propTypes["default"].bool.isRequired,
  onClick: _propTypes["default"].func.isRequired
};

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/views/SlideInfo.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/views/SlideInfo.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlideInfo = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js"));

var Utils = _interopRequireWildcard(__webpack_require__(/*! ../utils */ "./node_modules/react-alice-carousel/lib/utils/index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SlideInfo = function SlideInfo(_ref) {
  var currentIndex = _ref.currentIndex,
      slidesLength = _ref.slidesLength;
  var info = Utils.getSlideInfo(currentIndex, slidesLength);
  return _react["default"].createElement("div", {
    className: "alice-carousel__slide-info"
  }, _react["default"].createElement("span", {
    className: "alice-carousel__slide-info-item"
  }, info.slideIndex), _react["default"].createElement("span", {
    className: "alice-carousel__slide-info-item alice-carousel__slide-info-item--separator"
  }, "/"), _react["default"].createElement("span", {
    className: "alice-carousel__slide-info-item"
  }, info.slidesLength));
};

exports.SlideInfo = SlideInfo;
SlideInfo.propTypes = {
  currentIndex: _propTypes["default"].number.isRequired,
  slidesLength: _propTypes["default"].number.isRequired
};

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/views/StageItem.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/views/StageItem.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StageItem = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StageItem = function StageItem(_ref) {
  var item = _ref.item,
      className = _ref.className,
      styles = _ref.styles;
  return _react["default"].createElement("li", {
    style: styles,
    className: className
  }, item);
};

exports.StageItem = StageItem;
StageItem.propTypes = {
  item: _propTypes["default"].node,
  className: _propTypes["default"].string.isRequired,
  styles: _propTypes["default"].object.isRequired
};

/***/ }),

/***/ "./node_modules/react-alice-carousel/lib/views/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-alice-carousel/lib/views/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SlideInfo = __webpack_require__(/*! ./SlideInfo */ "./node_modules/react-alice-carousel/lib/views/SlideInfo.js");

Object.keys(_SlideInfo).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SlideInfo[key];
    }
  });
});

var _StageItem = __webpack_require__(/*! ./StageItem */ "./node_modules/react-alice-carousel/lib/views/StageItem.js");

Object.keys(_StageItem).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _StageItem[key];
    }
  });
});

var _DotsNavigation = __webpack_require__(/*! ./DotsNavigation */ "./node_modules/react-alice-carousel/lib/views/DotsNavigation.js");

Object.keys(_DotsNavigation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _DotsNavigation[key];
    }
  });
});

var _PlayPauseButton = __webpack_require__(/*! ./PlayPauseButton */ "./node_modules/react-alice-carousel/lib/views/PlayPauseButton.js");

Object.keys(_PlayPauseButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PlayPauseButton[key];
    }
  });
});

var _PrevNextButton = __webpack_require__(/*! ./PrevNextButton */ "./node_modules/react-alice-carousel/lib/views/PrevNextButton.js");

Object.keys(_PrevNextButton).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PrevNextButton[key];
    }
  });
});

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_e21296ef0094940af1b6 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_e21296ef0094940af1b6 */ "dll-reference dll_e21296ef0094940af1b6"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, createGlobalStyle, css, isStyledComponent, keyframes, ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, withTheme, __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return createGlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return isStyledComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return ServerStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetConsumer", function() { return StyleSheetConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetContext", function() { return StyleSheetContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return StyleSheetManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return ThemeConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS", function() { return __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS; });
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stylis/stylis.min */ "./node_modules/stylis/stylis.min.js");
/* harmony import */ var stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stylis-rule-sheet */ "./node_modules/stylis-rule-sheet/index.js");
/* harmony import */ var stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var merge_anything__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! merge-anything */ "./node_modules/merge-anything/dist/index.esm.js");










// 

var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

// 
var isPlainObject = (function (x) {
  return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x.constructor === Object;
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 
function isFunction(test) {
  return typeof test === 'function';
}

// 

function getComponentName(target) {
  return ( true ? typeof target === 'string' && target : undefined) || target.displayName || target.name || 'Component';
}

// 
function isStatelessFunction(test) {
  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
}

// 
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
}

// 

var SC_ATTR = typeof process !== 'undefined' && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || 'data-styled';

var SC_VERSION_ATTR = 'data-styled-version';

var SC_STREAM_ATTR = 'data-styled-streamed';

var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;

var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || typeof process !== 'undefined' && (process.env.REACT_APP_SC_DISABLE_SPEEDY || process.env.SC_DISABLE_SPEEDY) || "development" !== 'production';

// Shared empty execution context when generating static styles
var STATIC_EXECUTION_CONTEXT = {};

// 


/**
 * Parse errors.md and turn it into a simple hash of code: message
 */
var ERRORS =  true ? {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n"
} : undefined;

/**
 * super basic version of sprintf
 */
function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });

  return a;
}

/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */

var StyledComponentsError = function (_Error) {
  inherits(StyledComponentsError, _Error);

  function StyledComponentsError(code) {
    classCallCheck(this, StyledComponentsError);

    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    if (false) { var _this; } else {
      var _this = possibleConstructorReturn(this, _Error.call(this, format.apply(undefined, [ERRORS[code]].concat(interpolations)).trim()));
    }
    return possibleConstructorReturn(_this);
  }

  return StyledComponentsError;
}(Error);

// 
var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;

var extractComps = (function (maybeCSS) {
  var css = '' + (maybeCSS || ''); // Definitely a string, and a clone
  var existingComponents = [];
  css.replace(SC_COMPONENT_ID, function (match, componentId, matchIndex) {
    existingComponents.push({ componentId: componentId, matchIndex: matchIndex });
    return match;
  });
  return existingComponents.map(function (_ref, i) {
    var componentId = _ref.componentId,
        matchIndex = _ref.matchIndex;

    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css.slice(matchIndex, nextComp.matchIndex) : css.slice(matchIndex);
    return { componentId: componentId, cssFromDOM: cssFromDOM };
  });
});

// 

var COMMENT_REGEX = /^\s*\/\/.*$/gm;

// NOTE: This stylis instance is only used to split rules from SSR'd style tags
var stylisSplitter = new stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: false,
  compress: false,
  semicolon: true
});

var stylis = new stylis_stylis_min__WEBPACK_IMPORTED_MODULE_0___default.a({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false // NOTE: This means "autocomplete missing semicolons"
});

// Wrap `insertRulePlugin to build a list of rules,
// and then make our own plugin to return the rules. This
// makes it easier to hook into the existing SSR architecture

var parsingRules = [];

// eslint-disable-next-line consistent-return
var returnRulesPlugin = function returnRulesPlugin(context) {
  if (context === -2) {
    var parsedRules = parsingRules;
    parsingRules = [];
    return parsedRules;
  }
};

var parseRulesPlugin = stylis_rule_sheet__WEBPACK_IMPORTED_MODULE_1___default()(function (rule) {
  parsingRules.push(rule);
});

var _componentId = void 0;
var _selector = void 0;
var _selectorRegexp = void 0;

var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
  if (
  // the first self-ref is always untouched
  offset > 0 &&
  // there should be at least two self-refs to do a replacement (.b > .b)
  string.slice(0, offset).indexOf(_selector) !== -1 &&
  // no consecutive self refs (.b.b); that is a precedence boost and treated differently
  string.slice(offset - _selector.length, offset) !== _selector) {
    return '.' + _componentId;
  }

  return match;
};

/**
 * When writing a style like
 *
 * & + & {
 *   color: red;
 * }
 *
 * The second ampersand should be a reference to the static component class. stylis
 * has no knowledge of static class so we have to intelligently replace the base selector.
 */
var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
  if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
    // eslint-disable-next-line no-param-reassign
    selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
  }
};

stylis.use([selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]);
stylisSplitter.use([parseRulesPlugin, returnRulesPlugin]);

var splitByRules = function splitByRules(css) {
  return stylisSplitter('', css);
};

function stringifyRules(rules, selector, prefix) {
  var componentId = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '&';

  var flatCSS = rules.join('').replace(COMMENT_REGEX, ''); // replace JS comments

  var cssStr = selector && prefix ? prefix + ' ' + selector + ' { ' + flatCSS + ' }' : flatCSS;

  // stylis has no concept of state to be passed to plugins
  // but since JS is single=threaded, we can rely on that to ensure
  // these properties stay in sync with the current stylis run
  _componentId = componentId;
  _selector = selector;
  _selectorRegexp = new RegExp('\\' + _selector + '\\b', 'g');

  return stylis(prefix || !selector ? '' : selector, cssStr);
}

// 
/* eslint-disable camelcase, no-undef */

var getNonce = (function () {
  return  true ? __webpack_require__.nc : undefined;
});

// 
/* These are helpers for the StyleTags to keep track of the injected
 * rule names for each (component) ID that they're keeping track of.
 * They're crucial for detecting whether a name has already been
 * injected.
 * (This excludes rehydrated names) */

/* adds a new ID:name pairing to a names dictionary */
var addNameForId = function addNameForId(names, id, name) {
  if (name) {
    // eslint-disable-next-line no-param-reassign
    var namesForId = names[id] || (names[id] = Object.create(null));
    namesForId[name] = true;
  }
};

/* resets an ID entirely by overwriting it in the dictionary */
var resetIdNames = function resetIdNames(names, id) {
  // eslint-disable-next-line no-param-reassign
  names[id] = Object.create(null);
};

/* factory for a names dictionary checking the existance of an ID:name pairing */
var hasNameForId = function hasNameForId(names) {
  return function (id, name) {
    return names[id] !== undefined && names[id][name];
  };
};

/* stringifies names for the html/element output */
var stringifyNames = function stringifyNames(names) {
  var str = '';
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    str += Object.keys(names[id]).join(' ') + ' ';
  }
  return str.trim();
};

/* clones the nested names dictionary */
var cloneNames = function cloneNames(names) {
  var clone = Object.create(null);
  // eslint-disable-next-line guard-for-in
  for (var id in names) {
    clone[id] = _extends({}, names[id]);
  }
  return clone;
};

// 

/* These are helpers that deal with the insertRule (aka speedy) API
 * They are used in the StyleTags and specifically the speedy tag
 */

/* retrieve a sheet for a given style tag */
var sheetForTag = function sheetForTag(tag) {
  // $FlowFixMe
  if (tag.sheet) return tag.sheet;

  /* Firefox quirk requires us to step through all stylesheets to find one owned by the given tag */
  var size = tag.ownerDocument.styleSheets.length;
  for (var i = 0; i < size; i += 1) {
    var sheet = tag.ownerDocument.styleSheets[i];
    // $FlowFixMe
    if (sheet.ownerNode === tag) return sheet;
  }

  /* we should always be able to find a tag */
  throw new StyledComponentsError(10);
};

/* insert a rule safely and return whether it was actually injected */
var safeInsertRule = function safeInsertRule(sheet, cssRule, index) {
  /* abort early if cssRule string is falsy */
  if (!cssRule) return false;

  var maxIndex = sheet.cssRules.length;

  try {
    /* use insertRule and cap passed index with maxIndex (no of cssRules) */
    sheet.insertRule(cssRule, index <= maxIndex ? index : maxIndex);
  } catch (err) {
    /* any error indicates an invalid rule */
    return false;
  }

  return true;
};

/* deletes `size` rules starting from `removalIndex` */
var deleteRules = function deleteRules(sheet, removalIndex, size) {
  var lowerBound = removalIndex - size;
  for (var i = removalIndex; i > lowerBound; i -= 1) {
    sheet.deleteRule(i);
  }
};

// 

/* this marker separates component styles and is important for rehydration */
var makeTextMarker = function makeTextMarker(id) {
  return '\n/* sc-component-id: ' + id + ' */\n';
};

/* add up all numbers in array up until and including the index */
var addUpUntilIndex = function addUpUntilIndex(sizes, index) {
  var totalUpToIndex = 0;
  for (var i = 0; i <= index; i += 1) {
    totalUpToIndex += sizes[i];
  }

  return totalUpToIndex;
};

/* create a new style tag after lastEl */
var makeStyleTag = function makeStyleTag(target, tagEl, insertBefore) {
  var targetDocument = document;
  if (target) targetDocument = target.ownerDocument;else if (tagEl) targetDocument = tagEl.ownerDocument;

  var el = targetDocument.createElement('style');
  el.setAttribute(SC_ATTR, '');
  el.setAttribute(SC_VERSION_ATTR, "4.4.1");

  var nonce = getNonce();
  if (nonce) {
    el.setAttribute('nonce', nonce);
  }

  /* Work around insertRule quirk in EdgeHTML */
  el.appendChild(targetDocument.createTextNode(''));

  if (target && !tagEl) {
    /* Append to target when no previous element was passed */
    target.appendChild(el);
  } else {
    if (!tagEl || !target || !tagEl.parentNode) {
      throw new StyledComponentsError(6);
    }

    /* Insert new style tag after the previous one */
    tagEl.parentNode.insertBefore(el, insertBefore ? tagEl : tagEl.nextSibling);
  }

  return el;
};

/* takes a css factory function and outputs an html styled tag factory */
var wrapAsHtmlTag = function wrapAsHtmlTag(css, names) {
  return function (additionalAttrs) {
    var nonce = getNonce();
    var attrs = [nonce && 'nonce="' + nonce + '"', SC_ATTR + '="' + stringifyNames(names) + '"', SC_VERSION_ATTR + '="' + "4.4.1" + '"', additionalAttrs];

    var htmlAttr = attrs.filter(Boolean).join(' ');
    return '<style ' + htmlAttr + '>' + css() + '</style>';
  };
};

/* takes a css factory function and outputs an element factory */
var wrapAsElement = function wrapAsElement(css, names) {
  return function () {
    var _props;

    var props = (_props = {}, _props[SC_ATTR] = stringifyNames(names), _props[SC_VERSION_ATTR] = "4.4.1", _props);

    var nonce = getNonce();
    if (nonce) {
      // $FlowFixMe
      props.nonce = nonce;
    }

    // eslint-disable-next-line react/no-danger
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement('style', _extends({}, props, { dangerouslySetInnerHTML: { __html: css() } }));
  };
};

var getIdsFromMarkersFactory = function getIdsFromMarkersFactory(markers) {
  return function () {
    return Object.keys(markers);
  };
};

/* speedy tags utilise insertRule */
var makeSpeedyTag = function makeSpeedyTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);
  var sizes = [];

  var extractImport = getImportRuleTag !== undefined;
  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = sizes.length;
    sizes.push(0);
    resetIdNames(names, id);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var sheet = sheetForTag(el);
    var insertIndex = addUpUntilIndex(sizes, marker);

    var injectedRules = 0;
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var cssRule = cssRules[i];
      var mayHaveImport = extractImport; /* @import rules are reordered to appear first */
      if (mayHaveImport && cssRule.indexOf('@import') !== -1) {
        importRules.push(cssRule);
      } else if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
        mayHaveImport = false;
        injectedRules += 1;
      }
    }

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }

    sizes[marker] += injectedRules; /* add up no of injected rules */
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    // $FlowFixMe
    if (el.isConnected === false) return;

    var size = sizes[marker];
    var sheet = sheetForTag(el);
    var removalIndex = addUpUntilIndex(sizes, marker) - 1;
    deleteRules(sheet, removalIndex, size);
    sizes[marker] = 0;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var _sheetForTag = sheetForTag(el),
        cssRules = _sheetForTag.cssRules;

    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += makeTextMarker(id);
      var marker = markers[id];
      var end = addUpUntilIndex(sizes, marker);
      var size = sizes[marker];
      for (var i = end - size; i < end; i += 1) {
        var rule = cssRules[i];
        if (rule !== undefined) {
          str += rule.cssText;
        }
      }
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeTextNode = function makeTextNode(targetDocument, id) {
  return targetDocument.createTextNode(makeTextMarker(id));
};

var makeBrowserTag = function makeBrowserTag(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);

  var extractImport = getImportRuleTag !== undefined;

  /* indicates whether getImportRuleTag was called */
  var usedImportRuleTag = false;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    markers[id] = makeTextNode(el.ownerDocument, id);
    el.appendChild(markers[id]);
    names[id] = Object.create(null);

    return markers[id];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    var importRules = [];
    var cssRulesSize = cssRules.length;

    for (var i = 0; i < cssRulesSize; i += 1) {
      var rule = cssRules[i];
      var mayHaveImport = extractImport;
      if (mayHaveImport && rule.indexOf('@import') !== -1) {
        importRules.push(rule);
      } else {
        mayHaveImport = false;
        var separator = i === cssRulesSize - 1 ? '' : ' ';
        marker.appendData('' + rule + separator);
      }
    }

    addNameForId(names, id, name);

    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      // $FlowFixMe
      getImportRuleTag().insertRules(id + '-import', importRules);
    }
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;

    /* create new empty text node and replace the current one */
    var newMarker = makeTextNode(el.ownerDocument, id);
    el.replaceChild(newMarker, marker);
    markers[id] = newMarker;
    resetIdNames(names, id);

    if (extractImport && usedImportRuleTag) {
      // $FlowFixMe
      getImportRuleTag().removeRules(id + '-import');
    }
  };

  var css = function css() {
    var str = '';

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      str += markers[id].data;
    }

    return str;
  };

  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },

    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };
};

var makeServerTag = function makeServerTag(namesArg, markersArg) {
  var names = namesArg === undefined ? Object.create(null) : namesArg;
  var markers = markersArg === undefined ? Object.create(null) : markersArg;

  var insertMarker = function insertMarker(id) {
    var prev = markers[id];
    if (prev !== undefined) {
      return prev;
    }

    return markers[id] = [''];
  };

  var insertRules = function insertRules(id, cssRules, name) {
    var marker = insertMarker(id);
    marker[0] += cssRules.join(' ');
    addNameForId(names, id, name);
  };

  var removeRules = function removeRules(id) {
    var marker = markers[id];
    if (marker === undefined) return;
    marker[0] = '';
    resetIdNames(names, id);
  };

  var css = function css() {
    var str = '';
    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      var cssForId = markers[id][0];
      if (cssForId) {
        str += makeTextMarker(id) + cssForId;
      }
    }
    return str;
  };

  var clone = function clone() {
    var namesClone = cloneNames(names);
    var markersClone = Object.create(null);

    // eslint-disable-next-line guard-for-in
    for (var id in markers) {
      markersClone[id] = [markers[id][0]];
    }

    return makeServerTag(namesClone, markersClone);
  };

  var tag = {
    clone: clone,
    css: css,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker: insertMarker,
    insertRules: insertRules,
    removeRules: removeRules,
    sealed: false,
    styleTag: null,
    toElement: wrapAsElement(css, names),
    toHTML: wrapAsHtmlTag(css, names)
  };

  return tag;
};

var makeTag = function makeTag(target, tagEl, forceServer, insertBefore, getImportRuleTag) {
  if (IS_BROWSER && !forceServer) {
    var el = makeStyleTag(target, tagEl, insertBefore);

    if (DISABLE_SPEEDY) {
      return makeBrowserTag(el, getImportRuleTag);
    } else {
      return makeSpeedyTag(el, getImportRuleTag);
    }
  }

  return makeServerTag();
};

var rehydrate = function rehydrate(tag, els, extracted) {
  /* add all extracted components to the new tag */
  for (var i = 0, len = extracted.length; i < len; i += 1) {
    var _extracted$i = extracted[i],
        componentId = _extracted$i.componentId,
        cssFromDOM = _extracted$i.cssFromDOM;

    var cssRules = splitByRules(cssFromDOM);
    tag.insertRules(componentId, cssRules);
  }

  /* remove old HTMLStyleElements, since they have been rehydrated */
  for (var _i = 0, _len = els.length; _i < _len; _i += 1) {
    var el = els[_i];
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }
};

// 

var SPLIT_REGEX = /\s+/;

/* determine the maximum number of components before tags are sharded */
var MAX_SIZE = void 0;
if (IS_BROWSER) {
  /* in speedy mode we can keep a lot more rules in a sheet before a slowdown can be expected */
  MAX_SIZE = DISABLE_SPEEDY ? 40 : 1000;
} else {
  /* for servers we do not need to shard at all */
  MAX_SIZE = -1;
}

var sheetRunningId = 0;
var master = void 0;

var StyleSheet = function () {

  /* a map from ids to tags */

  /* deferred rules for a given id */

  /* this is used for not reinjecting rules via hasNameForId() */

  /* when rules for an id are removed using remove() we have to ignore rehydratedNames for it */

  /* a list of tags belonging to this StyleSheet */

  /* a tag for import rules */

  /* current capacity until a new tag must be created */

  /* children (aka clones) of this StyleSheet inheriting all and future injections */

  function StyleSheet() {
    var _this = this;

    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : IS_BROWSER ? document.head : null;
    var forceServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    classCallCheck(this, StyleSheet);

    this.getImportRuleTag = function () {
      var importRuleTag = _this.importRuleTag;

      if (importRuleTag !== undefined) {
        return importRuleTag;
      }

      var firstTag = _this.tags[0];
      var insertBefore = true;

      return _this.importRuleTag = makeTag(_this.target, firstTag ? firstTag.styleTag : null, _this.forceServer, insertBefore);
    };

    sheetRunningId += 1;
    this.id = sheetRunningId;
    this.forceServer = forceServer;
    this.target = forceServer ? null : target;
    this.tagMap = {};
    this.deferred = {};
    this.rehydratedNames = {};
    this.ignoreRehydratedNames = {};
    this.tags = [];
    this.capacity = 1;
    this.clones = [];
  }

  /* rehydrate all SSR'd style tags */


  StyleSheet.prototype.rehydrate = function rehydrate$$1() {
    if (!IS_BROWSER || this.forceServer) return this;

    var els = [];
    var extracted = [];
    var isStreamed = false;

    /* retrieve all of our SSR style elements from the DOM */
    var nodes = document.querySelectorAll('style[' + SC_ATTR + '][' + SC_VERSION_ATTR + '="' + "4.4.1" + '"]');

    var nodesSize = nodes.length;

    /* abort rehydration if no previous style tags were found */
    if (!nodesSize) return this;

    for (var i = 0; i < nodesSize; i += 1) {
      var el = nodes[i];

      /* check if style tag is a streamed tag */
      if (!isStreamed) isStreamed = !!el.getAttribute(SC_STREAM_ATTR);

      /* retrieve all component names */
      var elNames = (el.getAttribute(SC_ATTR) || '').trim().split(SPLIT_REGEX);
      var elNamesSize = elNames.length;
      for (var j = 0, name; j < elNamesSize; j += 1) {
        name = elNames[j];
        /* add rehydrated name to sheet to avoid re-adding styles */
        this.rehydratedNames[name] = true;
      }

      /* extract all components and their CSS */
      extracted.push.apply(extracted, extractComps(el.textContent));

      /* store original HTMLStyleElement */
      els.push(el);
    }

    /* abort rehydration if nothing was extracted */
    var extractedSize = extracted.length;
    if (!extractedSize) return this;

    /* create a tag to be used for rehydration */
    var tag = this.makeTag(null);

    rehydrate(tag, els, extracted);

    /* reset capacity and adjust MAX_SIZE by the initial size of the rehydration */
    this.capacity = Math.max(1, MAX_SIZE - extractedSize);
    this.tags.push(tag);

    /* retrieve all component ids */
    for (var _j = 0; _j < extractedSize; _j += 1) {
      this.tagMap[extracted[_j].componentId] = tag;
    }

    return this;
  };

  /* retrieve a "master" instance of StyleSheet which is typically used when no other is available
   * The master StyleSheet is targeted by createGlobalStyle, keyframes, and components outside of any
    * StyleSheetManager's context */


  /* reset the internal "master" instance */
  StyleSheet.reset = function reset() {
    var forceServer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    master = new StyleSheet(undefined, forceServer).rehydrate();
  };

  /* adds "children" to the StyleSheet that inherit all of the parents' rules
   * while their own rules do not affect the parent */


  StyleSheet.prototype.clone = function clone() {
    var sheet = new StyleSheet(this.target, this.forceServer);

    /* add to clone array */
    this.clones.push(sheet);

    /* clone all tags */
    sheet.tags = this.tags.map(function (tag) {
      var ids = tag.getIds();
      var newTag = tag.clone();

      /* reconstruct tagMap */
      for (var i = 0; i < ids.length; i += 1) {
        sheet.tagMap[ids[i]] = newTag;
      }

      return newTag;
    });

    /* clone other maps */
    sheet.rehydratedNames = _extends({}, this.rehydratedNames);
    sheet.deferred = _extends({}, this.deferred);

    return sheet;
  };

  /* force StyleSheet to create a new tag on the next injection */


  StyleSheet.prototype.sealAllTags = function sealAllTags() {
    this.capacity = 1;

    this.tags.forEach(function (tag) {
      // eslint-disable-next-line no-param-reassign
      tag.sealed = true;
    });
  };

  StyleSheet.prototype.makeTag = function makeTag$$1(tag) {
    var lastEl = tag ? tag.styleTag : null;
    var insertBefore = false;

    return makeTag(this.target, lastEl, this.forceServer, insertBefore, this.getImportRuleTag);
  };

  /* get a tag for a given componentId, assign the componentId to one, or shard */
  StyleSheet.prototype.getTagForId = function getTagForId(id) {
    /* simply return a tag, when the componentId was already assigned one */
    var prev = this.tagMap[id];
    if (prev !== undefined && !prev.sealed) {
      return prev;
    }

    var tag = this.tags[this.tags.length - 1];

    /* shard (create a new tag) if the tag is exhausted (See MAX_SIZE) */
    this.capacity -= 1;

    if (this.capacity === 0) {
      this.capacity = MAX_SIZE;
      tag = this.makeTag(tag);
      this.tags.push(tag);
    }

    return this.tagMap[id] = tag;
  };

  /* mainly for createGlobalStyle to check for its id */


  StyleSheet.prototype.hasId = function hasId(id) {
    return this.tagMap[id] !== undefined;
  };

  /* caching layer checking id+name to already have a corresponding tag and injected rules */


  StyleSheet.prototype.hasNameForId = function hasNameForId(id, name) {
    /* exception for rehydrated names which are checked separately */
    if (this.ignoreRehydratedNames[id] === undefined && this.rehydratedNames[name]) {
      return true;
    }

    var tag = this.tagMap[id];
    return tag !== undefined && tag.hasNameForId(id, name);
  };

  /* registers a componentId and registers it on its tag */


  StyleSheet.prototype.deferredInject = function deferredInject(id, cssRules) {
    /* don't inject when the id is already registered */
    if (this.tagMap[id] !== undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].deferredInject(id, cssRules);
    }

    this.getTagForId(id).insertMarker(id);
    this.deferred[id] = cssRules;
  };

  /* injects rules for a given id with a name that will need to be cached */


  StyleSheet.prototype.inject = function inject(id, cssRules, name) {
    var clones = this.clones;


    for (var i = 0; i < clones.length; i += 1) {
      clones[i].inject(id, cssRules, name);
    }

    var tag = this.getTagForId(id);

    /* add deferred rules for component */
    if (this.deferred[id] !== undefined) {
      // Combine passed cssRules with previously deferred CSS rules
      // NOTE: We cannot mutate the deferred array itself as all clones
      // do the same (see clones[i].inject)
      var rules = this.deferred[id].concat(cssRules);
      tag.insertRules(id, rules, name);

      this.deferred[id] = undefined;
    } else {
      tag.insertRules(id, cssRules, name);
    }
  };

  /* removes all rules for a given id, which doesn't remove its marker but resets it */


  StyleSheet.prototype.remove = function remove(id) {
    var tag = this.tagMap[id];
    if (tag === undefined) return;

    var clones = this.clones;

    for (var i = 0; i < clones.length; i += 1) {
      clones[i].remove(id);
    }

    /* remove all rules from the tag */
    tag.removeRules(id);

    /* ignore possible rehydrated names */
    this.ignoreRehydratedNames[id] = true;

    /* delete possible deferred rules */
    this.deferred[id] = undefined;
  };

  StyleSheet.prototype.toHTML = function toHTML() {
    return this.tags.map(function (tag) {
      return tag.toHTML();
    }).join('');
  };

  StyleSheet.prototype.toReactElements = function toReactElements() {
    var id = this.id;


    return this.tags.map(function (tag, i) {
      var key = 'sc-' + id + '-' + i;
      return Object(react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"])(tag.toElement(), { key: key });
    });
  };

  createClass(StyleSheet, null, [{
    key: 'master',
    get: function get$$1() {
      return master || (master = new StyleSheet().rehydrate());
    }

    /* NOTE: This is just for backwards-compatibility with jest-styled-components */

  }, {
    key: 'instance',
    get: function get$$1() {
      return StyleSheet.master;
    }
  }]);
  return StyleSheet;
}();

// 

var Keyframes = function () {
  function Keyframes(name, rules) {
    var _this = this;

    classCallCheck(this, Keyframes);

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.inject(_this.id, _this.rules, _this.name);
      }
    };

    this.toString = function () {
      throw new StyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.rules = rules;

    this.id = 'sc-keyframes-' + name;
  }

  Keyframes.prototype.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}();

// 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */

var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

// 

// Taken from https://github.com/facebook/react/blob/b87aabdfe1b7461e7331abb3601d9e6bb27544bc/packages/react-dom/src/shared/dangerousStyleValue.js
function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__["default"])) {
    return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
}

// 

/**
 * It's falsish not falsy because 0 is allowed.
 */
var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCssArray = function objToCssArray(obj, prevKey) {
  var rules = [];
  var keys = Object.keys(obj);

  keys.forEach(function (key) {
    if (!isFalsish(obj[key])) {
      if (isPlainObject(obj[key])) {
        rules.push.apply(rules, objToCssArray(obj[key], key));

        return rules;
      } else if (isFunction(obj[key])) {
        rules.push(hyphenateStyleName(key) + ':', obj[key], ';');

        return rules;
      }
      rules.push(hyphenateStyleName(key) + ': ' + addUnitIfNeeded(key, obj[key]) + ';');
    }
    return rules;
  });

  return prevKey ? [prevKey + ' {'].concat(rules, ['}']) : rules;
};

function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);

      if (result === null) continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return null;
  }

  /* Handle other components */
  if (isStyledComponent(chunk)) {
    return '.' + chunk.styledComponentId;
  }

  /* Either execute or defer the function */
  if (isFunction(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);

      if ("development" !== 'production' && Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isElement"])(_result)) {
        // eslint-disable-next-line no-console
        console.warn(getComponentName(chunk) + ' is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.');
      }

      return flatten(_result, executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }

  /* Handle objects */
  return isPlainObject(chunk) ? objToCssArray(chunk) : chunk.toString();
}

// 

function css(styles) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  // $FlowFixMe
  return flatten(interleave(styles, interpolations));
}

// 

function constructWithOptions(componentConstructor, tag) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  if (!Object(react_is__WEBPACK_IMPORTED_MODULE_4__["isValidElementType"])(tag)) {
    throw new StyledComponentsError(1, String(tag));
  }

  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments
  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(undefined, arguments));
  };

  /* If config methods are called, wrap up a new template function and merge options */
  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
  };

  /* Modify/inject new props at runtime */
  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
}

// 
// Source: https://github.com/garycourt/murmurhash-js/blob/master/murmurhash2_gc.js
function murmurhash(c) {
  for (var e = c.length | 0, a = e | 0, d = 0, b; e >= 4;) {
    b = c.charCodeAt(d) & 255 | (c.charCodeAt(++d) & 255) << 8 | (c.charCodeAt(++d) & 255) << 16 | (c.charCodeAt(++d) & 255) << 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), b ^= b >>> 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16) ^ b, e -= 4, ++d;
  }
  switch (e) {
    case 3:
      a ^= (c.charCodeAt(d + 2) & 255) << 16;
    case 2:
      a ^= (c.charCodeAt(d + 1) & 255) << 8;
    case 1:
      a ^= c.charCodeAt(d) & 255, a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  }
  a ^= a >>> 13;
  a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  return (a ^ a >>> 15) >>> 0;
}

// 
/* eslint-disable no-bitwise */

/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */
var charsLength = 52;

/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};

/* input a number, usually a hash and convert it to base-52 */
function generateAlphabeticName(code) {
  var name = '';
  var x = void 0;

  /* get a char and divide by alphabet-length */
  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return getAlphabeticChar(x % charsLength) + name;
}

// 

function hasFunctionObjectKey(obj) {
  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (var key in obj) {
    if (isFunction(obj[key])) {
      return true;
    }
  }

  return false;
}

function isStaticRules(rules, attrs) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    // recursive case
    if (Array.isArray(rule) && !isStaticRules(rule, attrs)) {
      return false;
    } else if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  if (attrs.some(function (x) {
    return isFunction(x) || hasFunctionObjectKey(x);
  })) return false;

  return true;
}

// 

/* combines hashStr (murmurhash) and nameGenerator for convenience */
var hasher = function hasher(str) {
  return generateAlphabeticName(murmurhash(str));
};

/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */

var ComponentStyle = function () {
  function ComponentStyle(rules, attrs, componentId) {
    classCallCheck(this, ComponentStyle);

    this.rules = rules;
    this.isStatic = "development" === 'production' && isStaticRules(rules, attrs);
    this.componentId = componentId;

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  /*
   * Flattens a rule set into valid CSS
   * Hashes it, wraps the whole chunk in a .hash1234 {}
   * Returns the hash to be injected on render()
   * */


  ComponentStyle.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
    var isStatic = this.isStatic,
        componentId = this.componentId,
        lastClassName = this.lastClassName;

    if (IS_BROWSER && isStatic && typeof lastClassName === 'string' && styleSheet.hasNameForId(componentId, lastClassName)) {
      return lastClassName;
    }

    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var name = hasher(this.componentId + flatCSS.join(''));
    if (!styleSheet.hasNameForId(componentId, name)) {
      styleSheet.inject(this.componentId, stringifyRules(flatCSS, '.' + name, undefined, componentId), name);
    }

    this.lastClassName = name;
    return name;
  };

  ComponentStyle.generateName = function generateName(str) {
    return hasher(str);
  };

  return ComponentStyle;
}();

// 

var LIMIT = 200;

var createWarnTooManyClasses = (function (displayName) {
  var generatedClasses = {};
  var warningSeen = false;

  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;
      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.
        /* eslint-disable no-console, prefer-template */
        console.warn('Over ' + LIMIT + ' classes were generated for component ' + displayName + '. \n' + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs(props => ({\n' + '    style: {\n' + '      background: props.background,\n' + '    },\n' + '  }))`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 

var determineTheme = (function (props, fallbackTheme) {
  var defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EMPTY_OBJECT;

  // Props should take precedence over ThemeProvider, which should take precedence over
  // defaultProps, but React automatically puts defaultProps on props.

  /* eslint-disable react/prop-types, flowtype-errors/show-errors */
  var isDefaultTheme = defaultProps ? props.theme === defaultProps.theme : false;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme || defaultProps.theme;
  /* eslint-enable */

  return theme;
});

// 
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;

/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */
function escape(str) {
  return str
  // Replace all possible CSS selectors
  .replace(escapeRegex, '-')

  // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 

function isTag(target) {
  return typeof target === 'string' && ( true ? target.charAt(0) === target.charAt(0).toLowerCase() : undefined);
}

// 

function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? 'styled.' + target : 'Styled(' + getComponentName(target) + ')';
}

var _TYPE_STATICS;

var REACT_STATICS = {
  childContextTypes: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDerivedStateFromProps: true,
  propTypes: true,
  type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

var TYPE_STATICS = (_TYPE_STATICS = {}, _TYPE_STATICS[react_is__WEBPACK_IMPORTED_MODULE_4__["ForwardRef"]] = {
  $$typeof: true,
  render: true
}, _TYPE_STATICS);

var defineProperty$1 = Object.defineProperty,
    getOwnPropertyNames = Object.getOwnPropertyNames,
    _Object$getOwnPropert = Object.getOwnPropertySymbols,
    getOwnPropertySymbols = _Object$getOwnPropert === undefined ? function () {
  return [];
} : _Object$getOwnPropert,
    getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
    getPrototypeOf = Object.getPrototypeOf,
    objectPrototype = Object.prototype;
var arrayPrototype = Array.prototype;


function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components

    var inheritedComponent = getPrototypeOf(sourceComponent);

    if (inheritedComponent && inheritedComponent !== objectPrototype) {
      hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
    }

    var keys = arrayPrototype.concat(getOwnPropertyNames(sourceComponent),
    // $FlowFixMe
    getOwnPropertySymbols(sourceComponent));

    var targetStatics = TYPE_STATICS[targetComponent.$$typeof] || REACT_STATICS;

    var sourceStatics = TYPE_STATICS[sourceComponent.$$typeof] || REACT_STATICS;

    var i = keys.length;
    var descriptor = void 0;
    var key = void 0;

    // eslint-disable-next-line no-plusplus
    while (i--) {
      key = keys[i];

      if (
      // $FlowFixMe
      !KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) &&
      // $FlowFixMe
      !(targetStatics && targetStatics[key])) {
        descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        if (descriptor) {
          try {
            // Avoid failures from read-only properties
            defineProperty$1(targetComponent, key, descriptor);
          } catch (e) {
            /* fail silently */
          }
        }
      }
    }

    return targetComponent;
  }

  return targetComponent;
}

// 
function isDerivedReactComponent(fn) {
  return !!(fn && fn.prototype && fn.prototype.isReactComponent);
}

// 
// Helper to call a given function, only once
var once = (function (cb) {
  var called = false;

  return function () {
    if (!called) {
      called = true;
      cb.apply(undefined, arguments);
    }
  };
});

// 

var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();

var ThemeConsumer = ThemeContext.Consumer;

/**
 * Provide a theme to an entire react component tree via context
 */

var ThemeProvider = function (_Component) {
  inherits(ThemeProvider, _Component);

  function ThemeProvider(props) {
    classCallCheck(this, ThemeProvider);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = Object(memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.getContext.bind(_this));
    _this.renderInner = _this.renderInner.bind(_this);
    return _this;
  }

  ThemeProvider.prototype.render = function render() {
    if (!this.props.children) return null;

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeContext.Consumer,
      null,
      this.renderInner
    );
  };

  ThemeProvider.prototype.renderInner = function renderInner(outerTheme) {
    var context = this.getContext(this.props.theme, outerTheme);

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeContext.Provider,
      { value: context },
      this.props.children
    );
  };

  /**
   * Get the theme from the props, supporting both (outerTheme) => {}
   * as well as object notation
   */


  ThemeProvider.prototype.getTheme = function getTheme(theme, outerTheme) {
    if (isFunction(theme)) {
      var mergedTheme = theme(outerTheme);

      if ("development" !== 'production' && (mergedTheme === null || Array.isArray(mergedTheme) || (typeof mergedTheme === 'undefined' ? 'undefined' : _typeof(mergedTheme)) !== 'object')) {
        throw new StyledComponentsError(7);
      }

      return mergedTheme;
    }

    if (theme === null || Array.isArray(theme) || (typeof theme === 'undefined' ? 'undefined' : _typeof(theme)) !== 'object') {
      throw new StyledComponentsError(8);
    }

    return _extends({}, outerTheme, theme);
  };

  ThemeProvider.prototype.getContext = function getContext(theme, outerTheme) {
    return this.getTheme(theme, outerTheme);
  };

  return ThemeProvider;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

// 

var CLOSING_TAG_R = /^\s*<\/[a-z]/i;

var ServerStyleSheet = function () {
  function ServerStyleSheet() {
    classCallCheck(this, ServerStyleSheet);

    /* The master sheet might be reset, so keep a reference here */
    this.masterSheet = StyleSheet.master;
    this.instance = this.masterSheet.clone();
    this.sealed = false;
  }

  /**
   * Mark the ServerStyleSheet as being fully emitted and manually GC it from the
   * StyleSheet singleton.
   */


  ServerStyleSheet.prototype.seal = function seal() {
    if (!this.sealed) {
      /* Remove sealed StyleSheets from the master sheet */
      var index = this.masterSheet.clones.indexOf(this.instance);
      this.masterSheet.clones.splice(index, 1);
      this.sealed = true;
    }
  };

  ServerStyleSheet.prototype.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      throw new StyledComponentsError(2);
    }

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetManager,
      { sheet: this.instance },
      children
    );
  };

  ServerStyleSheet.prototype.getStyleTags = function getStyleTags() {
    this.seal();
    return this.instance.toHTML();
  };

  ServerStyleSheet.prototype.getStyleElement = function getStyleElement() {
    this.seal();
    return this.instance.toReactElements();
  };

  ServerStyleSheet.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
    var _this = this;

    {
      throw new StyledComponentsError(3);
    }

    /* the tag index keeps track of which tags have already been emitted */
    var instance = this.instance;

    var instanceTagIndex = 0;

    var streamAttr = SC_STREAM_ATTR + '="true"';

    var transformer = new stream.Transform({
      transform: function appendStyleChunks(chunk, /* encoding */_, callback) {
        var tags = instance.tags;

        var html = '';

        /* retrieve html for each new style tag */
        for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
          var tag = tags[instanceTagIndex];
          html += tag.toHTML(streamAttr);
        }

        /* force our StyleSheets to emit entirely new tags */
        instance.sealAllTags();

        var renderedHtml = chunk.toString();

        /* prepend style html to chunk, unless the start of the chunk is a closing tag in which case append right after that */
        if (CLOSING_TAG_R.test(renderedHtml)) {
          var endOfClosingTag = renderedHtml.indexOf('>');

          this.push(renderedHtml.slice(0, endOfClosingTag + 1) + html + renderedHtml.slice(endOfClosingTag + 1));
        } else this.push(html + renderedHtml);

        callback();
      }
    });

    readableStream.on('end', function () {
      return _this.seal();
    });

    readableStream.on('error', function (err) {
      _this.seal();

      // forward the error to the transform stream
      transformer.emit('error', err);
    });

    return readableStream.pipe(transformer);
  };

  return ServerStyleSheet;
}();

// 

var StyleSheetContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])();
var StyleSheetConsumer = StyleSheetContext.Consumer;

var StyleSheetManager = function (_Component) {
  inherits(StyleSheetManager, _Component);

  function StyleSheetManager(props) {
    classCallCheck(this, StyleSheetManager);

    var _this = possibleConstructorReturn(this, _Component.call(this, props));

    _this.getContext = Object(memoize_one__WEBPACK_IMPORTED_MODULE_5__["default"])(_this.getContext);
    return _this;
  }

  StyleSheetManager.prototype.getContext = function getContext(sheet, target) {
    if (sheet) {
      return sheet;
    } else if (target) {
      return new StyleSheet(target);
    } else {
      throw new StyledComponentsError(4);
    }
  };

  StyleSheetManager.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        sheet = _props.sheet,
        target = _props.target;


    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetContext.Provider,
      { value: this.getContext(sheet, target) },
       true ? react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.only(children) : undefined
    );
  };

  return StyleSheetManager;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);
 true ? StyleSheetManager.propTypes = {
  sheet: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.instanceOf(StyleSheet), prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.instanceOf(ServerStyleSheet)]),

  target: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    appendChild: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
  })
} : undefined;

// 

var identifiers = {};

/* We depend on components having unique IDs */
function generateId(_ComponentStyle, _displayName, parentComponentId) {
  var displayName = typeof _displayName !== 'string' ? 'sc' : escape(_displayName);

  /**
   * This ensures uniqueness if two components happen to share
   * the same displayName.
   */
  var nr = (identifiers[displayName] || 0) + 1;
  identifiers[displayName] = nr;

  var componentId = displayName + '-' + _ComponentStyle.generateName(displayName + nr);

  return parentComponentId ? parentComponentId + '-' + componentId : componentId;
}

// $FlowFixMe

var StyledComponent = function (_Component) {
  inherits(StyledComponent, _Component);

  function StyledComponent() {
    classCallCheck(this, StyledComponent);

    var _this = possibleConstructorReturn(this, _Component.call(this));

    _this.attrs = {};

    _this.renderOuter = _this.renderOuter.bind(_this);
    _this.renderInner = _this.renderInner.bind(_this);

    if (true) {
      _this.warnInnerRef = once(function (displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('The "innerRef" API has been removed in styled-components v4 in favor of React 16 ref forwarding, use "ref" instead like a typical component. "innerRef" was detected on component "' + displayName + '".')
        );
      });

      _this.warnAttrsFnObjectKeyDeprecated = once(function (key, displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('Functions as object-form attrs({}) keys are now deprecated and will be removed in a future version of styled-components. Switch to the new attrs(props => ({})) syntax instead for easier and more powerful composition. The attrs key in question is "' + key + '" on component "' + displayName + '".', '\n ' + new Error().stack)
        );
      });

      _this.warnNonStyledComponentAttrsObjectKey = once(function (key, displayName) {
        return (
          // eslint-disable-next-line no-console
          console.warn('It looks like you\'ve used a non styled-component as the value for the "' + key + '" prop in an object-form attrs constructor of "' + displayName + '".\n' + 'You should use the new function-form attrs constructor which avoids this issue: attrs(props => ({ yourStuff }))\n' + "To continue using the deprecated object syntax, you'll need to wrap your component prop in a function to make it available inside the styled component (you'll still get the deprecation warning though.)\n" + ('For example, { ' + key + ': () => InnerComponent } instead of { ' + key + ': InnerComponent }'))
        );
      });
    }
    return _this;
  }

  StyledComponent.prototype.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      StyleSheetConsumer,
      null,
      this.renderOuter
    );
  };

  StyledComponent.prototype.renderOuter = function renderOuter() {
    var styleSheet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : StyleSheet.master;

    this.styleSheet = styleSheet;

    // No need to subscribe a static component to theme changes, it won't change anything
    if (this.props.forwardedComponent.componentStyle.isStatic) return this.renderInner();

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeConsumer,
      null,
      this.renderInner
    );
  };

  StyledComponent.prototype.renderInner = function renderInner(theme) {
    var _props$forwardedCompo = this.props.forwardedComponent,
        componentStyle = _props$forwardedCompo.componentStyle,
        defaultProps = _props$forwardedCompo.defaultProps,
        displayName = _props$forwardedCompo.displayName,
        foldedComponentIds = _props$forwardedCompo.foldedComponentIds,
        styledComponentId = _props$forwardedCompo.styledComponentId,
        target = _props$forwardedCompo.target;


    var generatedClassName = void 0;
    if (componentStyle.isStatic) {
      generatedClassName = this.generateAndInjectStyles(EMPTY_OBJECT, this.props);
    } else {
      generatedClassName = this.generateAndInjectStyles(determineTheme(this.props, theme, defaultProps) || EMPTY_OBJECT, this.props);
    }

    var elementToBeCreated = this.props.as || this.attrs.as || target;
    var isTargetTag = isTag(elementToBeCreated);

    var propsForElement = {};
    var computedProps = _extends({}, this.props, this.attrs);

    var key = void 0;
    // eslint-disable-next-line guard-for-in
    for (key in computedProps) {
      if ("development" !== 'production' && key === 'innerRef' && isTargetTag) {
        this.warnInnerRef(displayName);
      }

      if (key === 'forwardedComponent' || key === 'as') {
        continue;
      } else if (key === 'forwardedRef') propsForElement.ref = computedProps[key];else if (key === 'forwardedAs') propsForElement.as = computedProps[key];else if (!isTargetTag || Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_7__["default"])(key)) {
        // Don't pass through non HTML tags through to HTML elements
        propsForElement[key] = computedProps[key];
      }
    }

    if (this.props.style && this.attrs.style) {
      propsForElement.style = _extends({}, this.attrs.style, this.props.style);
    }

    propsForElement.className = Array.prototype.concat(foldedComponentIds, styledComponentId, generatedClassName !== styledComponentId ? generatedClassName : null, this.props.className, this.attrs.className).filter(Boolean).join(' ');

    return Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(elementToBeCreated, propsForElement);
  };

  StyledComponent.prototype.buildExecutionContext = function buildExecutionContext(theme, props, attrs) {
    var _this2 = this;

    var context = _extends({}, props, { theme: theme });

    if (!attrs.length) return context;

    this.attrs = {};

    attrs.forEach(function (attrDef) {
      var resolvedAttrDef = attrDef;
      var attrDefWasFn = false;
      var attr = void 0;
      var key = void 0;

      if (isFunction(resolvedAttrDef)) {
        // $FlowFixMe
        resolvedAttrDef = resolvedAttrDef(context);
        attrDefWasFn = true;
      }

      /* eslint-disable guard-for-in */
      // $FlowFixMe
      for (key in resolvedAttrDef) {
        attr = resolvedAttrDef[key];

        if (!attrDefWasFn) {
          if (isFunction(attr) && !isDerivedReactComponent(attr) && !isStyledComponent(attr)) {
            if (true) {
              _this2.warnAttrsFnObjectKeyDeprecated(key, props.forwardedComponent.displayName);
            }

            attr = attr(context);

            if ("development" !== 'production' && react__WEBPACK_IMPORTED_MODULE_2___default.a.isValidElement(attr)) {
              _this2.warnNonStyledComponentAttrsObjectKey(key, props.forwardedComponent.displayName);
            }
          }
        }

        _this2.attrs[key] = attr;
        context[key] = attr;
      }
      /* eslint-enable */
    });

    return context;
  };

  StyledComponent.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
    var _props$forwardedCompo2 = props.forwardedComponent,
        attrs = _props$forwardedCompo2.attrs,
        componentStyle = _props$forwardedCompo2.componentStyle,
        warnTooManyClasses = _props$forwardedCompo2.warnTooManyClasses;

    // statically styled-components don't need to build an execution context object,
    // and shouldn't be increasing the number of class names

    if (componentStyle.isStatic && !attrs.length) {
      return componentStyle.generateAndInjectStyles(EMPTY_OBJECT, this.styleSheet);
    }

    var className = componentStyle.generateAndInjectStyles(this.buildExecutionContext(theme, props, attrs), this.styleSheet);

    if ("development" !== 'production' && warnTooManyClasses) warnTooManyClasses(className);

    return className;
  };

  return StyledComponent;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isClass = !isTag(target);

  var _options$displayName = options.displayName,
      displayName = _options$displayName === undefined ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === undefined ? generateId(ComponentStyle, options.displayName, options.parentComponentId) : _options$componentId,
      _options$ParentCompon = options.ParentComponent,
      ParentComponent = _options$ParentCompon === undefined ? StyledComponent : _options$ParentCompon,
      _options$attrs = options.attrs,
      attrs = _options$attrs === undefined ? EMPTY_ARRAY : _options$attrs;


  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + '-' + options.componentId : options.componentId || componentId;

  // fold the underlying StyledComponent attrs up (implicit extend)
  var finalAttrs =
  // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs;

  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, finalAttrs, styledComponentId);

  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */
  var WrappedStyledComponent = void 0;
  var forwardRef = function forwardRef(props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ParentComponent, _extends({}, props, { forwardedComponent: WrappedStyledComponent, forwardedRef: ref }));
  };
  forwardRef.displayName = displayName;
  WrappedStyledComponent = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(forwardRef);
  WrappedStyledComponent.displayName = displayName;

  // $FlowFixMe
  WrappedStyledComponent.attrs = finalAttrs;
  // $FlowFixMe
  WrappedStyledComponent.componentStyle = componentStyle;

  // $FlowFixMe
  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;

  // $FlowFixMe
  WrappedStyledComponent.styledComponentId = styledComponentId;

  // fold the underlying StyledComponent target up since we folded the styles
  // $FlowFixMe
  WrappedStyledComponent.target = isTargetStyledComp ? target.target : target;

  // $FlowFixMe
  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = objectWithoutProperties(options, ['componentId']);


    var newComponentId = previousComponentId && previousComponentId + '-' + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId,
      ParentComponent: ParentComponent
    });

    return createStyledComponent(tag, newOptions, rules);
  };

  // $FlowFixMe
  Object.defineProperty(WrappedStyledComponent, 'defaultProps', {
    get: function get$$1() {
      return this._foldedDefaultProps;
    },
    set: function set$$1(obj) {
      // $FlowFixMe
      this._foldedDefaultProps = isTargetStyledComp ? Object(merge_anything__WEBPACK_IMPORTED_MODULE_8__["default"])(target.defaultProps, obj) : obj;
    }
  });

  if (true) {
    // $FlowFixMe
    WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
  }

  // $FlowFixMe
  WrappedStyledComponent.toString = function () {
    return '.' + WrappedStyledComponent.styledComponentId;
  };

  if (isClass) {
    hoistNonReactStatics(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
}

// 
// Thanks to ReactDOMFactories for this handy list!

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
};

// Shorthands for all valid HTML Elements
domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
});

// 

var GlobalStyle = function () {
  function GlobalStyle(rules, componentId) {
    classCallCheck(this, GlobalStyle);

    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules, EMPTY_ARRAY);

    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }

  GlobalStyle.prototype.createStyles = function createStyles(executionContext, styleSheet) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stringifyRules(flatCSS, '');

    styleSheet.inject(this.componentId, css);
  };

  GlobalStyle.prototype.removeStyles = function removeStyles(styleSheet) {
    var componentId = this.componentId;

    if (styleSheet.hasId(componentId)) {
      styleSheet.remove(componentId);
    }
  };

  // TODO: overwrite in-place instead of remove+create?


  GlobalStyle.prototype.renderStyles = function renderStyles(executionContext, styleSheet) {
    this.removeStyles(styleSheet);
    this.createStyles(executionContext, styleSheet);
  };

  return GlobalStyle;
}();

// 

// place our cache into shared context so it'll persist between HMRs
if (IS_BROWSER) {
  window.scCGSHMRCache = {};
}

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));
  var id = 'sc-global-' + murmurhash(JSON.stringify(rules));
  var style = new GlobalStyle(rules, id);

  var GlobalStyleComponent = function (_React$Component) {
    inherits(GlobalStyleComponent, _React$Component);

    function GlobalStyleComponent(props) {
      classCallCheck(this, GlobalStyleComponent);

      var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

      var _this$constructor = _this.constructor,
          globalStyle = _this$constructor.globalStyle,
          styledComponentId = _this$constructor.styledComponentId;


      if (IS_BROWSER) {
        window.scCGSHMRCache[styledComponentId] = (window.scCGSHMRCache[styledComponentId] || 0) + 1;
      }

      /**
       * This fixes HMR compatibility. Don't ask me why, but this combination of
       * caching the closure variables via statics and then persisting the statics in
       * state works across HMR where no other combination did. ¯\_(ツ)_/¯
       */
      _this.state = {
        globalStyle: globalStyle,
        styledComponentId: styledComponentId
      };
      return _this;
    }

    GlobalStyleComponent.prototype.componentWillUnmount = function componentWillUnmount() {
      if (window.scCGSHMRCache[this.state.styledComponentId]) {
        window.scCGSHMRCache[this.state.styledComponentId] -= 1;
      }
      /**
       * Depending on the order "render" is called this can cause the styles to be lost
       * until the next render pass of the remaining instance, which may
       * not be immediate.
       */
      if (window.scCGSHMRCache[this.state.styledComponentId] === 0) {
        this.state.globalStyle.removeStyles(this.styleSheet);
      }
    };

    GlobalStyleComponent.prototype.render = function render() {
      var _this2 = this;

      if ("development" !== 'production' && react__WEBPACK_IMPORTED_MODULE_2___default.a.Children.count(this.props.children)) {
        // eslint-disable-next-line no-console
        console.warn('The global style component ' + this.state.styledComponentId + ' was given child JSX. createGlobalStyle does not render children.');
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
        StyleSheetConsumer,
        null,
        function (styleSheet) {
          _this2.styleSheet = styleSheet || StyleSheet.master;

          var globalStyle = _this2.state.globalStyle;


          if (globalStyle.isStatic) {
            globalStyle.renderStyles(STATIC_EXECUTION_CONTEXT, _this2.styleSheet);

            return null;
          } else {
            return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              ThemeConsumer,
              null,
              function (theme) {
                // $FlowFixMe
                var defaultProps = _this2.constructor.defaultProps;


                var context = _extends({}, _this2.props);

                if (typeof theme !== 'undefined') {
                  context.theme = determineTheme(_this2.props, theme, defaultProps);
                }

                globalStyle.renderStyles(context, _this2.styleSheet);

                return null;
              }
            );
          }
        }
      );
    };

    return GlobalStyleComponent;
  }(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

  GlobalStyleComponent.globalStyle = style;
  GlobalStyleComponent.styledComponentId = id;


  return GlobalStyleComponent;
}

// 

var replaceWhitespace = function replaceWhitespace(str) {
  return str.replace(/\s|\\n/g, '');
};

function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if ("development" !== 'production' && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    // eslint-disable-next-line no-console
    console.warn('`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.');
  }

  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(undefined, [strings].concat(interpolations));

  var name = generateAlphabeticName(murmurhash(replaceWhitespace(JSON.stringify(rules))));

  return new Keyframes(name, stringifyRules(rules, name, '@keyframes'));
}

// 

var withTheme = (function (Component$$1) {
  var WithTheme = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
      ThemeConsumer,
      null,
      function (theme) {
        // $FlowFixMe
        var defaultProps = Component$$1.defaultProps;

        var themeProp = determineTheme(props, theme, defaultProps);

        if ("development" !== 'production' && themeProp === undefined) {
          // eslint-disable-next-line no-console
          console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "' + getComponentName(Component$$1) + '"');
        }

        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component$$1, _extends({}, props, { theme: themeProp, ref: ref }));
      }
    );
  });

  hoistNonReactStatics(WithTheme, Component$$1);

  WithTheme.displayName = 'WithTheme(' + getComponentName(Component$$1) + ')';

  return WithTheme;
});

// 

/* eslint-disable */
var __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS = {
  StyleSheet: StyleSheet
};

// 

/* Warning if you've imported this file on React Native */
if ("development" !== 'production' && typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
  // eslint-disable-next-line no-console
  console.warn("It looks like you've imported 'styled-components' on React Native.\n" + "Perhaps you're looking to import 'styled-components/native'?\n" + 'Read more about this at https://www.styled-components.com/docs/basics#react-native');
}

/* Warning if there are several instances of styled-components */
if ("development" !== 'production' && "development" !== 'test' && typeof window !== 'undefined' && typeof navigator !== 'undefined' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Node.js') === -1 && navigator.userAgent.indexOf('jsdom') === -1) {
  window['__styled-components-init__'] = window['__styled-components-init__'] || 0;

  if (window['__styled-components-init__'] === 1) {
    // eslint-disable-next-line no-console
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. " + 'This may cause dynamic styles not rendering properly, errors happening during rehydration process ' + 'and makes your application bigger without a good reason.\n\n' + 'See https://s-c.sh/2BAXzed for more info.');
  }

  window['__styled-components-init__'] += 1;
}

//

/* harmony default export */ __webpack_exports__["default"] = (styled);

//# sourceMappingURL=styled-components.browser.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/stylis-rule-sheet/index.js":
/*!*************************************************!*\
  !*** ./node_modules/stylis-rule-sheet/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (factory) {
	 true ? (module['exports'] = factory()) :
		undefined
}(function () {

	'use strict'

	return function (insertRule) {
		var delimiter = '/*|*/'
		var needle = delimiter+'}'

		function toSheet (block) {
			if (block)
				try {
					insertRule(block + '}')
				} catch (e) {}
		}

		return function ruleSheet (context, content, selectors, parents, line, column, length, ns, depth, at) {
			switch (context) {
				// property
				case 1:
					// @import
					if (depth === 0 && content.charCodeAt(0) === 64)
						return insertRule(content+';'), ''
					break
				// selector
				case 2:
					if (ns === 0)
						return content + delimiter
					break
				// at-rule
				case 3:
					switch (ns) {
						// @font-face, @page
						case 102:
						case 112:
							return insertRule(selectors[0]+content), ''
						default:
							return content + (at === 0 ? delimiter : '')
					}
				case -2:
					content.split(needle).forEach(toSheet)
			}
		}
	}
}))


/***/ }),

/***/ "./node_modules/stylis/stylis.min.js":
/*!*******************************************!*\
  !*** ./node_modules/stylis/stylis.min.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e){ true?module.exports=e(null):undefined}(function e(a){"use strict";var r=/^\0+/g,c=/[\0\r\f]/g,s=/: */g,t=/zoo|gra/,i=/([,: ])(transform)/g,f=/,+\s*(?![^(]*[)])/g,n=/ +\s*(?![^(]*[)])/g,l=/ *[\0] */g,o=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,u=/:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,d=/\W+/g,b=/@(k\w+)\s*(\S*)\s*/,p=/::(place)/g,k=/:(read-only)/g,g=/\s+(?=[{\];=:>])/g,A=/([[}=:>])\s+/g,C=/(\{[^{]+?);(?=\})/g,w=/\s{2,}/g,v=/([^\(])(:+) */g,m=/[svh]\w+-[tblr]{2}/,x=/\(\s*(.*)\s*\)/g,$=/([\s\S]*?);/g,y=/-self|flex-/g,O=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,z=/([^-])(image-set\()/,N="-webkit-",S="-moz-",F="-ms-",W=59,q=125,B=123,D=40,E=41,G=91,H=93,I=10,J=13,K=9,L=64,M=32,P=38,Q=45,R=95,T=42,U=44,V=58,X=39,Y=34,Z=47,_=62,ee=43,ae=126,re=0,ce=12,se=11,te=107,ie=109,fe=115,ne=112,le=111,oe=105,he=99,ue=100,de=112,be=1,pe=1,ke=0,ge=1,Ae=1,Ce=1,we=0,ve=0,me=0,xe=[],$e=[],ye=0,Oe=null,je=-2,ze=-1,Ne=0,Se=1,Fe=2,We=3,qe=0,Be=1,De="",Ee="",Ge="";function He(e,a,s,t,i){for(var f,n,o=0,h=0,u=0,d=0,g=0,A=0,C=0,w=0,m=0,$=0,y=0,O=0,j=0,z=0,R=0,we=0,$e=0,Oe=0,je=0,ze=s.length,Je=ze-1,Re="",Te="",Ue="",Ve="",Xe="",Ye="";R<ze;){if(C=s.charCodeAt(R),R===Je)if(h+d+u+o!==0){if(0!==h)C=h===Z?I:Z;d=u=o=0,ze++,Je++}if(h+d+u+o===0){if(R===Je){if(we>0)Te=Te.replace(c,"");if(Te.trim().length>0){switch(C){case M:case K:case W:case J:case I:break;default:Te+=s.charAt(R)}C=W}}if(1===$e)switch(C){case B:case q:case W:case Y:case X:case D:case E:case U:$e=0;case K:case J:case I:case M:break;default:for($e=0,je=R,g=C,R--,C=W;je<ze;)switch(s.charCodeAt(je++)){case I:case J:case W:++R,C=g,je=ze;break;case V:if(we>0)++R,C=g;case B:je=ze}}switch(C){case B:for(g=(Te=Te.trim()).charCodeAt(0),y=1,je=++R;R<ze;){switch(C=s.charCodeAt(R)){case B:y++;break;case q:y--;break;case Z:switch(A=s.charCodeAt(R+1)){case T:case Z:R=Qe(A,R,Je,s)}break;case G:C++;case D:C++;case Y:case X:for(;R++<Je&&s.charCodeAt(R)!==C;);}if(0===y)break;R++}if(Ue=s.substring(je,R),g===re)g=(Te=Te.replace(r,"").trim()).charCodeAt(0);switch(g){case L:if(we>0)Te=Te.replace(c,"");switch(A=Te.charCodeAt(1)){case ue:case ie:case fe:case Q:f=a;break;default:f=xe}if(je=(Ue=He(a,f,Ue,A,i+1)).length,me>0&&0===je)je=Te.length;if(ye>0)if(f=Ie(xe,Te,Oe),n=Pe(We,Ue,f,a,pe,be,je,A,i,t),Te=f.join(""),void 0!==n)if(0===(je=(Ue=n.trim()).length))A=0,Ue="";if(je>0)switch(A){case fe:Te=Te.replace(x,Me);case ue:case ie:case Q:Ue=Te+"{"+Ue+"}";break;case te:if(Ue=(Te=Te.replace(b,"$1 $2"+(Be>0?De:"")))+"{"+Ue+"}",1===Ae||2===Ae&&Le("@"+Ue,3))Ue="@"+N+Ue+"@"+Ue;else Ue="@"+Ue;break;default:if(Ue=Te+Ue,t===de)Ve+=Ue,Ue=""}else Ue="";break;default:Ue=He(a,Ie(a,Te,Oe),Ue,t,i+1)}Xe+=Ue,O=0,$e=0,z=0,we=0,Oe=0,j=0,Te="",Ue="",C=s.charCodeAt(++R);break;case q:case W:if((je=(Te=(we>0?Te.replace(c,""):Te).trim()).length)>1){if(0===z)if((g=Te.charCodeAt(0))===Q||g>96&&g<123)je=(Te=Te.replace(" ",":")).length;if(ye>0)if(void 0!==(n=Pe(Se,Te,a,e,pe,be,Ve.length,t,i,t)))if(0===(je=(Te=n.trim()).length))Te="\0\0";switch(g=Te.charCodeAt(0),A=Te.charCodeAt(1),g){case re:break;case L:if(A===oe||A===he){Ye+=Te+s.charAt(R);break}default:if(Te.charCodeAt(je-1)===V)break;Ve+=Ke(Te,g,A,Te.charCodeAt(2))}}O=0,$e=0,z=0,we=0,Oe=0,Te="",C=s.charCodeAt(++R)}}switch(C){case J:case I:if(h+d+u+o+ve===0)switch($){case E:case X:case Y:case L:case ae:case _:case T:case ee:case Z:case Q:case V:case U:case W:case B:case q:break;default:if(z>0)$e=1}if(h===Z)h=0;else if(ge+O===0&&t!==te&&Te.length>0)we=1,Te+="\0";if(ye*qe>0)Pe(Ne,Te,a,e,pe,be,Ve.length,t,i,t);be=1,pe++;break;case W:case q:if(h+d+u+o===0){be++;break}default:switch(be++,Re=s.charAt(R),C){case K:case M:if(d+o+h===0)switch(w){case U:case V:case K:case M:Re="";break;default:if(C!==M)Re=" "}break;case re:Re="\\0";break;case ce:Re="\\f";break;case se:Re="\\v";break;case P:if(d+h+o===0&&ge>0)Oe=1,we=1,Re="\f"+Re;break;case 108:if(d+h+o+ke===0&&z>0)switch(R-z){case 2:if(w===ne&&s.charCodeAt(R-3)===V)ke=w;case 8:if(m===le)ke=m}break;case V:if(d+h+o===0)z=R;break;case U:if(h+u+d+o===0)we=1,Re+="\r";break;case Y:case X:if(0===h)d=d===C?0:0===d?C:d;break;case G:if(d+h+u===0)o++;break;case H:if(d+h+u===0)o--;break;case E:if(d+h+o===0)u--;break;case D:if(d+h+o===0){if(0===O)switch(2*w+3*m){case 533:break;default:y=0,O=1}u++}break;case L:if(h+u+d+o+z+j===0)j=1;break;case T:case Z:if(d+o+u>0)break;switch(h){case 0:switch(2*C+3*s.charCodeAt(R+1)){case 235:h=Z;break;case 220:je=R,h=T}break;case T:if(C===Z&&w===T&&je+2!==R){if(33===s.charCodeAt(je+2))Ve+=s.substring(je,R+1);Re="",h=0}}}if(0===h){if(ge+d+o+j===0&&t!==te&&C!==W)switch(C){case U:case ae:case _:case ee:case E:case D:if(0===O){switch(w){case K:case M:case I:case J:Re+="\0";break;default:Re="\0"+Re+(C===U?"":"\0")}we=1}else switch(C){case D:if(z+7===R&&108===w)z=0;O=++y;break;case E:if(0==(O=--y))we=1,Re+="\0"}break;case K:case M:switch(w){case re:case B:case q:case W:case U:case ce:case K:case M:case I:case J:break;default:if(0===O)we=1,Re+="\0"}}if(Te+=Re,C!==M&&C!==K)$=C}}m=w,w=C,R++}if(je=Ve.length,me>0)if(0===je&&0===Xe.length&&0===a[0].length==false)if(t!==ie||1===a.length&&(ge>0?Ee:Ge)===a[0])je=a.join(",").length+2;if(je>0){if(f=0===ge&&t!==te?function(e){for(var a,r,s=0,t=e.length,i=Array(t);s<t;++s){for(var f=e[s].split(l),n="",o=0,h=0,u=0,d=0,b=f.length;o<b;++o){if(0===(h=(r=f[o]).length)&&b>1)continue;if(u=n.charCodeAt(n.length-1),d=r.charCodeAt(0),a="",0!==o)switch(u){case T:case ae:case _:case ee:case M:case D:break;default:a=" "}switch(d){case P:r=a+Ee;case ae:case _:case ee:case M:case E:case D:break;case G:r=a+r+Ee;break;case V:switch(2*r.charCodeAt(1)+3*r.charCodeAt(2)){case 530:if(Ce>0){r=a+r.substring(8,h-1);break}default:if(o<1||f[o-1].length<1)r=a+Ee+r}break;case U:a="";default:if(h>1&&r.indexOf(":")>0)r=a+r.replace(v,"$1"+Ee+"$2");else r=a+r+Ee}n+=r}i[s]=n.replace(c,"").trim()}return i}(a):a,ye>0)if(void 0!==(n=Pe(Fe,Ve,f,e,pe,be,je,t,i,t))&&0===(Ve=n).length)return Ye+Ve+Xe;if(Ve=f.join(",")+"{"+Ve+"}",Ae*ke!=0){if(2===Ae&&!Le(Ve,2))ke=0;switch(ke){case le:Ve=Ve.replace(k,":"+S+"$1")+Ve;break;case ne:Ve=Ve.replace(p,"::"+N+"input-$1")+Ve.replace(p,"::"+S+"$1")+Ve.replace(p,":"+F+"input-$1")+Ve}ke=0}}return Ye+Ve+Xe}function Ie(e,a,r){var c=a.trim().split(o),s=c,t=c.length,i=e.length;switch(i){case 0:case 1:for(var f=0,n=0===i?"":e[0]+" ";f<t;++f)s[f]=Je(n,s[f],r,i).trim();break;default:f=0;var l=0;for(s=[];f<t;++f)for(var h=0;h<i;++h)s[l++]=Je(e[h]+" ",c[f],r,i).trim()}return s}function Je(e,a,r,c){var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);switch(t){case P:switch(ge+c){case 0:case 1:if(0===e.trim().length)break;default:return s.replace(h,"$1"+e.trim())}break;case V:switch(s.charCodeAt(1)){case 103:if(Ce>0&&ge>0)return s.replace(u,"$1").replace(h,"$1"+Ge);break;default:return e.trim()+s.replace(h,"$1"+e.trim())}default:if(r*ge>0&&s.indexOf("\f")>0)return s.replace(h,(e.charCodeAt(0)===V?"":"$1")+e.trim())}return e+s}function Ke(e,a,r,c){var l,o=0,h=e+";",u=2*a+3*r+4*c;if(944===u)return function(e){var a=e.length,r=e.indexOf(":",9)+1,c=e.substring(0,r).trim(),s=e.substring(r,a-1).trim();switch(e.charCodeAt(9)*Be){case 0:break;case Q:if(110!==e.charCodeAt(10))break;default:for(var t=s.split((s="",f)),i=0,r=0,a=t.length;i<a;r=0,++i){for(var l=t[i],o=l.split(n);l=o[r];){var h=l.charCodeAt(0);if(1===Be&&(h>L&&h<90||h>96&&h<123||h===R||h===Q&&l.charCodeAt(1)!==Q))switch(isNaN(parseFloat(l))+(-1!==l.indexOf("("))){case 1:switch(l){case"infinite":case"alternate":case"backwards":case"running":case"normal":case"forwards":case"both":case"none":case"linear":case"ease":case"ease-in":case"ease-out":case"ease-in-out":case"paused":case"reverse":case"alternate-reverse":case"inherit":case"initial":case"unset":case"step-start":case"step-end":break;default:l+=De}}o[r++]=l}s+=(0===i?"":",")+o.join(" ")}}if(s=c+s+";",1===Ae||2===Ae&&Le(s,1))return N+s+s;return s}(h);else if(0===Ae||2===Ae&&!Le(h,1))return h;switch(u){case 1015:return 97===h.charCodeAt(10)?N+h+h:h;case 951:return 116===h.charCodeAt(3)?N+h+h:h;case 963:return 110===h.charCodeAt(5)?N+h+h:h;case 1009:if(100!==h.charCodeAt(4))break;case 969:case 942:return N+h+h;case 978:return N+h+S+h+h;case 1019:case 983:return N+h+S+h+F+h+h;case 883:if(h.charCodeAt(8)===Q)return N+h+h;if(h.indexOf("image-set(",11)>0)return h.replace(z,"$1"+N+"$2")+h;return h;case 932:if(h.charCodeAt(4)===Q)switch(h.charCodeAt(5)){case 103:return N+"box-"+h.replace("-grow","")+N+h+F+h.replace("grow","positive")+h;case 115:return N+h+F+h.replace("shrink","negative")+h;case 98:return N+h+F+h.replace("basis","preferred-size")+h}return N+h+F+h+h;case 964:return N+h+F+"flex-"+h+h;case 1023:if(99!==h.charCodeAt(8))break;return l=h.substring(h.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),N+"box-pack"+l+N+h+F+"flex-pack"+l+h;case 1005:return t.test(h)?h.replace(s,":"+N)+h.replace(s,":"+S)+h:h;case 1e3:switch(o=(l=h.substring(13).trim()).indexOf("-")+1,l.charCodeAt(0)+l.charCodeAt(o)){case 226:l=h.replace(m,"tb");break;case 232:l=h.replace(m,"tb-rl");break;case 220:l=h.replace(m,"lr");break;default:return h}return N+h+F+l+h;case 1017:if(-1===h.indexOf("sticky",9))return h;case 975:switch(o=(h=e).length-10,u=(l=(33===h.charCodeAt(o)?h.substring(0,o):h).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|l.charCodeAt(7))){case 203:if(l.charCodeAt(8)<111)break;case 115:h=h.replace(l,N+l)+";"+h;break;case 207:case 102:h=h.replace(l,N+(u>102?"inline-":"")+"box")+";"+h.replace(l,N+l)+";"+h.replace(l,F+l+"box")+";"+h}return h+";";case 938:if(h.charCodeAt(5)===Q)switch(h.charCodeAt(6)){case 105:return l=h.replace("-items",""),N+h+N+"box-"+l+F+"flex-"+l+h;case 115:return N+h+F+"flex-item-"+h.replace(y,"")+h;default:return N+h+F+"flex-line-pack"+h.replace("align-content","").replace(y,"")+h}break;case 973:case 989:if(h.charCodeAt(3)!==Q||122===h.charCodeAt(4))break;case 931:case 953:if(true===j.test(e))if(115===(l=e.substring(e.indexOf(":")+1)).charCodeAt(0))return Ke(e.replace("stretch","fill-available"),a,r,c).replace(":fill-available",":stretch");else return h.replace(l,N+l)+h.replace(l,S+l.replace("fill-",""))+h;break;case 962:if(h=N+h+(102===h.charCodeAt(5)?F+h:"")+h,r+c===211&&105===h.charCodeAt(13)&&h.indexOf("transform",10)>0)return h.substring(0,h.indexOf(";",27)+1).replace(i,"$1"+N+"$2")+h}return h}function Le(e,a){var r=e.indexOf(1===a?":":"{"),c=e.substring(0,3!==a?r:10),s=e.substring(r+1,e.length-1);return Oe(2!==a?c:c.replace(O,"$1"),s,a)}function Me(e,a){var r=Ke(a,a.charCodeAt(0),a.charCodeAt(1),a.charCodeAt(2));return r!==a+";"?r.replace($," or ($1)").substring(4):"("+a+")"}function Pe(e,a,r,c,s,t,i,f,n,l){for(var o,h=0,u=a;h<ye;++h)switch(o=$e[h].call(Te,e,u,r,c,s,t,i,f,n,l)){case void 0:case false:case true:case null:break;default:u=o}if(u!==a)return u}function Qe(e,a,r,c){for(var s=a+1;s<r;++s)switch(c.charCodeAt(s)){case Z:if(e===T)if(c.charCodeAt(s-1)===T&&a+2!==s)return s+1;break;case I:if(e===Z)return s+1}return s}function Re(e){for(var a in e){var r=e[a];switch(a){case"keyframe":Be=0|r;break;case"global":Ce=0|r;break;case"cascade":ge=0|r;break;case"compress":we=0|r;break;case"semicolon":ve=0|r;break;case"preserve":me=0|r;break;case"prefix":if(Oe=null,!r)Ae=0;else if("function"!=typeof r)Ae=1;else Ae=2,Oe=r}}return Re}function Te(a,r){if(void 0!==this&&this.constructor===Te)return e(a);var s=a,t=s.charCodeAt(0);if(t<33)t=(s=s.trim()).charCodeAt(0);if(Be>0)De=s.replace(d,t===G?"":"-");if(t=1,1===ge)Ge=s;else Ee=s;var i,f=[Ge];if(ye>0)if(void 0!==(i=Pe(ze,r,f,f,pe,be,0,0,0,0))&&"string"==typeof i)r=i;var n=He(xe,f,r,0,0);if(ye>0)if(void 0!==(i=Pe(je,n,f,f,pe,be,n.length,0,0,0))&&"string"!=typeof(n=i))t=0;return De="",Ge="",Ee="",ke=0,pe=1,be=1,we*t==0?n:n.replace(c,"").replace(g,"").replace(A,"$1").replace(C,"$1").replace(w," ")}if(Te.use=function e(a){switch(a){case void 0:case null:ye=$e.length=0;break;default:if("function"==typeof a)$e[ye++]=a;else if("object"==typeof a)for(var r=0,c=a.length;r<c;++r)e(a[r]);else qe=0|!!a}return e},Te.set=Re,void 0!==a)Re(a);return Te});
//# sourceMappingURL=stylis.min.js.map

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var Utils = _interopRequireWildcard(__webpack_require__(/*! ./utils */ "./node_modules/vanilla-swipe/lib/utils/index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VanillaSwipe = /*#__PURE__*/function () {
  function VanillaSwipe(props) {
    _classCallCheck(this, VanillaSwipe);

    _defineProperty(this, "state", void 0);

    _defineProperty(this, "props", void 0);

    this.state = Utils.getInitialState();
    this.props = Utils.getInitialProps(props);
    this.handleSwipeStart = this.handleSwipeStart.bind(this);
    this.handleSwipeMove = this.handleSwipeMove.bind(this);
    this.handleSwipeEnd = this.handleSwipeEnd.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  _createClass(VanillaSwipe, [{
    key: "init",
    value: function init() {
      this.setupTouchListeners();
      this.setupMouseListeners();
    }
  }, {
    key: "update",
    value: function update(props) {
      var prevProps = this.props;
      var nextProps = Object.assign({}, prevProps, props);

      if (prevProps.element !== nextProps.element) {
        this.destroy();
        this.props = nextProps;
        this.init();
        return;
      }

      this.props = nextProps;

      if (prevProps.mouseTrackingEnabled !== nextProps.mouseTrackingEnabled) {
        nextProps.mouseTrackingEnabled ? this.setupMouseListeners() : this.cleanupMouseListeners();
      }

      if (prevProps.touchTrackingEnabled !== nextProps.touchTrackingEnabled) {
        nextProps.touchTrackingEnabled ? this.setupTouchListeners() : this.cleanupTouchListeners();
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.cleanupMouseListeners();
      this.cleanupTouchListeners();
      this.state = Utils.getInitialState();
      this.props = Utils.getInitialProps();
    }
  }, {
    key: "setupTouchListeners",
    value: function setupTouchListeners() {
      var _this$props = this.props,
          element = _this$props.element,
          touchTrackingEnabled = _this$props.touchTrackingEnabled;

      if (element && touchTrackingEnabled) {
        var isPassiveSupported = Utils.checkIsPassiveSupported();
        var options = Utils.getOptions(isPassiveSupported);
        element.addEventListener('touchstart', this.handleSwipeStart, options);
        element.addEventListener('touchmove', this.handleSwipeMove, options);
        element.addEventListener('touchend', this.handleSwipeEnd, options);
      }
    }
  }, {
    key: "cleanupTouchListeners",
    value: function cleanupTouchListeners() {
      var element = this.props.element;

      if (element) {
        element.removeEventListener('touchstart', this.handleSwipeStart);
        element.removeEventListener('touchmove', this.handleSwipeMove);
        element.removeEventListener('touchend', this.handleSwipeEnd);
      }
    }
  }, {
    key: "setupMouseListeners",
    value: function setupMouseListeners() {
      var _this$props2 = this.props,
          element = _this$props2.element,
          mouseTrackingEnabled = _this$props2.mouseTrackingEnabled,
          preventTrackingOnMouseleave = _this$props2.preventTrackingOnMouseleave;

      if (element && mouseTrackingEnabled) {
        element.addEventListener('mousedown', this.handleMouseDown);
        element.addEventListener('mousemove', this.handleMouseMove);
        element.addEventListener('mouseup', this.handleMouseUp);
        preventTrackingOnMouseleave && element.addEventListener('mouseleave', this.handleMouseLeave);
      }
    }
  }, {
    key: "cleanupMouseListeners",
    value: function cleanupMouseListeners() {
      var _this$props3 = this.props,
          element = _this$props3.element,
          preventTrackingOnMouseleave = _this$props3.preventTrackingOnMouseleave;

      if (element) {
        element.removeEventListener('mousedown', this.handleMouseDown);
        element.removeEventListener('mousemove', this.handleMouseMove);
        element.removeEventListener('mouseup', this.handleMouseUp);
        preventTrackingOnMouseleave && element.removeEventListener('mouseleave', this.handleMouseLeave);
      }
    }
  }, {
    key: "getPosition",
    value: function getPosition(e) {
      var _this$state = this.state,
          x = _this$state.x,
          y = _this$state.y,
          start = _this$state.start;
      var rotationAngle = this.props.rotationAngle;
      var movingPosition = Utils.calculateMovingPosition(e);
      var rotatePosition = Utils.rotateByAngle(movingPosition, rotationAngle);
      return Utils.calculatePosition({
        x: x,
        y: y,
        start: start
      }, rotatePosition);
    }
  }, {
    key: "handleSwipeStart",
    value: function handleSwipeStart(e) {
      if (Utils.checkIsMoreThanSingleTouches(e)) return;
      var rotationAngle = this.props.rotationAngle;
      var movingPosition = Utils.calculateMovingPosition(e);

      var _Utils$rotateByAngle = Utils.rotateByAngle(movingPosition, rotationAngle),
          x = _Utils$rotateByAngle.x,
          y = _Utils$rotateByAngle.y;

      this.state = {
        start: Date.now(),
        x: x,
        y: y,
        isSwiping: false
      };
    }
  }, {
    key: "handleSwipeMove",
    value: function handleSwipeMove(e) {
      var _this$state2 = this.state,
          x = _this$state2.x,
          y = _this$state2.y;
      if (!x || !y || Utils.checkIsMoreThanSingleTouches(e)) return;

      var _this$getPosition = this.getPosition(e),
          absX = _this$getPosition.absX,
          absY = _this$getPosition.absY,
          deltaX = _this$getPosition.deltaX,
          deltaY = _this$getPosition.deltaY,
          duration = _this$getPosition.duration;

      var _this$props4 = this.props,
          delta = _this$props4.delta,
          onSwiping = _this$props4.onSwiping,
          preventDefaultTouchmoveEvent = _this$props4.preventDefaultTouchmoveEvent;
      if (e.cancelable && preventDefaultTouchmoveEvent) e.preventDefault();
      if (absX < Number(delta) && absY < Number(delta) && !this.state.isSwiping) return;
      this.state.isSwiping = true;

      if (onSwiping) {
        onSwiping(e, deltaX, deltaY, absX, absY, duration);
      }
    }
  }, {
    key: "handleSwipeEnd",
    value: function handleSwipeEnd(e) {
      var _this$props5 = this.props,
          onSwiped = _this$props5.onSwiped,
          onTap = _this$props5.onTap;

      if (this.state.isSwiping) {
        var position = this.getPosition(e);
        var deltaX = position.deltaX,
            deltaY = position.deltaY,
            absX = position.absX,
            absY = position.absY,
            duration = position.duration;
        onSwiped && onSwiped(e, deltaX, deltaY, absX, absY, duration);
      } else {
        onTap && onTap(e);
      }

      this.state = Utils.getInitialState();
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(e) {
      this.handleSwipeStart(e);
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(e) {
      this.handleSwipeMove(e);
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(e) {
      this.handleSwipeEnd(e);
    }
  }, {
    key: "handleMouseLeave",
    value: function handleMouseLeave() {
      var element = this.props.element;
      var isSwiping = this.state.isSwiping;

      if (element && isSwiping) {
        element.dispatchEvent(new Event('mouseup', {
          bubbles: true,
          cancelable: true
        }));
      }
    }
  }]);

  return VanillaSwipe;
}();

exports["default"] = VanillaSwipe;

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/calculateDuration.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/calculateDuration.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateDuration = calculateDuration;

function calculateDuration() {
  var prevTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var nextTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return prevTime ? nextTime - prevTime : 0;
}

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/calculateMovingPosition.js":
/*!*************************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/calculateMovingPosition.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateMovingPosition = calculateMovingPosition;

function calculateMovingPosition(e) {
  if ('changedTouches' in e) {
    var touches = e.changedTouches && e.changedTouches[0];
    return {
      x: touches && touches.clientX,
      y: touches && touches.clientY
    };
  }

  return {
    x: e.clientX,
    y: e.clientY
  };
}

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/calculatePosition.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/calculatePosition.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculatePosition = calculatePosition;

var _calculateDuration = __webpack_require__(/*! ./calculateDuration */ "./node_modules/vanilla-swipe/lib/utils/calculateDuration.js");

var _calculateVelocity = __webpack_require__(/*! ./calculateVelocity */ "./node_modules/vanilla-swipe/lib/utils/calculateVelocity.js");

function calculatePosition(prevPos, nextPos) {
  var deltaX = prevPos.x - nextPos.x;
  var deltaY = prevPos.y - nextPos.y;
  var absX = Math.abs(deltaX);
  var absY = Math.abs(deltaY);
  var duration = (0, _calculateDuration.calculateDuration)(prevPos.start, Date.now());
  var velocity = (0, _calculateVelocity.calculateVelocity)(absX, absY, duration);
  return {
    deltaX: deltaX,
    deltaY: deltaY,
    absX: absX,
    absY: absY,
    duration: duration,
    velocity: velocity
  };
}

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/calculateVelocity.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/calculateVelocity.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateVelocity = calculateVelocity;

function calculateVelocity(x, y, time) {
  var magnitude = Math.sqrt(x * x + y * y);
  return magnitude / (time || 1);
}

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/checkIsMoreThanSingleTouches.js":
/*!******************************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/checkIsMoreThanSingleTouches.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkIsMoreThanSingleTouches = void 0;

var checkIsMoreThanSingleTouches = function checkIsMoreThanSingleTouches(e) {
  return Boolean(e.touches && e.touches.length > 1);
};

exports.checkIsMoreThanSingleTouches = checkIsMoreThanSingleTouches;

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/checkIsPassiveSupported.js":
/*!*************************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/checkIsPassiveSupported.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkIsPassiveSupported = checkIsPassiveSupported;
exports.noop = void 0;

var _createOptions = __webpack_require__(/*! ./createOptions */ "./node_modules/vanilla-swipe/lib/utils/createOptions.js");

function checkIsPassiveSupported() {
  var isPassiveSupported = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var proxy = {
    isPassiveSupported: isPassiveSupported
  };

  try {
    var options = (0, _createOptions.createOptions)(proxy);
    window.addEventListener('checkIsPassiveSupported', noop, options);
    window.removeEventListener('checkIsPassiveSupported', noop, options);
  } catch (err) {}

  return proxy.isPassiveSupported;
}

var noop = function noop() {};

exports.noop = noop;

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/createOptions.js":
/*!***************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/createOptions.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOptions = createOptions;

function createOptions() {
  var proxy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  Object.defineProperty(proxy, 'passive', {
    get: function get() {
      this.isPassiveSupported = true;
      return true;
    },
    enumerable: true
  });
  return proxy;
}

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/getInitialProps.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/getInitialProps.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInitialProps = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getInitialProps = function getInitialProps() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _objectSpread({
    element: null,
    delta: 10,
    rotationAngle: 0,
    mouseTrackingEnabled: false,
    touchTrackingEnabled: true,
    preventDefaultTouchmoveEvent: false,
    preventTrackingOnMouseleave: false
  }, props);
};

exports.getInitialProps = getInitialProps;

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/getInitialState.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/getInitialState.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInitialState = void 0;

var getInitialState = function getInitialState() {
  return {
    x: 0,
    y: 0,
    start: 0,
    isSwiping: false
  };
};

exports.getInitialState = getInitialState;

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/getOptions.js":
/*!************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/getOptions.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOptions = getOptions;

function getOptions() {
  var isPassiveSupported = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (isPassiveSupported) {
    return {
      passive: false
    };
  }

  return {};
}

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getInitialState = __webpack_require__(/*! ./getInitialState */ "./node_modules/vanilla-swipe/lib/utils/getInitialState.js");

Object.keys(_getInitialState).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getInitialState[key];
    }
  });
});

var _getInitialProps = __webpack_require__(/*! ./getInitialProps */ "./node_modules/vanilla-swipe/lib/utils/getInitialProps.js");

Object.keys(_getInitialProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getInitialProps[key];
    }
  });
});

var _checkIsPassiveSupported = __webpack_require__(/*! ./checkIsPassiveSupported */ "./node_modules/vanilla-swipe/lib/utils/checkIsPassiveSupported.js");

Object.keys(_checkIsPassiveSupported).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _checkIsPassiveSupported[key];
    }
  });
});

var _calculateDuration = __webpack_require__(/*! ./calculateDuration */ "./node_modules/vanilla-swipe/lib/utils/calculateDuration.js");

Object.keys(_calculateDuration).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _calculateDuration[key];
    }
  });
});

var _calculatePosition = __webpack_require__(/*! ./calculatePosition */ "./node_modules/vanilla-swipe/lib/utils/calculatePosition.js");

Object.keys(_calculatePosition).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _calculatePosition[key];
    }
  });
});

var _calculateMovingPosition = __webpack_require__(/*! ./calculateMovingPosition */ "./node_modules/vanilla-swipe/lib/utils/calculateMovingPosition.js");

Object.keys(_calculateMovingPosition).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _calculateMovingPosition[key];
    }
  });
});

var _calculateVelocity = __webpack_require__(/*! ./calculateVelocity */ "./node_modules/vanilla-swipe/lib/utils/calculateVelocity.js");

Object.keys(_calculateVelocity).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _calculateVelocity[key];
    }
  });
});

var _rotateByAngle = __webpack_require__(/*! ./rotateByAngle */ "./node_modules/vanilla-swipe/lib/utils/rotateByAngle.js");

Object.keys(_rotateByAngle).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _rotateByAngle[key];
    }
  });
});

var _checkIsMoreThanSingleTouches = __webpack_require__(/*! ./checkIsMoreThanSingleTouches */ "./node_modules/vanilla-swipe/lib/utils/checkIsMoreThanSingleTouches.js");

Object.keys(_checkIsMoreThanSingleTouches).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _checkIsMoreThanSingleTouches[key];
    }
  });
});

var _createOptions = __webpack_require__(/*! ./createOptions */ "./node_modules/vanilla-swipe/lib/utils/createOptions.js");

Object.keys(_createOptions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _createOptions[key];
    }
  });
});

var _getOptions = __webpack_require__(/*! ./getOptions */ "./node_modules/vanilla-swipe/lib/utils/getOptions.js");

Object.keys(_getOptions).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getOptions[key];
    }
  });
});

/***/ }),

/***/ "./node_modules/vanilla-swipe/lib/utils/rotateByAngle.js":
/*!***************************************************************!*\
  !*** ./node_modules/vanilla-swipe/lib/utils/rotateByAngle.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rotateByAngle = rotateByAngle;

function rotateByAngle(position) {
  var angle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (angle === 0) {
    return position;
  }

  var x = position.x,
      y = position.y;
  var angleInRadians = Math.PI / 180 * angle;
  var rotatedX = x * Math.cos(angleInRadians) + y * Math.sin(angleInRadians);
  var rotatedY = y * Math.cos(angleInRadians) - x * Math.sin(angleInRadians);
  return {
    x: rotatedX,
    y: rotatedY
  };
}

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Intro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Intro */ "./components/Intro.js");
/* harmony import */ var _components_ImageSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ImageSlider */ "./components/ImageSlider.js");
/* harmony import */ var _components_Location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Location */ "./components/Location.js");
/* harmony import */ var _components_Share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Share */ "./components/Share.js");
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




var Index = /*#__PURE__*/function (_React$Component) {
  _inherits(Index, _React$Component);
  var _super = _createSuper(Index);
  function Index() {
    _classCallCheck(this, Index);
    return _super.apply(this, arguments);
  }
  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Kakao.init('cd88b238750f20e9f5b1ff70d7a78675');
    }
  }, {
    key: "render",
    value: function render() {
      var prefix =  false ? undefined : '';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "hide"
      }, "\uD558\uC628\uC774\uC758 \uCCAB \uC0DD\uC77C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Intro__WEBPACK_IMPORTED_MODULE_1__["default"], {
        prefix: prefix
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ImageSlider__WEBPACK_IMPORTED_MODULE_2__["default"], {
        prefix: prefix
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Location__WEBPACK_IMPORTED_MODULE_3__["default"], {
        prefix: prefix
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Share__WEBPACK_IMPORTED_MODULE_4__["default"], {
        prefix: prefix
      }));
    }
  }]);
  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (Index);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/', function() {
module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");

return { page: module.exports.default }});

/***/ }),

/***/ "dll-reference dll_e21296ef0094940af1b6":
/*!*******************************************!*\
  !*** external "dll_e21296ef0094940af1b6" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_e21296ef0094940af1b6;

/***/ })

},[[3,"static/runtime/webpack.js","styles"]]]));;
//# sourceMappingURL=index.js.map