let audioElement = new Audio('click-sound.mp3');
let victoryAudio = new Audio("victory1.mp3");
let turn = 'X';
let gameOver = false;
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
}
// let a='FIRST';
// let b='SECOND';
let a='X';
let b='O';
// let a = prompt("Enter user name =");
// let b = prompt("Enter user name =");
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            // document.querySelector('.info').innerText= boxtext[e[0]].innerText + "won";
            // document.querySelector('.info').innerText = a + " won";
            if (turn === '0') { document.getElementsByClassName('info')[0].innerText = "Winner is " + a; }
            else { document.getElementsByClassName('info')[0].innerText = "Winner is " + b; }
            if(turn!='0')
            {
                boxtext[e[0]].innerHTML = "🔥";
                boxtext[e[1]].innerText = "🔥";
                boxtext[e[2]].innerText = "🔥";
            }
            else{
                boxtext[e[0]].innerHTML = "❌";
                boxtext[e[1]].innerText = "❌";
                boxtext[e[2]].innerText = "❌";
            }
            victoryAudio.play();
            gameOver = true;
        }
    })
}
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if (!gameOver) {
                if (turn === 'X') { document.getElementsByClassName('info')[0].innerText = "Turn is " + a; }
                else { document.getElementsByClassName('info')[0].innerText = "Turn is " + b; }
            }
            audioElement.play();
        }
    })
})

reset.addEventListener('click', () => {
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(e => {
        e.innerText = "";
        audioElement.pause();
        document.getElementsByClassName('info')[0].innerText = "............Start...........";
        gameOver = false;
    })
})
