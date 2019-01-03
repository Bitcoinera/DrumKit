for (var i = 0; i < document.querySelectorAll(".drum").length; i++){
  
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    
    this.style.color = "red";
    
    switch(this.id){
      case "w":
        var crash = new Audio("sounds/crash.mp3").play();
        break;
      case "a":
        var kickbass = new Audio("sounds/kick-bass.mp3").play();
        break;
      case "s":
        var snare = new Audio("sounds/snare.mp3").play();
        break;
      case "d":
        var tom1 = new Audio("sounds/tom-1.mp3").play();
        break;
      case "j":
        var tom2 = new Audio("sounds/tom-2.mp3").play();
        break;
      case "k":
        var tom3 = new Audio("sounds/tom-3.mp3").play();
        break;
      case "l":
        var tom4 = new Audio("sounds/tom-4.mp3").play();
        break;
      default:
        break;
    }      
  })
}



