window.__require = function t(e, o, n) {
function r(c, s) {
if (!o[c]) {
if (!e[c]) {
var l = c.split("/");
l = l[l.length - 1];
if (!e[l]) {
var u = "function" == typeof __require && __require;
if (!s && u) return u(l, !0);
if (i) return i(l, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = l;
}
var p = o[c] = {
exports: {}
};
e[c][0].call(p.exports, function(t) {
return r(e[c][1][t] || t);
}, p, p.exports, t, e, o, n);
}
return o[c].exports;
}
for (var i = "function" == typeof __require && __require, c = 0; c < n.length; c++) r(n[c]);
return r;
}({
Helloworld: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "e1b90/rohdEk4SdmmEZANaD", "Helloworld");
var n = this && this.__extends || function() {
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
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, c = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (c = (i < 3 ? r(c) : i > 3 ? r(e, o, c) : r(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, c = i.ccclass, s = i.property, l = t("./init"), u = t("./init"), p = t("./testTs"), f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.tt = null;
e.label = null;
e.text = "hello";
e._width = 100;
return e;
}
e.prototype.start = function() {
this.label.string = this.text;
this._width;
this.width;
this.width = 200;
this.tt = new p.default();
console.log("this.tt.test2==", this.tt.test2);
console.log(foo);
foo.bar;
this.tt.start();
console.log(l.default);
var t = u.Type.sd;
console.log(t);
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "openTest", "()V");
};
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
e.XXXXFunc = function() {
console.log("android zhong java diaoyong le js");
};
r([ s ], e.prototype, "tt", void 0);
r([ s(cc.Label) ], e.prototype, "label", void 0);
r([ s({
displayName: "66",
visible: !0
}) ], e.prototype, "text", void 0);
r([ s ], e.prototype, "_width", void 0);
r([ s ], e.prototype, "width", null);
return e = r([ c ], e);
}(cc.Component);
o.default = f;
cc._RF.pop();
}, {
"./init": "init",
"./testTs": "testTs"
} ],
init2: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "671b0cM3vRDELDghVSleRIh", "init2");
Object.defineProperty(o, "__esModule", {
value: !0
});
cc._RF.pop();
}, {} ],
init: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "81a92jHi6lKqpGTLbrqXZHn", "init");
Object.defineProperty(o, "__esModule", {
value: !0
});
o.default = {
init: function(t) {},
otherFunc: function() {
this.tempData = {
num: 132,
st: 456
};
}
};
(function(t) {
t[t.sd = -1] = "sd";
t[t.ss = 0] = "ss";
})(o.Type || (o.Type = {}));
cc._RF.pop();
}, {} ],
testTs: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "be959jOdIdALp137wLDAM3k", "testTs");
var n = this && this.__extends || function() {
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
function n() {
this.constructor = e;
}
e.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, new n());
};
}(), r = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, c = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (c = (i < 3 ? r(c) : i > 3 ? r(e, o, c) : r(e, o)) || c);
return i > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
var i = cc._decorator, c = i.ccclass, s = i.property, l = function(t) {
n(e, t);
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
r([ s(cc.Label) ], e.prototype, "label", void 0);
r([ s ], e.prototype, "text", void 0);
return e = r([ c ], e);
}(cc.Component);
o.default = l;
cc._RF.pop();
}, {} ],
ttest2: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "adb4aSki51Mka7wcuXMFw+C", "ttest2");
e.exports = {};
cc._RF.pop();
}, {} ],
ttest: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "47522Z4VkNPYohlch1/tYwk", "ttest");
(function(t) {
t && t.__esModule;
})(t("./ttest2"));
cc._RF.pop();
}, {
"./ttest2": "ttest2"
} ]
}, {}, [ "Helloworld", "init", "init2", "testTs", "ttest", "ttest2" ]);