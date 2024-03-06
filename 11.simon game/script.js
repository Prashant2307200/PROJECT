let h2 = document.querySelector('h2');
let colors = ['yellow' ,'red' ,'purple' ,'green'];
let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let idx = 0;

function reset(){
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
    idx = 0;
}


document.addEventListener('keypress', function(){
    if(started == false){
        alert("Game is Started!");
        started = true;
        levelUp();
    }
});

function levelUp(){
    userSeq = [];
    idx = 0;
    level++;
    h2.innerHTML = `Level ${level}`;
    let randIdx = Math.floor(Math.random() * 4);
    let randClr = colors[randIdx];
    gameSeq.push(randClr);
    let randBtn = document.querySelector(`.${randClr}`);
    btnFlash(randBtn);
}

function btnFlash(btn) {
    btn.classList.add('flash');
    setTimeout(function () {
        btn.classList.remove('flash');
    }, 250);
}

let btns = document.querySelectorAll('.btn');
for(btn of btns){
    btn.addEventListener('click', btnPress);
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    let userClr = btn.getAttribute('id');
    userSeq.push(userClr);
    checkAns();
}

function userFlash(btn) {
    btn.classList.add('userFlash');
    setTimeout(function () {
        btn.classList.remove('userFlash');
    }, 250);
}

function checkAns(){
    console.log(userSeq[idx],gameSeq[idx]);
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp ,1000);
            console.log("Same Value");
        }
    }else{
        h2.innerHTML = 'Game Over! press any key to start';
        reset();
    }
    idx++;
}
