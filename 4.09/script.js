
var table = document.getElementById("signUp");
function move(){
    signUp.innerHTML = "Whoa there was an error, please try clicking twice?"
    signUp.style.color = "red"
}
signUp.onclick = move
function move2(){
    signUp.innerHTML = "Still not working? I guess it doesn't work, but I'll try to fix it sometime soon"
    signUp.style.color = "black"
    signUp.style.backgroundColor = "white"
}
signUp.ondblclick = move2

setInterval(myTimer, 1000);
var clock = document.getElementById("watch");
function myTimer(){
    const date = new Date();
    watch.innerHTML = date.toLocaleTimeString();
}
