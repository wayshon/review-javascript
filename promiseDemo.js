
function P(fn) {
    // 用来保存多个 .then 回调函数
    var events = [];
    this.then = function (f) {
        events.push(f);
        return this;
    }
    // 将 .then 传进来的回调函数按先进先出的顺序执行
    function resolve(newValue) {
        var f = events.shift();
        f(newValue, resolve);
    }
    // 执行构造函数传进来的初始化函数，并将执行回调的方法传给他
    fn(resolve);
}

let p = new P(function (resolve) {
    setTimeout(function () {
        resolve(111111);
    }, 1000)
});

p.then(function (value, resolve) {
    console.log(value);
    setTimeout(function () {
        resolve(222222222);
    }, 1000)
}).then(function (value, resolve) {
    console.log(value);
    setTimeout(function () {
        resolve(33333333);
    }, 1000)
}).then(function (value, resolve) {
    console.log(value)
})