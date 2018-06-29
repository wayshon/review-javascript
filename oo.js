function P(name = "boo", age = 10) {
    this.name = name;
    this.age = age;
    this.show = function() {
        console.log(`name: ${this.name}, age: ${this.age}`)
    }
}

P.prototype.alert = function() {
    console.log(`nameaa: ${this.name}, ageaa: ${this.age}`)
}

var a = new P();
a.__proto__.alert = function() {
    alert("hahahaa")
}
Object.getPrototypeOf(a).alert = function() {
    alert("hehehehe")
}
var b = new P("far", 20);
b.alert()

var a = new P();
Object.defineProperty(a, "self_a", {
    enumerable: true
})
var b = Object.create(a);
Object.defineProperty(b, "self_b", {
    enumerable: false
})
for (key in b) {
    console.log(key)
}

console.log(Object.keys(a)) //获取实例的可枚举的属性
console.log(Object.getOwnPropertyNames(b)) //实例所有的属性，无论是否可枚举

function T() {}
var a = new P();
P.prototype = {
    constructor: T,
    tip: function() {
        console.log("tip =====")
    }
}
console.log(a.constructor === P)

function A() {
    this.name = "a"
}
A.prototype.list = ['a', 'b'];
A.prototype.show = function() {
    console.log(this.list)
}

function B() {
    this.name = "b"
}
B.prototype = new A()

var a = new A()

var obj = new B()
obj.list.push('c')

console.log(a.list)

function A() {
    this.name = "aaa"
}
A.prototype.show = function() {
    console.log("show A")
}

function B() {
    this.name = "bbb"
}
B.prototype = new A();
B.prototype.show = function() {
    console.log("show B")
}

A.prototype.alert = function() {
    console.log(this.name)
}

var a = new A()
var b = new B()

a.show()
a.alert()
b.show()
b.alert()

function A() {
    this.name = "aaa"
    this.age = 10;
}
A.prototype.show = function() {
    console.log("show A")
}

function B() {
    A.call(this);
    this.age = 30;
}

B.prototype = Object.create(A.prototype)

B.prototype.show = function() {
    console.log("show B")
}

A.prototype.alert = function() {
    console.log(this.name)
}

var a = new A()
var b = new B()

a.show()
a.alert()
b.show()
b.alert()




