(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/player.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '220b83kReZCpLhxBbwrfLv8', 'player', __filename);
// Script/player.js

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
var pos = [];
var k = [];
var b = [];
var node = [];
var length = 100;
var can_roation = 0;
var can_rotaion_num = null;
var t = 0;
var pi = 3.1415926;
cc.Class({
    extends: cc.Component,

    properties: {
        top: cc.Node,
        mid: cc.Node,
        ground: cc.Node
    },
    start: function start() {
        this.Collision();
        console.log("start");
    },


    Collision: function Collision() {
        var i = 0;
        //Physics.rayCast(p1, p2, type);

        //get p1
        //cc.log(this.node.getLocation());
        var Physics = cc.director.getPhysicsManager();

        // var position_ball = new cc.Vec2(this.node.position.x, this.node.position.y + 60);
        // var position_ground = new cc.Vec2(position_ball.x, 0);
        // cc.log(position_ball.x, position_ball.y);
        // cc.log(position_ground.x, position_ground.y);

        node[0] = "Canvas/background/npc/top";
        pos[0] = cc.find(node[0]).position;
        k[0] = -cc.find(node[0]).rotation / 180 * pi;
        b[0] = pos[0].y - k[0] * pos[0].x;

        node[1] = "Canvas/background/npc/mid";
        pos[1] = cc.find(node[1]).position;
        k[1] = -cc.find(node[1]).rotation / 180 * pi;
        b[1] = pos[1].y - k[1] * pos[1].x;

        node[2] = "Canvas/background/npc/ground";
        pos[2] = cc.find(node[2]).position;
        k[2] = -cc.find(node[2]).rotation / 180 * pi;
        b[2] = pos[2].y - k[2] * pos[2].x;

        cc.log(pos);
    },
    update: function update(dt) {
        var position_ball = new cc.Vec2(this.node.position.x, this.node.position.y);
        var now_x = position_ball.x;
        var now_y = position_ball.y;
        //y=kx+b
        //cc.log(cc.find('Canvas/background/end/end_door').getComponent('end_control').end);

        //end
        if (now_y < -350 && cc.find('Canvas/background/end/end_door').getComponent('end_control').end == 0) {
            cc.find('Canvas/background/end/end_door').getComponent('end_control').scense = 1;
            cc.director.loadScene('gameOver');
        }

        //rotation
        if (can_roation == 0) {
            for (var i = 0; i < pos.length; i++) {
                if (now_x > pos[i].x - length - 15 && now_x < pos[i].x + length + 15 && now_y > now_x * k[i] + b[i]) {
                    can_roation = 1;
                    can_rotaion_num = i;
                    break;
                }
            }
        } else if (can_roation == 1 && t == 0) {
            var broad_node = cc.find(node[can_rotaion_num]);
            broad_node.getComponent('control').rot = 1;
            console.log(broad_node.name + " 111");
            t = 1;
        } else if (can_roation == 1 && t == 1) {
            if (!(now_x > pos[can_rotaion_num].x - length - 15 && now_x < pos[can_rotaion_num].x + length + 15 && now_y > now_x * k[can_rotaion_num] + b[can_rotaion_num])) {
                //stop roation
                var _broad_node = cc.find(node[can_rotaion_num]);
                _broad_node.getComponent('control').rot = 0;
                //console.log(broad_node.name+" 000");

                can_roation = 0;
                can_rotaion_num = null;
                t = 0;
            }
        }
        k[0] = -cc.find(node[0]).rotation / 180 * pi;
        b[0] = pos[0].y - k[0] * pos[0].x;
        k[1] = -cc.find(node[1]).rotation / 180 * pi;
        b[1] = pos[1].y - k[1] * pos[1].x;
        k[2] = -cc.find(node[2]).rotation / 180 * pi;
        b[2] = pos[2].y - k[2] * pos[2].x;
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
        //# sourceMappingURL=player.js.map
        