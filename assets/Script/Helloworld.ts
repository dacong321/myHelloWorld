const {ccclass, property} = cc._decorator;
//import {init, otherFunc} from './init';
import ccc from './init3';
//import ggg = require("./init")
import {aa, Type} from "./init3";
import testTs from './testTs';  //export default class testTs extends cc.Component {
// export enum Type{      //export interface aa {
//     sd = -1,           //   gun:()=>void;      
//     ss ,               //}

// }
//import init = require('./init')
// import init from "./init"

import CreatorHelper from "../Common/creatorHelper"
// import CreatorHelper = require("../Common/CreatorHelper")
@ccclass
export default class Helloworld extends cc.Component implements aa{
    gun = function(){
        console.log("gun 函数被执行");
    }
    @property
    tt : testTs = null;
    @property(cc.Label)
    label: cc.Label = null;
    @property({ displayName : "66",visible: true })
    text: string = 'hello';
    @property
    _width = 100;
    @property
    get width(){
        console.log("get width == ", this._width);
        return this._width;
    }
    set width(value){
        cc.log('width changed');
        this._width = value;
    } 
    @property(cc.Button)
    next: cc.Button = null;

    onLoad(){
        this.label.string = this.text;
        this.testJsCom();
    }

    start () {
        if (cc.sys.WECHAT_GAME == cc.sys.platform) {
            this.wechatGameAuth();
        } else {
            console.log("=====================001");
            window.gg.testFunc();
            console.log("=====================002");
            console.log("lll==", window);
            import("./init").then(module => {
                console.log(gg);
            }).
            catch(err => {
                console.log(err);
            })

            this.node.addComponent("ContentAdapter");
        }
    }
    //-- 微信小游戏授权
    wechatGameAuth() {
        let self = this;
        // 可以通过 wx.getSetting 先查询一下用户是否授权了 "scope.record" 这个 scope
        wx.getSetting({
            success(res) {
                /* 
                    权限
                    录音    scope.record
                    定位    scope.userLocation
                    scope.userInfo	        wx.getUserInfo	            用户信息
                    scope.userLocation	    wx.getLocation	            地理位置
                    scope.werun	            wx.getWeRunData	            微信运动步数
                    scope.writePhotosAlbum	wx.saveImageToPhotosAlbum	保存到相册
                */
                if (!res.authSetting['scope.userLocation']) {
                    console.log("没有获取到定位权限--进行授权");
                    self.authorize("scope.userLocation");
                    return;
                }
                if (!res.authSetting['scope.userInfo']) {
                    console.log("没有获取到获取用户信息权限--进行授权");
                    self.authorize("scope.userInfo");
                    return;
                }
                if (!res.authSetting['scope.writePhotosAlbum']) {
                    console.log("没有获取到保存相册权限--进行授权");
                    self.authorize("scope.writePhotosAlbum");
                    return;
                }
                if (!res.authSetting['scope.record']) {
                    console.log("没有获取到录音权限--进行授权");
                    self.authorize("scope.record");
                    return;
                }
                console.log("已经授权--进行登录");
                self.enterGame();
            }
        });
    }
    authorize(key) {
        let self = this;
        if (key == "scope.userInfo") {
            let button = wx.createUserInfoButton({
                type: 'text',
                text: '获取用户信息',
                style: {
                  left: wx.getSystemInfoSync().windowWidth/2-100,
                  top: wx.getSystemInfoSync().windowHeight/2,
                  width: 200,
                  height: 40,
                  lineHeight: 40,
                  backgroundColor: '#000000',
                  color: '#ffffff',
                  textAlign: 'center',
                  fontSize: 16,
                  borderRadius: 4
                }
            });
            button.onTap((res) => {
                // 此处可以获取到用户信息
                console.log("用户权限回调", res);
                if (res.errMsg === 'getUserInfo:ok') {
                    button.destroy();
                    self.wechatGameAuth();
                }
            });
            return;
        }
        wx.authorize({
            scope: key,
            success () {
                console.log("授权成功", key);
                self.wechatGameAuth();
            },
            fail () {
                console.log("授权失败", key);
                self.wechatGameAuth();
            }
        });
    }


    enterLogin(){
        window.gg.testFunc();
    }
  
    //-- 
    enterGame(){
   
        console.log("enterGAem");
        let self = this;
        //-- testDon
        if (cc.sys.isNative && (cc.sys.platform != cc.sys.WECHAT_GAME)|| CC_PREVIEW) {
            console.log("不是小程序");
            return;
        }
        //-- 加载的包名 在不同文件夹下可以存在同名文件夹， 比如在asset下和asset/resource下都有一个叫TestSubPackage文件夹，他们在构建后 两个文件夹的文件都会导入到同一个包中。
        //-- 当然在wx小程序的 game.json配置文件中，subpackages: 下的路径只有一份
        let resList:[string, string] = ["Texture", "scene"];
        let resCnt: number = 0;
        let loadAsset = function(){
            //err : 在编辑器中，首先使用了分包里的资源，然后在将使用的分包资源去除，在打小程序包的时候会报错。重新拖该资源即可。
            //err : 主包运行的时候，用到了分包里的资源，这时候分包的资源还没有下载好。
            //err : 853c8.png 所在的分包尚未加载
            //return;
            if (resCnt == resList.length) {
                console.log("加载子包结束=",resCnt);
                //cc.find("bg", self.next.node).getComponent(cc.Sprite);
                return;
         
            }
            cc.loader.downloader.loadSubpackage(resList[resCnt++], (err) => {
                //resCnt++;
                loadAsset();
            })
        }
        loadAsset();

    }




    //-- 测试
    testUsedVar() {
        //-- 测试这两种成员变量不是一个东西
        this._width;
        this.width;
        this.width = 200;

        //-- 测试外部引用的 Class类型的testTs组件
        this.tt = new testTs();
        console.log("this.tt.test2==", this.tt.test2);
        this.tt.start();

        //-- 其它类型
        //console.log(otherFunc);
        console.log(ccc);
        let s: Type = Type.sd;
        console.log(s);
        console.log(foo);
        foo.bar;
    }
    //-- 测试
    testJsCallJava() {
        if (cc.sys.isNative) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "openTest", "()V");
        }
    }
    btnClicked(event, data){
        console.log(event);
        console.log(data);
        cc.director.loadScene("testScen1");
        
    }
    //-- 测试脚本组件，添加全局节点
    testJsCom() {
        console.log(CreatorHelper);
        //let ch = new CreatorHelper();
        CreatorHelper.func();
        CreatorHelper.addClickEvent(this.next, this.node, "Helloworld", "btnClicked", "test btn click");
        this.next;
        CreatorHelper.loadRes("prefab/testGlobalNode", cc.Prefab, (error, resource) => {
            console.log("開始加載預置", error);
            console.log("開始加載預置2", resource);
            let item = cc.instantiate(resource);
            //-- 先加入到场景中，在设置成常驻节点。反之会在小程序中报错。
            cc.director.getScene().addChild(item);
            let sc = cc.director.getScene()
            console.log("==========scx", sc);
            item.x = sc.width /2;
// 得到的scene
// width: 0
// x: 0
// y: 0
// z: 0
            fun1quanju();
            cc.game.addPersistRootNode(item);
        });
    }
}


window["XXXXFunc"] = function(){
    console.log("android zhong java diaoyong le js");
    let obj = new Helloworld();
    obj.gun();
}
window["fun1quanju"] = function(){
    console.log("func1 全局");
}

// //-- 在*.d.ts 文件中  declare let fun1quanju : function;  declare let labelStr :string
// fun1quanju =  function(){
//     console.log("fun1quanju 全局");
// }
// labelStr = "";