start_btn = document.getElementById("start-btn");
let tunesRetrieved = false;
let tunes;
let microphoneContext;
let microphoneSource;
let microphoneProcessor;
let microphoneAnalyser;

start_btn.onclick = () => {
console.log("Clicked");
  navigator.mediaDevices.getUserMedia({audio:true, video: false})
  .then(handleSuccess);
}

class Thone{
  //audio context
  #audioCtx;
  //source node for the tune
  #audioSourceNode;
  //track name
  #audioName;
  //buffer for the audio
  #audioBuffer;
  //offline context
  #offlineCtx;
  //frequency buffer
  #freqBuffer

  #loadAudio(audioName){
    const request = new XMLHttpRequest();
    request.open("GET", audioName);
    request.responseType = "arraybuffer";
    request.onload = () => {
      let undecodedAudio = request.response;
      this.#audioCtx.decodeAudioData(undecodedAudio, (data) => {this.#audioBuffer = data;});
    }
    request.send();
  }

  //get the frequency array of the audio
  #findFrequecy(){
    let analyser = this.#audioCtx.createAnalyser();
    freqBuffer = new Float32Array();                                            //ended Q
  }

  constructor(audioElementName){
    //creating audio context object
    this.#audioCtx = new AudioContext();



    //loading audio file from the server
    this.#loadAudio(audioElementName);

    //audio file name may be used later
    this.#audioName = audioElementName;
  }

  //method plays audio file
  playAudio(){
    const source = this.#audioCtx.createBufferSource();
    source.buffer = this.#audioBuffer;
    source.connect(this.#audioCtx.destination);
    source.start();
  }
}


let freqDomain;
//function is executed on start button click
//also microphone permission also requiered
function handleSuccess(stream){
  //first click
  if(!tunesRetrieved){
    //requesting tunes from the server
    tunes = {
      D: new Thone("/media/tunes/d3.mp3"),
      A: new Thone("/media/tunes/a2.mp3"),
      El: new Thone("/media/tunes/e2.mp3"),
      G: new Thone("/media/tunes/g3.mp3"),
      B: new Thone("/media/tunes/b3.mp3"),
      Er: new Thone("/media/tunes/e4.mp3")
    };

    //attaching corresponding sound to each radio button
    strings = document.querySelectorAll(".tune");
    console.log(strings);
    for(let string of strings){
      string.onclick = () => {
        tunes[string.id].playAudio();
      };
    }

    //changing text on start button
    start_btn.innerText = "Sound Enabled";

    //creating context for the microphone
    microphoneContext = new AudioContext();
    //creating source for the microphone
    microphoneSource = microphoneContext.createMediaStreamSource(stream);
    //creating microphone analyser node
    microphoneAnalyser = microphoneContext.createAnalyser();
    microphoneAnalyser.minDecibels = -100;
    microphoneAnalyser.maxDecibels = -10;
    microphoneAnalyser.smoothingTimeConstant = 0.85;

    // microphoneProcessor = microphoneContext.createScriptProcessor(4096, 1, 1);

    // microphoneProcessor.onaudioprocess = (audioProcessEvent) => {
    //   let inputBuffer = audioProcessEvent.inputBuffer;
    //   freqDomain = new Float32Array(microphoneAnalyser.fftSize);
    //   microphoneAnalyser.getFloatFrequencyData(freqDomain);
    //   console.log(freqDomain);
    // }

    //creating conection between nodes
    microphoneSource.connect(microphoneAnalyser);
    // microphoneProcessor.connect(microphoneAnalyser);
    microphoneAnalyser.connect(microphoneContext.destination);

    //start button works only one time
    tunesRetrieved = true;
  }
  setInterval(() => {
    freqDomain = new Float32Array(microphoneAnalyser.fftSize);
    microphoneAnalyser.getFloatTimeDomainData(freqDomain);
    console.log(freqDomain);


  }, 1000);
}













//end will be here
