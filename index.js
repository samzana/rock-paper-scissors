//function to randomly generate choice of PC
let container = document.getElementById("container")
let dup = container.innerHTML

//function to display tie and provide try again option
function resolveTie(object) {
    pageContent = `
            <h2> Tie </h2>
            <p> CPU draw same as yours: ${object}
            <button onclick="tryAgain()"> Try Again </button>
    `
    container.innerHTML = pageContent
}

//function  to display win
function declareWinner(object) {
    pageContent = `
            <h2> CPU's draw: ${object} </h2>
            <p> You win :) </p>
            <button onclick="tryAgain()"> Try Again </button>
        `
    container.innerHTML = pageContent
}

//function to display loss
function declareLoss(object) {
    pageContent = `
            <h2> CPU's draw: ${object} </h2>
            <p> You lose :( </p>
            <button onclick="tryAgain()"> Try Again </button>
        `
    container.innerHTML = pageContent
}

//try again function
function tryAgain() {
    container.innerHTML = dup
}

//generate random number to determine CPU draw as follows: 1->rock, 2->paper, 3->scissors
function pcChoice() {
    return Math.floor( Math.random() * 3 ) + 1
}

function rock() {
    let choice = pcChoice()
    //if pc choice = 1 display pc choice as rock and prompt user to pick again
    if (choice === 1) {
        resolveTie("rock")
    } else if (choice === 2) {
        declareLoss("paper")
    } else {
        declareWinner("scissors")
    }
}

function paper() {
    let choice = pcChoice()
    if (choice === 1) {
        declareWinner("rock")
    } else if (choice === 2) {
        resolveTie("paper")
    } else {
        declareLoss("scissors")
    }
}

function scissors() {
    let choice = pcChoice()
    if (choice === 1) {
        declareLoss("rock")
    } else if (choice === 2) {
        declareWinner("paper")
    } else {
        resolveTie("scissors")
    }   
}