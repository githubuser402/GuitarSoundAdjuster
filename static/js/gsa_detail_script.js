sounds = Array.from(document.querySelectorAll(".controls .sound"));

let sound_status = document.querySelector(".sound-stat span");
let sound_correction = document.querySelector(".sound-correction");


let sounds_freq = Array();
let sound_number = 1
let current_sound_name = sounds[0].querySelectorAll(".sound-name")[0].innerText;
console.log(`Initial sound name: ${current_sound_name}`)

sounds.forEach((sound) => {
  sound.getElementsByTagName("input")[0].addEventListener("change", () => {
    audio_el = sound.getElementsByTagName("audio")[0];
    audio_el.play();
    sound_name = sound.querySelectorAll(".sound-name")[0].innerText;

    sounds.forEach(s => {
      sname = s.querySelectorAll(".sound-name")[0].innerText;
      if(sound_name != sname){
        s.classList.remove("sound-checked");
      }
      else{
        s.classList.add("sound-checked");
        // console.log(sname);
        current_sound_name = sname;
      }
    })
  })

  sounds_freq.push(
    {
      name: sound.querySelectorAll(".sound-name")[0].innerText, 
      frequency: +sound.querySelectorAll(".sound-freq")[0].innerText,
      number: sound_number
    })
    sound_number++;
})

let model_url = "/static/crepe"
let pitch;
let audioContext;
let mic;


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
      console.log(frequency);
      evaluateSound(frequency, sounds_freq, current_sound_name);
    }

  }
  pitch.getPitch(gotPitch);
}

function evaluateSound(current_freq, frequencies, current_sound){
  let sound_freq;
  frequencies.forEach(freq => {
    if(freq.name === current_sound){
      sound_freq = freq.frequency;

      if(Math.abs(sound_freq - current_freq) < 1){
        sound_status.innerText = "Perfect";
        sound_correction.innerText = "";
      }
      else{
        if(current_freq > sound_freq){
          sound_status.innerText = "High";
          sound_correction.innerText = sound_freq - current_freq;
        }
        else{
          sound_status.innerText = "Low";
          sound_correction.innerText = `+${sound_freq - current_freq}`;
        }
      }
      
    }
  })
}
