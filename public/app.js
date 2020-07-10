// function timer() {
//     var data = new Date();
//     var time = data.toLocaleTimeString();
//     var text = document.getElementById('para')
//     text.innerHTML = time;
// }
// interval= setInterval(timer, 1000)
// function time() {
//     var data = document.getElementById('para1')
//     data.innerHTML='hello'
// }
// setTimeout(function () {
//     clearInterval(interval)
// },10000)


var second = 0
var minute = 0
var milliSecond=0
var data1 = document.getElementById('min');
var data2 = document.getElementById('sec');
var data3 = document.getElementById('msec');
var interval;

function start() {
    document.getElementById("start").disabled = true;
    function timer() {
        console.log("Hello")
        milliSecond++;
        data3.innerHTML = milliSecond;
        if (milliSecond >= 1000) {
            second++;
            data2.innerHTML = second
            milliSecond = 0;
            if (second >= 60) {
                console.log("hello")
                minute++;
                data1.innerHTML = minute
                second = 0;
            }
            
        }
        
        
    }
    interval= setInterval(timer,10)
}  
function stop() {
    clearInterval(interval)
    data3.innerHTML = milliSecond;
    data2.innerHTML = second
    data1.innerHTML = minute
}
function reset() {
    document.getElementById("start").disabled = true;
    clearInterval(interval)
    milliSecond = 0;
    second = 0;
    minute = 0;
    data3.innerHTML = milliSecond;
    data2.innerHTML = second
    data1.innerHTML = minute

}

