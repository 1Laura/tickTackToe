const gameBlock = document.getElementById('gameBlock')
const block = document.querySelectorAll('.block')
const blocks = document.getElementsByClassName('block')
const displayPlayer1name = document.getElementById('displayPlayer1name')
const displayPlayer2name = document.getElementById('displayPlayer2name')
const modal = document.getElementById('modal')


const btnPlay = document.getElementById('btnPlay')
btnPlay.addEventListener('click', startGame)

let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let turn = true

function playersNames() {
    displayPlayer1name.innerText = player1name
    displayPlayer2name.innerText = player2name
}

function startGame(e) {
    player1name = `Player1: ${e.path[2].children[0].firstElementChild.value}`
    player2name = `Player2: ${e.path[2].children[1].firstElementChild.value}`

    gameBlock.style.display = 'flex'
    block.forEach(function (item) {
            item.style.display = 'flex'
        }
    )

    playersNames()
}


function blockClicked(event) {
    let elementBlock = event.target

    if (!elementBlock.classList.contains('o') && !elementBlock.classList.contains('x')) {
        if (turn) {
            elementBlock.classList.add('x')
            checkWin('x')
        } else {
            elementBlock.classList.add('o')
            checkWin('o')
        }
        turn = !turn
    }
}

function checkWin(symbol) {

    wins.map(x => {
        if (blocks[x[0]].classList.contains(symbol) &&
            blocks[x[1]].classList.contains(symbol) &&
            blocks[x[2]].classList.contains(symbol)) {
            modal.style.display = 'block'
            modal.innerText = `Winner is ${symbol}`
            console.log(symbol + ' wins')
        }
    })

}