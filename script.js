function OnLinkClick_scrDown() {
    SmoothScroll(true);
}

function OnLinkClick_scrUp() {
    SmoothScroll(false);
}

function sleep(msec) {
    return new Promise(function(resolve) {
       setTimeout(function() {resolve()}, msec);
    })
 }

async function SmoothScroll(isDown){
    //スクロール量を取得
    const split = 30;
    var element = document.documentElement;
    //移動可能な領域差分
    var difference = element.scrollHeight - element.clientHeight;
    //移動量を算出
    var distance = 0;
    if(isDown) distance = ( difference - window.scrollY) / split;
    else distance = ( -difference  + difference - window.scrollY ) / split
    //一定間隔で移動
    for(let i = 0;i<split;i++){
        await sleep(10);
        window.scrollBy(0, distance);
    }
}

