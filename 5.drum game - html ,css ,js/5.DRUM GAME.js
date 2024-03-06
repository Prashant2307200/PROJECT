let drums = document.querySelectorAll(".drum");
let n = drums.length;
for(let i = 0; i < n; ++i) {
    let drum = drums[i];
    let key = drum.innerHTML;
    drum.addEventListener("click",() => {
        let audio = new Audio(`./5.audio${key}.mp3`)
        audio.play();
    });
}
document.addEventListener("keypress",(e) => {
    let key = e.key;
    let audio = new Audio(`./5.audio${key}.mp3`)
    audio.play();
});
