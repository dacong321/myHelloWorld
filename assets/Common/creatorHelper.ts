let CreatorHelper = {
    addClickEvent: function (btnCom, jsNode, jsName, cbFuncName, data) {
        let eventHandler = new cc.Component.EventHandler();
        eventHandler.target = jsNode;// 这个 node 节点是你的事件处理代码组件所属的节点
        eventHandler.component = jsName;
        eventHandler.handler = cbFuncName;
        eventHandler.customEventData = data;
        btnCom.clickEvents.push(eventHandler);
    },
    func(){

    },
    loadRes(path:string, type: typeof cc.Asset, cb){
        cc.loader.loadRes(path, type, cb);
    },
    testObj:{
        key: 255,
    }
}


// CreatorHelper.addClickEvent =  function (btnCom, jsNode,jsName,cbFuncName,data) {
//     let eventHandler = new cc.Component.EventHandler();
//     eventHandler.target = jsNode;// 这个 node 节点是你的事件处理代码组件所属的节点
//     eventHandler.component = jsName; 
//     eventHandler.handler = cbFuncName;
//     eventHandler.customEventData = data;
//     btnCom.clickEvents.push(eventHandler);
// }
//module.exports = CreatorHelper;
export default CreatorHelper;