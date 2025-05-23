
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