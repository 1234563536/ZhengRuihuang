window.onload = function() {
        if ('addEventListener' in document) {
            document.addEventListener('DOMContentLoaded', function() {
                /!*参数可以是任意的dom元素，如果写document.body，说明会将document.body下面的所的元素都绑定fastclick*!/
                FastClick.attach(document.body);
            }, false);
        }
        html = document.querySelector("html");
        BannerEffect(); //展示下面的轮播图 只不过在轮播图中 我没有开启自动轮播功能
        Initializing(); //进行初始化 初始化自动滚动段落
        Canvas(); //展示两个画布的距离位置
        Air(); //展示空气指数
        Transmit(); //展示转发的信息
        Warning(); //展示右上角的预警信息
        Changecity();
        Deleterecord();
        //通过ajax获取下面16个生活指数
        //Hotcityajax(); //热门城市12个数据
        Share();
        Position();
        Clickcity();
        Currentposition();
    }
    //对最下面的板块设置相应的轮播图样式，只不过这个轮播图取消了自动播放
function BannerEffect() {
    /*1.设置修改轮播图的页面结构
     * a.在开始位置添加原始的最后一张图片
     * b.在结束位置添加原始的第一张图片*/
    /*1.1.获取轮播图结构*/
    var banner = document.querySelector(".jd_banner");
    /*1.2.获取图片容器*/
    var imgBox = banner.querySelector("ul:first-of-type");
    /*1.3.获取原始的第一张图片*/
    var first = imgBox.querySelector("li:first-of-type");
    /*1.4.获取原始的最后一张图片*/
    var last = imgBox.querySelector("li:last-of-type");
    /*1.5.在首尾插入两张图片   cloneNode:复制一个dom元素*/
    imgBox.appendChild(first.cloneNode(true));
    /*insertBefore(需要插入的dom元素，位置)*/
    imgBox.insertBefore(last.cloneNode(true), imgBox.firstChild);

    /*2.设置对应的样式*/
    /*2.1获取所有li元素*/
    var lis = imgBox.querySelectorAll("li");
    /*2.2 获取li元素的数量*/
    var count = lis.length;
    /*2.3.获取banner的宽度*/
    var bannerWidth = banner.offsetWidth;
    /*2.4 设置图片盒子的宽度*/
    imgBox.style.width = count * bannerWidth + "px";
    /*2.5 设置每一个li(图片)元素的宽度*/
    for (var i = 0; i < lis.length; i++) {
        lis[i].style.width = bannerWidth + "px";
    }

    /*定义图片索引:图片已经有一个宽度的默认偏移*/
    var index = 1;

    /*3.设置默认的偏移*/
    imgBox.style.left = -bannerWidth + "px";

    /*4.当屏幕变化的时候，重新计算宽度*/
    window.onresize = function() {
        /*4.1.获取banner的宽度,覆盖全局的宽度值*/
        bannerWidth = banner.offsetWidth;
        /*4.2 设置图片盒子的宽度*/
        imgBox.style.width = count * bannerWidth + "px";
        /*4.3设置每一个li(图片)元素的宽度*/
        for (var i = 0; i < lis.length; i++) {
            lis[i].style.width = bannerWidth + "px";
        }
        /*4.4重新设置定位值*/
        imgBox.style.left = -index * bannerWidth + "px";
    }

    var timerId;
    /*5.实现自动轮播*/
    var startTime = function() {
        timerId = setInterval(function() {
            /*5.1 变换索引*/
            index++;
            /*5.2.添加过渡效果*/
            imgBox.style.transition = "left 0.5s ease-in-out";
            /*5.3 设置偏移*/
            imgBox.style.left = (-index * bannerWidth) + "px";
            /*5.4 判断是否到最后一张，如果是则*/
            setTimeout(function() {
                if (index == count - 1) {
                    console.log(index);
                    index = 1;
                    /*如果一个元素的某个属性之前添加过过渡效果，那么过渡属性会一直存在，如果不想要，则需要清除过渡效果*/
                    /*关闭过渡效果*/
                    imgBox.style.transition = "none";
                    /*偏移到指定的位置*/
                    imgBox.style.left = (-index * bannerWidth) + "px";
                }
            }, 500);
        }, 2000);
    }


    /*6.实现手动轮播*/
    var startX, moveX, distanceX;
    /*为图片添加触摸事件--触摸开始*/
    imgBox.addEventListener("touchstart", function(e) {
        /*清除定时器*/
        // clearInterval(timerId);
        /*获取当前手指的起始位置*/
        startX = e.targetTouches[0].clientX;
    });

    /*为图片添加触摸事件--滑动过程*/
    imgBox.addEventListener("touchmove", function(e) {
        /*记录手指在滑动过程中的位置*/
        moveX = e.targetTouches[0].clientX;
        /*计算坐标的差异*/
        distanceX = moveX - startX;

        /*为了保证效果正常，将之前可能添加的过渡样式清除*/
        imgBox.style.transition = "none";
        /*实现元素的偏移  left参照最原始的坐标
         * 重大细节：本次的滑动操作应该基于之前轮播图已经偏移的距离*/
        imgBox.style.left = (-index * bannerWidth + distanceX) + "px";

    });
    /*添加触摸结束事件*/
    var living_tab = document.querySelector(".living-tab");
    var spans = living_tab.querySelectorAll("span");


    /*touchend:松开手指触发*/
    imgBox.addEventListener("touchend", function(e) {
        /*获取当前滑动的距离，判断距离是否超出指定的范围 100px*/
        if (Math.abs(distanceX) > 100) {
            /*判断滑动的方向*/
            if (distanceX > 0) { //上一张
                index--;
            } else { //下一张
                index++;
            }
            /*翻页*/
            imgBox.style.transition = "left 0.5s ease-in-out";
            imgBox.style.left = -index * bannerWidth + "px";
        } else if (Math.abs(distanceX) > 0) { //得保证用户确实进行过滑动操作
            /*回弹*/
            imgBox.style.transition = "left 0.5s ease-in-out";
            imgBox.style.left = -index * bannerWidth + "px";
        }
        //重新开启定时器
        if (Math.abs(index) % 2 == 1) {
            for (var i = 0; i < spans.length; i++) {
                spans[i].classList.remove("current");
            }
            spans[0].classList.add("current");
        }
        if (Math.abs(index) % 2 == 0) {
            for (var i = 0; i < spans.length; i++) {
                spans[i].classList.remove("current");
            }
            spans[1].classList.add("current");
        }

    });



    /*webkitTransitionEnd:可以监听当前元素的过渡效果执行完毕，当一个元素的过渡效果执行完毕的时候，会触发这个事件*/
    imgBox.addEventListener("webkitTransitionEnd", function() {
        /*如果到了最后一张(count-1)，回到索引1*/
        /*如果到了第一张(0)，回到索引count-2*/
        if (index == count - 1) {
            index = 1;
            /*清除过渡*/
            imgBox.style.transition = "none";
            /*设置偏移*/
            imgBox.style.left = -index * bannerWidth + "px";
        } else if (index == 0) {
            index = count - 2;
            /*清除过渡*/
            imgBox.style.transition = "none";
            /*设置偏移*/
            imgBox.style.left = -index * bannerWidth + "px";
        }
        distanceX = 0;
    });
}
//对两个滚动盒子进行初始化，设置定时器
function Initializing() {
    var p_top = document.getElementById('p_top');
    var p_bottom = document.getElementById('p_bottom');
    time = setTimeout(function() {
        p_top.classList.add("txt_top");
        p_bottom.classList.add("txt_bottom");
        p_top.style.top = "20px";
        p_bottom.style.top = "0px";
    }, 5000)
    clear = setTimeout(function() {
        p_top.style.display = "none";
        p_bottom.style.display = "block";
        p_top.classList.remove("txt_top");
        p_bottom.classList.remove("txt_bottom");

    }, 5800);
    setTimeout(function() {
        p_top.classList.add("txt_bottom");
        p_bottom.classList.add("txt_top");
        p_top.style.top = "0px";
        p_bottom.style.top = "20px";
    }, 10000);
    setTimeout(function() {
        p_top.style.display = "block";
        p_bottom.style.display = "none";
        p_top.classList.remove("txt_bottom");
        p_bottom.classList.remove("txt_top");
    }, 10800);
    setInterval(function() {
        time = setTimeout(function() {
            p_top.classList.add("txt_top");
            p_bottom.classList.add("txt_bottom");
            p_top.style.top = "20px";
            p_bottom.style.top = "0px";
        }, 5000)
        clear = setTimeout(function() {
            p_top.style.display = "none";
            p_bottom.style.display = "block";
            p_top.classList.remove("txt_top");
            p_bottom.classList.remove("txt_bottom");

        }, 5800);
        setTimeout(function() {
            p_top.classList.add("txt_bottom");
            p_bottom.classList.add("txt_top");
            p_top.style.top = "0px";
            p_bottom.style.top = "20px";
        }, 10000);
        setTimeout(function() {
            p_top.style.display = "block";
            p_bottom.style.display = "none";
            p_top.classList.remove("txt_bottom");
            p_bottom.classList.remove("txt_top");
        }, 10800);
    }, 10800);
}
//对画布进行了相关的初始化
function Canvas() {
    var canvas = document.querySelectorAll("canvas");
    for (var i = 0; i < canvas.length; i++) {
        canvas[i].style.left = "-25px";
        canvas[i].style.width = "550px";
        canvas[i].style.marginTop = "-60px";
    }
}
//初始化最左边的一天的相关空气情况 以及空气中各类指数的情况
function Air() {
    var nav = document.querySelector("nav");
    var div_icon = nav.querySelector(".icon");
    var ct_pop_window = document.querySelector(".ct-pop-window");
    var bg_cover = ct_pop_window.querySelector(".bg-cover");
    var ct_air_pop = ct_pop_window.querySelector(".ct-air-pop");
    var ct_main = ct_air_pop.querySelector(".ct-main");
    var icon_close = ct_main.querySelector(".icon-close");
    div_icon.addEventListener("click", function(e) {
        ct_pop_window.style.visibility = "visible";
        bg_cover.style.visibility = "visible";
        ct_air_pop.style.visibility = "visible";
        html.style.overflow = "hidden";
    });
    bg_cover.addEventListener("click", function() {
        bg_cover.style.visibility = "hidden";
        ct_pop_window.style.visibility = "hidden";
        ct_air_pop.style.visibility = "hidden";
        html.style.overflow = "auto";

    });
    icon_close.addEventListener("click", function() {
        bg_cover.style.visibility = "hidden";
        ct_pop_window.style.visibility = "hidden";
        ct_air_pop.style.visibility = "hidden";
        html.style.overflow = "auto";

    });
}
//初始化转载的相关点击事件
function Transmit() {
    var header = document.querySelector("header");
    var right = header.querySelector(".right");
    var img = right.querySelector("img");
    var sec_share = document.querySelector(".sec-share");
    var cover = sec_share.querySelector(".cover");
    var ct_share = sec_share.querySelector(".ct-share");
    var btn_close = ct_share.querySelector(".btn-close");
    img.addEventListener("click", function() {
        sec_share.style.visibility = "visible";
        cover.style.visibility = "visible";
        html.style.overflow = "hidden";
    });
    btn_close.addEventListener("click", function() {
        sec_share.style.visibility = "hidden";
        setTimeout(function() {
            cover.style.visibility = "hidden";
        }, 300)
        html.style.overflow = "auto";
    })
}
//初始最右边的一天的官方警告信息
function Warning() {
    var ls_warning = document.querySelector(".ls-warning");
    var ct_pop_window = document.querySelector(".ct-pop-window");
    var bg_cover = ct_pop_window.querySelector(".bg-cover");
    var ct_window = document.querySelector(".ct-window");
    var btn_close = ct_window.querySelector(".btn-close")
    ls_warning.addEventListener("click", function() {
        ct_pop_window.style.visibility = "visible";
        bg_cover.style.visibility = "visible";
        ct_window.style.opacity = "1";
        html.style.overflow = "hidden";
        ct_window.style.zIndex = "999";
    })
    bg_cover.addEventListener("click", function() {
        bg_cover.style.visibility = "hidden";
        ct_window.style.opacity = "0";
        setTimeout(function() {
            ct_pop_window.style.visibility = "hidden";
        }, 300)

        html.style.overflow = "auto";
        ct_window.style.zIndex = "-999";

    });
    btn_close.addEventListener("click", function() {
        bg_cover.style.visibility = "hidden";
        ct_window.style.opacity = "0";
        setTimeout(function() {
            ct_pop_window.style.visibility = "hidden";
        }, 300)

        html.style.overflow = "auto";
        ct_window.style.zIndex = "-999";

    });
}

function Dayinfo(location) { //获得今天的所有实况天气
    var key = "a17c342b07934800bfdb39a69d35929f";
    $.ajax({
        url: "https://devapi.qweather.com/v7/weather/now", //实时天气
        data: {
            key: key,
            location: location
        },
        success: function(data) {
            console.log(data);
            var release = document.querySelector(".release");
            var hide = release.querySelector(".hide");
            var nav = document.querySelector("nav");
            // var icon = nav.querySelector(".icon");
            // var til = icon.querySelector(".til");
            // var value = icon.querySelector(".value");
            // var ct_air_pop = document.querySelector(".ct-air-pop");
            // var val = ct_air_pop.querySelector(".val");
            // var level = ct_air_pop.querySelector(".level");
            setTimeout(function() {
                hide.style.display = "none";
            }, 5000);
            hide.innerHTML = "中央气象台 " + data.updateTime.substring(11, 16) + "发布";
            var temperature = nav.querySelector(".temperature");
            var weather = nav.querySelector(".weather");
            temperature.innerHTML = data.now.temp;
            if (temperature.innerHTML.length == 2) {
                temperature.style.left = "35%";
            } else if (temperature.innerHTML.length == 1) {
                temperature.style.left = "40%";
            }
            weather.innerHTML = data.now.text; //晴天阴天或者雨天
            var att1 = new RegExp("阴");
            var att2 = new RegExp("晴");
            var att3 = new RegExp("雨");
            var att4 = new RegExp("雪");
            var att5 = new RegExp("霾");
            var att6 = new RegExp("风");
            var att7 = new RegExp("沙");
            var att8 = new RegExp("晴");
            var att9 = new RegExp("云");
            var att = [att1, att2, att3, att4, att5, att6, att7, att8, att9];
            var main = document.querySelector(".main");
            if (main.classList.length == 2) {
                var name = main.classList[1];
                main.classList.remove(name);
            }
            for (var i = 0; i < att.length; i++) {
                if (att[i].test(data.now.text) == true) {
                    if (i == 0) {
                        main.classList.add("C1");
                    } else if (i == 1) {
                        main.classList.add("C2");
                    } else if (i == 2) {
                        main.classList.add("C3");
                    } else if (i == 3) {
                        main.classList.add("C4");
                    } else if (i == 4) {
                        main.classList.add("C5");
                    } else if (i == 5) {
                        main.classList.add("C6");
                    } else if (i == 6) {
                        main.classList.add("C7");
                    } else if (i == 7) {
                        main.classList.add("C2");
                    } else if (i == 8) {
                        main.classList.add("C9");
                    }
                    break;
                }
            }
            if (data.now.text.length == 1) {
                weather.style.left = "46%";
            } else if (data.now.text.length == 2) {
                weather.style.left = "44%";
            } else if (data.now.text.length == 3) {
                weather.style.left = "40%";
            } else if (data.now.text.length == 4) {
                weather.style.left = "38%";
            } else if (data.now.text.length == 5) {
                weather.style.left = "36%";
            }
            var p_top = document.getElementById("p_top");
            var p_bottom = document.getElementById("p_bottom");
            p_top.innerHTML = data.now.windDir + " " + data.now.windScale + "级";
            p_bottom.innerHTML = "湿度 " + data.now.humidity + "%";
            var tip = nav.querySelector(".tip");
            tip.innerHTML = "天太热了，吃个西瓜~";
        },
        dataType: "json", //json xml text
        jsonp: "callback",
        jsonpCallback: "haha"
    });
}
//获得一天24h的实时天气
function Dayhour(location, sunrise, sunset) {
    var key = "a17c342b07934800bfdb39a69d35929f";
    $.ajax({
        url: "https://devapi.qweather.com/v7/weather/24h", //实时天气
        data: {
            key: key,
            location: location
        },
        success: function(data) {
            console.log(data);
            var scroll = document.querySelector(".scroll");
            var txt_time = scroll.querySelectorAll(".txt-time");
            var txt_degree = scroll.querySelectorAll(".txt-degree");
            var iframe2 = scroll.querySelectorAll("iframe");
            var date = [];
            for (var i = 0; i < data.hourly.length; i++) {
                date[i] = parseInt(data.hourly[i].fxTime.substring(11, 16));
            }
            console.log(date);
            var index_set, index_rise;
            console.log(sunset[0], sunrise[0])
            for (var i = 0; i < data.hourly.length; i++) {
                if (sunset[0].substring(0, 2) == date[i]) {
                    index_set = i;
                    console.log(index_set);
                    break;
                }
            }
            for (var i = 0; i < data.hourly.length; i++) {
                if (sunrise[0].substring(0, 2) == date[i]) {
                    index_rise = i;
                    console.log(index_rise);
                    break;
                }
            }
            if (index_set < index_rise) {
                for (var i = 0; i <= index_set; i++) {
                    txt_time[i].innerHTML = data.hourly[i].fxTime.substring(11, 16);
                    txt_degree[i].innerHTML = data.hourly[i].temp + "°";
                }
                txt_time[index_set + 1].innerHTML = sunset[0];
                txt_degree[index_set + 1].innerHTML = "日落";
                for (var i = (index_set + 1); i <= index_rise; i++) {
                    txt_time[i + 1].innerHTML = data.hourly[i].fxTime.substring(11, 16);
                    txt_degree[i + 1].innerHTML = data.hourly[i].temp + "°";
                }
                txt_time[index_rise + 2].innerHTML = sunrise[0];
                txt_degree[index_rise + 2].innerHTML = "日出";
                for (var i = (index_rise + 1); i < data.hourly.length; i++) {
                    txt_time[i + 2].innerHTML = data.hourly[i].fxTime.substring(11, 16);
                    txt_degree[i + 2].innerHTML = data.hourly[i].temp + "°";
                }
                for (var i = 0; i <= index_set; i++) {
                    if (data.hourly[i].text.substring(0, 2) == "小雨") {
                        iframe2[i].src = "weather-background/白天夜晚下雨.svg";
                    } else if (data.hourly[i].text.substring(0, 2) == "中雨") {
                        iframe2[i].src = "weather-background/白天夜晚下大雨.svg";
                    } else if (data.hourly[i].text.substring(0, 2) == "阵雨") {
                        iframe2[i].src = "weather-background/白天夜晚下雨.svg";
                    } else if (data.hourly[i].text.substring(0, 2) == "大雨") {
                        iframe2[i].src = "weather-background/白天夜晚下大大雨.svg";
                    } else if (data.hourly[i].text.substring(0, 3) == "雷阵雨") {
                        iframe2[i].src = "weather-background/白天夜晚雷电雨.svg";
                    } else if (data.hourly[i].text.substring(0, 1) == "晴") {
                        iframe2[i].src = "weather-background/白天晴.svg";
                    } else if (data.hourly[i].text.substring(0, 2) == "多云") {
                        iframe2[i].src = "weather-background/白天多云.svg";
                    } else if (data.hourly[i].text.substring(0, 1) == "阴") {
                        iframe2[i].src = "weather-background/白天夜晚阴天.svg";
                    }
                }
                iframe2[index_set + 1].src = "weather-background/set.svg";
                for (var i = index_set + 1; i <= index_rise; i++) {
                    if (data.hourly[i].text.substring(0, 2) == "小雨") {
                        iframe2[i + 1].src = "weather-background/白天夜晚下雨.svg";
                    } else if (data.hourly[i].text.substring(0, 2) == "中雨") {
                        iframe2[i + 1].src = "weather-background/白天夜晚下大雨.svg";
                    } else if (data.hourly[i].text.substring(0, 2) == "阵雨") {
                        iframe2[i + 1].src = "weather-background/白天夜晚下雨.svg";
                    } else if (data.hourly[i].text.substring(0, 2) == "大雨") {
                        iframe2[i + 1].src = "weather-background/白天夜晚下大大雨.svg";
                    } else if (data.hourly[i].text.substring(0, 3) == "雷阵雨") {
                        iframe2[i + 1].src = "weather-background/白天夜晚雷电雨.svg";
                    } else if (data.hourly[i].text.substring(0, 1) == "晴") {
                        iframe2[i + 1].src = "weather-background/白天晴.svg";
                    } else if (data.hourly[i].text.substring(0, 2) == "多云") {
                        iframe2[i + 1].src = "weather-background/白天多云.svg";
                    } else if (data.hourly[i].text.substring(0, 1) == "阴") {
                        iframe2[i + 1].src = "weather-background/白天夜晚阴天.svg";
                    }
                }
                iframe2[index_rise + 2].src = "weather-background/rise.svg";
                for (var i = index_rise + 1; i < data.hourly.length; i++) {
                    if (data.hourly[i].text.substring(0, 2) == "小雨") {
                        iframe2[i + 2].src = "weather-background/白天夜晚下雨.svg";
                    } else if (data.hourly[i].text.substring(0, 2) == "中雨") {
                        iframe2[i + 2].src = "weather-background/白天夜晚下大雨.svg";
                    } else if (data.hourly[i].text.substring(0, 2) == "阵雨") {
                        iframe2[i + 2].src = "weather-background/白天夜晚下雨.svg";
                    } else if (data.hourly[i].text.substring(0, 2) == "大雨") {
                        iframe2[i + 2].src = "weather-background/白天夜晚下大大雨.svg";
                    } else if (data.hourly[i].text.substring(0, 3) == "雷阵雨") {
                        iframe2[i + 2].src = "weather-background/白天夜晚雷电雨.svg";
                    } else if (data.hourly[i].text.substring(0, 1) == "晴") {
                        iframe2[i + 2].src = "weather-background/白天晴.svg";
                    } else if (data.hourly[i].text.substring(0, 2) == "多云") {
                        iframe2[i + 2].src = "weather-background/白天多云.svg";
                    } else if (data.hourly[i].text.substring(0, 1) == "阴") {
                        iframe2[i + 2].src = "weather-background/白天夜晚阴天.svg";
                    }
                }
            } else {
                for (var i = 0; i <= index_rise; i++) {
                    txt_time[i].innerHTML = data.hourly[i].fxTime.substring(11, 16);
                    txt_degree[i].innerHTML = data.hourly[i].temp + "°";
                }
                txt_time[index_rise + 1].innerHTML = sunrise[0];
                txt_degree[index_rise + 1].innerHTML = "日出";
                for (var i = (index_rise + 1); i <= index_set; i++) {
                    txt_time[i + 1].innerHTML = data.hourly[i].fxTime.substring(11, 16);
                    txt_degree[i + 1].innerHTML = data.hourly[i].temp + "°";
                }
                txt_time[index_set + 2].innerHTML = sunset[0];
                txt_degree[index_set + 2].innerHTML = "日落";
                for (var i = (index_set + 1); i < data.hourly.length; i++) {
                    txt_time[i + 2].innerHTML = data.hourly[i].fxTime.substring(11, 16);
                    txt_degree[i + 2].innerHTML = data.hourly[i].temp + "°";
                }
                for (var i = 0; i <= index_rise; i++) {
                    if (data.hourly[i].text.substring(0, 2) == "小雨") {
                        iframe2[i].src = "weather-background/白天夜晚下雨.svg";
                    } else if (data.hourly[i].text.substring(0, 2) == "中雨") {
                        iframe2[i].src = "weather-background/白天夜晚下大雨.svg";
                    } else if (data.hourly[i].text.substring(0, 2) == "阵雨") {
                        iframe2[i].src = "weather-background/白天夜晚下雨.svg";
                    } else if (data.hourly[i].text.substring(0, 2) == "大雨") {
                        iframe2[i].src = "weather-background/白天夜晚下大大雨.svg";
                    } else if (data.hourly[i].text.substring(0, 3) == "雷阵雨") {
                        iframe2[i].src = "weather-background/白天夜晚雷电雨.svg";
                    } else if (data.hourly[i].text.substring(0, 1) == "晴") {
                        iframe2[i].src = "weather-background/白天晴.svg";
                    } else if (data.hourly[i].text.substring(0, 2) == "多云") {
                        iframe2[i].src = "weather-background/白天多云.svg";
                    } else if (data.hourly[i].text.substring(0, 1) == "阴") {
                        iframe2[i].src = "weather-background/白天夜晚阴天.svg";
                    }
                }
                iframe2[index_rise + 1].src = "weather-background/rise.svg";
                for (var i = index_rise + 1; i <= index_set; i++) {
                    if (data.hourly[i].text.substring(0, 2) == "小雨") {
                        iframe2[i + 1].src = "weather-background/白天夜晚下雨.svg";
                    } else if (data.hourly[i].text.substring(0, 2) == "中雨") {
                        iframe2[i + 1].src = "weather-background/白天夜晚下大雨.svg";
                    } else if (data.hourly[i].text.substring(0, 2) == "阵雨") {
                        iframe2[i + 1].src = "weather-background/白天夜晚下雨.svg";
                    } else if (data.hourly[i].text.substring(0, 2) == "大雨") {
                        iframe2[i + 1].src = "weather-background/白天夜晚下大大雨.svg";
                    } else if (data.hourly[i].text.substring(0, 3) == "雷阵雨") {
                        iframe2[i + 1].src = "weather-background/白天夜晚雷电雨.svg";
                    } else if (data.hourly[i].text.substring(0, 1) == "晴") {
                        iframe2[i + 1].src = "weather-background/白天晴.svg";
                    } else if (data.hourly[i].text.substring(0, 2) == "多云") {
                        iframe2[i + 1].src = "weather-background/白天多云.svg";
                    } else if (data.hourly[i].text.substring(0, 1) == "阴") {
                        iframe2[i + 1].src = "weather-background/白天夜晚阴天.svg";
                    }
                }
                iframe2[index_set + 2].src = "weather-background/set.svg";
                for (var i = index_set + 1; i < data.hourly.length; i++) {
                    if (data.hourly[i].text.substring(0, 2) == "小雨") {
                        iframe2[i + 2].src = "weather-background/白天夜晚下雨.svg";
                    } else if (data.hourly[i].text.substring(0, 2) == "中雨") {
                        iframe2[i + 2].src = "weather-background/白天夜晚下大雨.svg";
                    } else if (data.hourly[i].text.substring(0, 2) == "阵雨") {
                        iframe2[i + 2].src = "weather-background/白天夜晚下雨.svg";
                    } else if (data.hourly[i].text.substring(0, 2) == "大雨") {
                        iframe2[i + 2].src = "weather-background/白天夜晚下大大雨.svg";
                    } else if (data.hourly[i].text.substring(0, 3) == "雷阵雨") {
                        iframe2[i + 2].src = "weather-background/白天夜晚雷电雨.svg";
                    } else if (data.hourly[i].text.substring(0, 1) == "晴") {
                        iframe2[i + 2].src = "weather-background/白天晴.svg";
                    } else if (data.hourly[i].text.substring(0, 2) == "多云") {
                        iframe2[i + 2].src = "weather-background/白天多云.svg";
                    } else if (data.hourly[i].text.substring(0, 1) == "阴") {
                        iframe2[i + 2].src = "weather-background/白天夜晚阴天.svg";
                    }
                }
            }
        },
        dataType: "json", //json xml text
        jsonp: "callback",
        jsonpCallback: "haha"
    });
}
//获得未来一周的天气情况
function Futureinfo(location) { //获得未来七天的最低最高气温以及天气情况
    var key = "a17c342b07934800bfdb39a69d35929f";
    $.ajax({
        url: "https://devapi.qweather.com/v7/weather/7d", //实时天气
        data: {
            key: key,
            location: location
        },
        success: function(newdata) {
            console.log(newdata);
            var item_right = document.querySelector(".item_right");
            var temperatures2 = item_right.querySelector(".temperatures");
            var weather2 = item_right.querySelector(".weather");
            var iframe2 = item_right.querySelector("iframe");
            temperatures2.innerHTML = newdata.daily[1].tempMax + "/" + newdata.daily[1].tempMin + "°"; //明天的天气温度和情况
            if (newdata.daily[1].textDay == newdata.daily[1].textNight) {
                weather2.innerHTML = newdata.daily[1].textDay;
            } else {
                weather2.innerHTML = newdata.daily[1].textDay + "转" + newdata.daily[1].textNight;
            }
            if (weather2.innerHTML.substring(0, 2) == "小雨") {
                iframe2.src = "weather-background/白天夜晚下雨.svg";
            } else if (weather2.innerHTML.substring(0, 2) == "中雨") {
                iframe2.src = "weather-background/白天夜晚下大雨.svg";
            } else if (weather2.innerHTML.substring(0, 2) == "阵雨") {
                iframe2.src = "weather-background/白天夜晚下雨.svg";
            } else if (weather2.innerHTML.substring(0, 2) == "大雨") {
                iframe2.src = "weather-background/白天夜晚下大大雨.svg";
            } else if (weather2.innerHTML.substring(0, 3) == "雷阵雨") {
                iframe2.src = "weather-background/白天夜晚雷电雨.svg";
            } else if (weather2.innerHTML.substring(0, 1) == "晴") {
                iframe2.src = "weather-background/白天晴.svg";
            } else if (weather2.innerHTML.substring(0, 2) == "多云") {
                iframe2.src = "weather-background/白天多云.svg";
            } else if (weather2.innerHTML.substring(0, 1) == "阴") {
                iframe2.src = "weather-background/白天夜晚阴天.svg";
            }
            var item_left = document.querySelector(".item_left");
            var temperatures1 = item_left.querySelector(".temperatures");
            var weather1 = item_left.querySelector(".weather");
            var iframe = item_left.querySelector("iframe");
            temperatures1.innerHTML = newdata.daily[0].tempMax + "/" + newdata.daily[0].tempMin + "°"; //明天的天气温度和情况
            if (newdata.daily[0].textDay == newdata.daily[0].textNight) {
                weather1.innerHTML = newdata.daily[0].textDay;
            } else {
                weather1.innerHTML = newdata.daily[0].textDay + "转" + newdata.daily[0].textNight;
            }
            if (weather1.innerHTML.substring(0, 2) == "小雨") {
                iframe.src = "weather-background/白天夜晚下雨.svg";
            } else if (weather1.innerHTML.substring(0, 2) == "中雨") {
                iframe.src = "weather-background/白天夜晚下大雨.svg";
            } else if (weather1.innerHTML.substring(0, 2) == "阵雨") {
                iframe.src = "weather-background/白天夜晚下雨.svg";
            } else if (weather1.innerHTML.substring(0, 2) == "大雨") {
                iframe.src = "weather-background/白天夜晚下大大雨.svg";
            } else if (weather1.innerHTML.substring(0, 3) == "雷阵雨") {
                iframe.src = "weather-background/白天夜晚雷电雨.svg";
            } else if (weather1.innerHTML.substring(0, 1) == "晴") {
                iframe.src = "weather-background/白天晴.svg";
            } else if (weather1.innerHTML.substring(0, 2) == "多云") {
                iframe.src = "weather-background/白天多云.svg";
            } else if (weather1.innerHTML.substring(0, 1) == "阴") {
                iframe.src = "weather-background/白天夜晚阴天.svg";
            } else if (weather1.innerHTML.substring(0, 1) == "雷") {
                iframe.src = "weather-background/白天夜晚雷电.svg";
            }
            var week_scroll = document.querySelector(".week_scroll");
            var week_ul = week_scroll.querySelector("ul");
            var dates = week_ul.querySelectorAll(".date");
            var day_p = week_ul.querySelectorAll(".day_p");
            var winds = week_ul.querySelectorAll(".wind");
            var day_wea = week_ul.querySelectorAll(".day_wea");
            var night_wea = week_ul.querySelectorAll(".night_wea");
            var iframes = week_ul.querySelectorAll("iframe");
            console.log(iframes.length);
            var arr_tem1 = [];
            var arr_tem2 = [];
            for (var i = 0; i < 7; i++) {
                dates[i + 1].innerHTML = newdata.daily[i].fxDate[5] + newdata.daily[i].fxDate[6] + "/" + newdata.daily[i].fxDate[8] + newdata.daily[i].fxDate[9];
                day_wea[i + 1].innerHTML = newdata.daily[i].textDay;
                day_wea[i + 1].style.color = "#434343";
                night_wea[i + 1].innerHTML = newdata.daily[i].textNight;
                night_wea[i + 1].style.color = "#434343";
                arr_tem1[i + 1] = parseInt(newdata.daily[i].tempMax);
                arr_tem2[i + 1] = parseInt(newdata.daily[i].tempMin);
            }
            for (var i = 2; i < 16; i = i + 2) {
                if (day_wea[i / 2].innerHTML.substring(0, 2) == "小雨") {
                    iframes[i].src = "weather-background/白天夜晚下雨.svg";
                } else if (day_wea[i / 2].innerHTML.substring(0, 2) == "中雨") {
                    iframes[i].src = "weather-background/白天夜晚下大雨.svg";
                } else if (day_wea[i / 2].innerHTML.substring(0, 2) == "阵雨") {
                    iframes[i].src = "weather-background/白天夜晚下雨.svg";
                } else if (day_wea[i / 2].innerHTML.substring(0, 2) == "大雨") {
                    iframes[i].src = "weather-background/白天夜晚下大大雨.svg";
                } else if (day_wea[i / 2].innerHTML.substring(0, 3) == "雷阵雨") {
                    iframes[i].src = "weather-background/白天夜晚雷电雨.svg";
                } else if (day_wea[i / 2].innerHTML.substring(0, 1) == "晴") {
                    iframes[i].src = "weather-background/白天晴.svg";
                } else if (day_wea[i / 2].innerHTML.substring(0, 2) == "多云") {
                    iframes[i].src = "weather-background/白天多云.svg";
                } else if (day_wea[i / 2].innerHTML.substring(0, 1) == "阴") {
                    iframes[i].src = "weather-background/白天夜晚阴天.svg";
                } else if (day_wea[i / 2].innerHTML.substring(0, 1) == "雷") {
                    iframes[i].src = "weather-background/白天夜晚雷电.svg";
                }
            }
            for (var i = 3; i < 16; i = i + 2) {
                if (night_wea[(i - 1) / 2].innerHTML.substring(0, 2) == "小雨") {
                    iframes[i].src = "weather-background/白天夜晚下雨.svg";
                } else if (night_wea[(i - 1) / 2].innerHTML.substring(0, 2) == "中雨") {
                    iframes[i].src = "weather-background/白天夜晚下大雨.svg";
                } else if (night_wea[(i - 1) / 2].innerHTML.substring(0, 2) == "阵雨") {
                    iframes[i].src = "weather-background/白天夜晚下雨.svg";
                } else if (night_wea[(i - 1) / 2].innerHTML.substring(0, 2) == "大雨") {
                    iframes[i].src = "weather-background/白天夜晚下大大雨.svg";
                } else if (night_wea[(i - 1) / 2].innerHTML.substring(0, 3) == "雷阵雨") {
                    iframes[i].src = "weather-background/白天夜晚雷电雨.svg";
                } else if (night_wea[(i - 1) / 2].innerHTML.substring(0, 1) == "晴") {
                    iframes[i].src = "weather-background/夜晚晴.svg";
                } else if (night_wea[(i - 1) / 2].innerHTML.substring(0, 2) == "多云") {
                    iframes[i].src = "weather-background/晚上多云.svg";
                } else if (night_wea[(i - 1) / 2].innerHTML.substring(0, 1) == "阴") {
                    iframes[i].src = "weather-background/白天夜晚阴天.svg";
                } else if (night_wea[(i - 1) / 2].innerHTML.substring(0, 1) == "雷") {
                    iframes[i].src = "weather-background/白天夜晚雷电.svg";
                }
            }
            if (new Date(newdata.daily[3].fxDate).getDay() == 0) {
                day_p[4].innerHTML = "周日";
                day_p[5].innerHTML = "周一";
                day_p[6].innerHTML = "周二";
                day_p[7].innerHTML = "周三";
            } else if (new Date(newdata.daily[3].fxDate).getDay() == 1) {
                day_p[4].innerHTML = "周一";
                day_p[5].innerHTML = "周二";
                day_p[6].innerHTML = "周三";
                day_p[7].innerHTML = "周四";
            } else if (new Date(newdata.daily[3].fxDate).getDay() == 2) {
                day_p[4].innerHTML = "周二";
                day_p[5].innerHTML = "周三";
                day_p[6].innerHTML = "周四";
                day_p[7].innerHTML = "周五";
            } else if (new Date(newdata.daily[3].fxDate).getDay() == 3) {
                day_p[4].innerHTML = "周三";
                day_p[5].innerHTML = "周四";
                day_p[6].innerHTML = "周五";
                day_p[7].innerHTML = "周六";
            } else if (new Date(newdata.daily[3].fxDate).getDay() == 4) {
                day_p[4].innerHTML = "周四";
                day_p[5].innerHTML = "周五";
                day_p[6].innerHTML = "周六";
                day_p[7].innerHTML = "周日";
            } else if (new Date(newdata.daily[3].fxDate).getDay() == 5) {
                day_p[4].innerHTML = "周五";
                day_p[5].innerHTML = "周六";
                day_p[6].innerHTML = "周日";
                day_p[7].innerHTML = "周一";
            } else if (new Date(newdata.daily[3].fxDate).getDay() == 6) {
                day_p[4].innerHTML = "周六";
                day_p[5].innerHTML = "周日";
                day_p[6].innerHTML = "周一";
                day_p[7].innerHTML = "周二";
            }
            for (var j = 2; j <= 14; j = j + 2) {
                winds[j].innerHTML = newdata.daily[j / 2 - 1].windDirNight;
                winds[j + 1].innerHTML = newdata.daily[j / 2 - 1].windScaleNight + "级";
            }
            date = newdata.daily[0].fxDate.substring(0, 4) + newdata.daily[0].fxDate.substring(5, 7);
            var sunrise = [];
            var sunset = [];
            for (var i = 0; i < newdata.daily.length; i++) {
                sunrise[i] = newdata.daily[i].sunrise;
                sunset[i] = newdata.daily[i].sunset;
            }
            Dayhour(location, sunrise, sunset);
            Historydata(location, arr_tem1, arr_tem2, date); //把两个数坐标位置传过去
        },
        dataType: "json", //json xml text
        jsonp: "callback",
        jsonpCallback: "haha"
    });
}
//获得历史天气
function Historydata(location, arr_tem1, arr_tem2, date) {
    var showapi_appid = "639905";
    var showapi_sign = "2ecf97189b86471397e604405e5b3650";
    $.ajax({
        url: "https://route.showapi.com/9-7", //实时天气接口有效期只有1000次 慎用
        data: {
            areaid: location,
            showapi_appid: showapi_appid,
            showapi_sign: showapi_sign,
            month: date,
        },
        success: function(data) {
            console.log(data);
            arr_tem2[0] = data.showapi_res_body.list[data.showapi_res_body.list.length - 1].min_temperature;
            arr_tem1[0] = data.showapi_res_body.list[data.showapi_res_body.list.length - 1].max_temperature;

            var week_scroll = document.querySelector(".week_scroll");
            var week_ul = week_scroll.querySelector("ul");
            var iframes = week_ul.querySelectorAll("iframe");
            var dates = week_ul.querySelectorAll(".date");
            var winds = week_ul.querySelectorAll(".wind");
            var day_wea = week_ul.querySelectorAll(".day_wea");
            var night_wea = week_ul.querySelectorAll(".night_wea");
            dates[0].innerHTML = data.showapi_res_body.list[data.showapi_res_body.list.length - 1].time.substring(4, 6) + "/" + data.showapi_res_body.list[data.showapi_res_body.list.length - 1].time.substring(6, 8);
            night_wea[0].innerHTML = data.showapi_res_body.list[data.showapi_res_body.list.length - 1].weather.replace("-", "转");
            day_wea[0].innerHTML = data.showapi_res_body.list[data.showapi_res_body.list.length - 1].weather.replace("-", "转");
            var index_night;
            var index_day;
            for (var i = 0; i < night_wea[0].innerHTML.length; i++) {
                if (night_wea[0].innerHTML[i] == "转") {
                    index_night = i;
                    break;
                }
            }
            for (var i = 0; i < day_wea[0].innerHTML.length; i++) {
                if (day_wea[0].innerHTML[i] == "转") {
                    index_day = i;
                    break;
                }
            }
            night_wea[0].innerHTML = data.showapi_res_body.list[data.showapi_res_body.list.length - 1].weather.substring(0, index_night);
            day_wea[0].innerHTML = data.showapi_res_body.list[data.showapi_res_body.list.length - 1].weather.substring(0, index_day);
            winds[0].innerHTML = data.showapi_res_body.list[data.showapi_res_body.list.length - 1].wind_direction;
            winds[1].innerHTML = data.showapi_res_body.list[data.showapi_res_body.list.length - 1].wind_power;
            if (day_wea[0].innerHTML.substring(0, 2) == "小雨") {
                iframes[0].src = "weather-background/白天夜晚下雨.svg";
            } else if (day_wea[0].innerHTML.substring(0, 2) == "中雨") {
                iframes[0].src = "weather-background/白天夜晚下大雨.svg";
            } else if (day_wea[0].innerHTML.substring(0, 2) == "阵雨") {
                iframes[0].src = "weather-background/白天夜晚下雨.svg";
            } else if (day_wea[0].innerHTML.substring(0, 2) == "大雨") {
                iframes[0].src = "weather-background/白天夜晚下大大雨.svg";
            } else if (day_wea[0].innerHTML.substring(0, 3) == "雷阵雨") {
                iframes[0].src = "weather-background/白天夜晚雷电雨.svg";
            } else if (day_wea[0].innerHTML.substring(0, 1) == "晴") {
                iframes[0].src = "weather-background/白天晴.svg";
            } else if (day_wea[0].innerHTML.substring(0, 2) == "多云") {
                iframes[0].src = "weather-background/白天多云.svg";
            } else if (day_wea[0].innerHTML.substring(0, 1) == "阴") {
                iframes[0].src = "weather-background/白天夜晚阴天.svg";
            } else if (day_wea[0].innerHTML.substring(0, 1) == "雷") {
                iframes[0].src = "weather-background/白天夜晚雷电.svg";
            }
            if (night_wea[0].innerHTML.substring(0, 2) == "小雨") {
                iframes[1].src = "weather-background/白天夜晚下雨.svg";
            } else if (night_wea[0].innerHTML.substring(0, 2) == "中雨") {
                iframes[1].src = "weather-background/白天夜晚下大雨.svg";
            } else if (night_wea[0].innerHTML.substring(0, 2) == "阵雨") {
                iframes[1].src = "weather-background/白天夜晚下雨.svg";
            } else if (night_wea[0].innerHTML.substring(0, 2) == "大雨") {
                iframes[1].src = "weather-background/白天夜晚下大大雨.svg";
            } else if (night_wea[0].innerHTML.substring(0, 3) == "雷阵雨") {
                iframes[1].src = "weather-background/白天夜晚雷电雨.svg";
            } else if (night_wea[0].innerHTML.substring(0, 1) == "晴") {
                iframes[1].src = "weather-background/白天晴.svg";
            } else if (night_wea[0].innerHTML.substring(0, 2) == "多云") {
                iframes[1].src = "weather-background/白天多云.svg";
            } else if (night_wea[0].innerHTML.substring(0, 1) == "阴") {
                iframes[1].src = "weather-background/白天夜晚阴天.svg";
            } else if (night_wea[0].innerHTML.substring(0, 1) == "雷") {
                iframes[1].src = "weather-background/白天夜晚雷电.svg";
            }
            iframes[0].style.opacity = "0.5";
            iframes[1].style.opacity = "0.5";
            Orangechart(arr_tem1);
            Bluechart(arr_tem2);
        },
        dataType: "json", //json xml text
        jsonp: "callback",
        jsonpCallback: "haha"
    });
}
//得到一天的16个相关的生活指数的情况
function Livingajax(location) {
    var key = "a17c342b07934800bfdb39a69d35929f";
    var type = "0";
    $.ajax({
        url: "https://devapi.qweather.com/v7/indices/1d",
        data: {
            key: key,
            type: type,
            location: location,
        },
        success: function(data) {
            console.log(data);
            var banner = document.querySelector(".jd_bannerImg");
            var middles = banner.querySelectorAll(".middle")
            var bottoms = banner.querySelectorAll(".bottom");
            console.log(bottoms[0].innerHTML.length);
            for (var i = 0; i < bottoms.length; i++) {
                if (bottoms[i].innerHTML.length == 1) {
                    bottoms[i].style.left = "40%";
                } else if (bottoms[i].innerHTML.length == 2) {
                    bottoms[i].style.left = "35%";
                } else if (bottoms[i].innerHTML.length == 3) {
                    bottoms[i].style.left = "30%";
                } else if (bottoms[i].innerHTML.length == 4) {
                    bottoms[i].style.left = "25%";
                } else {
                    bottoms[i].style.left = "25%";
                }
            }
            for (var j = 0; j < data.daily.length; j++) {
                if (data.daily[j].type == 15) {
                    middles[0].innerHTML = data.daily[j].category;
                }
                if (data.daily[j].type == 10) {
                    middles[1].innerHTML = data.daily[j].category;
                }
                if (data.daily[j].type == 8) {
                    middles[2].innerHTML = data.daily[j].category;
                }
                if (data.daily[j].type == 14) {
                    middles[3].innerHTML = data.daily[j].category;
                }
                if (data.daily[j].type == 13) {
                    middles[4].innerHTML = data.daily[j].category;
                }
                if (data.daily[j].type == 11) {
                    middles[5].innerHTML = data.daily[j].category;
                }
                if (data.daily[j].type == 7) {
                    middles[6].innerHTML = data.daily[j].category;
                }
                if (data.daily[j].type == 12) {
                    middles[7].innerHTML = data.daily[j].category;
                }
            }
            for (var j = 0; j < data.daily.length; j++) {
                if (data.daily[j].type == 3) {
                    middles[8].innerHTML = data.daily[j].category;
                }
                if (data.daily[j].type == 5) {
                    middles[9].innerHTML = data.daily[j].category;
                }
                if (data.daily[j].type == 9) {
                    middles[10].innerHTML = data.daily[j].category;
                }
                if (data.daily[j].type == 2) {
                    middles[11].innerHTML = data.daily[j].category;
                }
                if (data.daily[j].type == 1) {
                    middles[12].innerHTML = data.daily[j].category;
                }
                if (data.daily[j].type == 16) {
                    middles[13].innerHTML = data.daily[j].category;
                }
                if (data.daily[j].type == 4) {
                    middles[14].innerHTML = data.daily[j].category;
                }
                if (data.daily[j].type == 6) {
                    middles[15].innerHTML = data.daily[j].category;
                }
            }
            for (var j = 0; j < data.daily.length; j++) {
                if (data.daily[j].type == 15) {
                    middles[16].innerHTML = data.daily[j].category;
                }
                if (data.daily[j].type == 10) {
                    middles[17].innerHTML = data.daily[j].category;
                }
                if (data.daily[j].type == 8) {
                    middles[18].innerHTML = data.daily[j].category;
                }
                if (data.daily[j].type == 14) {
                    middles[19].innerHTML = data.daily[j].category;
                }
                if (data.daily[j].type == 13) {
                    middles[20].innerHTML = data.daily[j].category;
                }
                if (data.daily[j].type == 11) {
                    middles[21].innerHTML = data.daily[j].category;
                }
                if (data.daily[j].type == 7) {
                    middles[22].innerHTML = data.daily[j].category;
                }
                if (data.daily[j].type == 12) {
                    middles[23].innerHTML = data.daily[j].category;
                }
            }
            for (var j = 0; j < data.daily.length; j++) {
                if (data.daily[j].type == 3) {
                    middles[8 + 16].innerHTML = data.daily[j].category;
                }
                if (data.daily[j].type == 5) {
                    middles[9 + 16].innerHTML = data.daily[j].category;
                }
                if (data.daily[j].type == 9) {
                    middles[10 + 16].innerHTML = data.daily[j].category;
                }
                if (data.daily[j].type == 2) {
                    middles[11 + 16].innerHTML = data.daily[j].category;
                }
                if (data.daily[j].type == 1) {
                    middles[12 + 16].innerHTML = data.daily[j].category;
                }
                if (data.daily[j].type == 16) {
                    middles[13 + 16].innerHTML = data.daily[j].category;
                }
                if (data.daily[j].type == 4) {
                    middles[14 + 16].innerHTML = data.daily[j].category;
                }
                if (data.daily[j].type == 6) {
                    middles[15 + 16].innerHTML = data.daily[j].category;
                }
            }
            for (var i = 0; i < bottoms.length; i++) {
                if (middles[i].innerHTML.length == 1) {
                    middles[i].style.left = "40%";
                } else if (middles[i].innerHTML.length == 2) {
                    middles[i].style.left = "35%";
                } else if (middles[i].innerHTML.length == 3) {
                    middles[i].style.left = "30%";
                } else if (middles[i].innerHTML.length == 4) {
                    middles[i].style.left = "25%";
                } else {
                    middles[i].style.left = "25%";
                }
            }
            var living_window = document.querySelector(".living-window");
            var bg_cover = living_window.querySelector(".bg-cover");
            var ct_window = living_window.querySelector(".ct-window");
            var title = living_window.querySelector(".title");
            var txt_info = living_window.querySelector(".txt-info");
            var btn_close = ct_window.querySelector(".btn-close");
            var jd_banner = document.querySelector(".jd_banner");
            var divs = jd_banner.querySelectorAll("div");
            var btn_close = ct_window.querySelector(".btn-close");
            console.log(divs);

            for (let i = 10; i < 18; i++) {
                divs[i].onclick = function() {
                    living_window.style.visibility = "visible";
                    bg_cover.style.visibility = "visible";
                    ct_window.style.opacity = "1";
                    html.style.overflow = "hidden";
                    ct_window.style.zIndex = "999";
                    if (i == 10) {
                        title.style.backgroundColor = "rgb(225,164,196)";
                        btn_close.style.backgroundColor = "rgb(225,164,196)";
                        title.innerHTML = data.daily[10].name;
                        txt_info.innerHTML = data.daily[10].text;
                    } else if (i == 11) {
                        title.style.backgroundColor = "rgb(219,173,160)";
                        btn_close.style.backgroundColor = "rgb(219,173,160)";
                        title.innerHTML = data.daily[1].name;
                        txt_info.innerHTML = data.daily[1].text;
                    } else if (i == 12) {
                        title.style.backgroundColor = "rgb(223,199,156)";
                        btn_close.style.backgroundColor = "rgb(223,199,156)";
                        title.innerHTML = data.daily[12].name;
                        txt_info.innerHTML = data.daily[12].text;
                    } else if (i == 13) {
                        title.style.backgroundColor = "rgb(181,230,168)";
                        btn_close.style.backgroundColor = "rgb(181,230,168)";
                        title.innerHTML = data.daily[13].name;
                        txt_info.innerHTML = data.daily[13].text;
                    } else if (i == 14) {
                        title.style.backgroundColor = "rgb(230,217,157)";
                        btn_close.style.backgroundColor = "rgb(230,217,157)";
                        title.innerHTML = data.daily[15].name;
                        txt_info.innerHTML = data.daily[15].text;
                    } else if (i == 15) {
                        title.style.backgroundColor = "rgb(193,164,224)";
                        btn_close.style.backgroundColor = "rgb(193,164,224)";
                        title.innerHTML = data.daily[11].name;
                        txt_info.innerHTML = data.daily[11].text;
                    } else if (i == 16) {
                        title.style.backgroundColor = "rgb(163,223,212)";
                        btn_close.style.backgroundColor = "rgb(163,223,212)";
                        title.innerHTML = data.daily[14].name;
                        txt_info.innerHTML = data.daily[14].text;
                    } else if (i == 17) {
                        title.style.backgroundColor = "rgb(237,172,150)";
                        btn_close.style.backgroundColor = "rgb(237,172,150)";
                        title.innerHTML = data.daily[3].name;
                        txt_info.innerHTML = data.daily[3].text;
                    }
                }
            }
            for (let i = 19; i < 27; i++) {
                divs[i].onclick = function() {
                    living_window.style.visibility = "visible";
                    bg_cover.style.visibility = "visible";
                    ct_window.style.opacity = "1";
                    html.style.overflow = "hidden";
                    ct_window.style.zIndex = "999";
                    if (i == 19) {
                        title.style.backgroundColor = "rgb(139,165,175)";
                        btn_close.style.backgroundColor = "rgb(139,165,175)";
                        title.innerHTML = data.daily[7].name;
                        txt_info.innerHTML = data.daily[7].text;
                    } else if (i == 20) {
                        title.style.backgroundColor = "rgb(178,138,144)";
                        btn_close.style.backgroundColor = "rgb(178,138,144)";
                        title.innerHTML = data.daily[9].name;
                        txt_info.innerHTML = data.daily[9].text;
                    } else if (i == 21) {
                        title.style.backgroundColor = "rgb(158,196,140)";
                        btn_close.style.backgroundColor = "rgb(158,196,140)";
                        title.innerHTML = data.daily[8].name;
                        txt_info.innerHTML = data.daily[8].text;
                    } else if (i == 22) {
                        title.style.backgroundColor = "rgb(166,186,204)";
                        btn_close.style.backgroundColor = "rgb(166,186,204)";
                        title.innerHTML = data.daily[6].name;
                        txt_info.innerHTML = data.daily[6].text;
                    } else if (i == 23) {
                        title.style.backgroundColor = "rgb(224,144,144)";
                        btn_close.style.backgroundColor = "rgb(224,144,144)";
                        title.innerHTML = data.daily[0].name;
                        txt_info.innerHTML = data.daily[0].text;
                    } else if (i == 24) {
                        title.style.backgroundColor = "rgb(135,197,221)";
                        btn_close.style.backgroundColor = "rgb(135,197,221)";
                        title.innerHTML = data.daily[2].name;
                        txt_info.innerHTML = data.daily[2].text;
                    } else if (i == 25) {
                        title.style.backgroundColor = "rgb(149,163,219)";
                        btn_close.style.backgroundColor = "rgb(149,163,219)";
                        title.innerHTML = data.daily[5].name;
                        txt_info.innerHTML = data.daily[5].text;
                    } else if (i == 26) {
                        title.style.backgroundColor = "rgb(164,173,224)";
                        btn_close.style.backgroundColor = "rgb(164,173,224)";
                        title.innerHTML = data.daily[4].name;
                        txt_info.innerHTML = data.daily[4].text;
                    }
                }
            }
            bg_cover.addEventListener("click", function() {
                bg_cover.style.visibility = "hidden";
                ct_window.style.opacity = "0";
                setTimeout(function() {
                    living_window.style.visibility = "hidden";
                }, 300)

                html.style.overflow = "auto";
                ct_window.style.zIndex = "-999";
                title.innerHTML = "";
                txt_info.innerHTML = "";

            });
            btn_close.addEventListener("click", function() {
                bg_cover.style.visibility = "hidden";
                ct_window.style.opacity = "0";
                setTimeout(function() {
                    living_window.style.visibility = "hidden";
                }, 300)

                html.style.overflow = "auto";
                ct_window.style.zIndex = "-999";
                title.innerHTML = "";
                txt_info.innerHTML = "";

            });

        },
        dataType: "json", //json xml text
        jsonp: "callback",
        jsonpCallback: "haha"
    });
}
//获取一天的灾害预警信息，上面的是对灾害预警信息相关的点击事件做了处理，这个函数主要目的是得到数据
function Earlywarning(location) { //灾害预警
    var key = "a17c342b07934800bfdb39a69d35929f";
    //使用jQuery来获取跨域的数据
    //dataType:"jsonp"
    //10 () 12 13 15 
    //key默认就是callback
    //value的值以jQuery开头的字符串，这个字符串就是函数调用的名称
    $.ajax({
        url: "https://devapi.qweather.com/v7/warning/now",
        data: {
            key: key,
            location: location
        },
        success: function(data) {
            console.log(data);
            var ls_warning = document.querySelector(".ls-warning");
            var warning = ls_warning.querySelector(".warning");
            var ct_window = document.querySelector(".ct-window");
            var title = ct_window.querySelector(".title");
            var txt_info = ct_window.querySelector(".txt-info");
            var btn_close = ct_window.querySelector(".btn-close");
            if (data.warning.length != 0) {
                warning.innerHTML = data.warning[0].typeName + "预警";
                title.innerHTML = data.warning[0].title;
                txt_info.innerHTML = data.warning[0].text;
                ls_warning.style.display = "block";
                if (data.warning[0].level == "黄色") {
                    title.style.backgroundColor = "rgb(245,210,113)";
                    btn_close.style.backgroundColor = "rgb(245,210,113)";
                } else if (data.warning[0].level == "蓝色") {
                    title.style.backgroundColor = "rgb(125,160,236)";
                    btn_close.style.backgroundColor = "rgb(125,160,236)";
                }
            } else {
                warning.innerHTML = " ";
                title.innerHTML = " ";
                txt_info.innerHTML = " ";
                ls_warning.style.display = "none";
            }
        },
        dataType: "json", //json xml text
        jsonp: "callback",
        jsonpCallback: "haha"
    });
}
//获得一天的空气情况，原理同上，目的是获得数据
function Aircondition(location) {
    var key = "a17c342b07934800bfdb39a69d35929f";
    $.ajax({
        url: "https://devapi.qweather.com/v7/air/now",
        data: {
            key: key,
            location: location
        },
        success: function(data) {
            console.log(data);
            var nav = document.querySelector("nav");
            var icon = nav.querySelector(".icon");
            var til = icon.querySelector(".til");
            var value = icon.querySelector(".value");
            var ct_air_pop = document.querySelector(".ct-air-pop");
            var val = ct_air_pop.querySelector(".val");
            var level = ct_air_pop.querySelector(".level");
            til.innerHTML = data.now.aqi;;
            value.innerHTML = data.now.category;
            val.innerHTML = data.now.aqi;
            level.innerHTML = data.now.category;
            if (data.now.category == "优") {
                icon.style.backgroundColor = "#a3d765";
                level.style.backgroundColor = "#a3d765";
            } else if (data.now.category == "良") {
                icon.style.backgroundColor = "rgb(245,210,113)";
                level.style.backgroundColor = "rgb(245,210,113)";
            }
            var first = document.querySelector(".first");
            var vals = first.querySelectorAll(".val");
            vals[0].innerHTML = data.now.pm2p5;
            vals[1].innerHTML = data.now.pm10;
            vals[2].innerHTML = data.now.so2;
            var second = document.querySelector(".second");
            var val_s = second.querySelectorAll(".val");
            val_s[0].innerHTML = data.now.no2;
            val_s[1].innerHTML = data.now.o3;
            val_s[2].innerHTML = data.now.co;
        },
        dataType: "json", //json xml text
        jsonp: "callback",
        jsonpCallback: "haha"
    });
}
//改变城市模块，是最重要的模块，实现的功能有在输入框输入文字获得相应的事件回应
function Changecity() {
    var sec_location = document.querySelector(".sec-location");
    var btn_cancel = sec_location.querySelector(".btn-cancel");
    var i_location = sec_location.querySelector(".i-location");
    var ct_hot_city = sec_location.querySelector(".ct-hot-city");
    var icon_delete = sec_location.querySelector(".icon-delete");
    var position = document.querySelector(".position");
    var img = position.querySelector("img");
    var column_city = sec_location.querySelector(".column_city");
    var div_click = column_city.querySelector(".div-click");
    var ul = column_city.querySelector("ul");
    var ct_history = ct_hot_city.querySelector(".ct-history");
    var ls_city = ct_history.querySelector(".ls-city");
    img.addEventListener("click", function() {
        var first = ul.firstElementChild;
        while (first) {
            first.remove();
            first = ul.firstElementChild;
        };
        sec_location.style.visibility = "visible";
        html.style.overflow = "hidden";
        var lis = ls_city.querySelectorAll("li");
        if (lis.length == 0) {
            ct_history.style.display = "none";
        } else {
            ct_history.style.display = "block";
        }
    });
    btn_cancel.addEventListener("click", function() {
        var first = ul.firstElementChild;
        while (first) {
            first.remove();
            first = ul.firstElementChild;
        };
        sec_location.style.visibility = "hidden";
        icon_delete.style.setProperty("visibility", "hidden", "important");
        ct_hot_city.style.display = "block";
        html.style.overflow = "auto";
        i_location.value = "";
    });
    i_location.onclick = function() {
        var first = ul.firstElementChild;
        while (first) {
            first.remove();
            first = ul.firstElementChild;
        };
        ct_hot_city.style.display = "none";
        icon_delete.style.visibility = "visible";
        var key = "a17c342b07934800bfdb39a69d35929f";
        var location = i_location.value;
        $.ajax({
            url: "https://geoapi.qweather.com/v2/city/lookup", //城市信息查询API目的获得locationID 可用
            data: {
                key: key,
                location: location
            },
            success: function(data) {
                console.log(data);
                if (data.code === "200") {
                    var header = document.querySelector("header");
                    var position = header.querySelector(".position");
                    var a = position.querySelector("a");
                    for (var i = 0; i < data.location.length; i++) {
                        if (data.location[i].name == location && data.location[i].country == "中国") {
                            var obj = document.createElement("li");
                            obj.innerHTML = "<span>" + data.location[i].adm1 + "</span>" + "," + "<span>" + data.location[i].adm2 + "</span>" + "," + "<span>" + data.location[i].name + "</span>";
                            // obj.style.color = "#00BBFF";
                            var spans = obj.querySelectorAll("span");
                            for (var j = 0; j < spans.length; j++) {
                                if (spans[j].innerHTML === location) {
                                    spans[j].style.color = "#00BBFF";
                                }
                            }
                            ul.appendChild(obj);
                            column_city.style.display = "block";

                            // a.innerHTML = data.location[i].adm2 + "  " + data.location[i].name;
                        } else if (data.location[i].adm1 == location && data.location[i].country == "中国") {
                            var obj = document.createElement("li");
                            obj.innerHTML = "<span>" + data.location[i].adm1 + "</span>" + "," + "<span>" + data.location[i].adm2 + "</span>" + "," + "<span>" + data.location[i].name + "</span>";
                            var spans = obj.querySelectorAll("span");
                            for (var j = 0; j < spans.length; j++) {
                                if (spans[j].innerHTML === location) {
                                    spans[j].style.color = "#00BBFF";
                                }
                            }
                            ul.appendChild(obj);
                            column_city.style.display = "block";
                        }
                    }
                }
                var lis = ul.querySelectorAll("li");
                for (let j = 0; j < lis.length; j++) {
                    lis[j].onclick = function(event) {
                        // stopBubbling(event);
                        var first = ul.firstElementChild;
                        while (first) {
                            first.remove();
                            first = ul.firstElementChild;
                        };
                        sec_location.style.visibility = "hidden";
                        icon_delete.style.setProperty("visibility", "hidden", "important");
                        ct_hot_city.style.display = "block";
                        html.style.overflow = "auto";
                        i_location.value = "";
                        for (var z = 0; z < data.location.length; z++) {
                            if (this.firstChild.innerHTML === data.location[z].adm1 && this.lastChild.innerHTML === data.location[z].name) {
                                var cityid = data.location[z].id;
                                var li = document.createElement("li");
                                if (data.location[z].adm2 != data.location[z].name) {
                                    li.innerHTML = data.location[z].name;
                                    ls_city.appendChild(li);
                                    a.innerHTML = data.location[z].adm2 + "  " + data.location[z].name;

                                } else {
                                    li.innerHTML = data.location[z].name;
                                    ls_city.appendChild(li);
                                    a.innerHTML = data.location[z].adm1 + "  " + data.location[z].name;
                                }
                                var lis = ls_city.querySelectorAll("li");
                                if (lis.length == 1) {
                                    lis[0].classList.add("opt");
                                    lis[0].classList.add("city");
                                } else if (lis.length == 2) {
                                    lis[0].classList.add("opt");
                                    lis[0].classList.add("city");
                                    lis[1].classList.add("opt");
                                    lis[1].classList.add("city");
                                } else if (lis.length == 3) {
                                    lis[0].classList.add("opt");
                                    lis[0].classList.add("city");
                                    lis[1].classList.add("opt");
                                    lis[1].classList.add("city");
                                    lis[2].classList.add("opt");
                                    lis[2].classList.add("city");
                                } else {
                                    lis[0].remove();
                                    lis[1].classList.add("opt");
                                    lis[1].classList.add("city");
                                    lis[2].classList.add("opt");
                                    lis[2].classList.add("city");
                                    lis[3].classList.add("opt");
                                    lis[3].classList.add("city");
                                }
                                var lis = ls_city.querySelectorAll("li");
                                if (lis.length == 2) {
                                    lis[0].classList.remove("center");
                                    lis[1].classList.add("center");
                                } else if (lis.length == 3) {
                                    lis[0].classList.remove("center");
                                    lis[1].classList.add("center");
                                    lis[2].classList.remove("center");
                                }
                                Livingajax(cityid);
                                Dayinfo(cityid);
                                Futureinfo(cityid);
                                Earlywarning(cityid);
                                Aircondition(cityid);
                            }
                        }
                    }
                }
            },
            dataType: "json", //json xml text
            jsonp: "callback",
            jsonpCallback: "haha"
        });
    };

    div_click.addEventListener("click", function() {
        var first = ul.firstElementChild;
        while (first) {
            first.remove();
            first = ul.firstElementChild;
        };
        ct_hot_city.style.display = "block";
        icon_delete.style.setProperty("visibility", "hidden", "important");
        column_city.style.display = "none";
        i_location.value = "";

    });
    icon_delete.addEventListener("click", function() {
        var first = ul.firstElementChild;
        while (first) {
            first.remove();
            first = ul.firstElementChild;
        };
        ct_hot_city.style.display = "block";
        icon_delete.style.setProperty("visibility", "hidden", "important");
        column_city.style.display = "none";
        i_location.value = "";

    });
}

function Deleterecord() {
    var sec_location = document.querySelector(".sec-location");
    var ct_history = sec_location.querySelector(".ct-history");
    var ls_city = ct_history.querySelector(".ls-city");
    var btn_clean = ct_history.querySelector(".btn-clean");
    btn_clean.addEventListener("click", function() {
        var lis = ls_city.querySelectorAll("li");
        ct_history.style.display = "none";
        for (let i = 0; i < lis.length; i++) {
            lis[i].remove();
        }
    })
}

function stopBubbling(e) {
    e = window.event || e;
    if (e.stopPropagation) {
        e.stopPropagation(); //阻止事件 冒泡传播
    } else {
        e.cancelBubble = true; //ie兼容
    }
}

function Share() {
    var sec_share = document.querySelector(".sec-share");
    var web_qq = sec_share.querySelector(".web-qq");
    var cover = sec_share.querySelector(".cover");
    var ct_share = sec_share.querySelector(".ct-share");
    var ls_share_btn = ct_share.querySelector(".ls-share-btn");
    var share_lis = ls_share_btn.querySelectorAll("li");
    var flag = 0;
    for (var i = 0; i < share_lis.length; i++) {
        share_lis[i].onclick = function() {
            web_qq.classList.add("picture");
            cover.classList.add("bgc");
            ct_share.style.display = "none";
            flag = 1;
            if (flag === 1) {
                console.log("a");
                cover.addEventListener("click", function() {
                    cover.style.setProperty("visibility", "hidden", "important");
                    ct_share.style.display = "block";
                    sec_share.style.visibility = "hidden";
                    web_qq.classList.remove("picture");
                    html.style.overflow = "auto";
                    cover.classList.remove("bgc");
                })
            }
        }
    }
}

function myAjax(obj) {
    var defaults = {
        type: "get",
        url: "#",
        data: {},
        success: function(data) {},
        jsonp: "callback",
        jsonpCallback: "hehe"
    };

    for (var key in obj) {
        defaults[key] = obj[key];
    }

    var params = "";
    for (var attr in defaults.data) {
        params += attr + "=" + defaults.data[attr] + "&";
    }
    if (params) {
        params = params.substring(0, params.length - 1);
        defaults.url += "?" + params;
    }

    defaults.url += "&" + defaults.jsonp + "=" + defaults.jsonpCallback;
    console.log(defaults.url);

    var script = document.createElement("script");
    script.src = defaults.url;

    window[defaults.jsonpCallback] = function(data) {
        defaults.success(data);
    };

    var head = document.querySelector("head");
    head.appendChild(script);
}

function Orangechart(arr) {
    var dom = document.querySelector(".chart-days");
    var myChart = echarts.init(dom);
    var app = {};

    var option;

    data = [{
        value: [
            "1997-10-1",
            arr[0]
        ]
    }, {

        value: [
            "1997-10-5",
            arr[1]
        ]
    }, {

        value: [
            "1997-10-9",
            arr[2]
        ]
    }, {

        value: [
            "1997-10-13",
            arr[3]
        ]
    }, {

        value: [
            "1997-10-17",
            arr[4]
        ]
    }, {

        value: [
            "1997-10-21",
            arr[5]
        ]
    }, {

        value: [
            "1997-10-25",
            arr[6]
        ]
    }, {

        value: [
            "1997-10-29",
            arr[7]
        ]
    }, {
        value: [
            "1997-10-29",
            arr[8]
        ]
    }]

    option = {
        xAxis: {
            type: 'time',
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,

            },
        },
        yAxis: {
            type: 'value',
            max: 40,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false

            },
        },
        series: [{
            data: data,
            type: 'line',
            smooth: true,
            itemStyle: {
                normal: {
                    color: "orange ",
                    lineStyle: {
                        width: 3 //设置线条粗细
                    },
                    label: {
                        show: true,
                        formatter: function(data) {
                            var result = "";
                            result = data.data.value[1] + "°";
                            return result;
                        },
                    },

                },

            },
            symbolSize: 6,
            symbol: 'circle',

        }],
        textStyle: {
            fontSize: 15,
            color: 'black'
        }
    };


    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }
}

function Bluechart(arr) {
    var dom = document.querySelector(".chart-days-blue");
    var myChart = echarts.init(dom);
    var app = {};

    var option;

    data = [{
        value: [
            "1997-10-1",
            arr[0]
        ]
    }, {

        value: [
            "1997-10-5",
            arr[1]
        ]
    }, {

        value: [
            "1997-10-9",
            arr[2]
        ]
    }, {

        value: [
            "1997-10-13",
            arr[3]
        ]
    }, {

        value: [
            "1997-10-17",
            arr[4]
        ]
    }, {

        value: [
            "1997-10-21",
            arr[5]
        ]
    }, {

        value: [
            "1997-10-25",
            arr[6]
        ]
    }, {

        value: [
            "1997-10-29",
            arr[7]
        ]
    }, {
        value: [
            "1997-10-29",
            arr[8]
        ]
    }]

    option = {
        xAxis: {
            type: 'time',
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,

            },
        },
        yAxis: {
            type: 'value',
            max: 40,
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false

            },
        },
        series: [{
            data: data,
            type: 'line',
            smooth: true,
            itemStyle: {
                normal: {
                    color: "#00BBFF ",
                    lineStyle: {
                        width: 3 //设置线条粗细
                    },
                    label: {
                        show: true,
                        formatter: function(data) {
                            var result = "";
                            result = data.data.value[1] + "°";
                            return result;
                        },
                    },
                },
            },
            symbolSize: 6,
            symbol: 'circle',

        }],
        textStyle: {
            fontSize: 15,
            color: 'black'
        }
    };
    if (option && typeof option === 'object') {
        myChart.setOption(option);
    }
}

function Position() {
    var mapObj = new AMap.Map('iCenter');
    mapObj.plugin('AMap.Geolocation', function() {
        geolocation = new AMap.Geolocation({
            enableHighAccuracy: true, // 是否使用高精度定位，默认:true
            timeout: 10000, // 超过10秒后停止定位，默认：无穷大
            maximumAge: 0, // 定位结果缓存0毫秒，默认：0
            convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
            showButton: true, // 显示定位按钮，默认：true
            buttonPosition: 'LB', // 定位按钮停靠位置，默认：'LB'，左下角
            buttonOffset: new AMap.Pixel(10, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            showMarker: true, // 定位成功后在定位到的位置显示点标记，默认：true
            showCircle: true, // 定位成功后用圆圈表示定位精度范围，默认：true
            panToLocation: true, // 定位成功后将定位到的位置作为地图中心点，默认：true
            zoomToAccuracy: true // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        });
        mapObj.addControl(geolocation);
        geolocation.getCurrentPosition();
        AMap.event.addListener(geolocation, 'complete', onComplete); // 返回定位信息
        AMap.event.addListener(geolocation, 'error', onError); // 返回定位出错信息
    });

    function onComplete(obj) {
        var res = '经纬度：' + obj.position +
            '\n精度范围：' + obj.accuracy +
            '米\n定位结果的来源：' + obj.location_type +
            '\n状态信息：' + obj.info +
            '\n地址：' + obj.formattedAddress +
            '\n地址信息：' + JSON.stringify(obj.addressComponent, null, 4);
        console.log(obj);
        var key = "a17c342b07934800bfdb39a69d35929f";
        var location = obj.addressComponent.district.substring(0, 2);
        var cityid;
        var ct_cur = document.querySelector(".ct-cur");
        var a = ct_cur.querySelector("a");
        a.innerHTML = location;
        $.ajax({
            url: "https://geoapi.qweather.com/v2/city/lookup", //实时天气
            data: {
                key: key,
                location: location
            },
            success: function(data) {
                var header = document.querySelector("header");
                var position = header.querySelector(".position");
                var a = position.querySelector("a");
                for (var i = 0; i < data.location.length; i++) {
                    if (data.location[i].adm1 == obj.addressComponent.province && data.location[i].name == location && data.location[i].country == "中国") {
                        cityid = data.location[i].id;
                        a.innerHTML = data.location[i].adm2 + "  " + data.location[i].name;
                    }
                }
                Livingajax(cityid);
                Dayinfo(cityid);
                Futureinfo(cityid);
                Earlywarning(cityid);
                Aircondition(cityid);
            },
            dataType: "json", //json xml text
            jsonp: "callback",
            jsonpCallback: "haha"
        });
    }

    function onError(obj) {
        alert(obj.info + '--' + obj.message);
        console.log(obj);
    }
}

function Clickcity() {
    var ct_cur = document.querySelector(".ct-cur");
    var a = ct_cur.querySelector("a");
    var position = document.querySelector(".position");
    var title_a = position.querySelector("a");
    var click_city = document.querySelector(".click_city");
    var lis = click_city.querySelectorAll("li");
    var sec_location = document.querySelector(".sec-location");
    var icon_delete = sec_location.querySelector(".icon-delete");
    var ct_hot_city = sec_location.querySelector(".ct-hot-city");
    var i_location = sec_location.querySelector(".i-location");
    console.log(lis);
    for (var i = 0; i < lis.length; i++) {
        lis[i].onclick = function() {
            var location = this.innerHTML;
            console.log(location);
            var key = "a17c342b07934800bfdb39a69d35929f";
            $.ajax({
                url: "https://geoapi.qweather.com/v2/city/lookup", //城市信息查询API目的获得locationID 可用
                data: {
                    key: key,
                    location: location
                },
                success: function(data) {
                    console.log(data);
                    var sec_location = document.querySelector(".sec-location");
                    var ct_hot_city = sec_location.querySelector(".ct-hot-city");
                    var ct_history = ct_hot_city.querySelector(".ct-history");
                    var ls_city = ct_history.querySelector(".ls-city");

                    for (var z = 0; z < data.location.length; z++) {
                        if (location === data.location[z].adm1 || location === data.location[z].name) {
                            var cityid = data.location[z].id;
                            var li = document.createElement("li");
                            if (data.location[z].adm2 != data.location[z].name) {
                                li.innerHTML = data.location[z].name;
                                ls_city.appendChild(li);
                                title_a.innerHTML = data.location[z].adm2 + "  " + data.location[z].name;
                                break;
                            } else {
                                li.innerHTML = data.location[z].name;
                                ls_city.appendChild(li);
                                title_a.innerHTML = data.location[z].adm1 + "  " + data.location[z].name;
                                break;
                            }
                        }
                    }
                    var lis = ls_city.querySelectorAll("li");
                    for (j = 0; j < lis.length; j++) {
                        lis[j].classList.remove("opt");
                        lis[j].classList.remove("city");
                        lis[j].classList.remove("center");
                    }
                    if (lis.length > 3) {
                        for (var j = 3; j < lis.length; j++) {
                            lis[j - 3].remove();
                        }
                    }
                    var lis = ls_city.querySelectorAll("li");
                    if (lis.length <= 3 && lis.length > 0) {
                        if (lis.length == 1) {
                            ct_history.style.display = "block";
                            lis[0].classList.add("opt");
                            lis[0].classList.add("city");
                        }
                        if (lis.length == 2) {
                            ct_history.style.display = "block";
                            lis[0].classList.add("opt");
                            lis[0].classList.add("city");
                            lis[1].classList.add("opt");
                            lis[1].classList.add("city");
                            lis[1].classList.add("center");
                        }
                        if (lis.length == 3) {

                            ct_history.style.display = "block";
                            lis[0].classList.add("opt");
                            lis[0].classList.add("city");
                            lis[1].classList.add("opt");
                            lis[1].classList.add("city");
                            lis[1].classList.add("center");
                            lis[2].classList.add("opt");
                            lis[2].classList.add("city");
                        }
                    }
                    sec_location.style.visibility = "hidden";
                    icon_delete.style.setProperty("visibility", "hidden", "important");
                    ct_hot_city.style.display = "block";
                    html.style.overflow = "auto";
                    i_location.value = "";
                    Livingajax(cityid);
                    Dayinfo(cityid);
                    Futureinfo(cityid);
                    Earlywarning(cityid);
                    Aircondition(cityid);
                    Clickhistory();
                },

                dataType: "json", //json xml text
                jsonp: "callback",
                jsonpCallback: "haha"
            });
        }
    }
}

function Clickhistory() {
    var sec_location = document.querySelector(".sec-location");
    var ct_hot_city = sec_location.querySelector(".ct-hot-city");
    var ct_history = ct_hot_city.querySelector(".ct-history");
    var ls_city = ct_history.querySelector(".ls-city");
    var lis = ls_city.querySelectorAll("li");
    var position = document.querySelector(".position");
    var title_a = position.querySelector("a");
    if (lis.length > 0) {
        for (var i = 0; i < lis.length; i++) {
            lis[i].onclick = function() {
                var location = this.innerHTML;
                console.log(location);
                var key = "a17c342b07934800bfdb39a69d35929f";
                $.ajax({
                    url: "https://geoapi.qweather.com/v2/city/lookup", //城市信息查询API目的获得locationID 可用
                    data: {
                        key: key,
                        location: location
                    },
                    success: function(data) {
                        console.log(data);
                        var sec_location = document.querySelector(".sec-location");
                        var icon_delete = sec_location.querySelector(".icon-delete");
                        var ct_hot_city = sec_location.querySelector(".ct-hot-city");
                        var ct_history = ct_hot_city.querySelector(".ct-history");
                        var i_location = sec_location.querySelector(".i-location");
                        for (var z = 0; z < data.location.length; z++) {
                            if (location === data.location[z].adm1 || location === data.location[z].name) {
                                var cityid = data.location[z].id;
                                if (data.location[z].adm2 != data.location[z].name) {
                                    title_a.innerHTML = data.location[z].adm2 + "  " + data.location[z].name;
                                    break;
                                } else {
                                    title_a.innerHTML = data.location[z].adm1 + "  " + data.location[z].name;
                                    break;
                                }
                            }
                        }
                        sec_location.style.visibility = "hidden";
                        icon_delete.style.setProperty("visibility", "hidden", "important");
                        ct_hot_city.style.display = "block";
                        html.style.overflow = "auto";
                        i_location.value = "";
                        Livingajax(cityid);
                        Dayinfo(cityid);
                        Futureinfo(cityid);
                        Earlywarning(cityid);
                        Aircondition(cityid);
                    },

                    dataType: "json", //json xml text
                    jsonp: "callback",
                    jsonpCallback: "haha"
                });
            }
        }
    }
}

function Currentposition() {
    var ct_cur = document.querySelector(".ct-cur");
    var a = ct_cur.querySelector("a");
    var position = document.querySelector(".position");
    var title_a = position.querySelector("a");
    var click_city = document.querySelector(".click_city");
    var lis = click_city.querySelectorAll("li");
    var sec_location = document.querySelector(".sec-location");
    var icon_delete = sec_location.querySelector(".icon-delete");
    var ct_hot_city = sec_location.querySelector(".ct-hot-city");
    var i_location = sec_location.querySelector(".i-location");


    a.onclick = function() {
        var location = this.innerHTML;
        console.log(location);
        var key = "a17c342b07934800bfdb39a69d35929f";
        $.ajax({
            url: "https://geoapi.qweather.com/v2/city/lookup", //城市信息查询API目的获得locationID 可用
            data: {
                key: key,
                location: location
            },
            success: function(data) {
                console.log(data);
                var sec_location = document.querySelector(".sec-location");
                var ct_hot_city = sec_location.querySelector(".ct-hot-city");
                var ct_history = ct_hot_city.querySelector(".ct-history");
                var ls_city = ct_history.querySelector(".ls-city");

                for (var z = 0; z < data.location.length; z++) {
                    if (location === data.location[z].adm1 || location === data.location[z].name) {
                        var cityid = data.location[z].id;
                        var li = document.createElement("li");
                        if (data.location[z].adm2 != data.location[z].name) {
                            li.innerHTML = data.location[z].name;
                            ls_city.appendChild(li);
                            title_a.innerHTML = data.location[z].adm2 + "  " + data.location[z].name;
                            break;
                        } else {
                            li.innerHTML = data.location[z].name;
                            ls_city.appendChild(li);
                            title_a.innerHTML = data.location[z].adm1 + "  " + data.location[z].name;
                            break;
                        }
                    }
                }
                var lis = ls_city.querySelectorAll("li");
                for (j = 0; j < lis.length; j++) {
                    lis[j].classList.remove("opt");
                    lis[j].classList.remove("city");
                    lis[j].classList.remove("center");
                }
                if (lis.length > 3) {
                    for (var j = 3; j < lis.length; j++) {
                        lis[j - 3].remove();
                    }
                }
                var lis = ls_city.querySelectorAll("li");
                if (lis.length <= 3 && lis.length > 0) {
                    if (lis.length == 1) {
                        ct_history.style.display = "block";
                        lis[0].classList.add("opt");
                        lis[0].classList.add("city");
                    }
                    if (lis.length == 2) {
                        ct_history.style.display = "block";
                        lis[0].classList.add("opt");
                        lis[0].classList.add("city");
                        lis[1].classList.add("opt");
                        lis[1].classList.add("city");
                        lis[1].classList.add("center");
                    }
                    if (lis.length == 3) {

                        ct_history.style.display = "block";
                        lis[0].classList.add("opt");
                        lis[0].classList.add("city");
                        lis[1].classList.add("opt");
                        lis[1].classList.add("city");
                        lis[1].classList.add("center");
                        lis[2].classList.add("opt");
                        lis[2].classList.add("city");
                    }
                }
                sec_location.style.visibility = "hidden";
                icon_delete.style.setProperty("visibility", "hidden", "important");
                ct_hot_city.style.display = "block";
                html.style.overflow = "auto";
                i_location.value = "";
                Livingajax(cityid);
                Dayinfo(cityid);
                Futureinfo(cityid);
                Earlywarning(cityid);
                Aircondition(cityid);
                Clickhistory();
            },

            dataType: "json", //json xml text
            jsonp: "callback",
            jsonpCallback: "haha"
        });
    }
}