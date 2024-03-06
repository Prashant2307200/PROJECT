const pre = document.querySelector("pre");
document.addEventListener("mousemove",(event) => {

    const x = event.clientX;
    const y = event.clientY;

    const midX = window.innerWidth/2;
    const midY = window.innerHeight/2;

    const offsetX = ((x - midX) / midX) * 45;
    const offsetY = ((y - midY) / midY) * 45;

    pre.style.setProperty("--rotateX" ,-1*offsetY + "deg");
    pre.style.setProperty("--rotateY" ,offsetX + "deg");
});