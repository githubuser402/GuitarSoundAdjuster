document.addEventListener("load", () => {
  start_btn = document.getElementById("start-btn");
  start_btn.onclick = () => {
    navigator.mediaDevices.getUserMedia({audio:true, video: false})
    .then(handleSuccess, reason = () =>{
      console.log("An error ocurred");
    })
  }

  class Thone{
    constructor(){
      
    }
  }

  function handleSuccess(){

  }
})
