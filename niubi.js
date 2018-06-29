let f1 = function (a, b, c) {
    console.log(a)
    console.log(b)
    console.log(c)
}
let f2 = f1.bind({}, 1)
f2(2, 3)