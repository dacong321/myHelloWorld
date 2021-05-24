// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ggg from "../Script/init3";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property
    _originalWidth =  0;
    @property
    _originalHeight = 0;
    @property
    mySet = null;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this._originalWidth = this.node.width;
        this._originalHeight = this.node.height;
        this.mySet = null;

        if (this.mySet) {
            
        }else{
            console.log("this.mySet 空是false");
        }

    }

    start () {
        this.node.getComponent(cc.Widget).updateAlignment();
        this.FixSceneResolution();
    }

    update (dt) {}
    onDestroy() {
        console.log("----ConntentAdapter 被销毁了吗？ ")
        if (this.mySet) {
            clearInterval(this.mySet); 
        }
    }

    FixSceneResolution(){
        if (!this.node) {
            console.log("在分辨率适配中，不存在这个节点")
            return;
        }
        console.log("Contentadapter doLoad 被执行");
        let self = this;
        //-- 设计分辨率好像 永远不会变 getDesignResolutionSize , 因为它是 生产者 在制作场景时使用的的蓝本
        //-- getCanvasSize  canvas 组件， 随时获得设备屏幕的实际分辨率。  并对场景中所有渲染元素进行适当的缩放（正确缩放的前提是 首先确定canvas组件所在的节点适配整个屏幕的大小）
        //-- canvas 所在的节点this.node 的width 和 height 影响了其子节点的布局。
        //-- canvas 只会对所在游戏的画面的大小进行调整， 并不会对其所在节点进行调整。

        //-- 即 为了让子节点适配整个屏幕的大小，必须先让其父节点（也就是canvas所在节点）的尺寸对齐到全屏。
        this.mySet = setInterval(
            function name() {
                let cS = cc.view.getCanvasSize(); // 返回视图中 canvas 的尺寸。在 native 平台下，它返回全屏视图下屏幕的尺寸。 在 Web 平台下，它返回 canvas 元素尺寸。 427 640
                let srS = cc.view.getDesignResolutionSize(); //返回视图的设计分辨率。 默认下分辨率尺寸同 getFrameSize 方法相同                                     640 960
                console.log(self.node.width);                      // 若无widget无Fit 宽高 则等于设计分辨率， 若有Fit 宽或者高的一个，则宽高会变
                console.log(self.node.height); 
                console.log(cS);
                console.log(srS);

                let text = '{ "key":"{}", "key2":"[]" }';
                //                 var text = '{ "employees" : [' +
                // '{ "firstName":"Bill" , "lastName":"Gates" },' +
                // '{ "firstName":"Steve" , "lastName":"Jobs" },' +
                // '{ "firstName":"Alan" , "lastName":"Turing" } ]}';
                console.log(JSON.parse(text));
            }, 5000
        )

   
        //-- 设计蓝图的 宽高比
        //-- 实际设备的 宽高比
        //-- ？ 来确定节点的
        //适配宽度
        //- 1.实际设备宽（），则node加宽， 子节点改变x坐标
        //- 2.实际设备高，则node顶到最宽，高度适配到 合适的宽高比。（背景可以做大， 但是node里面的子节点的内容是按照 宽度进行排列的，）
        //适配高度
        //- 1.实际设备高，则node加高
        //- 2.实际设备宽，则node顶到最高，宽度适配到 合适的宽高比。（背景可以做大， 但是node里面的子节点的内容是按照 高度进行排列的，）

        // 宽高一起适配

    }
}
