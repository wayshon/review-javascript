let list = [6, 3, 8, 2, 9, 10, 1, 4, 5, 7];

let selectSort = () => {
    let index, temp;
    let i, j;
    for (i = 0; i < list.length; i++) {
        temp = list[i], index = 0;
        for (j = i + 1; j < list.length; j++) {
            if (list[j] < temp) {
                temp = list[j];
                index = j;
            }
        }
        list[index] = list[i];
        list[i] = temp;
    }
}

selectSort();

console.log(list)