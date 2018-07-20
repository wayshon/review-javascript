
let EventBus = {
    addEventListener: function(key, target, fn) {
        if (!this[key]) {
            this[key] = [];
        }

        let item = this[key].find(v => v.target === target)
        if (item) {
            item.fns.push(fn)
        } else {
            let obj = {
                target,
                fns: [fn]
            }
            this[key].push(obj);
        }
    },
    removeEventListener: function(key, target) {
        let len = this[key].length, index;
        for (index = 0; index < len; index++) {
            if (this[key][index].target === target) {
                break;
            }
        }
        this[key].splice(index, 1);
    },
    emit: function(key, params) {
        let list = this[key],
            len = list.length;
        
        for (let i = 0; i < len; i++) {
            let obj = list[i];
            for (let j = 0; j < obj.fns.length; j++) {
                obj.fns[j].apply(obj.target, params);
            }
        }
    }
}

let obj1 = {
    msg: 'this is obj1'
}

let obj2 = {
    msg: 'this is obj2'
}

EventBus.addEventListener("log", obj1, function(params) {
    console.log(this.msg, params)
})

EventBus.addEventListener("log", obj1, function(params) {
    console.log(this.msg, params, "66666")
})

EventBus.addEventListener("log", obj2, function(params) {
    console.log(this.msg, params)
})

EventBus.removeEventListener("log", obj1)

EventBus.emit("log", ["hahahaha"])
