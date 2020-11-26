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

function clickedBlock(event) {
    console.log(event)
    block.innerHTML = symbol1
    console.log(symbol2)

}


function startGame(e) {
    player1name = `Player1: ${e.path[2].children[0].firstElementChild.value}`
    player2name = `Player2: ${e.path[2].children[1].firstElementChild.value}`

    displayGameBlock()
    playersNames()
    console.log(e)
}


// const displayGameBlock = (() => {
// function displayNames(player1name, player2name) {
//     displayPlayer1name.innerText = player1name
//     displayPlayer2name.innerText = player2name
// }
// function startGame(e) {
// player1name = `Player1: ${e.path[2].children[0].firstElementChild.value}`
// player2name = `Player2: ${e.path[2].children[1].firstElementChild.value}`

// playGame(player1name, player2name)
// displayNames(player1name, player2name)
// }

// btnPlay.addEventListener('click', function () {
//     startGame()
//     updateTurnDisplay(true, false)
// })
//
//     const updateTurnDisplay = (player1turn, player2turn) => {
//
//     }
//
//     return {gameArr, player1name, player2name, updateTurnDisplay}
// })()

//
// const createPlayers = (playerName, marker, value) => {
//     const mark = function (e) {
//         e.target.textContent = marker;
//         displayGameBlock.gameArr[e.target.dataset.index] = value
//     }
//     return {playerName, mark, value}
// }
//
//
// const playGame = (displayPlayer1name, displayPlayer2name) => {
//     const player1 = createPlayers(displayPlayer1name, 'X', 1)
//     const player2 = createPlayers(displayPlayer2name, 'O', 2)
//
//
//     console.log(player1)
//     block.forEach(function (item) {
//         item.addEventListener('click', function (event) {
//             // if(event.target.tex){
//             //
//             // }
//             console.log(event)
//         })
//     })
//
// }


