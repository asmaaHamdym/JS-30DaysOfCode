function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  key.classList.add("playing");
  key.addEventListener("transitionend", removeTransition);
}

document.addEventListener("keydown", playSound);
