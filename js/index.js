const musique = document.getElementById("musique");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const stop = document.getElementById("pause");

play.addEventListener("click", () => {
  musique.play();
});

pause.addEventListener("click", () => {
  musique.pause();
});
