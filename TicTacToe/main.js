const cells = document.querySelectorAll('.cell');
const restartButton = document.getElementById('restartButton');
const statusTxt = document.getElementById('status');

const winning_combination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let score = {
    playerX : 0,
    playerO : 0
}

let x = "<img src='icon/x.png'>";
let o = "<img src='icon/o.png'>";
let currPlayer = x;
let player = "X";
let opts = ["", "", "", "", "", "", "", "", ""];
let running = false;

const playerX = document.getElementById('X');
const playerO = document.getElementById('O');

startGame();

function startGame() {
    cells.forEach(cell => cell.addEventListener('click', cellClicked));
    restartButton.addEventListener('click', restartGame);
    playerStatus();
    running = true;
}

function cellClicked() {
    let cellIndex = this.getAttribute("data-index");

    if (opts[cellIndex] !== "" || !running) return;
    updateCell(this, cellIndex);
    checkWinner();
}

function updateCell(cell, index) {
    opts[index] = player;
    cell.innerHTML = currPlayer;
}

function changePlayer() {
    player = (player === "X") ? "O" : "X";
    currPlayer = (currPlayer === x) ? o : x;
    playerStatus();
}

function checkWinner() {
    let isWon = false;
    for (let i = 0; i < winning_combination.length; i++) {
        const [a, b, c] = winning_combination[i];
        const cell1 = opts[a];
        const cell2 = opts[b];
        const cell3 = opts[c];

        if (cell1 === "" || cell2 === "" || cell3 === "") {
            continue;
        }

        if (cell1 === cell2 && cell2 === cell3) {
            isWon = true;
            break;
        }
    }

    if (isWon) {
        statusTxt.textContent = `${player} wins!`;
        updateScore();
        running = false;
    } else if (!opts.includes("")) {
        statusTxt.textContent = 'Draw!';
        running = false;
    } else {
        changePlayer();
    }
}

function restartGame() {
    opts = ["", "", "", "", "", "", "", "", ""];
    currPlayer = x;
    player = "X";
    running = true;
    playerStatus();

    cells.forEach(cell => {
        cell.innerHTML = '';
    });
}


function playerStatus(){
    playerX.classList.toggle('active', player === 'X')
    playerO.classList.toggle('active', player === 'O');
}

function updateScore(){
    if(player === 'X'){
        score.playerX++;
        document.getElementById('playerX').textContent = `${score.playerX}`
    }
    else{
        score.playerO++;
        document.getElementById('playerO').textContent = `${score.playerO}`
    }
}