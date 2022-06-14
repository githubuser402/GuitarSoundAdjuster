sounds = Array.from(document.querySelectorAll(".controls .sound"));

let sounds_freq = Array();

let song_number = 1

sounds.forEach((sound) => {
  sound.getElementsByTagName("input")[0].addEventListener("change", () => {
    audio_el = sound.getElementsByTagName("audio")[0];
    audio_el.play();
    console.log(audio_el.src);
  })

  sounds_freq.push(
    {
      name: sound.querySelectorAll(".sound-name")[0].innerText, 
      frequency: +sound.querySelectorAll(".sound-freq")[0].innerText,
      number: song_number
    })
    song_number++;
})

let model_url = "/static/crepe"
let pitch;
let audioContext;
let mic;
let freq = 0;


function setup() {
  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(listening);
}


function listening() {
  console.log('listening');
  pitch = ml5.pitchDetection(
    model_url,
    audioContext,
    mic.stream,
    modelLoaded);
}


function modelLoaded() {
  console.log('model loaded');
  pitch.getPitch(gotPitch);
}


function gotPitch(error, frequency) {
  if (error) {
    console.error(error);
  } else {
    if (frequency) {
      freq = frequency;
      console.log(freq);
    }

  }
  pitch.getPitch(gotPitch);
}
