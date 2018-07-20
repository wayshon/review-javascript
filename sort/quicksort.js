/**
 * 快排的思想就是找一个基数用来比较
 * 把比他大的放他前面，比他小的放他后面
 * 然后把前后两部分重复此方法排序
 */

let list = [2, 3, 1, 9, 5, 6, 4, 7, 8];

/**
 * 这里就比较简单了，直接创建数组，把比基数小的放前数组，大的放后数组
 * 然后利用数组合并就是排序后的数组
 * 但是重复创建了很多数组对象，加上递归的原因，这里对性能是一种严重的浪费
 */
let quick =  function(arr) {
    if (arr.length < 1) {
        return arr;
    }
    let base = arr[0], left = [], right = [];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < base) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return arguments.callee(left).concat(base, quick(right))
}
console.time('简单快速排序耗时');
let result = quick(list);
console.timeEnd('简单快速排序耗时');

document.querySelector("#app").innerHTML = result.toString()


/**
 * 从后往前找比基数小的
 * 从前往后找比基数大的
 * 互换
 * 只要索引left与索引right没有碰面就继续找
 * 当索引碰面后，把基数与当前从前开始的索引left所在的数互换
 * 这里要强调一下，先从右边开始找，是为了索引left先抢占到中间值
 * 这样左边的索引必须比右索引小的情况下left所在的数肯定小于等于基数
 * 不然 left++ 之后 left 对应的数就很可能比基数大
 * 这里原因是left与right循环的过程中，如果出现其他数大小的就互换
 * 更重要的目的是从后往前找一个比基数小的跟基数换位，就是给基数找到合适的位置
 * 这时，基数前面的都比基数小。
 * 再次理解一下，就要保证left循环递增最后对应的数一定要比基数小，如果先循环left，后面只要就大的数，left就对应那个大的
 * 这样基数与比他大的数换位就不对了
 * 如果是先从后往前找，right循环结束时，只要前面有小于基数的数，right对应的肯定是那个数
 * 然后left++之后指向的也是这个数，当left<right成立，即一次查找碰头时，left++ = right,所以对应的这个数肯定小于基数，所以换位置
 * 再理解一次，中途有满足的就是right找到了比基数小的数，这时候可以跟基数换位，但是left找到了比基数大的数，所以就跟left换了，因为大数肯定要先换，毕竟大数在后面
 * 然后又由right找到一个小于基数的数，这时候left在碰头前没找到比基数大的了，也就数基数现在是前面这段最大的，所以right即left++指向的数就跟基数换位置、
 * 而从左边开始找，只会找到大于基数的停止，但是要这个大于的数没有用，他本来就该在基数后面。
 * 从左边开始只会找到很多小的，直接left++跳过去，因为如果找到一个小的就换位，这就是冒泡了。正确的是找到最后边一个小的换位，保证换位后基数前面的都比他小
 * 给基数前后的数递归
 */
let quickSort = function(arr, startIndex, endIndex) {
    if (startIndex > endIndex) {
        return;
    }

    let left = startIndex, right = endIndex, base = list[startIndex];

    while (left !== right) {
        while (right > left && arr[right] >= base) {
            right--;
        }
        while (left < right && arr[left] <= base) {
            left++;
        }
        if (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
        }
    }

    arr[startIndex] = arr[right];
    arr[right] = base;

    arguments.callee(arr, startIndex, left - 1);
    arguments.callee(arr, left + 1, endIndex)
}
console.time('普通快速排序耗时');
quickSort(list, 0, list.length - 1);
console.timeEnd('普通快速排序耗时');

document.querySelector("#app").innerHTML = list.toString()

/**
 * 取中间数快排
 */
// let quickSortEasy = function (arr, startIndex, endIndex) {
//     console.log("start =================")
//     console.log(startIndex, endIndex)
//     if (startIndex >= endIndex) {
//         return;
//     }

//     let baseIndex = Math.ceil((startIndex + endIndex) / 2);
//     let base = arr[baseIndex], left = startIndex, right = endIndex;

//     while (left !== right) {
//         console.log("in =================")
//         console.log(baseIndex, base)
//         console.log(arr)
        
//         while (left < right && arr[left] <= base) {
//             left++
//         }
//         while (left < right && arr[right] >= base) {
//             right--
//         }

//         if (left < right) {
//             let temp = arr[left];
//             arr[left] = arr[right];
//             arr[right] = temp;
//         }
//     }

//     if ((right < baseIndex && base < arr[right]) || (right > baseIndex && base > arr[right])) {
//         arr[baseIndex] = arr[right];
//         arr[right] = base;
//     }

//     console.log("out =================")
//     console.log(left, right)
//     console.log(arr)

//     arguments.callee(arr, 0, right - 1);
//     arguments.callee(arr, right + 1, endIndex);
// }

// let list = [2, 3, 1, 4, 9, 8, 7, 5, 6]

// quickSortEasy(list, 0, list.length - 1);

// document.querySelector("#app").innerHTML = list.toString()