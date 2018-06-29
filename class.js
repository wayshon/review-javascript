// class Person {
//     static score() {
//         return 100
//     };
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.selfShow = () => {
//             console.log(`name: ${this.name}, age: ${this.age}`)
//         }
//     }

//     set selfAge(age) {
//         this.age = age;
//     }

//     get selfAge() {
//         return this.age
//     }

//     show() {
//         console.log(`name: ${this.name}, age: ${this.age}`)
//     }
// }

// // function Person(name, age) {
// //     this.name = name;
// //     this.age = age;
// //     this.selfShow = () => {
// //         console.log(`name: ${this.name}, age: ${this.age}`)
// //     }
// // }

// // Object.defineProperty(Person.prototype, 'selfAge', {
// //     get: function() {
// //         return this.age
// //     },
// //     set: function(val) {
// //         this.age = val
// //     }
// // })

// // Person.prototype.show = function () {
// //     console.log(`name: ${this.name}, age: ${this.age}`)
// // }

// // Object.assign(Person.prototype, {
// //     show2: function() {
// //         console.log(`name: ${this.name}, age: ${this.age}`)
// //     }
// // })

// class C extends Person {
//     static ggg() {
//         return super.score()
//     }
//     constructor(name, age) {
//         super(name,age)
//     }
// }

// // let p1 = new Person("Lu");
// let p2 = new C("Lu");
// // console.log(C.__proto__)
// // console.log(C.prototype.__proto__)
// // console.log(p1.__proto__)
// console.log(p2.__proto__)
// console.log(p2.hasOwnProperty('show'))
// console.log(p2.__proto__.hasOwnProperty('show'))
// console.log(p2.__proto__.__proto__.hasOwnProperty('show'))
// console.log(p2.__proto__.__proto__)
// console.log(p2.show())

