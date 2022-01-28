window.onload=function() {
    var btn = document.getElementById('btn');
    var content = document.getElementById('content');
    btn.onclick = function () {
        console.log(content);
        fullScreen(content);
    }
    var quite = document.getElementById('quite');
    quite.onclick = function () {
        exitFullScreen();
    }

    function fullScreen(el) {
        var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullScreen,
            wscript;

        if (typeof rfs != "undefined" && rfs) {
            rfs.call(el);
            return;
        }

        if (typeof window.ActiveXObject != "undefined") {
            wscript = new ActiveXObject("WScript.Shell");
            if (wscript) {
                wscript.SendKeys("{F11}");
            }
        }
    }

    function exitFullScreen(el) {
        var el = document,
            cfs = el.cancelFullScreen || el.webkitCancelFullScreen || el.mozCancelFullScreen || el.exitFullScreen,
            wscript;

        if (typeof cfs != "undefined" && cfs) {
            cfs.call(el);
            return;
        }

        if (typeof window.ActiveXObject != "undefined") {
            wscript = new ActiveXObject("WScript.Shell");
            if (wscript != null) {
                wscript.SendKeys("{F11}");
            }
        }
    }
}
