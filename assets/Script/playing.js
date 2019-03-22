// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
const MIN_LENGTH = 50;

cc.Class({
    extends: cc.Component,

    properties: {
        // startButton: cc.Button,
        // setttingButton: cc.Button,
        // rankingButton: cc.Button,
        // startScene: cc.Node,
        playingScene: cc.Node,
        // gameOverScene: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.playingScene.on("touchstart", (event) => {
            this.startPoint = event.getLocation();
        });

        this.playingScene.on("touchend", (event) => {
            this.touchEnd(event);
        });

        this.playingScene.on("touchcancel", (event) => {
            this.touchEnd(event);
        });
    },


    touchEnd(event) {
        this.endPoint = event.getLocation();
        // var vec = cc.pSub(this.startPoint, this.endPoint);
        var vec = this.endPoint.sub(this.startPoint);
        // if (cc.pLength(vec) > MIN_LENGTH) {
        if (vec.mag() > MIN_LENGTH) {
            // horizontal
            if (Math.abs(vec.x) > Math.abs(vec.y)) {
                if (vec.x < 0) {
                    cc.director.loadScene("gameOver");
                    cc.log("left");
                    cc.log("游戏结束");
                } else {
                    cc.log("right");
                }
            } else {
                if (vec.y > 0) {
                    cc.log("up");
                } else {
                    cc.log("down");
                }
            }
        }
    },
    // update (dt) {},
});
