window.__require = function t(e, o, r) {
function n(c, s) {
if (!o[c]) {
if (!e[c]) {
var l = c.split("/");
l = l[l.length - 1];
if (!e[l]) {
var p = "function" == typeof __require && __require;
if (!s && p) return p(l, !0);
if (i) return i(l, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = l;
}
var u = o[c] = {
exports: {}
};
e[c][0].call(u.exports, function(t) {
return n(e[c][1][t] || t);
}, u, u.exports, t, e, o, r);
}
return o[c].exports;
}
for (var i = "function" == typeof __require && __require, c = 0; c < r.length; c++) n(r[c]);
return n;
}({
Helloworld: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e1b90/rohdEk4SdmmEZANaD", "Helloworld");
var r = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function r() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (r.prototype = o.prototype, new r());
};
}(), n = this && this.__decorate || function(t, e, o, r) {
var n, i = arguments.length, c = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, r); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, o, c) : n(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, c = i.ccclass, s = i.property, l = t("./testTs"), p = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
e.text = "hello";
e._width = 100;
e.tt = null;
return e;
}
Object.defineProperty(e.prototype, "width", {
get: function() {
console.log("get width == ", this._width);
return this._width;
},
set: function(t) {
cc.log("width changed");
this._width = t;
},
enumerable: !0,
configurable: !0
});
e.prototype.start = function() {
this.label.string = this.text;
this._width;
this.width;
this.width = 200;
this.tt = new l.testTs();
console.log("this.tt.test2==", this.tt.test2);
console.log(foo);
foo.bar;
this.tt.start();
};
n([ s(cc.Label) ], e.prototype, "label", void 0);
n([ s({
displayName: "66",
visible: !0
}) ], e.prototype, "text", void 0);
n([ s ], e.prototype, "_width", void 0);
n([ s ], e.prototype, "width", null);
n([ s ], e.prototype, "tt", void 0);
return e = n([ c ], e);
}(cc.Component);
o.default = p;
cc._RF.pop();
}, {
"./testTs": "testTs"
} ],
testTs: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "be959jOdIdALp137wLDAM3k", "testTs");
var r = this && this.__extends || function() {
var t = function(e, o) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
})(e, o);
};
return function(e, o) {
t(e, o);
function r() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (r.prototype = o.prototype, new r());
};
}(), n = this && this.__decorate || function(t, e, o, r) {
var n, i = arguments.length, c = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, r); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, o, c) : n(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, c = i.ccclass, s = i.property, l = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.label = null;
e.text = "hellosss";
e.test2 = "pppp";
return e;
}
e.prototype.start = function() {
console.log("Configure Task==", foo);
};
n([ s(cc.Label) ], e.prototype, "label", void 0);
n([ s ], e.prototype, "text", void 0);
return e = n([ c ], e);
}(cc.Component);
o.testTs = l;
cc._RF.pop();
}, {} ]
}, {}, [ "Helloworld", "testTs" ]);