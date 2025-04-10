let gamesPlayed = 0;
let gamesWon= 0;
let gamesLost= 0;

let displayWon = document.getElementById('won');
let displayLost = document.getElementById('lost');
let displayPlayed = document.getElementById('played');

function flipCoin(x) {
    let pick = x;
    let choice = document.getElementById('choice');
    let flip =document.getElementById('flip');
    let result = document.getElementById('result');

  
    let randNum = Math.ceil(Math.random() * 2);
    let toss; 

    if (randNum === 1) {
        toss = 'Heads';
    } else {
        toss = 'Tails';
    }

    let status;
    if (pick === toss ) {
        status = "Won";
        gamesWon++; 
    } else {
        status = 'Lost';
        gamesLost++;
    }
    
    gamesPlayed++;

    // read-outs of the game results
    choice.innerText = pick;
    flip.innerText = toss;
    result.innerText = status; 

    //updates game history
    displayPlayed.innerText = gamesPlayed;
    displayWon.innerText = gamesWon;
    displayLost.innerText = gamesLost;
}

function resetScore() {
    gamesPlayed = 0;
    gamesWon = 0;
    gamesLost = 0;


    displayPlayed.innerText = gamesPlayed;
    displayWon.innerText = gamesWon;
    displayLost.innerText = gamesLost;
}

