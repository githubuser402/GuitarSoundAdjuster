start_btn = document.getElementById("start-btn");
let tunesRetrieved = false;
let tunes;
start_btn.onclick = () => {
console.log("Clicked");
  navigator.mediaDevices.getUserMedia({audio:true, video: false})
  .then(handleSuccess);
}

class Thone{
//Audio element that can be played
  #audioElement;
  //audio context
  #audioCtx;
  //source node for the tune
  #audioSourceNode;
  //track name
  #audioName;

  constructor(audioElementName){
    this.#audioCtx = new AudioContext();
    this.#audioName = audioElementName;
    try{
      this.#audioElement = new Audio(audioElementName);

      this.#audioElement.oncanplay = () => {
        this.playAudio();
        console.log(`${this.#audioName} is played`);
      }

      this.#audioElement.repeat = false;
      // this.#audioSourceNode = this.#audioCtx.createMediaElementSource(this.#audioElement);

    }catch(e){
      console.log(e);
    }
  }

  //method plays audio file
  playAudio(){
    this.#audioElement.play();
  }
}

//function is executed on start button click
//also microphone permission also requiered
function handleSuccess(){
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

    tunesRetrieved = true;
  }




}













//end will be here
