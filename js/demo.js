/**
 * Created by jr on 2018/6/17.
 */

(function () {

    //初始化
    function initData() {
        var str='P1-P2,P1-P2'
        var qrcode = new QRCode(document.getElementById("qrcode"), {
            width : 200,
            height : 200
        });
        qrcode.makeCode(str);
    }
    //事件
    function addListener() {

    }

    function init() {
        initData();
        addListener();
    }
    init();
})();
