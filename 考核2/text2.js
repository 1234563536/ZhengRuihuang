/*
 * @Author: your name
 * @Date: 2021-02-23 18:45:25
 * @LastEditTime: 2021-02-23 20:58:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \考核2\text.js
 */
document.getElementById("content").value = "请输入内容";


var textarea = document.querySelector('textarea');
var button = document.querySelector('.handon');
var button2 = document.querySelector('.delete');
var message_board = document.querySelector('.message_board');
var index = 0;
var div;
button.addEventListener('click', function() {
    // updata();
    index++;
    div = document.createElement('div');
    message_board.value = textarea.value;
    message_board.value = index + message_board.value;
    div.innerHTML = message_board.value
    message_board.appendChild(div);
    document.getElementById("content").value = "";
    console.log(div.firstChild);
});
button2.addEventListener('dblclick', function() {
    if (div.firstChild === null) {
        alert("不好意思亲,你只能删除上一条评论!");
    } else {
        div.firstChild.remove();
    }
})