(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/control.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '28fddXRx+xOop/DrZIZggf+', 'control', __filename);
// Script/control.js

'use strict';

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        var _this = this;

        this.rot = 0;

        this.X = 0;
        this.Y = 0;
        this.Z = this.node.rotation;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        //cc.log(this.node.getComponent(cc.Label).string)

        wx.startGyroscope({
            interval: 'game'
        });
        //console.log('11111');
        wx.onGyroscopeChange(function (res) {
            if (_this.rot == 1) {
                // this.X += res.x*0.02*180;
                // this.Y += res.y*0.02*180;
                _this.Z -= res.z * 0.02 * 180 * 1.1;
            }
        });
    },
    update: function update(dt) {
        //积分
        //在label上显示
        //this.node.getComponent(cc.Label).string = this.X.toFixed(2) + ' ' + this.Y.toFixed(2) + ' ' + this.Z.toFixed(2);
        //控制节点旋转

        if (this.rot == 1) {
            this.node.rotation = this.Z;
        }
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=control.js.map
        