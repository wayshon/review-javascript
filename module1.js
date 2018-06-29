
import m2 from './module2.js'
// console.log(m2)
export let obj = {
    get num() {
        return 666
    },
    set num(val) {
        console.log('set num')
    }
}

export default 'this is module1'