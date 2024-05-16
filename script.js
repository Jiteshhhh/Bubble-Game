var timer = 60;
var score = 0 ;
var hitrn = 0;
 

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function getNewHit(){
    hitrn = onRandom();
    document.querySelector("#hitval").textContent = hitrn;
}
function onRandom() {
    return Math.floor(Math.random() * 10);
}
function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 161; i++) {
        clutter += `<div class="bubble">${onRandom()}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}
function runTimmer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#tvalue").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})


// increaseScore()

runTimmer();
makeBubble();
getNewHit();
