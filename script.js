function scrollToMessage(){

    document
    .getElementById("message")
    .scrollIntoView({
        behavior:"smooth"
    });

}

const particles = document.querySelector(".particles");

for(let i=0; i<50; i++){

    let star = document.createElement("div");

    star.classList.add("particle");

    star.innerHTML = "❄";

    star.style.left = Math.random()*100 + "vw";

    star.style.animationDuration =
    (Math.random()*5+5) + "s";

    particles.appendChild(star);
}
document.addEventListener("click", function() {

    const music =
    document.getElementById("bgmusic");
    document.addEventListener("click", function () {
    document.getElementById("bgmusic").play();
}, { once: true });

    music.play();

}, { once: true });
function playMusic(){
    document.getElementById("bgmusic").play();
}
