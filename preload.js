function preloader() {
    var i = 0;
    while (i < document.images.length) {
        var img = new Image();
        img.src = document.images[i].src;
        i++;
    }
}
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}
addLoadEvent(preloader);