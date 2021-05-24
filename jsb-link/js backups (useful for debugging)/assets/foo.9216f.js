var foo;

(function(o) {
o.bar = 2;
console.log("模拟链接到网络");
})(foo || (foo = {}));

window.foo = foo;