import { Rect } from "../entities/elements/rect.entity";
import { Widget } from "./widget";

const rectDrawSvg =
  '<svg focusable="false" class="" data-icon="border" width="1em" height="1em" fill="currentColor" aria-hidden="true" viewBox="64 64 896 896"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>';
/**
 * 矩形绘制挂件
 */
export class RectDrawWidget extends Widget {
  innerHTML = `
    <style>
        #rect-draw-widget {
            height: 36px;
            color: #fff;
            background-color: #2254f4;
            border-color: #2254f4;    
            font-weight: 400;
            line-height: 30px;
            padding: 0 16px;
            font-size: 14px;
            border-radius: 8px;
            cursor: pointer;
            line-height: 1.499;
            position: relative;
            display: inline-block;
            font-weight: 500;
            white-space: nowrap;
            text-align: center;
            background-image: none;
            border: 1px solid transparent;
            cursor: pointer;
            transition: all .3s cubic-bezier(.645,.045,.355,1);
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
            touch-action: manipulation;
        }
        #rect-draw-widget:hover{
            color: #fff;
            background-color: #4972f6;
            border-color: #4972f6;
        }
    </style>
    <button id="rect-draw-widget">矩形</button>
  `;

  async mouseDown({ rococo2d, pointer }, next) {
    if (rococo2d.action === "draw") {
      rococo2d._groupSelector = {
        // 重置选区状态
        ex: pointer.x,
        ey: pointer.y,
        top: 0,
        left: 0,
      };
      // 让所有元素失去激活状态
      rococo2d.deactivateAllWithDispatch();
      rococo2d.renderAll();
      return;
    } else {
      await next();
    }
  }
  mouseMove({ pointer, rococo2d }, next) {
    let groupSelector = rococo2d._groupSelector;
    if (rococo2d.action === "draw") {
      if (groupSelector) {
        // 如果有拖蓝框选区域
        groupSelector.left =
          pointer.x - rococo2d._offset.left - groupSelector.ex;
        groupSelector.top = pointer.y - rococo2d._offset.top - groupSelector.ey;
        rococo2d.renderTop();
      }
      return;
    } else {
      next();
    }
  }
  mouseUp({ rococo2d }, next) {
    if (rococo2d.action === "draw") {
      console.log(rococo2d._groupSelector);
      const { ex, ey, left, top } = rococo2d._groupSelector;
      // 绘制新增出来的矩形
      const rect = new Rect({
        top: ey + top / 2,
        left: ex + left / 2,
        width: left,
        height: top,
        fill: "#0c99ff50",
      });
      rococo2d._shapes.push(rect);
      rect.setupState();
      rect.setCoords();
      rect.canvas = rococo2d;
      rococo2d.renderAll();
      // 取消高亮
      rococo2d._groupSelector = null;
      rococo2d.renderTop();
      this.rococo2d._activeGroup = null;
      return;
    } else {
      next();
    }
  }

  // 挂件成功挂载，为挂件 dom 元素绑定事件
  onMounted() {
    (this.dom.querySelector("#rect-draw-widget") as HTMLElement).onclick =
      this.onClick.bind(this);
  }

  onClick() {
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
}
