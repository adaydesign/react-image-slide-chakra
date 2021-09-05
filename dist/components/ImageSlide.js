"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = require("@chakra-ui/react");

var _react2 = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const defaultValues = {
  images: null,
  captions: null,
  index: 0,
  prevIndex: -1
};
const ImageSlideContext = /*#__PURE__*/(0, _react2.createContext)(defaultValues);

const ImageSlideController = _ref => {
  let {
    auto
  } = _ref;
  const [slide, setSlide] = (0, _react2.useContext)(ImageSlideContext);

  const changeSlide = index => {
    if (index >= (slide === null || slide === void 0 ? void 0 : slide.images.length)) {
      index = 0;
    }

    setSlide(prev => {
      return _objectSpread(_objectSpread({}, prev), {}, {
        index: index
      });
    });
  };

  var interval = null;
  const autoSlide = (0, _react2.useRef)();

  autoSlide.current = () => {
    if (auto > 0) {
      interval = setInterval(() => {
        setSlide(prev => {
          return _objectSpread(_objectSpread({}, prev), {}, {
            index: prev.index + 1 >= prev.images.length ? 0 : prev.index + 1
          });
        });
      }, auto);
    }
  };

  (0, _react2.useEffect)(() => {
    autoSlide.current();
    return () => clearInterval(interval);
  }, [interval]);
  return /*#__PURE__*/_react2.default.createElement(_react.HStack, {
    mt: 4,
    w: "full",
    justify: "center"
  }, (slide === null || slide === void 0 ? void 0 : slide.images) && (slide === null || slide === void 0 ? void 0 : slide.images.map((img, index) => /*#__PURE__*/_react2.default.createElement(_react.Button, {
    onClick: () => changeSlide(index),
    colorScheme: (slide === null || slide === void 0 ? void 0 : slide.index) === index ? "blue" : "gray",
    borderRadius: "full",
    size: "sm",
    key: "button_".concat(img)
  }, index + 1))));
};

const ImageDisplay = _ref2 => {
  let {
    minH
  } = _ref2;
  const [slide] = (0, _react2.useContext)(ImageSlideContext);
  return (slide === null || slide === void 0 ? void 0 : slide.images) && /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    align: "center",
    direction: "column",
    minH: minH
  }, (slide === null || slide === void 0 ? void 0 : slide.images) && (slide === null || slide === void 0 ? void 0 : slide.images.map((img, index) => /*#__PURE__*/_react2.default.createElement(_react.Collapse, {
    animateOpacity: true,
    in: index === (slide === null || slide === void 0 ? void 0 : slide.index),
    key: "image_".concat(img)
  }, /*#__PURE__*/_react2.default.createElement(_react.Image, {
    src: img
  })))));
};

const CaptionDisplay = () => {
  const [slide] = (0, _react2.useContext)(ImageSlideContext);
  const caption = (0, _react2.useMemo)(() => {
    return slide === null || slide === void 0 ? void 0 : slide.captions[slide === null || slide === void 0 ? void 0 : slide.index];
  }, [slide]);
  return /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    w: "full",
    p: 4,
    justify: "center"
  }, /*#__PURE__*/_react2.default.createElement(_react.Text, null, caption));
};

const ImageSlide = _ref3 => {
  let {
    images,
    captions,
    auto = 5000,
    minH = "500px"
  } = _ref3;
  const [slide, setSlide] = (0, _react2.useState)(_objectSpread(_objectSpread({}, defaultValues), {}, {
    images: images,
    captions: captions
  }));
  return /*#__PURE__*/_react2.default.createElement(ImageSlideContext.Provider, {
    value: [slide, setSlide]
  }, /*#__PURE__*/_react2.default.createElement(_react.Flex, {
    w: "full",
    direction: "column"
  }, /*#__PURE__*/_react2.default.createElement(ImageDisplay, {
    minH: minH
  }), /*#__PURE__*/_react2.default.createElement(CaptionDisplay, null), /*#__PURE__*/_react2.default.createElement(ImageSlideController, {
    auto: auto
  })));
};

var _default = ImageSlide;
exports.default = _default;