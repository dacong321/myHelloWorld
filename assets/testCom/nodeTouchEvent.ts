// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';
    @property
    cnt: number = 0;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let self = this;
        this.node.opacity = 160;
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            cc.log('Drag stated ...');
            this.opacity = 255;
        }, this.node);

        this.node.on(cc.Node.EventType.TOUCH_MOVE, function name(event) {
            this.opacity = 255;
            var delta = event.touch.getDelta();
            this.x += delta.x;
            this.y += delta.y;
            self.label.string = "我被拖动";
            //-- 禁止向上传递
            event.stopPropagation();
            //-- 得到当前的这个类
            console.log("===", this.getComponent(NewClass));
        }, this.node);

        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            this.opacity = 160;
        }, this.node);
    }

    start () {
        this.cnt = 0;
        this.onTask();
    }
    //-- 使用定时器，逐步驱动任务
    onTask(){
        this.schedule(this.task1, 1,0,1);
    }
    task1(){
        this.unschedule(this.task1);
        this.cnt = this.cnt + (1);
        console.log("执行任务1开始==",   this.cnt );
        this.schedule(this.task2, 1,0,1);
    }
    task2(){
        this.unschedule(this.task2);
        this.cnt = this.cnt + (1);
        console.log("执行任务2开始==", this.cnt);
        // cc.easeCubicActionOut();
        this.schedule(this.task3, 1, 0, 100);
    }

    task3(){
        cc.director.loadScene("testScen3");
    }
}
