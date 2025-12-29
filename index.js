const drumButtons = document.querySelectorAll(".drum");

drumButtons.forEach(button => {
  button.addEventListener("click", () => {
    const key = button.innerHTML.toLowerCase();
    playSound(key);
    buttonAnimation(key);
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  playSound(key);
  buttonAnimation(key);
});

function playSound(key) {
  let audioFile;

  switch (key) {
    case "w": audioFile = "sounds/tom-1.mp3"; break;
    case "a": audioFile = "sounds/tom-2.mp3"; break;
    case "s": audioFile = "sounds/tom-3.mp3"; break;
    case "d": audioFile = "sounds/tom-4.mp3"; break;
    case "j": audioFile = "sounds/snare.mp3"; break;
    case "k": audioFile = "sounds/crash.mp3"; break;
    case "l": audioFile = "sounds/kick-bass.mp3"; break;
    default: return; 
  }

  const audio = new Audio(audioFile);
  audio.play().catch(err => console.log("Audio play failed:", err));
}

function buttonAnimation(key) {
  const activeButton = document.querySelector("." + key);
  if (!activeButton) return;

  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 150);
}
