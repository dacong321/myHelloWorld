// var foo;
// (function (foo) {
//     foo.bar = 1;
    
// })(foo || (foo = {}));


var foo;
(function (foo) {
    foo.bar = 2;
    console.log("模拟链接到网络");
})(foo || (foo = {}));
window["foo"] = foo;

