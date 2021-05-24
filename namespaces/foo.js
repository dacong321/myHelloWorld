var foo;
(function (foo) {
    foo.bar = 2;
})(foo || (foo = {}));
window["foo"] = foo;
