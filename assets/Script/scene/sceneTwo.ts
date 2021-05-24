// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import ggg from "../init3";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';
    @property(cc.Sprite)
    spShan: cc.Sprite = null;
    @property(cc.Node)
    tNode: cc.Node = null;
    @property(cc.ScrollView)
    tScroll:cc.ScrollView = null;
    @property(cc.Node)
    contentNode: cc.Node = null;
    @property(cc.Node)
    item:cc.Node = null;
    @property(cc.Node)
    bgNode:cc.Node = null;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
    }

    start () {
        let self = this;
        // cc.loader.loadRes("Texture/title_icon_set", cc.SpriteFrame, function (err, spriteFrame) {
        //     if (err) {
        //         console.log("load title_icon_set err=====", err)
        //     }
        //     console.log("OKOKOKO",spriteFrame);
        //     self.spShan.spriteFrame = spriteFrame;
        // });
        this.onTestContains();
        this.onTestTouchPointIsContains();
    }

    // update (dt) {}
    onTestContains(){
        //返回节点在世界坐标系下的对齐轴向的包围盒（AABB）。 该边框包含自身和已激活的子节点的世界边框。
        let s = this.spShan.node.getBoundingBoxToWorld();  //360 200   240 240    ①
        //将节点坐标系下的一个点转换到世界空间坐标系(该例子的点是 锚点所在的位置)
        let b = this.tNode.convertToWorldSpaceAR(this.tNode.getPosition()); //480 320  100 100
        let c = this.spShan.node.convertToWorldSpaceAR(this.spShan.node.getPosition());//480 320   即480-宽度120 = 360  然后320-高度120 = 200，即①处的位置就是左下角的位置
        
        console.log( "s", s);
        console.log( "b", b);
        console.log( "c", c);
        //console.log( "this.spShan.node.getPosition();", this.spShan.node.getPosition());
      
        // var s = new cc.Rect(0, 0, 10, 10);
        // var b = new cc.Vec2(0, 5);
        // 当前矩形是否包含指定坐标点
        console.log( "s.contains(b)",  s.contains(b));
    }

    onTestTouchPointIsContains(){
        let self = this;
        //-- 监听点击事件
        this.node.on(cc.Node.EventType.TOUCH_END, function name(event:any) {
            let s = self.spShan.node.getBoundingBoxToWorld();
            if (s.contains(event.touch.getLocation())) {
                console.log("我点击在shan节点的内部");
                cc.director.loadScene("testScen2");
            }  
        }, this.node);

        //-- 初始化ScrollView的Item
        let n = 18
        for (let i = 0; i < n; i++) {
            let item = cc.instantiate(this.item);
            item.active = true;
            cc.find("lab", item).getComponent(cc.Label).string = "" + i;
            this.contentNode.addChild(item);
        }
        //scrollView所在节点 监听滚动结束
        this.tScroll.node.on("scroll-ended", this.myScrollViewRun, this);
    }

    myScrollViewRun(){
        //-- 下述打印的值相等都是，content的y轴坐标， 初始值为预先创建组件的xy坐标 0 0
        console.log(this.contentNode.y);
        console.log(this.tScroll.getContentPosition().y);
        //-112 -70
        console.log("this.contentNode.childrenCount=", this.contentNode.childrenCount);
        this.contentNode.getComponent(cc.Layout).updateLayout();
        for (let i = 0; i < this.contentNode.childrenCount; i++) {
            let item = this.contentNode.children[i];
            //-- 得到该bgNode的矩形区域
            let s = this.bgNode.getBoundingBoxToWorld();
            let b = item.parent.convertToWorldSpaceAR(item.getPosition());
            console.log("s", s);
            console.log("b", b);
            //-- b点是否在s矩形区域内。
            if (s.contains(b)) {
                console.log("第几个item在规定的区域内", i);
                console.log("item.height", item.height);
                //-- 界面是9个Item， bgNode上面4个下面4个Item
                let offSet = (i-4)*item.height;
                this.contentNode.stopAllActions();
                //-- 移动scrollView的content节点 ，让此item和bgNode重合
                this.contentNode.runAction(cc.sequence(cc.moveBy(0.5, cc.v2(this.contentNode.x, offSet - this.contentNode.y))
                    , cc.callFunc(() => {
                        //-- 注释掉是因为，可能stopAllActions 之后这句话还是有效的，因为界面显示卡顿 貌似执行了这句。
                        //this.contentNode.y = (i - 4) * item.height;
                        //let pos :cc.Vec2 = cc.v2( .2);
                        //this.tScroll.setContentPosition(pos);
                    })));
                break;
            } else{
                console.log(i + "不在");
            } 
        }

    }
}
