const musique = document.getElementById("musique");
const bouttonSon = document.getElementById("bouttonSon");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const stop = document.getElementById("stop");
const rouageGauche = document.getElementById("rouageGauche");
const rouageDroite = document.getElementById("rouageDroite");

const btns = document.getElementsByClassName("btns");
const current = document.getElementsByClassName("active");

play.addEventListener("click", () => {
  musique.play();
  bouttonSon.play();
  addActive();
  rouageGauche.classList.add("engrenageAnim");
  rouageDroite.classList.add("engrenageAnim");
});

pause.addEventListener("click", () => {
  musique.pause();
  bouttonSon.play();
  addActive();
  rouageGauche.classList.remove("engrenageAnim");
  rouageDroite.classList.remove("engrenageAnim");
});

stop.addEventListener("click", () => {
  musique.pause();
  bouttonSon.play();
  addActive();
  musique.currentTime = 0;
  rouageGauche.classList.remove("engrenageAnim");
  rouageDroite.classList.remove("engrenageAnim");
});



function addActive () {
  for (let i = 0; i < btns.length; i++) {
    console.log(current[i]);
    
    if(current[i].classList == "active") {
      current[i].classList.remove("active");
    }
    this.classList.add("active");
  }
}