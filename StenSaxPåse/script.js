let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
        return choices[randomNumber];
    }
    
function convertCase(playerChoice) {
    if (playerChoice === "paper") return "Paper";
    if (playerChoice === "scissors") return "Scissors";
        return "Rock";
}

function win(user, computer) {
    userScore++;
        userScoreSpan.innerHTML = userScore;
            const userName = " (user)"
            const compName = " (comp)"
                result.innerHTML = `<p>${convertCase(user)}${userName} beats ${convertCase(computer)}${compName}. You win!</p>`;
                    const roundStatus = document.getElementById(user);
                    roundStatus.classList.add("winningStyles");
                        setTimeout(() => roundStatus.classList.remove("winningStyles"), 300);
}

function loses(user, computer) {
    computerScore++;
        computerScoreSpan.innerHTML = computerScore;
            const userName = " (user)"
            const compName = " (comp)"
                result.innerHTML = `<p>${convertCase(computer)}${compName} beats ${convertCase(user)}${userName}. You lose!</p>`;
                    const roundStatus = document.getElementById(user);
                    roundStatus.classList.add("losingStyles");
                        setTimeout(() => roundStatus.classList.remove("losingStyles"), 300);
}

function draw(user, computer) {
     const userName = " (user)"
     const compName = " (comp)"
         result.innerHTML = `<p>It was a draw! You both chose ${convertCase(user)}</p>`;
            const roundStatus = document.getElementById(user);
                roundStatus.classList.add("drawStyles");
                    setTimeout(() => roundStatus.classList.remove("drawStyles"), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case "paperrock":
        case "rockscissors":
        case "scissorspaper":
            win(userChoice, computerChoice);
    break;
        case "rockpaper":
        case "scissorsrock":
        case "paperscissors":
            loses(userChoice, computerChoice);
    break;
        case "rockrock":
        case "scissorsscissors":
        case "paperpaper":
            draw(userChoice, computerChoice);
    break;
  }
}

function main() {
    rock.addEventListener("click", () => game("rock"));
    paper.addEventListener("click", () => game("paper"));
    scissors.addEventListener("click", () => game("scissors"));
}
main();