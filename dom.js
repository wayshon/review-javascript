var father = document.getElementById("father")
var child = document.getElementById("child")
var asd = document.getElementById("asd")
var put = document.getElementById("put")
var btn = document.querySelector("#btn")

var fc = function (e) {
    console.log('father catch')
}
var fb = function (e) {
    console.log('father bubbling')
}
var cc = function (e) {
    console.log('child catch')
}
var cb = function (e) {
    console.log('child bubbling')
}
var ac = function (e) {
    console.log('asd catch')
}
var ab = function (e) {
    console.log('asd bubbling')
}
child.addEventListener("click", cb, false)
asd.addEventListener("click", ac, true)
asd.addEventListener("click", ab, false)
father.addEventListener("click", fc, true)
father.addEventListener("click", fb, false)
child.addEventListener("click", cc, true)
// setTimeout(() => {
//     father.removeEventListener("click", fc, true)
//     father.removeEventListener("click", fb, false)
//     child.removeEventListener("click", cc, true)
//     child.removeEventListener("click", cb, false)
//     asd.removeEventListener("click", ac, true)
//     asd.removeEventListener("click", ab, false)
// }, 3000);

// father.onclick = function () {
//     console.log('father onclick === ')
// };
// btn.onclick = function () {
//     console.log('btn onclick === ')
// };

var e = document.createEvent("MouseEvents")
e.initMouseEvent("click",false,false);
asd.dispatchEvent(e)