//this function allows to retrieve the corresponding drum sound
function getSound(button){
  switch(button){
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
      alert("No valid key/button was pressed")
      break;
  }  
}

//this function will change the button color to yellow when matching keys are pressed
function changeColor(key){
  switch(key){
    case "w":
      document.querySelectorAll(".drum")[0].style.color = "yellow";
      break;
    case "a":
      document.querySelectorAll(".drum")[1].style.color = "yellow";
    break;
    case "s":
      document.querySelectorAll(".drum")[2].style.color = "yellow";
    break;
    case "d":
      document.querySelectorAll(".drum")[3].style.color = "yellow";
    break;
    case "j":
      document.querySelectorAll(".drum")[4].style.color = "yellow";
    break;
    case "k":
      document.querySelectorAll(".drum")[5].style.color = "yellow";
    break;
    case "l":
      document.querySelectorAll(".drum")[6].style.color = "yellow";
    break;
    default:
      break;    
  }
}

//when clicking buttons each drum sound is played
for (var i = 0; i < document.querySelectorAll(".drum").length; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
  
    this.style.color = "red";
  
    getSound(this.id);
  })
}

//when pressing every key matching the buttons letters the corresponding drum sound is played
  document.addEventListener("keypress", function(e){
    
    changeColor(e.key);

    getSound(e.key);
  })

