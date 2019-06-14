//function to play a corresponding audio when a button is pressed
window.addEventListener('keydown',function(e){
const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
   if(!audio) return; //if no audio for key is not found, stop the function;
   audio.currentTime=0; //rewind audio to the start
   audio.play();
   key.classList.add('playing');
});

//end the transition
function removeTransition(e){
 if(e.propertyName!=='transform') return; //skip it if it is not a transform 
 this.classList.remove('playing');
}

keys=document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend',removeTransition);
});