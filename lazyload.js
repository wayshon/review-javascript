var aImg = document.querySelectorAll('img');
var len = aImg.length;
var n = 0;//存储图片加载到的位置，避免每次都从第一张图片开始遍历

var loadImg = function () {
    var clientHeight = document.documentElement.clientHeight;
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

    /**
     * offsetTop: 元素距离顶部的距离
     * clientHeight： 文档高度
     * scrollTop：滚动了多少距离
     * 元素距离顶部的距离小于视窗高度+已滚动的距离，证明元素在屏幕内或者屏幕上方
     * 元素距离顶部距离小于已滚动的距离证明元素的顶部已经在屏幕上方
     */
    for (let i = n; i < len; i++) {
        if (aImg[i].offsetTop < clientHeight + scrollTop) {
            if (aImg[i].getAttribute('real-src')) {
                setTimeout(() => {
                    aImg[i].src = aImg[i].getAttribute('real-src');
                }, 500);
                // aImg[i].src = aImg[i].getAttribute('real-src');
            }
            n = i + 1;
            console.log('n = ' + n);
        }
    }
}

window.onscroll = loadImg

window.onload = loadImg