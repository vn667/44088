/* 
* @Author: Lydia
* @Date:   2018-10-13 14:32:45
* @Last Modified by:   Marte
* @Last Modified time: 2018-10-13 20:03:52
*/

function test() {
    var span, d = document, li, a, i, lis = d.getElementById('linebox').getElementsByTagName('li');
    for (i = 0; li = lis[i++]; ) {
        a = li.getElementsByTagName('a')[0];
        linenumber = a.getElementsByClassName('linebtn')[0];
        if (!a) { continue; }
        span = d.createElement('span');
        span.ctime=new Date();
        span.innerHTML = '测速中...<img src="' + a.href + '" border="0" width="1" height="1" onerror="testresult(this)" />';
        linenumber.appendChild(span);
    }
};

function testresult(img) {
    var span = img.parentNode;
    var n = 'em';
	var num = Math.round((Math.random() * 100));
    if (!testresult.isrun) { n = 'b'; testresult.isrun = true; }
    span.innerHTML = '<' + n + '>' + num + 'ms</' + n + '>';
};
var ran = Math.random();