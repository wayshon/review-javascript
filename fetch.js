
function _fetch(url, data, method = 'GET', options = {}) {
    const body = o2s(data);
    let params = {
        method: method,
    };
    if (method === 'GET') { // 如果是GET请求，拼接url
        url += '?' + body;
    } else {
        params.body = body
    }
    if (options.cookie != undefined) {
        params.credentials = 'include'
    }
    if (options.headers != undefined && typeof options.headers == "object") {
        params.headers = new Headers(options.headers);
    } else {
        params.headers = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        });
    }
    return fetch(url, params).then(r => options.dataType == "text" ? r.text() : r.json()).then(r => r);
}
function o2s(obj, arr = [], idx = 0) {
    for (let item in obj) {
        arr[idx++] = [item, obj[item]];
    }
    return new URLSearchParams(arr).toString();
}
function get(url, data, options = {}) {
    return _fetch(url, data, 'GET', options);
}

function post(url, data, options = {}) {
    return _fetch(url, data, 'POST', options);
}

get("/json/data.json", { title: "标题" }, {
    dataType: "json",
    cookie: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
    .then(res => console.log(res))
    .catch(err => console.log(err))


