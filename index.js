// var text = "abcdefg";
// var result = text.replace(/(ab)(.*)(ef)/g, "$1$2($3)")

// // var result = text.match(/(.at)/g)

// // var result = text.replace(/(cat)/g, "word ($1)")

// console.log(result)

// var str = "red,blue,green,yellow";
// var reg = /[^\,]+/g;
// // var result = str.match(reg)
// var  result = str.split(reg)
// console.log(result)

let p = new Promise((resolve, reject) => {
    // throw new Error("fuck")
    resolve("ok")
    throw new Error("fuck")
})

p.then(v => console.log(v)).catch(e => console.log(e))