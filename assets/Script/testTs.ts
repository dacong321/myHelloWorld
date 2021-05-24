// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ggg from "./init3";

const {ccclass, property} = cc._decorator;

(function(){
    console.log("========import testTs is begin")
})();
@ccclass
export default class testTs extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hellosss';
    //@property
    test2:string = 'pppp';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        //console.log("Configure Task==", foo);
    }

    // update (dt) {}
}
(function(){
    console.log("========import testTs is over")
})();