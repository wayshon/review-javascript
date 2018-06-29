console.log("this is a worker : ")
this.postMessage("worker is ready")

// this.close()

this.onmessage = function(event) {
    var data = event.data;
    console.log("worker : ", data)
    if (!Array.isArray(data)) {
        throw new Error("param is't a Array")
    }
    this.postMessage(data.sort())
}