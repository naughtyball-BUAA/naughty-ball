(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/gameMain.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '783f9eSV0RJ7oYv8CJcEWB4', 'gameMain', __filename);
// Script/gameMain.js

"use strict";

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
        /*
        player:{
            default:null,
            type:cc.Node
        }
        */
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        this.openTouch();
    },


    //开启函数
    openTouch: function openTouch() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.GameTouch, this);
    },

    //关闭函数
    disableTouch: function disableTouch() {
        this.node.targetoff(this);
    },

    //响应函数
    GameTouch: function GameTouch(event) {
        // this.playerNode=cc.find('Main Camera/stageManager/player',this.node);
        // this.player_js=cc.find('Main Camera/stageManager/player',this.node).getComponent('player');
        // this.player_js.jump(cc.v2(100,100),()=>{
        //     cc.log('11111111');
        // });

        // var result=cc.director.getPhysicsManager().rayCast(cc.v2(115,500),cc.v2(115,0));
        // cc.log(result.length);
        // cc.log(result[0].collider.name);
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
        //# sourceMappingURL=gameMain.js.map
        