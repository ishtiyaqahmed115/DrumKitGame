function drumSound(key){
    var audio;
   
    
    switch(key){
        case 'w':
            audio = new Audio('sounds/tom-1.mp3');
            break;
        case 'a':
            audio = new Audio('sounds/tom-2.mp3');
            break;
        case 's':
            audio = new Audio('sounds/tom-3.mp3');
            break;
        case 'd':
            audio = new Audio('sounds/tom-4.mp3');
            break;
        case 'j':
            audio = new Audio('sounds/snare.mp3');
            break;
        case 'k':
            audio = new Audio('sounds/crash.mp3');
            break;
        case 'l':
            audio = new Audio('sounds/kick-bass.mp3');
            break;
        default:
            audio = new Audio('sounds/tom-1.mp3');
            break;   
            
    }
    audio.play();
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    console.log("Active Button : "+activeButton);
    activeButton.classList.add("pressed");
    var timeout = 100;
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, timeout);
}

var allButtons = document.querySelectorAll("button");
for(var i = 0 ; i < allButtons.length ; i++){
    console.log(allButtons[i].addEventListener("click",function (){
        drumSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    }));
}
document.addEventListener("keydown",function(event){
    drumSound(event.key);
    buttonAnimation(event.key);

});
