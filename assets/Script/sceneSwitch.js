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
        // startScene: cc.Node,
        // playingScene: cc.Node,
        // gameOverScene: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    start(){
        this.node.on('click',this.clickbutton,this);
    },
    clickbutton(btn){
        cc.director.loadScene('game');
    },
    clickStart(/*event, customEventData*/) {
        // this.startScene.active = false;
        // this.playingScene.active = true;
        // cc.director.loadScene("playing");
        cc.director.loadScene("game");
        cc.log("开始游戏");
        // //这里 event 是一个 Touch Event 对象，你可以通过 event.target 取到事件的发送节点
        // var node = event.target;
        // var button = node.getComponent(cc.Button);
        // //这里的 customEventData 参数就等于你之前设置的 "click1 user data"
        // cc.log("node=", node.name, " event=", event.type, " data=", customEventData);
    },

    clickReStart() {
        // this.playingScene.active = true;
        // this.gameOverScene.active = false;
        // cc.director.loadScene("playing");
        cc.director.loadScene("game");
        cc.log("重新开始");
    },

    // clickSetting() {
    //     cc.log("设置");
    // },

    clickRanking() {
        cc.log("排名");
    },

    clickReturn() {
        cc.director.loadScene("start");
        cc.log("主菜单");
    },
    // update (dt) {},
});
