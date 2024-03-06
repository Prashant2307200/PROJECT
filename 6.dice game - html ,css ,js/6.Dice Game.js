let robo1 = Math.floor(Math.random()*6)+1;
let robo1Img = `./face${robo1}.png`;
let img1 = document.querySelector("img");
img1.setAttribute("src",robo1Img);

let robo2 = Math.floor(Math.random()*6)+1;
let robo2Img = `./face${robo2}.png`;
let img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",robo2Img);

let h1 = document.querySelector("h1");
if(robo1 == robo2){
    h1.innerHTML = "Tie!";
}else if(robo1 > robo2){
    h1.innerHTML = "Player-1 Wins!";
}else{
    h1.innerHTML = "Player-2 Wins!";
}