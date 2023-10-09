let dot = document.querySelector("#dot");


let position = 0;
function nextFrame()
{
    position++;
    dot.style.left = position + "px";
}


let animation;

var start = document.getElementById("start");
function move(){
    animation = setInterval(nextFrame, 20);    
}
start.onclick = move

var stop = document.getElementById("stop");
function stuck(){
    clearInterval(animation);
}
stop.onclick = stuck

var reset = document.getElementById("reset");
function restart(){
    clearInterval(animation);
    position = 0;
    dot.style.left = "0px"
}
reset.onclick = restart

var square = document.getElementById("square");

function shape(){
    square.style.borderRadius = '50%';
}
change.onclick = shape

function remp(){
    square.style.borderRadius = '0%';
}

revert.onclick = remp

var color = document.getElementById("col");
function r(){
    col.style.backgroundColor = "red"
}
red.onclick  = r
function b(){
    col.style.backgroundColor = "blue"
}
blue.onclick  = b
function w(){
    col.style.backgroundColor = "white"
}
white.onclick  = w

var greet = document.getElementById("message");
function s(){
    message.innerHTML = "Hola!"
}
spanish.onclick = s
function j(){
    message.innerHTML = "こんにちは (Kon'nichiwa)"
}
jpn.onclick = j
function k(){
    message.innerHTML = "안녕하세요 (annyeonghaseyo)"
}
korean.onclick = k
function f(){
    message.innerHTML = "Bonjour!"
}
french.onclick = f
function e(){
    message.innerHTML = "Salutations!"
}
english.onclick = e