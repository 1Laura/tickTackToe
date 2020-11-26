const gameBlock = document.getElementById('gameBlock')
const block = document.querySelectorAll('.block')

const btnPlay = document.getElementById('btnPlay')
btnPlay.addEventListener('click', startGame)


const player1nameInput = document.getElementById('player1name')
const player2nameInput = document.getElementById('player2name')

const displayPlayer1name = document.getElementById('displayPlayer1name')
const displayPlayer2name = document.getElementById('displayPlayer2name')


const gameArr = []

let gameOver = false
let symbol1 = 'X'
symbol1.a
let symbol2 = 'O'

function displayGameBlock() {
    for (let i = 0; i < 9; i++) {
        index = i
        let block = document.createElement('div')
        block.classList.add('block')
        block.setAttribute('id', index)

        block.addEventListener("click", clickedBlock)

        gameBlock.appendChild(block)
        gameArr.push('')
        // console.log(gameArr)
    }
}

function playersNames() {
    displayPlayer1name.innerText = player1name
    displayPlayer2name.innerText = player2name
}

let turn = true

function clickedBlock(event) {
    let el = event.target
    if (!el.classList.contains('o') && !el.classList.contains('x')) {
        if (turn) {
            el.classList.add('x')
            checkWin('x')
        } else {
            el.classList.add('o')
            checkWin('o')
        }
        turn = !turn
    }
}

function startGame(e) {
    player1name = `Player1: ${e.path[2].children[0].firstElementChild.value}`
    player2name = `Player2: ${e.path[2].children[1].firstElementChild.value}`

    displayGameBlock()
    playersNames()
}

function checkWin(symbol) {
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
    wins.map(x => {
        if (block[x[0]].classList.contains(symbol) &&
            block[x[1]].classList.contains(symbol) &&
            block[x[2]].classList.contains(symbol)) {
            console.log(symbol = 'wins')

        }

    })
}

