// let list = [6, 3, 8, 2, 9, 10, 1, 4, 5, 7];
// let bubbleSort = arr => {
//     let len = arr.length, i, j;
//     for (i = 0; i < len - 1; i++) {
//         for (j = i + 1; j < len; j++) {
//             if (arr[i] > arr[j]) {
//                 let temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
// }
// bubbleSort(list)
// console.log(list)

// let list = [6, 3, 8, 2, 9, 10, 1, 4, 5, 7];
// let selectSort = arr => {
//     let len = arr.length, i, j, tempIndex;
//     for (i = 0; i < len - 1; i++) {
//         tempIndex = i;
//         for (j = i + 1; j < len; j++) {
//             if (arr[j] < arr[tempIndex]) {
//                 tempIndex = j;
//             }
//         }
//         if (i !== tempIndex) {
//             let temp = arr[i];
//             arr[i] = arr[tempIndex];
//             arr[tempIndex] = temp;
//         }
//     }
// }
// selectSort(list)
// console.log(list)

// let list = [6, 3, 8, 2, 9, 10, 1, 4, 5, 7];
// let insertSort = arr => {
//     let len = arr.length, i, j, temp;
//     for (i = 1; i < len; i++) {
//         temp = arr[i];
//         for (j = i - 1; temp < arr[j]; j--) {
//             arr[j + 1] = arr[j];
//         }
//         arr[j + 1] = temp;
//     }
// }

// let list = [6, 3, 8, 2, 9, 10, 1, 4, 5, 7];
// let dichotomyInsertSort = arr => {
//     let len = arr.length, temp;
//     for (let i = 1; i < len; i++) {
//         temp = arr[i];
//         let left = 0, right = i - 1;

//         while (left <= right) {
//             let middleIndex = Math.floor((left + right) / 2);
//             if (temp < arr[middleIndex]) {
//                 right = middleIndex - 1;
//             } else {
//                 left = middleIndex + 1; // 2
//             }
//         }

//         for (let j = i - 1; j >= left; j--) {
//             arr[j + 1] = arr[j];
//         }
//         arr[left] = temp;
//     }
// }
// dichotomyInsertSort(list)
// console.log(list)


// let list = [6, 3, 8, 2, 9, 10, 1, 4, 5, 7];

// let mergeSort = arr => {
//     if (arr.length < 2) {
//         return arr;
//     }

//     let middleIndex = Math.floor(arr.length / 2),
//         left = arr.slice(0, middleIndex),
//         right = arr.slice(middleIndex);

//     return merge(mergeSort(left), mergeSort(right));
// }

// let merge = (left, right) => {
//     console.log(left, right)
//     let result = [];
//     while (left.length > 0 && right.length > 0) {
//         if (left[0] < right[0]) {
//             result.push(left.shift())
//         } else {
//             result.push(right.shift())
//         }
//     }

//     while (left.length > 0) {
//         result.push(left.shift())
//     }

//     while (right.length > 0) {
//         result.push(right.shift())
//     }

//     return result
// }

// let result = mergeSort(list)
// console.log(result)
