for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
  
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    
    this.style.color = "red";
    
    switch(this.id){
      case "w":
        var drum_sound = new Audio("sounds/crash.mp3").play();
        break;
      case "a":
        var drum_sound = new Audio("sounds/kick-bass.mp3").play();
        break;
      case "s":
        var drum_sound = new Audio("sounds/snare.mp3").play();
        break;
      case "d":
        var drum_sound = new Audio("sounds/tom-1.mp3").play();
        break;
      case "j":
        var drum_sound = new Audio("sounds/tom-2.mp3").play();
        break;
      case "k":
        var drum_sound = new Audio("sounds/tom-3.mp3").play();
        break;
      case "l":
        var drum_sound = new Audio("sounds/tom-4.mp3").play();
        break;
      default:
        break;
    }      
  })
}



