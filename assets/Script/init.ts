 //let  init = {};
// import ggg from "./init"
// export default init;

import ggg from "./init3"

// interface bcd{
//     ad:string;
// }
// let gg:bcd = {
//     ad : ""
// };
// gg.ad = "";

// window["gg"]= {}
// window["gg"]["logOnOff"] = true;

// 将window类型强制转换成any，不推荐
// (window as any).gg;
// 推荐方法：
// 在项目中找到*.d.ts 文件 加上以下代码即可：
// interface Window {
//   Jim: any; //注意这里如果不写any那么用window.jim是可以的，但是用window.jim.hu 就会报错
// }
// 在cocoscreator中找到的是 creator.d.ts
// window.gg = {

// }
window.gg = {
//    testFunc(){
//        console.log("这 TYMD嗯我");
       
//    }
}
window.gg.testFunc = function(){console.log("我是TESTFunc")}
//import globalData from "./globalData";
let globalData = null;
import("./globalData").then(module => {
    console.log(module.default);
    globalData = module.default;
    console.log("globalData==测试import加载", globalData)
}).

catch(err => {
    console.log(err);
})

window.gg.globalData = globalData;

//-- 只是在这个模块是全局
const foqweo = 123;
console.log("===================init.ts 被加载了吗=====");



