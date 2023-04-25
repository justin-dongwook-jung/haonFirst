webpackHotUpdate("static/development/pages/index.js",{

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
    _defineProperty(_assertThisInitialized(_this), "openKakaoNavi", function (e) {
      e.preventDefault();
      //<![CDATA[
      Kakao.Navi.start({
        name: "더블유페스타 서초",
        x: 37.492436,
        y: 127.007921,
        coordType: "wgs84"
      });
      //]]>
    });
    return _this;
  }
  _createClass(Location, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
      var options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(37.492436, 127.007921),
        level: 4
      };
      //지도 생성 및 객체 리턴
      var map = new kakao.maps.Map(container, options);
      var marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(37.492436, 127.007921)
      });
      marker.setMap(map);
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
        href: "https://api2.sktelecom.com/tmap/app/routes?appKey=Vkbugqw22G1b1WAKvCUlY4tN0MwXiaWJ7BcxydoS 3&name=W\uD398\uC2A4\uD0C0&lon=127.007921&lat=37.492436"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Address, null, "\uC11C\uC6B8\uD2B9\uBCC4\uC2DC \uC11C\uCD08\uAD6C", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), " \uBC18\uD3EC\uB300\uB85C 138(\uC591\uC9C4\uBE4C\uB529) \uC9C0\uD558 1\uCE35"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WayBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "\uC790\uAC00\uC6A9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\uB0B4\uBE44\uAC8C\uC774\uC158\uC5D0 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "\uB354\uBE14\uC720\uD398\uC2A4\uD0C0 \uC11C\uCD08\uC810"), " \uAC80\uC0C9", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "\uC8FC\uCC28 2\uC2DC\uAC04 \uBB34\uB8CC")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WayBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "\uC9C0\uD558\uCCA0\uB85C \uC624\uC2DC\uB294 \uBC29\uBC95"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "\uC11C\uCD08\uC5ED 8\uBC88\uCD9C\uAD6C(", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ColorSpan, {
        color: "#61b057"
      }, "2\uD638\uC120"), ")"), "\uBC14\uB85C \uC55E \uC591\uC9C4\uBE4C\uB529")));
    }
  }]);
  return Location;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
/* harmony default export */ __webpack_exports__["default"] = (Location);

/***/ })

})
//# sourceMappingURL=index.js.5581347469993962b2de.hot-update.js.map