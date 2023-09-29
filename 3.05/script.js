var title = document.getElementById("title");
title.innerHTML = "Hello?";
title.style.color = "beige";

function makeTitleWhite(){
    this.style.background = 'black';
    this.style.color = "white";
    title.innerHTML = "Anyone there?"
} 

title.onclick = makeTitleWhite

var currentMargin = 0;

function changeMargin()
{
    currentMargin = currentMargin + 1;
    title.style.margin = currentMargin + "px";
}

function reset()
{
    currentMargin = 0;
    title.style.margin = "0px";
    clearInterval(animation);
}

document.getElementById("stop").onclick = reset;

var animation = setInterval(changeMargin, 10);