// let tanya = true;
// while( tanya ){
//     // get player choice
//     let p = prompt('Choose : Rock, Paper, Scissor');
//     if(p !='Rock' && p !='Paper' && p !='Scissor'){
//         alert('Wrong input');
//         continue;
//     }

//     // catch computer choice
//     let comp = Math.round((Math.random() * 3) +1);

//     if(comp == 1){
//         comp = 'Rock';
//     } else if(comp == 2){
//         comp = 'Paper';
//     } else{
//         comp = 'Scissor';
//     }

//     let hasil = "";
//     if(p == comp){
//         hasil = "DRAW";
//     }
//     else if(p == "Rock"){
//         hasil = (comp == 'Scissor') ? 'WIN' : 'LOSE';
//     }
//     else if(p == "Paper"){
//         hasil = (comp == 'Rock') ? 'WIN' : 'LOSE';
//     }
//     else if(p == "Scissor"){
//         hasil = (comp = "Paper") ? 'WIN' : 'LOSE';
//     }
// }


function getComputerChoice(){
    let comp = Math.floor(Math.random() * 3) +1;

    if(comp == 1) return 'rock';
    if(comp == 2) return 'paper';
    if(comp == 3) return 'scissors';
}

function getResult(comp, player){
    if(player == comp) return 'DRAW';
    if(player == 'rock') return (comp == "scissors") ? 'WIN' : 'LOSE';
    if(player == 'paper') return (comp == 'rock') ? 'WIN' : 'LOSE';
    if(player == 'scissors') return (comp == 'paper') ? 'WIN' : 'LOSE'; 
}


function roll(){
    const imgComputer = document.querySelector('.img-comp');
    const image = ['rock','paper','scissors'];
    let i = 0;
    const startTime = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - startTime > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'image/' + image[i++] + '.png');
        if(i == image.length) i=0;
        
    }, 100);
}

let compScore = 0;
let playerScore = 0;

const choice = document.querySelectorAll('li img');
choice.forEach(function(ch){
    ch.addEventListener('click', function(){
        let playerChoice;
        const computerChoice = getComputerChoice();
        if(ch.className == 'scissor'){
            playerChoice = ch.className + 's';
        }
        else{
            playerChoice = ch.className;
        }

        const result = getResult(computerChoice, playerChoice);

        roll();

        setTimeout(function(){
        const imgComputer = document.querySelector('.img-comp');
        imgComputer.setAttribute('src', 'image/'+ computerChoice +'.png');

        const score = document.querySelector('.score-area');
        const computerPoint = document.querySelector('.comp-score');
        const playerPoint = document.querySelector('.player-score');

        if(result == 'WIN'){
            playerScore++;
            playerPoint.innerHTML = 'Score = '+ playerScore;
        }
        if(result == 'LOSE'){
            compScore++;
            computerPoint.innerHTML = 'Score = '+ compScore;
        } 
        
        score.innerHTML = result;
        }, 1000);
    });
});

// const pRock = document.querySelector('.rock');
// pRock.addEventListener('click', function(){
//     const computerChoice = getComputerChoice();
//     const playerChoice = pRock.className;
//     const result = getResult(computerChoice, playerChoice);

//     const imgComputer = document.querySelector('.img-comp');
//     imgComputer.setAttribute('src', 'image/'+ computerChoice +'.png');

//     const score = document.querySelector('.score-area');
//     score.innerHTML = result;
// });

// const pPaper = document.querySelector('.paper');
// pPaper.addEventListener('click', function(){
//     const computerChoice = getComputerChoice();
//     const playerChoice = pPaper.className;
//     const result = getResult(computerChoice, playerChoice);

//     const imgComputer = document.querySelector('.img-comp');
//     imgComputer.setAttribute('src', 'image/'+ computerChoice +'.png');

//     const score = document.querySelector('.score-area');
//     score.innerHTML = result;
// });

// const pScissor = document.querySelector('.scissor');
// pScissor.addEventListener('click', function(){
//     const computerChoice = getComputerChoice();
//     const playerChoice = pScissor.className + 's';
//     const result = getResult(computerChoice, playerChoice);

//     const imgComputer = document.querySelector('.img-comp');
//     imgComputer.setAttribute('src', 'image/'+ computerChoice +'.png');

//     const score = document.querySelector('.score-area');
//     score.innerHTML = result;
// });
