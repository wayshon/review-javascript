// // let list = ['a', 1, 'd', 4, 'c', 2, 'b', 3];
// // list.sort();
// // console.log(list)

// // let list = ['a', 1, 'd', 4, 'c', 2, 'b', 3];
// // list.sort(function (a, b) {
// //     if (typeof a === 'string' && typeof b === 'number')
// //         return false;

// //     if (typeof a === 'number' && typeof b === 'string')
// //         return true;

// //     return a - b;
// // });
// // console.log(list)

// Array.prototype.sort = function () {
//     let nums = [], strs = [], others = [];
//     for (let item of this) {
//         if (typeof item === 'number') {
//             nums.push(item)
//         } else if (typeof item === 'string') {
//             strs.push(item)
//         } else {
//             others.push(item)
//         }
//     }

//     let quick = function (arr) {
//         if (arr.length <= 1) {
//             return arr;
//         }
//         var left = [];
//         var right = [];
//         var base = arr[0];
//         for (var i = 1; i < arr.length; i++) {
//             if (arr[i] > base) {
//                 right.push(arr[i]);
//             } else {
//                 left.push(arr[i])
//             }
//         }
//         return quick(left).concat(base, quick(right));
//     }

//     let result = quick(strs).concat(quick(nums)).concat(others)
//     this.splice(0, this.length, ...result)
// }

// let list = ['a', 1, 'd', 4, 'c', 2, 'b', 3];
// list.sort()
// console.log(list)


// let combine = function(list1, list2) {
//     let obj = {};
//     for (let v of list1) {
//         obj[v] = ''
//     }
//     for (let v of list2) {
//         obj[v] = ''
//     }
//     return Reflect.ownKeys(obj);
// }

// let list1 = ['a', 1, 'd', 4, 'c', 2, 'b', 3];
// let list2 = ['e', 5, 'f', 6, 'c', 2, 'b', 3];

// let result = combine(list1, list2)
// console.log(result)