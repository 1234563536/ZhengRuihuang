/*
 * @Author: your name
 * @Date: 2021-02-23 17:23:36
 * @LastEditTime: 2021-02-23 18:35:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \考核\text.js
 */
var search_for = document.querySelector('.search-for');
var search = document.querySelector('.search');
var start = document.querySelector('.content');
var end = document.querySelector('.outcome');
var str;
search_for.addEventListener('click', function() {
    // console.log(typeof(start.value));
    str = start.value;
    var arr = [];
    var out = [];
    for (var i = 0; i < str.length; i++) {
        arr[i] = str.charCodeAt(i);
    }
    arr.sort(function(a, b) {
        return a - b;
    })
    for (var j = 0; j < arr.length; j++) {
        out[j] = String.fromCharCode(arr[j]);
    }
    end.value = unique(out);
    // end.value = out;
});

function unique(arr) {
    var hash = [];
    for (var i = 0; i < arr.length; i++) {
        if (hash.indexOf(arr[i]) == -1) {
            hash.push(arr[i]);
        }
    }
    return hash;
}