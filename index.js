<<<<<<< HEAD

let userScore=0;
let compScore=0;

const msg = document.querySelector("#msg");
const updUserScore = document.querySelector("#user-score");
const updCompScore = document.querySelector("#comp-score");

const compChoice = () => {
    let option = ["rock","paper","scissor"];
    let randomIdx =Math.floor(Math.random()*option.length);
    return option[randomIdx];
}

const playGame = (userChoice) => {
    let computerChoice =compChoice();
    if (userChoice===computerChoice){
        msg.innerText = "Game was Draw. Play again.";
        msg.style.backgroundColor = "rgb(8, 1, 45)";
    }else if ((userChoice === "rock" && computerChoice == "scissor") || 
              (userChoice == "paper" && computerChoice == "rock") || 
              (userChoice == "scissor" && computerChoice == "paper")){
        userScore +=1;                
        updUserScore.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore +=1;
        updCompScore.innerText = compScore;
        msg.innerText = `You lost. ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const choices=document.querySelectorAll(".options");

choices.forEach( (options) =>{
    options.addEventListener("click", () =>{
        const userChoice = options.getAttribute("id")
        playGame(userChoice);
    })
});
=======
var numberOfDrumButtons= document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfDrumButtons; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click",function() {
  var buttoninnerHTML= this.innerHTML;

  switch(buttoninnerHTML){
    case 'w':
    var audio= new Audio('sounds/crash.mp3');
    audio.play();
    break;
    case 'a':
    var audio= new Audio('sounds/kick-bass.mp3');
    audio.play();
    break;
    case 's':
    var audio= new Audio('sounds/snare.mp3');
    audio.play();
    break;
    case 'd':
    var audio= new Audio('sounds/tom-1.mp3');
    audio.play();
    break;
    case 'j':
    var audio= new Audio('sounds/tom-2.mp3');
    audio.play();
    break;
    case 'k':
    var audio= new Audio('sounds/tom-3.mp3');
    audio.play();
    break;
    case 'l':
    var audio= new Audio('sounds/tom-4.mp3');
    audio.play();
    break;
  }
})
};

var audio= new Audio('sounds/tom-1.mp3');
audio.play();
    
>>>>>>> 3fdbb222e811322797f5c0eb37767797d71785f5
