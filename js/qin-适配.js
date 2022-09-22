//适配兼容
(function (doc, win) {
    console.log(doc, win)
    // var docEle = doc.documentElement;
    const dpr = Math.min(win.devicePixelRatio, 3),
        scale = 1 / dpr,
        resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize';
 
    var recalCulate = function () {
        var docEle = document.documentElement,
            w = docEle.clientWidth,
           num = (w > 1366 ? 750 : w) / 750;       // **此时的750就是你设计稿的尺寸
        docEle.style.fontSize = (num * 100).toFixed(1) + 'px';
    };48
    recalCulate();
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvent, recalCulate, false);
})(document, window);