// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;
@ccclass
export default class NewClass extends cc.Component {

    // @property(cc.Node)
    // _canvas:cc.Node = null;
    @property(cc.Label)
    labCamer:cc.Label = null;
    // @property(cc.Node)
    // jjcanvgfdgfdgdfas:cc.Node = null;
    @property(cc.Node)
    tNode: cc.Node = null;
    @property(cc.Camera)
    cccamera: cc.Camera = null;



    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

    }

    // update (dt) {}

    init(){

    }
}
