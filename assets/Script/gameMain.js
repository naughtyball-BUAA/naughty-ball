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

    start () {
        this.openTouch();
    },

    //开启函数
    openTouch:function(){
        this.node.on(cc.Node.EventType.TOUCH_START,this.GameTouch,this);
    },
    
    //关闭函数
    disableTouch:function(){
        this.node.targetoff(this);
    },

    //响应函数
    GameTouch:function(event){
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
