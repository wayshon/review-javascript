// let p = function (val) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve(`${val} promise`);
//         }, 3000);
//     });
// };

// async function f1() {
//     let result =  await p('f1');
//     console.log('return f1')
//     return `${result} end1`;
    
// }

// async function f2() {
//     let result = await p('f2');
//     console.log('return f2')
//     return `${result} end2`;
// }

// async function fun() {
//     let r1 = await f1()
//     try {
//         await Promise.reject('出错了')
//         console.log(' ========== ')
//         await f2()
//     }catch(e) {
//         console.log('catch')
//     }
    
//     let r2 = await f2()
//     return `${r1} - ${r2}`
// }

// fun().then(v => console.log(v)).catch(e => console.log(e))

// try {
//     a = b;
//     console.log(' ========== ')
// }catch(e) {
//     console.log('catch')
// }


// var testG = 7;
// if (true) {
//     console.log(testG); 
//     var testG = 0;
// }

// var testH = 8;
// if (true) {
//     console.log(testH);
//     let testH = 0;
// }

// var testI = 9;
// if (true) {
//     console.log(testI); 
//     const testI = 0;
// }

// 7, 报错, 报错

// (function() {
//     var a = b = 666;
// })()
// console.log(a)
// console.log(b)

let uri = "https://baidu.com/a/b?c=d&e=f#h^^";

let en1 = encodeURI(uri)

let de1 = decodeURI(uri)

let en2 = decodeURIComponent(uri)

let de2 = encodeURIComponent(uri)

console.log(en1)
console.log(de1)
console.log(en2)
console.log(de2)
