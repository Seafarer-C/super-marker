/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../core/2d/src/base/event.ts":
/*!************************************!*\
  !*** ../core/2d/src/base/event.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventCenter": () => (/* binding */ EventCenter)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * 发布订阅，事件中心
 * 应用场景：可以在渲染前后、初始化物体前后、物体状态改变时触发一系列事件
 */
var EventCenter = /*#__PURE__*/function () {
  function EventCenter() {
    _classCallCheck(this, EventCenter);
  }

  _createClass(EventCenter, [{
    key: "on",
    value: function on(eventName, handler) {
      if (!this.__eventListeners) {
        this.__eventListeners = {};
      }

      if (!this.__eventListeners[eventName]) {
        this.__eventListeners[eventName] = [];
      }

      this.__eventListeners[eventName].push(handler);

      return this;
    }
  }, {
    key: "off",
    value: function off(eventName, handler) {
      if (!this.__eventListeners) {
        return this;
      }

      if (arguments.length === 0) {
        // 如果没有参数，就是解绑所有事件
        for (eventName in this.__eventListeners) {
          this._removeEventListener.call(this, eventName);
        }
      } else {
        // 解绑单个事件
        this._removeEventListener.call(this, eventName, handler);
      }

      return this;
    }
  }, {
    key: "emit",
    value: function emit(eventName) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!this.__eventListeners) {
        return this;
      }

      var listenersForEvent = this.__eventListeners[eventName];

      if (!listenersForEvent) {
        return this;
      }

      for (var i = 0, len = listenersForEvent.length; i < len; i++) {
        listenersForEvent[i] && listenersForEvent[i].call(this, options);
      }

      this.__eventListeners[eventName] = listenersForEvent.filter(function (value) {
        return value !== false;
      });
      return this;
    }
  }, {
    key: "_removeEventListener",
    value: function _removeEventListener(eventName, handler) {
      if (!this.__eventListeners[eventName]) {
        return;
      }

      var eventListener = this.__eventListeners[eventName]; // 注意：这里我们删除监听一般都是置为 null 或者 false
      // 当然也可以用 splice 删除，不过 splice 会改变数组长度，这点要尤为注意

      if (handler) {
        eventListener[eventListener.indexOf(handler)] = false;
      } else {
        eventListener.fill(false);
      }
    }
  }]);

  return EventCenter;
}();

/***/ }),

/***/ "../core/2d/src/base/group.ts":
/*!************************************!*\
  !*** ../core/2d/src/base/group.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Group": () => (/* binding */ Group)
/* harmony export */ });
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "../core/2d/src/base/shape.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "../core/2d/src/base/utils.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



/**
 * 组类，也就是拖蓝框选区域包围的那些物体构成了一个组
 * Group 虽然继承至 Shape，但是要注意获取某些属性有时是没有的
 */

var Group = /*#__PURE__*/function (_Shape) {
  _inherits(Group, _Shape);

  var _super = _createSuper(Group);

  function Group(objects) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Group);

    _this = _super.call(this, options);
    _this.type = "group";
    _this.objects = objects || [];
    _this.originalState = {};

    _this._calcBounds();

    _this._updateObjectsCoords();

    _this.setCoords();

    return _this;
  }
  /** 更新所有物体坐标系 */


  _createClass(Group, [{
    key: "_updateObjectsCoords",
    value: function _updateObjectsCoords() {
      var groupDeltaX = this.left,
          groupDeltaY = this.top;
      this.objects.forEach(function (object) {
        var objectLeft = object.get("left"),
            objectTop = object.get("top");
        object.set("left", objectLeft - groupDeltaX);
        object.set("top", objectTop - groupDeltaY);
        object.setCoords(); // 当有选中组的时候，不显示物体的控制点

        object.orignHasControls = object.hasControls;
        object.hasControls = false;
      });
    }
  }, {
    key: "getObjects",
    value: function getObjects() {
      return this.objects;
    }
    /** 将物体添加到 group 中，并重新计算位置尺寸等 */

  }, {
    key: "addWithUpdate",
    value: function addWithUpdate(object) {
      this._restoreObjectsState();

      this.objects.push(object);

      this._calcBounds();

      this._updateObjectsCoords();

      return this;
    }
    /** 将物体添加到 group 中 */

  }, {
    key: "add",
    value: function add(object) {
      this.objects.push(object);
      return this;
    }
    /** 将物体从 group 中移除 */

  }, {
    key: "remove",
    value: function remove(object) {
      _utils__WEBPACK_IMPORTED_MODULE_1__.Util.removeFromArray(this.objects, object);
      return this;
    }
    /** 将物体从组中移除，并重新计算组的大小位置 */

  }, {
    key: "removeWithUpdate",
    value: function removeWithUpdate(object) {
      this._restoreObjectsState();

      _utils__WEBPACK_IMPORTED_MODULE_1__.Util.removeFromArray(this.objects, object);
      object.setActive(false);

      this._calcBounds();

      this._updateObjectsCoords();

      return this;
    }
    /** 物体是否在 group 中 */

  }, {
    key: "contains",
    value: function contains(object) {
      return this.objects.indexOf(object) > -1;
    }
    /** 获取 group 尺寸 */

  }, {
    key: "size",
    value: function size() {
      return this.getObjects().length;
    }
  }, {
    key: "render",
    value: function render(ctx) {
      ctx.save();
      this.transform(ctx); // let groupScaleFactor = Math.max(this.scaleX, this.scaleY);

      for (var i = 0, len = this.objects.length; i < len; i++) {
        var object = this.objects[i],
            // originalScaleFactor = object.borderScaleFactor,
        originalHasRotatingPoint = object.hasRotatingPoint; // object.borderScaleFactor = groupScaleFactor;

        object.hasRotatingPoint = false;
        object.render(ctx); // object.borderScaleFactor = originalScaleFactor;

        object.hasRotatingPoint = originalHasRotatingPoint;
      }

      if (this.active) {
        // if (!noTransform && this.active) {
        this.drawBorders(ctx);
        this.drawControls(ctx);
      }

      ctx.restore();
      this.setCoords();
    }
    /** 根据 index 获取 group 中的某个物体 */

  }, {
    key: "item",
    value: function item(index) {
      return this.getObjects()[index];
    }
    /** 还原创建 group 之前的状态 */

  }, {
    key: "_restoreObjectsState",
    value: function _restoreObjectsState() {
      this.objects.forEach(this._restoreObjectState, this);
      return this;
    }
    /** 还原 group 中某个物体的初始状态 */

  }, {
    key: "_restoreObjectState",
    value: function _restoreObjectState(object) {
      var groupLeft = this.get("left"),
          groupTop = this.get("top"),
          groupAngle = this.getAngle() * (Math.PI / 180),
          rotatedTop = Math.cos(groupAngle) * object.get("top") + Math.sin(groupAngle) * object.get("left"),
          rotatedLeft = -Math.sin(groupAngle) * object.get("top") + Math.cos(groupAngle) * object.get("left");
      object.setAngle(object.getAngle() + this.getAngle());
      object.set("left", groupLeft + rotatedLeft * this.get("scaleX"));
      object.set("top", groupTop + rotatedTop * this.get("scaleY"));
      object.set("scaleX", object.get("scaleX") * this.get("scaleX"));
      object.set("scaleY", object.get("scaleY") * this.get("scaleY"));
      object.setCoords();
      object.hasControls = object.orignHasControls; // delete object.__origHasControls;

      object.setActive(false);
      object.setCoords();
      return this;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      return this._restoreObjectsState();
    }
    /** 重新设置当前组中所有的物体的边框、控制点、位置和大小等 */

  }, {
    key: "setObjectsCoords",
    value: function setObjectsCoords() {
      this.objects.forEach(function (object) {
        object.setCoords();
      });
      return this;
    }
    /** 激活所有 group 中的物体 */

  }, {
    key: "activateAllObjects",
    value: function activateAllObjects() {
      this.objects.forEach(function (object) {
        object.setActive(true);
      });
      return this;
    }
    /** 计算组的包围盒 */

  }, {
    key: "_calcBounds",
    value: function _calcBounds() {
      var aX = [],
          aY = [],
          minX,
          minY,
          maxX,
          maxY,
          o,
          width,
          height,
          i = 0,
          len = this.objects.length;

      for (; i < len; ++i) {
        o = this.objects[i];
        o.setCoords();

        for (var prop in o.oCoords) {
          aX.push(o.oCoords[prop].x);
          aY.push(o.oCoords[prop].y);
        }
      }

      minX = _utils__WEBPACK_IMPORTED_MODULE_1__.Util.min(aX);
      maxX = _utils__WEBPACK_IMPORTED_MODULE_1__.Util.max(aX);
      minY = _utils__WEBPACK_IMPORTED_MODULE_1__.Util.min(aY);
      maxY = _utils__WEBPACK_IMPORTED_MODULE_1__.Util.max(aY);
      width = maxX - minX || 0;
      height = maxY - minY || 0;
      this.width = width;
      this.height = height;
      this.left = minX + width / 2 || 0;
      this.top = minY + height / 2 || 0;
    }
    /** 检查点是都在 group 中 */

  }, {
    key: "containsPoint",
    value: function containsPoint(point) {
      var halfWidth = this.get("width") / 2,
          halfHeight = this.get("height") / 2,
          centerX = this.get("left"),
          centerY = this.get("top");
      return centerX - halfWidth < point.x && centerX + halfWidth > point.x && centerY - halfHeight < point.y && centerY + halfHeight > point.y;
    }
  }, {
    key: "get",
    value: function get(prop) {
      // 组里面有很多元素，所以虽然继承至 Fabric，但是有很多属性读取是无效的，设置同理
      return this[prop];
    }
  }, {
    key: "_set",
    value: function _set(key, value) {
      this[key] = value;
      return this;
    }
  }]);

  return Group;
}(_shape__WEBPACK_IMPORTED_MODULE_0__.Shape);
/** 异步标识，说明这个东西是后面创建的，比如得现有几个物体才能有 Group；类似的还有图片，目前这里没用到 */

Group.async = true;

/***/ }),

/***/ "../core/2d/src/base/intersection.ts":
/*!*******************************************!*\
  !*** ../core/2d/src/base/intersection.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Intersection": () => (/* binding */ Intersection)
/* harmony export */ });
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ "../core/2d/src/base/point.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


/** 检测多边形、线段是否相交的一个类 */

var Intersection = /*#__PURE__*/function () {
  function Intersection(status) {
    _classCallCheck(this, Intersection);

    this.init(status);
  }

  _createClass(Intersection, [{
    key: "init",
    value: function init(status) {
      this.status = status;
      this.points = [];
    }
  }, {
    key: "appendPoint",
    value: function appendPoint(point) {
      this.points.push(point);
    }
  }, {
    key: "appendPoints",
    value: function appendPoints(points) {
      this.points = this.points.concat(points);
    }
    /**
     * 判断两条线段是否想交
     * @param a1 线段1 起点
     * @param a2 线段1 终点
     * @param b1 线段2 起点
     * @param b2 线段3 终点
     */

  }], [{
    key: "intersectLineLine",
    value: function intersectLineLine(a1, a2, b1, b2) {
      // 向量叉乘公式 `a✖️b = (x1, y1)✖️(x2, y2) = x1y2 - x2y1`
      // http://blog.letow.top/2017/11/13/vector-cross-product-cal-intersection/
      var result,
          // b1->b2向量 与 a1->b1向量的向量叉乘
      ua_t = (b2.x - b1.x) * (a1.y - b1.y) - (b2.y - b1.y) * (a1.x - b1.x),
          // a1->a2向量 与 a1->b1向量的向量叉乘
      ub_t = (a2.x - a1.x) * (a1.y - b1.y) - (a2.y - a1.y) * (a1.x - b1.x),
          // a1->a2向量 与 b1->b2向量的向量叉乘
      u_b = (b2.y - b1.y) * (a2.x - a1.x) - (b2.x - b1.x) * (a2.y - a1.y);

      if (u_b !== 0) {
        var ua = ua_t / u_b,
            ub = ub_t / u_b;

        if (0 <= ua && ua <= 1 && 0 <= ub && ub <= 1) {
          result = new Intersection("Intersection");
          result.points.push(new _point__WEBPACK_IMPORTED_MODULE_0__.Point(a1.x + ua * (a2.x - a1.x), a1.y + ua * (a2.y - a1.y)));
        } else {
          result = new Intersection("No Intersection");
        }
      } else {
        // u_b == 0时，角度为0或者180 平行或者共线不属于相交
        if (ua_t === 0 || ub_t === 0) {
          result = new Intersection("Coincident");
        } else {
          result = new Intersection("Parallel");
        }
      }

      return result;
    }
    /**
     * 检测线段和多边形是否相交
     * @param a1 线段起点
     * @param a2 线段终点
     * @param points 多边形顶点
     * @returns
     */

  }, {
    key: "intersectLinePolygon",
    value: function intersectLinePolygon(a1, a2, points) {
      var result = new Intersection("No Intersection"),
          length = points.length;

      for (var i = 0; i < length; i++) {
        var b1 = points[i],
            // 多边形每条边的起点
        b2 = points[(i + 1) % length],
            // 多边形每条边的终点
        inter = Intersection.intersectLineLine(a1, a2, b1, b2);
        result.appendPoints(inter.points);
      }

      if (result.points.length > 0) {
        result.status = "Intersection";
      }

      return result;
    }
  }, {
    key: "intersectPolygonPolygon",
    value: function intersectPolygonPolygon(points1, points2) {
      var result = new Intersection("No Intersection"),
          length = points1.length;

      for (var i = 0; i < length; i++) {
        var a1 = points1[i],
            a2 = points1[(i + 1) % length],
            inter = Intersection.intersectLinePolygon(a1, a2, points2);
        result.appendPoints(inter.points);
      }

      if (result.points.length > 0) {
        result.status = "Intersection";
      }

      return result;
    }
    /**
     * 检测物体是否与拖蓝选区相交
     * @param points 物体包围盒的四个顶点的坐标
     * @param r1 拖蓝选区左上角的点
     * @param r2 拖蓝选区右下角的点
     * @returns
     */

  }, {
    key: "intersectPolygonRectangle",
    value: function intersectPolygonRectangle(points, r1, r2) {
      var topLeft = r1.min(r2),
          // 拖蓝选区左上角
      bottomRight = r1.max(r2),
          // 拖蓝选区右下角
      topRight = new _point__WEBPACK_IMPORTED_MODULE_0__.Point(bottomRight.x, topLeft.y),
          // 拖蓝选区右上角
      bottomLeft = new _point__WEBPACK_IMPORTED_MODULE_0__.Point(topLeft.x, bottomRight.y),
          // 拖蓝选区左下角
      // 检测每条边是否与物体相交
      inter1 = Intersection.intersectLinePolygon(topLeft, topRight, points),
          inter2 = Intersection.intersectLinePolygon(topRight, bottomRight, points),
          inter3 = Intersection.intersectLinePolygon(bottomRight, bottomLeft, points),
          inter4 = Intersection.intersectLinePolygon(bottomLeft, topLeft, points),
          result = new Intersection("No Intersection");
      result.appendPoints(inter1.points);
      result.appendPoints(inter2.points);
      result.appendPoints(inter3.points);
      result.appendPoints(inter4.points);

      if (result.points.length > 0) {
        // 如果有至少一条边与物体相交
        result.status = "Intersection";
      }

      return result;
    }
  }]);

  return Intersection;
}();

/***/ }),

/***/ "../core/2d/src/base/point.ts":
/*!************************************!*\
  !*** ../core/2d/src/base/point.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Point": () => (/* binding */ Point)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Point = /*#__PURE__*/function () {
  function Point(x, y) {
    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  }
  /** 返回一个新的点，值为两个点的最小x、y值 */


  _createClass(Point, [{
    key: "min",
    value: function min(otherPoint) {
      return new Point(Math.min(this.x, otherPoint.x), Math.min(this.y, otherPoint.y));
    }
    /** 返回一个新的点，值为两个点的最大x、y值 */

  }, {
    key: "max",
    value: function max(otherPoint) {
      return new Point(Math.max(this.x, otherPoint.x), Math.max(this.y, otherPoint.y));
    }
    /** += 的意思，会改变自身的值 */

  }, {
    key: "addEquals",
    value: function addEquals(point) {
      this.x += point.x;
      this.y += point.y;
      return this;
    }
    /** -= 的意思，会改变自身的值 */

  }, {
    key: "subtractEquals",
    value: function subtractEquals(point) {
      this.x -= point.x;
      this.y -= point.y;
      return this;
    }
  }]);

  return Point;
}();

/***/ }),

/***/ "../core/2d/src/base/shape.ts":
/*!************************************!*\
  !*** ../core/2d/src/base/shape.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Shape": () => (/* binding */ Shape)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "../core/2d/src/base/utils.ts");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "../core/2d/src/base/point.ts");
/* harmony import */ var _intersection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intersection */ "../core/2d/src/base/intersection.ts");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event */ "../core/2d/src/base/event.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





/** 物体基类，有一些共同属性和方法 */

var Shape = /*#__PURE__*/function (_EventCenter) {
  _inherits(Shape, _EventCenter);

  var _super = _createSuper(Shape);

  function Shape(options) {
    var _this;

    _classCallCheck(this, Shape);

    _this = _super.call(this);
    /** 物体类型标识 */

    _this.type = "object";
    /** 是否处于激活态，也就是是否被选中 */

    _this.active = false;
    /** 是否可见 */

    _this.visible = true;
    /** 默认水平变换中心 left | right | center */

    _this.originX = "center";
    /** 默认垂直变换中心 top | bottom | center */

    _this.originY = "center";
    /** 物体位置 top 值 */

    _this.top = 0;
    /** 物体位置 left 值 */

    _this.left = 0;
    /** 物体原始宽度 */

    _this.width = 0;
    /** 物体原始高度 */

    _this.height = 0;
    /** 物体当前的缩放倍数 x */

    _this.scaleX = 1;
    /** 物体当前的缩放倍数 y */

    _this.scaleY = 1;
    /** 物体当前的旋转角度 */

    _this.angle = 0;
    /** 左右镜像，比如反向拉伸控制点 */

    _this.flipX = false;
    /** 上下镜像，比如反向拉伸控制点 */

    _this.flipY = false;
    /** 选中态物体和边框之间的距离 */

    _this.padding = 0;
    /** 物体缩放后的宽度 */

    _this.currentWidth = 0;
    /** 物体缩放后的高度 */

    _this.currentHeight = 0;
    /** 激活态边框颜色 */

    _this.borderColor = "#ba86fe";
    /** 激活态控制点颜色 */

    _this.cornerColor = "#ba86fe";
    /** 物体默认填充颜色 */

    _this.fill = "rgb(0,0,0)";
    /** 物体默认描边宽度 */

    _this.strokeWidth = 1;
    /** 矩阵变换 */
    // public transformMatrix: number[];

    /** 最小缩放值 */
    // public minScaleLimit: number = 0.01;

    /** 是否有控制点 */

    _this.hasControls = true;
    /** 是否有旋转控制点 */

    _this.hasRotatingPoint = true;
    /** 旋转控制点偏移量 */

    _this.rotatingPointOffset = 40;
    /** 移动的时候边框透明度 */

    _this.borderOpacityWhenMoving = 0.4;
    /** 物体是否在移动中 */

    _this.isMoving = false;
    /** 选中态的边框宽度 */

    _this.borderWidth = 1;
    /** 物体控制点用 stroke 还是 fill */

    _this.transparentCorners = false;
    /** 物体控制点大小，单位 px */

    _this.cornerSize = 12;
    /** 通过像素来检测物体而不是通过包围盒 */

    _this.perPixelTargetFind = false;
    /** 物体被拖蓝选区保存的时候需要临时保存下 hasControls 的值 */

    _this.orignHasControls = true;
    _this.stateProperties = ("top left width height scaleX scaleY " + "flipX flipY angle cornerSize fill originX originY " + "stroke strokeWidth " + "borderWidth transformMatrix visible").split(" ");

    _this.initialize(options);

    return _this;
  }

  _createClass(Shape, [{
    key: "initialize",
    value: function initialize(options) {
      options && this.setOptions(options);
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      for (var prop in options) {
        this[prop] = options[prop];
      }
    }
    /** 渲染物体，默认用 fill 填充 */

  }, {
    key: "render",
    value: function render(ctx) {
      var noTransform = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (this.width === 0 || this.height === 0 || !this.visible) return;
      ctx.save(); // let m = this.transformMatrix;
      // if (m && !this.group) {
      //     ctx.setTransform(m[0], m[1], m[2], m[3], m[4], m[5]);
      // }

      if (!noTransform) {
        this.transform(ctx);
      }

      if (this.stroke) {
        ctx.lineWidth = this.strokeWidth;
        ctx.strokeStyle = this.stroke;
      }

      if (this.fill) {
        ctx.fillStyle = this.fill;
      } // if (m && this.group) {
      //     ctx.translate(-this.group.width / 2, -this.group.height / 2);
      //     ctx.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
      // }
      // 绘制物体


      this._render(ctx);

      if (this.active && !noTransform) {
        // 绘制激活物体边框
        this.drawBorders(ctx); // 绘制激活物体四周的控制点

        this.drawControls(ctx);
      } // 画自身坐标系


      this.drawAxis(ctx);
      ctx.restore();
    }
    /** 由子类实现，就是由具体物体类来实现 */

  }, {
    key: "_render",
    value: function _render(ctx) {}
    /** 绘制前需要进行各种变换（包括平移、旋转、缩放）
     * 注意变换顺序很重要，顺序不一样会导致不一样的结果，所以一个框架一旦定下来了，后面大概率是不能更改的
     * 我们采用的顺序是：平移 -> 旋转 -> 缩放，这样可以减少些计算量，如果我们先旋转，点的坐标值一般就不是整数，那么后面的变换基于非整数来计算
     */

  }, {
    key: "transform",
    value: function transform(ctx) {
      var center = this.getCenterPoint();
      ctx.translate(center.x, center.y);
      ctx.rotate(_utils__WEBPACK_IMPORTED_MODULE_0__.Util.degreesToRadians(this.angle)); // ctx.scale(this.scaleX, this.scaleY);

      ctx.scale(this.scaleX * (this.flipX ? -1 : 1), this.scaleY * (this.flipY ? -1 : 1)); // const m = Util.composeMatrix({
      //     angle: this.angle,
      //     translateX: center.x,
      //     translateY: center.y,
      //     scaleX: this.scaleX,
      //     scaleY: this.scaleY,
      //     flipX: this.flipX,
      //     flipY: this.flipY,
      // });
      // ctx.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
      // const radian = Util.degreesToRadians(this.angle);
      // const cos = Math.cos(radian);
      // const sin = Math.sin(radian);
      // const m = [cos * this.scaleX, sin * this.scaleX, -sin * this.scaleY, cos * this.scaleY, center.x, center.y];
    }
    /** 绘制激活物体边框 */

  }, {
    key: "drawBorders",
    value: function drawBorders(ctx) {
      var padding = this.padding,
          padding2 = padding * 2,
          strokeWidth = this.borderWidth;
      ctx.save();
      ctx.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1;
      ctx.strokeStyle = this.borderColor;
      ctx.lineWidth = strokeWidth;
      /** 画边框的时候需要把 transform 变换中的 scale 效果抵消，这样才能画出原始大小的线条 */

      ctx.scale(1 / this.scaleX, 1 / this.scaleY);
      var w = this.getWidth(),
          h = this.getHeight(); // 画物体激活时候的边框，也就是包围盒，~~就是取整的意思

      ctx.strokeRect(-(w / 2) - padding - strokeWidth / 2, -(h / 2) - padding - strokeWidth / 2, w + padding2 + strokeWidth, h + padding2 + strokeWidth); // 画旋转控制点的那条线

      if (this.hasRotatingPoint && this.hasControls) {
        var rotateHeight = (-h - strokeWidth - padding * 2) / 2;
        ctx.beginPath();
        ctx.moveTo(0, rotateHeight);
        ctx.lineTo(0, rotateHeight - this.rotatingPointOffset);
        ctx.closePath();
        ctx.stroke();
      }

      ctx.restore();
      return this;
    }
    /** 绘制包围盒模型的控制点 */

  }, {
    key: "drawControls",
    value: function drawControls(ctx) {
      if (!this.hasControls) return; // 因为画布已经经过变换，所以大部分数值需要除以 scale 来抵消变换

      var size = this.cornerSize,
          size2 = size / 2,
          strokeWidth2 = this.strokeWidth / 2,
          // top 和 left 值为物体左上角的点
      left = -(this.width / 2),
          top = -(this.height / 2),
          _left,
          _top,
          sizeX = size / this.scaleX,
          sizeY = size / this.scaleY,
          paddingX = this.padding / this.scaleX,
          paddingY = this.padding / this.scaleY,
          scaleOffsetY = size2 / this.scaleY,
          scaleOffsetX = size2 / this.scaleX,
          scaleOffsetSizeX = (size2 - size) / this.scaleX,
          scaleOffsetSizeY = (size2 - size) / this.scaleY,
          height = this.height,
          width = this.width,
          // 控制点是实心还是空心
      methodName = this.transparentCorners ? "strokeRect" : "fillRect";

      ctx.save();
      ctx.lineWidth = this.borderWidth / Math.max(this.scaleX, this.scaleY);
      ctx.globalAlpha = this.isMoving ? this.borderOpacityWhenMoving : 1;
      ctx.strokeStyle = ctx.fillStyle = this.cornerColor; // top-left

      _left = left - scaleOffsetX - strokeWidth2 - paddingX;
      _top = top - scaleOffsetY - strokeWidth2 - paddingY;
      ctx.clearRect(_left, _top, sizeX, sizeY);
      ctx[methodName](_left, _top, sizeX, sizeY); // top-right

      _left = left + width - scaleOffsetX + strokeWidth2 + paddingX;
      _top = top - scaleOffsetY - strokeWidth2 - paddingY;
      ctx.clearRect(_left, _top, sizeX, sizeY);
      ctx[methodName](_left, _top, sizeX, sizeY); // bottom-left

      _left = left - scaleOffsetX - strokeWidth2 - paddingX;
      _top = top + height + scaleOffsetSizeY + strokeWidth2 + paddingY;
      ctx.clearRect(_left, _top, sizeX, sizeY);
      ctx[methodName](_left, _top, sizeX, sizeY); // bottom-right

      _left = left + width + scaleOffsetSizeX + strokeWidth2 + paddingX;
      _top = top + height + scaleOffsetSizeY + strokeWidth2 + paddingY;
      ctx.clearRect(_left, _top, sizeX, sizeY);
      ctx[methodName](_left, _top, sizeX, sizeY); // middle-top

      _left = left + width / 2 - scaleOffsetX;
      _top = top - scaleOffsetY - strokeWidth2 - paddingY;
      ctx.clearRect(_left, _top, sizeX, sizeY);
      ctx[methodName](_left, _top, sizeX, sizeY); // middle-bottom

      _left = left + width / 2 - scaleOffsetX;
      _top = top + height + scaleOffsetSizeY + strokeWidth2 + paddingY;
      ctx.clearRect(_left, _top, sizeX, sizeY);
      ctx[methodName](_left, _top, sizeX, sizeY); // middle-right

      _left = left + width + scaleOffsetSizeX + strokeWidth2 + paddingX;
      _top = top + height / 2 - scaleOffsetY;
      ctx.clearRect(_left, _top, sizeX, sizeY);
      ctx[methodName](_left, _top, sizeX, sizeY); // middle-left

      _left = left - scaleOffsetX - strokeWidth2 - paddingX;
      _top = top + height / 2 - scaleOffsetY;
      ctx.clearRect(_left, _top, sizeX, sizeY);
      ctx[methodName](_left, _top, sizeX, sizeY); // 绘制旋转控制点

      if (this.hasRotatingPoint) {
        _left = left + width / 2 - scaleOffsetX;
        _top = top - this.rotatingPointOffset / this.scaleY - sizeY / 2 - strokeWidth2 - paddingY;
        ctx.clearRect(_left, _top, sizeX, sizeY);
        ctx[methodName](_left, _top, sizeX, sizeY);
      }

      ctx.restore();
      return this;
    }
  }, {
    key: "drawAxis",
    value: function drawAxis(ctx) {
      ctx.save();
      var lengthRatio = 1.5;
      ctx.lineWidth = this.borderWidth;
      ctx.setLineDash([4 * lengthRatio, 3 * lengthRatio]);
      /** 画坐标轴的时候需要把 transform 变换中的 scale 效果抵消，这样才能画出原始大小的线条 */

      ctx.scale(1 / this.scaleX, 1 / this.scaleY);
      ctx.restore();
    }
  }, {
    key: "setupState",
    value: function setupState() {
      this.originalState = {};
      this.saveState();
    }
    /** 保存物体当前的状态到 originalState 中 */

  }, {
    key: "saveState",
    value: function saveState() {
      var _this2 = this;

      this.stateProperties.forEach(function (prop) {
        _this2.originalState[prop] = _this2[prop];
      });
      return this;
    }
    /** 获取物体中心点 */

  }, {
    key: "getCenterPoint",
    value: function getCenterPoint() {
      return this.translateToCenterPoint(new _point__WEBPACK_IMPORTED_MODULE_1__.Point(this.left, this.top), this.originX, this.originY);
    }
    /** 将中心点移到变换基点 */

  }, {
    key: "translateToCenterPoint",
    value: function translateToCenterPoint(point, originX, originY) {
      var cx = point.x,
          cy = point.y;

      if (originX === "left") {
        cx = point.x + this.getWidth() / 2;
      } else if (originX === "right") {
        cx = point.x - this.getWidth() / 2;
      }

      if (originY === "top") {
        cy = point.y + this.getHeight() / 2;
      } else if (originY === "bottom") {
        cy = point.y - this.getHeight() / 2;
      }

      var p = new _point__WEBPACK_IMPORTED_MODULE_1__.Point(cx, cy);

      if (this.angle) {
        return _utils__WEBPACK_IMPORTED_MODULE_0__.Util.rotatePoint(p, point, _utils__WEBPACK_IMPORTED_MODULE_0__.Util.degreesToRadians(this.angle));
      } else {
        return p;
      }
    }
    /**
     * 平移坐标系到中心点
     * @param center
     * @param {string} originX  left | center | right
     * @param {string} originY  top | center | bottom
     * @returns
     */

  }, {
    key: "translateToOriginPoint",
    value: function translateToOriginPoint(center, originX, originY) {
      var x = center.x,
          y = center.y; // Get the point coordinates

      if (originX === "left") {
        x = center.x - this.getWidth() / 2;
      } else if (originX === "right") {
        x = center.x + this.getWidth() / 2;
      }

      if (originY === "top") {
        y = center.y - this.getHeight() / 2;
      } else if (originY === "bottom") {
        y = center.y + this.getHeight() / 2;
      } // Apply the rotation to the point (it's already scaled properly)


      return _utils__WEBPACK_IMPORTED_MODULE_0__.Util.rotatePoint(new _point__WEBPACK_IMPORTED_MODULE_1__.Point(x, y), center, _utils__WEBPACK_IMPORTED_MODULE_0__.Util.degreesToRadians(this.angle));
    }
    /** 转换成本地坐标 */

  }, {
    key: "toLocalPoint",
    value: function toLocalPoint(point, originX, originY) {
      var center = this.getCenterPoint();
      var x, y;

      if (originX !== undefined && originY !== undefined) {
        if (originX === "left") {
          x = center.x - this.getWidth() / 2;
        } else if (originX === "right") {
          x = center.x + this.getWidth() / 2;
        } else {
          x = center.x;
        }

        if (originY === "top") {
          y = center.y - this.getHeight() / 2;
        } else if (originY === "bottom") {
          y = center.y + this.getHeight() / 2;
        } else {
          y = center.y;
        }
      } else {
        x = this.left;
        y = this.top;
      }

      return _utils__WEBPACK_IMPORTED_MODULE_0__.Util.rotatePoint(new _point__WEBPACK_IMPORTED_MODULE_1__.Point(point.x, point.y), center, -_utils__WEBPACK_IMPORTED_MODULE_0__.Util.degreesToRadians(this.angle)).subtractEquals(new _point__WEBPACK_IMPORTED_MODULE_1__.Point(x, y));
    }
    /** 检测哪个控制点被点击了 */

  }, {
    key: "_findTargetCorner",
    value: function _findTargetCorner(e, offset) {
      if (!this.hasControls || !this.active) return false;
      var pointer = _utils__WEBPACK_IMPORTED_MODULE_0__.Util.getPointer(e, this.canvas.topCanvas, this.scale),
          ex = pointer.x - offset.left,
          ey = pointer.y - offset.top,
          xpoints,
          lines;

      for (var i in this.oCoords) {
        if (i === "mtr" && !this.hasRotatingPoint) {
          continue;
        }

        lines = this._getImageLines(this.oCoords[i].corner); // debugger 绘制物体控制点的四个顶点
        // this.canvas.contextTop.fillRect(lines.bottomline.d.x, lines.bottomline.d.y, 2, 2);
        // this.canvas.contextTop.fillRect(lines.bottomline.o.x, lines.bottomline.o.y, 2, 2);
        // this.canvas.contextTop.fillRect(lines.leftline.d.x, lines.leftline.d.y, 2, 2);
        // this.canvas.contextTop.fillRect(lines.leftline.o.x, lines.leftline.o.y, 2, 2);
        // this.canvas.contextTop.fillRect(lines.topline.d.x, lines.topline.d.y, 2, 2);
        // this.canvas.contextTop.fillRect(lines.topline.o.x, lines.topline.o.y, 2, 2);
        // this.canvas.contextTop.fillRect(lines.rightline.d.x, lines.rightline.d.y, 2, 2);
        // this.canvas.contextTop.fillRect(lines.rightline.o.x, lines.rightline.o.y, 2, 2);

        xpoints = this._findCrossPoints(ex, ey, lines);

        if (xpoints % 2 === 1 && xpoints !== 0) {
          return i;
        }
      }

      return false;
    }
    /** 获取包围盒的四条边 */

  }, {
    key: "_getImageLines",
    value: function _getImageLines(corner) {
      return {
        topline: {
          o: corner.tl,
          d: corner.tr
        },
        rightline: {
          o: corner.tr,
          d: corner.br
        },
        bottomline: {
          o: corner.br,
          d: corner.bl
        },
        leftline: {
          o: corner.bl,
          d: corner.tl
        }
      };
    }
    /**
     * 射线检测法：以鼠标坐标点为参照，水平向右做一条射线，求坐标点与多条边的交点个数
     * 如果和物体相交的个数为偶数点则点在物体外部；如果为奇数点则点在内部
     * 不过 fabric 的点选多边形都是用于包围盒，也就是矩形，所以该方法是专门针对矩形的，并且针对矩形做了一些优化
     */

  }, {
    key: "_findCrossPoints",
    value: function _findCrossPoints(ex, ey, lines) {
      var b1,
          // 射线的斜率
      b2,
          // 边的斜率
      a1,
          a2,
          xi,
          // 射线与边的交点
      // yi, // 射线与边的交点
      xcount = 0,
          iLine; // 当前边
      // 遍历包围盒的四条边

      for (var lineKey in lines) {
        iLine = lines[lineKey]; // 优化1：如果边的两个端点的 y 值都小于鼠标点的 y 值，则跳过

        if (iLine.o.y < ey && iLine.d.y < ey) continue; // 优化2：如果边的两个端点的 y 值都大于鼠标点的 y 值，则跳过

        if (iLine.o.y >= ey && iLine.d.y >= ey) continue; // 优化3：如果边是一条垂线

        if (iLine.o.x === iLine.d.x && iLine.o.x >= ex) {
          xi = iLine.o.x; // yi = ey;
        } else {
          // 简单计算下射线与边的交点，看式子容易晕，建议自己手动算一下
          b1 = 0;
          b2 = (iLine.d.y - iLine.o.y) / (iLine.d.x - iLine.o.x);
          a1 = ey - b1 * ex;
          a2 = iLine.o.y - b2 * iLine.o.x;
          xi = -(a1 - a2) / (b1 - b2); // yi = a1 + b1 * xi;
        } // 只需要计数 xi >= ex 的情况


        if (xi >= ex) {
          xcount += 1;
        } // 优化4：因为 fabric 中的多边形只需要用到矩形，所以根据矩形的特质，顶多只有两个交点，所以我们可以提前结束循环


        if (xcount === 2) {
          break;
        }
      }

      return xcount;
    }
    /** 物体动画 */

  }, {
    key: "animate",
    value: function animate(props, animateOptions) {
      var _this3 = this;

      var propsToAnimate = [];

      for (var prop in props) {
        propsToAnimate.push(prop);
      }

      var len = propsToAnimate.length;
      propsToAnimate.forEach(function (prop, i) {
        var skipCallbacks = i !== len - 1;

        _this3._animate(prop, props[prop], animateOptions, skipCallbacks);
      });
      return this;
    }
    /**
     * 让物体真正动起来
     * @param property 物体需要动画的属性
     * @param to 物体属性的最终值
     * @param options 一些动画选项
     * @param skipCallbacks 是否跳过绘制
     */

  }, {
    key: "_animate",
    value: function _animate(property, to) {
      var _this4 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var skipCallbacks = arguments.length > 3 ? arguments[3] : undefined;
      options = _utils__WEBPACK_IMPORTED_MODULE_0__.Util.clone(options);
      var currentValue = this.get(property);
      if (!options.from) options.from = currentValue;
      to = to.toString();

      if (~to.indexOf("=")) {
        to = currentValue + parseFloat(to.replace("=", ""));
      } else {
        to = parseFloat(to);
      }

      _utils__WEBPACK_IMPORTED_MODULE_0__.Util.animate({
        startValue: options.from,
        endValue: to,
        byValue: options.by,
        easing: options.easing,
        duration: options.duration,
        abort: options.abort && function () {
          return options.abort.call(_this4);
        },
        onChange: function onChange(value) {
          _this4.set(property, value);

          if (skipCallbacks) {
            return;
          }

          options.onChange && options.onChange();
        },
        onComplete: function onComplete() {
          if (skipCallbacks) {
            return;
          }

          _this4.setCoords();

          options.onComplete && options.onComplete();
        }
      });
    }
  }, {
    key: "setActive",
    value: function setActive() {
      var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.active = !!active;
      return this;
    }
    /**
     * 根据物体的 origin 来设置物体的位置
     * @method setPositionByOrigin
     * @param {Point} pos
     * @param {string} originX left | center | right
     * @param {string} originY top | center | bottom
     */

  }, {
    key: "setPositionByOrigin",
    value: function setPositionByOrigin(pos, originX, originY) {
      var center = this.translateToCenterPoint(pos, originX, originY);
      var position = this.translateToOriginPoint(center, this.originX, this.originY); // console.log(`更新缩放的物体位置:[${position.x}，${position.y}]`);

      this.set("left", position.x);
      this.set("top", position.y);
    }
    /**
     * @param to left, center, right 中的一个
     */

  }, {
    key: "adjustPosition",
    value: function adjustPosition(to) {
      var angle = _utils__WEBPACK_IMPORTED_MODULE_0__.Util.degreesToRadians(this.angle);
      var hypotHalf = this.getWidth() / 2;
      var xHalf = Math.cos(angle) * hypotHalf;
      var yHalf = Math.sin(angle) * hypotHalf;
      var hypotFull = this.getWidth();
      var xFull = Math.cos(angle) * hypotFull;
      var yFull = Math.sin(angle) * hypotFull;

      if (this.originX === "center" && to === "left" || this.originX === "right" && to === "center") {
        // move half left
        this.left -= xHalf;
        this.top -= yHalf;
      } else if (this.originX === "left" && to === "center" || this.originX === "center" && to === "right") {
        // move half right
        this.left += xHalf;
        this.top += yHalf;
      } else if (this.originX === "left" && to === "right") {
        // move full right
        this.left += xFull;
        this.top += yFull;
      } else if (this.originX === "right" && to === "left") {
        // move full left
        this.left -= xFull;
        this.top -= yFull;
      }

      this.setCoords();
      this.originX = to;
    }
  }, {
    key: "hasStateChanged",
    value: function hasStateChanged() {
      return this.stateProperties.some(function (prop) {
        return this[prop] !== this.originalState[prop];
      }, this);
    }
    /**
     * 物体与框选区域是否相交，用框选区域的四条边分别与物体的四条边求交
     * @param {Point} selectionTL 拖蓝框选区域左上角的点
     * @param {Point} selectionBR 拖蓝框选区域右下角的点
     * @returns {boolean}
     */

  }, {
    key: "intersectsWithRect",
    value: function intersectsWithRect(selectionTL, selectionBR) {
      var oCoords = this.oCoords,
          tl = new _point__WEBPACK_IMPORTED_MODULE_1__.Point(oCoords.tl.x, oCoords.tl.y),
          tr = new _point__WEBPACK_IMPORTED_MODULE_1__.Point(oCoords.tr.x, oCoords.tr.y),
          bl = new _point__WEBPACK_IMPORTED_MODULE_1__.Point(oCoords.bl.x, oCoords.bl.y),
          br = new _point__WEBPACK_IMPORTED_MODULE_1__.Point(oCoords.br.x, oCoords.br.y);
      var intersection = _intersection__WEBPACK_IMPORTED_MODULE_2__.Intersection.intersectPolygonRectangle([tl, tr, br, bl], selectionTL, selectionBR);
      return intersection.status === "Intersection";
    } // isContainedWithinObject(other) {
    //     return this.isContainedWithinRect(other.oCoords.tl, other.oCoords.br);
    // }

    /**
     * 物体是否被框选区域包含
     * @param {Point} selectionTL 拖蓝框选区域左上角的点
     * @param {Point} selectionBR 拖蓝框选区域右下角的点
     * @returns {boolean}
     */

  }, {
    key: "isContainedWithinRect",
    value: function isContainedWithinRect(selectionTL, selectionBR) {
      var oCoords = this.oCoords,
          tl = new _point__WEBPACK_IMPORTED_MODULE_1__.Point(oCoords.tl.x, oCoords.tl.y),
          tr = new _point__WEBPACK_IMPORTED_MODULE_1__.Point(oCoords.tr.x, oCoords.tr.y),
          bl = new _point__WEBPACK_IMPORTED_MODULE_1__.Point(oCoords.bl.x, oCoords.bl.y);
      return tl.x > selectionTL.x && tr.x < selectionBR.x && tl.y > selectionTL.y && bl.y < selectionBR.y;
    }
    /** 确保缩放值有效，有意义 */
    // _constrainScale(value: number): number {
    //     if (Math.abs(value) < this.minScaleLimit) {
    //         if (value < 0) {
    //             return -this.minScaleLimit;
    //         } else {
    //             return this.minScaleLimit;
    //         }
    //     }
    //     return value;
    // }

  }, {
    key: "getViewportTransform",
    value: function getViewportTransform() {
      if (this.canvas && this.canvas.viewportTransform) {
        return this.canvas.viewportTransform;
      }

      return [1, 0, 0, 1, 0, 0];
    }
  }, {
    key: "_calculateCurrentDimensions",
    value: function _calculateCurrentDimensions() {
      var vpt = this.getViewportTransform(),
          dim = this._getTransformedDimensions(),
          w = dim.x,
          h = dim.y;

      w += 2 * this.padding;
      h += 2 * this.padding;
      return _utils__WEBPACK_IMPORTED_MODULE_0__.Util.transformPoint(new _point__WEBPACK_IMPORTED_MODULE_1__.Point(w, h), vpt, true);
    }
    /** 获取物体没有变换时的大小，包括 strokeWidth 的 1px */

  }, {
    key: "_getNonTransformedDimensions",
    value: function _getNonTransformedDimensions() {
      var strokeWidth = this.strokeWidth,
          w = this.width,
          h = this.height,
          addStrokeToW = true,
          addStrokeToH = true;

      if (addStrokeToH) {
        h += h < 0 ? -strokeWidth : strokeWidth;
      }

      if (addStrokeToW) {
        w += w < 0 ? -strokeWidth : strokeWidth;
      }

      return {
        x: w,
        y: h
      };
    }
  }, {
    key: "_getTransformedDimensions",
    value: function _getTransformedDimensions() {
      var skewX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var skewY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      // if (typeof skewX === 'undefined') {
      //     skewX = this.skewX;
      // }
      // if (typeof skewY === 'undefined') {
      //     skewY = this.skewY;
      // }
      var dimensions = this._getNonTransformedDimensions(),
          dimX = dimensions.x / 2,
          dimY = dimensions.y / 2,
          points = [{
        x: -dimX,
        y: -dimY
      }, {
        x: dimX,
        y: -dimY
      }, {
        x: -dimX,
        y: dimY
      }, {
        x: dimX,
        y: dimY
      }],
          i,
          transformMatrix = this._calcDimensionsTransformMatrix(skewX, skewY, false),
          bbox;

      for (i = 0; i < points.length; i++) {
        points[i] = _utils__WEBPACK_IMPORTED_MODULE_0__.Util.transformPoint(points[i], transformMatrix);
      }

      bbox = _utils__WEBPACK_IMPORTED_MODULE_0__.Util.makeBoundingBoxFromPoints(points);
      return {
        x: bbox.width,
        y: bbox.height
      };
    }
  }, {
    key: "_calcDimensionsTransformMatrix",
    value: function _calcDimensionsTransformMatrix(skewX, skewY, flipping) {
      var skewMatrixX = [1, 0, Math.tan(_utils__WEBPACK_IMPORTED_MODULE_0__.Util.degreesToRadians(skewX)), 1],
          skewMatrixY = [1, Math.tan(_utils__WEBPACK_IMPORTED_MODULE_0__.Util.degreesToRadians(skewY)), 0, 1],
          scaleX = this.scaleX,
          scaleY = this.scaleY,
          scaleMatrix = [scaleX, 0, 0, scaleY],
          m = _utils__WEBPACK_IMPORTED_MODULE_0__.Util.multiplyTransformMatrices(scaleMatrix, skewMatrixX, true);
      return _utils__WEBPACK_IMPORTED_MODULE_0__.Util.multiplyTransformMatrices(m, skewMatrixY, true);
    } // setCoords() {
    //     let theta = Util.degreesToRadians(this.angle),
    //         vpt = this.getViewportTransform(),
    //         dim = this._calculateCurrentDimensions(),
    //         currentWidth = dim.x,
    //         currentHeight = dim.y;
    //     // If width is negative, make postive. Fixes path selection issue
    //     // if (currentWidth < 0) {
    //     //     currentWidth = Math.abs(currentWidth);
    //     // }
    //     let sinTh = Math.sin(theta),
    //         cosTh = Math.cos(theta),
    //         _angle = currentWidth > 0 ? Math.atan(currentHeight / currentWidth) : 0,
    //         _hypotenuse = currentWidth / Math.cos(_angle) / 2,
    //         offsetX = Math.cos(_angle + theta) * _hypotenuse,
    //         offsetY = Math.sin(_angle + theta) * _hypotenuse,
    //         // offset added for rotate and scale actions
    //         coords = Util.transformPoint(this.getCenterPoint(), vpt),
    //         tl = new Point(coords.x - offsetX, coords.y - offsetY),
    //         tr = new Point(tl.x + currentWidth * cosTh, tl.y + currentWidth * sinTh),
    //         bl = new Point(tl.x - currentHeight * sinTh, tl.y + currentHeight * cosTh),
    //         br = new Point(coords.x + offsetX, coords.y + offsetY),
    //         ml = new Point((tl.x + bl.x) / 2, (tl.y + bl.y) / 2),
    //         mt = new Point((tr.x + tl.x) / 2, (tr.y + tl.y) / 2),
    //         mr = new Point((br.x + tr.x) / 2, (br.y + tr.y) / 2),
    //         mb = new Point((br.x + bl.x) / 2, (br.y + bl.y) / 2),
    //         mtr = new Point(mt.x + sinTh * this.rotatingPointOffset, mt.y - cosTh * this.rotatingPointOffset);
    //     console.log(sinTh, cosTh, mt, mtr);
    //     // let mtr = {
    //     //             x: tl.x + (this.currentWidth / 2) * cosTh,
    //     //             y: tl.y + (this.currentWidth / 2) * sinTh,
    //     //         };
    //     // debugging
    //     /* setTimeout(function() {
    //        canvas.contextTop.fillStyle = 'green';
    //        canvas.contextTop.fillRect(mb.x, mb.y, 3, 3);
    //        canvas.contextTop.fillRect(bl.x, bl.y, 3, 3);
    //        canvas.contextTop.fillRect(br.x, br.y, 3, 3);
    //        canvas.contextTop.fillRect(tl.x, tl.y, 3, 3);
    //        canvas.contextTop.fillRect(tr.x, tr.y, 3, 3);
    //        canvas.contextTop.fillRect(ml.x, ml.y, 3, 3);
    //        canvas.contextTop.fillRect(mr.x, mr.y, 3, 3);
    //        canvas.contextTop.fillRect(mt.x, mt.y, 3, 3);
    //        canvas.contextTop.fillRect(mtr.x, mtr.y, 3, 3);
    //      }, 50); */
    //     this.oCoords = {
    //         // corners
    //         tl,
    //         tr,
    //         br,
    //         bl,
    //         // middle
    //         ml,
    //         mt,
    //         mr,
    //         mb,
    //         // rotating point
    //         mtr,
    //     };
    //     // set coordinates of the draggable boxes in the corners used to scale/rotate the image
    //     this._setCornerCoords && this._setCornerCoords();
    //     return this;
    // }

    /** 重新设置物体包围盒的边框和各个控制点，包括位置和大小 */

  }, {
    key: "setCoords",
    value: function setCoords() {
      var strokeWidth = this.strokeWidth > 1 ? this.strokeWidth : 0,
          padding = this.padding,
          radian = _utils__WEBPACK_IMPORTED_MODULE_0__.Util.degreesToRadians(this.angle);
      this.currentWidth = (this.width + strokeWidth) * this.scaleX + padding * 2;
      this.currentHeight = (this.height + strokeWidth) * this.scaleY + padding * 2; // If width is negative, make postive. Fixes path selection issue
      // if (this.currentWidth < 0) {
      //     this.currentWidth = Math.abs(this.currentWidth);
      // }
      // 物体中心点到顶点的斜边长度

      var _hypotenuse = Math.sqrt(Math.pow(this.currentWidth / 2, 2) + Math.pow(this.currentHeight / 2, 2));

      var _angle = Math.atan(this.currentHeight / this.currentWidth); // let _angle = Math.atan2(this.currentHeight, this.currentWidth);
      // offset added for rotate and scale actions


      var offsetX = Math.cos(_angle + radian) * _hypotenuse,
          offsetY = Math.sin(_angle + radian) * _hypotenuse,
          sinTh = Math.sin(radian),
          cosTh = Math.cos(radian);

      var coords = this.getCenterPoint();
      var tl = {
        x: coords.x - offsetX,
        y: coords.y - offsetY
      };
      var tr = {
        x: tl.x + this.currentWidth * cosTh,
        y: tl.y + this.currentWidth * sinTh
      };
      var br = {
        x: tr.x - this.currentHeight * sinTh,
        y: tr.y + this.currentHeight * cosTh
      };
      var bl = {
        x: tl.x - this.currentHeight * sinTh,
        y: tl.y + this.currentHeight * cosTh
      };
      var ml = {
        x: tl.x - this.currentHeight / 2 * sinTh,
        y: tl.y + this.currentHeight / 2 * cosTh
      };
      var mt = {
        x: tl.x + this.currentWidth / 2 * cosTh,
        y: tl.y + this.currentWidth / 2 * sinTh
      };
      var mr = {
        x: tr.x - this.currentHeight / 2 * sinTh,
        y: tr.y + this.currentHeight / 2 * cosTh
      };
      var mb = {
        x: bl.x + this.currentWidth / 2 * cosTh,
        y: bl.y + this.currentWidth / 2 * sinTh
      };
      var mtr = {
        x: tl.x + this.currentWidth / 2 * cosTh,
        y: tl.y + this.currentWidth / 2 * sinTh
      }; // clockwise

      this.oCoords = {
        tl: tl,
        tr: tr,
        br: br,
        bl: bl,
        ml: ml,
        mt: mt,
        mr: mr,
        mb: mb,
        mtr: mtr
      }; // set coordinates of the draggable boxes in the corners used to scale/rotate the image

      this._setCornerCoords();

      return this;
    }
    /** 重新设置物体的每个控制点，包括位置和大小 */

  }, {
    key: "_setCornerCoords",
    value: function _setCornerCoords() {
      var coords = this.oCoords,
          radian = _utils__WEBPACK_IMPORTED_MODULE_0__.Util.degreesToRadians(this.angle),
          newTheta = _utils__WEBPACK_IMPORTED_MODULE_0__.Util.degreesToRadians(45 - this.angle),
          cornerHypotenuse = Math.sqrt(2 * Math.pow(this.cornerSize, 2)) / 2,
          cosHalfOffset = cornerHypotenuse * Math.cos(newTheta),
          sinHalfOffset = cornerHypotenuse * Math.sin(newTheta),
          sinTh = Math.sin(radian),
          cosTh = Math.cos(radian);
      coords.tl.corner = {
        tl: {
          x: coords.tl.x - sinHalfOffset,
          y: coords.tl.y - cosHalfOffset
        },
        tr: {
          x: coords.tl.x + cosHalfOffset,
          y: coords.tl.y - sinHalfOffset
        },
        bl: {
          x: coords.tl.x - cosHalfOffset,
          y: coords.tl.y + sinHalfOffset
        },
        br: {
          x: coords.tl.x + sinHalfOffset,
          y: coords.tl.y + cosHalfOffset
        }
      };
      coords.tr.corner = {
        tl: {
          x: coords.tr.x - sinHalfOffset,
          y: coords.tr.y - cosHalfOffset
        },
        tr: {
          x: coords.tr.x + cosHalfOffset,
          y: coords.tr.y - sinHalfOffset
        },
        br: {
          x: coords.tr.x + sinHalfOffset,
          y: coords.tr.y + cosHalfOffset
        },
        bl: {
          x: coords.tr.x - cosHalfOffset,
          y: coords.tr.y + sinHalfOffset
        }
      };
      coords.bl.corner = {
        tl: {
          x: coords.bl.x - sinHalfOffset,
          y: coords.bl.y - cosHalfOffset
        },
        bl: {
          x: coords.bl.x - cosHalfOffset,
          y: coords.bl.y + sinHalfOffset
        },
        br: {
          x: coords.bl.x + sinHalfOffset,
          y: coords.bl.y + cosHalfOffset
        },
        tr: {
          x: coords.bl.x + cosHalfOffset,
          y: coords.bl.y - sinHalfOffset
        }
      };
      coords.br.corner = {
        tr: {
          x: coords.br.x + cosHalfOffset,
          y: coords.br.y - sinHalfOffset
        },
        bl: {
          x: coords.br.x - cosHalfOffset,
          y: coords.br.y + sinHalfOffset
        },
        br: {
          x: coords.br.x + sinHalfOffset,
          y: coords.br.y + cosHalfOffset
        },
        tl: {
          x: coords.br.x - sinHalfOffset,
          y: coords.br.y - cosHalfOffset
        }
      };
      coords.ml.corner = {
        tl: {
          x: coords.ml.x - sinHalfOffset,
          y: coords.ml.y - cosHalfOffset
        },
        tr: {
          x: coords.ml.x + cosHalfOffset,
          y: coords.ml.y - sinHalfOffset
        },
        bl: {
          x: coords.ml.x - cosHalfOffset,
          y: coords.ml.y + sinHalfOffset
        },
        br: {
          x: coords.ml.x + sinHalfOffset,
          y: coords.ml.y + cosHalfOffset
        }
      };
      coords.mt.corner = {
        tl: {
          x: coords.mt.x - sinHalfOffset,
          y: coords.mt.y - cosHalfOffset
        },
        tr: {
          x: coords.mt.x + cosHalfOffset,
          y: coords.mt.y - sinHalfOffset
        },
        bl: {
          x: coords.mt.x - cosHalfOffset,
          y: coords.mt.y + sinHalfOffset
        },
        br: {
          x: coords.mt.x + sinHalfOffset,
          y: coords.mt.y + cosHalfOffset
        }
      };
      coords.mr.corner = {
        tl: {
          x: coords.mr.x - sinHalfOffset,
          y: coords.mr.y - cosHalfOffset
        },
        tr: {
          x: coords.mr.x + cosHalfOffset,
          y: coords.mr.y - sinHalfOffset
        },
        bl: {
          x: coords.mr.x - cosHalfOffset,
          y: coords.mr.y + sinHalfOffset
        },
        br: {
          x: coords.mr.x + sinHalfOffset,
          y: coords.mr.y + cosHalfOffset
        }
      };
      coords.mb.corner = {
        tl: {
          x: coords.mb.x - sinHalfOffset,
          y: coords.mb.y - cosHalfOffset
        },
        tr: {
          x: coords.mb.x + cosHalfOffset,
          y: coords.mb.y - sinHalfOffset
        },
        bl: {
          x: coords.mb.x - cosHalfOffset,
          y: coords.mb.y + sinHalfOffset
        },
        br: {
          x: coords.mb.x + sinHalfOffset,
          y: coords.mb.y + cosHalfOffset
        }
      };
      coords.mtr.corner = {
        tl: {
          x: coords.mtr.x - sinHalfOffset + sinTh * this.rotatingPointOffset,
          y: coords.mtr.y - cosHalfOffset - cosTh * this.rotatingPointOffset
        },
        tr: {
          x: coords.mtr.x + cosHalfOffset + sinTh * this.rotatingPointOffset,
          y: coords.mtr.y - sinHalfOffset - cosTh * this.rotatingPointOffset
        },
        bl: {
          x: coords.mtr.x - cosHalfOffset + sinTh * this.rotatingPointOffset,
          y: coords.mtr.y + sinHalfOffset - cosTh * this.rotatingPointOffset
        },
        br: {
          x: coords.mtr.x + sinHalfOffset + sinTh * this.rotatingPointOffset,
          y: coords.mtr.y + cosHalfOffset - cosTh * this.rotatingPointOffset
        }
      };
    }
    /**
     * 转成基础标准对象，方便序列化
     * @param propertiesToInclude 你可能需要添加一些额外的自定义属性
     * @returns 标准对象
     */

  }, {
    key: "toObject",
    value: function toObject() {
      var propertiesToInclude = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      // 保存时的数字精度
      var NUM_FRACTION_DIGITS = 2;
      var object = {
        type: this.type,
        originX: this.originX,
        originY: this.originY,
        left: _utils__WEBPACK_IMPORTED_MODULE_0__.Util.toFixed(this.left, NUM_FRACTION_DIGITS),
        top: _utils__WEBPACK_IMPORTED_MODULE_0__.Util.toFixed(this.top, NUM_FRACTION_DIGITS),
        width: _utils__WEBPACK_IMPORTED_MODULE_0__.Util.toFixed(this.width, NUM_FRACTION_DIGITS),
        height: _utils__WEBPACK_IMPORTED_MODULE_0__.Util.toFixed(this.height, NUM_FRACTION_DIGITS),
        fill: this.fill,
        stroke: this.stroke,
        strokeWidth: this.strokeWidth,
        scaleX: _utils__WEBPACK_IMPORTED_MODULE_0__.Util.toFixed(this.scaleX, NUM_FRACTION_DIGITS),
        scaleY: _utils__WEBPACK_IMPORTED_MODULE_0__.Util.toFixed(this.scaleY, NUM_FRACTION_DIGITS),
        angle: _utils__WEBPACK_IMPORTED_MODULE_0__.Util.toFixed(this.getAngle(), NUM_FRACTION_DIGITS),
        flipX: this.flipX,
        flipY: this.flipY,
        hasControls: this.hasControls,
        hasRotatingPoint: this.hasRotatingPoint,
        transparentCorners: this.transparentCorners,
        perPixelTargetFind: this.perPixelTargetFind,
        visible: this.visible
      };
      _utils__WEBPACK_IMPORTED_MODULE_0__.Util.populateWithProperties(this, object, propertiesToInclude);
      return object;
    }
  }, {
    key: "toSvg",
    value: function toSvg() {
      var markup = [];

      var objSvg = this._toSVG();

      markup.push("<g ", this.getSvgTransform(), " >\n");
      markup.push(objSvg.join(""));
      markup.push("</g>\n");
      return markup.join("");
    }
    /** 由子类具体实现 */

  }, {
    key: "_toSVG",
    value: function _toSVG() {
      return [];
    }
  }, {
    key: "getSvgTransform",
    value: function getSvgTransform() {
      var transform = this.calcOwnMatrix(),
          svgTransform = 'transform="' + _utils__WEBPACK_IMPORTED_MODULE_0__.Util.matrixToSVG(transform);
      return svgTransform + '" ';
    }
  }, {
    key: "calcOwnMatrix",
    value: function calcOwnMatrix() {}
  }, {
    key: "get",
    value: function get(key) {
      return this[key];
    }
  }, {
    key: "set",
    value: function set(key, value) {
      // if (typeof value === 'function') value = value(this.get(key));
      // if (key === 'scaleX' || key === 'scaleY') {
      //     value = this._constrainScale(value);
      // }
      // if (key === 'width' || key === 'height') {
      //     this.minScaleLimit = Util.toFixed(Math.min(0.1, 1 / Math.max(this.width, this.height)), 2);
      // }
      if (key === "scaleX" && value < 0) {
        this.flipX = !this.flipX;
        value *= -1;
      } else if (key === "scaleY" && value < 0) {
        this.flipY = !this.flipY;
        value *= -1;
      }

      this[key] = value;
      return this;
    }
  }, {
    key: "scale",
    get: function get() {
      return this.canvas ? this.canvas.scale : 1;
    }
    /** 获取当前大小，包含缩放效果 */

  }, {
    key: "getWidth",
    value: function getWidth() {
      return this.width * this.scaleX;
    }
    /** 获取当前大小，包含缩放效果 */

  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.height * this.scaleY;
    }
  }, {
    key: "getAngle",
    value: function getAngle() {
      return this.angle;
    }
  }, {
    key: "setAngle",
    value: function setAngle(angle) {
      this.angle = angle;
    }
  }]);

  return Shape;
}(_event__WEBPACK_IMPORTED_MODULE_3__.EventCenter);

/***/ }),

/***/ "../core/2d/src/base/utils.ts":
/*!************************************!*\
  !*** ../core/2d/src/base/utils.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Util": () => (/* binding */ Util)
/* harmony export */ });
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point */ "../core/2d/src/base/point.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var PiBy180 = Math.PI / 180; // 写在这里相当于缓存，因为会频繁调用

var iMatrix = [1, 0, 0, 1, 0, 0];
var Util = /*#__PURE__*/function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  _createClass(Util, null, [{
    key: "populateWithProperties",
    value:
    /**
     * 把源对象的某些属性赋值给目标对象
     * @param source 源对象
     * @param destination 目标对象
     * @param properties 需要赋值的属性
     */
    function populateWithProperties(source, destination, properties) {
      if (properties && Object.prototype.toString.call(properties) === "[object Array]") {
        for (var i = 0, len = properties.length; i < len; i++) {
          destination[properties[i]] = source[properties[i]];
        }
      }
    }
  }, {
    key: "loadImage",
    value: function loadImage(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new Promise(function (resolve, reject) {
        var img = document.createElement("img");

        var done = function done() {
          img.onload = img.onerror = null;
          resolve(img);
        };

        if (url) {
          img.onload = done;

          img.onerror = function () {
            reject(new Error("Error loading " + img.src));
          };

          options && options.crossOrigin && (img.crossOrigin = options.crossOrigin);
          img.src = url;
        } else {
          done();
        }
      });
    }
  }, {
    key: "clone",
    value: function clone(obj) {
      if (!obj || _typeof(obj) !== "object") return obj;
      var temp = new obj.constructor();

      for (var key in obj) {
        if (!obj[key] || _typeof(obj[key]) !== "object") {
          temp[key] = obj[key];
        } else {
          temp[key] = Util.clone(obj[key]);
        }
      }

      return temp;
    }
  }, {
    key: "animate",
    value: function animate(options) {
      window.requestAnimationFrame(function (timestamp) {
        var start = timestamp || +new Date(),
            // 开始时间
        duration = options.duration || 500,
            // 动画时间
        finish = start + duration,
            // 结束时间
        time,
            // 当前时间
        onChange = options.onChange || function () {},
            abort = options.abort || function () {
          return false;
        },
            easing = options.easing || function (t, b, c, d) {
          return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        },
            startValue = options.startValue || 0,
            // 初始值
        endValue = options.endValue || 100,
            // 结束值
        byValue = options.byValue || endValue - startValue; // 值的变化范围


        function tick(ticktime) {
          // tick 的主要任务就是根据时间更新值
          time = ticktime || +new Date();
          var currentTime = time > finish ? duration : time - start; // 当前已经执行了多久时间（介于0~duration）

          if (abort()) {
            options.onComplete && options.onComplete();
            return;
          }

          onChange(easing(currentTime, startValue, byValue, duration)); // 其实 animate 函数只是根据 easing 函数计算出了某个值，然后传给调用者而已

          if (time > finish) {
            options.onComplete && options.onComplete();
            return;
          }

          window.requestAnimationFrame(tick);
        }

        options.onStart && options.onStart(); // 动画开始前的回调

        tick(start);
      });
    }
    /** 从数组中溢出某个元素 */

  }, {
    key: "removeFromArray",
    value: function removeFromArray(array, value) {
      var idx = array.indexOf(value);

      if (idx !== -1) {
        array.splice(idx, 1);
      }

      return array;
    }
    /**
     * 数组的最小值
     */

  }, {
    key: "min",
    value: function min(array) {
      var byProperty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      if (!array || array.length === 0) return undefined;
      var i = array.length - 1,
          result = byProperty ? array[i][byProperty] : array[i];

      if (byProperty) {
        while (i--) {
          if (array[i][byProperty] < result) {
            result = array[i][byProperty];
          }
        }
      } else {
        while (i--) {
          if (array[i] < result) {
            result = array[i];
          }
        }
      }

      return result;
    }
    /**
     * 数组的最大值
     */

  }, {
    key: "max",
    value: function max(array) {
      var byProperty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      if (!array || array.length === 0) return undefined;
      var i = array.length - 1,
          result = byProperty ? array[i][byProperty] : array[i];

      if (byProperty) {
        while (i--) {
          if (array[i][byProperty] >= result) {
            result = array[i][byProperty];
          }
        }
      } else {
        while (i--) {
          if (array[i] >= result) {
            result = array[i];
          }
        }
      }

      return result;
    }
    /** 和原生的 toFixed 一样，只不过返回的数字 */

  }, {
    key: "toFixed",
    value: function toFixed(number, fractionDigits) {
      return parseFloat(Number(number).toFixed(fractionDigits));
    }
    /** 获取鼠标的点击坐标，相对于页面左上角，注意不是画布的左上角，到时候会减掉 offset */

  }, {
    key: "getPointer",
    value: function getPointer(event, upperCanvasEl) {
      var scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
      event || (event = window.event);
      var element = event.target,
          body = document.body || {
        scrollLeft: 0,
        scrollTop: 0
      },
          docElement = document.documentElement,
          orgElement = element,
          scrollLeft = 0,
          scrollTop = 0,
          firstFixedAncestor;

      while (element && element.parentNode && !firstFixedAncestor) {
        element = element.parentNode;
        if (element !== document && Util.getElementPosition(element) === "fixed") firstFixedAncestor = element;

        if (element !== document && orgElement !== upperCanvasEl && Util.getElementPosition(element) === "absolute") {
          scrollLeft = 0;
          scrollTop = 0;
        } else if (element === document && orgElement !== upperCanvasEl) {
          scrollLeft = body.scrollLeft || docElement.scrollLeft || 0;
          scrollTop = body.scrollTop || docElement.scrollTop || 0;
        } else {
          scrollLeft += element.scrollLeft || 0;
          scrollTop += element.scrollTop || 0;
        }
      }

      return {
        x: Util.pointerX(event) / scale + scrollLeft,
        y: Util.pointerY(event) / scale + scrollTop
      };
    }
    /** 根据矩阵反推出具体变换数值 */

  }, {
    key: "qrDecompose",
    value: function qrDecompose(m) {
      var angle = Math.atan2(m[1], m[0]),
          denom = Math.pow(m[0], 2) + Math.pow(m[1], 2),
          scaleX = Math.sqrt(denom),
          scaleY = (m[0] * m[3] - m[2] * m[1]) / scaleX,
          skewX = Math.atan2(m[0] * m[2] + m[1] * m[3], denom);
      return {
        angle: angle / PiBy180,
        scaleX: scaleX,
        scaleY: scaleY,
        skewX: skewX / PiBy180,
        skewY: 0,
        translateX: m[4],
        translateY: m[5]
      };
    }
  }, {
    key: "invertTransform",
    value: function invertTransform(t) {
      var a = 1 / (t[0] * t[3] - t[1] * t[2]),
          r = [a * t[3], -a * t[1], -a * t[2], a * t[0]],
          o = Util.transformPoint({
        x: t[4],
        y: t[5]
      }, r, true);
      r[4] = -o.x;
      r[5] = -o.y;
      return r;
    }
  }, {
    key: "transformPoint",
    value: function transformPoint(p, t) {
      var ignoreOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (ignoreOffset) {
        return new _point__WEBPACK_IMPORTED_MODULE_0__.Point(t[0] * p.x + t[2] * p.y, t[1] * p.x + t[3] * p.y);
      }

      return new _point__WEBPACK_IMPORTED_MODULE_0__.Point(t[0] * p.x + t[2] * p.y + t[4], t[1] * p.x + t[3] * p.y + t[5]);
    }
  }, {
    key: "multiplyTransformMatrices",
    value: function multiplyTransformMatrices(a, b) {
      var is2x2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      // Matrix multiply a * b
      return [a[0] * b[0] + a[2] * b[1], a[1] * b[0] + a[3] * b[1], a[0] * b[2] + a[2] * b[3], a[1] * b[2] + a[3] * b[3], is2x2 ? 0 : a[0] * b[4] + a[2] * b[5] + a[4], is2x2 ? 0 : a[1] * b[4] + a[3] * b[5] + a[5]];
    }
  }, {
    key: "makeBoundingBoxFromPoints",
    value: function makeBoundingBoxFromPoints(points) {
      var xPoints = [points[0].x, points[1].x, points[2].x, points[3].x],
          minX = Util.min(xPoints),
          maxX = Util.max(xPoints),
          width = Math.abs(minX - maxX),
          yPoints = [points[0].y, points[1].y, points[2].y, points[3].y],
          minY = Util.min(yPoints),
          maxY = Util.max(yPoints),
          height = Math.abs(minY - maxY);
      return {
        left: minX,
        top: minY,
        width: width,
        height: height
      };
    }
  }, {
    key: "pointerX",
    value: function pointerX(event) {
      return event.clientX || 0;
    }
  }, {
    key: "pointerY",
    value: function pointerY(event) {
      return event.clientY || 0;
    }
    /** 获取元素位置 */

  }, {
    key: "getElementPosition",
    value: function getElementPosition(element) {
      return window.getComputedStyle(element, null).position;
    }
    /** 角度转弧度，注意 canvas 中用的都是弧度，但是角度对我们来说比较直观 */

  }, {
    key: "degreesToRadians",
    value: function degreesToRadians(degrees) {
      return degrees * PiBy180;
    }
    /** 弧度转角度，注意 canvas 中用的都是弧度，但是角度对我们来说比较直观 */

  }, {
    key: "radiansToDegrees",
    value: function radiansToDegrees(radians) {
      return radians / PiBy180;
    }
    /**
     * 将 point 绕 origin 旋转 radians 弧度
     * @param {Point} point 要旋转的点
     * @param {Point} origin 旋转中心点
     * @param {number} radians 注意 canvas 中用的都是弧度
     * @returns
     */

  }, {
    key: "rotatePoint",
    value: function rotatePoint(point, origin, radians) {
      var sin = Math.sin(radians),
          cos = Math.cos(radians);
      point.subtractEquals(origin);
      var rx = point.x * cos - point.y * sin;
      var ry = point.x * sin + point.y * cos;
      return new _point__WEBPACK_IMPORTED_MODULE_0__.Point(rx, ry).addEquals(origin);
    }
    /** 单纯的创建一个新的 canvas 元素 */

  }, {
    key: "createCanvasElement",
    value: function createCanvasElement() {
      var canvas = document.createElement("canvas");
      return canvas;
    }
    /** 给元素添加类名 */

  }, {
    key: "addClass",
    value: function addClass(element, className) {
      if ((" " + element.className + " ").indexOf(" " + className + " ") === -1) {
        element.className += (element.className ? " " : "") + className;
      }
    }
    /** 计算元素偏移值 */

  }, {
    key: "getElementOffset",
    value: function getElementOffset(element) {
      var valueT = 0,
          valueL = 0;

      do {
        valueT += element.offsetTop || 0;
        valueL += element.offsetLeft || 0;
        element = element.offsetParent;
      } while (element);

      return {
        left: valueL,
        top: valueT
      };
    }
    /** 包裹元素并替换 */

  }, {
    key: "wrapElement",
    value: function wrapElement(element, wrapper, attributes) {
      if (typeof wrapper === "string") {
        wrapper = Util.makeElement(wrapper, attributes);
      }

      if (element.parentNode) {
        element.parentNode.replaceChild(wrapper, element);
      }

      wrapper.appendChild(element);
      return wrapper;
    }
    /** 新建元素并添加相应属性 */

  }, {
    key: "makeElement",
    value: function makeElement(tagName, attributes) {
      var el = document.createElement(tagName);

      for (var prop in attributes) {
        if (prop === "class") {
          el.className = attributes[prop];
        } else {
          el.setAttribute(prop, attributes[prop]);
        }
      }

      return el;
    }
    /** 给元素设置样式 */

  }, {
    key: "setStyle",
    value: function setStyle(element, styles) {
      var elementStyle = element.style;

      if (typeof styles === "string") {
        element.style.cssText += ";" + styles;
        return styles.indexOf("opacity") > -1 ? Util.setOpacity(element, styles.match(/opacity:\s*(\d?\.?\d*)/)[1]) : element;
      }

      for (var property in styles) {
        if (property === "opacity") {
          Util.setOpacity(element, styles[property]);
        } else {
          elementStyle[property] = styles[property];
        }
      }

      return element;
    }
    /** 设置元素透明度 */

  }, {
    key: "setOpacity",
    value: function setOpacity(element, value) {
      element.style.opacity = value;
      return element;
    }
    /** 设置 css 的 userSelect 样式为 none，也就是不可选中的状态 */

  }, {
    key: "makeElementUnselectable",
    value: function makeElementUnselectable(element) {
      element.style.userSelect = "none";
      return element;
    }
  }, {
    key: "addListener",
    value: function addListener(element, eventName, handler) {
      element.addEventListener(eventName, handler, false);
    }
  }, {
    key: "removeListener",
    value: function removeListener(element, eventName, handler) {
      element.removeEventListener(eventName, handler, false);
    }
    /**
     * Returns a transform matrix starting from an object of the same kind of
     * the one returned from qrDecompose, useful also if you want to calculate some
     * transformations from an object that is not enlived yet
     * @static
     * @memberOf fabric.util
     * @param  {Object} options
     * @param  {Number} [options.angle]
     * @param  {Number} [options.scaleX]
     * @param  {Number} [options.scaleY]
     * @param  {Boolean} [options.flipX]
     * @param  {Boolean} [options.flipY]
     * @param  {Number} [options.skewX]
     * @param  {Number} [options.skewX]
     * @param  {Number} [options.translateX]
     * @param  {Number} [options.translateY]
     * @return {Number[]} transform matrix
     */

  }, {
    key: "composeMatrix",
    value: function composeMatrix(options) {
      var matrix = [1, 0, 0, 1, options.translateX || 0, options.translateY || 0],
          multiply = Util.multiplyTransformMatrices;

      if (options.angle) {
        matrix = multiply(matrix, Util.calcRotateMatrix(options));
      }

      if (options.scaleX !== 1 || options.scaleY !== 1 || options.skewX || options.skewY || options.flipX || options.flipY) {
        matrix = multiply(matrix, Util.calcDimensionsMatrix(options));
      }

      return matrix;
    }
  }, {
    key: "calcDimensionsMatrix",
    value: function calcDimensionsMatrix(options) {
      var scaleX = typeof options.scaleX === "undefined" ? 1 : options.scaleX,
          scaleY = typeof options.scaleY === "undefined" ? 1 : options.scaleY,
          scaleMatrix = [options.flipX ? -scaleX : scaleX, 0, 0, options.flipY ? -scaleY : scaleY, 0, 0],
          multiply = Util.multiplyTransformMatrices,
          degreesToRadians = Util.degreesToRadians;

      if (options.skewX) {
        scaleMatrix = multiply(scaleMatrix, [1, 0, Math.tan(degreesToRadians(options.skewX)), 1], true);
      }

      if (options.skewY) {
        scaleMatrix = multiply(scaleMatrix, [1, Math.tan(degreesToRadians(options.skewY)), 0, 1], true);
      }

      return scaleMatrix;
    }
  }, {
    key: "calcRotateMatrix",
    value: function calcRotateMatrix(options) {
      if (!options.angle) {
        return iMatrix.concat();
      }

      var theta = Util.degreesToRadians(options.angle),
          cos = Math.cos(theta),
          sin = Math.sin(theta);
      return [cos, sin, -sin, cos, 0, 0];
    }
  }, {
    key: "matrixToSVG",
    value: function matrixToSVG(transform) {
      return "matrix(" + transform.map(function (value) {
        return Util.toFixed(value, 2);
      }).join(" ") + ")";
    } // 洋葱任务模型

  }, {
    key: "compose",
    value: function compose(middleware) {
      return function (context, next) {
        var index = -1;
        return dispatch(0);

        function dispatch(i) {
          if (i <= index) return Promise.reject(new Error("next() called multiple times"));
          index = i;
          var fn = middleware[i];
          if (i === middleware.length) fn = next;
          if (!fn) return Promise.resolve();

          try {
            return Promise.resolve(fn(context, function next() {
              return dispatch(i + 1);
            }));
          } catch (err) {
            return Promise.reject(err);
          }
        }
      };
    }
  }]);

  return Util;
}();

/***/ }),

/***/ "../core/2d/src/entities/canvas.ts":
/*!*****************************************!*\
  !*** ../core/2d/src/entities/canvas.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Canvas": () => (/* binding */ Canvas)
/* harmony export */ });
/* harmony import */ var _base_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/utils */ "../core/2d/src/base/utils.ts");
/* harmony import */ var _base_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/point */ "../core/2d/src/base/point.ts");
/* harmony import */ var _base_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/group */ "../core/2d/src/base/group.ts");
/* harmony import */ var _base_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base/event */ "../core/2d/src/base/event.ts");
/* harmony import */ var _plugins_default_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../plugins/default.plugin */ "../core/2d/src/plugins/default.plugin.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};






var STROKE_OFFSET = 0.5; // 鼠标手势

var cursorMap = {
  tr: "ne-resize",
  br: "se-resize",
  bl: "sw-resize",
  tl: "nw-resize",
  ml: "w-resize",
  mt: "n-resize",
  mr: "e-resize",
  mb: "s-resize"
};
/** 一些鼠标样式 */

var CursorStyle;

(function (CursorStyle) {
  CursorStyle["default"] = "default";
  CursorStyle["move"] = "move";
  CursorStyle["hover"] = "move";
  CursorStyle["rotation"] = "crosshair";
})(CursorStyle || (CursorStyle = {}));

var Canvas = /*#__PURE__*/function (_EventCenter) {
  _inherits(Canvas, _EventCenter);

  var _super = _createSuper(Canvas);

  function Canvas(el, options) {
    var _this;

    _classCallCheck(this, Canvas);

    _this = _super.call(this); //#region 属性字段

    /** 当前操作类型 */

    _this.action = "default";
    _this.viewportTransform = [1, 0, 0, 1, 0, 0];
    /** 画布中所有添加的物体 */

    _this._shapes = [];
    /**
     * Window.devicePixelRatio
     * Window 接口的**devicePixelRatio
     *  返回当前显示设备的物理像素分辨率与CSS 像素分辨率之比。
     *  此值也可以解释为像素大小的比率：一个 CSS 像素的大小与一个物理像素的大小。
     *  简单来说，它告诉浏览器应使用多少屏幕实际像素来绘制单个 CSS 像素。
     */

    _this.dpr = window.devicePixelRatio; // 缩放比

    _this.scale = 1; // 上一次的缩放比

    _this.preScale = 1; // 距离画布原点的偏移量

    _this._canvasOffset = {
      left: 0,
      top: 0
    };
    /**************  可配置部分  **************/

    /** 选择区域框的背景颜色 */

    _this.selectionColor = "#0c99ff26";
    /** 选择区域框的边框颜色 */

    _this.selectionBorderColor = "#0c99ff";
    /** 选择区域的边框大小，拖蓝的线宽 */

    _this.selectionLineWidth = 1; // 每次缩放的步长

    _this.scaleStep = 0.2; // 最大缩放比

    _this.scaleMax = 8;
    _this.scaleMin = 0.4; // 插件

    _this.plugins = [_plugins_default_plugin__WEBPACK_IMPORTED_MODULE_4__["default"]]; // 挂件

    _this.widgets = []; // 初始化配置

    _this.wrapperElement = el;

    _this._initConfig(options); // 初始化下层画布 main-canvas


    _this._initMainCanvas(); // 初始化上层画布 top-canvas


    _this._initInteractiveCanvas(); // 初始化缓冲层画布


    _this._initCacheCanvas(); // 处理模糊问题


    _this._initRetinaScaling();

    return _this;
  } //#endregion
  //#region 初始化逻辑
  // 初始化配置


  _createClass(Canvas, [{
    key: "_initConfig",
    value: function _initConfig(options) {
      for (var key in options) {
        if (key === "plugins") {
          var _this$plugins;

          (_this$plugins = this.plugins).push.apply(_this$plugins, _toConsumableArray(options[key]));
        } else if (key === "widgets") {
          var _this$widgets;

          (_this$widgets = this.widgets).push.apply(_this$widgets, _toConsumableArray(options[key])); // 初始化挂件


          this._initWidgets();
        } else if (Object.prototype.hasOwnProperty.call(options, key)) {
          this[key] = options[key];
        }
      }

      this.wrapperElement.style.width = this.width + "px";
      this.wrapperElement.style.height = this.height + "px";
    } // 初始化挂载挂件

  }, {
    key: "_initWidgets",
    value: function _initWidgets() {
      var _this2 = this;

      this.widgets.forEach(function (widget) {
        widget.dom = document.createElement("div");
        widget.dom.innerHTML = widget.innerHTML;
        widget.dom.style.display = "initial";
        widget.dom.style.position = "absolute";
        widget.dom.style["zIndex"] = "10";

        _this2.wrapperElement.appendChild(widget.dom);

        widget.rococo2d = _this2;
        widget.mount();
      });
    }
  }, {
    key: "_initObject",
    value: function _initObject(obj) {
      obj.setupState();
      obj.setCoords();
      obj.canvas = this;
    } // 初始化主画布

  }, {
    key: "_initMainCanvas",
    value: function _initMainCanvas() {
      this.mainCanvas = document.createElement("canvas");
      this.wrapperElement.appendChild(this.mainCanvas);

      this._applyCanvasStyle(this.mainCanvas);

      this.mCtx = this.mainCanvas.getContext("2d");
      this.calcOffset();
    } // 初始化操作画布

  }, {
    key: "_initInteractiveCanvas",
    value: function _initInteractiveCanvas() {
      this._currentTransform = null;
      this._groupSelector = null;
      this.topCanvas = document.createElement("canvas");
      this.wrapperElement.appendChild(this.topCanvas);

      this._applyCanvasStyle(this.topCanvas);

      this.tCtx = this.topCanvas.getContext("2d");

      this._initEvents();
    } // 初始化缓冲画布

  }, {
    key: "_initCacheCanvas",
    value: function _initCacheCanvas() {
      this.cacheCanvas = document.createElement("canvas");

      this._applyCanvasStyle(this.cacheCanvas);

      this.cCtx = this.cacheCanvas.getContext("2d");
    } // 初始化视觉缩放比例

  }, {
    key: "_initRetinaScaling",
    value: function _initRetinaScaling() {
      var _this3 = this;

      var localInitRetinaScaling = function localInitRetinaScaling(canvas, ctx) {
        var width = _this3.width,
            height = _this3.height; // 重新设置 canvas 自身宽高大小和 css 大小。放大 canvas；css 保持不变，因为我们需要那么多的点

        canvas.width = Math.round(width * _this3.dpr);
        canvas.height = Math.round(height * _this3.dpr);
        canvas.style.width = width + "px";
        canvas.style.height = height + "px"; // 直接用 scale 放大整个坐标系，相对来说就是放大了每个绘制操作

        ctx.scale(_this3.dpr, _this3.dpr);
      };

      localInitRetinaScaling(this.mainCanvas, this.mCtx);
      localInitRetinaScaling(this.topCanvas, this.tCtx);
      localInitRetinaScaling(this.cacheCanvas, this.cCtx);
    } // #endregion
    // #region 事件系统

    /** 给上层画布增加鼠标事件 */

  }, {
    key: "_initEvents",
    value: function _initEvents() {
      this._handleMouseDown = this._handleMouseDown.bind(this);
      this._handleMouseMove = this._handleMouseMove.bind(this);
      this._handleMouseUp = this._handleMouseUp.bind(this);
      this._handleWindowResize = this._handleWindowResize.bind(this);
      this._handleMouseWheel = this._handleMouseWheel.bind(this);
      _base_utils__WEBPACK_IMPORTED_MODULE_0__.Util.addListener(window, "resize", this._handleWindowResize);
      _base_utils__WEBPACK_IMPORTED_MODULE_0__.Util.addListener(this.topCanvas, "mousedown", this._handleMouseDown);
      _base_utils__WEBPACK_IMPORTED_MODULE_0__.Util.addListener(this.topCanvas, "mousemove", this._handleMouseMove);
      _base_utils__WEBPACK_IMPORTED_MODULE_0__.Util.addListener(this.topCanvas, document.mozFullScreen ? "DOMMouseScroll" : "mousewheel", this._handleMouseWheel);
    } // 执行洋葱任务模型

  }, {
    key: "_executeCompose",
    value: function _executeCompose(key, ctx) {
      var widgetMiddles = [];
      this.widgets.forEach(function (widget) {
        if (widget[key]) {
          widgetMiddles.push(widget[key].bind(widget));
        }
      }); // 虽然设计有返回值，但是并不关心因此不处理

      _base_utils__WEBPACK_IMPORTED_MODULE_0__.Util.compose([].concat(_toConsumableArray(this.plugins.filter(function (p) {
        return p[key];
      }).map(function (p) {
        return p[key];
      })), widgetMiddles))(ctx);
    } // 鼠标下压事件

  }, {
    key: "_handleMouseDown",
    value: function _handleMouseDown(e) {
      var pointer = _base_utils__WEBPACK_IMPORTED_MODULE_0__.Util.getPointer(e, this.topCanvas, this.scale);

      this._executeCompose("mouseDown", {
        e: e,
        pointer: pointer,
        rococo2d: this
      });

      _base_utils__WEBPACK_IMPORTED_MODULE_0__.Util.addListener(document, "mouseup", this._handleMouseUp); // 注销交互层 canvas 的监听事件，注册整个页面的事件，保证鼠标移动到屏幕外时 move 事件依旧执行

      _base_utils__WEBPACK_IMPORTED_MODULE_0__.Util.addListener(document, "mousemove", this._handleMouseMove);
      _base_utils__WEBPACK_IMPORTED_MODULE_0__.Util.removeListener(this.topCanvas, "mousemove", this._handleMouseMove);
    } // 鼠标移动事件

  }, {
    key: "_handleMouseMove",
    value: function _handleMouseMove(e) {
      var pointer = _base_utils__WEBPACK_IMPORTED_MODULE_0__.Util.getPointer(e, this.topCanvas, this.scale);

      this._executeCompose("mouseMove", {
        e: e,
        pointer: pointer,
        rococo2d: this
      });

      e.preventDefault();
    } // 鼠标放开事件

  }, {
    key: "_handleMouseUp",
    value: function _handleMouseUp(e) {
      this._executeCompose("mouseUp", {
        e: e,
        rococo2d: this
      });

      _base_utils__WEBPACK_IMPORTED_MODULE_0__.Util.removeListener(document, "mouseup", this._handleMouseUp); // 注销整个页面的事件，退回到只有交互层 canvas 事件舰艇，只在 canvas 内执行 move 事件

      _base_utils__WEBPACK_IMPORTED_MODULE_0__.Util.removeListener(document, "mousemove", this._handleMouseMove);
      _base_utils__WEBPACK_IMPORTED_MODULE_0__.Util.addListener(this.topCanvas, "mousemove", this._handleMouseMove);
    } // 鼠标滚轮事件

  }, {
    key: "_handleMouseWheel",
    value: function _handleMouseWheel(e) {
      var pointer = _base_utils__WEBPACK_IMPORTED_MODULE_0__.Util.getPointer(e, this.topCanvas, this.scale);

      this._executeCompose("mouseWheel", {
        e: e,
        pointer: pointer,
        rococo2d: this
      });
    } // 窗口缩放事件

  }, {
    key: "_handleWindowResize",
    value: function _handleWindowResize() {
      // TODO: 执行洋葱任务模型
      // this._executeCompose("", {canvas: this})
      this.calcOffset();
    } // #endregion
    // #region 对象操作

  }, {
    key: "setActiveObject",
    value: function setActiveObject(object, e) {
      if (this._activeShape) {
        // 如果当前有激活物体
        this._activeShape.setActive(false);
      }

      this._activeShape = object;
      object.setActive(true);
      this.renderAll(); // this.emit('object:selected', { target: object, e });
      // object.emit('selected', { e });

      return this;
    } // 获取当前选中的元素

  }, {
    key: "getActiveObject",
    value: function getActiveObject() {
      return this._activeShape;
    }
    /** 使所有元素失活，并触发相应事件 */

  }, {
    key: "deactivateAllWithDispatch",
    value: function deactivateAllWithDispatch() {
      // let activeObject = this.getActiveGroup() || this.getActiveObject();
      // if (activeObject) {
      //     this.emit('before:selection:cleared', { target: activeObject });
      // }
      this.deactivateAll(); // if (activeObject) {
      //     this.emit('selection:cleared');
      // }

      return this;
    }
    /** 将所有物体设置成未激活态 */

  }, {
    key: "deactivateAll",
    value: function deactivateAll() {
      var allObjects = this._shapes,
          i = 0,
          len = allObjects.length;

      for (; i < len; i++) {
        allObjects[i].setActive(false);
      }

      this.discardActiveGroup();
      this.discardActiveObject();
      return this;
    }
  }, {
    key: "resetObjectTransform",
    value: function resetObjectTransform(target) {
      target.scaleX = 1;
      target.scaleY = 1;
      target.setAngle(0);
    }
    /** 清空所有激活物体 */

  }, {
    key: "discardActiveObject",
    value: function discardActiveObject() {
      if (this._activeShape) {
        this._activeShape.setActive(false);
      }

      this._activeShape = null;
      return this;
    }
    /** 平移当前选中物体，注意这里我们没有用 += */

  }, {
    key: "translateObject",
    value: function translateObject(x, y) {
      var target = this._currentTransform.target;
      target.set("left", x - this._currentTransform.offsetX);
      target.set("top", y - this._currentTransform.offsetY);
    }
    /**
     * 缩放当前选中物体
     * @param x 鼠标点 x
     * @param y 鼠标点 y
     * @param by 是否等比缩放，x | y | equally
     */

  }, {
    key: "scaleObject",
    value: function scaleObject(x, y) {
      var by = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "equally";
      var t = this._currentTransform,
          offset = this._offset,
          target = t.target; // 缩放基点：比如拖拽右边中间的控制点，其实我们参考的变换基点是左边中间的控制点

      var constraintPosition = target.translateToOriginPoint(target.getCenterPoint(), t.originX, t.originY); // 以物体变换中心为原点的鼠标点坐标值

      var localMouse = target.toLocalPoint(new _base_point__WEBPACK_IMPORTED_MODULE_1__.Point(x - offset.left, y - offset.top), t.originX, t.originY);

      if (t.originX === "right") {
        localMouse.x *= -1;
      } else if (t.originX === "center") {
        localMouse.x *= t.mouseXSign * 2;

        if (localMouse.x < 0) {
          t.mouseXSign = -t.mouseXSign;
        }
      }

      if (t.originY === "bottom") {
        localMouse.y *= -1;
      } else if (t.originY === "center") {
        localMouse.y *= t.mouseYSign * 2;

        if (localMouse.y < 0) {
          t.mouseYSign = -t.mouseYSign;
        }
      } // 计算新的缩放值，以变换中心为原点，根据本地鼠标坐标点/原始宽度进行计算，重新设定物体缩放值


      var newScaleX = target.scaleX,
          newScaleY = target.scaleY;

      if (by === "equally") {
        var dist = localMouse.y + localMouse.x;
        var lastDist = target.height * t.original.scaleY + target.width * t.original.scaleX + target.padding * 2 - target.strokeWidth * 2 + 1;
        /* additional offset needed probably due to subpixel rendering, and avoids jerk when scaling an object */
        // We use t.scaleX/Y instead of target.scaleX/Y because the object may have a min scale and we'll loose the proportions

        newScaleX = t.original.scaleX * dist / lastDist;
        newScaleY = t.original.scaleY * dist / lastDist;
        target.set("scaleX", newScaleX);
        target.set("scaleY", newScaleY);
      } else if (!by) {
        newScaleX = localMouse.x / (target.width + target.padding);
        newScaleY = localMouse.y / (target.height + target.padding);
        target.set("scaleX", newScaleX);
        target.set("scaleY", newScaleY);
      } else if (by === "x") {
        newScaleX = localMouse.x / (target.width + target.padding);
        target.set("scaleX", newScaleX);
      } else if (by === "y") {
        newScaleY = localMouse.y / (target.height + target.padding);
        target.set("scaleY", newScaleY);
      } // 如果是反向拉伸 x


      if (newScaleX < 0) {
        if (t.originX === "left") t.originX = "right";else if (t.originX === "right") t.originX = "left";
      } // 如果是反向拉伸 y


      if (newScaleY < 0) {
        if (t.originY === "top") t.originY = "bottom";else if (t.originY === "bottom") t.originY = "top";
      } // 缩放会改变物体位置，所以要重新设置


      target.setPositionByOrigin(constraintPosition, t.originX, t.originY);
    }
    /** 旋转当前选中物体，这里用的是 += */

  }, {
    key: "rotateObject",
    value: function rotateObject(x, y) {
      var t = this._currentTransform;
      var o = this._offset; // 鼠标按下的点与物体中心点连线和 x 轴正方向形成的弧度

      var lastAngle = Math.atan2(t.ey - o.top - t.top, t.ex - o.left - t.left); // 鼠标拖拽的终点与物体中心点连线和 x 轴正方向形成的弧度

      var curAngle = Math.atan2(y - o.top - t.top, x - o.left - t.left);
      var angle = _base_utils__WEBPACK_IMPORTED_MODULE_0__.Util.radiansToDegrees(curAngle - lastAngle + t.theta); // 新的角度 = 变换的角度 + 原来的角度

      if (angle < 0) {
        angle = 360 + angle;
      }

      angle = angle % 360;
      t.target.angle = angle;
    }
    /**
     * 获取拖蓝选区包围的元素
     * 可能只有一个物体，那就是普通的点选
     * 如果有多个物体，那就生成一个组
     */

  }, {
    key: "findSelectedObjects",
    value: function findSelectedObjects(e) {
      var objects = [],
          // 存储最终框选的元素
      x1 = this._groupSelector.ex,
          y1 = this._groupSelector.ey,
          x2 = x1 + this._groupSelector.left,
          y2 = y1 + this._groupSelector.top,
          selectionX1Y1 = new _base_point__WEBPACK_IMPORTED_MODULE_1__.Point(Math.min(x1, x2), Math.min(y1, y2)),
          selectionX2Y2 = new _base_point__WEBPACK_IMPORTED_MODULE_1__.Point(Math.max(x1, x2), Math.max(y1, y2));

      for (var i = 0, len = this._shapes.length; i < len; ++i) {
        var currentObject = this._shapes[i];
        if (!currentObject) continue; // 物体是否与拖蓝选区相交或者被选区包含

        if (currentObject.intersectsWithRect(selectionX1Y1, selectionX2Y2) || currentObject.isContainedWithinRect(selectionX1Y1, selectionX2Y2)) {
          currentObject.setActive(true);
          objects.push(currentObject);
        }
      }

      if (objects.length === 1) {
        this.setActiveObject(objects[0], e);
      } else if (objects.length > 1) {
        var newGroup = new _base_group__WEBPACK_IMPORTED_MODULE_2__.Group(objects);
        this.setActiveGroup(newGroup); // newGroup.saveCoords();
        // this.emit('selection:created', { target: newGroup });
      }

      this.renderAll();
    }
    /** 记录当前物体的变换状态 */

  }, {
    key: "setupCurrentTransform",
    value: function setupCurrentTransform(e, target) {
      var action = "drag",
          corner,
          pointer = _base_utils__WEBPACK_IMPORTED_MODULE_0__.Util.getPointer(e, target.canvas.topCanvas, this.scale);
      corner = target._findTargetCorner(e, this._offset);

      if (corner) {
        // 根据点击的控制点判断此次操作是什么
        action = corner === "ml" || corner === "mr" ? "scaleX" : corner === "mt" || corner === "mb" ? "scaleY" : corner === "mtr" ? "rotate" : "scale";
      }

      var originX = "center",
          originY = "center";

      if (corner === "ml" || corner === "tl" || corner === "bl") {
        // 如果点击的是左边的控制点，则变换基点就是右边，以右边为基准向左变换
        originX = "right";
      } else if (corner === "mr" || corner === "tr" || corner === "br") {
        originX = "left";
      }

      if (corner === "tl" || corner === "mt" || corner === "tr") {
        // 如果点击的是上方的控制点，则变换基点就是底部，以底边为基准向上变换
        originY = "bottom";
      } else if (corner === "bl" || corner === "mb" || corner === "br") {
        originY = "top";
      }

      if (corner === "mtr") {
        // 如果是旋转操作，则基点就是中心点
        originX = "center";
        originY = "center";
      } // let center = target.getCenterPoint();


      this._currentTransform = {
        target: target,
        action: action,
        scaleX: target.scaleX,
        scaleY: target.scaleY,
        offsetX: pointer.x - target.left,
        offsetY: pointer.y - target.top,
        originX: originX,
        originY: originY,
        ex: pointer.x,
        ey: pointer.y,
        left: target.left,
        top: target.top,
        theta: _base_utils__WEBPACK_IMPORTED_MODULE_0__.Util.degreesToRadians(target.angle),
        width: target.width * target.scaleX,
        mouseXSign: 1,
        mouseYSign: 1
      }; // 记录物体原始的 original 变换参数

      this._currentTransform.original = {
        left: target.left,
        top: target.top,
        scaleX: target.scaleX,
        scaleY: target.scaleY,
        originX: originX,
        originY: originY
      };

      var _a = this._currentTransform,
          target2 = _a.target,
          other = __rest(_a, ["target"]); // this.resetCurrentTransform(e); // 好像没必要重新赋值？除非按下了 altKey 键

    }
    /** 重置当前 transform 状态为 original，并设置 resizing 的基点 */

  }, {
    key: "resetCurrentTransform",
    value: function resetCurrentTransform(e) {
      var t = this._currentTransform;
      t.target.set("scaleX", t.original.scaleX);
      t.target.set("scaleY", t.original.scaleY);
      t.target.set("left", t.original.left);
      t.target.set("top", t.original.top);

      if (e.altKey) {
        if (t.originX !== "center") {
          if (t.originX === "right") {
            t.mouseXSign = -1;
          } else {
            t.mouseXSign = 1;
          }
        }

        if (t.originY !== "center") {
          if (t.originY === "bottom") {
            t.mouseYSign = -1;
          } else {
            t.mouseYSign = 1;
          }
        }

        t.originX = "center";
        t.originY = "center";
      } else {
        t.originX = t.original.originX;
        t.originY = t.original.originY;
      }
    } // #endregion
    // #region 组操作

  }, {
    key: "getActiveGroup",
    value: function getActiveGroup() {
      return this._activeGroup;
    }
  }, {
    key: "setActiveGroup",
    value: function setActiveGroup(group) {
      this._activeGroup = group;

      if (group) {
        group.canvas = this;
        group.setActive(true);
      }

      return this;
    }
    /** 将当前选中组失活 */

  }, {
    key: "discardActiveGroup",
    value: function discardActiveGroup() {
      var g = this.getActiveGroup();
      if (g) g.destroy();
      return this.setActiveGroup(null);
    }
    /** 是否要处理组的逻辑 */

  }, {
    key: "shouldHandleGroupLogic",
    value: function shouldHandleGroupLogic(e, target) {
      var activeObject = this._activeShape;
      return e.shiftKey && (this.getActiveGroup() || activeObject && activeObject !== target);
    }
  }, {
    key: "handleGroupLogic",
    value: function handleGroupLogic(e, target) {
      if (target === this.getActiveGroup()) {
        // if it's a group, find target again, this time skipping group
        target = this.findTarget(e, true); // if even object is not found, bail out

        if (!target || target.isType("group")) {
          return;
        }
      }

      var activeGroup = this.getActiveGroup();

      if (activeGroup) {
        if (activeGroup.contains(target)) {
          activeGroup.removeWithUpdate(target);
          this.resetObjectTransform(activeGroup);
          target.setActive(false);

          if (activeGroup.size() === 1) {
            this.discardActiveGroup();
          }
        } else {
          activeGroup.addWithUpdate(target);
          this.resetObjectTransform(activeGroup);
        }

        activeGroup.setActive(true);
      } else {
        if (this._activeShape) {
          if (target !== this._activeShape) {
            var group = new _base_group__WEBPACK_IMPORTED_MODULE_2__.Group([this._activeShape, target]);
            this.setActiveGroup(group);
            activeGroup = this.getActiveGroup();
          }
        }

        target.setActive(true);
      }
    } // #endregion
    // #region 画布操作

    /** 添加元素
     * 目前的模式是调用 add 添加物体的时候就立马渲染，
     * 如果一次性加入大量元素，就会做很多无用功，
     * 所以可以加一个属性来先批量添加元素，最后再一次渲染（手动调用 renderAll 函数即可）
     */

  }, {
    key: "add",
    value: function add() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this._shapes.push.apply(this._shapes, args);

      for (var i = args.length; i--;) {
        this._initObject(args[i]);
      }

      this.renderAll();
      return this;
    } // 设置 canvas 的宽高以及起始点

  }, {
    key: "_applyCanvasStyle",
    value: function _applyCanvasStyle(el) {
      var width = this.width || el.width;
      var height = this.height || el.height;
      _base_utils__WEBPACK_IMPORTED_MODULE_0__.Util.setStyle(el, {
        position: "absolute",
        width: width + "px",
        height: height + "px",
        "margin-left": 0,
        "margin-top": 0
      });
      el.width = width;
      el.height = height;
      _base_utils__WEBPACK_IMPORTED_MODULE_0__.Util.makeElementUnselectable(el);
    }
    /** 如果当前的物体在当前的组内，则要考虑扣去组的 top、left 值 */

  }, {
    key: "_normalizePointer",
    value: function _normalizePointer(object, pointer) {
      var activeGroup = this.getActiveGroup(),
          x = pointer.x,
          y = pointer.y;
      var isObjectInGroup = activeGroup && object.type !== "group" && activeGroup.contains(object);

      if (isObjectInGroup) {
        x -= activeGroup.left;
        y -= activeGroup.top;
      }

      return {
        x: x,
        y: y
      };
    }
    /** 将所有物体分成两个组，一组是未激活态，一组是激活态，然后将激活组放在最后，这样就能够绘制到最上层 */

  }, {
    key: "_chooseObjectsToRender",
    value: function _chooseObjectsToRender() {
      // 当前有没有激活的物体
      var activeObject = this.getActiveObject(); // 当前有没有激活的组（也就是多个物体）

      var activeGroup = this.getActiveGroup(); // 最终要渲染的物体顺序，也就是把激活的物体放在后面绘制

      var objsToRender = [];

      if (activeGroup) {
        // 如果选中多个物体
        var activeGroupObjects = [];

        for (var i = 0, length = this._shapes.length; i < length; i++) {
          var object = this._shapes[i];

          if (activeGroup.contains(object)) {
            activeGroupObjects.push(object);
          } else {
            objsToRender.push(object);
          }
        }

        objsToRender.push(activeGroup);
      } else if (activeObject) {
        // 如果只选中一个物体
        var index = this._shapes.indexOf(activeObject);

        objsToRender = this._shapes.slice();

        if (index > -1) {
          objsToRender.splice(index, 1);
          objsToRender.push(activeObject);
        }
      } else {
        // 所有物体都没被选中
        objsToRender = this._shapes;
      }

      return objsToRender;
    }
  }, {
    key: "_draw",
    value: function _draw(ctx, object) {
      if (!object) return;
      object.render(ctx);
    }
  }, {
    key: "zoom",
    value: function zoom(is_mouse) {
      // 是否居中放大
      if (!is_mouse) {// this._offset.left = this.width / 2;
        // this._offset.top = this.height / 2;
      } // this.offset.x =
      //   this.mousePosition.x -
      //   ((this.mousePosition.x - this.offset.x) * this.scale) / this.preScale;
      // this.offset.y =
      //   this.mousePosition.y -
      //   ((this.mousePosition.y - this.offset.y) * this.scale) / this.preScale;


      this.renderAll(); // this.preScale = this.scale;
      // this._currentOffset.x = this.offset.x;
      // this.currentOffset.y = this.offset.y;
    } // 放大

  }, {
    key: "zoomIn",
    value: function zoomIn() {
      var is_mouse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.scaleMax > this.scale) {
        this.scale += this.scaleStep;
        this.zoom(is_mouse);
      } else {
        return;
      }
    } // 缩小

  }, {
    key: "zoomOut",
    value: function zoomOut() {
      var is_mouse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.scaleMin < this.scale) {
        this.scale -= this.scaleStep;
        this.zoom(is_mouse);
      } else {
        return;
      }
    }
    /** 删除所有物体和清空画布 */

  }, {
    key: "clear",
    value: function clear() {
      this._shapes.length = 0;
      this.discardActiveGroup();
      this.clearContext(this.mCtx);
      this.clearContext(this.tCtx);
      this.renderAll();
      return this;
    }
  }, {
    key: "clearCanvas",
    value: function clearCanvas(canvas) {
      canvas.width = this.width;
      canvas.height = this.height;
    }
  }, {
    key: "clearContext",
    value: function clearContext(ctx) {
      ctx && ctx.clearRect(0, 0, this.width, this.height);
      return this;
    }
    /** 获取画布的偏移量，到时计算鼠标点击位置需要用到 */

  }, {
    key: "calcOffset",
    value: function calcOffset() {
      // TODO: 这边的外部偏移量计算有点问题
      this._offset = _base_utils__WEBPACK_IMPORTED_MODULE_0__.Util.getElementOffset(this.mainCanvas);
      return this;
    }
    /** 大部分是在 main-canvas 上先画未激活物体，再画激活物体 */

  }, {
    key: "renderAll",
    value: function renderAll() {
      var _this4 = this;

      var ctxs = [this.mCtx, this.cCtx, this.tCtx];

      if (this.tCtx) {
        this.clearContext(this.tCtx);
      }

      this.clearContext(this.mCtx);
      ctxs.forEach(function (c) {
        return c.save();
      });
      ctxs.forEach(function (c) {
        return c.scale(_this4.scale, _this4.scale);
      });
      ctxs.forEach(function (c) {
        return c.translate(_this4._canvasOffset.left, _this4._canvasOffset.top);
      }); // 先绘制未激活物体，再绘制激活物体

      var sortedObjects = this._chooseObjectsToRender();

      for (var i = 0, len = sortedObjects.length; i < len; ++i) {
        this._draw(this.mCtx, sortedObjects[i]);
      }

      ctxs.forEach(function (c) {
        return c.restore();
      });
      return this;
    }
  }, {
    key: "getPointer",
    value: function getPointer(e) {
      var pointer = _base_utils__WEBPACK_IMPORTED_MODULE_0__.Util.getPointer(e, this.topCanvas, this.scale);
      return {
        x: pointer.x - this._offset.left,
        y: pointer.y - this._offset.top
      };
    }
    /** 检测是否有物体在鼠标位置 */

  }, {
    key: "findTarget",
    value: function findTarget(e) {
      var skipGroup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var target; // let pointer = this.getPointer(e);
      // 优先考虑当前组中的物体，因为激活的物体被选中的概率大

      var activeGroup = this.getActiveGroup();

      if (activeGroup && !skipGroup && this.containsPoint(e, activeGroup)) {
        target = activeGroup;
        return target;
      } // 遍历所有物体，判断鼠标点是否在物体包围盒内


      for (var i = this._shapes.length; i--;) {
        if (this._shapes[i] && this.containsPoint(e, this._shapes[i])) {
          target = this._shapes[i];
          break;
        }
      }

      if (target) return target;
    } // 判断鼠标点位是否存在图形中

  }, {
    key: "containsPoint",
    value: function containsPoint(e, target) {
      var pointer = this.getPointer(e),
          xy = this._normalizePointer(target, pointer),
          x = xy.x,
          y = xy.y; // 下面这是参考文献，不过好像打不开
      // http://www.geog.ubc.ca/courses/klink/gis.notes/ncgia/u32.html
      // http://idav.ucdavis.edu/~okreylos/TAship/Spring2000/PointInPolygon.html
      // we iterate through each object. If target found, return it.


      var iLines = target._getImageLines(target.oCoords),
          xpoints = target._findCrossPoints(x, y, iLines); // if xcount is odd then we clicked inside the object
      // For the specific case of square images xcount === 1 in all true cases


      if (xpoints && xpoints % 2 === 1 || target._findTargetCorner(e, this._offset)) {
        return true;
      }

      return false;
    } // #endregion
    // #region 顶层交互层操作

    /** 渲染 top-canvas，一般用于渲染拖蓝多选区域和涂鸦 */

  }, {
    key: "renderTop",
    value: function renderTop() {
      var ctx = this.tCtx;
      this.clearContext(ctx);
      ctx.save();
      ctx.scale(this.scale, this.scale);
      ctx.translate(this._canvasOffset.left, this._canvasOffset.top); // 绘制拖蓝选区

      if (this._groupSelector) this.drawSelection(); // 绘制正在绘制的图形

      if (this._drawingShape) this._draw(this.tCtx, this._drawingShape); // 如果有选中物体
      // let activeGroup = this.getActiveGroup();
      // if (activeGroup) activeGroup.render(ctx);

      ctx.restore();
      this.emit("after:render");
      return this;
    }
    /** 绘制框选区域 */

  }, {
    key: "drawSelection",
    value: function drawSelection() {
      var ctx = this.tCtx,
          groupSelector = this._groupSelector,
          left = groupSelector.left,
          top = groupSelector.top,
          aleft = Math.abs(left),
          atop = Math.abs(top);
      ctx.fillStyle = this.selectionColor;
      ctx.fillRect(groupSelector.ex - (left > 0 ? 0 : -left), groupSelector.ey - (top > 0 ? 0 : -top), aleft, atop);
      ctx.lineWidth = this.selectionLineWidth;
      ctx.strokeStyle = this.selectionBorderColor;
      ctx.strokeRect(groupSelector.ex + STROKE_OFFSET - (left > 0 ? 0 : aleft), groupSelector.ey + STROKE_OFFSET - (top > 0 ? 0 : atop), aleft, atop);
    }
    /** 是否是拖蓝事件，也就是没有点选到物体 */

  }, {
    key: "shouldClearSelection",
    value: function shouldClearSelection(e) {
      var target = this.findTarget(e),
          activeGroup = this.getActiveGroup();
      return !target || target && activeGroup && !activeGroup.contains(target) && activeGroup !== target && !e.shiftKey;
    } // #endregion
    // #region 鼠标样式相关

    /** 设置鼠标样式 */

  }, {
    key: "setCursor",
    value: function setCursor(value) {
      this.topCanvas.style.cursor = value;
    }
    /** 根据鼠标位置来设置相应的鼠标样式 */

  }, {
    key: "setCursorFromEvent",
    value: function setCursorFromEvent(e, target) {
      var s = this.topCanvas.style;

      if (target) {
        var activeGroup = this.getActiveGroup();

        var corner = (!activeGroup || !activeGroup.contains(target)) && target._findTargetCorner(e, this._offset);

        if (corner) {
          corner = corner;

          if (corner in cursorMap) {
            s.cursor = cursorMap[corner];
          } else if (corner === "mtr" && target.hasRotatingPoint) {
            s.cursor = CursorStyle.rotation;
          } else {
            s.cursor = CursorStyle.default;
            return false;
          }
        } else {
          s.cursor = CursorStyle.hover;
        }

        return true;
      } else {
        s.cursor = CursorStyle.default;
        return false;
      }
    }
  }]);

  return Canvas;
}(_base_event__WEBPACK_IMPORTED_MODULE_3__.EventCenter);

/***/ }),

/***/ "../core/2d/src/entities/elements/image.entity.ts":
/*!********************************************************!*\
  !*** ../core/2d/src/entities/elements/image.entity.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RococoImage": () => (/* binding */ RococoImage)
/* harmony export */ });
/* harmony import */ var _base_shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/shape */ "../core/2d/src/base/shape.ts");
/* harmony import */ var _base_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base/utils */ "../core/2d/src/base/utils.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var RococoImage = /*#__PURE__*/function (_Shape) {
  _inherits(RococoImage, _Shape);

  var _super = _createSuper(RococoImage);

  /** 默认通过 img 标签来绘制，因为最终都是要通过该标签绘制的 */
  function RococoImage(element, options) {
    var _this;

    _classCallCheck(this, RococoImage);

    _this = _super.call(this, options);
    _this.type = "image";

    _this._initElement(element, options);

    return _this;
  }

  _createClass(RococoImage, [{
    key: "_initElement",
    value: function _initElement(element, options) {
      this.setElement(element, options);
    }
  }, {
    key: "setElement",
    value: function setElement(element, options) {
      this._element = element;

      this._initConfig(options);

      return this;
    }
  }, {
    key: "_initConfig",
    value: function _initConfig() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.setOptions(options);

      this._setWidthHeight(options);
    }
    /** 设置图像大小 */

  }, {
    key: "_setWidthHeight",
    value: function _setWidthHeight(options) {
      this.width = "width" in options ? options.width : this.getElement() ? this.getElement().width || 0 : 0;
      this.height = "height" in options ? options.height : this.getElement() ? this.getElement().height || 0 : 0;
    }
  }, {
    key: "getElement",
    value: function getElement() {
      return this._element;
    }
    /** 直接调用 drawImage 绘制图像 */

  }, {
    key: "_render",
    value: function _render(ctx) {
      var noTransform = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var x, y, elementToDraw;
      x = noTransform ? this.left : -this.width / 2;
      y = noTransform ? this.top : -this.height / 2;
      elementToDraw = this._element;
      elementToDraw && ctx.drawImage(elementToDraw, x, y, this.width, this.height);
    }
    /** 如果是根据 url 或者本地路径加载图像，本质都是取加载图片完成之后在转成 img 标签 */

  }], [{
    key: "fromURL",
    value: function fromURL(url, callback, imgOptions) {
      _base_utils__WEBPACK_IMPORTED_MODULE_1__.Util.loadImage(url).then(function (img) {
        callback && callback(new RococoImage(img, imgOptions));
      });
    }
  }]);

  return RococoImage;
}(_base_shape__WEBPACK_IMPORTED_MODULE_0__.Shape);
RococoImage.async = true;

/***/ }),

/***/ "../core/2d/src/entities/elements/rect.entity.ts":
/*!*******************************************************!*\
  !*** ../core/2d/src/entities/elements/rect.entity.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rect": () => (/* binding */ Rect)
/* harmony export */ });
/* harmony import */ var _base_shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base/shape */ "../core/2d/src/base/shape.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/** 矩形类 */

var Rect = /*#__PURE__*/function (_Shape) {
  _inherits(Rect, _Shape);

  var _super = _createSuper(Rect);

  function Rect(options) {
    var _this;

    _classCallCheck(this, Rect);

    _this = _super.call(this, options);
    _this.type = "rect";
    /** 圆角 rx */

    _this.rx = 0;
    /** 圆角 ry */

    _this.ry = 0;

    _this._initStateProperties();

    _this._initRxRy(options);

    return _this;
  }

  _createClass(Rect, [{
    key: "_initStateProperties",
    value: function _initStateProperties() {
      this.stateProperties = this.stateProperties.concat(["rx", "ry"]);
    }
    /** 初始化圆角 */

  }, {
    key: "_initRxRy",
    value: function _initRxRy(options) {
      this.rx = options.rx || 0;
      this.ry = options.ry || 0;
      /** 如果 rx 或者 ry 只传了一个，默认二者相等 */

      if (this.rx && !this.ry) {
        this.ry = this.rx;
      } else if (this.ry && !this.rx) {
        this.rx = this.ry;
      }
    }
  }, {
    key: "_render",
    value: function _render(ctx) {
      var rx = this.rx || 0,
          ry = this.ry || 0,
          x = -this.width / 2,
          y = -this.height / 2,
          w = this.width,
          h = this.height; // 绘制一个新的东西，大部分情况下都要开启一个新路径，要养成习惯

      ctx.beginPath(); // if (this.transformMatrix && this.group) {
      //     ctx.translate(this.width / 2, this.height / 2);
      // }
      // if (!this.transformMatrix && this.group) {
      //     ctx.translate(-this.group.width / 2 + this.width / 2, -this.group.height / 2 + this.height / 2);
      // }

      if (this.group) ctx.translate(-this.group.width / 2 + this.width / 2, -this.group.height / 2 + this.height / 2); // 从左上角开始顺时针画矩形，这里就是单纯的绘制一个规规矩矩的矩形，不考虑旋转缩放啥的，因为旋转缩放会在调用 _render 函数之前处理

      ctx.moveTo(x + rx, y);
      ctx.lineTo(x + w - rx, y);
      ctx.bezierCurveTo(x + w, y, x + w, y + ry, x + w, y + ry);
      ctx.lineTo(x + w, y + h - ry);
      ctx.bezierCurveTo(x + w, y + h, x + w - rx, y + h, x + w - rx, y + h);
      ctx.lineTo(x + rx, y + h);
      ctx.bezierCurveTo(x, y + h, x, y + h - ry, x, y + h - ry);
      ctx.lineTo(x, y + ry);
      ctx.bezierCurveTo(x, y, x + rx, y, x + rx, y);
      ctx.closePath();
      if (this.fill) ctx.fill();
      if (this.stroke) ctx.stroke();
    }
  }, {
    key: "toObject",
    value: function toObject(propertiesToInclude) {
      return Object.assign(_get(_getPrototypeOf(Rect.prototype), "toObject", this).call(this, propertiesToInclude), {
        rx: this.get("rx") || 0,
        ry: this.get("ry") || 0
      });
    }
  }, {
    key: "_toSVG",
    value: function _toSVG() {
      var x = -this.width / 2,
          y = -this.height / 2;
      return ["<rect ", 'x="', x, '" y="', y, '" rx="', this.rx, '" ry="', this.ry, '" width="', this.width, '" height="', this.height, '" />\n'];
    }
  }]);

  return Rect;
}(_base_shape__WEBPACK_IMPORTED_MODULE_0__.Shape);

/***/ }),

/***/ "../core/2d/src/index.ts":
/*!*******************************!*\
  !*** ../core/2d/src/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rect": () => (/* reexport safe */ _entities_elements_rect_entity__WEBPACK_IMPORTED_MODULE_1__.Rect),
/* harmony export */   "RectDrawWidget": () => (/* reexport safe */ _widgets_rect_draw_widget__WEBPACK_IMPORTED_MODULE_4__.RectDrawWidget),
/* harmony export */   "Rococo2DView": () => (/* reexport safe */ _entities_canvas__WEBPACK_IMPORTED_MODULE_0__.Canvas),
/* harmony export */   "RococoImage": () => (/* reexport safe */ _entities_elements_image_entity__WEBPACK_IMPORTED_MODULE_2__.RococoImage),
/* harmony export */   "Widget": () => (/* reexport safe */ _widgets_widget__WEBPACK_IMPORTED_MODULE_3__.Widget),
/* harmony export */   "ZoomWidget": () => (/* reexport safe */ _widgets_zoom_widget__WEBPACK_IMPORTED_MODULE_5__.ZoomWidget)
/* harmony export */ });
/* harmony import */ var _entities_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities/canvas */ "../core/2d/src/entities/canvas.ts");
/* harmony import */ var _entities_elements_rect_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities/elements/rect.entity */ "../core/2d/src/entities/elements/rect.entity.ts");
/* harmony import */ var _entities_elements_image_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entities/elements/image.entity */ "../core/2d/src/entities/elements/image.entity.ts");
/* harmony import */ var _widgets_widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgets/widget */ "../core/2d/src/widgets/widget.ts");
/* harmony import */ var _widgets_rect_draw_widget__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widgets/rect-draw.widget */ "../core/2d/src/widgets/rect-draw.widget.ts");
/* harmony import */ var _widgets_zoom_widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widgets/zoom.widget */ "../core/2d/src/widgets/zoom.widget.ts");







/***/ }),

/***/ "../core/2d/src/plugins/default.plugin.ts":
/*!************************************************!*\
  !*** ../core/2d/src/plugins/default.plugin.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** 一些鼠标样式 */
var CursorStyle;

(function (CursorStyle) {
  CursorStyle["default"] = "default";
  CursorStyle["move"] = "move";
  CursorStyle["hover"] = "move";
  CursorStyle["rotation"] = "crosshair";
})(CursorStyle || (CursorStyle = {}));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mouseDown: function mouseDown(_ref, next) {
    var e = _ref.e,
        rococo2d = _ref.rococo2d;
    next();
    if (rococo2d.action !== "default") return; // 只处理左键点击，要么是拖蓝事件、要么是点选事件

    var isLeftClick = "which" in e ? e.which === 1 : e.button === 1;
    if (!isLeftClick) return; // 这个我猜是为了保险起见，ignore if some object is being transformed at rococo2d moment

    if (rococo2d._currentTransform) return;
    var target = rococo2d.findTarget(e);
    var pointer = rococo2d.getPointer(e);
    var corner;
    rococo2d._previousPointer = pointer;

    if (rococo2d.shouldClearSelection(e)) {
      // 如果是拖蓝选区事件
      rococo2d._groupSelector = {
        // 重置选区状态
        ex: pointer.x,
        ey: pointer.y,
        top: 0,
        left: 0
      }; // 让所有元素失去激活状态

      rococo2d.deactivateAllWithDispatch();
    } else {
      // 如果是点选操作，接下来就要为各种变换做准备
      target.saveState(); // 判断点击的是不是控制点

      corner = target._findTargetCorner(e, rococo2d._offset);

      if (rococo2d.shouldHandleGroupLogic(e, target)) {
        // 如果是选中组
        rococo2d.handleGroupLogic(e, target);
        target = rococo2d.getActiveGroup();
      } else {
        // 如果是选中单个物体
        if (target !== rococo2d.getActiveGroup()) {
          rococo2d.deactivateAll();
        }

        rococo2d.setActiveObject(target, e);
      }

      rococo2d.setupCurrentTransform(e, target);
    } // 不论是拖蓝选区事件还是点选事件，都需要重新绘制
    // 拖蓝选区：需要把之前激活的物体取消选中态
    // 点选事件：需要把当前激活的物体置顶


    rococo2d.renderAll();
  },
  mouseMove: function mouseMove(_ref2, next) {
    var e = _ref2.e,
        pointer = _ref2.pointer,
        rococo2d = _ref2.rococo2d;
    next();
    if (rococo2d.action !== "default") return;
    var target;
    var groupSelector = rococo2d._groupSelector;

    if (groupSelector) {
      // 如果有拖蓝框选区域
      groupSelector.left = pointer.x - rococo2d._offset.left - groupSelector.ex;
      groupSelector.top = pointer.y - rococo2d._offset.top - groupSelector.ey;
      rococo2d.renderTop();
    } else if (!rococo2d._currentTransform) {
      // 如果是 hover 事件，这里我们只需要改变鼠标样式，并不会重新渲染
      var style = rococo2d.topCanvas.style;
      target = rococo2d.findTarget(e);

      if (target) {
        rococo2d.setCursorFromEvent(e, target);
      } else {
        style.cursor = CursorStyle.default;
      }
    } else {
      // 如果是旋转、缩放、平移等操作
      var x = pointer.x,
          y = pointer.y;
      rococo2d._currentTransform.target.isMoving = true;
      var t = rococo2d._currentTransform,
          reset = false;

      if (rococo2d._currentTransform.action === "rotate") {
        // 如果是旋转操作
        rococo2d.rotateObject(x, y);
      } else if (rococo2d._currentTransform.action === "scale") {
        // 如果是整体缩放操作
        if (e.shiftKey) {
          rococo2d._currentTransform.currentAction = "scale";
          rococo2d.scaleObject(x, y);
        } else {
          if (!reset && t.currentAction === "scale") {
            rococo2d.resetCurrentTransform(e);
          }

          rococo2d._currentTransform.currentAction = "scaleEqually";
          rococo2d.scaleObject(x, y, "equally");
        }
      } else if (rococo2d._currentTransform.action === "scaleX") {
        // 如果只是缩放 x
        rococo2d.scaleObject(x, y, "x");
      } else if (rococo2d._currentTransform.action === "scaleY") {
        // 如果只是缩放 y
        rococo2d.scaleObject(x, y, "y");
      } else {
        // 如果是拖拽物体
        rococo2d.translateObject(x, y);
        rococo2d.setCursor(CursorStyle.move);
      }

      rococo2d.renderAll();
    }
  },
  mouseUp: function mouseUp(_ref3, next) {
    var e = _ref3.e,
        rococo2d = _ref3.rococo2d;
    next();
    if (rococo2d.action !== "default") return;
    var target;

    if (rococo2d._currentTransform) {
      var transform = rococo2d._currentTransform;
      target = transform.target;

      if (target._scaling) {
        target._scaling = false;
      } // 每次物体更改都要重新计算新的控制点


      var i = rococo2d._shapes.length;

      while (i--) {
        rococo2d._shapes[i].setCoords();
      }

      target.isMoving = false; // 在点击之间如果物体状态改变了才派发事件

      if (target.hasStateChanged()) {// rococo2d.emit("object:modified", { target });
        // target.emit("modified");
      }
    }

    rococo2d._currentTransform = null;

    if (rococo2d._groupSelector) {
      // 如果有拖蓝框选区域
      rococo2d.findSelectedObjects(e);
    }

    var activeGroup = rococo2d.getActiveGroup();

    if (activeGroup) {
      //重新设置 激活组 中的物体
      activeGroup.setObjectsCoords();
      activeGroup.set("isMoving", false);
      rococo2d.setCursor(CursorStyle.default);
    }

    rococo2d._groupSelector = null;
    rococo2d.renderAll();
    rococo2d.setCursorFromEvent(e, target);
  },
  mouseWheel: function mouseWheel(_ref4, next) {
    var e = _ref4.e,
        rococo2d = _ref4.rococo2d;
    var b = true;

    if (e.wheelDelta) {
      b = e.wheelDelta > 0;
    } else {
      b = e.detail < 0;
    }

    console.log(e.wheelDelta, b);

    if (b) {
      rococo2d.zoomIn(true);
    } else {
      rococo2d.zoomOut(true);
    }

    next();
  }
});

/***/ }),

/***/ "../core/2d/src/widgets/rect-draw.widget.ts":
/*!**************************************************!*\
  !*** ../core/2d/src/widgets/rect-draw.widget.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RectDrawWidget": () => (/* binding */ RectDrawWidget)
/* harmony export */ });
/* harmony import */ var _entities_elements_rect_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/elements/rect.entity */ "../core/2d/src/entities/elements/rect.entity.ts");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget */ "../core/2d/src/widgets/widget.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};



var rectDrawSvg = '<svg focusable="false" class="" data-icon="border" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>';
/**
 * 矩形绘制挂件
 */

var RectDrawWidget = /*#__PURE__*/function (_Widget) {
  _inherits(RectDrawWidget, _Widget);

  var _super = _createSuper(RectDrawWidget);

  function RectDrawWidget() {
    var _this;

    _classCallCheck(this, RectDrawWidget);

    _this = _super.apply(this, arguments);
    _this.innerHTML = "\n    <style>\n        #rect-draw-widget {\n            height: 36px;\n            color: #fff;\n            background-color: #2254f4;\n            border-color: #2254f4;    \n            font-weight: 400;\n            line-height: 30px;\n            padding: 0 16px;\n            font-size: 14px;\n            border-radius: 8px;\n            cursor: pointer;\n            line-height: 1.499;\n            position: relative;\n            display: inline-block;\n            font-weight: 500;\n            white-space: nowrap;\n            text-align: center;\n            background-image: none;\n            border: 1px solid transparent;\n            cursor: pointer;\n            transition: all .3s cubic-bezier(.645,.045,.355,1);\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            user-select: none;\n            touch-action: manipulation;\n        }\n        #rect-draw-widget:hover{\n            color: #fff;\n            background-color: #4972f6;\n            border-color: #4972f6;\n        }\n    </style>\n    <button id=\"rect-draw-widget\">\u77E9\u5F62</button>\n  ";
    return _this;
  }

  _createClass(RectDrawWidget, [{
    key: "mouseDown",
    value: function mouseDown(_ref, next) {
      var rococo2d = _ref.rococo2d,
          pointer = _ref.pointer;
      return __awaiter(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(rococo2d.action === "draw")) {
                  _context.next = 7;
                  break;
                }

                rococo2d._groupSelector = {
                  // 重置选区状态
                  ex: pointer.x,
                  ey: pointer.y,
                  top: 0,
                  left: 0
                }; // 让所有元素失去激活状态

                rococo2d.deactivateAllWithDispatch();
                rococo2d.renderAll();
                return _context.abrupt("return");

              case 7:
                _context.next = 9;
                return next();

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }
  }, {
    key: "mouseMove",
    value: function mouseMove(_ref2, next) {
      var pointer = _ref2.pointer,
          rococo2d = _ref2.rococo2d;
      var groupSelector = rococo2d._groupSelector;

      if (rococo2d.action === "draw") {
        if (groupSelector) {
          // 如果有拖蓝框选区域
          groupSelector.left = pointer.x - rococo2d._offset.left - groupSelector.ex;
          groupSelector.top = pointer.y - rococo2d._offset.top - groupSelector.ey;
          rococo2d.renderTop();
        }

        return;
      } else {
        next();
      }
    }
  }, {
    key: "mouseUp",
    value: function mouseUp(_ref3, next) {
      var rococo2d = _ref3.rococo2d;

      if (rococo2d.action === "draw") {
        console.log(rococo2d._groupSelector);
        var _rococo2d$_groupSelec = rococo2d._groupSelector,
            ex = _rococo2d$_groupSelec.ex,
            ey = _rococo2d$_groupSelec.ey,
            left = _rococo2d$_groupSelec.left,
            top = _rococo2d$_groupSelec.top; // 绘制新增出来的矩形

        var rect = new _entities_elements_rect_entity__WEBPACK_IMPORTED_MODULE_0__.Rect({
          top: ey + top / 2,
          left: ex + left / 2,
          width: left,
          height: top,
          fill: "#0c99ff50"
        });

        rococo2d._shapes.push(rect);

        rect.setupState();
        rect.setCoords();
        rect.canvas = rococo2d;
        rococo2d.renderAll(); // 取消高亮

        rococo2d._groupSelector = null;
        rococo2d.renderTop();
        this.rococo2d._activeGroup = null;
        return;
      } else {
        next();
      }
    } // 挂件成功挂载，为挂件 dom 元素绑定事件

  }, {
    key: "onMounted",
    value: function onMounted() {
      this.dom.querySelector("#rect-draw-widget").onclick = this.onClick.bind(this);
    }
  }, {
    key: "onClick",
    value: function onClick() {
      if (this.rococo2d.action === "default") {
        console.log("开始绘制");
        this.rococo2d.setCursor("crosshair");
        this.rococo2d.action = "draw";
      } else {
        console.log("结束绘制");
        this.rococo2d.setCursor("default");
        this.rococo2d.action = "default";
      }
    }
  }]);

  return RectDrawWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_1__.Widget);

/***/ }),

/***/ "../core/2d/src/widgets/widget.ts":
/*!****************************************!*\
  !*** ../core/2d/src/widgets/widget.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Widget": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var _base_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/utils */ "../core/2d/src/base/utils.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var Widget = /*#__PURE__*/function () {
  function Widget() {
    _classCallCheck(this, Widget);

    this.innerHTML = "";
    this.style = {};
  }

  _createClass(Widget, [{
    key: "setStyle",
    value: function setStyle(style) {
      for (var key in style) {
        this.style[key] = style[key];
      }

      if (this.dom) {
        _base_utils__WEBPACK_IMPORTED_MODULE_0__.Util.setStyle(this.dom, style);
      }

      return this;
    }
  }, {
    key: "mount",
    value: function mount() {
      _base_utils__WEBPACK_IMPORTED_MODULE_0__.Util.setStyle(this.dom, this.style);
      this.onMounted();
    }
  }, {
    key: "onMounted",
    value: function onMounted() {}
  }]);

  return Widget;
}();

/***/ }),

/***/ "../core/2d/src/widgets/zoom.widget.ts":
/*!*********************************************!*\
  !*** ../core/2d/src/widgets/zoom.widget.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZoomWidget": () => (/* binding */ ZoomWidget)
/* harmony export */ });
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widget */ "../core/2d/src/widgets/widget.ts");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var zoomInSvg = '<svg focusable="false" class="" data-icon="zoom-in" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"></path></svg>';
var zoomOutSvg = '<svg focusable="false" class="" data-icon="zoom-out" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"></path></svg>';
/**
 * 矩形绘制挂件
 */

var ZoomWidget = /*#__PURE__*/function (_Widget) {
  _inherits(ZoomWidget, _Widget);

  var _super = _createSuper(ZoomWidget);

  function ZoomWidget() {
    var _this;

    _classCallCheck(this, ZoomWidget);

    _this = _super.apply(this, arguments);
    _this.innerHTML = "\n    <style>\n        .widget-btn {\n            height: 36px;\n            width: 36px;\n            color: #8638e5;\n            background-color: #ffffff;\n            font-weight: 400;\n            font-size: 16px;\n            border-radius: 50%;\n            cursor: pointer;\n            line-height: 1.499;\n            position: relative;\n            display: inline-block;\n            font-weight: 500;\n            white-space: nowrap;\n            text-align: center;\n            background-image: none;\n            border: 1px solid transparent;\n            cursor: pointer;\n            transition: all .3s cubic-bezier(.645,.045,.355,1);\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            user-select: none;\n            touch-action: manipulation;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            margin: 10px;\n            box-shadow: 0 0 2px #000000;\n        }\n        .widget-btn:hover{\n            background-color: #f0f0f0;\n        }\n    </style>\n    <button id=\"zoom-in-widget\" class=\"widget-btn\" title=\"\u653E\u5927\">\n        ".concat(zoomInSvg, "\n    </button>\n    <button id=\"zoom-out-widget\" class=\"widget-btn\" title=\"\u7F29\u5C0F\">\n        ").concat(zoomOutSvg, "\n    </button>\n  ");
    return _this;
  } // 挂件成功挂载，为挂件 dom 元素绑定事件


  _createClass(ZoomWidget, [{
    key: "onMounted",
    value: function onMounted() {
      this.dom.querySelector("#zoom-in-widget").onclick = this.zoomIn.bind(this);
      this.dom.querySelector("#zoom-out-widget").onclick = this.zoomOut.bind(this);
    }
  }, {
    key: "mouseDown",
    value: function mouseDown(_ref, next) {
      var e = _ref.e;
      // this.rococo2d
      // console.log("????", e, this.rococo2d);
      next();
    }
  }, {
    key: "zoomIn",
    value: function zoomIn() {
      this.rococo2d.zoomIn();
    }
  }, {
    key: "zoomOut",
    value: function zoomOut() {
      this.rococo2d.zoomOut();
    }
  }]);

  return ZoomWidget;
}(_widget__WEBPACK_IMPORTED_MODULE_0__.Widget);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rococojs_2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rococojs/2d */ "../core/2d/src/index.ts");
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};


var zoomWidget = new _rococojs_2d__WEBPACK_IMPORTED_MODULE_0__.ZoomWidget().setStyle({
  right: "0px"
});
var rectdrawWidget = new _rococojs_2d__WEBPACK_IMPORTED_MODULE_0__.RectDrawWidget().setStyle({
  right: "0px",
  top: "100px"
});
var canvas = new _rococojs_2d__WEBPACK_IMPORTED_MODULE_0__.Rococo2DView(document.getElementById("canvas"), {
  width: 1600,
  height: 1000,
  widgets: [zoomWidget, rectdrawWidget]
});
var rect1 = new _rococojs_2d__WEBPACK_IMPORTED_MODULE_0__.Rect({
  top: 245,
  left: 400,
  width: 60,
  height: 60,
  fill: "#8920a580",
  rx: 10,
  ry: 10,
  angle: 45
});
var imgs = [{
  src: "https://fabrie-prod.oss-cn-shanghai.aliyuncs.com/image/61de5a0bcb60742ee8c98b6b/1642411781348-0.6689313774101535",
  top: 300,
  left: 250,
  width: 300,
  height: 500
}, {
  src: "https://fabrie-prod.oss-cn-shanghai.aliyuncs.com/image/61de5a0bcb60742ee8c98b6b/1642413324130-0.5006085671887177",
  top: 150,
  left: 600,
  width: 400,
  height: 200
}, {
  src: "https://st-gdx.dancf.com/gaodingx/4449/configs/activity/20220908-171452-2678.jpg",
  top: 700,
  left: 250,
  width: 300,
  height: 300
}, {
  src: "https://st-gdx.dancf.com/gaodingx/4449/configs/activity/20220908-165904-3a69.jpg",
  top: 400,
  left: 500,
  width: 200,
  height: 300
}, {
  src: "https://st-gdx.dancf.com/gaodingx/4449/configs/activity/20220908-165934-5ad5.jpg",
  top: 400,
  left: 700,
  width: 200,
  height: 300
}, {
  src: "https://st-gdx.dancf.com/gaodingx/4449/configs/activity/20220908-165939-1986.jpg",
  top: 700,
  left: 500,
  width: 200,
  height: 300
}, {
  src: "https://st-gdx.dancf.com/gaodingx/4449/configs/activity/20220908-165947-d938.jpg",
  top: 700,
  left: 700,
  width: 200,
  height: 300
}].map(function (_a) {
  var src = _a.src,
      ops = __rest(_a, ["src"]);

  var img = new Image();
  img.src = src;
  return new _rococojs_2d__WEBPACK_IMPORTED_MODULE_0__.RococoImage(img, ops);
});
setTimeout(function () {
  imgs.forEach(function (img) {
    canvas.add(img);
  });
  canvas.add(rect1);
}, 1200);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vZG9jcy9idWlsZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBVkE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBMUJBO0FBQUE7QUFBQTtBQTJCQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBeENBO0FBQUE7QUFBQTtBQTBDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUF0REE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTs7QUFBQTs7QUFDQTtBQUFBOztBQUFBOztBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQVBBO0FBUUE7QUFDQTs7O0FBVkE7QUFBQTtBQUFBO0FBWUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQXRCQTtBQUFBO0FBQUE7QUF3QkE7QUFDQTtBQUNBOztBQTFCQTtBQUFBO0FBQUE7QUE0QkE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQWxDQTtBQUFBO0FBQUE7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBdkNBO0FBQUE7QUFBQTtBQXlDQTtBQUNBO0FBQ0E7QUFDQTs7QUE1Q0E7QUFBQTtBQUFBO0FBOENBOztBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQXJEQTtBQUFBO0FBQUE7QUF1REE7QUFDQTtBQUNBOztBQXpEQTtBQUFBO0FBQUE7QUEyREE7QUFDQTtBQTVEQTtBQUFBO0FBQUE7QUE4REE7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFuRkE7QUFBQTtBQUFBO0FBcUZBO0FBQ0E7QUFDQTs7QUF2RkE7QUFBQTtBQUFBO0FBeUZBO0FBQ0E7QUFDQTtBQUNBOztBQTVGQTtBQUFBO0FBQUE7QUE4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBNUdBO0FBQUE7QUFBQTtBQThHQTtBQUNBO0FBQ0E7O0FBaEhBO0FBQUE7QUFBQTtBQWtIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBdkhBO0FBQUE7QUFBQTtBQXlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBOUhBO0FBQUE7QUFBQTtBQWdJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFwSkE7QUFBQTtBQUFBO0FBc0pBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQTNKQTtBQUFBO0FBQUE7QUE2SkE7QUFDQTtBQUNBO0FBL0pBO0FBQUE7QUFBQTtBQWlLQTtBQUNBO0FBQ0E7QUFuS0E7O0FBQUE7QUFBQTtBQXFLQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUtBO0FBQ0E7O0FBQ0E7QUFDQTtBQUFBOztBQUNBO0FBQ0E7O0FBSEE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBUEE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQVZBO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFwQkE7QUFBQTtBQUFBO0FBc0JBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUlBO0FBSkE7QUFNQTs7QUFDQTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBMURBO0FBQUE7QUFBQTtBQTREQTtBQUFBOztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUF2RUE7QUFBQTtBQUFBO0FBeUVBO0FBQUE7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBekZBO0FBQUE7QUFBQTtBQTJGQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBRkE7QUFHQTtBQUhBO0FBSUE7QUFDQTtBQUxBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQTFHQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTEE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBOztBQVRBO0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUFDQTs7QUFiQTtBQUFBO0FBQUE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQW5CQTtBQUFBO0FBQUE7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7QUF4QkE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTs7QUFBQTs7QUFDQTtBQUFBOztBQUFBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBSUE7O0FBeEVBO0FBeUVBOztBQTFFQTtBQUFBO0FBQUE7QUE0RUE7QUFDQTtBQTdFQTtBQUFBO0FBQUE7QUErRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFuRkE7QUFBQTtBQUFBO0FBb0ZBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUF0SEE7QUFBQTtBQUFBO0FBd0hBO0FBQ0E7QUFDQTtBQUNBOztBQTNIQTtBQUFBO0FBQUE7QUE2SEE7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWpKQTtBQUFBO0FBQUE7QUFtSkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUF6S0E7QUFBQTtBQUFBO0FBMktBOztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQTdPQTtBQUFBO0FBQUE7QUErT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUF0UEE7QUFBQTtBQUFBO0FBd1BBO0FBQ0E7QUFDQTtBQUNBOztBQTNQQTtBQUFBO0FBQUE7QUE0UEE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWxRQTtBQUFBO0FBQUE7QUFvUUE7QUFDQTtBQUNBOztBQXRRQTtBQUFBO0FBQUE7QUF3UUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBblNBO0FBQUE7QUFBQTtBQXFTQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOztBQXRUQTtBQUFBO0FBQUE7QUF3VEE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQXBWQTtBQUFBO0FBQUE7QUFzVkE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBOVdBO0FBQUE7QUFBQTtBQWdYQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBYkE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXZZQTtBQUFBO0FBQUE7QUF5WUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFKQTtBQUtBOztBQUNBO0FBQ0E7O0FBRUE7O0FBR0E7O0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQWhiQTtBQUFBO0FBQUE7QUFpYkE7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQW5jQTtBQUFBO0FBQUE7QUFvY0E7O0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFwQkE7QUFzQkE7QUF0ZUE7QUFBQTtBQUFBO0FBdWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBamZBO0FBQUE7QUFBQTtBQW1mQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUEzZkE7QUFBQTtBQUFBO0FBNmZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBNWhCQTtBQUFBO0FBQUE7QUE4aEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXZpQkE7QUFBQTtBQUFBO0FBeWlCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBcmpCQTtBQUFBO0FBQUE7QUF1akJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBdmtCQTtBQUFBO0FBQUE7QUF5a0JBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBN2tCQTtBQUFBO0FBQUE7QUEra0JBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBcGxCQTtBQUFBO0FBQUE7QUFzbEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBOWxCQTtBQUFBO0FBQUE7QUErbEJBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFiQTtBQUFBO0FBQUE7O0FBa0JBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUE3bkJBO0FBQUE7QUFBQTtBQStuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBanNCQTtBQUFBO0FBQUE7QUFtc0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUVBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUE1dkJBO0FBQUE7QUFBQTtBQTh2QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFiQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBYkE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQWJBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFiQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBYkE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQWJBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFiQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBYkE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQWJBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUF0NkJBO0FBQUE7QUFBQTtBQXU2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBO0FBc0JBO0FBQ0E7QUFDQTtBQWw4QkE7QUFBQTtBQUFBO0FBbzhCQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBMzhCQTtBQUFBO0FBQUE7QUE2OEJBO0FBQ0E7QUE5OEJBO0FBQUE7QUFBQTtBQWc5QkE7QUFBQTtBQUNBO0FBQ0E7QUFsOUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXE5QkE7QUFDQTtBQXQ5QkE7QUFBQTtBQUFBO0FBdzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQXorQkE7QUFBQTtBQUFBO0FBMitCQTtBQUNBO0FBQ0E7O0FBNytCQTtBQUFBO0FBQUE7QUErK0JBO0FBQ0E7QUFDQTs7QUFqL0JBO0FBQUE7QUFBQTtBQW0vQkE7QUFDQTtBQXAvQkE7QUFBQTtBQUFBO0FBcy9CQTtBQUNBO0FBdi9CQTtBQUFBO0FBQUE7QUF5L0JBO0FBQ0E7QUExL0JBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFBQTtBQUFBO0FBZUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBcENBO0FBQUE7QUFBQTtBQXNDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFsREE7QUFBQTtBQUFBO0FBb0RBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUZBO0FBR0E7QUFIQTtBQUlBO0FBSkE7QUFJQTtBQUFBO0FBSkE7QUFLQTtBQUFBO0FBTEE7QUFBQTtBQU1BO0FBTkE7QUFPQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFoRkE7QUFBQTtBQUFBO0FBa0ZBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQTFGQTtBQUFBO0FBQUE7QUEyRkE7QUFDQTtBQUVBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFqSEE7QUFBQTtBQUFBO0FBa0hBO0FBQ0E7QUFFQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUF0SUE7QUFBQTtBQUFBO0FBd0lBO0FBQ0E7QUFDQTs7QUExSUE7QUFBQTtBQUFBO0FBMklBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7O0FBdktBO0FBQUE7QUFBQTtBQXlLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFuTEE7QUFBQTtBQUFBO0FBcUxBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekxBO0FBQUE7QUFBQTtBQTBMQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQS9MQTtBQUFBO0FBQUE7QUFnTUE7QUFDQTtBQUNBO0FBUUE7QUExTUE7QUFBQTtBQUFBO0FBNE1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQW5OQTtBQUFBO0FBQUE7QUFxTkE7QUFDQTtBQXROQTtBQUFBO0FBQUE7QUF3TkE7QUFDQTtBQUNBOztBQTFOQTtBQUFBO0FBQUE7QUE0TkE7QUFDQTtBQUNBOztBQTlOQTtBQUFBO0FBQUE7QUFnT0E7QUFDQTtBQUNBOztBQWxPQTtBQUFBO0FBQUE7QUFvT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQTVPQTtBQUFBO0FBQUE7QUE4T0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFwUEE7QUFBQTtBQUFBO0FBc1BBO0FBQ0E7QUFDQTtBQUNBOztBQXpQQTtBQUFBO0FBQUE7QUEyUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUEvUEE7QUFBQTtBQUFBO0FBaVFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBelFBO0FBQUE7QUFBQTtBQTJRQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXBSQTtBQUFBO0FBQUE7QUFzUkE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQWpTQTtBQUFBO0FBQUE7QUFtU0E7O0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQXBUQTtBQUFBO0FBQUE7QUFzVEE7QUFDQTtBQUNBO0FBQ0E7O0FBelRBO0FBQUE7QUFBQTtBQTJUQTtBQUNBO0FBQ0E7QUE3VEE7QUFBQTtBQUFBO0FBK1RBO0FBQ0E7QUFoVUE7QUFBQTtBQUFBO0FBa1VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBclZBO0FBQUE7QUFBQTtBQXVWQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQU1BO0FBQ0E7O0FBQ0E7QUFDQTtBQXBXQTtBQUFBO0FBQUE7QUFzV0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFyWEE7QUFBQTtBQUFBO0FBdVhBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBNVhBO0FBQUE7QUFBQTtBQThYQTtBQUdBO0FBQ0E7QUFHQTs7QUFyWUE7QUFBQTtBQUFBO0FBd1lBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE5WkE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBOztBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBOztBQUFBOztBQUNBO0FBQUE7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFDQTs7O0FBRUE7OztBQUVBOzs7QUFFQTs7O0FBRUE7O0FBbkRBO0FBb0RBO0FBRUE7QUFDQTs7O0FBeERBO0FBQUE7QUFBQTtBQTBEQTtBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUF6RUE7QUFBQTtBQUFBO0FBMkVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRGQTtBQUFBO0FBQUE7QUF3RkE7QUFDQTtBQUNBO0FBQ0E7O0FBM0ZBO0FBQUE7QUFBQTtBQThGQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFuR0E7QUFBQTtBQUFBO0FBc0dBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNBOztBQUNBO0FBQ0E7O0FBN0dBO0FBQUE7QUFBQTtBQWdIQTs7QUFDQTs7QUFDQTtBQUNBOztBQW5IQTtBQUFBO0FBQUE7QUFxSEE7O0FBQ0E7QUFDQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTs7QUF0SUE7QUFBQTtBQUFBO0FBd0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWpKQTtBQUFBO0FBQUE7QUFvSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUEvSkE7QUFBQTtBQUFBO0FBa0tBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQXhLQTtBQUFBO0FBQUE7QUEyS0E7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBOztBQTlLQTtBQUFBO0FBQUE7QUFpTEE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQXRMQTtBQUFBO0FBQUE7QUF5TEE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQTNMQTtBQUFBO0FBQUE7QUE4TEE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFuTUE7QUFBQTtBQUFBO0FBcU1BO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7O0FBL01BO0FBQUE7QUFBQTtBQWtOQTtBQUNBO0FBQ0E7O0FBcE5BO0FBQUE7QUFBQTtBQXNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBaE9BO0FBQUE7QUFBQTtBQWtPQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBek9BO0FBQUE7QUFBQTtBQTJPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQS9PQTtBQUFBO0FBQUE7QUFpUEE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXZQQTtBQUFBO0FBQUE7QUF5UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBbFFBO0FBQUE7QUFBQTtBQW1RQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTs7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBSUE7OztBQUVBO0FBQ0E7QUFJQTs7O0FBRUE7QUFDQTtBQUNBOztBQXpVQTtBQUFBO0FBQUE7QUEyVUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQTVWQTtBQUFBO0FBQUE7QUE4VkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQUE7O0FBclhBO0FBQUE7QUFBQTtBQXVYQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFRQTs7QUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTs7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTs7QUFRQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTs7QUF2YkE7QUFBQTtBQUFBO0FBeWJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQXhkQTtBQUFBO0FBQUE7QUEwZEE7QUFDQTtBQTNkQTtBQUFBO0FBQUE7QUE2ZEE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQXBlQTtBQUFBO0FBQUE7QUFzZUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUEzZUE7QUFBQTtBQUFBO0FBNmVBO0FBQ0E7QUFFQTtBQWhmQTtBQUFBO0FBQUE7QUFrZkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBM2hCQTtBQUFBO0FBQUE7QUE0aEJBO0FBQUE7QUFBQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQW5pQkE7QUFBQTtBQUFBO0FBc2lCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQW5qQkE7QUFBQTtBQUFBO0FBcWpCQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBN2pCQTtBQUFBO0FBQUE7QUErakJBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQWptQkE7QUFBQTtBQUFBO0FBbW1CQTtBQUVBO0FBQ0E7QUF0bUJBO0FBQUE7QUFBQTtBQXdtQkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUF2bkJBO0FBQUE7QUFBQTtBQXluQkE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBam9CQTtBQUFBO0FBQUE7QUFtb0JBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBNW9CQTtBQUFBO0FBQUE7QUE4b0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcHBCQTtBQUFBO0FBQUE7QUFzcEJBO0FBQ0E7QUFDQTtBQXhwQkE7QUFBQTtBQUFBO0FBMHBCQTtBQUNBO0FBQ0E7QUFDQTs7QUE3cEJBO0FBQUE7QUFBQTtBQStwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFucUJBO0FBQUE7QUFBQTtBQW9xQkE7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUVBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBcHJCQTtBQUFBO0FBQUE7QUFzckJBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOztBQTVyQkE7QUFBQTtBQUFBO0FBNnJCQTtBQUNBO0FBRUE7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBOztBQS9zQkE7QUFBQTtBQUFBO0FBa3RCQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUVBOzs7QUFDQTtBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUVBOztBQUNBOztBQWx1QkE7QUFBQTtBQUFBO0FBb3VCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUdBO0FBR0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXR2QkE7QUFBQTtBQUFBO0FBd3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUEvdkJBO0FBQUE7QUFBQTtBQWl3QkE7QUFBQTtBQUNBO0FBTUE7QUFFQTs7QUFDQTs7QUEzd0JBO0FBQUE7QUFBQTtBQTZ3QkE7QUFDQTtBQUNBOztBQS93QkE7QUFBQTtBQUFBO0FBaXhCQTs7QUFDQTtBQUNBOztBQUNBOztBQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUE1eUJBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTtBQUFBOztBQUFBOztBQUNBO0FBQ0E7QUFBQTs7QUFBQTs7QUFDQTtBQUNBOztBQUNBOztBQUhBO0FBSUE7O0FBTkE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQVdBOztBQUNBOztBQUNBO0FBQ0E7QUFkQTtBQUFBO0FBQUE7QUFlQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFuQkE7QUFBQTtBQUFBO0FBcUJBO0FBTUE7QUFNQTtBQWpDQTtBQUFBO0FBQUE7QUFtQ0E7QUFDQTtBQUNBOztBQXJDQTtBQUFBO0FBQUE7QUFzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUE5Q0E7QUFBQTtBQUFBO0FBZ0RBO0FBQ0E7QUFFQTtBQUNBO0FBcERBOztBQUFBO0FBQUE7QUFzREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBQ0E7O0FBQ0E7QUFBQTs7QUFBQTs7QUFDQTtBQUFBOztBQUFBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQVJBO0FBU0E7O0FBVkE7QUFBQTtBQUFBO0FBWUE7QUFDQTtBQUNBOztBQWRBO0FBQUE7QUFBQTtBQWdCQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBekJBO0FBQUE7QUFBQTtBQTJCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBckRBO0FBQUE7QUFBQTtBQXVEQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBM0RBO0FBQUE7QUFBQTtBQTZEQTtBQUFBO0FBQ0E7QUFnQkE7QUE5RUE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBOztBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBOztBQVFBO0FBQ0E7QUFFQTtBQUNBOztBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUNBO0FBQ0E7QUF6S0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTs7QUFBQTs7QUFDQTtBQUFBOztBQUFBOztBQUNBO0FBQ0E7QUFGQTtBQXNDQTs7QUF2Q0E7QUFBQTtBQUFBO0FBd0NBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7O0FBUUE7QUFDQTtBQVhBOztBQUFBO0FBQUE7QUFlQTs7QUFmQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWtCQTtBQTNEQTtBQUFBO0FBQUE7QUE0REE7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUEzRUE7QUFBQTtBQUFBO0FBNEVBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBOztBQU9BOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBdEdBO0FBQUE7QUFBQTtBQXlHQTtBQUVBO0FBM0dBO0FBQUE7QUFBQTtBQTZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZIQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBSkE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBYkE7QUFBQTtBQUFBO0FBZUE7QUFDQTtBQUNBO0FBakJBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFBQTs7QUFBQTs7QUFDQTtBQUFBOztBQUFBOztBQUNBO0FBQ0E7QUFGQTtBQTRDQTs7O0FBN0NBO0FBQUE7QUFBQTtBQWdEQTtBQUVBO0FBRUE7QUFwREE7QUFBQTtBQUFBO0FBcURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6REE7QUFBQTtBQUFBO0FBMkRBO0FBQ0E7QUE1REE7QUFBQTtBQUFBO0FBOERBO0FBQ0E7QUEvREE7O0FBQUE7QUFBQTs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0Byb2NvY29qcy9leGFtcGxlLy4uL2NvcmUvMmQvc3JjL2Jhc2UvZXZlbnQudHMiLCJ3ZWJwYWNrOi8vQHJvY29jb2pzL2V4YW1wbGUvLi4vY29yZS8yZC9zcmMvYmFzZS9ncm91cC50cyIsIndlYnBhY2s6Ly9Acm9jb2NvanMvZXhhbXBsZS8uLi9jb3JlLzJkL3NyYy9iYXNlL2ludGVyc2VjdGlvbi50cyIsIndlYnBhY2s6Ly9Acm9jb2NvanMvZXhhbXBsZS8uLi9jb3JlLzJkL3NyYy9iYXNlL3BvaW50LnRzIiwid2VicGFjazovL0Byb2NvY29qcy9leGFtcGxlLy4uL2NvcmUvMmQvc3JjL2Jhc2Uvc2hhcGUudHMiLCJ3ZWJwYWNrOi8vQHJvY29jb2pzL2V4YW1wbGUvLi4vY29yZS8yZC9zcmMvYmFzZS91dGlscy50cyIsIndlYnBhY2s6Ly9Acm9jb2NvanMvZXhhbXBsZS8uLi9jb3JlLzJkL3NyYy9lbnRpdGllcy9jYW52YXMudHMiLCJ3ZWJwYWNrOi8vQHJvY29jb2pzL2V4YW1wbGUvLi4vY29yZS8yZC9zcmMvZW50aXRpZXMvZWxlbWVudHMvaW1hZ2UuZW50aXR5LnRzIiwid2VicGFjazovL0Byb2NvY29qcy9leGFtcGxlLy4uL2NvcmUvMmQvc3JjL2VudGl0aWVzL2VsZW1lbnRzL3JlY3QuZW50aXR5LnRzIiwid2VicGFjazovL0Byb2NvY29qcy9leGFtcGxlLy4uL2NvcmUvMmQvc3JjL2luZGV4LnRzIiwid2VicGFjazovL0Byb2NvY29qcy9leGFtcGxlLy4uL2NvcmUvMmQvc3JjL3BsdWdpbnMvZGVmYXVsdC5wbHVnaW4udHMiLCJ3ZWJwYWNrOi8vQHJvY29jb2pzL2V4YW1wbGUvLi4vY29yZS8yZC9zcmMvd2lkZ2V0cy9yZWN0LWRyYXcud2lkZ2V0LnRzIiwid2VicGFjazovL0Byb2NvY29qcy9leGFtcGxlLy4uL2NvcmUvMmQvc3JjL3dpZGdldHMvd2lkZ2V0LnRzIiwid2VicGFjazovL0Byb2NvY29qcy9leGFtcGxlLy4uL2NvcmUvMmQvc3JjL3dpZGdldHMvem9vbS53aWRnZXQudHMiLCJ3ZWJwYWNrOi8vQHJvY29jb2pzL2V4YW1wbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQHJvY29jb2pzL2V4YW1wbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0Byb2NvY29qcy9leGFtcGxlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQHJvY29jb2pzL2V4YW1wbGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9Acm9jb2NvanMvZXhhbXBsZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOWPkeW4g+iuoumYhe+8jOS6i+S7tuS4reW/g1xuICog5bqU55So5Zy65pmv77ya5Y+v5Lul5Zyo5riy5p+T5YmN5ZCO44CB5Yid5aeL5YyW54mp5L2T5YmN5ZCO44CB54mp5L2T54q25oCB5pS55Y+Y5pe26Kem5Y+R5LiA57O75YiX5LqL5Lu2XG4gKi9cbmV4cG9ydCBjbGFzcyBFdmVudENlbnRlciB7XG4gICAgb24oZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgICAgIGlmICghdGhpcy5fX2V2ZW50TGlzdGVuZXJzKSB7XG4gICAgICAgICAgICB0aGlzLl9fZXZlbnRMaXN0ZW5lcnMgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX19ldmVudExpc3RlbmVyc1tldmVudE5hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLl9fZXZlbnRMaXN0ZW5lcnNbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX19ldmVudExpc3RlbmVyc1tldmVudE5hbWVdLnB1c2goaGFuZGxlcik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBvZmYoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgICAgIGlmICghdGhpcy5fX2V2ZW50TGlzdGVuZXJzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8g5aaC5p6c5rKh5pyJ5Y+C5pWw77yM5bCx5piv6Kej57uR5omA5pyJ5LqL5Lu2XG4gICAgICAgICAgICBmb3IgKGV2ZW50TmFtZSBpbiB0aGlzLl9fZXZlbnRMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVFdmVudExpc3RlbmVyLmNhbGwodGhpcywgZXZlbnROYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIOino+e7keWNleS4quS6i+S7tlxuICAgICAgICAgICAgdGhpcy5fcmVtb3ZlRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIGV2ZW50TmFtZSwgaGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGVtaXQoZXZlbnROYW1lLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgaWYgKCF0aGlzLl9fZXZlbnRMaXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsaXN0ZW5lcnNGb3JFdmVudCA9IHRoaXMuX19ldmVudExpc3RlbmVyc1tldmVudE5hbWVdO1xuICAgICAgICBpZiAoIWxpc3RlbmVyc0ZvckV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbGlzdGVuZXJzRm9yRXZlbnQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGxpc3RlbmVyc0ZvckV2ZW50W2ldICYmIGxpc3RlbmVyc0ZvckV2ZW50W2ldLmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fX2V2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0gPSBsaXN0ZW5lcnNGb3JFdmVudC5maWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZSAhPT0gZmFsc2UpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgX3JlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgICAgIGlmICghdGhpcy5fX2V2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZXZlbnRMaXN0ZW5lciA9IHRoaXMuX19ldmVudExpc3RlbmVyc1tldmVudE5hbWVdO1xuICAgICAgICAvLyDms6jmhI/vvJrov5nph4zmiJHku6zliKDpmaTnm5HlkKzkuIDoiKzpg73mmK/nva7kuLogbnVsbCDmiJbogIUgZmFsc2VcbiAgICAgICAgLy8g5b2T54S25Lmf5Y+v5Lul55SoIHNwbGljZSDliKDpmaTvvIzkuI3ov4cgc3BsaWNlIOS8muaUueWPmOaVsOe7hOmVv+W6pu+8jOi/meeCueimgeWwpOS4uuazqOaEj1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgZXZlbnRMaXN0ZW5lcltldmVudExpc3RlbmVyLmluZGV4T2YoaGFuZGxlcildID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmVudExpc3RlbmVyLmZpbGwoZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgU2hhcGUgfSBmcm9tIFwiLi9zaGFwZVwiO1xuaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuL3V0aWxzXCI7XG4vKipcbiAqIOe7hOexu++8jOS5n+WwseaYr+aLluiTneahhumAieWMuuWfn+WMheWbtOeahOmCo+S6m+eJqeS9k+aehOaIkOS6huS4gOS4que7hFxuICogR3JvdXAg6Jm954S257un5om/6IezIFNoYXBl77yM5L2G5piv6KaB5rOo5oSP6I635Y+W5p+Q5Lqb5bGe5oCn5pyJ5pe25piv5rKh5pyJ55qEXG4gKi9cbmV4cG9ydCBjbGFzcyBHcm91cCBleHRlbmRzIFNoYXBlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3RzLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiZ3JvdXBcIjtcbiAgICAgICAgdGhpcy5vYmplY3RzID0gb2JqZWN0cyB8fCBbXTtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFN0YXRlID0ge307XG4gICAgICAgIHRoaXMuX2NhbGNCb3VuZHMoKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlT2JqZWN0c0Nvb3JkcygpO1xuICAgICAgICB0aGlzLnNldENvb3JkcygpO1xuICAgIH1cbiAgICAvKiog5pu05paw5omA5pyJ54mp5L2T5Z2Q5qCH57O7ICovXG4gICAgX3VwZGF0ZU9iamVjdHNDb29yZHMoKSB7XG4gICAgICAgIGxldCBncm91cERlbHRhWCA9IHRoaXMubGVmdCwgZ3JvdXBEZWx0YVkgPSB0aGlzLnRvcDtcbiAgICAgICAgdGhpcy5vYmplY3RzLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IG9iamVjdExlZnQgPSBvYmplY3QuZ2V0KFwibGVmdFwiKSwgb2JqZWN0VG9wID0gb2JqZWN0LmdldChcInRvcFwiKTtcbiAgICAgICAgICAgIG9iamVjdC5zZXQoXCJsZWZ0XCIsIG9iamVjdExlZnQgLSBncm91cERlbHRhWCk7XG4gICAgICAgICAgICBvYmplY3Quc2V0KFwidG9wXCIsIG9iamVjdFRvcCAtIGdyb3VwRGVsdGFZKTtcbiAgICAgICAgICAgIG9iamVjdC5zZXRDb29yZHMoKTtcbiAgICAgICAgICAgIC8vIOW9k+aciemAieS4ree7hOeahOaXtuWAme+8jOS4jeaYvuekuueJqeS9k+eahOaOp+WItueCuVxuICAgICAgICAgICAgb2JqZWN0Lm9yaWduSGFzQ29udHJvbHMgPSBvYmplY3QuaGFzQ29udHJvbHM7XG4gICAgICAgICAgICBvYmplY3QuaGFzQ29udHJvbHMgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldE9iamVjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9iamVjdHM7XG4gICAgfVxuICAgIC8qKiDlsIbniankvZPmt7vliqDliLAgZ3JvdXAg5Lit77yM5bm26YeN5paw6K6h566X5L2N572u5bC65a+4562JICovXG4gICAgYWRkV2l0aFVwZGF0ZShvYmplY3QpIHtcbiAgICAgICAgdGhpcy5fcmVzdG9yZU9iamVjdHNTdGF0ZSgpO1xuICAgICAgICB0aGlzLm9iamVjdHMucHVzaChvYmplY3QpO1xuICAgICAgICB0aGlzLl9jYWxjQm91bmRzKCk7XG4gICAgICAgIHRoaXMuX3VwZGF0ZU9iamVjdHNDb29yZHMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKiDlsIbniankvZPmt7vliqDliLAgZ3JvdXAg5LitICovXG4gICAgYWRkKG9iamVjdCkge1xuICAgICAgICB0aGlzLm9iamVjdHMucHVzaChvYmplY3QpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqIOWwhueJqeS9k+S7jiBncm91cCDkuK3np7vpmaQgKi9cbiAgICByZW1vdmUob2JqZWN0KSB7XG4gICAgICAgIFV0aWwucmVtb3ZlRnJvbUFycmF5KHRoaXMub2JqZWN0cywgb2JqZWN0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKiDlsIbniankvZPku47nu4TkuK3np7vpmaTvvIzlubbph43mlrDorqHnrpfnu4TnmoTlpKflsI/kvY3nva4gKi9cbiAgICByZW1vdmVXaXRoVXBkYXRlKG9iamVjdCkge1xuICAgICAgICB0aGlzLl9yZXN0b3JlT2JqZWN0c1N0YXRlKCk7XG4gICAgICAgIFV0aWwucmVtb3ZlRnJvbUFycmF5KHRoaXMub2JqZWN0cywgb2JqZWN0KTtcbiAgICAgICAgb2JqZWN0LnNldEFjdGl2ZShmYWxzZSk7XG4gICAgICAgIHRoaXMuX2NhbGNCb3VuZHMoKTtcbiAgICAgICAgdGhpcy5fdXBkYXRlT2JqZWN0c0Nvb3JkcygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqIOeJqeS9k+aYr+WQpuWcqCBncm91cCDkuK0gKi9cbiAgICBjb250YWlucyhvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0cy5pbmRleE9mKG9iamVjdCkgPiAtMTtcbiAgICB9XG4gICAgLyoqIOiOt+WPliBncm91cCDlsLrlr7ggKi9cbiAgICBzaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3RzKCkubGVuZ3RoO1xuICAgIH1cbiAgICByZW5kZXIoY3R4KSB7XG4gICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtKGN0eCk7XG4gICAgICAgIC8vIGxldCBncm91cFNjYWxlRmFjdG9yID0gTWF0aC5tYXgodGhpcy5zY2FsZVgsIHRoaXMuc2NhbGVZKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMub2JqZWN0cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgbGV0IG9iamVjdCA9IHRoaXMub2JqZWN0c1tpXSwgXG4gICAgICAgICAgICAvLyBvcmlnaW5hbFNjYWxlRmFjdG9yID0gb2JqZWN0LmJvcmRlclNjYWxlRmFjdG9yLFxuICAgICAgICAgICAgb3JpZ2luYWxIYXNSb3RhdGluZ1BvaW50ID0gb2JqZWN0Lmhhc1JvdGF0aW5nUG9pbnQ7XG4gICAgICAgICAgICAvLyBvYmplY3QuYm9yZGVyU2NhbGVGYWN0b3IgPSBncm91cFNjYWxlRmFjdG9yO1xuICAgICAgICAgICAgb2JqZWN0Lmhhc1JvdGF0aW5nUG9pbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIG9iamVjdC5yZW5kZXIoY3R4KTtcbiAgICAgICAgICAgIC8vIG9iamVjdC5ib3JkZXJTY2FsZUZhY3RvciA9IG9yaWdpbmFsU2NhbGVGYWN0b3I7XG4gICAgICAgICAgICBvYmplY3QuaGFzUm90YXRpbmdQb2ludCA9IG9yaWdpbmFsSGFzUm90YXRpbmdQb2ludDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgIC8vIGlmICghbm9UcmFuc2Zvcm0gJiYgdGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd0JvcmRlcnMoY3R4KTtcbiAgICAgICAgICAgIHRoaXMuZHJhd0NvbnRyb2xzKGN0eCk7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgdGhpcy5zZXRDb29yZHMoKTtcbiAgICB9XG4gICAgLyoqIOagueaNriBpbmRleCDojrflj5YgZ3JvdXAg5Lit55qE5p+Q5Liq54mp5L2TICovXG4gICAgaXRlbShpbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3RzKClbaW5kZXhdO1xuICAgIH1cbiAgICAvKiog6L+Y5Y6f5Yib5bu6IGdyb3VwIOS5i+WJjeeahOeKtuaAgSAqL1xuICAgIF9yZXN0b3JlT2JqZWN0c1N0YXRlKCkge1xuICAgICAgICB0aGlzLm9iamVjdHMuZm9yRWFjaCh0aGlzLl9yZXN0b3JlT2JqZWN0U3RhdGUsIHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqIOi/mOWOnyBncm91cCDkuK3mn5DkuKrniankvZPnmoTliJ3lp4vnirbmgIEgKi9cbiAgICBfcmVzdG9yZU9iamVjdFN0YXRlKG9iamVjdCkge1xuICAgICAgICBsZXQgZ3JvdXBMZWZ0ID0gdGhpcy5nZXQoXCJsZWZ0XCIpLCBncm91cFRvcCA9IHRoaXMuZ2V0KFwidG9wXCIpLCBncm91cEFuZ2xlID0gdGhpcy5nZXRBbmdsZSgpICogKE1hdGguUEkgLyAxODApLCByb3RhdGVkVG9wID0gTWF0aC5jb3MoZ3JvdXBBbmdsZSkgKiBvYmplY3QuZ2V0KFwidG9wXCIpICtcbiAgICAgICAgICAgIE1hdGguc2luKGdyb3VwQW5nbGUpICogb2JqZWN0LmdldChcImxlZnRcIiksIHJvdGF0ZWRMZWZ0ID0gLU1hdGguc2luKGdyb3VwQW5nbGUpICogb2JqZWN0LmdldChcInRvcFwiKSArXG4gICAgICAgICAgICBNYXRoLmNvcyhncm91cEFuZ2xlKSAqIG9iamVjdC5nZXQoXCJsZWZ0XCIpO1xuICAgICAgICBvYmplY3Quc2V0QW5nbGUob2JqZWN0LmdldEFuZ2xlKCkgKyB0aGlzLmdldEFuZ2xlKCkpO1xuICAgICAgICBvYmplY3Quc2V0KFwibGVmdFwiLCBncm91cExlZnQgKyByb3RhdGVkTGVmdCAqIHRoaXMuZ2V0KFwic2NhbGVYXCIpKTtcbiAgICAgICAgb2JqZWN0LnNldChcInRvcFwiLCBncm91cFRvcCArIHJvdGF0ZWRUb3AgKiB0aGlzLmdldChcInNjYWxlWVwiKSk7XG4gICAgICAgIG9iamVjdC5zZXQoXCJzY2FsZVhcIiwgb2JqZWN0LmdldChcInNjYWxlWFwiKSAqIHRoaXMuZ2V0KFwic2NhbGVYXCIpKTtcbiAgICAgICAgb2JqZWN0LnNldChcInNjYWxlWVwiLCBvYmplY3QuZ2V0KFwic2NhbGVZXCIpICogdGhpcy5nZXQoXCJzY2FsZVlcIikpO1xuICAgICAgICBvYmplY3Quc2V0Q29vcmRzKCk7XG4gICAgICAgIG9iamVjdC5oYXNDb250cm9scyA9IG9iamVjdC5vcmlnbkhhc0NvbnRyb2xzO1xuICAgICAgICAvLyBkZWxldGUgb2JqZWN0Ll9fb3JpZ0hhc0NvbnRyb2xzO1xuICAgICAgICBvYmplY3Quc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgb2JqZWN0LnNldENvb3JkcygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3RvcmVPYmplY3RzU3RhdGUoKTtcbiAgICB9XG4gICAgLyoqIOmHjeaWsOiuvue9ruW9k+WJjee7hOS4reaJgOacieeahOeJqeS9k+eahOi+ueahhuOAgeaOp+WItueCueOAgeS9jee9ruWSjOWkp+Wwj+etiSAqL1xuICAgIHNldE9iamVjdHNDb29yZHMoKSB7XG4gICAgICAgIHRoaXMub2JqZWN0cy5mb3JFYWNoKChvYmplY3QpID0+IHtcbiAgICAgICAgICAgIG9iamVjdC5zZXRDb29yZHMoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKiog5r+A5rS75omA5pyJIGdyb3VwIOS4reeahOeJqeS9kyAqL1xuICAgIGFjdGl2YXRlQWxsT2JqZWN0cygpIHtcbiAgICAgICAgdGhpcy5vYmplY3RzLmZvckVhY2goKG9iamVjdCkgPT4ge1xuICAgICAgICAgICAgb2JqZWN0LnNldEFjdGl2ZSh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKiog6K6h566X57uE55qE5YyF5Zu055uSICovXG4gICAgX2NhbGNCb3VuZHMoKSB7XG4gICAgICAgIGxldCBhWCA9IFtdLCBhWSA9IFtdLCBtaW5YLCBtaW5ZLCBtYXhYLCBtYXhZLCBvLCB3aWR0aCwgaGVpZ2h0LCBpID0gMCwgbGVuID0gdGhpcy5vYmplY3RzLmxlbmd0aDtcbiAgICAgICAgZm9yICg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgbyA9IHRoaXMub2JqZWN0c1tpXTtcbiAgICAgICAgICAgIG8uc2V0Q29vcmRzKCk7XG4gICAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIG8ub0Nvb3Jkcykge1xuICAgICAgICAgICAgICAgIGFYLnB1c2goby5vQ29vcmRzW3Byb3BdLngpO1xuICAgICAgICAgICAgICAgIGFZLnB1c2goby5vQ29vcmRzW3Byb3BdLnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1pblggPSBVdGlsLm1pbihhWCk7XG4gICAgICAgIG1heFggPSBVdGlsLm1heChhWCk7XG4gICAgICAgIG1pblkgPSBVdGlsLm1pbihhWSk7XG4gICAgICAgIG1heFkgPSBVdGlsLm1heChhWSk7XG4gICAgICAgIHdpZHRoID0gbWF4WCAtIG1pblggfHwgMDtcbiAgICAgICAgaGVpZ2h0ID0gbWF4WSAtIG1pblkgfHwgMDtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbWluWCArIHdpZHRoIC8gMiB8fCAwO1xuICAgICAgICB0aGlzLnRvcCA9IG1pblkgKyBoZWlnaHQgLyAyIHx8IDA7XG4gICAgfVxuICAgIC8qKiDmo4Dmn6XngrnmmK/pg73lnKggZ3JvdXAg5LitICovXG4gICAgY29udGFpbnNQb2ludChwb2ludCkge1xuICAgICAgICBsZXQgaGFsZldpZHRoID0gdGhpcy5nZXQoXCJ3aWR0aFwiKSAvIDIsIGhhbGZIZWlnaHQgPSB0aGlzLmdldChcImhlaWdodFwiKSAvIDIsIGNlbnRlclggPSB0aGlzLmdldChcImxlZnRcIiksIGNlbnRlclkgPSB0aGlzLmdldChcInRvcFwiKTtcbiAgICAgICAgcmV0dXJuIChjZW50ZXJYIC0gaGFsZldpZHRoIDwgcG9pbnQueCAmJlxuICAgICAgICAgICAgY2VudGVyWCArIGhhbGZXaWR0aCA+IHBvaW50LnggJiZcbiAgICAgICAgICAgIGNlbnRlclkgLSBoYWxmSGVpZ2h0IDwgcG9pbnQueSAmJlxuICAgICAgICAgICAgY2VudGVyWSArIGhhbGZIZWlnaHQgPiBwb2ludC55KTtcbiAgICB9XG4gICAgZ2V0KHByb3ApIHtcbiAgICAgICAgLy8g57uE6YeM6Z2i5pyJ5b6I5aSa5YWD57Sg77yM5omA5Lul6Jm954S257un5om/6IezIEZhYnJpY++8jOS9huaYr+acieW+iOWkmuWxnuaAp+ivu+WPluaYr+aXoOaViOeahO+8jOiuvue9ruWQjOeQhlxuICAgICAgICByZXR1cm4gdGhpc1twcm9wXTtcbiAgICB9XG4gICAgX3NldChrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG4vKiog5byC5q2l5qCH6K+G77yM6K+05piO6L+Z5Liq5Lic6KW/5piv5ZCO6Z2i5Yib5bu655qE77yM5q+U5aaC5b6X546w5pyJ5Yeg5Liq54mp5L2T5omN6IO95pyJIEdyb3Vw77yb57G75Ly855qE6L+Y5pyJ5Zu+54mH77yM55uu5YmN6L+Z6YeM5rKh55So5YiwICovXG5Hcm91cC5hc3luYyA9IHRydWU7XG4iLCJpbXBvcnQgeyBQb2ludCB9IGZyb20gXCIuL3BvaW50XCI7XG4vKiog5qOA5rWL5aSa6L655b2i44CB57q/5q615piv5ZCm55u45Lqk55qE5LiA5Liq57G7ICovXG5leHBvcnQgY2xhc3MgSW50ZXJzZWN0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihzdGF0dXMpIHtcbiAgICAgICAgdGhpcy5pbml0KHN0YXR1cyk7XG4gICAgfVxuICAgIGluaXQoc3RhdHVzKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB0aGlzLnBvaW50cyA9IFtdO1xuICAgIH1cbiAgICBhcHBlbmRQb2ludChwb2ludCkge1xuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHBvaW50KTtcbiAgICB9XG4gICAgYXBwZW5kUG9pbnRzKHBvaW50cykge1xuICAgICAgICB0aGlzLnBvaW50cyA9IHRoaXMucG9pbnRzLmNvbmNhdChwb2ludHMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDliKTmlq3kuKTmnaHnur/mrrXmmK/lkKbmg7PkuqRcbiAgICAgKiBAcGFyYW0gYTEg57q/5q61MSDotbfngrlcbiAgICAgKiBAcGFyYW0gYTIg57q/5q61MSDnu4jngrlcbiAgICAgKiBAcGFyYW0gYjEg57q/5q61MiDotbfngrlcbiAgICAgKiBAcGFyYW0gYjIg57q/5q61MyDnu4jngrlcbiAgICAgKi9cbiAgICBzdGF0aWMgaW50ZXJzZWN0TGluZUxpbmUoYTEsIGEyLCBiMSwgYjIpIHtcbiAgICAgICAgLy8g5ZCR6YeP5Y+J5LmY5YWs5byPIGBh4pyW77iPYiA9ICh4MSwgeTEp4pyW77iPKHgyLCB5MikgPSB4MXkyIC0geDJ5MWBcbiAgICAgICAgLy8gaHR0cDovL2Jsb2cubGV0b3cudG9wLzIwMTcvMTEvMTMvdmVjdG9yLWNyb3NzLXByb2R1Y3QtY2FsLWludGVyc2VjdGlvbi9cbiAgICAgICAgbGV0IHJlc3VsdCwgXG4gICAgICAgIC8vIGIxLT5iMuWQkemHjyDkuI4gYTEtPmIx5ZCR6YeP55qE5ZCR6YeP5Y+J5LmYXG4gICAgICAgIHVhX3QgPSAoYjIueCAtIGIxLngpICogKGExLnkgLSBiMS55KSAtIChiMi55IC0gYjEueSkgKiAoYTEueCAtIGIxLngpLCBcbiAgICAgICAgLy8gYTEtPmEy5ZCR6YePIOS4jiBhMS0+YjHlkJHph4/nmoTlkJHph4/lj4nkuZhcbiAgICAgICAgdWJfdCA9IChhMi54IC0gYTEueCkgKiAoYTEueSAtIGIxLnkpIC0gKGEyLnkgLSBhMS55KSAqIChhMS54IC0gYjEueCksIFxuICAgICAgICAvLyBhMS0+YTLlkJHph48g5LiOIGIxLT5iMuWQkemHj+eahOWQkemHj+WPieS5mFxuICAgICAgICB1X2IgPSAoYjIueSAtIGIxLnkpICogKGEyLnggLSBhMS54KSAtIChiMi54IC0gYjEueCkgKiAoYTIueSAtIGExLnkpO1xuICAgICAgICBpZiAodV9iICE9PSAwKSB7XG4gICAgICAgICAgICBsZXQgdWEgPSB1YV90IC8gdV9iLCB1YiA9IHViX3QgLyB1X2I7XG4gICAgICAgICAgICBpZiAoMCA8PSB1YSAmJiB1YSA8PSAxICYmIDAgPD0gdWIgJiYgdWIgPD0gMSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBJbnRlcnNlY3Rpb24oXCJJbnRlcnNlY3Rpb25cIik7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnBvaW50cy5wdXNoKG5ldyBQb2ludChhMS54ICsgdWEgKiAoYTIueCAtIGExLngpLCBhMS55ICsgdWEgKiAoYTIueSAtIGExLnkpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBuZXcgSW50ZXJzZWN0aW9uKFwiTm8gSW50ZXJzZWN0aW9uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gdV9iID09IDDml7bvvIzop5LluqbkuLow5oiW6ICFMTgwIOW5s+ihjOaIluiAheWFsee6v+S4jeWxnuS6juebuOS6pFxuICAgICAgICAgICAgaWYgKHVhX3QgPT09IDAgfHwgdWJfdCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBJbnRlcnNlY3Rpb24oXCJDb2luY2lkZW50XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEludGVyc2VjdGlvbihcIlBhcmFsbGVsXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOajgOa1i+e6v+auteWSjOWkmui+ueW9ouaYr+WQpuebuOS6pFxuICAgICAqIEBwYXJhbSBhMSDnur/mrrXotbfngrlcbiAgICAgKiBAcGFyYW0gYTIg57q/5q6157uI54K5XG4gICAgICogQHBhcmFtIHBvaW50cyDlpJrovrnlvaLpobbngrlcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHN0YXRpYyBpbnRlcnNlY3RMaW5lUG9seWdvbihhMSwgYTIsIHBvaW50cykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IEludGVyc2VjdGlvbihcIk5vIEludGVyc2VjdGlvblwiKSwgbGVuZ3RoID0gcG9pbnRzLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGIxID0gcG9pbnRzW2ldLCAvLyDlpJrovrnlvaLmr4/mnaHovrnnmoTotbfngrlcbiAgICAgICAgICAgIGIyID0gcG9pbnRzWyhpICsgMSkgJSBsZW5ndGhdLCAvLyDlpJrovrnlvaLmr4/mnaHovrnnmoTnu4jngrlcbiAgICAgICAgICAgIGludGVyID0gSW50ZXJzZWN0aW9uLmludGVyc2VjdExpbmVMaW5lKGExLCBhMiwgYjEsIGIyKTtcbiAgICAgICAgICAgIHJlc3VsdC5hcHBlbmRQb2ludHMoaW50ZXIucG9pbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0LnBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXN1bHQuc3RhdHVzID0gXCJJbnRlcnNlY3Rpb25cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBzdGF0aWMgaW50ZXJzZWN0UG9seWdvblBvbHlnb24ocG9pbnRzMSwgcG9pbnRzMikge1xuICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IEludGVyc2VjdGlvbihcIk5vIEludGVyc2VjdGlvblwiKSwgbGVuZ3RoID0gcG9pbnRzMS5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhMSA9IHBvaW50czFbaV0sIGEyID0gcG9pbnRzMVsoaSArIDEpICUgbGVuZ3RoXSwgaW50ZXIgPSBJbnRlcnNlY3Rpb24uaW50ZXJzZWN0TGluZVBvbHlnb24oYTEsIGEyLCBwb2ludHMyKTtcbiAgICAgICAgICAgIHJlc3VsdC5hcHBlbmRQb2ludHMoaW50ZXIucG9pbnRzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0LnBvaW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXN1bHQuc3RhdHVzID0gXCJJbnRlcnNlY3Rpb25cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmo4DmtYvniankvZPmmK/lkKbkuI7mi5bok53pgInljLrnm7jkuqRcbiAgICAgKiBAcGFyYW0gcG9pbnRzIOeJqeS9k+WMheWbtOebkueahOWbm+S4qumhtueCueeahOWdkOagh1xuICAgICAqIEBwYXJhbSByMSDmi5bok53pgInljLrlt6bkuIrop5LnmoTngrlcbiAgICAgKiBAcGFyYW0gcjIg5ouW6JOd6YCJ5Yy65Y+z5LiL6KeS55qE54K5XG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBzdGF0aWMgaW50ZXJzZWN0UG9seWdvblJlY3RhbmdsZShwb2ludHMsIHIxLCByMikge1xuICAgICAgICBsZXQgdG9wTGVmdCA9IHIxLm1pbihyMiksIC8vIOaLluiTnemAieWMuuW3puS4iuinklxuICAgICAgICBib3R0b21SaWdodCA9IHIxLm1heChyMiksIC8vIOaLluiTnemAieWMuuWPs+S4i+inklxuICAgICAgICB0b3BSaWdodCA9IG5ldyBQb2ludChib3R0b21SaWdodC54LCB0b3BMZWZ0LnkpLCAvLyDmi5bok53pgInljLrlj7PkuIrop5JcbiAgICAgICAgYm90dG9tTGVmdCA9IG5ldyBQb2ludCh0b3BMZWZ0LngsIGJvdHRvbVJpZ2h0LnkpLCAvLyDmi5bok53pgInljLrlt6bkuIvop5JcbiAgICAgICAgLy8g5qOA5rWL5q+P5p2h6L655piv5ZCm5LiO54mp5L2T55u45LqkXG4gICAgICAgIGludGVyMSA9IEludGVyc2VjdGlvbi5pbnRlcnNlY3RMaW5lUG9seWdvbih0b3BMZWZ0LCB0b3BSaWdodCwgcG9pbnRzKSwgaW50ZXIyID0gSW50ZXJzZWN0aW9uLmludGVyc2VjdExpbmVQb2x5Z29uKHRvcFJpZ2h0LCBib3R0b21SaWdodCwgcG9pbnRzKSwgaW50ZXIzID0gSW50ZXJzZWN0aW9uLmludGVyc2VjdExpbmVQb2x5Z29uKGJvdHRvbVJpZ2h0LCBib3R0b21MZWZ0LCBwb2ludHMpLCBpbnRlcjQgPSBJbnRlcnNlY3Rpb24uaW50ZXJzZWN0TGluZVBvbHlnb24oYm90dG9tTGVmdCwgdG9wTGVmdCwgcG9pbnRzKSwgcmVzdWx0ID0gbmV3IEludGVyc2VjdGlvbihcIk5vIEludGVyc2VjdGlvblwiKTtcbiAgICAgICAgcmVzdWx0LmFwcGVuZFBvaW50cyhpbnRlcjEucG9pbnRzKTtcbiAgICAgICAgcmVzdWx0LmFwcGVuZFBvaW50cyhpbnRlcjIucG9pbnRzKTtcbiAgICAgICAgcmVzdWx0LmFwcGVuZFBvaW50cyhpbnRlcjMucG9pbnRzKTtcbiAgICAgICAgcmVzdWx0LmFwcGVuZFBvaW50cyhpbnRlcjQucG9pbnRzKTtcbiAgICAgICAgaWYgKHJlc3VsdC5wb2ludHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgLy8g5aaC5p6c5pyJ6Iez5bCR5LiA5p2h6L655LiO54mp5L2T55u45LqkXG4gICAgICAgICAgICByZXN1bHQuc3RhdHVzID0gXCJJbnRlcnNlY3Rpb25cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBQb2ludCB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgIH1cbiAgICAvKiog6L+U5Zue5LiA5Liq5paw55qE54K577yM5YC85Li65Lik5Liq54K555qE5pyA5bCPeOOAgXnlgLwgKi9cbiAgICBtaW4ob3RoZXJQb2ludCkge1xuICAgICAgICByZXR1cm4gbmV3IFBvaW50KE1hdGgubWluKHRoaXMueCwgb3RoZXJQb2ludC54KSwgTWF0aC5taW4odGhpcy55LCBvdGhlclBvaW50LnkpKTtcbiAgICB9XG4gICAgLyoqIOi/lOWbnuS4gOS4quaWsOeahOeCue+8jOWAvOS4uuS4pOS4queCueeahOacgOWkp3jjgIF55YC8ICovXG4gICAgbWF4KG90aGVyUG9pbnQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQb2ludChNYXRoLm1heCh0aGlzLngsIG90aGVyUG9pbnQueCksIE1hdGgubWF4KHRoaXMueSwgb3RoZXJQb2ludC55KSk7XG4gICAgfVxuICAgIC8qKiArPSDnmoTmhI/mgJ3vvIzkvJrmlLnlj5joh6rouqvnmoTlgLwgKi9cbiAgICBhZGRFcXVhbHMocG9pbnQpIHtcbiAgICAgICAgdGhpcy54ICs9IHBvaW50Lng7XG4gICAgICAgIHRoaXMueSArPSBwb2ludC55O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqIC09IOeahOaEj+aAne+8jOS8muaUueWPmOiHqui6q+eahOWAvCAqL1xuICAgIHN1YnRyYWN0RXF1YWxzKHBvaW50KSB7XG4gICAgICAgIHRoaXMueCAtPSBwb2ludC54O1xuICAgICAgICB0aGlzLnkgLT0gcG9pbnQueTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuL3V0aWxzXCI7XG5pbXBvcnQgeyBQb2ludCB9IGZyb20gXCIuL3BvaW50XCI7XG5pbXBvcnQgeyBJbnRlcnNlY3Rpb24gfSBmcm9tIFwiLi9pbnRlcnNlY3Rpb25cIjtcbmltcG9ydCB7IEV2ZW50Q2VudGVyIH0gZnJvbSBcIi4vZXZlbnRcIjtcbi8qKiDniankvZPln7rnsbvvvIzmnInkuIDkupvlhbHlkIzlsZ7mgKflkozmlrnms5UgKi9cbmV4cG9ydCBjbGFzcyBTaGFwZSBleHRlbmRzIEV2ZW50Q2VudGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIC8qKiDniankvZPnsbvlnovmoIfor4YgKi9cbiAgICAgICAgdGhpcy50eXBlID0gXCJvYmplY3RcIjtcbiAgICAgICAgLyoqIOaYr+WQpuWkhOS6jua/gOa0u+aAge+8jOS5n+WwseaYr+aYr+WQpuiiq+mAieS4rSAqL1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvKiog5piv5ZCm5Y+v6KeBICovXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICAgIC8qKiDpu5jorqTmsLTlubPlj5jmjaLkuK3lv4MgbGVmdCB8IHJpZ2h0IHwgY2VudGVyICovXG4gICAgICAgIHRoaXMub3JpZ2luWCA9IFwiY2VudGVyXCI7XG4gICAgICAgIC8qKiDpu5jorqTlnoLnm7Tlj5jmjaLkuK3lv4MgdG9wIHwgYm90dG9tIHwgY2VudGVyICovXG4gICAgICAgIHRoaXMub3JpZ2luWSA9IFwiY2VudGVyXCI7XG4gICAgICAgIC8qKiDniankvZPkvY3nva4gdG9wIOWAvCAqL1xuICAgICAgICB0aGlzLnRvcCA9IDA7XG4gICAgICAgIC8qKiDniankvZPkvY3nva4gbGVmdCDlgLwgKi9cbiAgICAgICAgdGhpcy5sZWZ0ID0gMDtcbiAgICAgICAgLyoqIOeJqeS9k+WOn+Wni+WuveW6piAqL1xuICAgICAgICB0aGlzLndpZHRoID0gMDtcbiAgICAgICAgLyoqIOeJqeS9k+WOn+Wni+mrmOW6piAqL1xuICAgICAgICB0aGlzLmhlaWdodCA9IDA7XG4gICAgICAgIC8qKiDniankvZPlvZPliY3nmoTnvKnmlL7lgI3mlbAgeCAqL1xuICAgICAgICB0aGlzLnNjYWxlWCA9IDE7XG4gICAgICAgIC8qKiDniankvZPlvZPliY3nmoTnvKnmlL7lgI3mlbAgeSAqL1xuICAgICAgICB0aGlzLnNjYWxlWSA9IDE7XG4gICAgICAgIC8qKiDniankvZPlvZPliY3nmoTml4vovazop5LluqYgKi9cbiAgICAgICAgdGhpcy5hbmdsZSA9IDA7XG4gICAgICAgIC8qKiDlt6blj7PplZzlg4/vvIzmr5TlpoLlj43lkJHmi4nkvLjmjqfliLbngrkgKi9cbiAgICAgICAgdGhpcy5mbGlwWCA9IGZhbHNlO1xuICAgICAgICAvKiog5LiK5LiL6ZWc5YOP77yM5q+U5aaC5Y+N5ZCR5ouJ5Ly45o6n5Yi254K5ICovXG4gICAgICAgIHRoaXMuZmxpcFkgPSBmYWxzZTtcbiAgICAgICAgLyoqIOmAieS4reaAgeeJqeS9k+WSjOi+ueahhuS5i+mXtOeahOi3neemuyAqL1xuICAgICAgICB0aGlzLnBhZGRpbmcgPSAwO1xuICAgICAgICAvKiog54mp5L2T57yp5pS+5ZCO55qE5a695bqmICovXG4gICAgICAgIHRoaXMuY3VycmVudFdpZHRoID0gMDtcbiAgICAgICAgLyoqIOeJqeS9k+e8qeaUvuWQjueahOmrmOW6piAqL1xuICAgICAgICB0aGlzLmN1cnJlbnRIZWlnaHQgPSAwO1xuICAgICAgICAvKiog5r+A5rS75oCB6L655qGG6aKc6ImyICovXG4gICAgICAgIHRoaXMuYm9yZGVyQ29sb3IgPSBcIiNiYTg2ZmVcIjtcbiAgICAgICAgLyoqIOa/gOa0u+aAgeaOp+WItueCueminOiJsiAqL1xuICAgICAgICB0aGlzLmNvcm5lckNvbG9yID0gXCIjYmE4NmZlXCI7XG4gICAgICAgIC8qKiDniankvZPpu5jorqTloavlhYXpopzoibIgKi9cbiAgICAgICAgdGhpcy5maWxsID0gXCJyZ2IoMCwwLDApXCI7XG4gICAgICAgIC8qKiDniankvZPpu5jorqTmj4/ovrnlrr3luqYgKi9cbiAgICAgICAgdGhpcy5zdHJva2VXaWR0aCA9IDE7XG4gICAgICAgIC8qKiDnn6npmLXlj5jmjaIgKi9cbiAgICAgICAgLy8gcHVibGljIHRyYW5zZm9ybU1hdHJpeDogbnVtYmVyW107XG4gICAgICAgIC8qKiDmnIDlsI/nvKnmlL7lgLwgKi9cbiAgICAgICAgLy8gcHVibGljIG1pblNjYWxlTGltaXQ6IG51bWJlciA9IDAuMDE7XG4gICAgICAgIC8qKiDmmK/lkKbmnInmjqfliLbngrkgKi9cbiAgICAgICAgdGhpcy5oYXNDb250cm9scyA9IHRydWU7XG4gICAgICAgIC8qKiDmmK/lkKbmnInml4vovazmjqfliLbngrkgKi9cbiAgICAgICAgdGhpcy5oYXNSb3RhdGluZ1BvaW50ID0gdHJ1ZTtcbiAgICAgICAgLyoqIOaXi+i9rOaOp+WItueCueWBj+enu+mHjyAqL1xuICAgICAgICB0aGlzLnJvdGF0aW5nUG9pbnRPZmZzZXQgPSA0MDtcbiAgICAgICAgLyoqIOenu+WKqOeahOaXtuWAmei+ueahhumAj+aYjuW6piAqL1xuICAgICAgICB0aGlzLmJvcmRlck9wYWNpdHlXaGVuTW92aW5nID0gMC40O1xuICAgICAgICAvKiog54mp5L2T5piv5ZCm5Zyo56e75Yqo5LitICovXG4gICAgICAgIHRoaXMuaXNNb3ZpbmcgPSBmYWxzZTtcbiAgICAgICAgLyoqIOmAieS4reaAgeeahOi+ueahhuWuveW6piAqL1xuICAgICAgICB0aGlzLmJvcmRlcldpZHRoID0gMTtcbiAgICAgICAgLyoqIOeJqeS9k+aOp+WItueCueeUqCBzdHJva2Ug6L+Y5pivIGZpbGwgKi9cbiAgICAgICAgdGhpcy50cmFuc3BhcmVudENvcm5lcnMgPSBmYWxzZTtcbiAgICAgICAgLyoqIOeJqeS9k+aOp+WItueCueWkp+Wwj++8jOWNleS9jSBweCAqL1xuICAgICAgICB0aGlzLmNvcm5lclNpemUgPSAxMjtcbiAgICAgICAgLyoqIOmAmui/h+WDj+e0oOadpeajgOa1i+eJqeS9k+iAjOS4jeaYr+mAmui/h+WMheWbtOebkiAqL1xuICAgICAgICB0aGlzLnBlclBpeGVsVGFyZ2V0RmluZCA9IGZhbHNlO1xuICAgICAgICAvKiog54mp5L2T6KKr5ouW6JOd6YCJ5Yy65L+d5a2Y55qE5pe25YCZ6ZyA6KaB5Li05pe25L+d5a2Y5LiLIGhhc0NvbnRyb2xzIOeahOWAvCAqL1xuICAgICAgICB0aGlzLm9yaWduSGFzQ29udHJvbHMgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0YXRlUHJvcGVydGllcyA9IChcInRvcCBsZWZ0IHdpZHRoIGhlaWdodCBzY2FsZVggc2NhbGVZIFwiICtcbiAgICAgICAgICAgIFwiZmxpcFggZmxpcFkgYW5nbGUgY29ybmVyU2l6ZSBmaWxsIG9yaWdpblggb3JpZ2luWSBcIiArXG4gICAgICAgICAgICBcInN0cm9rZSBzdHJva2VXaWR0aCBcIiArXG4gICAgICAgICAgICBcImJvcmRlcldpZHRoIHRyYW5zZm9ybU1hdHJpeCB2aXNpYmxlXCIpLnNwbGl0KFwiIFwiKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKG9wdGlvbnMpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyAmJiB0aGlzLnNldE9wdGlvbnMob3B0aW9ucyk7XG4gICAgfVxuICAgIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICBmb3IgKGxldCBwcm9wIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXNbcHJvcF0gPSBvcHRpb25zW3Byb3BdO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDmuLLmn5PniankvZPvvIzpu5jorqTnlKggZmlsbCDloavlhYUgKi9cbiAgICByZW5kZXIoY3R4LCBub1RyYW5zZm9ybSA9IGZhbHNlKSB7XG4gICAgICAgIGlmICh0aGlzLndpZHRoID09PSAwIHx8IHRoaXMuaGVpZ2h0ID09PSAwIHx8ICF0aGlzLnZpc2libGUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgIC8vIGxldCBtID0gdGhpcy50cmFuc2Zvcm1NYXRyaXg7XG4gICAgICAgIC8vIGlmIChtICYmICF0aGlzLmdyb3VwKSB7XG4gICAgICAgIC8vICAgICBjdHguc2V0VHJhbnNmb3JtKG1bMF0sIG1bMV0sIG1bMl0sIG1bM10sIG1bNF0sIG1bNV0pO1xuICAgICAgICAvLyB9XG4gICAgICAgIGlmICghbm9UcmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtKGN0eCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3Ryb2tlKSB7XG4gICAgICAgICAgICBjdHgubGluZVdpZHRoID0gdGhpcy5zdHJva2VXaWR0aDtcbiAgICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc3Ryb2tlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZpbGwpIHtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmZpbGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgKG0gJiYgdGhpcy5ncm91cCkge1xuICAgICAgICAvLyAgICAgY3R4LnRyYW5zbGF0ZSgtdGhpcy5ncm91cC53aWR0aCAvIDIsIC10aGlzLmdyb3VwLmhlaWdodCAvIDIpO1xuICAgICAgICAvLyAgICAgY3R4LnRyYW5zZm9ybShtWzBdLCBtWzFdLCBtWzJdLCBtWzNdLCBtWzRdLCBtWzVdKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyDnu5jliLbniankvZNcbiAgICAgICAgdGhpcy5fcmVuZGVyKGN0eCk7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZSAmJiAhbm9UcmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIC8vIOe7mOWItua/gOa0u+eJqeS9k+i+ueahhlxuICAgICAgICAgICAgdGhpcy5kcmF3Qm9yZGVycyhjdHgpO1xuICAgICAgICAgICAgLy8g57uY5Yi25r+A5rS754mp5L2T5Zub5ZGo55qE5o6n5Yi254K5XG4gICAgICAgICAgICB0aGlzLmRyYXdDb250cm9scyhjdHgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOeUu+iHqui6q+WdkOagh+ezu1xuICAgICAgICB0aGlzLmRyYXdBeGlzKGN0eCk7XG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgfVxuICAgIC8qKiDnlLHlrZDnsbvlrp7njrDvvIzlsLHmmK/nlLHlhbfkvZPniankvZPnsbvmnaXlrp7njrAgKi9cbiAgICBfcmVuZGVyKGN0eCkgeyB9XG4gICAgLyoqIOe7mOWItuWJjemcgOimgei/m+ihjOWQhOenjeWPmOaNou+8iOWMheaLrOW5s+enu+OAgeaXi+i9rOOAgee8qeaUvu+8iVxuICAgICAqIOazqOaEj+WPmOaNoumhuuW6j+W+iOmHjeimge+8jOmhuuW6j+S4jeS4gOagt+S8muWvvOiHtOS4jeS4gOagt+eahOe7k+aenO+8jOaJgOS7peS4gOS4quahhuaetuS4gOaXpuWumuS4i+adpeS6hu+8jOWQjumdouWkp+amgueOh+aYr+S4jeiDveabtOaUueeahFxuICAgICAqIOaIkeS7rOmHh+eUqOeahOmhuuW6j+aYr++8muW5s+enuyAtPiDml4vovawgLT4g57yp5pS+77yM6L+Z5qC35Y+v5Lul5YeP5bCR5Lqb6K6h566X6YeP77yM5aaC5p6c5oiR5Lus5YWI5peL6L2s77yM54K555qE5Z2Q5qCH5YC85LiA6Iis5bCx5LiN5piv5pW05pWw77yM6YKj5LmI5ZCO6Z2i55qE5Y+Y5o2i5Z+65LqO6Z2e5pW05pWw5p2l6K6h566XXG4gICAgICovXG4gICAgdHJhbnNmb3JtKGN0eCkge1xuICAgICAgICBsZXQgY2VudGVyID0gdGhpcy5nZXRDZW50ZXJQb2ludCgpO1xuICAgICAgICBjdHgudHJhbnNsYXRlKGNlbnRlci54LCBjZW50ZXIueSk7XG4gICAgICAgIGN0eC5yb3RhdGUoVXRpbC5kZWdyZWVzVG9SYWRpYW5zKHRoaXMuYW5nbGUpKTtcbiAgICAgICAgLy8gY3R4LnNjYWxlKHRoaXMuc2NhbGVYLCB0aGlzLnNjYWxlWSk7XG4gICAgICAgIGN0eC5zY2FsZSh0aGlzLnNjYWxlWCAqICh0aGlzLmZsaXBYID8gLTEgOiAxKSwgdGhpcy5zY2FsZVkgKiAodGhpcy5mbGlwWSA/IC0xIDogMSkpO1xuICAgICAgICAvLyBjb25zdCBtID0gVXRpbC5jb21wb3NlTWF0cml4KHtcbiAgICAgICAgLy8gICAgIGFuZ2xlOiB0aGlzLmFuZ2xlLFxuICAgICAgICAvLyAgICAgdHJhbnNsYXRlWDogY2VudGVyLngsXG4gICAgICAgIC8vICAgICB0cmFuc2xhdGVZOiBjZW50ZXIueSxcbiAgICAgICAgLy8gICAgIHNjYWxlWDogdGhpcy5zY2FsZVgsXG4gICAgICAgIC8vICAgICBzY2FsZVk6IHRoaXMuc2NhbGVZLFxuICAgICAgICAvLyAgICAgZmxpcFg6IHRoaXMuZmxpcFgsXG4gICAgICAgIC8vICAgICBmbGlwWTogdGhpcy5mbGlwWSxcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIC8vIGN0eC50cmFuc2Zvcm0obVswXSwgbVsxXSwgbVsyXSwgbVszXSwgbVs0XSwgbVs1XSk7XG4gICAgICAgIC8vIGNvbnN0IHJhZGlhbiA9IFV0aWwuZGVncmVlc1RvUmFkaWFucyh0aGlzLmFuZ2xlKTtcbiAgICAgICAgLy8gY29uc3QgY29zID0gTWF0aC5jb3MocmFkaWFuKTtcbiAgICAgICAgLy8gY29uc3Qgc2luID0gTWF0aC5zaW4ocmFkaWFuKTtcbiAgICAgICAgLy8gY29uc3QgbSA9IFtjb3MgKiB0aGlzLnNjYWxlWCwgc2luICogdGhpcy5zY2FsZVgsIC1zaW4gKiB0aGlzLnNjYWxlWSwgY29zICogdGhpcy5zY2FsZVksIGNlbnRlci54LCBjZW50ZXIueV07XG4gICAgfVxuICAgIC8qKiDnu5jliLbmv4DmtLvniankvZPovrnmoYYgKi9cbiAgICBkcmF3Qm9yZGVycyhjdHgpIHtcbiAgICAgICAgbGV0IHBhZGRpbmcgPSB0aGlzLnBhZGRpbmcsIHBhZGRpbmcyID0gcGFkZGluZyAqIDIsIHN0cm9rZVdpZHRoID0gdGhpcy5ib3JkZXJXaWR0aDtcbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgY3R4Lmdsb2JhbEFscGhhID0gdGhpcy5pc01vdmluZyA/IHRoaXMuYm9yZGVyT3BhY2l0eVdoZW5Nb3ZpbmcgOiAxO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmJvcmRlckNvbG9yO1xuICAgICAgICBjdHgubGluZVdpZHRoID0gc3Ryb2tlV2lkdGg7XG4gICAgICAgIC8qKiDnlLvovrnmoYbnmoTml7blgJnpnIDopoHmioogdHJhbnNmb3JtIOWPmOaNouS4reeahCBzY2FsZSDmlYjmnpzmirXmtojvvIzov5nmoLfmiY3og73nlLvlh7rljp/lp4vlpKflsI/nmoTnur/mnaEgKi9cbiAgICAgICAgY3R4LnNjYWxlKDEgLyB0aGlzLnNjYWxlWCwgMSAvIHRoaXMuc2NhbGVZKTtcbiAgICAgICAgbGV0IHcgPSB0aGlzLmdldFdpZHRoKCksIGggPSB0aGlzLmdldEhlaWdodCgpO1xuICAgICAgICAvLyDnlLvniankvZPmv4DmtLvml7blgJnnmoTovrnmoYbvvIzkuZ/lsLHmmK/ljIXlm7Tnm5LvvIx+fuWwseaYr+WPluaVtOeahOaEj+aAnVxuICAgICAgICBjdHguc3Ryb2tlUmVjdCgtKHcgLyAyKSAtIHBhZGRpbmcgLSBzdHJva2VXaWR0aCAvIDIsIC0oaCAvIDIpIC0gcGFkZGluZyAtIHN0cm9rZVdpZHRoIC8gMiwgdyArIHBhZGRpbmcyICsgc3Ryb2tlV2lkdGgsIGggKyBwYWRkaW5nMiArIHN0cm9rZVdpZHRoKTtcbiAgICAgICAgLy8g55S75peL6L2s5o6n5Yi254K555qE6YKj5p2h57q/XG4gICAgICAgIGlmICh0aGlzLmhhc1JvdGF0aW5nUG9pbnQgJiYgdGhpcy5oYXNDb250cm9scykge1xuICAgICAgICAgICAgbGV0IHJvdGF0ZUhlaWdodCA9ICgtaCAtIHN0cm9rZVdpZHRoIC0gcGFkZGluZyAqIDIpIC8gMjtcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5tb3ZlVG8oMCwgcm90YXRlSGVpZ2h0KTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8oMCwgcm90YXRlSGVpZ2h0IC0gdGhpcy5yb3RhdGluZ1BvaW50T2Zmc2V0KTtcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqIOe7mOWItuWMheWbtOebkuaooeWei+eahOaOp+WItueCuSAqL1xuICAgIGRyYXdDb250cm9scyhjdHgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc0NvbnRyb2xzKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyDlm6DkuLrnlLvluIPlt7Lnu4/nu4/ov4flj5jmjaLvvIzmiYDku6XlpKfpg6jliIbmlbDlgLzpnIDopoHpmaTku6Ugc2NhbGUg5p2l5oq15raI5Y+Y5o2iXG4gICAgICAgIGxldCBzaXplID0gdGhpcy5jb3JuZXJTaXplLCBzaXplMiA9IHNpemUgLyAyLCBzdHJva2VXaWR0aDIgPSB0aGlzLnN0cm9rZVdpZHRoIC8gMiwgXG4gICAgICAgIC8vIHRvcCDlkowgbGVmdCDlgLzkuLrniankvZPlt6bkuIrop5LnmoTngrlcbiAgICAgICAgbGVmdCA9IC0odGhpcy53aWR0aCAvIDIpLCB0b3AgPSAtKHRoaXMuaGVpZ2h0IC8gMiksIF9sZWZ0LCBfdG9wLCBzaXplWCA9IHNpemUgLyB0aGlzLnNjYWxlWCwgc2l6ZVkgPSBzaXplIC8gdGhpcy5zY2FsZVksIHBhZGRpbmdYID0gdGhpcy5wYWRkaW5nIC8gdGhpcy5zY2FsZVgsIHBhZGRpbmdZID0gdGhpcy5wYWRkaW5nIC8gdGhpcy5zY2FsZVksIHNjYWxlT2Zmc2V0WSA9IHNpemUyIC8gdGhpcy5zY2FsZVksIHNjYWxlT2Zmc2V0WCA9IHNpemUyIC8gdGhpcy5zY2FsZVgsIHNjYWxlT2Zmc2V0U2l6ZVggPSAoc2l6ZTIgLSBzaXplKSAvIHRoaXMuc2NhbGVYLCBzY2FsZU9mZnNldFNpemVZID0gKHNpemUyIC0gc2l6ZSkgLyB0aGlzLnNjYWxlWSwgaGVpZ2h0ID0gdGhpcy5oZWlnaHQsIHdpZHRoID0gdGhpcy53aWR0aCwgXG4gICAgICAgIC8vIOaOp+WItueCueaYr+WunuW/g+i/mOaYr+epuuW/g1xuICAgICAgICBtZXRob2ROYW1lID0gdGhpcy50cmFuc3BhcmVudENvcm5lcnMgPyBcInN0cm9rZVJlY3RcIiA6IFwiZmlsbFJlY3RcIjtcbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMuYm9yZGVyV2lkdGggLyBNYXRoLm1heCh0aGlzLnNjYWxlWCwgdGhpcy5zY2FsZVkpO1xuICAgICAgICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLmlzTW92aW5nID8gdGhpcy5ib3JkZXJPcGFjaXR5V2hlbk1vdmluZyA6IDE7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvcm5lckNvbG9yO1xuICAgICAgICAvLyB0b3AtbGVmdFxuICAgICAgICBfbGVmdCA9IGxlZnQgLSBzY2FsZU9mZnNldFggLSBzdHJva2VXaWR0aDIgLSBwYWRkaW5nWDtcbiAgICAgICAgX3RvcCA9IHRvcCAtIHNjYWxlT2Zmc2V0WSAtIHN0cm9rZVdpZHRoMiAtIHBhZGRpbmdZO1xuICAgICAgICBjdHguY2xlYXJSZWN0KF9sZWZ0LCBfdG9wLCBzaXplWCwgc2l6ZVkpO1xuICAgICAgICBjdHhbbWV0aG9kTmFtZV0oX2xlZnQsIF90b3AsIHNpemVYLCBzaXplWSk7XG4gICAgICAgIC8vIHRvcC1yaWdodFxuICAgICAgICBfbGVmdCA9IGxlZnQgKyB3aWR0aCAtIHNjYWxlT2Zmc2V0WCArIHN0cm9rZVdpZHRoMiArIHBhZGRpbmdYO1xuICAgICAgICBfdG9wID0gdG9wIC0gc2NhbGVPZmZzZXRZIC0gc3Ryb2tlV2lkdGgyIC0gcGFkZGluZ1k7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoX2xlZnQsIF90b3AsIHNpemVYLCBzaXplWSk7XG4gICAgICAgIGN0eFttZXRob2ROYW1lXShfbGVmdCwgX3RvcCwgc2l6ZVgsIHNpemVZKTtcbiAgICAgICAgLy8gYm90dG9tLWxlZnRcbiAgICAgICAgX2xlZnQgPSBsZWZ0IC0gc2NhbGVPZmZzZXRYIC0gc3Ryb2tlV2lkdGgyIC0gcGFkZGluZ1g7XG4gICAgICAgIF90b3AgPSB0b3AgKyBoZWlnaHQgKyBzY2FsZU9mZnNldFNpemVZICsgc3Ryb2tlV2lkdGgyICsgcGFkZGluZ1k7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoX2xlZnQsIF90b3AsIHNpemVYLCBzaXplWSk7XG4gICAgICAgIGN0eFttZXRob2ROYW1lXShfbGVmdCwgX3RvcCwgc2l6ZVgsIHNpemVZKTtcbiAgICAgICAgLy8gYm90dG9tLXJpZ2h0XG4gICAgICAgIF9sZWZ0ID0gbGVmdCArIHdpZHRoICsgc2NhbGVPZmZzZXRTaXplWCArIHN0cm9rZVdpZHRoMiArIHBhZGRpbmdYO1xuICAgICAgICBfdG9wID0gdG9wICsgaGVpZ2h0ICsgc2NhbGVPZmZzZXRTaXplWSArIHN0cm9rZVdpZHRoMiArIHBhZGRpbmdZO1xuICAgICAgICBjdHguY2xlYXJSZWN0KF9sZWZ0LCBfdG9wLCBzaXplWCwgc2l6ZVkpO1xuICAgICAgICBjdHhbbWV0aG9kTmFtZV0oX2xlZnQsIF90b3AsIHNpemVYLCBzaXplWSk7XG4gICAgICAgIC8vIG1pZGRsZS10b3BcbiAgICAgICAgX2xlZnQgPSBsZWZ0ICsgd2lkdGggLyAyIC0gc2NhbGVPZmZzZXRYO1xuICAgICAgICBfdG9wID0gdG9wIC0gc2NhbGVPZmZzZXRZIC0gc3Ryb2tlV2lkdGgyIC0gcGFkZGluZ1k7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoX2xlZnQsIF90b3AsIHNpemVYLCBzaXplWSk7XG4gICAgICAgIGN0eFttZXRob2ROYW1lXShfbGVmdCwgX3RvcCwgc2l6ZVgsIHNpemVZKTtcbiAgICAgICAgLy8gbWlkZGxlLWJvdHRvbVxuICAgICAgICBfbGVmdCA9IGxlZnQgKyB3aWR0aCAvIDIgLSBzY2FsZU9mZnNldFg7XG4gICAgICAgIF90b3AgPSB0b3AgKyBoZWlnaHQgKyBzY2FsZU9mZnNldFNpemVZICsgc3Ryb2tlV2lkdGgyICsgcGFkZGluZ1k7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoX2xlZnQsIF90b3AsIHNpemVYLCBzaXplWSk7XG4gICAgICAgIGN0eFttZXRob2ROYW1lXShfbGVmdCwgX3RvcCwgc2l6ZVgsIHNpemVZKTtcbiAgICAgICAgLy8gbWlkZGxlLXJpZ2h0XG4gICAgICAgIF9sZWZ0ID0gbGVmdCArIHdpZHRoICsgc2NhbGVPZmZzZXRTaXplWCArIHN0cm9rZVdpZHRoMiArIHBhZGRpbmdYO1xuICAgICAgICBfdG9wID0gdG9wICsgaGVpZ2h0IC8gMiAtIHNjYWxlT2Zmc2V0WTtcbiAgICAgICAgY3R4LmNsZWFyUmVjdChfbGVmdCwgX3RvcCwgc2l6ZVgsIHNpemVZKTtcbiAgICAgICAgY3R4W21ldGhvZE5hbWVdKF9sZWZ0LCBfdG9wLCBzaXplWCwgc2l6ZVkpO1xuICAgICAgICAvLyBtaWRkbGUtbGVmdFxuICAgICAgICBfbGVmdCA9IGxlZnQgLSBzY2FsZU9mZnNldFggLSBzdHJva2VXaWR0aDIgLSBwYWRkaW5nWDtcbiAgICAgICAgX3RvcCA9IHRvcCArIGhlaWdodCAvIDIgLSBzY2FsZU9mZnNldFk7XG4gICAgICAgIGN0eC5jbGVhclJlY3QoX2xlZnQsIF90b3AsIHNpemVYLCBzaXplWSk7XG4gICAgICAgIGN0eFttZXRob2ROYW1lXShfbGVmdCwgX3RvcCwgc2l6ZVgsIHNpemVZKTtcbiAgICAgICAgLy8g57uY5Yi25peL6L2s5o6n5Yi254K5XG4gICAgICAgIGlmICh0aGlzLmhhc1JvdGF0aW5nUG9pbnQpIHtcbiAgICAgICAgICAgIF9sZWZ0ID0gbGVmdCArIHdpZHRoIC8gMiAtIHNjYWxlT2Zmc2V0WDtcbiAgICAgICAgICAgIF90b3AgPVxuICAgICAgICAgICAgICAgIHRvcCAtXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm90YXRpbmdQb2ludE9mZnNldCAvIHRoaXMuc2NhbGVZIC1cbiAgICAgICAgICAgICAgICAgICAgc2l6ZVkgLyAyIC1cbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGgyIC1cbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1k7XG4gICAgICAgICAgICBjdHguY2xlYXJSZWN0KF9sZWZ0LCBfdG9wLCBzaXplWCwgc2l6ZVkpO1xuICAgICAgICAgICAgY3R4W21ldGhvZE5hbWVdKF9sZWZ0LCBfdG9wLCBzaXplWCwgc2l6ZVkpO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkcmF3QXhpcyhjdHgpIHtcbiAgICAgICAgY3R4LnNhdmUoKTtcbiAgICAgICAgY29uc3QgbGVuZ3RoUmF0aW8gPSAxLjU7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLmJvcmRlcldpZHRoO1xuICAgICAgICBjdHguc2V0TGluZURhc2goWzQgKiBsZW5ndGhSYXRpbywgMyAqIGxlbmd0aFJhdGlvXSk7XG4gICAgICAgIC8qKiDnlLvlnZDmoIfovbTnmoTml7blgJnpnIDopoHmioogdHJhbnNmb3JtIOWPmOaNouS4reeahCBzY2FsZSDmlYjmnpzmirXmtojvvIzov5nmoLfmiY3og73nlLvlh7rljp/lp4vlpKflsI/nmoTnur/mnaEgKi9cbiAgICAgICAgY3R4LnNjYWxlKDEgLyB0aGlzLnNjYWxlWCwgMSAvIHRoaXMuc2NhbGVZKTtcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcbiAgICB9XG4gICAgc2V0dXBTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFN0YXRlID0ge307XG4gICAgICAgIHRoaXMuc2F2ZVN0YXRlKCk7XG4gICAgfVxuICAgIC8qKiDkv53lrZjniankvZPlvZPliY3nmoTnirbmgIHliLAgb3JpZ2luYWxTdGF0ZSDkuK0gKi9cbiAgICBzYXZlU3RhdGUoKSB7XG4gICAgICAgIHRoaXMuc3RhdGVQcm9wZXJ0aWVzLmZvckVhY2goKHByb3ApID0+IHtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxTdGF0ZVtwcm9wXSA9IHRoaXNbcHJvcF07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqIOiOt+WPlueJqeS9k+S4reW/g+eCuSAqL1xuICAgIGdldENlbnRlclBvaW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVUb0NlbnRlclBvaW50KG5ldyBQb2ludCh0aGlzLmxlZnQsIHRoaXMudG9wKSwgdGhpcy5vcmlnaW5YLCB0aGlzLm9yaWdpblkpO1xuICAgIH1cbiAgICAvKiog5bCG5Lit5b+D54K556e75Yiw5Y+Y5o2i5Z+654K5ICovXG4gICAgdHJhbnNsYXRlVG9DZW50ZXJQb2ludChwb2ludCwgb3JpZ2luWCwgb3JpZ2luWSkge1xuICAgICAgICBsZXQgY3ggPSBwb2ludC54LCBjeSA9IHBvaW50Lnk7XG4gICAgICAgIGlmIChvcmlnaW5YID09PSBcImxlZnRcIikge1xuICAgICAgICAgICAgY3ggPSBwb2ludC54ICsgdGhpcy5nZXRXaWR0aCgpIC8gMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvcmlnaW5YID09PSBcInJpZ2h0XCIpIHtcbiAgICAgICAgICAgIGN4ID0gcG9pbnQueCAtIHRoaXMuZ2V0V2lkdGgoKSAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9yaWdpblkgPT09IFwidG9wXCIpIHtcbiAgICAgICAgICAgIGN5ID0gcG9pbnQueSArIHRoaXMuZ2V0SGVpZ2h0KCkgLyAyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9yaWdpblkgPT09IFwiYm90dG9tXCIpIHtcbiAgICAgICAgICAgIGN5ID0gcG9pbnQueSAtIHRoaXMuZ2V0SGVpZ2h0KCkgLyAyO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHAgPSBuZXcgUG9pbnQoY3gsIGN5KTtcbiAgICAgICAgaWYgKHRoaXMuYW5nbGUpIHtcbiAgICAgICAgICAgIHJldHVybiBVdGlsLnJvdGF0ZVBvaW50KHAsIHBvaW50LCBVdGlsLmRlZ3JlZXNUb1JhZGlhbnModGhpcy5hbmdsZSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog5bmz56e75Z2Q5qCH57O75Yiw5Lit5b+D54K5XG4gICAgICogQHBhcmFtIGNlbnRlclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcmlnaW5YICBsZWZ0IHwgY2VudGVyIHwgcmlnaHRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3JpZ2luWSAgdG9wIHwgY2VudGVyIHwgYm90dG9tXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICB0cmFuc2xhdGVUb09yaWdpblBvaW50KGNlbnRlciwgb3JpZ2luWCwgb3JpZ2luWSkge1xuICAgICAgICBsZXQgeCA9IGNlbnRlci54LCB5ID0gY2VudGVyLnk7XG4gICAgICAgIC8vIEdldCB0aGUgcG9pbnQgY29vcmRpbmF0ZXNcbiAgICAgICAgaWYgKG9yaWdpblggPT09IFwibGVmdFwiKSB7XG4gICAgICAgICAgICB4ID0gY2VudGVyLnggLSB0aGlzLmdldFdpZHRoKCkgLyAyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9yaWdpblggPT09IFwicmlnaHRcIikge1xuICAgICAgICAgICAgeCA9IGNlbnRlci54ICsgdGhpcy5nZXRXaWR0aCgpIC8gMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3JpZ2luWSA9PT0gXCJ0b3BcIikge1xuICAgICAgICAgICAgeSA9IGNlbnRlci55IC0gdGhpcy5nZXRIZWlnaHQoKSAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob3JpZ2luWSA9PT0gXCJib3R0b21cIikge1xuICAgICAgICAgICAgeSA9IGNlbnRlci55ICsgdGhpcy5nZXRIZWlnaHQoKSAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXBwbHkgdGhlIHJvdGF0aW9uIHRvIHRoZSBwb2ludCAoaXQncyBhbHJlYWR5IHNjYWxlZCBwcm9wZXJseSlcbiAgICAgICAgcmV0dXJuIFV0aWwucm90YXRlUG9pbnQobmV3IFBvaW50KHgsIHkpLCBjZW50ZXIsIFV0aWwuZGVncmVlc1RvUmFkaWFucyh0aGlzLmFuZ2xlKSk7XG4gICAgfVxuICAgIC8qKiDovazmjaLmiJDmnKzlnLDlnZDmoIcgKi9cbiAgICB0b0xvY2FsUG9pbnQocG9pbnQsIG9yaWdpblgsIG9yaWdpblkpIHtcbiAgICAgICAgbGV0IGNlbnRlciA9IHRoaXMuZ2V0Q2VudGVyUG9pbnQoKTtcbiAgICAgICAgbGV0IHgsIHk7XG4gICAgICAgIGlmIChvcmlnaW5YICE9PSB1bmRlZmluZWQgJiYgb3JpZ2luWSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAob3JpZ2luWCA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgICAgICB4ID0gY2VudGVyLnggLSB0aGlzLmdldFdpZHRoKCkgLyAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAob3JpZ2luWCA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICAgICAgeCA9IGNlbnRlci54ICsgdGhpcy5nZXRXaWR0aCgpIC8gMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHggPSBjZW50ZXIueDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcmlnaW5ZID09PSBcInRvcFwiKSB7XG4gICAgICAgICAgICAgICAgeSA9IGNlbnRlci55IC0gdGhpcy5nZXRIZWlnaHQoKSAvIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChvcmlnaW5ZID09PSBcImJvdHRvbVwiKSB7XG4gICAgICAgICAgICAgICAgeSA9IGNlbnRlci55ICsgdGhpcy5nZXRIZWlnaHQoKSAvIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB5ID0gY2VudGVyLnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB4ID0gdGhpcy5sZWZ0O1xuICAgICAgICAgICAgeSA9IHRoaXMudG9wO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBVdGlsLnJvdGF0ZVBvaW50KG5ldyBQb2ludChwb2ludC54LCBwb2ludC55KSwgY2VudGVyLCAtVXRpbC5kZWdyZWVzVG9SYWRpYW5zKHRoaXMuYW5nbGUpKS5zdWJ0cmFjdEVxdWFscyhuZXcgUG9pbnQoeCwgeSkpO1xuICAgIH1cbiAgICAvKiog5qOA5rWL5ZOq5Liq5o6n5Yi254K56KKr54K55Ye75LqGICovXG4gICAgX2ZpbmRUYXJnZXRDb3JuZXIoZSwgb2Zmc2V0KSB7XG4gICAgICAgIGlmICghdGhpcy5oYXNDb250cm9scyB8fCAhdGhpcy5hY3RpdmUpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCBwb2ludGVyID0gVXRpbC5nZXRQb2ludGVyKGUsIHRoaXMuY2FudmFzLnRvcENhbnZhcywgdGhpcy5zY2FsZSksIGV4ID0gcG9pbnRlci54IC0gb2Zmc2V0LmxlZnQsIGV5ID0gcG9pbnRlci55IC0gb2Zmc2V0LnRvcCwgeHBvaW50cywgbGluZXM7XG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5vQ29vcmRzKSB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gXCJtdHJcIiAmJiAhdGhpcy5oYXNSb3RhdGluZ1BvaW50KSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaW5lcyA9IHRoaXMuX2dldEltYWdlTGluZXModGhpcy5vQ29vcmRzW2ldLmNvcm5lcik7XG4gICAgICAgICAgICAvLyBkZWJ1Z2dlciDnu5jliLbniankvZPmjqfliLbngrnnmoTlm5vkuKrpobbngrlcbiAgICAgICAgICAgIC8vIHRoaXMuY2FudmFzLmNvbnRleHRUb3AuZmlsbFJlY3QobGluZXMuYm90dG9tbGluZS5kLngsIGxpbmVzLmJvdHRvbWxpbmUuZC55LCAyLCAyKTtcbiAgICAgICAgICAgIC8vIHRoaXMuY2FudmFzLmNvbnRleHRUb3AuZmlsbFJlY3QobGluZXMuYm90dG9tbGluZS5vLngsIGxpbmVzLmJvdHRvbWxpbmUuby55LCAyLCAyKTtcbiAgICAgICAgICAgIC8vIHRoaXMuY2FudmFzLmNvbnRleHRUb3AuZmlsbFJlY3QobGluZXMubGVmdGxpbmUuZC54LCBsaW5lcy5sZWZ0bGluZS5kLnksIDIsIDIpO1xuICAgICAgICAgICAgLy8gdGhpcy5jYW52YXMuY29udGV4dFRvcC5maWxsUmVjdChsaW5lcy5sZWZ0bGluZS5vLngsIGxpbmVzLmxlZnRsaW5lLm8ueSwgMiwgMik7XG4gICAgICAgICAgICAvLyB0aGlzLmNhbnZhcy5jb250ZXh0VG9wLmZpbGxSZWN0KGxpbmVzLnRvcGxpbmUuZC54LCBsaW5lcy50b3BsaW5lLmQueSwgMiwgMik7XG4gICAgICAgICAgICAvLyB0aGlzLmNhbnZhcy5jb250ZXh0VG9wLmZpbGxSZWN0KGxpbmVzLnRvcGxpbmUuby54LCBsaW5lcy50b3BsaW5lLm8ueSwgMiwgMik7XG4gICAgICAgICAgICAvLyB0aGlzLmNhbnZhcy5jb250ZXh0VG9wLmZpbGxSZWN0KGxpbmVzLnJpZ2h0bGluZS5kLngsIGxpbmVzLnJpZ2h0bGluZS5kLnksIDIsIDIpO1xuICAgICAgICAgICAgLy8gdGhpcy5jYW52YXMuY29udGV4dFRvcC5maWxsUmVjdChsaW5lcy5yaWdodGxpbmUuby54LCBsaW5lcy5yaWdodGxpbmUuby55LCAyLCAyKTtcbiAgICAgICAgICAgIHhwb2ludHMgPSB0aGlzLl9maW5kQ3Jvc3NQb2ludHMoZXgsIGV5LCBsaW5lcyk7XG4gICAgICAgICAgICBpZiAoeHBvaW50cyAlIDIgPT09IDEgJiYgeHBvaW50cyAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLyoqIOiOt+WPluWMheWbtOebkueahOWbm+adoei+uSAqL1xuICAgIF9nZXRJbWFnZUxpbmVzKGNvcm5lcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdG9wbGluZToge1xuICAgICAgICAgICAgICAgIG86IGNvcm5lci50bCxcbiAgICAgICAgICAgICAgICBkOiBjb3JuZXIudHIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmlnaHRsaW5lOiB7XG4gICAgICAgICAgICAgICAgbzogY29ybmVyLnRyLFxuICAgICAgICAgICAgICAgIGQ6IGNvcm5lci5icixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib3R0b21saW5lOiB7XG4gICAgICAgICAgICAgICAgbzogY29ybmVyLmJyLFxuICAgICAgICAgICAgICAgIGQ6IGNvcm5lci5ibCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWZ0bGluZToge1xuICAgICAgICAgICAgICAgIG86IGNvcm5lci5ibCxcbiAgICAgICAgICAgICAgICBkOiBjb3JuZXIudGwsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlsITnur/mo4DmtYvms5XvvJrku6XpvKDmoIflnZDmoIfngrnkuLrlj4LnhafvvIzmsLTlubPlkJHlj7PlgZrkuIDmnaHlsITnur/vvIzmsYLlnZDmoIfngrnkuI7lpJrmnaHovrnnmoTkuqTngrnkuKrmlbBcbiAgICAgKiDlpoLmnpzlkozniankvZPnm7jkuqTnmoTkuKrmlbDkuLrlgbbmlbDngrnliJnngrnlnKjniankvZPlpJbpg6jvvJvlpoLmnpzkuLrlpYfmlbDngrnliJnngrnlnKjlhoXpg6hcbiAgICAgKiDkuI3ov4cgZmFicmljIOeahOeCuemAieWkmui+ueW9oumDveaYr+eUqOS6juWMheWbtOebku+8jOS5n+WwseaYr+efqeW9ou+8jOaJgOS7peivpeaWueazleaYr+S4k+mXqOmSiOWvueefqeW9oueahO+8jOW5tuS4lOmSiOWvueefqeW9ouWBmuS6huS4gOS6m+S8mOWMllxuICAgICAqL1xuICAgIF9maW5kQ3Jvc3NQb2ludHMoZXgsIGV5LCBsaW5lcykge1xuICAgICAgICBsZXQgYjEsIC8vIOWwhOe6v+eahOaWnOeOh1xuICAgICAgICBiMiwgLy8g6L6555qE5pac546HXG4gICAgICAgIGExLCBhMiwgeGksIC8vIOWwhOe6v+S4jui+ueeahOS6pOeCuVxuICAgICAgICAvLyB5aSwgLy8g5bCE57q/5LiO6L6555qE5Lqk54K5XG4gICAgICAgIHhjb3VudCA9IDAsIGlMaW5lOyAvLyDlvZPliY3ovrlcbiAgICAgICAgLy8g6YGN5Y6G5YyF5Zu055uS55qE5Zub5p2h6L65XG4gICAgICAgIGZvciAobGV0IGxpbmVLZXkgaW4gbGluZXMpIHtcbiAgICAgICAgICAgIGlMaW5lID0gbGluZXNbbGluZUtleV07XG4gICAgICAgICAgICAvLyDkvJjljJYx77ya5aaC5p6c6L6555qE5Lik5Liq56uv54K555qEIHkg5YC86YO95bCP5LqO6byg5qCH54K555qEIHkg5YC877yM5YiZ6Lez6L+HXG4gICAgICAgICAgICBpZiAoaUxpbmUuby55IDwgZXkgJiYgaUxpbmUuZC55IDwgZXkpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAvLyDkvJjljJYy77ya5aaC5p6c6L6555qE5Lik5Liq56uv54K555qEIHkg5YC86YO95aSn5LqO6byg5qCH54K555qEIHkg5YC877yM5YiZ6Lez6L+HXG4gICAgICAgICAgICBpZiAoaUxpbmUuby55ID49IGV5ICYmIGlMaW5lLmQueSA+PSBleSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIC8vIOS8mOWMljPvvJrlpoLmnpzovrnmmK/kuIDmnaHlnoLnur9cbiAgICAgICAgICAgIGlmIChpTGluZS5vLnggPT09IGlMaW5lLmQueCAmJiBpTGluZS5vLnggPj0gZXgpIHtcbiAgICAgICAgICAgICAgICB4aSA9IGlMaW5lLm8ueDtcbiAgICAgICAgICAgICAgICAvLyB5aSA9IGV5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g566A5Y2V6K6h566X5LiL5bCE57q/5LiO6L6555qE5Lqk54K577yM55yL5byP5a2Q5a655piT5pmV77yM5bu66K6u6Ieq5bex5omL5Yqo566X5LiA5LiLXG4gICAgICAgICAgICAgICAgYjEgPSAwO1xuICAgICAgICAgICAgICAgIGIyID0gKGlMaW5lLmQueSAtIGlMaW5lLm8ueSkgLyAoaUxpbmUuZC54IC0gaUxpbmUuby54KTtcbiAgICAgICAgICAgICAgICBhMSA9IGV5IC0gYjEgKiBleDtcbiAgICAgICAgICAgICAgICBhMiA9IGlMaW5lLm8ueSAtIGIyICogaUxpbmUuby54O1xuICAgICAgICAgICAgICAgIHhpID0gLShhMSAtIGEyKSAvIChiMSAtIGIyKTtcbiAgICAgICAgICAgICAgICAvLyB5aSA9IGExICsgYjEgKiB4aTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOWPqumcgOimgeiuoeaVsCB4aSA+PSBleCDnmoTmg4XlhrVcbiAgICAgICAgICAgIGlmICh4aSA+PSBleCkge1xuICAgICAgICAgICAgICAgIHhjb3VudCArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5LyY5YyWNO+8muWboOS4uiBmYWJyaWMg5Lit55qE5aSa6L655b2i5Y+q6ZyA6KaB55So5Yiw55+p5b2i77yM5omA5Lul5qC55o2u55+p5b2i55qE54m56LSo77yM6aG25aSa5Y+q5pyJ5Lik5Liq5Lqk54K577yM5omA5Lul5oiR5Lus5Y+v5Lul5o+Q5YmN57uT5p2f5b6q546vXG4gICAgICAgICAgICBpZiAoeGNvdW50ID09PSAyKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHhjb3VudDtcbiAgICB9XG4gICAgLyoqIOeJqeS9k+WKqOeUuyAqL1xuICAgIGFuaW1hdGUocHJvcHMsIGFuaW1hdGVPcHRpb25zKSB7XG4gICAgICAgIGxldCBwcm9wc1RvQW5pbWF0ZSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBwcm9wIGluIHByb3BzKSB7XG4gICAgICAgICAgICBwcm9wc1RvQW5pbWF0ZS5wdXNoKHByb3ApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxlbiA9IHByb3BzVG9BbmltYXRlLmxlbmd0aDtcbiAgICAgICAgcHJvcHNUb0FuaW1hdGUuZm9yRWFjaCgocHJvcCwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2tpcENhbGxiYWNrcyA9IGkgIT09IGxlbiAtIDE7XG4gICAgICAgICAgICB0aGlzLl9hbmltYXRlKHByb3AsIHByb3BzW3Byb3BdLCBhbmltYXRlT3B0aW9ucywgc2tpcENhbGxiYWNrcyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLyoqXG4gICAgICog6K6p54mp5L2T55yf5q2j5Yqo6LW35p2lXG4gICAgICogQHBhcmFtIHByb3BlcnR5IOeJqeS9k+mcgOimgeWKqOeUu+eahOWxnuaAp1xuICAgICAqIEBwYXJhbSB0byDniankvZPlsZ7mgKfnmoTmnIDnu4jlgLxcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyDkuIDkupvliqjnlLvpgInpoblcbiAgICAgKiBAcGFyYW0gc2tpcENhbGxiYWNrcyDmmK/lkKbot7Pov4fnu5jliLZcbiAgICAgKi9cbiAgICBfYW5pbWF0ZShwcm9wZXJ0eSwgdG8sIG9wdGlvbnMgPSB7fSwgc2tpcENhbGxiYWNrcykge1xuICAgICAgICBvcHRpb25zID0gVXRpbC5jbG9uZShvcHRpb25zKTtcbiAgICAgICAgbGV0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuZ2V0KHByb3BlcnR5KTtcbiAgICAgICAgaWYgKCFvcHRpb25zLmZyb20pXG4gICAgICAgICAgICBvcHRpb25zLmZyb20gPSBjdXJyZW50VmFsdWU7XG4gICAgICAgIHRvID0gdG8udG9TdHJpbmcoKTtcbiAgICAgICAgaWYgKH50by5pbmRleE9mKFwiPVwiKSkge1xuICAgICAgICAgICAgdG8gPSBjdXJyZW50VmFsdWUgKyBwYXJzZUZsb2F0KHRvLnJlcGxhY2UoXCI9XCIsIFwiXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRvID0gcGFyc2VGbG9hdCh0byk7XG4gICAgICAgIH1cbiAgICAgICAgVXRpbC5hbmltYXRlKHtcbiAgICAgICAgICAgIHN0YXJ0VmFsdWU6IG9wdGlvbnMuZnJvbSxcbiAgICAgICAgICAgIGVuZFZhbHVlOiB0byxcbiAgICAgICAgICAgIGJ5VmFsdWU6IG9wdGlvbnMuYnksXG4gICAgICAgICAgICBlYXNpbmc6IG9wdGlvbnMuZWFzaW5nLFxuICAgICAgICAgICAgZHVyYXRpb246IG9wdGlvbnMuZHVyYXRpb24sXG4gICAgICAgICAgICBhYm9ydDogb3B0aW9ucy5hYm9ydCAmJiAoKCkgPT4gb3B0aW9ucy5hYm9ydC5jYWxsKHRoaXMpKSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldChwcm9wZXJ0eSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChza2lwQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5vbkNoYW5nZSAmJiBvcHRpb25zLm9uQ2hhbmdlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChza2lwQ2FsbGJhY2tzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDb29yZHMoKTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLm9uQ29tcGxldGUgJiYgb3B0aW9ucy5vbkNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc2V0QWN0aXZlKGFjdGl2ZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gISFhY3RpdmU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmoLnmja7niankvZPnmoQgb3JpZ2luIOadpeiuvue9rueJqeS9k+eahOS9jee9rlxuICAgICAqIEBtZXRob2Qgc2V0UG9zaXRpb25CeU9yaWdpblxuICAgICAqIEBwYXJhbSB7UG9pbnR9IHBvc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcmlnaW5YIGxlZnQgfCBjZW50ZXIgfCByaWdodFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBvcmlnaW5ZIHRvcCB8IGNlbnRlciB8IGJvdHRvbVxuICAgICAqL1xuICAgIHNldFBvc2l0aW9uQnlPcmlnaW4ocG9zLCBvcmlnaW5YLCBvcmlnaW5ZKSB7XG4gICAgICAgIGxldCBjZW50ZXIgPSB0aGlzLnRyYW5zbGF0ZVRvQ2VudGVyUG9pbnQocG9zLCBvcmlnaW5YLCBvcmlnaW5ZKTtcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy50cmFuc2xhdGVUb09yaWdpblBvaW50KGNlbnRlciwgdGhpcy5vcmlnaW5YLCB0aGlzLm9yaWdpblkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhg5pu05paw57yp5pS+55qE54mp5L2T5L2N572uOlske3Bvc2l0aW9uLnh977yMJHtwb3NpdGlvbi55fV1gKTtcbiAgICAgICAgdGhpcy5zZXQoXCJsZWZ0XCIsIHBvc2l0aW9uLngpO1xuICAgICAgICB0aGlzLnNldChcInRvcFwiLCBwb3NpdGlvbi55KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHRvIGxlZnQsIGNlbnRlciwgcmlnaHQg5Lit55qE5LiA5LiqXG4gICAgICovXG4gICAgYWRqdXN0UG9zaXRpb24odG8pIHtcbiAgICAgICAgbGV0IGFuZ2xlID0gVXRpbC5kZWdyZWVzVG9SYWRpYW5zKHRoaXMuYW5nbGUpO1xuICAgICAgICBsZXQgaHlwb3RIYWxmID0gdGhpcy5nZXRXaWR0aCgpIC8gMjtcbiAgICAgICAgbGV0IHhIYWxmID0gTWF0aC5jb3MoYW5nbGUpICogaHlwb3RIYWxmO1xuICAgICAgICBsZXQgeUhhbGYgPSBNYXRoLnNpbihhbmdsZSkgKiBoeXBvdEhhbGY7XG4gICAgICAgIGxldCBoeXBvdEZ1bGwgPSB0aGlzLmdldFdpZHRoKCk7XG4gICAgICAgIGxldCB4RnVsbCA9IE1hdGguY29zKGFuZ2xlKSAqIGh5cG90RnVsbDtcbiAgICAgICAgbGV0IHlGdWxsID0gTWF0aC5zaW4oYW5nbGUpICogaHlwb3RGdWxsO1xuICAgICAgICBpZiAoKHRoaXMub3JpZ2luWCA9PT0gXCJjZW50ZXJcIiAmJiB0byA9PT0gXCJsZWZ0XCIpIHx8XG4gICAgICAgICAgICAodGhpcy5vcmlnaW5YID09PSBcInJpZ2h0XCIgJiYgdG8gPT09IFwiY2VudGVyXCIpKSB7XG4gICAgICAgICAgICAvLyBtb3ZlIGhhbGYgbGVmdFxuICAgICAgICAgICAgdGhpcy5sZWZ0IC09IHhIYWxmO1xuICAgICAgICAgICAgdGhpcy50b3AgLT0geUhhbGY7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKHRoaXMub3JpZ2luWCA9PT0gXCJsZWZ0XCIgJiYgdG8gPT09IFwiY2VudGVyXCIpIHx8XG4gICAgICAgICAgICAodGhpcy5vcmlnaW5YID09PSBcImNlbnRlclwiICYmIHRvID09PSBcInJpZ2h0XCIpKSB7XG4gICAgICAgICAgICAvLyBtb3ZlIGhhbGYgcmlnaHRcbiAgICAgICAgICAgIHRoaXMubGVmdCArPSB4SGFsZjtcbiAgICAgICAgICAgIHRoaXMudG9wICs9IHlIYWxmO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMub3JpZ2luWCA9PT0gXCJsZWZ0XCIgJiYgdG8gPT09IFwicmlnaHRcIikge1xuICAgICAgICAgICAgLy8gbW92ZSBmdWxsIHJpZ2h0XG4gICAgICAgICAgICB0aGlzLmxlZnQgKz0geEZ1bGw7XG4gICAgICAgICAgICB0aGlzLnRvcCArPSB5RnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLm9yaWdpblggPT09IFwicmlnaHRcIiAmJiB0byA9PT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgIC8vIG1vdmUgZnVsbCBsZWZ0XG4gICAgICAgICAgICB0aGlzLmxlZnQgLT0geEZ1bGw7XG4gICAgICAgICAgICB0aGlzLnRvcCAtPSB5RnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldENvb3JkcygpO1xuICAgICAgICB0aGlzLm9yaWdpblggPSB0bztcbiAgICB9XG4gICAgaGFzU3RhdGVDaGFuZ2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZVByb3BlcnRpZXMuc29tZShmdW5jdGlvbiAocHJvcCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbcHJvcF0gIT09IHRoaXMub3JpZ2luYWxTdGF0ZVtwcm9wXTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOeJqeS9k+S4juahhumAieWMuuWfn+aYr+WQpuebuOS6pO+8jOeUqOahhumAieWMuuWfn+eahOWbm+adoei+ueWIhuWIq+S4jueJqeS9k+eahOWbm+adoei+ueaxguS6pFxuICAgICAqIEBwYXJhbSB7UG9pbnR9IHNlbGVjdGlvblRMIOaLluiTneahhumAieWMuuWfn+W3puS4iuinkueahOeCuVxuICAgICAqIEBwYXJhbSB7UG9pbnR9IHNlbGVjdGlvbkJSIOaLluiTneahhumAieWMuuWfn+WPs+S4i+inkueahOeCuVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGludGVyc2VjdHNXaXRoUmVjdChzZWxlY3Rpb25UTCwgc2VsZWN0aW9uQlIpIHtcbiAgICAgICAgbGV0IG9Db29yZHMgPSB0aGlzLm9Db29yZHMsIHRsID0gbmV3IFBvaW50KG9Db29yZHMudGwueCwgb0Nvb3Jkcy50bC55KSwgdHIgPSBuZXcgUG9pbnQob0Nvb3Jkcy50ci54LCBvQ29vcmRzLnRyLnkpLCBibCA9IG5ldyBQb2ludChvQ29vcmRzLmJsLngsIG9Db29yZHMuYmwueSksIGJyID0gbmV3IFBvaW50KG9Db29yZHMuYnIueCwgb0Nvb3Jkcy5ici55KTtcbiAgICAgICAgbGV0IGludGVyc2VjdGlvbiA9IEludGVyc2VjdGlvbi5pbnRlcnNlY3RQb2x5Z29uUmVjdGFuZ2xlKFt0bCwgdHIsIGJyLCBibF0sIHNlbGVjdGlvblRMLCBzZWxlY3Rpb25CUik7XG4gICAgICAgIHJldHVybiBpbnRlcnNlY3Rpb24uc3RhdHVzID09PSBcIkludGVyc2VjdGlvblwiO1xuICAgIH1cbiAgICAvLyBpc0NvbnRhaW5lZFdpdGhpbk9iamVjdChvdGhlcikge1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5pc0NvbnRhaW5lZFdpdGhpblJlY3Qob3RoZXIub0Nvb3Jkcy50bCwgb3RoZXIub0Nvb3Jkcy5icik7XG4gICAgLy8gfVxuICAgIC8qKlxuICAgICAqIOeJqeS9k+aYr+WQpuiiq+ahhumAieWMuuWfn+WMheWQq1xuICAgICAqIEBwYXJhbSB7UG9pbnR9IHNlbGVjdGlvblRMIOaLluiTneahhumAieWMuuWfn+W3puS4iuinkueahOeCuVxuICAgICAqIEBwYXJhbSB7UG9pbnR9IHNlbGVjdGlvbkJSIOaLluiTneahhumAieWMuuWfn+WPs+S4i+inkueahOeCuVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzQ29udGFpbmVkV2l0aGluUmVjdChzZWxlY3Rpb25UTCwgc2VsZWN0aW9uQlIpIHtcbiAgICAgICAgbGV0IG9Db29yZHMgPSB0aGlzLm9Db29yZHMsIHRsID0gbmV3IFBvaW50KG9Db29yZHMudGwueCwgb0Nvb3Jkcy50bC55KSwgdHIgPSBuZXcgUG9pbnQob0Nvb3Jkcy50ci54LCBvQ29vcmRzLnRyLnkpLCBibCA9IG5ldyBQb2ludChvQ29vcmRzLmJsLngsIG9Db29yZHMuYmwueSk7XG4gICAgICAgIHJldHVybiAodGwueCA+IHNlbGVjdGlvblRMLnggJiZcbiAgICAgICAgICAgIHRyLnggPCBzZWxlY3Rpb25CUi54ICYmXG4gICAgICAgICAgICB0bC55ID4gc2VsZWN0aW9uVEwueSAmJlxuICAgICAgICAgICAgYmwueSA8IHNlbGVjdGlvbkJSLnkpO1xuICAgIH1cbiAgICAvKiog56Gu5L+d57yp5pS+5YC85pyJ5pWI77yM5pyJ5oSP5LmJICovXG4gICAgLy8gX2NvbnN0cmFpblNjYWxlKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgIC8vICAgICBpZiAoTWF0aC5hYnModmFsdWUpIDwgdGhpcy5taW5TY2FsZUxpbWl0KSB7XG4gICAgLy8gICAgICAgICBpZiAodmFsdWUgPCAwKSB7XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIC10aGlzLm1pblNjYWxlTGltaXQ7XG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIHJldHVybiB0aGlzLm1pblNjYWxlTGltaXQ7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgcmV0dXJuIHZhbHVlO1xuICAgIC8vIH1cbiAgICBnZXRWaWV3cG9ydFRyYW5zZm9ybSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FudmFzICYmIHRoaXMuY2FudmFzLnZpZXdwb3J0VHJhbnNmb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYW52YXMudmlld3BvcnRUcmFuc2Zvcm07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFsxLCAwLCAwLCAxLCAwLCAwXTtcbiAgICB9XG4gICAgX2NhbGN1bGF0ZUN1cnJlbnREaW1lbnNpb25zKCkge1xuICAgICAgICBsZXQgdnB0ID0gdGhpcy5nZXRWaWV3cG9ydFRyYW5zZm9ybSgpLCBkaW0gPSB0aGlzLl9nZXRUcmFuc2Zvcm1lZERpbWVuc2lvbnMoKSwgdyA9IGRpbS54LCBoID0gZGltLnk7XG4gICAgICAgIHcgKz0gMiAqIHRoaXMucGFkZGluZztcbiAgICAgICAgaCArPSAyICogdGhpcy5wYWRkaW5nO1xuICAgICAgICByZXR1cm4gVXRpbC50cmFuc2Zvcm1Qb2ludChuZXcgUG9pbnQodywgaCksIHZwdCwgdHJ1ZSk7XG4gICAgfVxuICAgIC8qKiDojrflj5bniankvZPmsqHmnInlj5jmjaLml7bnmoTlpKflsI/vvIzljIXmi6wgc3Ryb2tlV2lkdGgg55qEIDFweCAqL1xuICAgIF9nZXROb25UcmFuc2Zvcm1lZERpbWVuc2lvbnMoKSB7XG4gICAgICAgIGxldCBzdHJva2VXaWR0aCA9IHRoaXMuc3Ryb2tlV2lkdGgsIHcgPSB0aGlzLndpZHRoLCBoID0gdGhpcy5oZWlnaHQsIGFkZFN0cm9rZVRvVyA9IHRydWUsIGFkZFN0cm9rZVRvSCA9IHRydWU7XG4gICAgICAgIGlmIChhZGRTdHJva2VUb0gpIHtcbiAgICAgICAgICAgIGggKz0gaCA8IDAgPyAtc3Ryb2tlV2lkdGggOiBzdHJva2VXaWR0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWRkU3Ryb2tlVG9XKSB7XG4gICAgICAgICAgICB3ICs9IHcgPCAwID8gLXN0cm9rZVdpZHRoIDogc3Ryb2tlV2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgeDogdywgeTogaCB9O1xuICAgIH1cbiAgICBfZ2V0VHJhbnNmb3JtZWREaW1lbnNpb25zKHNrZXdYID0gMCwgc2tld1kgPSAwKSB7XG4gICAgICAgIC8vIGlmICh0eXBlb2Ygc2tld1ggPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vICAgICBza2V3WCA9IHRoaXMuc2tld1g7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYgKHR5cGVvZiBza2V3WSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gICAgIHNrZXdZID0gdGhpcy5za2V3WTtcbiAgICAgICAgLy8gfVxuICAgICAgICBsZXQgZGltZW5zaW9ucyA9IHRoaXMuX2dldE5vblRyYW5zZm9ybWVkRGltZW5zaW9ucygpLCBkaW1YID0gZGltZW5zaW9ucy54IC8gMiwgZGltWSA9IGRpbWVuc2lvbnMueSAvIDIsIHBvaW50cyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB4OiAtZGltWCxcbiAgICAgICAgICAgICAgICB5OiAtZGltWSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeDogZGltWCxcbiAgICAgICAgICAgICAgICB5OiAtZGltWSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeDogLWRpbVgsXG4gICAgICAgICAgICAgICAgeTogZGltWSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgeDogZGltWCxcbiAgICAgICAgICAgICAgICB5OiBkaW1ZLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSwgaSwgdHJhbnNmb3JtTWF0cml4ID0gdGhpcy5fY2FsY0RpbWVuc2lvbnNUcmFuc2Zvcm1NYXRyaXgoc2tld1gsIHNrZXdZLCBmYWxzZSksIGJib3g7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBvaW50c1tpXSA9IFV0aWwudHJhbnNmb3JtUG9pbnQocG9pbnRzW2ldLCB0cmFuc2Zvcm1NYXRyaXgpO1xuICAgICAgICB9XG4gICAgICAgIGJib3ggPSBVdGlsLm1ha2VCb3VuZGluZ0JveEZyb21Qb2ludHMocG9pbnRzKTtcbiAgICAgICAgcmV0dXJuIHsgeDogYmJveC53aWR0aCwgeTogYmJveC5oZWlnaHQgfTtcbiAgICB9XG4gICAgX2NhbGNEaW1lbnNpb25zVHJhbnNmb3JtTWF0cml4KHNrZXdYLCBza2V3WSwgZmxpcHBpbmcpIHtcbiAgICAgICAgbGV0IHNrZXdNYXRyaXhYID0gWzEsIDAsIE1hdGgudGFuKFV0aWwuZGVncmVlc1RvUmFkaWFucyhza2V3WCkpLCAxXSwgc2tld01hdHJpeFkgPSBbMSwgTWF0aC50YW4oVXRpbC5kZWdyZWVzVG9SYWRpYW5zKHNrZXdZKSksIDAsIDFdLCBzY2FsZVggPSB0aGlzLnNjYWxlWCwgc2NhbGVZID0gdGhpcy5zY2FsZVksIHNjYWxlTWF0cml4ID0gW3NjYWxlWCwgMCwgMCwgc2NhbGVZXSwgbSA9IFV0aWwubXVsdGlwbHlUcmFuc2Zvcm1NYXRyaWNlcyhzY2FsZU1hdHJpeCwgc2tld01hdHJpeFgsIHRydWUpO1xuICAgICAgICByZXR1cm4gVXRpbC5tdWx0aXBseVRyYW5zZm9ybU1hdHJpY2VzKG0sIHNrZXdNYXRyaXhZLCB0cnVlKTtcbiAgICB9XG4gICAgLy8gc2V0Q29vcmRzKCkge1xuICAgIC8vICAgICBsZXQgdGhldGEgPSBVdGlsLmRlZ3JlZXNUb1JhZGlhbnModGhpcy5hbmdsZSksXG4gICAgLy8gICAgICAgICB2cHQgPSB0aGlzLmdldFZpZXdwb3J0VHJhbnNmb3JtKCksXG4gICAgLy8gICAgICAgICBkaW0gPSB0aGlzLl9jYWxjdWxhdGVDdXJyZW50RGltZW5zaW9ucygpLFxuICAgIC8vICAgICAgICAgY3VycmVudFdpZHRoID0gZGltLngsXG4gICAgLy8gICAgICAgICBjdXJyZW50SGVpZ2h0ID0gZGltLnk7XG4gICAgLy8gICAgIC8vIElmIHdpZHRoIGlzIG5lZ2F0aXZlLCBtYWtlIHBvc3RpdmUuIEZpeGVzIHBhdGggc2VsZWN0aW9uIGlzc3VlXG4gICAgLy8gICAgIC8vIGlmIChjdXJyZW50V2lkdGggPCAwKSB7XG4gICAgLy8gICAgIC8vICAgICBjdXJyZW50V2lkdGggPSBNYXRoLmFicyhjdXJyZW50V2lkdGgpO1xuICAgIC8vICAgICAvLyB9XG4gICAgLy8gICAgIGxldCBzaW5UaCA9IE1hdGguc2luKHRoZXRhKSxcbiAgICAvLyAgICAgICAgIGNvc1RoID0gTWF0aC5jb3ModGhldGEpLFxuICAgIC8vICAgICAgICAgX2FuZ2xlID0gY3VycmVudFdpZHRoID4gMCA/IE1hdGguYXRhbihjdXJyZW50SGVpZ2h0IC8gY3VycmVudFdpZHRoKSA6IDAsXG4gICAgLy8gICAgICAgICBfaHlwb3RlbnVzZSA9IGN1cnJlbnRXaWR0aCAvIE1hdGguY29zKF9hbmdsZSkgLyAyLFxuICAgIC8vICAgICAgICAgb2Zmc2V0WCA9IE1hdGguY29zKF9hbmdsZSArIHRoZXRhKSAqIF9oeXBvdGVudXNlLFxuICAgIC8vICAgICAgICAgb2Zmc2V0WSA9IE1hdGguc2luKF9hbmdsZSArIHRoZXRhKSAqIF9oeXBvdGVudXNlLFxuICAgIC8vICAgICAgICAgLy8gb2Zmc2V0IGFkZGVkIGZvciByb3RhdGUgYW5kIHNjYWxlIGFjdGlvbnNcbiAgICAvLyAgICAgICAgIGNvb3JkcyA9IFV0aWwudHJhbnNmb3JtUG9pbnQodGhpcy5nZXRDZW50ZXJQb2ludCgpLCB2cHQpLFxuICAgIC8vICAgICAgICAgdGwgPSBuZXcgUG9pbnQoY29vcmRzLnggLSBvZmZzZXRYLCBjb29yZHMueSAtIG9mZnNldFkpLFxuICAgIC8vICAgICAgICAgdHIgPSBuZXcgUG9pbnQodGwueCArIGN1cnJlbnRXaWR0aCAqIGNvc1RoLCB0bC55ICsgY3VycmVudFdpZHRoICogc2luVGgpLFxuICAgIC8vICAgICAgICAgYmwgPSBuZXcgUG9pbnQodGwueCAtIGN1cnJlbnRIZWlnaHQgKiBzaW5UaCwgdGwueSArIGN1cnJlbnRIZWlnaHQgKiBjb3NUaCksXG4gICAgLy8gICAgICAgICBiciA9IG5ldyBQb2ludChjb29yZHMueCArIG9mZnNldFgsIGNvb3Jkcy55ICsgb2Zmc2V0WSksXG4gICAgLy8gICAgICAgICBtbCA9IG5ldyBQb2ludCgodGwueCArIGJsLngpIC8gMiwgKHRsLnkgKyBibC55KSAvIDIpLFxuICAgIC8vICAgICAgICAgbXQgPSBuZXcgUG9pbnQoKHRyLnggKyB0bC54KSAvIDIsICh0ci55ICsgdGwueSkgLyAyKSxcbiAgICAvLyAgICAgICAgIG1yID0gbmV3IFBvaW50KChici54ICsgdHIueCkgLyAyLCAoYnIueSArIHRyLnkpIC8gMiksXG4gICAgLy8gICAgICAgICBtYiA9IG5ldyBQb2ludCgoYnIueCArIGJsLngpIC8gMiwgKGJyLnkgKyBibC55KSAvIDIpLFxuICAgIC8vICAgICAgICAgbXRyID0gbmV3IFBvaW50KG10LnggKyBzaW5UaCAqIHRoaXMucm90YXRpbmdQb2ludE9mZnNldCwgbXQueSAtIGNvc1RoICogdGhpcy5yb3RhdGluZ1BvaW50T2Zmc2V0KTtcbiAgICAvLyAgICAgY29uc29sZS5sb2coc2luVGgsIGNvc1RoLCBtdCwgbXRyKTtcbiAgICAvLyAgICAgLy8gbGV0IG10ciA9IHtcbiAgICAvLyAgICAgLy8gICAgICAgICAgICAgeDogdGwueCArICh0aGlzLmN1cnJlbnRXaWR0aCAvIDIpICogY29zVGgsXG4gICAgLy8gICAgIC8vICAgICAgICAgICAgIHk6IHRsLnkgKyAodGhpcy5jdXJyZW50V2lkdGggLyAyKSAqIHNpblRoLFxuICAgIC8vICAgICAvLyAgICAgICAgIH07XG4gICAgLy8gICAgIC8vIGRlYnVnZ2luZ1xuICAgIC8vICAgICAvKiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICAgICBjYW52YXMuY29udGV4dFRvcC5maWxsU3R5bGUgPSAnZ3JlZW4nO1xuICAgIC8vICAgICAgICBjYW52YXMuY29udGV4dFRvcC5maWxsUmVjdChtYi54LCBtYi55LCAzLCAzKTtcbiAgICAvLyAgICAgICAgY2FudmFzLmNvbnRleHRUb3AuZmlsbFJlY3QoYmwueCwgYmwueSwgMywgMyk7XG4gICAgLy8gICAgICAgIGNhbnZhcy5jb250ZXh0VG9wLmZpbGxSZWN0KGJyLngsIGJyLnksIDMsIDMpO1xuICAgIC8vICAgICAgICBjYW52YXMuY29udGV4dFRvcC5maWxsUmVjdCh0bC54LCB0bC55LCAzLCAzKTtcbiAgICAvLyAgICAgICAgY2FudmFzLmNvbnRleHRUb3AuZmlsbFJlY3QodHIueCwgdHIueSwgMywgMyk7XG4gICAgLy8gICAgICAgIGNhbnZhcy5jb250ZXh0VG9wLmZpbGxSZWN0KG1sLngsIG1sLnksIDMsIDMpO1xuICAgIC8vICAgICAgICBjYW52YXMuY29udGV4dFRvcC5maWxsUmVjdChtci54LCBtci55LCAzLCAzKTtcbiAgICAvLyAgICAgICAgY2FudmFzLmNvbnRleHRUb3AuZmlsbFJlY3QobXQueCwgbXQueSwgMywgMyk7XG4gICAgLy8gICAgICAgIGNhbnZhcy5jb250ZXh0VG9wLmZpbGxSZWN0KG10ci54LCBtdHIueSwgMywgMyk7XG4gICAgLy8gICAgICB9LCA1MCk7ICovXG4gICAgLy8gICAgIHRoaXMub0Nvb3JkcyA9IHtcbiAgICAvLyAgICAgICAgIC8vIGNvcm5lcnNcbiAgICAvLyAgICAgICAgIHRsLFxuICAgIC8vICAgICAgICAgdHIsXG4gICAgLy8gICAgICAgICBicixcbiAgICAvLyAgICAgICAgIGJsLFxuICAgIC8vICAgICAgICAgLy8gbWlkZGxlXG4gICAgLy8gICAgICAgICBtbCxcbiAgICAvLyAgICAgICAgIG10LFxuICAgIC8vICAgICAgICAgbXIsXG4gICAgLy8gICAgICAgICBtYixcbiAgICAvLyAgICAgICAgIC8vIHJvdGF0aW5nIHBvaW50XG4gICAgLy8gICAgICAgICBtdHIsXG4gICAgLy8gICAgIH07XG4gICAgLy8gICAgIC8vIHNldCBjb29yZGluYXRlcyBvZiB0aGUgZHJhZ2dhYmxlIGJveGVzIGluIHRoZSBjb3JuZXJzIHVzZWQgdG8gc2NhbGUvcm90YXRlIHRoZSBpbWFnZVxuICAgIC8vICAgICB0aGlzLl9zZXRDb3JuZXJDb29yZHMgJiYgdGhpcy5fc2V0Q29ybmVyQ29vcmRzKCk7XG4gICAgLy8gICAgIHJldHVybiB0aGlzO1xuICAgIC8vIH1cbiAgICAvKiog6YeN5paw6K6+572u54mp5L2T5YyF5Zu055uS55qE6L655qGG5ZKM5ZCE5Liq5o6n5Yi254K577yM5YyF5ous5L2N572u5ZKM5aSn5bCPICovXG4gICAgc2V0Q29vcmRzKCkge1xuICAgICAgICBsZXQgc3Ryb2tlV2lkdGggPSB0aGlzLnN0cm9rZVdpZHRoID4gMSA/IHRoaXMuc3Ryb2tlV2lkdGggOiAwLCBwYWRkaW5nID0gdGhpcy5wYWRkaW5nLCByYWRpYW4gPSBVdGlsLmRlZ3JlZXNUb1JhZGlhbnModGhpcy5hbmdsZSk7XG4gICAgICAgIHRoaXMuY3VycmVudFdpZHRoID0gKHRoaXMud2lkdGggKyBzdHJva2VXaWR0aCkgKiB0aGlzLnNjYWxlWCArIHBhZGRpbmcgKiAyO1xuICAgICAgICB0aGlzLmN1cnJlbnRIZWlnaHQgPVxuICAgICAgICAgICAgKHRoaXMuaGVpZ2h0ICsgc3Ryb2tlV2lkdGgpICogdGhpcy5zY2FsZVkgKyBwYWRkaW5nICogMjtcbiAgICAgICAgLy8gSWYgd2lkdGggaXMgbmVnYXRpdmUsIG1ha2UgcG9zdGl2ZS4gRml4ZXMgcGF0aCBzZWxlY3Rpb24gaXNzdWVcbiAgICAgICAgLy8gaWYgKHRoaXMuY3VycmVudFdpZHRoIDwgMCkge1xuICAgICAgICAvLyAgICAgdGhpcy5jdXJyZW50V2lkdGggPSBNYXRoLmFicyh0aGlzLmN1cnJlbnRXaWR0aCk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8g54mp5L2T5Lit5b+D54K55Yiw6aG254K555qE5pac6L656ZW/5bqmXG4gICAgICAgIGxldCBfaHlwb3RlbnVzZSA9IE1hdGguc3FydChNYXRoLnBvdyh0aGlzLmN1cnJlbnRXaWR0aCAvIDIsIDIpICsgTWF0aC5wb3codGhpcy5jdXJyZW50SGVpZ2h0IC8gMiwgMikpO1xuICAgICAgICBsZXQgX2FuZ2xlID0gTWF0aC5hdGFuKHRoaXMuY3VycmVudEhlaWdodCAvIHRoaXMuY3VycmVudFdpZHRoKTtcbiAgICAgICAgLy8gbGV0IF9hbmdsZSA9IE1hdGguYXRhbjIodGhpcy5jdXJyZW50SGVpZ2h0LCB0aGlzLmN1cnJlbnRXaWR0aCk7XG4gICAgICAgIC8vIG9mZnNldCBhZGRlZCBmb3Igcm90YXRlIGFuZCBzY2FsZSBhY3Rpb25zXG4gICAgICAgIGxldCBvZmZzZXRYID0gTWF0aC5jb3MoX2FuZ2xlICsgcmFkaWFuKSAqIF9oeXBvdGVudXNlLCBvZmZzZXRZID0gTWF0aC5zaW4oX2FuZ2xlICsgcmFkaWFuKSAqIF9oeXBvdGVudXNlLCBzaW5UaCA9IE1hdGguc2luKHJhZGlhbiksIGNvc1RoID0gTWF0aC5jb3MocmFkaWFuKTtcbiAgICAgICAgbGV0IGNvb3JkcyA9IHRoaXMuZ2V0Q2VudGVyUG9pbnQoKTtcbiAgICAgICAgbGV0IHRsID0ge1xuICAgICAgICAgICAgeDogY29vcmRzLnggLSBvZmZzZXRYLFxuICAgICAgICAgICAgeTogY29vcmRzLnkgLSBvZmZzZXRZLFxuICAgICAgICB9O1xuICAgICAgICBsZXQgdHIgPSB7XG4gICAgICAgICAgICB4OiB0bC54ICsgdGhpcy5jdXJyZW50V2lkdGggKiBjb3NUaCxcbiAgICAgICAgICAgIHk6IHRsLnkgKyB0aGlzLmN1cnJlbnRXaWR0aCAqIHNpblRoLFxuICAgICAgICB9O1xuICAgICAgICBsZXQgYnIgPSB7XG4gICAgICAgICAgICB4OiB0ci54IC0gdGhpcy5jdXJyZW50SGVpZ2h0ICogc2luVGgsXG4gICAgICAgICAgICB5OiB0ci55ICsgdGhpcy5jdXJyZW50SGVpZ2h0ICogY29zVGgsXG4gICAgICAgIH07XG4gICAgICAgIGxldCBibCA9IHtcbiAgICAgICAgICAgIHg6IHRsLnggLSB0aGlzLmN1cnJlbnRIZWlnaHQgKiBzaW5UaCxcbiAgICAgICAgICAgIHk6IHRsLnkgKyB0aGlzLmN1cnJlbnRIZWlnaHQgKiBjb3NUaCxcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IG1sID0ge1xuICAgICAgICAgICAgeDogdGwueCAtICh0aGlzLmN1cnJlbnRIZWlnaHQgLyAyKSAqIHNpblRoLFxuICAgICAgICAgICAgeTogdGwueSArICh0aGlzLmN1cnJlbnRIZWlnaHQgLyAyKSAqIGNvc1RoLFxuICAgICAgICB9O1xuICAgICAgICBsZXQgbXQgPSB7XG4gICAgICAgICAgICB4OiB0bC54ICsgKHRoaXMuY3VycmVudFdpZHRoIC8gMikgKiBjb3NUaCxcbiAgICAgICAgICAgIHk6IHRsLnkgKyAodGhpcy5jdXJyZW50V2lkdGggLyAyKSAqIHNpblRoLFxuICAgICAgICB9O1xuICAgICAgICBsZXQgbXIgPSB7XG4gICAgICAgICAgICB4OiB0ci54IC0gKHRoaXMuY3VycmVudEhlaWdodCAvIDIpICogc2luVGgsXG4gICAgICAgICAgICB5OiB0ci55ICsgKHRoaXMuY3VycmVudEhlaWdodCAvIDIpICogY29zVGgsXG4gICAgICAgIH07XG4gICAgICAgIGxldCBtYiA9IHtcbiAgICAgICAgICAgIHg6IGJsLnggKyAodGhpcy5jdXJyZW50V2lkdGggLyAyKSAqIGNvc1RoLFxuICAgICAgICAgICAgeTogYmwueSArICh0aGlzLmN1cnJlbnRXaWR0aCAvIDIpICogc2luVGgsXG4gICAgICAgIH07XG4gICAgICAgIGxldCBtdHIgPSB7XG4gICAgICAgICAgICB4OiB0bC54ICsgKHRoaXMuY3VycmVudFdpZHRoIC8gMikgKiBjb3NUaCxcbiAgICAgICAgICAgIHk6IHRsLnkgKyAodGhpcy5jdXJyZW50V2lkdGggLyAyKSAqIHNpblRoLFxuICAgICAgICB9O1xuICAgICAgICAvLyBjbG9ja3dpc2VcbiAgICAgICAgdGhpcy5vQ29vcmRzID0geyB0bCwgdHIsIGJyLCBibCwgbWwsIG10LCBtciwgbWIsIG10ciB9O1xuICAgICAgICAvLyBzZXQgY29vcmRpbmF0ZXMgb2YgdGhlIGRyYWdnYWJsZSBib3hlcyBpbiB0aGUgY29ybmVycyB1c2VkIHRvIHNjYWxlL3JvdGF0ZSB0aGUgaW1hZ2VcbiAgICAgICAgdGhpcy5fc2V0Q29ybmVyQ29vcmRzKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKiog6YeN5paw6K6+572u54mp5L2T55qE5q+P5Liq5o6n5Yi254K577yM5YyF5ous5L2N572u5ZKM5aSn5bCPICovXG4gICAgX3NldENvcm5lckNvb3JkcygpIHtcbiAgICAgICAgbGV0IGNvb3JkcyA9IHRoaXMub0Nvb3JkcywgcmFkaWFuID0gVXRpbC5kZWdyZWVzVG9SYWRpYW5zKHRoaXMuYW5nbGUpLCBuZXdUaGV0YSA9IFV0aWwuZGVncmVlc1RvUmFkaWFucyg0NSAtIHRoaXMuYW5nbGUpLCBjb3JuZXJIeXBvdGVudXNlID0gTWF0aC5zcXJ0KDIgKiBNYXRoLnBvdyh0aGlzLmNvcm5lclNpemUsIDIpKSAvIDIsIGNvc0hhbGZPZmZzZXQgPSBjb3JuZXJIeXBvdGVudXNlICogTWF0aC5jb3MobmV3VGhldGEpLCBzaW5IYWxmT2Zmc2V0ID0gY29ybmVySHlwb3RlbnVzZSAqIE1hdGguc2luKG5ld1RoZXRhKSwgc2luVGggPSBNYXRoLnNpbihyYWRpYW4pLCBjb3NUaCA9IE1hdGguY29zKHJhZGlhbik7XG4gICAgICAgIGNvb3Jkcy50bC5jb3JuZXIgPSB7XG4gICAgICAgICAgICB0bDoge1xuICAgICAgICAgICAgICAgIHg6IGNvb3Jkcy50bC54IC0gc2luSGFsZk9mZnNldCxcbiAgICAgICAgICAgICAgICB5OiBjb29yZHMudGwueSAtIGNvc0hhbGZPZmZzZXQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHI6IHtcbiAgICAgICAgICAgICAgICB4OiBjb29yZHMudGwueCArIGNvc0hhbGZPZmZzZXQsXG4gICAgICAgICAgICAgICAgeTogY29vcmRzLnRsLnkgLSBzaW5IYWxmT2Zmc2V0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJsOiB7XG4gICAgICAgICAgICAgICAgeDogY29vcmRzLnRsLnggLSBjb3NIYWxmT2Zmc2V0LFxuICAgICAgICAgICAgICAgIHk6IGNvb3Jkcy50bC55ICsgc2luSGFsZk9mZnNldCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBicjoge1xuICAgICAgICAgICAgICAgIHg6IGNvb3Jkcy50bC54ICsgc2luSGFsZk9mZnNldCxcbiAgICAgICAgICAgICAgICB5OiBjb29yZHMudGwueSArIGNvc0hhbGZPZmZzZXQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBjb29yZHMudHIuY29ybmVyID0ge1xuICAgICAgICAgICAgdGw6IHtcbiAgICAgICAgICAgICAgICB4OiBjb29yZHMudHIueCAtIHNpbkhhbGZPZmZzZXQsXG4gICAgICAgICAgICAgICAgeTogY29vcmRzLnRyLnkgLSBjb3NIYWxmT2Zmc2V0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRyOiB7XG4gICAgICAgICAgICAgICAgeDogY29vcmRzLnRyLnggKyBjb3NIYWxmT2Zmc2V0LFxuICAgICAgICAgICAgICAgIHk6IGNvb3Jkcy50ci55IC0gc2luSGFsZk9mZnNldCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBicjoge1xuICAgICAgICAgICAgICAgIHg6IGNvb3Jkcy50ci54ICsgc2luSGFsZk9mZnNldCxcbiAgICAgICAgICAgICAgICB5OiBjb29yZHMudHIueSArIGNvc0hhbGZPZmZzZXQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmw6IHtcbiAgICAgICAgICAgICAgICB4OiBjb29yZHMudHIueCAtIGNvc0hhbGZPZmZzZXQsXG4gICAgICAgICAgICAgICAgeTogY29vcmRzLnRyLnkgKyBzaW5IYWxmT2Zmc2V0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgY29vcmRzLmJsLmNvcm5lciA9IHtcbiAgICAgICAgICAgIHRsOiB7XG4gICAgICAgICAgICAgICAgeDogY29vcmRzLmJsLnggLSBzaW5IYWxmT2Zmc2V0LFxuICAgICAgICAgICAgICAgIHk6IGNvb3Jkcy5ibC55IC0gY29zSGFsZk9mZnNldCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBibDoge1xuICAgICAgICAgICAgICAgIHg6IGNvb3Jkcy5ibC54IC0gY29zSGFsZk9mZnNldCxcbiAgICAgICAgICAgICAgICB5OiBjb29yZHMuYmwueSArIHNpbkhhbGZPZmZzZXQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnI6IHtcbiAgICAgICAgICAgICAgICB4OiBjb29yZHMuYmwueCArIHNpbkhhbGZPZmZzZXQsXG4gICAgICAgICAgICAgICAgeTogY29vcmRzLmJsLnkgKyBjb3NIYWxmT2Zmc2V0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRyOiB7XG4gICAgICAgICAgICAgICAgeDogY29vcmRzLmJsLnggKyBjb3NIYWxmT2Zmc2V0LFxuICAgICAgICAgICAgICAgIHk6IGNvb3Jkcy5ibC55IC0gc2luSGFsZk9mZnNldCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGNvb3Jkcy5ici5jb3JuZXIgPSB7XG4gICAgICAgICAgICB0cjoge1xuICAgICAgICAgICAgICAgIHg6IGNvb3Jkcy5ici54ICsgY29zSGFsZk9mZnNldCxcbiAgICAgICAgICAgICAgICB5OiBjb29yZHMuYnIueSAtIHNpbkhhbGZPZmZzZXQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmw6IHtcbiAgICAgICAgICAgICAgICB4OiBjb29yZHMuYnIueCAtIGNvc0hhbGZPZmZzZXQsXG4gICAgICAgICAgICAgICAgeTogY29vcmRzLmJyLnkgKyBzaW5IYWxmT2Zmc2V0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJyOiB7XG4gICAgICAgICAgICAgICAgeDogY29vcmRzLmJyLnggKyBzaW5IYWxmT2Zmc2V0LFxuICAgICAgICAgICAgICAgIHk6IGNvb3Jkcy5ici55ICsgY29zSGFsZk9mZnNldCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0bDoge1xuICAgICAgICAgICAgICAgIHg6IGNvb3Jkcy5ici54IC0gc2luSGFsZk9mZnNldCxcbiAgICAgICAgICAgICAgICB5OiBjb29yZHMuYnIueSAtIGNvc0hhbGZPZmZzZXQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBjb29yZHMubWwuY29ybmVyID0ge1xuICAgICAgICAgICAgdGw6IHtcbiAgICAgICAgICAgICAgICB4OiBjb29yZHMubWwueCAtIHNpbkhhbGZPZmZzZXQsXG4gICAgICAgICAgICAgICAgeTogY29vcmRzLm1sLnkgLSBjb3NIYWxmT2Zmc2V0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRyOiB7XG4gICAgICAgICAgICAgICAgeDogY29vcmRzLm1sLnggKyBjb3NIYWxmT2Zmc2V0LFxuICAgICAgICAgICAgICAgIHk6IGNvb3Jkcy5tbC55IC0gc2luSGFsZk9mZnNldCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBibDoge1xuICAgICAgICAgICAgICAgIHg6IGNvb3Jkcy5tbC54IC0gY29zSGFsZk9mZnNldCxcbiAgICAgICAgICAgICAgICB5OiBjb29yZHMubWwueSArIHNpbkhhbGZPZmZzZXQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnI6IHtcbiAgICAgICAgICAgICAgICB4OiBjb29yZHMubWwueCArIHNpbkhhbGZPZmZzZXQsXG4gICAgICAgICAgICAgICAgeTogY29vcmRzLm1sLnkgKyBjb3NIYWxmT2Zmc2V0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgY29vcmRzLm10LmNvcm5lciA9IHtcbiAgICAgICAgICAgIHRsOiB7XG4gICAgICAgICAgICAgICAgeDogY29vcmRzLm10LnggLSBzaW5IYWxmT2Zmc2V0LFxuICAgICAgICAgICAgICAgIHk6IGNvb3Jkcy5tdC55IC0gY29zSGFsZk9mZnNldCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0cjoge1xuICAgICAgICAgICAgICAgIHg6IGNvb3Jkcy5tdC54ICsgY29zSGFsZk9mZnNldCxcbiAgICAgICAgICAgICAgICB5OiBjb29yZHMubXQueSAtIHNpbkhhbGZPZmZzZXQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmw6IHtcbiAgICAgICAgICAgICAgICB4OiBjb29yZHMubXQueCAtIGNvc0hhbGZPZmZzZXQsXG4gICAgICAgICAgICAgICAgeTogY29vcmRzLm10LnkgKyBzaW5IYWxmT2Zmc2V0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJyOiB7XG4gICAgICAgICAgICAgICAgeDogY29vcmRzLm10LnggKyBzaW5IYWxmT2Zmc2V0LFxuICAgICAgICAgICAgICAgIHk6IGNvb3Jkcy5tdC55ICsgY29zSGFsZk9mZnNldCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIGNvb3Jkcy5tci5jb3JuZXIgPSB7XG4gICAgICAgICAgICB0bDoge1xuICAgICAgICAgICAgICAgIHg6IGNvb3Jkcy5tci54IC0gc2luSGFsZk9mZnNldCxcbiAgICAgICAgICAgICAgICB5OiBjb29yZHMubXIueSAtIGNvc0hhbGZPZmZzZXQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHI6IHtcbiAgICAgICAgICAgICAgICB4OiBjb29yZHMubXIueCArIGNvc0hhbGZPZmZzZXQsXG4gICAgICAgICAgICAgICAgeTogY29vcmRzLm1yLnkgLSBzaW5IYWxmT2Zmc2V0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJsOiB7XG4gICAgICAgICAgICAgICAgeDogY29vcmRzLm1yLnggLSBjb3NIYWxmT2Zmc2V0LFxuICAgICAgICAgICAgICAgIHk6IGNvb3Jkcy5tci55ICsgc2luSGFsZk9mZnNldCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBicjoge1xuICAgICAgICAgICAgICAgIHg6IGNvb3Jkcy5tci54ICsgc2luSGFsZk9mZnNldCxcbiAgICAgICAgICAgICAgICB5OiBjb29yZHMubXIueSArIGNvc0hhbGZPZmZzZXQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBjb29yZHMubWIuY29ybmVyID0ge1xuICAgICAgICAgICAgdGw6IHtcbiAgICAgICAgICAgICAgICB4OiBjb29yZHMubWIueCAtIHNpbkhhbGZPZmZzZXQsXG4gICAgICAgICAgICAgICAgeTogY29vcmRzLm1iLnkgLSBjb3NIYWxmT2Zmc2V0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRyOiB7XG4gICAgICAgICAgICAgICAgeDogY29vcmRzLm1iLnggKyBjb3NIYWxmT2Zmc2V0LFxuICAgICAgICAgICAgICAgIHk6IGNvb3Jkcy5tYi55IC0gc2luSGFsZk9mZnNldCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBibDoge1xuICAgICAgICAgICAgICAgIHg6IGNvb3Jkcy5tYi54IC0gY29zSGFsZk9mZnNldCxcbiAgICAgICAgICAgICAgICB5OiBjb29yZHMubWIueSArIHNpbkhhbGZPZmZzZXQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnI6IHtcbiAgICAgICAgICAgICAgICB4OiBjb29yZHMubWIueCArIHNpbkhhbGZPZmZzZXQsXG4gICAgICAgICAgICAgICAgeTogY29vcmRzLm1iLnkgKyBjb3NIYWxmT2Zmc2V0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgY29vcmRzLm10ci5jb3JuZXIgPSB7XG4gICAgICAgICAgICB0bDoge1xuICAgICAgICAgICAgICAgIHg6IGNvb3Jkcy5tdHIueCAtIHNpbkhhbGZPZmZzZXQgKyBzaW5UaCAqIHRoaXMucm90YXRpbmdQb2ludE9mZnNldCxcbiAgICAgICAgICAgICAgICB5OiBjb29yZHMubXRyLnkgLSBjb3NIYWxmT2Zmc2V0IC0gY29zVGggKiB0aGlzLnJvdGF0aW5nUG9pbnRPZmZzZXQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHI6IHtcbiAgICAgICAgICAgICAgICB4OiBjb29yZHMubXRyLnggKyBjb3NIYWxmT2Zmc2V0ICsgc2luVGggKiB0aGlzLnJvdGF0aW5nUG9pbnRPZmZzZXQsXG4gICAgICAgICAgICAgICAgeTogY29vcmRzLm10ci55IC0gc2luSGFsZk9mZnNldCAtIGNvc1RoICogdGhpcy5yb3RhdGluZ1BvaW50T2Zmc2V0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJsOiB7XG4gICAgICAgICAgICAgICAgeDogY29vcmRzLm10ci54IC0gY29zSGFsZk9mZnNldCArIHNpblRoICogdGhpcy5yb3RhdGluZ1BvaW50T2Zmc2V0LFxuICAgICAgICAgICAgICAgIHk6IGNvb3Jkcy5tdHIueSArIHNpbkhhbGZPZmZzZXQgLSBjb3NUaCAqIHRoaXMucm90YXRpbmdQb2ludE9mZnNldCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBicjoge1xuICAgICAgICAgICAgICAgIHg6IGNvb3Jkcy5tdHIueCArIHNpbkhhbGZPZmZzZXQgKyBzaW5UaCAqIHRoaXMucm90YXRpbmdQb2ludE9mZnNldCxcbiAgICAgICAgICAgICAgICB5OiBjb29yZHMubXRyLnkgKyBjb3NIYWxmT2Zmc2V0IC0gY29zVGggKiB0aGlzLnJvdGF0aW5nUG9pbnRPZmZzZXQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDovazmiJDln7rnoYDmoIflh4blr7nosaHvvIzmlrnkvr/luo/liJfljJZcbiAgICAgKiBAcGFyYW0gcHJvcGVydGllc1RvSW5jbHVkZSDkvaDlj6/og73pnIDopoHmt7vliqDkuIDkupvpop3lpJbnmoToh6rlrprkuYnlsZ7mgKdcbiAgICAgKiBAcmV0dXJucyDmoIflh4blr7nosaFcbiAgICAgKi9cbiAgICB0b09iamVjdChwcm9wZXJ0aWVzVG9JbmNsdWRlID0gW10pIHtcbiAgICAgICAgLy8g5L+d5a2Y5pe255qE5pWw5a2X57K+5bqmXG4gICAgICAgIGNvbnN0IE5VTV9GUkFDVElPTl9ESUdJVFMgPSAyO1xuICAgICAgICBjb25zdCBvYmplY3QgPSB7XG4gICAgICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICAgICAgICBvcmlnaW5YOiB0aGlzLm9yaWdpblgsXG4gICAgICAgICAgICBvcmlnaW5ZOiB0aGlzLm9yaWdpblksXG4gICAgICAgICAgICBsZWZ0OiBVdGlsLnRvRml4ZWQodGhpcy5sZWZ0LCBOVU1fRlJBQ1RJT05fRElHSVRTKSxcbiAgICAgICAgICAgIHRvcDogVXRpbC50b0ZpeGVkKHRoaXMudG9wLCBOVU1fRlJBQ1RJT05fRElHSVRTKSxcbiAgICAgICAgICAgIHdpZHRoOiBVdGlsLnRvRml4ZWQodGhpcy53aWR0aCwgTlVNX0ZSQUNUSU9OX0RJR0lUUyksXG4gICAgICAgICAgICBoZWlnaHQ6IFV0aWwudG9GaXhlZCh0aGlzLmhlaWdodCwgTlVNX0ZSQUNUSU9OX0RJR0lUUyksXG4gICAgICAgICAgICBmaWxsOiB0aGlzLmZpbGwsXG4gICAgICAgICAgICBzdHJva2U6IHRoaXMuc3Ryb2tlLFxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IHRoaXMuc3Ryb2tlV2lkdGgsXG4gICAgICAgICAgICBzY2FsZVg6IFV0aWwudG9GaXhlZCh0aGlzLnNjYWxlWCwgTlVNX0ZSQUNUSU9OX0RJR0lUUyksXG4gICAgICAgICAgICBzY2FsZVk6IFV0aWwudG9GaXhlZCh0aGlzLnNjYWxlWSwgTlVNX0ZSQUNUSU9OX0RJR0lUUyksXG4gICAgICAgICAgICBhbmdsZTogVXRpbC50b0ZpeGVkKHRoaXMuZ2V0QW5nbGUoKSwgTlVNX0ZSQUNUSU9OX0RJR0lUUyksXG4gICAgICAgICAgICBmbGlwWDogdGhpcy5mbGlwWCxcbiAgICAgICAgICAgIGZsaXBZOiB0aGlzLmZsaXBZLFxuICAgICAgICAgICAgaGFzQ29udHJvbHM6IHRoaXMuaGFzQ29udHJvbHMsXG4gICAgICAgICAgICBoYXNSb3RhdGluZ1BvaW50OiB0aGlzLmhhc1JvdGF0aW5nUG9pbnQsXG4gICAgICAgICAgICB0cmFuc3BhcmVudENvcm5lcnM6IHRoaXMudHJhbnNwYXJlbnRDb3JuZXJzLFxuICAgICAgICAgICAgcGVyUGl4ZWxUYXJnZXRGaW5kOiB0aGlzLnBlclBpeGVsVGFyZ2V0RmluZCxcbiAgICAgICAgICAgIHZpc2libGU6IHRoaXMudmlzaWJsZSxcbiAgICAgICAgfTtcbiAgICAgICAgVXRpbC5wb3B1bGF0ZVdpdGhQcm9wZXJ0aWVzKHRoaXMsIG9iamVjdCwgcHJvcGVydGllc1RvSW5jbHVkZSk7XG4gICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgfVxuICAgIHRvU3ZnKCkge1xuICAgICAgICBjb25zdCBtYXJrdXAgPSBbXTtcbiAgICAgICAgY29uc3Qgb2JqU3ZnID0gdGhpcy5fdG9TVkcoKTtcbiAgICAgICAgbWFya3VwLnB1c2goXCI8ZyBcIiwgdGhpcy5nZXRTdmdUcmFuc2Zvcm0oKSwgXCIgPlxcblwiKTtcbiAgICAgICAgbWFya3VwLnB1c2gob2JqU3ZnLmpvaW4oXCJcIikpO1xuICAgICAgICBtYXJrdXAucHVzaChcIjwvZz5cXG5cIik7XG4gICAgICAgIHJldHVybiBtYXJrdXAuam9pbihcIlwiKTtcbiAgICB9XG4gICAgLyoqIOeUseWtkOexu+WFt+S9k+WunueOsCAqL1xuICAgIF90b1NWRygpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBnZXRTdmdUcmFuc2Zvcm0oKSB7XG4gICAgICAgIGxldCB0cmFuc2Zvcm0gPSB0aGlzLmNhbGNPd25NYXRyaXgoKSwgc3ZnVHJhbnNmb3JtID0gJ3RyYW5zZm9ybT1cIicgKyBVdGlsLm1hdHJpeFRvU1ZHKHRyYW5zZm9ybSk7XG4gICAgICAgIHJldHVybiBzdmdUcmFuc2Zvcm0gKyAnXCIgJztcbiAgICB9XG4gICAgY2FsY093bk1hdHJpeCgpIHsgfVxuICAgIGdldChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNba2V5XTtcbiAgICB9XG4gICAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgLy8gaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSB2YWx1ZSh0aGlzLmdldChrZXkpKTtcbiAgICAgICAgLy8gaWYgKGtleSA9PT0gJ3NjYWxlWCcgfHwga2V5ID09PSAnc2NhbGVZJykge1xuICAgICAgICAvLyAgICAgdmFsdWUgPSB0aGlzLl9jb25zdHJhaW5TY2FsZSh2YWx1ZSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYgKGtleSA9PT0gJ3dpZHRoJyB8fCBrZXkgPT09ICdoZWlnaHQnKSB7XG4gICAgICAgIC8vICAgICB0aGlzLm1pblNjYWxlTGltaXQgPSBVdGlsLnRvRml4ZWQoTWF0aC5taW4oMC4xLCAxIC8gTWF0aC5tYXgodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpKSwgMik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgaWYgKGtleSA9PT0gXCJzY2FsZVhcIiAmJiB2YWx1ZSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmxpcFggPSAhdGhpcy5mbGlwWDtcbiAgICAgICAgICAgIHZhbHVlICo9IC0xO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGtleSA9PT0gXCJzY2FsZVlcIiAmJiB2YWx1ZSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmxpcFkgPSAhdGhpcy5mbGlwWTtcbiAgICAgICAgICAgIHZhbHVlICo9IC0xO1xuICAgICAgICB9XG4gICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0IHNjYWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXMgPyB0aGlzLmNhbnZhcy5zY2FsZSA6IDE7XG4gICAgfVxuICAgIC8qKiDojrflj5blvZPliY3lpKflsI/vvIzljIXlkKvnvKnmlL7mlYjmnpwgKi9cbiAgICBnZXRXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2lkdGggKiB0aGlzLnNjYWxlWDtcbiAgICB9XG4gICAgLyoqIOiOt+WPluW9k+WJjeWkp+Wwj++8jOWMheWQq+e8qeaUvuaViOaenCAqL1xuICAgIGdldEhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0ICogdGhpcy5zY2FsZVk7XG4gICAgfVxuICAgIGdldEFuZ2xlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbmdsZTtcbiAgICB9XG4gICAgc2V0QW5nbGUoYW5nbGUpIHtcbiAgICAgICAgdGhpcy5hbmdsZSA9IGFuZ2xlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFBvaW50IH0gZnJvbSBcIi4vcG9pbnRcIjtcbmNvbnN0IFBpQnkxODAgPSBNYXRoLlBJIC8gMTgwOyAvLyDlhpnlnKjov5nph4znm7jlvZPkuo7nvJPlrZjvvIzlm6DkuLrkvJrpopHnuYHosIPnlKhcbmNvbnN0IGlNYXRyaXggPSBbMSwgMCwgMCwgMSwgMCwgMF07XG5leHBvcnQgY2xhc3MgVXRpbCB7XG4gICAgLyoqXG4gICAgICog5oqK5rqQ5a+56LGh55qE5p+Q5Lqb5bGe5oCn6LWL5YC857uZ55uu5qCH5a+56LGhXG4gICAgICogQHBhcmFtIHNvdXJjZSDmupDlr7nosaFcbiAgICAgKiBAcGFyYW0gZGVzdGluYXRpb24g55uu5qCH5a+56LGhXG4gICAgICogQHBhcmFtIHByb3BlcnRpZXMg6ZyA6KaB6LWL5YC855qE5bGe5oCnXG4gICAgICovXG4gICAgc3RhdGljIHBvcHVsYXRlV2l0aFByb3BlcnRpZXMoc291cmNlLCBkZXN0aW5hdGlvbiwgcHJvcGVydGllcykge1xuICAgICAgICBpZiAocHJvcGVydGllcyAmJlxuICAgICAgICAgICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb3BlcnRpZXMpID09PSBcIltvYmplY3QgQXJyYXldXCIpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwcm9wZXJ0aWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb25bcHJvcGVydGllc1tpXV0gPSBzb3VyY2VbcHJvcGVydGllc1tpXV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGxvYWRJbWFnZSh1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBsZXQgZG9uZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gaW1nLm9uZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoaW1nKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGRvbmU7XG4gICAgICAgICAgICAgICAgaW1nLm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJFcnJvciBsb2FkaW5nIFwiICsgaW1nLnNyYykpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgb3B0aW9ucyAmJlxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmNyb3NzT3JpZ2luICYmXG4gICAgICAgICAgICAgICAgICAgIChpbWcuY3Jvc3NPcmlnaW4gPSBvcHRpb25zLmNyb3NzT3JpZ2luKTtcbiAgICAgICAgICAgICAgICBpbWcuc3JjID0gdXJsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGNsb25lKG9iaikge1xuICAgICAgICBpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiKVxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgbGV0IHRlbXAgPSBuZXcgb2JqLmNvbnN0cnVjdG9yKCk7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmICghb2JqW2tleV0gfHwgdHlwZW9mIG9ialtrZXldICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgdGVtcFtrZXldID0gb2JqW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ZW1wW2tleV0gPSBVdGlsLmNsb25lKG9ialtrZXldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcDtcbiAgICB9XG4gICAgc3RhdGljIGFuaW1hdGUob3B0aW9ucykge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCh0aW1lc3RhbXApID0+IHtcbiAgICAgICAgICAgIGxldCBzdGFydCA9IHRpbWVzdGFtcCB8fCArbmV3IERhdGUoKSwgLy8g5byA5aeL5pe26Ze0XG4gICAgICAgICAgICBkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24gfHwgNTAwLCAvLyDliqjnlLvml7bpl7RcbiAgICAgICAgICAgIGZpbmlzaCA9IHN0YXJ0ICsgZHVyYXRpb24sIC8vIOe7k+adn+aXtumXtFxuICAgICAgICAgICAgdGltZSwgLy8g5b2T5YmN5pe26Ze0XG4gICAgICAgICAgICBvbkNoYW5nZSA9IG9wdGlvbnMub25DaGFuZ2UgfHwgKCgpID0+IHsgfSksIGFib3J0ID0gb3B0aW9ucy5hYm9ydCB8fCAoKCkgPT4gZmFsc2UpLCBlYXNpbmcgPSBvcHRpb25zLmVhc2luZyB8fFxuICAgICAgICAgICAgICAgICgodCwgYiwgYywgZCkgPT4gLWMgKiBNYXRoLmNvcygodCAvIGQpICogKE1hdGguUEkgLyAyKSkgKyBjICsgYiksIHN0YXJ0VmFsdWUgPSBvcHRpb25zLnN0YXJ0VmFsdWUgfHwgMCwgLy8g5Yid5aeL5YC8XG4gICAgICAgICAgICBlbmRWYWx1ZSA9IG9wdGlvbnMuZW5kVmFsdWUgfHwgMTAwLCAvLyDnu5PmnZ/lgLxcbiAgICAgICAgICAgIGJ5VmFsdWUgPSBvcHRpb25zLmJ5VmFsdWUgfHwgZW5kVmFsdWUgLSBzdGFydFZhbHVlOyAvLyDlgLznmoTlj5jljJbojIPlm7RcbiAgICAgICAgICAgIGZ1bmN0aW9uIHRpY2sodGlja3RpbWUpIHtcbiAgICAgICAgICAgICAgICAvLyB0aWNrIOeahOS4u+imgeS7u+WKoeWwseaYr+agueaNruaXtumXtOabtOaWsOWAvFxuICAgICAgICAgICAgICAgIHRpbWUgPSB0aWNrdGltZSB8fCArbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFRpbWUgPSB0aW1lID4gZmluaXNoID8gZHVyYXRpb24gOiB0aW1lIC0gc3RhcnQ7IC8vIOW9k+WJjeW3sue7j+aJp+ihjOS6huWkmuS5heaXtumXtO+8iOS7i+S6jjB+ZHVyYXRpb27vvIlcbiAgICAgICAgICAgICAgICBpZiAoYWJvcnQoKSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLm9uQ29tcGxldGUgJiYgb3B0aW9ucy5vbkNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UoZWFzaW5nKGN1cnJlbnRUaW1lLCBzdGFydFZhbHVlLCBieVZhbHVlLCBkdXJhdGlvbikpOyAvLyDlhbblrp4gYW5pbWF0ZSDlh73mlbDlj6rmmK/moLnmja4gZWFzaW5nIOWHveaVsOiuoeeul+WHuuS6huafkOS4quWAvO+8jOeEtuWQjuS8oOe7meiwg+eUqOiAheiAjOW3slxuICAgICAgICAgICAgICAgIGlmICh0aW1lID4gZmluaXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMub25Db21wbGV0ZSAmJiBvcHRpb25zLm9uQ29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3B0aW9ucy5vblN0YXJ0ICYmIG9wdGlvbnMub25TdGFydCgpOyAvLyDliqjnlLvlvIDlp4vliY3nmoTlm57osINcbiAgICAgICAgICAgIHRpY2soc3RhcnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqIOS7juaVsOe7hOS4rea6ouWHuuafkOS4quWFg+e0oCAqL1xuICAgIHN0YXRpYyByZW1vdmVGcm9tQXJyYXkoYXJyYXksIHZhbHVlKSB7XG4gICAgICAgIGxldCBpZHggPSBhcnJheS5pbmRleE9mKHZhbHVlKTtcbiAgICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGFycmF5LnNwbGljZShpZHgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5pWw57uE55qE5pyA5bCP5YC8XG4gICAgICovXG4gICAgc3RhdGljIG1pbihhcnJheSwgYnlQcm9wZXJ0eSA9IFwiXCIpIHtcbiAgICAgICAgaWYgKCFhcnJheSB8fCBhcnJheS5sZW5ndGggPT09IDApXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDEsIHJlc3VsdCA9IGJ5UHJvcGVydHkgPyBhcnJheVtpXVtieVByb3BlcnR5XSA6IGFycmF5W2ldO1xuICAgICAgICBpZiAoYnlQcm9wZXJ0eSkge1xuICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICAgIGlmIChhcnJheVtpXVtieVByb3BlcnR5XSA8IHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBhcnJheVtpXVtieVByb3BlcnR5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFycmF5W2ldIDwgcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGFycmF5W2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmlbDnu4TnmoTmnIDlpKflgLxcbiAgICAgKi9cbiAgICBzdGF0aWMgbWF4KGFycmF5LCBieVByb3BlcnR5ID0gXCJcIikge1xuICAgICAgICBpZiAoIWFycmF5IHx8IGFycmF5Lmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMSwgcmVzdWx0ID0gYnlQcm9wZXJ0eSA/IGFycmF5W2ldW2J5UHJvcGVydHldIDogYXJyYXlbaV07XG4gICAgICAgIGlmIChieVByb3BlcnR5KSB7XG4gICAgICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFycmF5W2ldW2J5UHJvcGVydHldID49IHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBhcnJheVtpXVtieVByb3BlcnR5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFycmF5W2ldID49IHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBhcnJheVtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLyoqIOWSjOWOn+eUn+eahCB0b0ZpeGVkIOS4gOagt++8jOWPquS4jei/h+i/lOWbnueahOaVsOWtlyAqL1xuICAgIHN0YXRpYyB0b0ZpeGVkKG51bWJlciwgZnJhY3Rpb25EaWdpdHMpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoTnVtYmVyKG51bWJlcikudG9GaXhlZChmcmFjdGlvbkRpZ2l0cykpO1xuICAgIH1cbiAgICAvKiog6I635Y+W6byg5qCH55qE54K55Ye75Z2Q5qCH77yM55u45a+55LqO6aG16Z2i5bem5LiK6KeS77yM5rOo5oSP5LiN5piv55S75biD55qE5bem5LiK6KeS77yM5Yiw5pe25YCZ5Lya5YeP5o6JIG9mZnNldCAqL1xuICAgIHN0YXRpYyBnZXRQb2ludGVyKGV2ZW50LCB1cHBlckNhbnZhc0VsLCBzY2FsZSA9IDEpIHtcbiAgICAgICAgZXZlbnQgfHwgKGV2ZW50ID0gd2luZG93LmV2ZW50KTtcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBldmVudC50YXJnZXQsIGJvZHkgPSBkb2N1bWVudC5ib2R5IHx8IHsgc2Nyb2xsTGVmdDogMCwgc2Nyb2xsVG9wOiAwIH0sIGRvY0VsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIG9yZ0VsZW1lbnQgPSBlbGVtZW50LCBzY3JvbGxMZWZ0ID0gMCwgc2Nyb2xsVG9wID0gMCwgZmlyc3RGaXhlZEFuY2VzdG9yO1xuICAgICAgICB3aGlsZSAoZWxlbWVudCAmJiBlbGVtZW50LnBhcmVudE5vZGUgJiYgIWZpcnN0Rml4ZWRBbmNlc3Rvcikge1xuICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICE9PSBkb2N1bWVudCAmJlxuICAgICAgICAgICAgICAgIFV0aWwuZ2V0RWxlbWVudFBvc2l0aW9uKGVsZW1lbnQpID09PSBcImZpeGVkXCIpXG4gICAgICAgICAgICAgICAgZmlyc3RGaXhlZEFuY2VzdG9yID0gZWxlbWVudDtcbiAgICAgICAgICAgIGlmIChlbGVtZW50ICE9PSBkb2N1bWVudCAmJlxuICAgICAgICAgICAgICAgIG9yZ0VsZW1lbnQgIT09IHVwcGVyQ2FudmFzRWwgJiZcbiAgICAgICAgICAgICAgICBVdGlsLmdldEVsZW1lbnRQb3NpdGlvbihlbGVtZW50KSA9PT0gXCJhYnNvbHV0ZVwiKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IDA7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGVsZW1lbnQgPT09IGRvY3VtZW50ICYmIG9yZ0VsZW1lbnQgIT09IHVwcGVyQ2FudmFzRWwpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0ID0gYm9keS5zY3JvbGxMZWZ0IHx8IGRvY0VsZW1lbnQuc2Nyb2xsTGVmdCB8fCAwO1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcCA9IGJvZHkuc2Nyb2xsVG9wIHx8IGRvY0VsZW1lbnQuc2Nyb2xsVG9wIHx8IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0ICs9IGVsZW1lbnQuc2Nyb2xsTGVmdCB8fCAwO1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcCArPSBlbGVtZW50LnNjcm9sbFRvcCB8fCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBVdGlsLnBvaW50ZXJYKGV2ZW50KSAvIHNjYWxlICsgc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgIHk6IFV0aWwucG9pbnRlclkoZXZlbnQpIC8gc2NhbGUgKyBzY3JvbGxUb3AsXG4gICAgICAgIH07XG4gICAgfVxuICAgIC8qKiDmoLnmja7nn6npmLXlj43mjqjlh7rlhbfkvZPlj5jmjaLmlbDlgLwgKi9cbiAgICBzdGF0aWMgcXJEZWNvbXBvc2UobSkge1xuICAgICAgICBsZXQgYW5nbGUgPSBNYXRoLmF0YW4yKG1bMV0sIG1bMF0pLCBkZW5vbSA9IE1hdGgucG93KG1bMF0sIDIpICsgTWF0aC5wb3cobVsxXSwgMiksIHNjYWxlWCA9IE1hdGguc3FydChkZW5vbSksIHNjYWxlWSA9IChtWzBdICogbVszXSAtIG1bMl0gKiBtWzFdKSAvIHNjYWxlWCwgc2tld1ggPSBNYXRoLmF0YW4yKG1bMF0gKiBtWzJdICsgbVsxXSAqIG1bM10sIGRlbm9tKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGFuZ2xlOiBhbmdsZSAvIFBpQnkxODAsXG4gICAgICAgICAgICBzY2FsZVg6IHNjYWxlWCxcbiAgICAgICAgICAgIHNjYWxlWTogc2NhbGVZLFxuICAgICAgICAgICAgc2tld1g6IHNrZXdYIC8gUGlCeTE4MCxcbiAgICAgICAgICAgIHNrZXdZOiAwLFxuICAgICAgICAgICAgdHJhbnNsYXRlWDogbVs0XSxcbiAgICAgICAgICAgIHRyYW5zbGF0ZVk6IG1bNV0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIHN0YXRpYyBpbnZlcnRUcmFuc2Zvcm0odCkge1xuICAgICAgICBsZXQgYSA9IDEgLyAodFswXSAqIHRbM10gLSB0WzFdICogdFsyXSksIHIgPSBbYSAqIHRbM10sIC1hICogdFsxXSwgLWEgKiB0WzJdLCBhICogdFswXV0sIG8gPSBVdGlsLnRyYW5zZm9ybVBvaW50KHsgeDogdFs0XSwgeTogdFs1XSB9LCByLCB0cnVlKTtcbiAgICAgICAgcls0XSA9IC1vLng7XG4gICAgICAgIHJbNV0gPSAtby55O1xuICAgICAgICByZXR1cm4gcjtcbiAgICB9XG4gICAgc3RhdGljIHRyYW5zZm9ybVBvaW50KHAsIHQsIGlnbm9yZU9mZnNldCA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChpZ25vcmVPZmZzZXQpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUG9pbnQodFswXSAqIHAueCArIHRbMl0gKiBwLnksIHRbMV0gKiBwLnggKyB0WzNdICogcC55KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IFBvaW50KHRbMF0gKiBwLnggKyB0WzJdICogcC55ICsgdFs0XSwgdFsxXSAqIHAueCArIHRbM10gKiBwLnkgKyB0WzVdKTtcbiAgICB9XG4gICAgc3RhdGljIG11bHRpcGx5VHJhbnNmb3JtTWF0cmljZXMoYSwgYiwgaXMyeDIgPSBmYWxzZSkge1xuICAgICAgICAvLyBNYXRyaXggbXVsdGlwbHkgYSAqIGJcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIGFbMF0gKiBiWzBdICsgYVsyXSAqIGJbMV0sXG4gICAgICAgICAgICBhWzFdICogYlswXSArIGFbM10gKiBiWzFdLFxuICAgICAgICAgICAgYVswXSAqIGJbMl0gKyBhWzJdICogYlszXSxcbiAgICAgICAgICAgIGFbMV0gKiBiWzJdICsgYVszXSAqIGJbM10sXG4gICAgICAgICAgICBpczJ4MiA/IDAgOiBhWzBdICogYls0XSArIGFbMl0gKiBiWzVdICsgYVs0XSxcbiAgICAgICAgICAgIGlzMngyID8gMCA6IGFbMV0gKiBiWzRdICsgYVszXSAqIGJbNV0gKyBhWzVdLFxuICAgICAgICBdO1xuICAgIH1cbiAgICBzdGF0aWMgbWFrZUJvdW5kaW5nQm94RnJvbVBvaW50cyhwb2ludHMpIHtcbiAgICAgICAgbGV0IHhQb2ludHMgPSBbcG9pbnRzWzBdLngsIHBvaW50c1sxXS54LCBwb2ludHNbMl0ueCwgcG9pbnRzWzNdLnhdLCBtaW5YID0gVXRpbC5taW4oeFBvaW50cyksIG1heFggPSBVdGlsLm1heCh4UG9pbnRzKSwgd2lkdGggPSBNYXRoLmFicyhtaW5YIC0gbWF4WCksIHlQb2ludHMgPSBbcG9pbnRzWzBdLnksIHBvaW50c1sxXS55LCBwb2ludHNbMl0ueSwgcG9pbnRzWzNdLnldLCBtaW5ZID0gVXRpbC5taW4oeVBvaW50cyksIG1heFkgPSBVdGlsLm1heCh5UG9pbnRzKSwgaGVpZ2h0ID0gTWF0aC5hYnMobWluWSAtIG1heFkpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVmdDogbWluWCxcbiAgICAgICAgICAgIHRvcDogbWluWSxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBzdGF0aWMgcG9pbnRlclgoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50LmNsaWVudFggfHwgMDtcbiAgICB9XG4gICAgc3RhdGljIHBvaW50ZXJZKGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBldmVudC5jbGllbnRZIHx8IDA7XG4gICAgfVxuICAgIC8qKiDojrflj5blhYPntKDkvY3nva4gKi9cbiAgICBzdGF0aWMgZ2V0RWxlbWVudFBvc2l0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpLnBvc2l0aW9uO1xuICAgIH1cbiAgICAvKiog6KeS5bqm6L2s5byn5bqm77yM5rOo5oSPIGNhbnZhcyDkuK3nlKjnmoTpg73mmK/lvKfluqbvvIzkvYbmmK/op5Lluqblr7nmiJHku6zmnaXor7Tmr5TovoPnm7Top4IgKi9cbiAgICBzdGF0aWMgZGVncmVlc1RvUmFkaWFucyhkZWdyZWVzKSB7XG4gICAgICAgIHJldHVybiBkZWdyZWVzICogUGlCeTE4MDtcbiAgICB9XG4gICAgLyoqIOW8p+W6pui9rOinkuW6pu+8jOazqOaEjyBjYW52YXMg5Lit55So55qE6YO95piv5byn5bqm77yM5L2G5piv6KeS5bqm5a+55oiR5Lus5p2l6K+05q+U6L6D55u06KeCICovXG4gICAgc3RhdGljIHJhZGlhbnNUb0RlZ3JlZXMocmFkaWFucykge1xuICAgICAgICByZXR1cm4gcmFkaWFucyAvIFBpQnkxODA7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWwhiBwb2ludCDnu5Ugb3JpZ2luIOaXi+i9rCByYWRpYW5zIOW8p+W6plxuICAgICAqIEBwYXJhbSB7UG9pbnR9IHBvaW50IOimgeaXi+i9rOeahOeCuVxuICAgICAqIEBwYXJhbSB7UG9pbnR9IG9yaWdpbiDml4vovazkuK3lv4PngrlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmFkaWFucyDms6jmhI8gY2FudmFzIOS4reeUqOeahOmDveaYr+W8p+W6plxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgc3RhdGljIHJvdGF0ZVBvaW50KHBvaW50LCBvcmlnaW4sIHJhZGlhbnMpIHtcbiAgICAgICAgY29uc3Qgc2luID0gTWF0aC5zaW4ocmFkaWFucyksIGNvcyA9IE1hdGguY29zKHJhZGlhbnMpO1xuICAgICAgICBwb2ludC5zdWJ0cmFjdEVxdWFscyhvcmlnaW4pO1xuICAgICAgICBjb25zdCByeCA9IHBvaW50LnggKiBjb3MgLSBwb2ludC55ICogc2luO1xuICAgICAgICBjb25zdCByeSA9IHBvaW50LnggKiBzaW4gKyBwb2ludC55ICogY29zO1xuICAgICAgICByZXR1cm4gbmV3IFBvaW50KHJ4LCByeSkuYWRkRXF1YWxzKG9yaWdpbik7XG4gICAgfVxuICAgIC8qKiDljZXnuq/nmoTliJvlu7rkuIDkuKrmlrDnmoQgY2FudmFzIOWFg+e0oCAqL1xuICAgIHN0YXRpYyBjcmVhdGVDYW52YXNFbGVtZW50KCkge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICByZXR1cm4gY2FudmFzO1xuICAgIH1cbiAgICAvKiog57uZ5YWD57Sg5re75Yqg57G75ZCNICovXG4gICAgc3RhdGljIGFkZENsYXNzKGVsZW1lbnQsIGNsYXNzTmFtZSkge1xuICAgICAgICBpZiAoKFwiIFwiICsgZWxlbWVudC5jbGFzc05hbWUgKyBcIiBcIikuaW5kZXhPZihcIiBcIiArIGNsYXNzTmFtZSArIFwiIFwiKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IChlbGVtZW50LmNsYXNzTmFtZSA/IFwiIFwiIDogXCJcIikgKyBjbGFzc05hbWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIOiuoeeul+WFg+e0oOWBj+enu+WAvCAqL1xuICAgIHN0YXRpYyBnZXRFbGVtZW50T2Zmc2V0KGVsZW1lbnQpIHtcbiAgICAgICAgbGV0IHZhbHVlVCA9IDAsIHZhbHVlTCA9IDA7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHZhbHVlVCArPSBlbGVtZW50Lm9mZnNldFRvcCB8fCAwO1xuICAgICAgICAgICAgdmFsdWVMICs9IGVsZW1lbnQub2Zmc2V0TGVmdCB8fCAwO1xuICAgICAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50O1xuICAgICAgICB9IHdoaWxlIChlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIHsgbGVmdDogdmFsdWVMLCB0b3A6IHZhbHVlVCB9O1xuICAgIH1cbiAgICAvKiog5YyF6KO55YWD57Sg5bm25pu/5o2iICovXG4gICAgc3RhdGljIHdyYXBFbGVtZW50KGVsZW1lbnQsIHdyYXBwZXIsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB3cmFwcGVyID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB3cmFwcGVyID0gVXRpbC5tYWtlRWxlbWVudCh3cmFwcGVyLCBhdHRyaWJ1dGVzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHdyYXBwZXIsIGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIHJldHVybiB3cmFwcGVyO1xuICAgIH1cbiAgICAvKiog5paw5bu65YWD57Sg5bm25re75Yqg55u45bqU5bGe5oCnICovXG4gICAgc3RhdGljIG1ha2VFbGVtZW50KHRhZ05hbWUsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcbiAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gXCJjbGFzc1wiKSB7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gYXR0cmlidXRlc1twcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShwcm9wLCBhdHRyaWJ1dGVzW3Byb3BdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWw7XG4gICAgfVxuICAgIC8qKiDnu5nlhYPntKDorr7nva7moLflvI8gKi9cbiAgICBzdGF0aWMgc2V0U3R5bGUoZWxlbWVudCwgc3R5bGVzKSB7XG4gICAgICAgIGxldCBlbGVtZW50U3R5bGUgPSBlbGVtZW50LnN0eWxlO1xuICAgICAgICBpZiAodHlwZW9mIHN0eWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5jc3NUZXh0ICs9IFwiO1wiICsgc3R5bGVzO1xuICAgICAgICAgICAgcmV0dXJuIHN0eWxlcy5pbmRleE9mKFwib3BhY2l0eVwiKSA+IC0xXG4gICAgICAgICAgICAgICAgPyBVdGlsLnNldE9wYWNpdHkoZWxlbWVudCwgc3R5bGVzLm1hdGNoKC9vcGFjaXR5OlxccyooXFxkP1xcLj9cXGQqKS8pWzFdKVxuICAgICAgICAgICAgICAgIDogZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiBzdHlsZXMpIHtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PT0gXCJvcGFjaXR5XCIpIHtcbiAgICAgICAgICAgICAgICBVdGlsLnNldE9wYWNpdHkoZWxlbWVudCwgc3R5bGVzW3Byb3BlcnR5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50U3R5bGVbcHJvcGVydHldID0gc3R5bGVzW3Byb3BlcnR5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgLyoqIOiuvue9ruWFg+e0oOmAj+aYjuW6piAqL1xuICAgIHN0YXRpYyBzZXRPcGFjaXR5KGVsZW1lbnQsIHZhbHVlKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgLyoqIOiuvue9riBjc3Mg55qEIHVzZXJTZWxlY3Qg5qC35byP5Li6IG5vbmXvvIzkuZ/lsLHmmK/kuI3lj6/pgInkuK3nmoTnirbmgIEgKi9cbiAgICBzdGF0aWMgbWFrZUVsZW1lbnRVbnNlbGVjdGFibGUoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnVzZXJTZWxlY3QgPSBcIm5vbmVcIjtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIHN0YXRpYyBhZGRMaXN0ZW5lcihlbGVtZW50LCBldmVudE5hbWUsIGhhbmRsZXIpIHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgZmFsc2UpO1xuICAgIH1cbiAgICBzdGF0aWMgcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgZXZlbnROYW1lLCBoYW5kbGVyKSB7XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIGZhbHNlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHRyYW5zZm9ybSBtYXRyaXggc3RhcnRpbmcgZnJvbSBhbiBvYmplY3Qgb2YgdGhlIHNhbWUga2luZCBvZlxuICAgICAqIHRoZSBvbmUgcmV0dXJuZWQgZnJvbSBxckRlY29tcG9zZSwgdXNlZnVsIGFsc28gaWYgeW91IHdhbnQgdG8gY2FsY3VsYXRlIHNvbWVcbiAgICAgKiB0cmFuc2Zvcm1hdGlvbnMgZnJvbSBhbiBvYmplY3QgdGhhdCBpcyBub3QgZW5saXZlZCB5ZXRcbiAgICAgKiBAc3RhdGljXG4gICAgICogQG1lbWJlck9mIGZhYnJpYy51dGlsXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBvcHRpb25zXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBbb3B0aW9ucy5hbmdsZV1cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IFtvcHRpb25zLnNjYWxlWF1cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IFtvcHRpb25zLnNjYWxlWV1cbiAgICAgKiBAcGFyYW0gIHtCb29sZWFufSBbb3B0aW9ucy5mbGlwWF1cbiAgICAgKiBAcGFyYW0gIHtCb29sZWFufSBbb3B0aW9ucy5mbGlwWV1cbiAgICAgKiBAcGFyYW0gIHtOdW1iZXJ9IFtvcHRpb25zLnNrZXdYXVxuICAgICAqIEBwYXJhbSAge051bWJlcn0gW29wdGlvbnMuc2tld1hdXG4gICAgICogQHBhcmFtICB7TnVtYmVyfSBbb3B0aW9ucy50cmFuc2xhdGVYXVxuICAgICAqIEBwYXJhbSAge051bWJlcn0gW29wdGlvbnMudHJhbnNsYXRlWV1cbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJbXX0gdHJhbnNmb3JtIG1hdHJpeFxuICAgICAqL1xuICAgIHN0YXRpYyBjb21wb3NlTWF0cml4KG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIG1hdHJpeCA9IFsxLCAwLCAwLCAxLCBvcHRpb25zLnRyYW5zbGF0ZVggfHwgMCwgb3B0aW9ucy50cmFuc2xhdGVZIHx8IDBdLCBtdWx0aXBseSA9IFV0aWwubXVsdGlwbHlUcmFuc2Zvcm1NYXRyaWNlcztcbiAgICAgICAgaWYgKG9wdGlvbnMuYW5nbGUpIHtcbiAgICAgICAgICAgIG1hdHJpeCA9IG11bHRpcGx5KG1hdHJpeCwgVXRpbC5jYWxjUm90YXRlTWF0cml4KG9wdGlvbnMpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5zY2FsZVggIT09IDEgfHxcbiAgICAgICAgICAgIG9wdGlvbnMuc2NhbGVZICE9PSAxIHx8XG4gICAgICAgICAgICBvcHRpb25zLnNrZXdYIHx8XG4gICAgICAgICAgICBvcHRpb25zLnNrZXdZIHx8XG4gICAgICAgICAgICBvcHRpb25zLmZsaXBYIHx8XG4gICAgICAgICAgICBvcHRpb25zLmZsaXBZKSB7XG4gICAgICAgICAgICBtYXRyaXggPSBtdWx0aXBseShtYXRyaXgsIFV0aWwuY2FsY0RpbWVuc2lvbnNNYXRyaXgob3B0aW9ucykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXRyaXg7XG4gICAgfVxuICAgIHN0YXRpYyBjYWxjRGltZW5zaW9uc01hdHJpeChvcHRpb25zKSB7XG4gICAgICAgIHZhciBzY2FsZVggPSB0eXBlb2Ygb3B0aW9ucy5zY2FsZVggPT09IFwidW5kZWZpbmVkXCIgPyAxIDogb3B0aW9ucy5zY2FsZVgsIHNjYWxlWSA9IHR5cGVvZiBvcHRpb25zLnNjYWxlWSA9PT0gXCJ1bmRlZmluZWRcIiA/IDEgOiBvcHRpb25zLnNjYWxlWSwgc2NhbGVNYXRyaXggPSBbXG4gICAgICAgICAgICBvcHRpb25zLmZsaXBYID8gLXNjYWxlWCA6IHNjYWxlWCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgb3B0aW9ucy5mbGlwWSA/IC1zY2FsZVkgOiBzY2FsZVksXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgXSwgbXVsdGlwbHkgPSBVdGlsLm11bHRpcGx5VHJhbnNmb3JtTWF0cmljZXMsIGRlZ3JlZXNUb1JhZGlhbnMgPSBVdGlsLmRlZ3JlZXNUb1JhZGlhbnM7XG4gICAgICAgIGlmIChvcHRpb25zLnNrZXdYKSB7XG4gICAgICAgICAgICBzY2FsZU1hdHJpeCA9IG11bHRpcGx5KHNjYWxlTWF0cml4LCBbMSwgMCwgTWF0aC50YW4oZGVncmVlc1RvUmFkaWFucyhvcHRpb25zLnNrZXdYKSksIDFdLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucy5za2V3WSkge1xuICAgICAgICAgICAgc2NhbGVNYXRyaXggPSBtdWx0aXBseShzY2FsZU1hdHJpeCwgWzEsIE1hdGgudGFuKGRlZ3JlZXNUb1JhZGlhbnMob3B0aW9ucy5za2V3WSkpLCAwLCAxXSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNjYWxlTWF0cml4O1xuICAgIH1cbiAgICBzdGF0aWMgY2FsY1JvdGF0ZU1hdHJpeChvcHRpb25zKSB7XG4gICAgICAgIGlmICghb3B0aW9ucy5hbmdsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGlNYXRyaXguY29uY2F0KCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRoZXRhID0gVXRpbC5kZWdyZWVzVG9SYWRpYW5zKG9wdGlvbnMuYW5nbGUpLCBjb3MgPSBNYXRoLmNvcyh0aGV0YSksIHNpbiA9IE1hdGguc2luKHRoZXRhKTtcbiAgICAgICAgcmV0dXJuIFtjb3MsIHNpbiwgLXNpbiwgY29zLCAwLCAwXTtcbiAgICB9XG4gICAgc3RhdGljIG1hdHJpeFRvU1ZHKHRyYW5zZm9ybSkge1xuICAgICAgICByZXR1cm4gKFwibWF0cml4KFwiICtcbiAgICAgICAgICAgIHRyYW5zZm9ybVxuICAgICAgICAgICAgICAgIC5tYXAoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFV0aWwudG9GaXhlZCh2YWx1ZSwgMik7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5qb2luKFwiIFwiKSArXG4gICAgICAgICAgICBcIilcIik7XG4gICAgfVxuICAgIC8vIOa0i+iRseS7u+WKoeaooeWei1xuICAgIHN0YXRpYyBjb21wb3NlKG1pZGRsZXdhcmUpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjb250ZXh0LCBuZXh0KSB7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgICAgIHJldHVybiBkaXNwYXRjaCgwKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGRpc3BhdGNoKGkpIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA8PSBpbmRleClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihcIm5leHQoKSBjYWxsZWQgbXVsdGlwbGUgdGltZXNcIikpO1xuICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICBsZXQgZm4gPSBtaWRkbGV3YXJlW2ldO1xuICAgICAgICAgICAgICAgIGlmIChpID09PSBtaWRkbGV3YXJlLmxlbmd0aClcbiAgICAgICAgICAgICAgICAgICAgZm4gPSBuZXh0O1xuICAgICAgICAgICAgICAgIGlmICghZm4pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZuKGNvbnRleHQsIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlzcGF0Y2goaSArIDEpO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsInZhciBfX3Jlc3QgPSAodGhpcyAmJiB0aGlzLl9fcmVzdCkgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxuICAgICAgICB0W3BdID0gc1twXTtcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcbiAgICAgICAgfVxuICAgIHJldHVybiB0O1xufTtcbmltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vYmFzZS91dGlsc1wiO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tIFwiLi4vYmFzZS9wb2ludFwiO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tIFwiLi4vYmFzZS9ncm91cFwiO1xuaW1wb3J0IHsgRXZlbnRDZW50ZXIgfSBmcm9tIFwiLi4vYmFzZS9ldmVudFwiO1xuaW1wb3J0IERlZmF1bHRQbHVnaW4gZnJvbSBcIi4uL3BsdWdpbnMvZGVmYXVsdC5wbHVnaW5cIjtcbmNvbnN0IFNUUk9LRV9PRkZTRVQgPSAwLjU7XG4vLyDpvKDmoIfmiYvlir9cbmNvbnN0IGN1cnNvck1hcCA9IHtcbiAgICB0cjogXCJuZS1yZXNpemVcIixcbiAgICBicjogXCJzZS1yZXNpemVcIixcbiAgICBibDogXCJzdy1yZXNpemVcIixcbiAgICB0bDogXCJudy1yZXNpemVcIixcbiAgICBtbDogXCJ3LXJlc2l6ZVwiLFxuICAgIG10OiBcIm4tcmVzaXplXCIsXG4gICAgbXI6IFwiZS1yZXNpemVcIixcbiAgICBtYjogXCJzLXJlc2l6ZVwiLFxufTtcbi8qKiDkuIDkupvpvKDmoIfmoLflvI8gKi9cbnZhciBDdXJzb3JTdHlsZTtcbihmdW5jdGlvbiAoQ3Vyc29yU3R5bGUpIHtcbiAgICBDdXJzb3JTdHlsZVtcImRlZmF1bHRcIl0gPSBcImRlZmF1bHRcIjtcbiAgICBDdXJzb3JTdHlsZVtcIm1vdmVcIl0gPSBcIm1vdmVcIjtcbiAgICBDdXJzb3JTdHlsZVtcImhvdmVyXCJdID0gXCJtb3ZlXCI7XG4gICAgQ3Vyc29yU3R5bGVbXCJyb3RhdGlvblwiXSA9IFwiY3Jvc3NoYWlyXCI7XG59KShDdXJzb3JTdHlsZSB8fCAoQ3Vyc29yU3R5bGUgPSB7fSkpO1xuZXhwb3J0IGNsYXNzIENhbnZhcyBleHRlbmRzIEV2ZW50Q2VudGVyIHtcbiAgICBjb25zdHJ1Y3RvcihlbCwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICAvLyNyZWdpb24g5bGe5oCn5a2X5q61XG4gICAgICAgIC8qKiDlvZPliY3mk43kvZznsbvlnosgKi9cbiAgICAgICAgdGhpcy5hY3Rpb24gPSBcImRlZmF1bHRcIjtcbiAgICAgICAgdGhpcy52aWV3cG9ydFRyYW5zZm9ybSA9IFsxLCAwLCAwLCAxLCAwLCAwXTtcbiAgICAgICAgLyoqIOeUu+W4g+S4reaJgOaciea3u+WKoOeahOeJqeS9kyAqL1xuICAgICAgICB0aGlzLl9zaGFwZXMgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvXG4gICAgICAgICAqIFdpbmRvdyDmjqXlj6PnmoQqKmRldmljZVBpeGVsUmF0aW9cbiAgICAgICAgICogIOi/lOWbnuW9k+WJjeaYvuekuuiuvuWkh+eahOeJqeeQhuWDj+e0oOWIhui+qOeOh+S4jkNTUyDlg4/ntKDliIbovqjnjofkuYvmr5TjgIJcbiAgICAgICAgICogIOatpOWAvOS5n+WPr+S7peino+mHiuS4uuWDj+e0oOWkp+Wwj+eahOavlOeOh++8muS4gOS4qiBDU1Mg5YOP57Sg55qE5aSn5bCP5LiO5LiA5Liq54mp55CG5YOP57Sg55qE5aSn5bCP44CCXG4gICAgICAgICAqICDnroDljZXmnaXor7TvvIzlroPlkYror4nmtY/op4jlmajlupTkvb/nlKjlpJrlsJHlsY/luZXlrp7pmYXlg4/ntKDmnaXnu5jliLbljZXkuKogQ1NTIOWDj+e0oOOAglxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5kcHIgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbztcbiAgICAgICAgLy8g57yp5pS+5q+UXG4gICAgICAgIHRoaXMuc2NhbGUgPSAxO1xuICAgICAgICAvLyDkuIrkuIDmrKHnmoTnvKnmlL7mr5RcbiAgICAgICAgdGhpcy5wcmVTY2FsZSA9IDE7XG4gICAgICAgIC8vIOi3neemu+eUu+W4g+WOn+eCueeahOWBj+enu+mHj1xuICAgICAgICB0aGlzLl9jYW52YXNPZmZzZXQgPSB7XG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICB9O1xuICAgICAgICAvKioqKioqKioqKioqKiogIOWPr+mFjee9rumDqOWIhiAgKioqKioqKioqKioqKiovXG4gICAgICAgIC8qKiDpgInmi6nljLrln5/moYbnmoTog4zmma/popzoibIgKi9cbiAgICAgICAgdGhpcy5zZWxlY3Rpb25Db2xvciA9IFwiIzBjOTlmZjI2XCI7XG4gICAgICAgIC8qKiDpgInmi6nljLrln5/moYbnmoTovrnmoYbpopzoibIgKi9cbiAgICAgICAgdGhpcy5zZWxlY3Rpb25Cb3JkZXJDb2xvciA9IFwiIzBjOTlmZlwiO1xuICAgICAgICAvKiog6YCJ5oup5Yy65Z+f55qE6L655qGG5aSn5bCP77yM5ouW6JOd55qE57q/5a69ICovXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uTGluZVdpZHRoID0gMTtcbiAgICAgICAgLy8g5q+P5qyh57yp5pS+55qE5q2l6ZW/XG4gICAgICAgIHRoaXMuc2NhbGVTdGVwID0gMC4yO1xuICAgICAgICAvLyDmnIDlpKfnvKnmlL7mr5RcbiAgICAgICAgdGhpcy5zY2FsZU1heCA9IDg7XG4gICAgICAgIHRoaXMuc2NhbGVNaW4gPSAwLjQ7XG4gICAgICAgIC8vIOaPkuS7tlxuICAgICAgICB0aGlzLnBsdWdpbnMgPSBbRGVmYXVsdFBsdWdpbl07XG4gICAgICAgIC8vIOaMguS7tlxuICAgICAgICB0aGlzLndpZGdldHMgPSBbXTtcbiAgICAgICAgLy8g5Yid5aeL5YyW6YWN572uXG4gICAgICAgIHRoaXMud3JhcHBlckVsZW1lbnQgPSBlbDtcbiAgICAgICAgdGhpcy5faW5pdENvbmZpZyhvcHRpb25zKTtcbiAgICAgICAgLy8g5Yid5aeL5YyW5LiL5bGC55S75biDIG1haW4tY2FudmFzXG4gICAgICAgIHRoaXMuX2luaXRNYWluQ2FudmFzKCk7XG4gICAgICAgIC8vIOWIneWni+WMluS4iuWxgueUu+W4gyB0b3AtY2FudmFzXG4gICAgICAgIHRoaXMuX2luaXRJbnRlcmFjdGl2ZUNhbnZhcygpO1xuICAgICAgICAvLyDliJ3lp4vljJbnvJPlhrLlsYLnlLvluINcbiAgICAgICAgdGhpcy5faW5pdENhY2hlQ2FudmFzKCk7XG4gICAgICAgIC8vIOWkhOeQhuaooeeziumXrumimFxuICAgICAgICB0aGlzLl9pbml0UmV0aW5hU2NhbGluZygpO1xuICAgIH1cbiAgICAvLyNlbmRyZWdpb25cbiAgICAvLyNyZWdpb24g5Yid5aeL5YyW6YC76L6RXG4gICAgLy8g5Yid5aeL5YyW6YWN572uXG4gICAgX2luaXRDb25maWcob3B0aW9ucykge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSBcInBsdWdpbnNcIikge1xuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2lucy5wdXNoKC4uLm9wdGlvbnNba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChrZXkgPT09IFwid2lkZ2V0c1wiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53aWRnZXRzLnB1c2goLi4ub3B0aW9uc1trZXldKTtcbiAgICAgICAgICAgICAgICAvLyDliJ3lp4vljJbmjILku7ZcbiAgICAgICAgICAgICAgICB0aGlzLl9pbml0V2lkZ2V0cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9wdGlvbnMsIGtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2tleV0gPSBvcHRpb25zW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53cmFwcGVyRWxlbWVudC5zdHlsZS53aWR0aCA9IHRoaXMud2lkdGggKyBcInB4XCI7XG4gICAgICAgIHRoaXMud3JhcHBlckVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKyBcInB4XCI7XG4gICAgfVxuICAgIC8vIOWIneWni+WMluaMgui9veaMguS7tlxuICAgIF9pbml0V2lkZ2V0cygpIHtcbiAgICAgICAgdGhpcy53aWRnZXRzLmZvckVhY2goKHdpZGdldCkgPT4ge1xuICAgICAgICAgICAgd2lkZ2V0LmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB3aWRnZXQuZG9tLmlubmVySFRNTCA9IHdpZGdldC5pbm5lckhUTUw7XG4gICAgICAgICAgICB3aWRnZXQuZG9tLnN0eWxlLmRpc3BsYXkgPSBcImluaXRpYWxcIjtcbiAgICAgICAgICAgIHdpZGdldC5kb20uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICB3aWRnZXQuZG9tLnN0eWxlW1wiekluZGV4XCJdID0gXCIxMFwiO1xuICAgICAgICAgICAgdGhpcy53cmFwcGVyRWxlbWVudC5hcHBlbmRDaGlsZCh3aWRnZXQuZG9tKTtcbiAgICAgICAgICAgIHdpZGdldC5yb2NvY28yZCA9IHRoaXM7XG4gICAgICAgICAgICB3aWRnZXQubW91bnQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9pbml0T2JqZWN0KG9iaikge1xuICAgICAgICBvYmouc2V0dXBTdGF0ZSgpO1xuICAgICAgICBvYmouc2V0Q29vcmRzKCk7XG4gICAgICAgIG9iai5jYW52YXMgPSB0aGlzO1xuICAgIH1cbiAgICAvLyDliJ3lp4vljJbkuLvnlLvluINcbiAgICBfaW5pdE1haW5DYW52YXMoKSB7XG4gICAgICAgIHRoaXMubWFpbkNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMud3JhcHBlckVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5tYWluQ2FudmFzKTtcbiAgICAgICAgdGhpcy5fYXBwbHlDYW52YXNTdHlsZSh0aGlzLm1haW5DYW52YXMpO1xuICAgICAgICB0aGlzLm1DdHggPSB0aGlzLm1haW5DYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLmNhbGNPZmZzZXQoKTtcbiAgICB9XG4gICAgLy8g5Yid5aeL5YyW5pON5L2c55S75biDXG4gICAgX2luaXRJbnRlcmFjdGl2ZUNhbnZhcygpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudFRyYW5zZm9ybSA9IG51bGw7XG4gICAgICAgIHRoaXMuX2dyb3VwU2VsZWN0b3IgPSBudWxsO1xuICAgICAgICB0aGlzLnRvcENhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgICAgIHRoaXMud3JhcHBlckVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy50b3BDYW52YXMpO1xuICAgICAgICB0aGlzLl9hcHBseUNhbnZhc1N0eWxlKHRoaXMudG9wQ2FudmFzKTtcbiAgICAgICAgdGhpcy50Q3R4ID0gdGhpcy50b3BDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgICAgICB0aGlzLl9pbml0RXZlbnRzKCk7XG4gICAgfVxuICAgIC8vIOWIneWni+WMlue8k+WGsueUu+W4g1xuICAgIF9pbml0Q2FjaGVDYW52YXMoKSB7XG4gICAgICAgIHRoaXMuY2FjaGVDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuICAgICAgICB0aGlzLl9hcHBseUNhbnZhc1N0eWxlKHRoaXMuY2FjaGVDYW52YXMpO1xuICAgICAgICB0aGlzLmNDdHggPSB0aGlzLmNhY2hlQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB9XG4gICAgLy8g5Yid5aeL5YyW6KeG6KeJ57yp5pS+5q+U5L6LXG4gICAgX2luaXRSZXRpbmFTY2FsaW5nKCkge1xuICAgICAgICBjb25zdCBsb2NhbEluaXRSZXRpbmFTY2FsaW5nID0gKGNhbnZhcywgY3R4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXM7XG4gICAgICAgICAgICAvLyDph43mlrDorr7nva4gY2FudmFzIOiHqui6q+WuvemrmOWkp+Wwj+WSjCBjc3Mg5aSn5bCP44CC5pS+5aSnIGNhbnZhc++8m2NzcyDkv53mjIHkuI3lj5jvvIzlm6DkuLrmiJHku6zpnIDopoHpgqPkuYjlpJrnmoTngrlcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IE1hdGgucm91bmQod2lkdGggKiB0aGlzLmRwcik7XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gTWF0aC5yb3VuZChoZWlnaHQgKiB0aGlzLmRwcik7XG4gICAgICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArIFwicHhcIjtcbiAgICAgICAgICAgIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyBcInB4XCI7XG4gICAgICAgICAgICAvLyDnm7TmjqXnlKggc2NhbGUg5pS+5aSn5pW05Liq5Z2Q5qCH57O777yM55u45a+55p2l6K+05bCx5piv5pS+5aSn5LqG5q+P5Liq57uY5Yi25pON5L2cXG4gICAgICAgICAgICBjdHguc2NhbGUodGhpcy5kcHIsIHRoaXMuZHByKTtcbiAgICAgICAgfTtcbiAgICAgICAgbG9jYWxJbml0UmV0aW5hU2NhbGluZyh0aGlzLm1haW5DYW52YXMsIHRoaXMubUN0eCk7XG4gICAgICAgIGxvY2FsSW5pdFJldGluYVNjYWxpbmcodGhpcy50b3BDYW52YXMsIHRoaXMudEN0eCk7XG4gICAgICAgIGxvY2FsSW5pdFJldGluYVNjYWxpbmcodGhpcy5jYWNoZUNhbnZhcywgdGhpcy5jQ3R4KTtcbiAgICB9XG4gICAgLy8gI2VuZHJlZ2lvblxuICAgIC8vICNyZWdpb24g5LqL5Lu257O757ufXG4gICAgLyoqIOe7meS4iuWxgueUu+W4g+WinuWKoOm8oOagh+S6i+S7tiAqL1xuICAgIF9pbml0RXZlbnRzKCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVNb3VzZURvd24gPSB0aGlzLl9oYW5kbGVNb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5faGFuZGxlTW91c2VNb3ZlID0gdGhpcy5faGFuZGxlTW91c2VNb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZU1vdXNlVXAgPSB0aGlzLl9oYW5kbGVNb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuX2hhbmRsZVdpbmRvd1Jlc2l6ZSA9IHRoaXMuX2hhbmRsZVdpbmRvd1Jlc2l6ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9oYW5kbGVNb3VzZVdoZWVsID0gdGhpcy5faGFuZGxlTW91c2VXaGVlbC5iaW5kKHRoaXMpO1xuICAgICAgICBVdGlsLmFkZExpc3RlbmVyKHdpbmRvdywgXCJyZXNpemVcIiwgdGhpcy5faGFuZGxlV2luZG93UmVzaXplKTtcbiAgICAgICAgVXRpbC5hZGRMaXN0ZW5lcih0aGlzLnRvcENhbnZhcywgXCJtb3VzZWRvd25cIiwgdGhpcy5faGFuZGxlTW91c2VEb3duKTtcbiAgICAgICAgVXRpbC5hZGRMaXN0ZW5lcih0aGlzLnRvcENhbnZhcywgXCJtb3VzZW1vdmVcIiwgdGhpcy5faGFuZGxlTW91c2VNb3ZlKTtcbiAgICAgICAgVXRpbC5hZGRMaXN0ZW5lcih0aGlzLnRvcENhbnZhcywgZG9jdW1lbnQubW96RnVsbFNjcmVlbiA/IFwiRE9NTW91c2VTY3JvbGxcIiA6IFwibW91c2V3aGVlbFwiLCB0aGlzLl9oYW5kbGVNb3VzZVdoZWVsKTtcbiAgICB9XG4gICAgLy8g5omn6KGM5rSL6JGx5Lu75Yqh5qih5Z6LXG4gICAgX2V4ZWN1dGVDb21wb3NlKGtleSwgY3R4KSB7XG4gICAgICAgIGNvbnN0IHdpZGdldE1pZGRsZXMgPSBbXTtcbiAgICAgICAgdGhpcy53aWRnZXRzLmZvckVhY2goKHdpZGdldCkgPT4ge1xuICAgICAgICAgICAgaWYgKHdpZGdldFtrZXldKSB7XG4gICAgICAgICAgICAgICAgd2lkZ2V0TWlkZGxlcy5wdXNoKHdpZGdldFtrZXldLmJpbmQod2lkZ2V0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyDomb3nhLborr7orqHmnInov5Tlm57lgLzvvIzkvYbmmK/lubbkuI3lhbPlv4Plm6DmraTkuI3lpITnkIZcbiAgICAgICAgVXRpbC5jb21wb3NlKFtcbiAgICAgICAgICAgIC4uLnRoaXMucGx1Z2lucy5maWx0ZXIoKHApID0+IHBba2V5XSkubWFwKChwKSA9PiBwW2tleV0pLFxuICAgICAgICAgICAgLi4ud2lkZ2V0TWlkZGxlcyxcbiAgICAgICAgXSkoY3R4KTtcbiAgICB9XG4gICAgLy8g6byg5qCH5LiL5Y6L5LqL5Lu2XG4gICAgX2hhbmRsZU1vdXNlRG93bihlKSB7XG4gICAgICAgIGxldCBwb2ludGVyID0gVXRpbC5nZXRQb2ludGVyKGUsIHRoaXMudG9wQ2FudmFzLCB0aGlzLnNjYWxlKTtcbiAgICAgICAgdGhpcy5fZXhlY3V0ZUNvbXBvc2UoXCJtb3VzZURvd25cIiwgeyBlLCBwb2ludGVyLCByb2NvY28yZDogdGhpcyB9KTtcbiAgICAgICAgVXRpbC5hZGRMaXN0ZW5lcihkb2N1bWVudCwgXCJtb3VzZXVwXCIsIHRoaXMuX2hhbmRsZU1vdXNlVXApO1xuICAgICAgICAvLyDms6jplIDkuqTkupLlsYIgY2FudmFzIOeahOebkeWQrOS6i+S7tu+8jOazqOWGjOaVtOS4qumhtemdoueahOS6i+S7tu+8jOS/neivgem8oOagh+enu+WKqOWIsOWxj+W5leWkluaXtiBtb3ZlIOS6i+S7tuS+neaXp+aJp+ihjFxuICAgICAgICBVdGlsLmFkZExpc3RlbmVyKGRvY3VtZW50LCBcIm1vdXNlbW92ZVwiLCB0aGlzLl9oYW5kbGVNb3VzZU1vdmUpO1xuICAgICAgICBVdGlsLnJlbW92ZUxpc3RlbmVyKHRoaXMudG9wQ2FudmFzLCBcIm1vdXNlbW92ZVwiLCB0aGlzLl9oYW5kbGVNb3VzZU1vdmUpO1xuICAgIH1cbiAgICAvLyDpvKDmoIfnp7vliqjkuovku7ZcbiAgICBfaGFuZGxlTW91c2VNb3ZlKGUpIHtcbiAgICAgICAgbGV0IHBvaW50ZXIgPSBVdGlsLmdldFBvaW50ZXIoZSwgdGhpcy50b3BDYW52YXMsIHRoaXMuc2NhbGUpO1xuICAgICAgICB0aGlzLl9leGVjdXRlQ29tcG9zZShcIm1vdXNlTW92ZVwiLCB7IGUsIHBvaW50ZXIsIHJvY29jbzJkOiB0aGlzIH0pO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIC8vIOm8oOagh+aUvuW8gOS6i+S7tlxuICAgIF9oYW5kbGVNb3VzZVVwKGUpIHtcbiAgICAgICAgdGhpcy5fZXhlY3V0ZUNvbXBvc2UoXCJtb3VzZVVwXCIsIHsgZSwgcm9jb2NvMmQ6IHRoaXMgfSk7XG4gICAgICAgIFV0aWwucmVtb3ZlTGlzdGVuZXIoZG9jdW1lbnQsIFwibW91c2V1cFwiLCB0aGlzLl9oYW5kbGVNb3VzZVVwKTtcbiAgICAgICAgLy8g5rOo6ZSA5pW05Liq6aG16Z2i55qE5LqL5Lu277yM6YCA5Zue5Yiw5Y+q5pyJ5Lqk5LqS5bGCIGNhbnZhcyDkuovku7boiLDoiYfvvIzlj6rlnKggY2FudmFzIOWGheaJp+ihjCBtb3ZlIOS6i+S7tlxuICAgICAgICBVdGlsLnJlbW92ZUxpc3RlbmVyKGRvY3VtZW50LCBcIm1vdXNlbW92ZVwiLCB0aGlzLl9oYW5kbGVNb3VzZU1vdmUpO1xuICAgICAgICBVdGlsLmFkZExpc3RlbmVyKHRoaXMudG9wQ2FudmFzLCBcIm1vdXNlbW92ZVwiLCB0aGlzLl9oYW5kbGVNb3VzZU1vdmUpO1xuICAgIH1cbiAgICAvLyDpvKDmoIfmu5rova7kuovku7ZcbiAgICBfaGFuZGxlTW91c2VXaGVlbChlKSB7XG4gICAgICAgIGxldCBwb2ludGVyID0gVXRpbC5nZXRQb2ludGVyKGUsIHRoaXMudG9wQ2FudmFzLCB0aGlzLnNjYWxlKTtcbiAgICAgICAgdGhpcy5fZXhlY3V0ZUNvbXBvc2UoXCJtb3VzZVdoZWVsXCIsIHsgZSwgcG9pbnRlciwgcm9jb2NvMmQ6IHRoaXMgfSk7XG4gICAgfVxuICAgIC8vIOeql+WPo+e8qeaUvuS6i+S7tlxuICAgIF9oYW5kbGVXaW5kb3dSZXNpemUoKSB7XG4gICAgICAgIC8vIFRPRE86IOaJp+ihjOa0i+iRseS7u+WKoeaooeWei1xuICAgICAgICAvLyB0aGlzLl9leGVjdXRlQ29tcG9zZShcIlwiLCB7Y2FudmFzOiB0aGlzfSlcbiAgICAgICAgdGhpcy5jYWxjT2Zmc2V0KCk7XG4gICAgfVxuICAgIC8vICNlbmRyZWdpb25cbiAgICAvLyAjcmVnaW9uIOWvueixoeaTjeS9nFxuICAgIHNldEFjdGl2ZU9iamVjdChvYmplY3QsIGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZVNoYXBlKSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzlvZPliY3mnInmv4DmtLvniankvZNcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2ZVNoYXBlLnNldEFjdGl2ZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYWN0aXZlU2hhcGUgPSBvYmplY3Q7XG4gICAgICAgIG9iamVjdC5zZXRBY3RpdmUodHJ1ZSk7XG4gICAgICAgIHRoaXMucmVuZGVyQWxsKCk7XG4gICAgICAgIC8vIHRoaXMuZW1pdCgnb2JqZWN0OnNlbGVjdGVkJywgeyB0YXJnZXQ6IG9iamVjdCwgZSB9KTtcbiAgICAgICAgLy8gb2JqZWN0LmVtaXQoJ3NlbGVjdGVkJywgeyBlIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLy8g6I635Y+W5b2T5YmN6YCJ5Lit55qE5YWD57SgXG4gICAgZ2V0QWN0aXZlT2JqZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlU2hhcGU7XG4gICAgfVxuICAgIC8qKiDkvb/miYDmnInlhYPntKDlpLHmtLvvvIzlubbop6blj5Hnm7jlupTkuovku7YgKi9cbiAgICBkZWFjdGl2YXRlQWxsV2l0aERpc3BhdGNoKCkge1xuICAgICAgICAvLyBsZXQgYWN0aXZlT2JqZWN0ID0gdGhpcy5nZXRBY3RpdmVHcm91cCgpIHx8IHRoaXMuZ2V0QWN0aXZlT2JqZWN0KCk7XG4gICAgICAgIC8vIGlmIChhY3RpdmVPYmplY3QpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuZW1pdCgnYmVmb3JlOnNlbGVjdGlvbjpjbGVhcmVkJywgeyB0YXJnZXQ6IGFjdGl2ZU9iamVjdCB9KTtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLmRlYWN0aXZhdGVBbGwoKTtcbiAgICAgICAgLy8gaWYgKGFjdGl2ZU9iamVjdCkge1xuICAgICAgICAvLyAgICAgdGhpcy5lbWl0KCdzZWxlY3Rpb246Y2xlYXJlZCcpO1xuICAgICAgICAvLyB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKiog5bCG5omA5pyJ54mp5L2T6K6+572u5oiQ5pyq5r+A5rS75oCBICovXG4gICAgZGVhY3RpdmF0ZUFsbCgpIHtcbiAgICAgICAgbGV0IGFsbE9iamVjdHMgPSB0aGlzLl9zaGFwZXMsIGkgPSAwLCBsZW4gPSBhbGxPYmplY3RzLmxlbmd0aDtcbiAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgYWxsT2JqZWN0c1tpXS5zZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlzY2FyZEFjdGl2ZUdyb3VwKCk7XG4gICAgICAgIHRoaXMuZGlzY2FyZEFjdGl2ZU9iamVjdCgpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcmVzZXRPYmplY3RUcmFuc2Zvcm0odGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldC5zY2FsZVggPSAxO1xuICAgICAgICB0YXJnZXQuc2NhbGVZID0gMTtcbiAgICAgICAgdGFyZ2V0LnNldEFuZ2xlKDApO1xuICAgIH1cbiAgICAvKiog5riF56m65omA5pyJ5r+A5rS754mp5L2TICovXG4gICAgZGlzY2FyZEFjdGl2ZU9iamVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZVNoYXBlKSB7XG4gICAgICAgICAgICB0aGlzLl9hY3RpdmVTaGFwZS5zZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2FjdGl2ZVNoYXBlID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKiDlubPnp7vlvZPliY3pgInkuK3niankvZPvvIzms6jmhI/ov5nph4zmiJHku6zmsqHmnInnlKggKz0gKi9cbiAgICB0cmFuc2xhdGVPYmplY3QoeCwgeSkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5fY3VycmVudFRyYW5zZm9ybS50YXJnZXQ7XG4gICAgICAgIHRhcmdldC5zZXQoXCJsZWZ0XCIsIHggLSB0aGlzLl9jdXJyZW50VHJhbnNmb3JtLm9mZnNldFgpO1xuICAgICAgICB0YXJnZXQuc2V0KFwidG9wXCIsIHkgLSB0aGlzLl9jdXJyZW50VHJhbnNmb3JtLm9mZnNldFkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDnvKnmlL7lvZPliY3pgInkuK3niankvZNcbiAgICAgKiBAcGFyYW0geCDpvKDmoIfngrkgeFxuICAgICAqIEBwYXJhbSB5IOm8oOagh+eCuSB5XG4gICAgICogQHBhcmFtIGJ5IOaYr+WQpuetieavlOe8qeaUvu+8jHggfCB5IHwgZXF1YWxseVxuICAgICAqL1xuICAgIHNjYWxlT2JqZWN0KHgsIHksIGJ5ID0gXCJlcXVhbGx5XCIpIHtcbiAgICAgICAgbGV0IHQgPSB0aGlzLl9jdXJyZW50VHJhbnNmb3JtLCBvZmZzZXQgPSB0aGlzLl9vZmZzZXQsIHRhcmdldCA9IHQudGFyZ2V0O1xuICAgICAgICAvLyDnvKnmlL7ln7rngrnvvJrmr5TlpoLmi5bmi73lj7PovrnkuK3pl7TnmoTmjqfliLbngrnvvIzlhbblrp7miJHku6zlj4LogIPnmoTlj5jmjaLln7rngrnmmK/lt6bovrnkuK3pl7TnmoTmjqfliLbngrlcbiAgICAgICAgbGV0IGNvbnN0cmFpbnRQb3NpdGlvbiA9IHRhcmdldC50cmFuc2xhdGVUb09yaWdpblBvaW50KHRhcmdldC5nZXRDZW50ZXJQb2ludCgpLCB0Lm9yaWdpblgsIHQub3JpZ2luWSk7XG4gICAgICAgIC8vIOS7peeJqeS9k+WPmOaNouS4reW/g+S4uuWOn+eCueeahOm8oOagh+eCueWdkOagh+WAvFxuICAgICAgICBsZXQgbG9jYWxNb3VzZSA9IHRhcmdldC50b0xvY2FsUG9pbnQobmV3IFBvaW50KHggLSBvZmZzZXQubGVmdCwgeSAtIG9mZnNldC50b3ApLCB0Lm9yaWdpblgsIHQub3JpZ2luWSk7XG4gICAgICAgIGlmICh0Lm9yaWdpblggPT09IFwicmlnaHRcIikge1xuICAgICAgICAgICAgbG9jYWxNb3VzZS54ICo9IC0xO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHQub3JpZ2luWCA9PT0gXCJjZW50ZXJcIikge1xuICAgICAgICAgICAgbG9jYWxNb3VzZS54ICo9IHQubW91c2VYU2lnbiAqIDI7XG4gICAgICAgICAgICBpZiAobG9jYWxNb3VzZS54IDwgMCkge1xuICAgICAgICAgICAgICAgIHQubW91c2VYU2lnbiA9IC10Lm1vdXNlWFNpZ247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHQub3JpZ2luWSA9PT0gXCJib3R0b21cIikge1xuICAgICAgICAgICAgbG9jYWxNb3VzZS55ICo9IC0xO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHQub3JpZ2luWSA9PT0gXCJjZW50ZXJcIikge1xuICAgICAgICAgICAgbG9jYWxNb3VzZS55ICo9IHQubW91c2VZU2lnbiAqIDI7XG4gICAgICAgICAgICBpZiAobG9jYWxNb3VzZS55IDwgMCkge1xuICAgICAgICAgICAgICAgIHQubW91c2VZU2lnbiA9IC10Lm1vdXNlWVNpZ247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g6K6h566X5paw55qE57yp5pS+5YC877yM5Lul5Y+Y5o2i5Lit5b+D5Li65Y6f54K577yM5qC55o2u5pys5Zyw6byg5qCH5Z2Q5qCH54K5L+WOn+Wni+WuveW6pui/m+ihjOiuoeeul++8jOmHjeaWsOiuvuWumueJqeS9k+e8qeaUvuWAvFxuICAgICAgICBsZXQgbmV3U2NhbGVYID0gdGFyZ2V0LnNjYWxlWCwgbmV3U2NhbGVZID0gdGFyZ2V0LnNjYWxlWTtcbiAgICAgICAgaWYgKGJ5ID09PSBcImVxdWFsbHlcIikge1xuICAgICAgICAgICAgbGV0IGRpc3QgPSBsb2NhbE1vdXNlLnkgKyBsb2NhbE1vdXNlLng7XG4gICAgICAgICAgICBsZXQgbGFzdERpc3QgPSB0YXJnZXQuaGVpZ2h0ICogdC5vcmlnaW5hbC5zY2FsZVkgK1xuICAgICAgICAgICAgICAgIHRhcmdldC53aWR0aCAqIHQub3JpZ2luYWwuc2NhbGVYICtcbiAgICAgICAgICAgICAgICB0YXJnZXQucGFkZGluZyAqIDIgLVxuICAgICAgICAgICAgICAgIHRhcmdldC5zdHJva2VXaWR0aCAqIDIgK1xuICAgICAgICAgICAgICAgIDE7IC8qIGFkZGl0aW9uYWwgb2Zmc2V0IG5lZWRlZCBwcm9iYWJseSBkdWUgdG8gc3VicGl4ZWwgcmVuZGVyaW5nLCBhbmQgYXZvaWRzIGplcmsgd2hlbiBzY2FsaW5nIGFuIG9iamVjdCAqL1xuICAgICAgICAgICAgLy8gV2UgdXNlIHQuc2NhbGVYL1kgaW5zdGVhZCBvZiB0YXJnZXQuc2NhbGVYL1kgYmVjYXVzZSB0aGUgb2JqZWN0IG1heSBoYXZlIGEgbWluIHNjYWxlIGFuZCB3ZSdsbCBsb29zZSB0aGUgcHJvcG9ydGlvbnNcbiAgICAgICAgICAgIG5ld1NjYWxlWCA9ICh0Lm9yaWdpbmFsLnNjYWxlWCAqIGRpc3QpIC8gbGFzdERpc3Q7XG4gICAgICAgICAgICBuZXdTY2FsZVkgPSAodC5vcmlnaW5hbC5zY2FsZVkgKiBkaXN0KSAvIGxhc3REaXN0O1xuICAgICAgICAgICAgdGFyZ2V0LnNldChcInNjYWxlWFwiLCBuZXdTY2FsZVgpO1xuICAgICAgICAgICAgdGFyZ2V0LnNldChcInNjYWxlWVwiLCBuZXdTY2FsZVkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFieSkge1xuICAgICAgICAgICAgbmV3U2NhbGVYID0gbG9jYWxNb3VzZS54IC8gKHRhcmdldC53aWR0aCArIHRhcmdldC5wYWRkaW5nKTtcbiAgICAgICAgICAgIG5ld1NjYWxlWSA9IGxvY2FsTW91c2UueSAvICh0YXJnZXQuaGVpZ2h0ICsgdGFyZ2V0LnBhZGRpbmcpO1xuICAgICAgICAgICAgdGFyZ2V0LnNldChcInNjYWxlWFwiLCBuZXdTY2FsZVgpO1xuICAgICAgICAgICAgdGFyZ2V0LnNldChcInNjYWxlWVwiLCBuZXdTY2FsZVkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGJ5ID09PSBcInhcIikge1xuICAgICAgICAgICAgbmV3U2NhbGVYID0gbG9jYWxNb3VzZS54IC8gKHRhcmdldC53aWR0aCArIHRhcmdldC5wYWRkaW5nKTtcbiAgICAgICAgICAgIHRhcmdldC5zZXQoXCJzY2FsZVhcIiwgbmV3U2NhbGVYKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChieSA9PT0gXCJ5XCIpIHtcbiAgICAgICAgICAgIG5ld1NjYWxlWSA9IGxvY2FsTW91c2UueSAvICh0YXJnZXQuaGVpZ2h0ICsgdGFyZ2V0LnBhZGRpbmcpO1xuICAgICAgICAgICAgdGFyZ2V0LnNldChcInNjYWxlWVwiLCBuZXdTY2FsZVkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWmguaenOaYr+WPjeWQkeaLieS8uCB4XG4gICAgICAgIGlmIChuZXdTY2FsZVggPCAwKSB7XG4gICAgICAgICAgICBpZiAodC5vcmlnaW5YID09PSBcImxlZnRcIilcbiAgICAgICAgICAgICAgICB0Lm9yaWdpblggPSBcInJpZ2h0XCI7XG4gICAgICAgICAgICBlbHNlIGlmICh0Lm9yaWdpblggPT09IFwicmlnaHRcIilcbiAgICAgICAgICAgICAgICB0Lm9yaWdpblggPSBcImxlZnRcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyDlpoLmnpzmmK/lj43lkJHmi4nkvLggeVxuICAgICAgICBpZiAobmV3U2NhbGVZIDwgMCkge1xuICAgICAgICAgICAgaWYgKHQub3JpZ2luWSA9PT0gXCJ0b3BcIilcbiAgICAgICAgICAgICAgICB0Lm9yaWdpblkgPSBcImJvdHRvbVwiO1xuICAgICAgICAgICAgZWxzZSBpZiAodC5vcmlnaW5ZID09PSBcImJvdHRvbVwiKVxuICAgICAgICAgICAgICAgIHQub3JpZ2luWSA9IFwidG9wXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8g57yp5pS+5Lya5pS55Y+Y54mp5L2T5L2N572u77yM5omA5Lul6KaB6YeN5paw6K6+572uXG4gICAgICAgIHRhcmdldC5zZXRQb3NpdGlvbkJ5T3JpZ2luKGNvbnN0cmFpbnRQb3NpdGlvbiwgdC5vcmlnaW5YLCB0Lm9yaWdpblkpO1xuICAgIH1cbiAgICAvKiog5peL6L2s5b2T5YmN6YCJ5Lit54mp5L2T77yM6L+Z6YeM55So55qE5pivICs9ICovXG4gICAgcm90YXRlT2JqZWN0KHgsIHkpIHtcbiAgICAgICAgY29uc3QgdCA9IHRoaXMuX2N1cnJlbnRUcmFuc2Zvcm07XG4gICAgICAgIGNvbnN0IG8gPSB0aGlzLl9vZmZzZXQ7XG4gICAgICAgIC8vIOm8oOagh+aMieS4i+eahOeCueS4jueJqeS9k+S4reW/g+eCuei/nue6v+WSjCB4IOi9tOato+aWueWQkeW9ouaIkOeahOW8p+W6plxuICAgICAgICBjb25zdCBsYXN0QW5nbGUgPSBNYXRoLmF0YW4yKHQuZXkgLSBvLnRvcCAtIHQudG9wLCB0LmV4IC0gby5sZWZ0IC0gdC5sZWZ0KTtcbiAgICAgICAgLy8g6byg5qCH5ouW5ou955qE57uI54K55LiO54mp5L2T5Lit5b+D54K56L+e57q/5ZKMIHgg6L205q2j5pa55ZCR5b2i5oiQ55qE5byn5bqmXG4gICAgICAgIGNvbnN0IGN1ckFuZ2xlID0gTWF0aC5hdGFuMih5IC0gby50b3AgLSB0LnRvcCwgeCAtIG8ubGVmdCAtIHQubGVmdCk7XG4gICAgICAgIGxldCBhbmdsZSA9IFV0aWwucmFkaWFuc1RvRGVncmVlcyhjdXJBbmdsZSAtIGxhc3RBbmdsZSArIHQudGhldGEpOyAvLyDmlrDnmoTop5LluqYgPSDlj5jmjaLnmoTop5LluqYgKyDljp/mnaXnmoTop5LluqZcbiAgICAgICAgaWYgKGFuZ2xlIDwgMCkge1xuICAgICAgICAgICAgYW5nbGUgPSAzNjAgKyBhbmdsZTtcbiAgICAgICAgfVxuICAgICAgICBhbmdsZSA9IGFuZ2xlICUgMzYwO1xuICAgICAgICB0LnRhcmdldC5hbmdsZSA9IGFuZ2xlO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDojrflj5bmi5bok53pgInljLrljIXlm7TnmoTlhYPntKBcbiAgICAgKiDlj6/og73lj6rmnInkuIDkuKrniankvZPvvIzpgqPlsLHmmK/mma7pgJrnmoTngrnpgIlcbiAgICAgKiDlpoLmnpzmnInlpJrkuKrniankvZPvvIzpgqPlsLHnlJ/miJDkuIDkuKrnu4RcbiAgICAgKi9cbiAgICBmaW5kU2VsZWN0ZWRPYmplY3RzKGUpIHtcbiAgICAgICAgbGV0IG9iamVjdHMgPSBbXSwgLy8g5a2Y5YKo5pyA57uI5qGG6YCJ55qE5YWD57SgXG4gICAgICAgIHgxID0gdGhpcy5fZ3JvdXBTZWxlY3Rvci5leCwgeTEgPSB0aGlzLl9ncm91cFNlbGVjdG9yLmV5LCB4MiA9IHgxICsgdGhpcy5fZ3JvdXBTZWxlY3Rvci5sZWZ0LCB5MiA9IHkxICsgdGhpcy5fZ3JvdXBTZWxlY3Rvci50b3AsIHNlbGVjdGlvblgxWTEgPSBuZXcgUG9pbnQoTWF0aC5taW4oeDEsIHgyKSwgTWF0aC5taW4oeTEsIHkyKSksIHNlbGVjdGlvblgyWTIgPSBuZXcgUG9pbnQoTWF0aC5tYXgoeDEsIHgyKSwgTWF0aC5tYXgoeTEsIHkyKSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLl9zaGFwZXMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50T2JqZWN0ID0gdGhpcy5fc2hhcGVzW2ldO1xuICAgICAgICAgICAgaWYgKCFjdXJyZW50T2JqZWN0KVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgLy8g54mp5L2T5piv5ZCm5LiO5ouW6JOd6YCJ5Yy655u45Lqk5oiW6ICF6KKr6YCJ5Yy65YyF5ZCrXG4gICAgICAgICAgICBpZiAoY3VycmVudE9iamVjdC5pbnRlcnNlY3RzV2l0aFJlY3Qoc2VsZWN0aW9uWDFZMSwgc2VsZWN0aW9uWDJZMikgfHxcbiAgICAgICAgICAgICAgICBjdXJyZW50T2JqZWN0LmlzQ29udGFpbmVkV2l0aGluUmVjdChzZWxlY3Rpb25YMVkxLCBzZWxlY3Rpb25YMlkyKSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRPYmplY3Quc2V0QWN0aXZlKHRydWUpO1xuICAgICAgICAgICAgICAgIG9iamVjdHMucHVzaChjdXJyZW50T2JqZWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAob2JqZWN0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlT2JqZWN0KG9iamVjdHNbMF0sIGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9iamVjdHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgY29uc3QgbmV3R3JvdXAgPSBuZXcgR3JvdXAob2JqZWN0cyk7XG4gICAgICAgICAgICB0aGlzLnNldEFjdGl2ZUdyb3VwKG5ld0dyb3VwKTtcbiAgICAgICAgICAgIC8vIG5ld0dyb3VwLnNhdmVDb29yZHMoKTtcbiAgICAgICAgICAgIC8vIHRoaXMuZW1pdCgnc2VsZWN0aW9uOmNyZWF0ZWQnLCB7IHRhcmdldDogbmV3R3JvdXAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW5kZXJBbGwoKTtcbiAgICB9IC8qKiDorrDlvZXlvZPliY3niankvZPnmoTlj5jmjaLnirbmgIEgKi9cbiAgICBzZXR1cEN1cnJlbnRUcmFuc2Zvcm0oZSwgdGFyZ2V0KSB7XG4gICAgICAgIGxldCBhY3Rpb24gPSBcImRyYWdcIiwgY29ybmVyLCBwb2ludGVyID0gVXRpbC5nZXRQb2ludGVyKGUsIHRhcmdldC5jYW52YXMudG9wQ2FudmFzLCB0aGlzLnNjYWxlKTtcbiAgICAgICAgY29ybmVyID0gdGFyZ2V0Ll9maW5kVGFyZ2V0Q29ybmVyKGUsIHRoaXMuX29mZnNldCk7XG4gICAgICAgIGlmIChjb3JuZXIpIHtcbiAgICAgICAgICAgIC8vIOagueaNrueCueWHu+eahOaOp+WItueCueWIpOaWreatpOasoeaTjeS9nOaYr+S7gOS5iFxuICAgICAgICAgICAgYWN0aW9uID1cbiAgICAgICAgICAgICAgICBjb3JuZXIgPT09IFwibWxcIiB8fCBjb3JuZXIgPT09IFwibXJcIlxuICAgICAgICAgICAgICAgICAgICA/IFwic2NhbGVYXCJcbiAgICAgICAgICAgICAgICAgICAgOiBjb3JuZXIgPT09IFwibXRcIiB8fCBjb3JuZXIgPT09IFwibWJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBcInNjYWxlWVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGNvcm5lciA9PT0gXCJtdHJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJyb3RhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJzY2FsZVwiO1xuICAgICAgICB9XG4gICAgICAgIGxldCBvcmlnaW5YID0gXCJjZW50ZXJcIiwgb3JpZ2luWSA9IFwiY2VudGVyXCI7XG4gICAgICAgIGlmIChjb3JuZXIgPT09IFwibWxcIiB8fCBjb3JuZXIgPT09IFwidGxcIiB8fCBjb3JuZXIgPT09IFwiYmxcIikge1xuICAgICAgICAgICAgLy8g5aaC5p6c54K55Ye755qE5piv5bem6L6555qE5o6n5Yi254K577yM5YiZ5Y+Y5o2i5Z+654K55bCx5piv5Y+z6L6577yM5Lul5Y+z6L655Li65Z+65YeG5ZCR5bem5Y+Y5o2iXG4gICAgICAgICAgICBvcmlnaW5YID0gXCJyaWdodFwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvcm5lciA9PT0gXCJtclwiIHx8IGNvcm5lciA9PT0gXCJ0clwiIHx8IGNvcm5lciA9PT0gXCJiclwiKSB7XG4gICAgICAgICAgICBvcmlnaW5YID0gXCJsZWZ0XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvcm5lciA9PT0gXCJ0bFwiIHx8IGNvcm5lciA9PT0gXCJtdFwiIHx8IGNvcm5lciA9PT0gXCJ0clwiKSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzngrnlh7vnmoTmmK/kuIrmlrnnmoTmjqfliLbngrnvvIzliJnlj5jmjaLln7rngrnlsLHmmK/lupXpg6jvvIzku6XlupXovrnkuLrln7rlh4blkJHkuIrlj5jmjaJcbiAgICAgICAgICAgIG9yaWdpblkgPSBcImJvdHRvbVwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvcm5lciA9PT0gXCJibFwiIHx8IGNvcm5lciA9PT0gXCJtYlwiIHx8IGNvcm5lciA9PT0gXCJiclwiKSB7XG4gICAgICAgICAgICBvcmlnaW5ZID0gXCJ0b3BcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29ybmVyID09PSBcIm10clwiKSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzmmK/ml4vovazmk43kvZzvvIzliJnln7rngrnlsLHmmK/kuK3lv4PngrlcbiAgICAgICAgICAgIG9yaWdpblggPSBcImNlbnRlclwiO1xuICAgICAgICAgICAgb3JpZ2luWSA9IFwiY2VudGVyXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbGV0IGNlbnRlciA9IHRhcmdldC5nZXRDZW50ZXJQb2ludCgpO1xuICAgICAgICB0aGlzLl9jdXJyZW50VHJhbnNmb3JtID0ge1xuICAgICAgICAgICAgdGFyZ2V0LFxuICAgICAgICAgICAgYWN0aW9uLFxuICAgICAgICAgICAgc2NhbGVYOiB0YXJnZXQuc2NhbGVYLFxuICAgICAgICAgICAgc2NhbGVZOiB0YXJnZXQuc2NhbGVZLFxuICAgICAgICAgICAgb2Zmc2V0WDogcG9pbnRlci54IC0gdGFyZ2V0LmxlZnQsXG4gICAgICAgICAgICBvZmZzZXRZOiBwb2ludGVyLnkgLSB0YXJnZXQudG9wLFxuICAgICAgICAgICAgb3JpZ2luWCxcbiAgICAgICAgICAgIG9yaWdpblksXG4gICAgICAgICAgICBleDogcG9pbnRlci54LFxuICAgICAgICAgICAgZXk6IHBvaW50ZXIueSxcbiAgICAgICAgICAgIGxlZnQ6IHRhcmdldC5sZWZ0LFxuICAgICAgICAgICAgdG9wOiB0YXJnZXQudG9wLFxuICAgICAgICAgICAgdGhldGE6IFV0aWwuZGVncmVlc1RvUmFkaWFucyh0YXJnZXQuYW5nbGUpLFxuICAgICAgICAgICAgd2lkdGg6IHRhcmdldC53aWR0aCAqIHRhcmdldC5zY2FsZVgsXG4gICAgICAgICAgICBtb3VzZVhTaWduOiAxLFxuICAgICAgICAgICAgbW91c2VZU2lnbjogMSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8g6K6w5b2V54mp5L2T5Y6f5aeL55qEIG9yaWdpbmFsIOWPmOaNouWPguaVsFxuICAgICAgICB0aGlzLl9jdXJyZW50VHJhbnNmb3JtLm9yaWdpbmFsID0ge1xuICAgICAgICAgICAgbGVmdDogdGFyZ2V0LmxlZnQsXG4gICAgICAgICAgICB0b3A6IHRhcmdldC50b3AsXG4gICAgICAgICAgICBzY2FsZVg6IHRhcmdldC5zY2FsZVgsXG4gICAgICAgICAgICBzY2FsZVk6IHRhcmdldC5zY2FsZVksXG4gICAgICAgICAgICBvcmlnaW5YLFxuICAgICAgICAgICAgb3JpZ2luWSxcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IF9hID0gdGhpcy5fY3VycmVudFRyYW5zZm9ybSwgeyB0YXJnZXQ6IHRhcmdldDIgfSA9IF9hLCBvdGhlciA9IF9fcmVzdChfYSwgW1widGFyZ2V0XCJdKTtcbiAgICAgICAgLy8gdGhpcy5yZXNldEN1cnJlbnRUcmFuc2Zvcm0oZSk7IC8vIOWlveWDj+ayoeW/heimgemHjeaWsOi1i+WAvO+8n+mZpOmdnuaMieS4i+S6hiBhbHRLZXkg6ZSuXG4gICAgfVxuICAgIC8qKiDph43nva7lvZPliY0gdHJhbnNmb3JtIOeKtuaAgeS4uiBvcmlnaW5hbO+8jOW5tuiuvue9riByZXNpemluZyDnmoTln7rngrkgKi9cbiAgICByZXNldEN1cnJlbnRUcmFuc2Zvcm0oZSkge1xuICAgICAgICBsZXQgdCA9IHRoaXMuX2N1cnJlbnRUcmFuc2Zvcm07XG4gICAgICAgIHQudGFyZ2V0LnNldChcInNjYWxlWFwiLCB0Lm9yaWdpbmFsLnNjYWxlWCk7XG4gICAgICAgIHQudGFyZ2V0LnNldChcInNjYWxlWVwiLCB0Lm9yaWdpbmFsLnNjYWxlWSk7XG4gICAgICAgIHQudGFyZ2V0LnNldChcImxlZnRcIiwgdC5vcmlnaW5hbC5sZWZ0KTtcbiAgICAgICAgdC50YXJnZXQuc2V0KFwidG9wXCIsIHQub3JpZ2luYWwudG9wKTtcbiAgICAgICAgaWYgKGUuYWx0S2V5KSB7XG4gICAgICAgICAgICBpZiAodC5vcmlnaW5YICE9PSBcImNlbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHQub3JpZ2luWCA9PT0gXCJyaWdodFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHQubW91c2VYU2lnbiA9IC0xO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdC5tb3VzZVhTaWduID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodC5vcmlnaW5ZICE9PSBcImNlbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHQub3JpZ2luWSA9PT0gXCJib3R0b21cIikge1xuICAgICAgICAgICAgICAgICAgICB0Lm1vdXNlWVNpZ24gPSAtMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHQubW91c2VZU2lnbiA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdC5vcmlnaW5YID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgIHQub3JpZ2luWSA9IFwiY2VudGVyXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0Lm9yaWdpblggPSB0Lm9yaWdpbmFsLm9yaWdpblg7XG4gICAgICAgICAgICB0Lm9yaWdpblkgPSB0Lm9yaWdpbmFsLm9yaWdpblk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gI2VuZHJlZ2lvblxuICAgIC8vICNyZWdpb24g57uE5pON5L2cXG4gICAgZ2V0QWN0aXZlR3JvdXAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmVHcm91cDtcbiAgICB9XG4gICAgc2V0QWN0aXZlR3JvdXAoZ3JvdXApIHtcbiAgICAgICAgdGhpcy5fYWN0aXZlR3JvdXAgPSBncm91cDtcbiAgICAgICAgaWYgKGdyb3VwKSB7XG4gICAgICAgICAgICBncm91cC5jYW52YXMgPSB0aGlzO1xuICAgICAgICAgICAgZ3JvdXAuc2V0QWN0aXZlKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKiog5bCG5b2T5YmN6YCJ5Lit57uE5aSx5rS7ICovXG4gICAgZGlzY2FyZEFjdGl2ZUdyb3VwKCkge1xuICAgICAgICBsZXQgZyA9IHRoaXMuZ2V0QWN0aXZlR3JvdXAoKTtcbiAgICAgICAgaWYgKGcpXG4gICAgICAgICAgICBnLmRlc3Ryb3koKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0QWN0aXZlR3JvdXAobnVsbCk7XG4gICAgfVxuICAgIC8qKiDmmK/lkKbopoHlpITnkIbnu4TnmoTpgLvovpEgKi9cbiAgICBzaG91bGRIYW5kbGVHcm91cExvZ2ljKGUsIHRhcmdldCkge1xuICAgICAgICBsZXQgYWN0aXZlT2JqZWN0ID0gdGhpcy5fYWN0aXZlU2hhcGU7XG4gICAgICAgIHJldHVybiAoZS5zaGlmdEtleSAmJlxuICAgICAgICAgICAgKHRoaXMuZ2V0QWN0aXZlR3JvdXAoKSB8fCAoYWN0aXZlT2JqZWN0ICYmIGFjdGl2ZU9iamVjdCAhPT0gdGFyZ2V0KSkpO1xuICAgIH1cbiAgICBoYW5kbGVHcm91cExvZ2ljKGUsIHRhcmdldCkge1xuICAgICAgICBpZiAodGFyZ2V0ID09PSB0aGlzLmdldEFjdGl2ZUdyb3VwKCkpIHtcbiAgICAgICAgICAgIC8vIGlmIGl0J3MgYSBncm91cCwgZmluZCB0YXJnZXQgYWdhaW4sIHRoaXMgdGltZSBza2lwcGluZyBncm91cFxuICAgICAgICAgICAgdGFyZ2V0ID0gdGhpcy5maW5kVGFyZ2V0KGUsIHRydWUpO1xuICAgICAgICAgICAgLy8gaWYgZXZlbiBvYmplY3QgaXMgbm90IGZvdW5kLCBiYWlsIG91dFxuICAgICAgICAgICAgaWYgKCF0YXJnZXQgfHwgdGFyZ2V0LmlzVHlwZShcImdyb3VwXCIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBhY3RpdmVHcm91cCA9IHRoaXMuZ2V0QWN0aXZlR3JvdXAoKTtcbiAgICAgICAgaWYgKGFjdGl2ZUdyb3VwKSB7XG4gICAgICAgICAgICBpZiAoYWN0aXZlR3JvdXAuY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUdyb3VwLnJlbW92ZVdpdGhVcGRhdGUodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0T2JqZWN0VHJhbnNmb3JtKGFjdGl2ZUdyb3VwKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aXZlR3JvdXAuc2l6ZSgpID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzY2FyZEFjdGl2ZUdyb3VwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlR3JvdXAuYWRkV2l0aFVwZGF0ZSh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRPYmplY3RUcmFuc2Zvcm0oYWN0aXZlR3JvdXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWN0aXZlR3JvdXAuc2V0QWN0aXZlKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZVNoYXBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldCAhPT0gdGhpcy5fYWN0aXZlU2hhcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGdyb3VwID0gbmV3IEdyb3VwKFt0aGlzLl9hY3RpdmVTaGFwZSwgdGFyZ2V0XSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlR3JvdXAoZ3JvdXApO1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVHcm91cCA9IHRoaXMuZ2V0QWN0aXZlR3JvdXAoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXQuc2V0QWN0aXZlKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vICNlbmRyZWdpb25cbiAgICAvLyAjcmVnaW9uIOeUu+W4g+aTjeS9nFxuICAgIC8qKiDmt7vliqDlhYPntKBcbiAgICAgKiDnm67liY3nmoTmqKHlvI/mmK/osIPnlKggYWRkIOa3u+WKoOeJqeS9k+eahOaXtuWAmeWwseeri+mprOa4suafk++8jFxuICAgICAqIOWmguaenOS4gOasoeaAp+WKoOWFpeWkp+mHj+WFg+e0oO+8jOWwseS8muWBmuW+iOWkmuaXoOeUqOWKn++8jFxuICAgICAqIOaJgOS7peWPr+S7peWKoOS4gOS4quWxnuaAp+adpeWFiOaJuemHj+a3u+WKoOWFg+e0oO+8jOacgOWQjuWGjeS4gOasoea4suafk++8iOaJi+WKqOiwg+eUqCByZW5kZXJBbGwg5Ye95pWw5Y2z5Y+v77yJXG4gICAgICovXG4gICAgYWRkKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5fc2hhcGVzLnB1c2guYXBwbHkodGhpcy5fc2hhcGVzLCBhcmdzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IGFyZ3MubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICB0aGlzLl9pbml0T2JqZWN0KGFyZ3NbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVuZGVyQWxsKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvLyDorr7nva4gY2FudmFzIOeahOWuvemrmOS7peWPiui1t+Wni+eCuVxuICAgIF9hcHBseUNhbnZhc1N0eWxlKGVsKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IHRoaXMud2lkdGggfHwgZWwud2lkdGg7XG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLmhlaWdodCB8fCBlbC5oZWlnaHQ7XG4gICAgICAgIFV0aWwuc2V0U3R5bGUoZWwsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGggKyBcInB4XCIsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodCArIFwicHhcIixcbiAgICAgICAgICAgIFwibWFyZ2luLWxlZnRcIjogMCxcbiAgICAgICAgICAgIFwibWFyZ2luLXRvcFwiOiAwLFxuICAgICAgICB9KTtcbiAgICAgICAgZWwud2lkdGggPSB3aWR0aDtcbiAgICAgICAgZWwuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBVdGlsLm1ha2VFbGVtZW50VW5zZWxlY3RhYmxlKGVsKTtcbiAgICB9XG4gICAgLyoqIOWmguaenOW9k+WJjeeahOeJqeS9k+WcqOW9k+WJjeeahOe7hOWGhe+8jOWImeimgeiAg+iZkeaJo+WOu+e7hOeahCB0b3DjgIFsZWZ0IOWAvCAqL1xuICAgIF9ub3JtYWxpemVQb2ludGVyKG9iamVjdCwgcG9pbnRlcikge1xuICAgICAgICBsZXQgYWN0aXZlR3JvdXAgPSB0aGlzLmdldEFjdGl2ZUdyb3VwKCksIHggPSBwb2ludGVyLngsIHkgPSBwb2ludGVyLnk7XG4gICAgICAgIGxldCBpc09iamVjdEluR3JvdXAgPSBhY3RpdmVHcm91cCAmJiBvYmplY3QudHlwZSAhPT0gXCJncm91cFwiICYmIGFjdGl2ZUdyb3VwLmNvbnRhaW5zKG9iamVjdCk7XG4gICAgICAgIGlmIChpc09iamVjdEluR3JvdXApIHtcbiAgICAgICAgICAgIHggLT0gYWN0aXZlR3JvdXAubGVmdDtcbiAgICAgICAgICAgIHkgLT0gYWN0aXZlR3JvdXAudG9wO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHgsIHkgfTtcbiAgICB9XG4gICAgLyoqIOWwhuaJgOacieeJqeS9k+WIhuaIkOS4pOS4que7hO+8jOS4gOe7hOaYr+acqua/gOa0u+aAge+8jOS4gOe7hOaYr+a/gOa0u+aAge+8jOeEtuWQjuWwhua/gOa0u+e7hOaUvuWcqOacgOWQju+8jOi/meagt+WwseiDveWkn+e7mOWItuWIsOacgOS4iuWxgiAqL1xuICAgIF9jaG9vc2VPYmplY3RzVG9SZW5kZXIoKSB7XG4gICAgICAgIC8vIOW9k+WJjeacieayoeaciea/gOa0u+eahOeJqeS9k1xuICAgICAgICBsZXQgYWN0aXZlT2JqZWN0ID0gdGhpcy5nZXRBY3RpdmVPYmplY3QoKTtcbiAgICAgICAgLy8g5b2T5YmN5pyJ5rKh5pyJ5r+A5rS755qE57uE77yI5Lmf5bCx5piv5aSa5Liq54mp5L2T77yJXG4gICAgICAgIGxldCBhY3RpdmVHcm91cCA9IHRoaXMuZ2V0QWN0aXZlR3JvdXAoKTtcbiAgICAgICAgLy8g5pyA57uI6KaB5riy5p+T55qE54mp5L2T6aG65bqP77yM5Lmf5bCx5piv5oqK5r+A5rS755qE54mp5L2T5pS+5Zyo5ZCO6Z2i57uY5Yi2XG4gICAgICAgIGxldCBvYmpzVG9SZW5kZXIgPSBbXTtcbiAgICAgICAgaWYgKGFjdGl2ZUdyb3VwKSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzpgInkuK3lpJrkuKrniankvZNcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUdyb3VwT2JqZWN0cyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbmd0aCA9IHRoaXMuX3NoYXBlcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBvYmplY3QgPSB0aGlzLl9zaGFwZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZUdyb3VwLmNvbnRhaW5zKG9iamVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlR3JvdXBPYmplY3RzLnB1c2gob2JqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG9ianNUb1JlbmRlci5wdXNoKG9iamVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2Jqc1RvUmVuZGVyLnB1c2goYWN0aXZlR3JvdXApO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFjdGl2ZU9iamVjdCkge1xuICAgICAgICAgICAgLy8g5aaC5p6c5Y+q6YCJ5Lit5LiA5Liq54mp5L2TXG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLl9zaGFwZXMuaW5kZXhPZihhY3RpdmVPYmplY3QpO1xuICAgICAgICAgICAgb2Jqc1RvUmVuZGVyID0gdGhpcy5fc2hhcGVzLnNsaWNlKCk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIG9ianNUb1JlbmRlci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIG9ianNUb1JlbmRlci5wdXNoKGFjdGl2ZU9iamVjdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyDmiYDmnInniankvZPpg73msqHooqvpgInkuK1cbiAgICAgICAgICAgIG9ianNUb1JlbmRlciA9IHRoaXMuX3NoYXBlcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2Jqc1RvUmVuZGVyO1xuICAgIH1cbiAgICBfZHJhdyhjdHgsIG9iamVjdCkge1xuICAgICAgICBpZiAoIW9iamVjdClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgb2JqZWN0LnJlbmRlcihjdHgpO1xuICAgIH1cbiAgICB6b29tKGlzX21vdXNlKSB7XG4gICAgICAgIC8vIOaYr+WQpuWxheS4reaUvuWkp1xuICAgICAgICBpZiAoIWlzX21vdXNlKSB7XG4gICAgICAgICAgICAvLyB0aGlzLl9vZmZzZXQubGVmdCA9IHRoaXMud2lkdGggLyAyO1xuICAgICAgICAgICAgLy8gdGhpcy5fb2Zmc2V0LnRvcCA9IHRoaXMuaGVpZ2h0IC8gMjtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLm9mZnNldC54ID1cbiAgICAgICAgLy8gICB0aGlzLm1vdXNlUG9zaXRpb24ueCAtXG4gICAgICAgIC8vICAgKCh0aGlzLm1vdXNlUG9zaXRpb24ueCAtIHRoaXMub2Zmc2V0LngpICogdGhpcy5zY2FsZSkgLyB0aGlzLnByZVNjYWxlO1xuICAgICAgICAvLyB0aGlzLm9mZnNldC55ID1cbiAgICAgICAgLy8gICB0aGlzLm1vdXNlUG9zaXRpb24ueSAtXG4gICAgICAgIC8vICAgKCh0aGlzLm1vdXNlUG9zaXRpb24ueSAtIHRoaXMub2Zmc2V0LnkpICogdGhpcy5zY2FsZSkgLyB0aGlzLnByZVNjYWxlO1xuICAgICAgICB0aGlzLnJlbmRlckFsbCgpO1xuICAgICAgICAvLyB0aGlzLnByZVNjYWxlID0gdGhpcy5zY2FsZTtcbiAgICAgICAgLy8gdGhpcy5fY3VycmVudE9mZnNldC54ID0gdGhpcy5vZmZzZXQueDtcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50T2Zmc2V0LnkgPSB0aGlzLm9mZnNldC55O1xuICAgIH1cbiAgICAvLyDmlL7lpKdcbiAgICB6b29tSW4oaXNfbW91c2UgPSBmYWxzZSkge1xuICAgICAgICBpZiAodGhpcy5zY2FsZU1heCA+IHRoaXMuc2NhbGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUgKz0gdGhpcy5zY2FsZVN0ZXA7XG4gICAgICAgICAgICB0aGlzLnpvb20oaXNfbW91c2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOe8qeWwj1xuICAgIHpvb21PdXQoaXNfbW91c2UgPSBmYWxzZSkge1xuICAgICAgICBpZiAodGhpcy5zY2FsZU1pbiA8IHRoaXMuc2NhbGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2NhbGUgLT0gdGhpcy5zY2FsZVN0ZXA7XG4gICAgICAgICAgICB0aGlzLnpvb20oaXNfbW91c2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDliKDpmaTmiYDmnInniankvZPlkozmuIXnqbrnlLvluIMgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5fc2hhcGVzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuZGlzY2FyZEFjdGl2ZUdyb3VwKCk7XG4gICAgICAgIHRoaXMuY2xlYXJDb250ZXh0KHRoaXMubUN0eCk7XG4gICAgICAgIHRoaXMuY2xlYXJDb250ZXh0KHRoaXMudEN0eCk7XG4gICAgICAgIHRoaXMucmVuZGVyQWxsKCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBjbGVhckNhbnZhcyhjYW52YXMpIHtcbiAgICAgICAgY2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIH1cbiAgICBjbGVhckNvbnRleHQoY3R4KSB7XG4gICAgICAgIGN0eCAmJiBjdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8qKiDojrflj5bnlLvluIPnmoTlgY/np7vph4/vvIzliLDml7borqHnrpfpvKDmoIfngrnlh7vkvY3nva7pnIDopoHnlKjliLAgKi9cbiAgICBjYWxjT2Zmc2V0KCkge1xuICAgICAgICAvLyBUT0RPOiDov5novrnnmoTlpJbpg6jlgY/np7vph4/orqHnrpfmnInngrnpl67pophcbiAgICAgICAgdGhpcy5fb2Zmc2V0ID0gVXRpbC5nZXRFbGVtZW50T2Zmc2V0KHRoaXMubWFpbkNhbnZhcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKiog5aSn6YOo5YiG5piv5ZyoIG1haW4tY2FudmFzIOS4iuWFiOeUu+acqua/gOa0u+eJqeS9k++8jOWGjeeUu+a/gOa0u+eJqeS9kyAqL1xuICAgIHJlbmRlckFsbCgpIHtcbiAgICAgICAgY29uc3QgY3R4cyA9IFt0aGlzLm1DdHgsIHRoaXMuY0N0eCwgdGhpcy50Q3R4XTtcbiAgICAgICAgaWYgKHRoaXMudEN0eCkge1xuICAgICAgICAgICAgdGhpcy5jbGVhckNvbnRleHQodGhpcy50Q3R4KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsZWFyQ29udGV4dCh0aGlzLm1DdHgpO1xuICAgICAgICBjdHhzLmZvckVhY2goKGMpID0+IGMuc2F2ZSgpKTtcbiAgICAgICAgY3R4cy5mb3JFYWNoKChjKSA9PiBjLnNjYWxlKHRoaXMuc2NhbGUsIHRoaXMuc2NhbGUpKTtcbiAgICAgICAgY3R4cy5mb3JFYWNoKChjKSA9PiBjLnRyYW5zbGF0ZSh0aGlzLl9jYW52YXNPZmZzZXQubGVmdCwgdGhpcy5fY2FudmFzT2Zmc2V0LnRvcCkpO1xuICAgICAgICAvLyDlhYjnu5jliLbmnKrmv4DmtLvniankvZPvvIzlho3nu5jliLbmv4DmtLvniankvZNcbiAgICAgICAgY29uc3Qgc29ydGVkT2JqZWN0cyA9IHRoaXMuX2Nob29zZU9iamVjdHNUb1JlbmRlcigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gc29ydGVkT2JqZWN0cy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgdGhpcy5fZHJhdyh0aGlzLm1DdHgsIHNvcnRlZE9iamVjdHNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGN0eHMuZm9yRWFjaCgoYykgPT4gYy5yZXN0b3JlKCkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0UG9pbnRlcihlKSB7XG4gICAgICAgIGxldCBwb2ludGVyID0gVXRpbC5nZXRQb2ludGVyKGUsIHRoaXMudG9wQ2FudmFzLCB0aGlzLnNjYWxlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IHBvaW50ZXIueCAtIHRoaXMuX29mZnNldC5sZWZ0LFxuICAgICAgICAgICAgeTogcG9pbnRlci55IC0gdGhpcy5fb2Zmc2V0LnRvcCxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLyoqIOajgOa1i+aYr+WQpuacieeJqeS9k+WcqOm8oOagh+S9jee9riAqL1xuICAgIGZpbmRUYXJnZXQoZSwgc2tpcEdyb3VwID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHRhcmdldDtcbiAgICAgICAgLy8gbGV0IHBvaW50ZXIgPSB0aGlzLmdldFBvaW50ZXIoZSk7XG4gICAgICAgIC8vIOS8mOWFiOiAg+iZkeW9k+WJjee7hOS4reeahOeJqeS9k++8jOWboOS4uua/gOa0u+eahOeJqeS9k+iiq+mAieS4reeahOamgueOh+Wkp1xuICAgICAgICBsZXQgYWN0aXZlR3JvdXAgPSB0aGlzLmdldEFjdGl2ZUdyb3VwKCk7XG4gICAgICAgIGlmIChhY3RpdmVHcm91cCAmJiAhc2tpcEdyb3VwICYmIHRoaXMuY29udGFpbnNQb2ludChlLCBhY3RpdmVHcm91cCkpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IGFjdGl2ZUdyb3VwO1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICAvLyDpgY3ljobmiYDmnInniankvZPvvIzliKTmlq3pvKDmoIfngrnmmK/lkKblnKjniankvZPljIXlm7Tnm5LlhoVcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuX3NoYXBlcy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zaGFwZXNbaV0gJiYgdGhpcy5jb250YWluc1BvaW50KGUsIHRoaXMuX3NoYXBlc1tpXSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB0aGlzLl9zaGFwZXNbaV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldClcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuICAgIC8vIOWIpOaWrem8oOagh+eCueS9jeaYr+WQpuWtmOWcqOWbvuW9ouS4rVxuICAgIGNvbnRhaW5zUG9pbnQoZSwgdGFyZ2V0KSB7XG4gICAgICAgIGxldCBwb2ludGVyID0gdGhpcy5nZXRQb2ludGVyKGUpLCB4eSA9IHRoaXMuX25vcm1hbGl6ZVBvaW50ZXIodGFyZ2V0LCBwb2ludGVyKSwgeCA9IHh5LngsIHkgPSB4eS55O1xuICAgICAgICAvLyDkuIvpnaLov5nmmK/lj4LogIPmlofnjK7vvIzkuI3ov4flpb3lg4/miZPkuI3lvIBcbiAgICAgICAgLy8gaHR0cDovL3d3dy5nZW9nLnViYy5jYS9jb3Vyc2VzL2tsaW5rL2dpcy5ub3Rlcy9uY2dpYS91MzIuaHRtbFxuICAgICAgICAvLyBodHRwOi8vaWRhdi51Y2RhdmlzLmVkdS9+b2tyZXlsb3MvVEFzaGlwL1NwcmluZzIwMDAvUG9pbnRJblBvbHlnb24uaHRtbFxuICAgICAgICAvLyB3ZSBpdGVyYXRlIHRocm91Z2ggZWFjaCBvYmplY3QuIElmIHRhcmdldCBmb3VuZCwgcmV0dXJuIGl0LlxuICAgICAgICBsZXQgaUxpbmVzID0gdGFyZ2V0Ll9nZXRJbWFnZUxpbmVzKHRhcmdldC5vQ29vcmRzKSwgeHBvaW50cyA9IHRhcmdldC5fZmluZENyb3NzUG9pbnRzKHgsIHksIGlMaW5lcyk7XG4gICAgICAgIC8vIGlmIHhjb3VudCBpcyBvZGQgdGhlbiB3ZSBjbGlja2VkIGluc2lkZSB0aGUgb2JqZWN0XG4gICAgICAgIC8vIEZvciB0aGUgc3BlY2lmaWMgY2FzZSBvZiBzcXVhcmUgaW1hZ2VzIHhjb3VudCA9PT0gMSBpbiBhbGwgdHJ1ZSBjYXNlc1xuICAgICAgICBpZiAoKHhwb2ludHMgJiYgeHBvaW50cyAlIDIgPT09IDEpIHx8XG4gICAgICAgICAgICB0YXJnZXQuX2ZpbmRUYXJnZXRDb3JuZXIoZSwgdGhpcy5fb2Zmc2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyAjZW5kcmVnaW9uXG4gICAgLy8gI3JlZ2lvbiDpobblsYLkuqTkupLlsYLmk43kvZxcbiAgICAvKiog5riy5p+TIHRvcC1jYW52YXPvvIzkuIDoiKznlKjkuo7muLLmn5Pmi5bok53lpJrpgInljLrln5/lkozmtoLpuKYgKi9cbiAgICByZW5kZXJUb3AoKSB7XG4gICAgICAgIGxldCBjdHggPSB0aGlzLnRDdHg7XG4gICAgICAgIHRoaXMuY2xlYXJDb250ZXh0KGN0eCk7XG4gICAgICAgIGN0eC5zYXZlKCk7XG4gICAgICAgIGN0eC5zY2FsZSh0aGlzLnNjYWxlLCB0aGlzLnNjYWxlKTtcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLl9jYW52YXNPZmZzZXQubGVmdCwgdGhpcy5fY2FudmFzT2Zmc2V0LnRvcCk7XG4gICAgICAgIC8vIOe7mOWItuaLluiTnemAieWMulxuICAgICAgICBpZiAodGhpcy5fZ3JvdXBTZWxlY3RvcilcbiAgICAgICAgICAgIHRoaXMuZHJhd1NlbGVjdGlvbigpO1xuICAgICAgICAvLyDnu5jliLbmraPlnKjnu5jliLbnmoTlm77lvaJcbiAgICAgICAgaWYgKHRoaXMuX2RyYXdpbmdTaGFwZSlcbiAgICAgICAgICAgIHRoaXMuX2RyYXcodGhpcy50Q3R4LCB0aGlzLl9kcmF3aW5nU2hhcGUpO1xuICAgICAgICAvLyDlpoLmnpzmnInpgInkuK3niankvZNcbiAgICAgICAgLy8gbGV0IGFjdGl2ZUdyb3VwID0gdGhpcy5nZXRBY3RpdmVHcm91cCgpO1xuICAgICAgICAvLyBpZiAoYWN0aXZlR3JvdXApIGFjdGl2ZUdyb3VwLnJlbmRlcihjdHgpO1xuICAgICAgICBjdHgucmVzdG9yZSgpO1xuICAgICAgICB0aGlzLmVtaXQoXCJhZnRlcjpyZW5kZXJcIik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvKiog57uY5Yi25qGG6YCJ5Yy65Z+fICovXG4gICAgZHJhd1NlbGVjdGlvbigpIHtcbiAgICAgICAgbGV0IGN0eCA9IHRoaXMudEN0eCwgZ3JvdXBTZWxlY3RvciA9IHRoaXMuX2dyb3VwU2VsZWN0b3IsIGxlZnQgPSBncm91cFNlbGVjdG9yLmxlZnQsIHRvcCA9IGdyb3VwU2VsZWN0b3IudG9wLCBhbGVmdCA9IE1hdGguYWJzKGxlZnQpLCBhdG9wID0gTWF0aC5hYnModG9wKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuc2VsZWN0aW9uQ29sb3I7XG4gICAgICAgIGN0eC5maWxsUmVjdChncm91cFNlbGVjdG9yLmV4IC0gKGxlZnQgPiAwID8gMCA6IC1sZWZ0KSwgZ3JvdXBTZWxlY3Rvci5leSAtICh0b3AgPiAwID8gMCA6IC10b3ApLCBhbGVmdCwgYXRvcCk7XG4gICAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLnNlbGVjdGlvbkxpbmVXaWR0aDtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5zZWxlY3Rpb25Cb3JkZXJDb2xvcjtcbiAgICAgICAgY3R4LnN0cm9rZVJlY3QoZ3JvdXBTZWxlY3Rvci5leCArIFNUUk9LRV9PRkZTRVQgLSAobGVmdCA+IDAgPyAwIDogYWxlZnQpLCBncm91cFNlbGVjdG9yLmV5ICsgU1RST0tFX09GRlNFVCAtICh0b3AgPiAwID8gMCA6IGF0b3ApLCBhbGVmdCwgYXRvcCk7XG4gICAgfVxuICAgIC8qKiDmmK/lkKbmmK/mi5bok53kuovku7bvvIzkuZ/lsLHmmK/msqHmnInngrnpgInliLDniankvZMgKi9cbiAgICBzaG91bGRDbGVhclNlbGVjdGlvbihlKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLmZpbmRUYXJnZXQoZSksIGFjdGl2ZUdyb3VwID0gdGhpcy5nZXRBY3RpdmVHcm91cCgpO1xuICAgICAgICByZXR1cm4gKCF0YXJnZXQgfHxcbiAgICAgICAgICAgICh0YXJnZXQgJiZcbiAgICAgICAgICAgICAgICBhY3RpdmVHcm91cCAmJlxuICAgICAgICAgICAgICAgICFhY3RpdmVHcm91cC5jb250YWlucyh0YXJnZXQpICYmXG4gICAgICAgICAgICAgICAgYWN0aXZlR3JvdXAgIT09IHRhcmdldCAmJlxuICAgICAgICAgICAgICAgICFlLnNoaWZ0S2V5KSk7XG4gICAgfVxuICAgIC8vICNlbmRyZWdpb25cbiAgICAvLyAjcmVnaW9uIOm8oOagh+agt+W8j+ebuOWFs1xuICAgIC8qKiDorr7nva7pvKDmoIfmoLflvI8gKi9cbiAgICBzZXRDdXJzb3IodmFsdWUpIHtcbiAgICAgICAgdGhpcy50b3BDYW52YXMuc3R5bGUuY3Vyc29yID0gdmFsdWU7XG4gICAgfVxuICAgIC8qKiDmoLnmja7pvKDmoIfkvY3nva7mnaXorr7nva7nm7jlupTnmoTpvKDmoIfmoLflvI8gKi9cbiAgICBzZXRDdXJzb3JGcm9tRXZlbnQoZSwgdGFyZ2V0KSB7XG4gICAgICAgIGxldCBzID0gdGhpcy50b3BDYW52YXMuc3R5bGU7XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgIGxldCBhY3RpdmVHcm91cCA9IHRoaXMuZ2V0QWN0aXZlR3JvdXAoKTtcbiAgICAgICAgICAgIGxldCBjb3JuZXIgPSAoIWFjdGl2ZUdyb3VwIHx8ICFhY3RpdmVHcm91cC5jb250YWlucyh0YXJnZXQpKSAmJlxuICAgICAgICAgICAgICAgIHRhcmdldC5fZmluZFRhcmdldENvcm5lcihlLCB0aGlzLl9vZmZzZXQpO1xuICAgICAgICAgICAgaWYgKGNvcm5lcikge1xuICAgICAgICAgICAgICAgIGNvcm5lciA9IGNvcm5lcjtcbiAgICAgICAgICAgICAgICBpZiAoY29ybmVyIGluIGN1cnNvck1hcCkge1xuICAgICAgICAgICAgICAgICAgICBzLmN1cnNvciA9IGN1cnNvck1hcFtjb3JuZXJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjb3JuZXIgPT09IFwibXRyXCIgJiYgdGFyZ2V0Lmhhc1JvdGF0aW5nUG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcy5jdXJzb3IgPSBDdXJzb3JTdHlsZS5yb3RhdGlvbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHMuY3Vyc29yID0gQ3Vyc29yU3R5bGUuZGVmYXVsdDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHMuY3Vyc29yID0gQ3Vyc29yU3R5bGUuaG92ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHMuY3Vyc29yID0gQ3Vyc29yU3R5bGUuZGVmYXVsdDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFNoYXBlIH0gZnJvbSBcIi4uLy4uL2Jhc2Uvc2hhcGVcIjtcbmltcG9ydCB7IFV0aWwgfSBmcm9tIFwiLi4vLi4vYmFzZS91dGlsc1wiO1xuZXhwb3J0IGNsYXNzIFJvY29jb0ltYWdlIGV4dGVuZHMgU2hhcGUge1xuICAgIC8qKiDpu5jorqTpgJrov4cgaW1nIOagh+etvuadpee7mOWItu+8jOWboOS4uuacgOe7iOmDveaYr+imgemAmui/h+ivpeagh+etvue7mOWItueahCAqL1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgICAgIHRoaXMudHlwZSA9IFwiaW1hZ2VcIjtcbiAgICAgICAgdGhpcy5faW5pdEVsZW1lbnQoZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIF9pbml0RWxlbWVudChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuc2V0RWxlbWVudChlbGVtZW50LCBvcHRpb25zKTtcbiAgICB9XG4gICAgc2V0RWxlbWVudChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLl9pbml0Q29uZmlnKG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgX2luaXRDb25maWcob3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHRoaXMuc2V0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fc2V0V2lkdGhIZWlnaHQob3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKiDorr7nva7lm77lg4/lpKflsI8gKi9cbiAgICBfc2V0V2lkdGhIZWlnaHQob3B0aW9ucykge1xuICAgICAgICB0aGlzLndpZHRoID1cbiAgICAgICAgICAgIFwid2lkdGhcIiBpbiBvcHRpb25zXG4gICAgICAgICAgICAgICAgPyBvcHRpb25zLndpZHRoXG4gICAgICAgICAgICAgICAgOiB0aGlzLmdldEVsZW1lbnQoKVxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuZ2V0RWxlbWVudCgpLndpZHRoIHx8IDBcbiAgICAgICAgICAgICAgICAgICAgOiAwO1xuICAgICAgICB0aGlzLmhlaWdodCA9XG4gICAgICAgICAgICBcImhlaWdodFwiIGluIG9wdGlvbnNcbiAgICAgICAgICAgICAgICA/IG9wdGlvbnMuaGVpZ2h0XG4gICAgICAgICAgICAgICAgOiB0aGlzLmdldEVsZW1lbnQoKVxuICAgICAgICAgICAgICAgICAgICA/IHRoaXMuZ2V0RWxlbWVudCgpLmhlaWdodCB8fCAwXG4gICAgICAgICAgICAgICAgICAgIDogMDtcbiAgICB9XG4gICAgZ2V0RWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XG4gICAgfVxuICAgIC8qKiDnm7TmjqXosIPnlKggZHJhd0ltYWdlIOe7mOWItuWbvuWDjyAqL1xuICAgIF9yZW5kZXIoY3R4LCBub1RyYW5zZm9ybSA9IGZhbHNlKSB7XG4gICAgICAgIGxldCB4LCB5LCBlbGVtZW50VG9EcmF3O1xuICAgICAgICB4ID0gbm9UcmFuc2Zvcm0gPyB0aGlzLmxlZnQgOiAtdGhpcy53aWR0aCAvIDI7XG4gICAgICAgIHkgPSBub1RyYW5zZm9ybSA/IHRoaXMudG9wIDogLXRoaXMuaGVpZ2h0IC8gMjtcbiAgICAgICAgZWxlbWVudFRvRHJhdyA9IHRoaXMuX2VsZW1lbnQ7XG4gICAgICAgIGVsZW1lbnRUb0RyYXcgJiZcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZWxlbWVudFRvRHJhdywgeCwgeSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cbiAgICAvKiog5aaC5p6c5piv5qC55o2uIHVybCDmiJbogIXmnKzlnLDot6/lvoTliqDovb3lm77lg4/vvIzmnKzotKjpg73mmK/lj5bliqDovb3lm77niYflrozmiJDkuYvlkI7lnKjovazmiJAgaW1nIOagh+etviAqL1xuICAgIHN0YXRpYyBmcm9tVVJMKHVybCwgY2FsbGJhY2ssIGltZ09wdGlvbnMpIHtcbiAgICAgICAgVXRpbC5sb2FkSW1hZ2UodXJsKS50aGVuKChpbWcpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrICYmXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobmV3IFJvY29jb0ltYWdlKGltZywgaW1nT3B0aW9ucykpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5Sb2NvY29JbWFnZS5hc3luYyA9IHRydWU7XG4iLCJpbXBvcnQgeyBTaGFwZSB9IGZyb20gXCIuLi8uLi9iYXNlL3NoYXBlXCI7XG4vKiog55+p5b2i57G7ICovXG5leHBvcnQgY2xhc3MgUmVjdCBleHRlbmRzIFNoYXBlIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnR5cGUgPSBcInJlY3RcIjtcbiAgICAgICAgLyoqIOWchuinkiByeCAqL1xuICAgICAgICB0aGlzLnJ4ID0gMDtcbiAgICAgICAgLyoqIOWchuinkiByeSAqL1xuICAgICAgICB0aGlzLnJ5ID0gMDtcbiAgICAgICAgdGhpcy5faW5pdFN0YXRlUHJvcGVydGllcygpO1xuICAgICAgICB0aGlzLl9pbml0UnhSeShvcHRpb25zKTtcbiAgICB9XG4gICAgX2luaXRTdGF0ZVByb3BlcnRpZXMoKSB7XG4gICAgICAgIHRoaXMuc3RhdGVQcm9wZXJ0aWVzID0gdGhpcy5zdGF0ZVByb3BlcnRpZXMuY29uY2F0KFtcInJ4XCIsIFwicnlcIl0pO1xuICAgIH1cbiAgICAvKiog5Yid5aeL5YyW5ZyG6KeSICovXG4gICAgX2luaXRSeFJ5KG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5yeCA9IG9wdGlvbnMucnggfHwgMDtcbiAgICAgICAgdGhpcy5yeSA9IG9wdGlvbnMucnkgfHwgMDtcbiAgICAgICAgLyoqIOWmguaenCByeCDmiJbogIUgcnkg5Y+q5Lyg5LqG5LiA5Liq77yM6buY6K6k5LqM6ICF55u4562JICovXG4gICAgICAgIGlmICh0aGlzLnJ4ICYmICF0aGlzLnJ5KSB7XG4gICAgICAgICAgICB0aGlzLnJ5ID0gdGhpcy5yeDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLnJ5ICYmICF0aGlzLnJ4KSB7XG4gICAgICAgICAgICB0aGlzLnJ4ID0gdGhpcy5yeTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBfcmVuZGVyKGN0eCkge1xuICAgICAgICBsZXQgcnggPSB0aGlzLnJ4IHx8IDAsIHJ5ID0gdGhpcy5yeSB8fCAwLCB4ID0gLXRoaXMud2lkdGggLyAyLCB5ID0gLXRoaXMuaGVpZ2h0IC8gMiwgdyA9IHRoaXMud2lkdGgsIGggPSB0aGlzLmhlaWdodDtcbiAgICAgICAgLy8g57uY5Yi25LiA5Liq5paw55qE5Lic6KW/77yM5aSn6YOo5YiG5oOF5Ya15LiL6YO96KaB5byA5ZCv5LiA5Liq5paw6Lev5b6E77yM6KaB5YW75oiQ5Lmg5oOvXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgLy8gaWYgKHRoaXMudHJhbnNmb3JtTWF0cml4ICYmIHRoaXMuZ3JvdXApIHtcbiAgICAgICAgLy8gICAgIGN0eC50cmFuc2xhdGUodGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMik7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYgKCF0aGlzLnRyYW5zZm9ybU1hdHJpeCAmJiB0aGlzLmdyb3VwKSB7XG4gICAgICAgIC8vICAgICBjdHgudHJhbnNsYXRlKC10aGlzLmdyb3VwLndpZHRoIC8gMiArIHRoaXMud2lkdGggLyAyLCAtdGhpcy5ncm91cC5oZWlnaHQgLyAyICsgdGhpcy5oZWlnaHQgLyAyKTtcbiAgICAgICAgLy8gfVxuICAgICAgICBpZiAodGhpcy5ncm91cClcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoLXRoaXMuZ3JvdXAud2lkdGggLyAyICsgdGhpcy53aWR0aCAvIDIsIC10aGlzLmdyb3VwLmhlaWdodCAvIDIgKyB0aGlzLmhlaWdodCAvIDIpO1xuICAgICAgICAvLyDku47lt6bkuIrop5LlvIDlp4vpobrml7bpkojnlLvnn6nlvaLvvIzov5nph4zlsLHmmK/ljZXnuq/nmoTnu5jliLbkuIDkuKrop4Top4Tnn6nnn6nnmoTnn6nlvaLvvIzkuI3ogIPomZHml4vovaznvKnmlL7llaXnmoTvvIzlm6DkuLrml4vovaznvKnmlL7kvJrlnKjosIPnlKggX3JlbmRlciDlh73mlbDkuYvliY3lpITnkIZcbiAgICAgICAgY3R4Lm1vdmVUbyh4ICsgcngsIHkpO1xuICAgICAgICBjdHgubGluZVRvKHggKyB3IC0gcngsIHkpO1xuICAgICAgICBjdHguYmV6aWVyQ3VydmVUbyh4ICsgdywgeSwgeCArIHcsIHkgKyByeSwgeCArIHcsIHkgKyByeSk7XG4gICAgICAgIGN0eC5saW5lVG8oeCArIHcsIHkgKyBoIC0gcnkpO1xuICAgICAgICBjdHguYmV6aWVyQ3VydmVUbyh4ICsgdywgeSArIGgsIHggKyB3IC0gcngsIHkgKyBoLCB4ICsgdyAtIHJ4LCB5ICsgaCk7XG4gICAgICAgIGN0eC5saW5lVG8oeCArIHJ4LCB5ICsgaCk7XG4gICAgICAgIGN0eC5iZXppZXJDdXJ2ZVRvKHgsIHkgKyBoLCB4LCB5ICsgaCAtIHJ5LCB4LCB5ICsgaCAtIHJ5KTtcbiAgICAgICAgY3R4LmxpbmVUbyh4LCB5ICsgcnkpO1xuICAgICAgICBjdHguYmV6aWVyQ3VydmVUbyh4LCB5LCB4ICsgcngsIHksIHggKyByeCwgeSk7XG4gICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgICAgaWYgKHRoaXMuZmlsbClcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XG4gICAgICAgIGlmICh0aGlzLnN0cm9rZSlcbiAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICB9XG4gICAgdG9PYmplY3QocHJvcGVydGllc1RvSW5jbHVkZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihzdXBlci50b09iamVjdChwcm9wZXJ0aWVzVG9JbmNsdWRlKSwge1xuICAgICAgICAgICAgcng6IHRoaXMuZ2V0KFwicnhcIikgfHwgMCxcbiAgICAgICAgICAgIHJ5OiB0aGlzLmdldChcInJ5XCIpIHx8IDAsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfdG9TVkcoKSB7XG4gICAgICAgIHZhciB4ID0gLXRoaXMud2lkdGggLyAyLCB5ID0gLXRoaXMuaGVpZ2h0IC8gMjtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIFwiPHJlY3QgXCIsXG4gICAgICAgICAgICAneD1cIicsXG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgJ1wiIHk9XCInLFxuICAgICAgICAgICAgeSxcbiAgICAgICAgICAgICdcIiByeD1cIicsXG4gICAgICAgICAgICB0aGlzLnJ4LFxuICAgICAgICAgICAgJ1wiIHJ5PVwiJyxcbiAgICAgICAgICAgIHRoaXMucnksXG4gICAgICAgICAgICAnXCIgd2lkdGg9XCInLFxuICAgICAgICAgICAgdGhpcy53aWR0aCxcbiAgICAgICAgICAgICdcIiBoZWlnaHQ9XCInLFxuICAgICAgICAgICAgdGhpcy5oZWlnaHQsXG4gICAgICAgICAgICAnXCIgLz5cXG4nLFxuICAgICAgICBdO1xuICAgIH1cbn1cbiIsImV4cG9ydCB7IENhbnZhcyBhcyBSb2NvY28yRFZpZXcgfSBmcm9tIFwiLi9lbnRpdGllcy9jYW52YXNcIjtcbmV4cG9ydCB7IFJlY3QgfSBmcm9tIFwiLi9lbnRpdGllcy9lbGVtZW50cy9yZWN0LmVudGl0eVwiO1xuZXhwb3J0IHsgUm9jb2NvSW1hZ2UgfSBmcm9tIFwiLi9lbnRpdGllcy9lbGVtZW50cy9pbWFnZS5lbnRpdHlcIjtcbmV4cG9ydCB7IFdpZGdldCB9IGZyb20gXCIuL3dpZGdldHMvd2lkZ2V0XCI7XG5leHBvcnQgeyBSZWN0RHJhd1dpZGdldCB9IGZyb20gXCIuL3dpZGdldHMvcmVjdC1kcmF3LndpZGdldFwiO1xuZXhwb3J0IHsgWm9vbVdpZGdldCB9IGZyb20gXCIuL3dpZGdldHMvem9vbS53aWRnZXRcIjtcbiIsIi8qKiDkuIDkupvpvKDmoIfmoLflvI8gKi9cbnZhciBDdXJzb3JTdHlsZTtcbihmdW5jdGlvbiAoQ3Vyc29yU3R5bGUpIHtcbiAgICBDdXJzb3JTdHlsZVtcImRlZmF1bHRcIl0gPSBcImRlZmF1bHRcIjtcbiAgICBDdXJzb3JTdHlsZVtcIm1vdmVcIl0gPSBcIm1vdmVcIjtcbiAgICBDdXJzb3JTdHlsZVtcImhvdmVyXCJdID0gXCJtb3ZlXCI7XG4gICAgQ3Vyc29yU3R5bGVbXCJyb3RhdGlvblwiXSA9IFwiY3Jvc3NoYWlyXCI7XG59KShDdXJzb3JTdHlsZSB8fCAoQ3Vyc29yU3R5bGUgPSB7fSkpO1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIG1vdXNlRG93bjogKHsgZSwgcm9jb2NvMmQgfSwgbmV4dCkgPT4ge1xuICAgICAgICBuZXh0KCk7XG4gICAgICAgIGlmIChyb2NvY28yZC5hY3Rpb24gIT09IFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAvLyDlj6rlpITnkIblt6bplK7ngrnlh7vvvIzopoHkuYjmmK/mi5bok53kuovku7bjgIHopoHkuYjmmK/ngrnpgInkuovku7ZcbiAgICAgICAgbGV0IGlzTGVmdENsaWNrID0gXCJ3aGljaFwiIGluIGUgPyBlLndoaWNoID09PSAxIDogZS5idXR0b24gPT09IDE7XG4gICAgICAgIGlmICghaXNMZWZ0Q2xpY2spXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIOi/meS4quaIkeeMnOaYr+S4uuS6huS/nemZqei1t+inge+8jGlnbm9yZSBpZiBzb21lIG9iamVjdCBpcyBiZWluZyB0cmFuc2Zvcm1lZCBhdCByb2NvY28yZCBtb21lbnRcbiAgICAgICAgaWYgKHJvY29jbzJkLl9jdXJyZW50VHJhbnNmb3JtKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gcm9jb2NvMmQuZmluZFRhcmdldChlKTtcbiAgICAgICAgbGV0IHBvaW50ZXIgPSByb2NvY28yZC5nZXRQb2ludGVyKGUpO1xuICAgICAgICBsZXQgY29ybmVyO1xuICAgICAgICByb2NvY28yZC5fcHJldmlvdXNQb2ludGVyID0gcG9pbnRlcjtcbiAgICAgICAgaWYgKHJvY29jbzJkLnNob3VsZENsZWFyU2VsZWN0aW9uKGUpKSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzmmK/mi5bok53pgInljLrkuovku7ZcbiAgICAgICAgICAgIHJvY29jbzJkLl9ncm91cFNlbGVjdG9yID0ge1xuICAgICAgICAgICAgICAgIC8vIOmHjee9rumAieWMuueKtuaAgVxuICAgICAgICAgICAgICAgIGV4OiBwb2ludGVyLngsXG4gICAgICAgICAgICAgICAgZXk6IHBvaW50ZXIueSxcbiAgICAgICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyDorqnmiYDmnInlhYPntKDlpLHljrvmv4DmtLvnirbmgIFcbiAgICAgICAgICAgIHJvY29jbzJkLmRlYWN0aXZhdGVBbGxXaXRoRGlzcGF0Y2goKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWmguaenOaYr+eCuemAieaTjeS9nO+8jOaOpeS4i+adpeWwseimgeS4uuWQhOenjeWPmOaNouWBmuWHhuWkh1xuICAgICAgICAgICAgdGFyZ2V0LnNhdmVTdGF0ZSgpO1xuICAgICAgICAgICAgLy8g5Yik5pat54K55Ye755qE5piv5LiN5piv5o6n5Yi254K5XG4gICAgICAgICAgICBjb3JuZXIgPSB0YXJnZXQuX2ZpbmRUYXJnZXRDb3JuZXIoZSwgcm9jb2NvMmQuX29mZnNldCk7XG4gICAgICAgICAgICBpZiAocm9jb2NvMmQuc2hvdWxkSGFuZGxlR3JvdXBMb2dpYyhlLCB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5piv6YCJ5Lit57uEXG4gICAgICAgICAgICAgICAgcm9jb2NvMmQuaGFuZGxlR3JvdXBMb2dpYyhlLCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHJvY29jbzJkLmdldEFjdGl2ZUdyb3VwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmmK/pgInkuK3ljZXkuKrniankvZNcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ICE9PSByb2NvY28yZC5nZXRBY3RpdmVHcm91cCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJvY29jbzJkLmRlYWN0aXZhdGVBbGwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcm9jb2NvMmQuc2V0QWN0aXZlT2JqZWN0KHRhcmdldCwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByb2NvY28yZC5zZXR1cEN1cnJlbnRUcmFuc2Zvcm0oZSwgdGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICAvLyDkuI3orrrmmK/mi5bok53pgInljLrkuovku7bov5jmmK/ngrnpgInkuovku7bvvIzpg73pnIDopoHph43mlrDnu5jliLZcbiAgICAgICAgLy8g5ouW6JOd6YCJ5Yy677ya6ZyA6KaB5oqK5LmL5YmN5r+A5rS755qE54mp5L2T5Y+W5raI6YCJ5Lit5oCBXG4gICAgICAgIC8vIOeCuemAieS6i+S7tu+8mumcgOimgeaKiuW9k+WJjea/gOa0u+eahOeJqeS9k+e9rumhtlxuICAgICAgICByb2NvY28yZC5yZW5kZXJBbGwoKTtcbiAgICB9LFxuICAgIG1vdXNlTW92ZTogKHsgZSwgcG9pbnRlciwgcm9jb2NvMmQgfSwgbmV4dCkgPT4ge1xuICAgICAgICBuZXh0KCk7XG4gICAgICAgIGlmIChyb2NvY28yZC5hY3Rpb24gIT09IFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgdGFyZ2V0O1xuICAgICAgICBsZXQgZ3JvdXBTZWxlY3RvciA9IHJvY29jbzJkLl9ncm91cFNlbGVjdG9yO1xuICAgICAgICBpZiAoZ3JvdXBTZWxlY3Rvcikge1xuICAgICAgICAgICAgLy8g5aaC5p6c5pyJ5ouW6JOd5qGG6YCJ5Yy65Z+fXG4gICAgICAgICAgICBncm91cFNlbGVjdG9yLmxlZnQgPSBwb2ludGVyLnggLSByb2NvY28yZC5fb2Zmc2V0LmxlZnQgLSBncm91cFNlbGVjdG9yLmV4O1xuICAgICAgICAgICAgZ3JvdXBTZWxlY3Rvci50b3AgPSBwb2ludGVyLnkgLSByb2NvY28yZC5fb2Zmc2V0LnRvcCAtIGdyb3VwU2VsZWN0b3IuZXk7XG4gICAgICAgICAgICByb2NvY28yZC5yZW5kZXJUb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghcm9jb2NvMmQuX2N1cnJlbnRUcmFuc2Zvcm0pIHtcbiAgICAgICAgICAgIC8vIOWmguaenOaYryBob3ZlciDkuovku7bvvIzov5nph4zmiJHku6zlj6rpnIDopoHmlLnlj5jpvKDmoIfmoLflvI/vvIzlubbkuI3kvJrph43mlrDmuLLmn5NcbiAgICAgICAgICAgIGxldCBzdHlsZSA9IHJvY29jbzJkLnRvcENhbnZhcy5zdHlsZTtcbiAgICAgICAgICAgIHRhcmdldCA9IHJvY29jbzJkLmZpbmRUYXJnZXQoZSk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcm9jb2NvMmQuc2V0Q3Vyc29yRnJvbUV2ZW50KGUsIHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHlsZS5jdXJzb3IgPSBDdXJzb3JTdHlsZS5kZWZhdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8g5aaC5p6c5piv5peL6L2s44CB57yp5pS+44CB5bmz56e7562J5pON5L2cXG4gICAgICAgICAgICBsZXQgeCA9IHBvaW50ZXIueCwgeSA9IHBvaW50ZXIueTtcbiAgICAgICAgICAgIHJvY29jbzJkLl9jdXJyZW50VHJhbnNmb3JtLnRhcmdldC5pc01vdmluZyA9IHRydWU7XG4gICAgICAgICAgICBsZXQgdCA9IHJvY29jbzJkLl9jdXJyZW50VHJhbnNmb3JtLCByZXNldCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHJvY29jbzJkLl9jdXJyZW50VHJhbnNmb3JtLmFjdGlvbiA9PT0gXCJyb3RhdGVcIikge1xuICAgICAgICAgICAgICAgIC8vIOWmguaenOaYr+aXi+i9rOaTjeS9nFxuICAgICAgICAgICAgICAgIHJvY29jbzJkLnJvdGF0ZU9iamVjdCh4LCB5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJvY29jbzJkLl9jdXJyZW50VHJhbnNmb3JtLmFjdGlvbiA9PT0gXCJzY2FsZVwiKSB7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5piv5pW05L2T57yp5pS+5pON5L2cXG4gICAgICAgICAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgcm9jb2NvMmQuX2N1cnJlbnRUcmFuc2Zvcm0uY3VycmVudEFjdGlvbiA9IFwic2NhbGVcIjtcbiAgICAgICAgICAgICAgICAgICAgcm9jb2NvMmQuc2NhbGVPYmplY3QoeCwgeSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc2V0ICYmIHQuY3VycmVudEFjdGlvbiA9PT0gXCJzY2FsZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb2NvY28yZC5yZXNldEN1cnJlbnRUcmFuc2Zvcm0oZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcm9jb2NvMmQuX2N1cnJlbnRUcmFuc2Zvcm0uY3VycmVudEFjdGlvbiA9IFwic2NhbGVFcXVhbGx5XCI7XG4gICAgICAgICAgICAgICAgICAgIHJvY29jbzJkLnNjYWxlT2JqZWN0KHgsIHksIFwiZXF1YWxseVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyb2NvY28yZC5fY3VycmVudFRyYW5zZm9ybS5hY3Rpb24gPT09IFwic2NhbGVYXCIpIHtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzlj6rmmK/nvKnmlL4geFxuICAgICAgICAgICAgICAgIHJvY29jbzJkLnNjYWxlT2JqZWN0KHgsIHksIFwieFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJvY29jbzJkLl9jdXJyZW50VHJhbnNmb3JtLmFjdGlvbiA9PT0gXCJzY2FsZVlcIikge1xuICAgICAgICAgICAgICAgIC8vIOWmguaenOWPquaYr+e8qeaUviB5XG4gICAgICAgICAgICAgICAgcm9jb2NvMmQuc2NhbGVPYmplY3QoeCwgeSwgXCJ5XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5piv5ouW5ou954mp5L2TXG4gICAgICAgICAgICAgICAgcm9jb2NvMmQudHJhbnNsYXRlT2JqZWN0KHgsIHkpO1xuICAgICAgICAgICAgICAgIHJvY29jbzJkLnNldEN1cnNvcihDdXJzb3JTdHlsZS5tb3ZlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJvY29jbzJkLnJlbmRlckFsbCgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtb3VzZVVwOiAoeyBlLCByb2NvY28yZCB9LCBuZXh0KSA9PiB7XG4gICAgICAgIG5leHQoKTtcbiAgICAgICAgaWYgKHJvY29jbzJkLmFjdGlvbiAhPT0gXCJkZWZhdWx0XCIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCB0YXJnZXQ7XG4gICAgICAgIGlmIChyb2NvY28yZC5fY3VycmVudFRyYW5zZm9ybSkge1xuICAgICAgICAgICAgbGV0IHRyYW5zZm9ybSA9IHJvY29jbzJkLl9jdXJyZW50VHJhbnNmb3JtO1xuICAgICAgICAgICAgdGFyZ2V0ID0gdHJhbnNmb3JtLnRhcmdldDtcbiAgICAgICAgICAgIGlmICh0YXJnZXQuX3NjYWxpbmcpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQuX3NjYWxpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOavj+asoeeJqeS9k+abtOaUuemDveimgemHjeaWsOiuoeeul+aWsOeahOaOp+WItueCuVxuICAgICAgICAgICAgbGV0IGkgPSByb2NvY28yZC5fc2hhcGVzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgICAgICByb2NvY28yZC5fc2hhcGVzW2ldLnNldENvb3JkcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0LmlzTW92aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAvLyDlnKjngrnlh7vkuYvpl7TlpoLmnpzniankvZPnirbmgIHmlLnlj5jkuobmiY3mtL7lj5Hkuovku7ZcbiAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzU3RhdGVDaGFuZ2VkKCkpIHtcbiAgICAgICAgICAgICAgICAvLyByb2NvY28yZC5lbWl0KFwib2JqZWN0Om1vZGlmaWVkXCIsIHsgdGFyZ2V0IH0pO1xuICAgICAgICAgICAgICAgIC8vIHRhcmdldC5lbWl0KFwibW9kaWZpZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcm9jb2NvMmQuX2N1cnJlbnRUcmFuc2Zvcm0gPSBudWxsO1xuICAgICAgICBpZiAocm9jb2NvMmQuX2dyb3VwU2VsZWN0b3IpIHtcbiAgICAgICAgICAgIC8vIOWmguaenOacieaLluiTneahhumAieWMuuWfn1xuICAgICAgICAgICAgcm9jb2NvMmQuZmluZFNlbGVjdGVkT2JqZWN0cyhlKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYWN0aXZlR3JvdXAgPSByb2NvY28yZC5nZXRBY3RpdmVHcm91cCgpO1xuICAgICAgICBpZiAoYWN0aXZlR3JvdXApIHtcbiAgICAgICAgICAgIC8v6YeN5paw6K6+572uIOa/gOa0u+e7hCDkuK3nmoTniankvZNcbiAgICAgICAgICAgIGFjdGl2ZUdyb3VwLnNldE9iamVjdHNDb29yZHMoKTtcbiAgICAgICAgICAgIGFjdGl2ZUdyb3VwLnNldChcImlzTW92aW5nXCIsIGZhbHNlKTtcbiAgICAgICAgICAgIHJvY29jbzJkLnNldEN1cnNvcihDdXJzb3JTdHlsZS5kZWZhdWx0KTtcbiAgICAgICAgfVxuICAgICAgICByb2NvY28yZC5fZ3JvdXBTZWxlY3RvciA9IG51bGw7XG4gICAgICAgIHJvY29jbzJkLnJlbmRlckFsbCgpO1xuICAgICAgICByb2NvY28yZC5zZXRDdXJzb3JGcm9tRXZlbnQoZSwgdGFyZ2V0KTtcbiAgICB9LFxuICAgIG1vdXNlV2hlZWw6ICh7IGUsIHJvY29jbzJkIH0sIG5leHQpID0+IHtcbiAgICAgICAgbGV0IGIgPSB0cnVlO1xuICAgICAgICBpZiAoZS53aGVlbERlbHRhKSB7XG4gICAgICAgICAgICBiID0gZS53aGVlbERlbHRhID4gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGIgPSBlLmRldGFpbCA8IDA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coZS53aGVlbERlbHRhLCBiKTtcbiAgICAgICAgaWYgKGIpIHtcbiAgICAgICAgICAgIHJvY29jbzJkLnpvb21Jbih0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJvY29jbzJkLnpvb21PdXQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgbmV4dCgpO1xuICAgIH0sXG59O1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBSZWN0IH0gZnJvbSBcIi4uL2VudGl0aWVzL2VsZW1lbnRzL3JlY3QuZW50aXR5XCI7XG5pbXBvcnQgeyBXaWRnZXQgfSBmcm9tIFwiLi93aWRnZXRcIjtcbmNvbnN0IHJlY3REcmF3U3ZnID0gJzxzdmcgZm9jdXNhYmxlPVwiZmFsc2VcIiBjbGFzcz1cIlwiIGRhdGEtaWNvbj1cImJvcmRlclwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHZpZXdCb3g9XCI2NCA2NCA4OTYgODk2XCI+PHBhdGggZD1cIk04ODAgMTEySDE0NGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ2NzM2YzAgMTcuNyAxNC4zIDMyIDMyIDMyaDczNmMxNy43IDAgMzItMTQuMyAzMi0zMlYxNDRjMC0xNy43LTE0LjMtMzItMzItMzJ6bS00MCA3MjhIMTg0VjE4NGg2NTZ2NjU2elwiPjwvcGF0aD48L3N2Zz4nO1xuLyoqXG4gKiDnn6nlvaLnu5jliLbmjILku7ZcbiAqL1xuZXhwb3J0IGNsYXNzIFJlY3REcmF3V2lkZ2V0IGV4dGVuZHMgV2lkZ2V0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBgXG4gICAgPHN0eWxlPlxuICAgICAgICAjcmVjdC1kcmF3LXdpZGdldCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjU0ZjQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMyMjU0ZjQ7ICAgIFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDk5O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGN1YmljLWJlemllciguNjQ1LC4wNDUsLjM1NSwxKTtcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgICAgICAgfVxuICAgICAgICAjcmVjdC1kcmF3LXdpZGdldDpob3ZlcntcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ5NzJmNjtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzQ5NzJmNjtcbiAgICAgICAgfVxuICAgIDwvc3R5bGU+XG4gICAgPGJ1dHRvbiBpZD1cInJlY3QtZHJhdy13aWRnZXRcIj7nn6nlvaI8L2J1dHRvbj5cbiAgYDtcbiAgICB9XG4gICAgbW91c2VEb3duKHsgcm9jb2NvMmQsIHBvaW50ZXIgfSwgbmV4dCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgaWYgKHJvY29jbzJkLmFjdGlvbiA9PT0gXCJkcmF3XCIpIHtcbiAgICAgICAgICAgICAgICByb2NvY28yZC5fZ3JvdXBTZWxlY3RvciA9IHtcbiAgICAgICAgICAgICAgICAgICAgLy8g6YeN572u6YCJ5Yy654q25oCBXG4gICAgICAgICAgICAgICAgICAgIGV4OiBwb2ludGVyLngsXG4gICAgICAgICAgICAgICAgICAgIGV5OiBwb2ludGVyLnksXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIOiuqeaJgOacieWFg+e0oOWkseWOu+a/gOa0u+eKtuaAgVxuICAgICAgICAgICAgICAgIHJvY29jbzJkLmRlYWN0aXZhdGVBbGxXaXRoRGlzcGF0Y2goKTtcbiAgICAgICAgICAgICAgICByb2NvY28yZC5yZW5kZXJBbGwoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB5aWVsZCBuZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBtb3VzZU1vdmUoeyBwb2ludGVyLCByb2NvY28yZCB9LCBuZXh0KSB7XG4gICAgICAgIGxldCBncm91cFNlbGVjdG9yID0gcm9jb2NvMmQuX2dyb3VwU2VsZWN0b3I7XG4gICAgICAgIGlmIChyb2NvY28yZC5hY3Rpb24gPT09IFwiZHJhd1wiKSB7XG4gICAgICAgICAgICBpZiAoZ3JvdXBTZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIC8vIOWmguaenOacieaLluiTneahhumAieWMuuWfn1xuICAgICAgICAgICAgICAgIGdyb3VwU2VsZWN0b3IubGVmdCA9XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXIueCAtIHJvY29jbzJkLl9vZmZzZXQubGVmdCAtIGdyb3VwU2VsZWN0b3IuZXg7XG4gICAgICAgICAgICAgICAgZ3JvdXBTZWxlY3Rvci50b3AgPSBwb2ludGVyLnkgLSByb2NvY28yZC5fb2Zmc2V0LnRvcCAtIGdyb3VwU2VsZWN0b3IuZXk7XG4gICAgICAgICAgICAgICAgcm9jb2NvMmQucmVuZGVyVG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbW91c2VVcCh7IHJvY29jbzJkIH0sIG5leHQpIHtcbiAgICAgICAgaWYgKHJvY29jbzJkLmFjdGlvbiA9PT0gXCJkcmF3XCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvY29jbzJkLl9ncm91cFNlbGVjdG9yKTtcbiAgICAgICAgICAgIGNvbnN0IHsgZXgsIGV5LCBsZWZ0LCB0b3AgfSA9IHJvY29jbzJkLl9ncm91cFNlbGVjdG9yO1xuICAgICAgICAgICAgLy8g57uY5Yi25paw5aKe5Ye65p2l55qE55+p5b2iXG4gICAgICAgICAgICBjb25zdCByZWN0ID0gbmV3IFJlY3Qoe1xuICAgICAgICAgICAgICAgIHRvcDogZXkgKyB0b3AgLyAyLFxuICAgICAgICAgICAgICAgIGxlZnQ6IGV4ICsgbGVmdCAvIDIsXG4gICAgICAgICAgICAgICAgd2lkdGg6IGxlZnQsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0b3AsXG4gICAgICAgICAgICAgICAgZmlsbDogXCIjMGM5OWZmNTBcIixcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcm9jb2NvMmQuX3NoYXBlcy5wdXNoKHJlY3QpO1xuICAgICAgICAgICAgcmVjdC5zZXR1cFN0YXRlKCk7XG4gICAgICAgICAgICByZWN0LnNldENvb3JkcygpO1xuICAgICAgICAgICAgcmVjdC5jYW52YXMgPSByb2NvY28yZDtcbiAgICAgICAgICAgIHJvY29jbzJkLnJlbmRlckFsbCgpO1xuICAgICAgICAgICAgLy8g5Y+W5raI6auY5LquXG4gICAgICAgICAgICByb2NvY28yZC5fZ3JvdXBTZWxlY3RvciA9IG51bGw7XG4gICAgICAgICAgICByb2NvY28yZC5yZW5kZXJUb3AoKTtcbiAgICAgICAgICAgIHRoaXMucm9jb2NvMmQuX2FjdGl2ZUdyb3VwID0gbnVsbDtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDmjILku7bmiJDlip/mjILovb3vvIzkuLrmjILku7YgZG9tIOWFg+e0oOe7keWumuS6i+S7tlxuICAgIG9uTW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5kb20ucXVlcnlTZWxlY3RvcihcIiNyZWN0LWRyYXctd2lkZ2V0XCIpLm9uY2xpY2sgPVxuICAgICAgICAgICAgdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnJvY29jbzJkLmFjdGlvbiA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5byA5aeL57uY5Yi2XCIpO1xuICAgICAgICAgICAgdGhpcy5yb2NvY28yZC5zZXRDdXJzb3IoXCJjcm9zc2hhaXJcIik7XG4gICAgICAgICAgICB0aGlzLnJvY29jbzJkLmFjdGlvbiA9IFwiZHJhd1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLnu5PmnZ/nu5jliLZcIik7XG4gICAgICAgICAgICB0aGlzLnJvY29jbzJkLnNldEN1cnNvcihcImRlZmF1bHRcIik7XG4gICAgICAgICAgICB0aGlzLnJvY29jbzJkLmFjdGlvbiA9IFwiZGVmYXVsdFwiO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVXRpbCB9IGZyb20gXCIuLi9iYXNlL3V0aWxzXCI7XG5leHBvcnQgY2xhc3MgV2lkZ2V0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBgYDtcbiAgICAgICAgdGhpcy5zdHlsZSA9IHt9O1xuICAgIH1cbiAgICBzZXRTdHlsZShzdHlsZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBzdHlsZSkge1xuICAgICAgICAgICAgdGhpcy5zdHlsZVtrZXldID0gc3R5bGVba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5kb20pIHtcbiAgICAgICAgICAgIFV0aWwuc2V0U3R5bGUodGhpcy5kb20sIHN0eWxlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgbW91bnQoKSB7XG4gICAgICAgIFV0aWwuc2V0U3R5bGUodGhpcy5kb20sIHRoaXMuc3R5bGUpO1xuICAgICAgICB0aGlzLm9uTW91bnRlZCgpO1xuICAgIH1cbiAgICBvbk1vdW50ZWQoKSB7IH1cbn1cbiIsImltcG9ydCB7IFdpZGdldCB9IGZyb20gXCIuL3dpZGdldFwiO1xuY29uc3Qgem9vbUluU3ZnID0gJzxzdmcgZm9jdXNhYmxlPVwiZmFsc2VcIiBjbGFzcz1cIlwiIGRhdGEtaWNvbj1cInpvb20taW5cIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBhcmlhLWhpZGRlbj1cInRydWVcIiB2aWV3Qm94PVwiNjQgNjQgODk2IDg5NlwiPjxwYXRoIGQ9XCJNNjM3IDQ0M0g1MTlWMzA5YzAtNC40LTMuNi04LTgtOGgtNjBjLTQuNCAwLTggMy42LTggOHYxMzRIMzI1Yy00LjQgMC04IDMuNi04IDh2NjBjMCA0LjQgMy42IDggOCA4aDExOHYxMzRjMCA0LjQgMy42IDggOCA4aDYwYzQuNCAwIDgtMy42IDgtOFY1MTloMTE4YzQuNCAwIDgtMy42IDgtOHYtNjBjMC00LjQtMy42LTgtOC04em0yODQgNDI0TDc3NSA3MjFjMTIyLjEtMTQ4LjkgMTEzLjYtMzY5LjUtMjYtNTA5LTE0OC0xNDguMS0zODguNC0xNDguMS01MzcgMC0xNDguMSAxNDguNi0xNDguMSAzODkgMCA1MzcgMTM5LjUgMTM5LjYgMzYwLjEgMTQ4LjEgNTA5IDI2bDE0NiAxNDZjMy4yIDIuOCA4LjMgMi44IDExIDBsNDMtNDNjMi44LTIuNyAyLjgtNy44IDAtMTF6TTY5NiA2OTZjLTExOC44IDExOC43LTMxMS4yIDExOC43LTQzMCAwLTExOC43LTExOC44LTExOC43LTMxMS4yIDAtNDMwIDExOC44LTExOC43IDMxMS4yLTExOC43IDQzMCAwIDExOC43IDExOC44IDExOC43IDMxMS4yIDAgNDMwelwiPjwvcGF0aD48L3N2Zz4nO1xuY29uc3Qgem9vbU91dFN2ZyA9ICc8c3ZnIGZvY3VzYWJsZT1cImZhbHNlXCIgY2xhc3M9XCJcIiBkYXRhLWljb249XCJ6b29tLW91dFwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHZpZXdCb3g9XCI2NCA2NCA4OTYgODk2XCI+PHBhdGggZD1cIk02MzcgNDQzSDMyNWMtNC40IDAtOCAzLjYtOCA4djYwYzAgNC40IDMuNiA4IDggOGgzMTJjNC40IDAgOC0zLjYgOC04di02MGMwLTQuNC0zLjYtOC04LTh6bTI4NCA0MjRMNzc1IDcyMWMxMjIuMS0xNDguOSAxMTMuNi0zNjkuNS0yNi01MDktMTQ4LTE0OC4xLTM4OC40LTE0OC4xLTUzNyAwLTE0OC4xIDE0OC42LTE0OC4xIDM4OSAwIDUzNyAxMzkuNSAxMzkuNiAzNjAuMSAxNDguMSA1MDkgMjZsMTQ2IDE0NmMzLjIgMi44IDguMyAyLjggMTEgMGw0My00M2MyLjgtMi43IDIuOC03LjggMC0xMXpNNjk2IDY5NmMtMTE4LjggMTE4LjctMzExLjIgMTE4LjctNDMwIDAtMTE4LjctMTE4LjgtMTE4LjctMzExLjIgMC00MzAgMTE4LjgtMTE4LjcgMzExLjItMTE4LjcgNDMwIDAgMTE4LjcgMTE4LjggMTE4LjcgMzExLjIgMCA0MzB6XCI+PC9wYXRoPjwvc3ZnPic7XG4vKipcbiAqIOefqeW9oue7mOWItuaMguS7tlxuICovXG5leHBvcnQgY2xhc3MgWm9vbVdpZGdldCBleHRlbmRzIFdpZGdldCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuaW5uZXJIVE1MID0gYFxuICAgIDxzdHlsZT5cbiAgICAgICAgLndpZGdldC1idG4ge1xuICAgICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgICAgICBjb2xvcjogIzg2MzhlNTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDk5O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGN1YmljLWJlemllciguNjQ1LC4wNDUsLjM1NSwxKTtcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMnB4ICMwMDAwMDA7XG4gICAgICAgIH1cbiAgICAgICAgLndpZGdldC1idG46aG92ZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICAgICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8YnV0dG9uIGlkPVwiem9vbS1pbi13aWRnZXRcIiBjbGFzcz1cIndpZGdldC1idG5cIiB0aXRsZT1cIuaUvuWkp1wiPlxuICAgICAgICAke3pvb21JblN2Z31cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGlkPVwiem9vbS1vdXQtd2lkZ2V0XCIgY2xhc3M9XCJ3aWRnZXQtYnRuXCIgdGl0bGU9XCLnvKnlsI9cIj5cbiAgICAgICAgJHt6b29tT3V0U3ZnfVxuICAgIDwvYnV0dG9uPlxuICBgO1xuICAgIH1cbiAgICAvLyDmjILku7bmiJDlip/mjILovb3vvIzkuLrmjILku7YgZG9tIOWFg+e0oOe7keWumuS6i+S7tlxuICAgIG9uTW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5kb20ucXVlcnlTZWxlY3RvcihcIiN6b29tLWluLXdpZGdldFwiKS5vbmNsaWNrID1cbiAgICAgICAgICAgIHRoaXMuem9vbUluLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZG9tLnF1ZXJ5U2VsZWN0b3IoXCIjem9vbS1vdXQtd2lkZ2V0XCIpLm9uY2xpY2sgPVxuICAgICAgICAgICAgdGhpcy56b29tT3V0LmJpbmQodGhpcyk7XG4gICAgfVxuICAgIG1vdXNlRG93bih7IGUgfSwgbmV4dCkge1xuICAgICAgICAvLyB0aGlzLnJvY29jbzJkXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiPz8/P1wiLCBlLCB0aGlzLnJvY29jbzJkKTtcbiAgICAgICAgbmV4dCgpO1xuICAgIH1cbiAgICB6b29tSW4oKSB7XG4gICAgICAgIHRoaXMucm9jb2NvMmQuem9vbUluKCk7XG4gICAgfVxuICAgIHpvb21PdXQoKSB7XG4gICAgICAgIHRoaXMucm9jb2NvMmQuem9vbU91dCgpO1xuICAgIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuaW1wb3J0IHsgUm9jb2NvMkRWaWV3LCBSZWN0LCBSb2NvY29JbWFnZSwgWm9vbVdpZGdldCwgUmVjdERyYXdXaWRnZXQsIH0gZnJvbSBcIkByb2NvY29qcy8yZFwiO1xuY29uc3Qgem9vbVdpZGdldCA9IG5ldyBab29tV2lkZ2V0KCkuc2V0U3R5bGUoe1xuICAgIHJpZ2h0OiBcIjBweFwiLFxufSk7XG5jb25zdCByZWN0ZHJhd1dpZGdldCA9IG5ldyBSZWN0RHJhd1dpZGdldCgpLnNldFN0eWxlKHtcbiAgICByaWdodDogXCIwcHhcIixcbiAgICB0b3A6IFwiMTAwcHhcIixcbn0pO1xuY29uc3QgY2FudmFzID0gbmV3IFJvY29jbzJEVmlldyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKSwge1xuICAgIHdpZHRoOiAxNjAwLFxuICAgIGhlaWdodDogMTAwMCxcbiAgICB3aWRnZXRzOiBbem9vbVdpZGdldCwgcmVjdGRyYXdXaWRnZXRdLFxufSk7XG5jb25zdCByZWN0MSA9IG5ldyBSZWN0KHtcbiAgICB0b3A6IDI0NSxcbiAgICBsZWZ0OiA0MDAsXG4gICAgd2lkdGg6IDYwLFxuICAgIGhlaWdodDogNjAsXG4gICAgZmlsbDogXCIjODkyMGE1ODBcIixcbiAgICByeDogMTAsXG4gICAgcnk6IDEwLFxuICAgIGFuZ2xlOiA0NSxcbn0pO1xuY29uc3QgaW1ncyA9IFtcbiAgICB7XG4gICAgICAgIHNyYzogXCJodHRwczovL2ZhYnJpZS1wcm9kLm9zcy1jbi1zaGFuZ2hhaS5hbGl5dW5jcy5jb20vaW1hZ2UvNjFkZTVhMGJjYjYwNzQyZWU4Yzk4YjZiLzE2NDI0MTE3ODEzNDgtMC42Njg5MzEzNzc0MTAxNTM1XCIsXG4gICAgICAgIHRvcDogMzAwLFxuICAgICAgICBsZWZ0OiAyNTAsXG4gICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgIGhlaWdodDogNTAwLFxuICAgIH0sXG4gICAge1xuICAgICAgICBzcmM6IFwiaHR0cHM6Ly9mYWJyaWUtcHJvZC5vc3MtY24tc2hhbmdoYWkuYWxpeXVuY3MuY29tL2ltYWdlLzYxZGU1YTBiY2I2MDc0MmVlOGM5OGI2Yi8xNjQyNDEzMzI0MTMwLTAuNTAwNjA4NTY3MTg4NzE3N1wiLFxuICAgICAgICB0b3A6IDE1MCxcbiAgICAgICAgbGVmdDogNjAwLFxuICAgICAgICB3aWR0aDogNDAwLFxuICAgICAgICBoZWlnaHQ6IDIwMCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3JjOiBcImh0dHBzOi8vc3QtZ2R4LmRhbmNmLmNvbS9nYW9kaW5neC80NDQ5L2NvbmZpZ3MvYWN0aXZpdHkvMjAyMjA5MDgtMTcxNDUyLTI2NzguanBnXCIsXG4gICAgICAgIHRvcDogNzAwLFxuICAgICAgICBsZWZ0OiAyNTAsXG4gICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgIGhlaWdodDogMzAwLFxuICAgIH0sXG4gICAge1xuICAgICAgICBzcmM6IFwiaHR0cHM6Ly9zdC1nZHguZGFuY2YuY29tL2dhb2Rpbmd4LzQ0NDkvY29uZmlncy9hY3Rpdml0eS8yMDIyMDkwOC0xNjU5MDQtM2E2OS5qcGdcIixcbiAgICAgICAgdG9wOiA0MDAsXG4gICAgICAgIGxlZnQ6IDUwMCxcbiAgICAgICAgd2lkdGg6IDIwMCxcbiAgICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHNyYzogXCJodHRwczovL3N0LWdkeC5kYW5jZi5jb20vZ2FvZGluZ3gvNDQ0OS9jb25maWdzL2FjdGl2aXR5LzIwMjIwOTA4LTE2NTkzNC01YWQ1LmpwZ1wiLFxuICAgICAgICB0b3A6IDQwMCxcbiAgICAgICAgbGVmdDogNzAwLFxuICAgICAgICB3aWR0aDogMjAwLFxuICAgICAgICBoZWlnaHQ6IDMwMCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3JjOiBcImh0dHBzOi8vc3QtZ2R4LmRhbmNmLmNvbS9nYW9kaW5neC80NDQ5L2NvbmZpZ3MvYWN0aXZpdHkvMjAyMjA5MDgtMTY1OTM5LTE5ODYuanBnXCIsXG4gICAgICAgIHRvcDogNzAwLFxuICAgICAgICBsZWZ0OiA1MDAsXG4gICAgICAgIHdpZHRoOiAyMDAsXG4gICAgICAgIGhlaWdodDogMzAwLFxuICAgIH0sXG4gICAge1xuICAgICAgICBzcmM6IFwiaHR0cHM6Ly9zdC1nZHguZGFuY2YuY29tL2dhb2Rpbmd4LzQ0NDkvY29uZmlncy9hY3Rpdml0eS8yMDIyMDkwOC0xNjU5NDctZDkzOC5qcGdcIixcbiAgICAgICAgdG9wOiA3MDAsXG4gICAgICAgIGxlZnQ6IDcwMCxcbiAgICAgICAgd2lkdGg6IDIwMCxcbiAgICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgfSxcbl0ubWFwKChfYSkgPT4ge1xuICAgIHZhciB7IHNyYyB9ID0gX2EsIG9wcyA9IF9fcmVzdChfYSwgW1wic3JjXCJdKTtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gc3JjO1xuICAgIHJldHVybiBuZXcgUm9jb2NvSW1hZ2UoaW1nLCBvcHMpO1xufSk7XG5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpbWdzLmZvckVhY2goKGltZykgPT4ge1xuICAgICAgICBjYW52YXMuYWRkKGltZyk7XG4gICAgfSk7XG4gICAgY2FudmFzLmFkZChyZWN0MSk7XG59LCAxMjAwKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==