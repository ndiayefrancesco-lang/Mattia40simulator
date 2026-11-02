let io= document.querySelector(".io")
let lancia=document.querySelector(".lancia")
let div2=document.querySelector(".div2")
let palanc=0
let  geran=document.querySelector(".geran")
let ah=document.querySelector(".ah")
let nono=document.querySelector(".nono")


function lancia_pallina() {
    let palline=document.createElement("img");
    palline.src="pallina.png";
    palline.style.height="20px"
    palline.style.position="absolute"
div2.appendChild(palline)
let randomx=Math.floor(Math.random() * (200 - 100 + 1)) + 100;
let randomy= Math.floor(Math.random() * (160 - 120 + 1)) + 120;
palline.style.left=randomx +"px"
palline.style.top=randomy+"px"
palanc=palanc+1
ger()
}

function ger() {
if (palanc>=5) {
    geran.src="felice.png"
}
 if (palanc>=10) {
    geran.src="arrabiato.png"
}
 if (palanc>=20) {
    lancia.style.opacity=0
    geran.classList.add("tremare")


    ah.muted=false
    ah.volume=1.0
    ah.play()

    setTimeout(() => {
        nono.muted=false
        nono.volume=1.0
                 nono.style.opacity=1
        nono.play()
    }, 3200);
    setTimeout(() => {
        lancia.style.opacity=1
        nono.style.opacity=0
            geran.src="gera.png"
            palanc=0
    geran.classList.remove("tremare")

    }, 4500);
}

}