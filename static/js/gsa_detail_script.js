sounds = Array.from(document.querySelectorAll(".controls .sound"));

sounds.forEach((sound) => {
  sound.getElementsByTagName("input")[0].addEventListener("change", () => {
    audio_el = sound.getElementsByTagName("audio")[0];
    audio_el.play();
    console.log(audio_el.src);
  })
})
