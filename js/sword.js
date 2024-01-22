let audioM;
audioM.paused;

  function pauseMel(){
    if(audioM && !audioM.paused){
      audioM.loop=false;
      audioM.pause();
      audioM.currentTime = 0;
    }
  }

  function playMelody(value){
    pauseMel();
    audioM = new Audio();
    audioM.src = value;
    audioM.loop = true;
    audioM.play();
  }