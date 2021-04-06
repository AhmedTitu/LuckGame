;(function () {
  const luckyNoDisplay = document.querySelector('#winningNoDis')
  const luckyNoBtn = document.querySelector('#luckyNoBtn')
  const winnerNameDisplay = document.querySelector('#winnerName')
  const player1GuessNoDisplay = document.querySelector('#player1GuessNo')
  const player2GuessNoDisplay = document.querySelector('#player2GuessNo')
  const player1Btn = document.querySelector('#player1Btn')
  const player2Btn = document.querySelector('#player2Btn')
  const resetBtn = document.querySelector('#resetBtn')
  const congratulationImg = document.querySelector('#congratulation')

  congratulationImg.style.display = 'none'

  let luckyNumber = null

  function player(number = 0, clicked = false, lifespan = 5) {
    return {
      number,
      clicked,
      lifespan
    }
  }

  const player1 = player()
  const player2 = player()

  //after finishing the chance of players, automatically reset the game
  function getDefaultPlayState() {
    if (player1.lifespan === 0 || player2.lifespan === 0) {
      alert('No One wins, Play Again')
      //Reset the game
      reset()
    }
  }

  function checkWinner(playerScore, luckyNumber, player) {
    if (playerScore === luckyNumber && player === 'player1') {
      winnerNameDisplay.textContent = 'Player One'
      luckyNoBtn.setAttribute('disabled', 'disabled')
      player1Btn.setAttribute('disabled', 'disabled')
      player2Btn.setAttribute('disabled', 'disabled')
      congratulationImg.style.display = 'block'
    } else if (playerScore === luckyNumber && player === 'player2') {
      winnerNameDisplay.textContent = 'Player Two'
      luckyNoBtn.setAttribute('disabled', 'disabled')
      player1Btn.setAttribute('disabled', 'disabled')
      player2Btn.setAttribute('disabled', 'disabled')
      congratulationImg.style.display = 'block'
    }
  }

  function reset() {
    luckyNumber = null
    player1.number = 0
    player2.number = 0
    player1.lifespan = 5
    player2.lifespan = 5
    winnerNameDisplay.textContent = 'Please Continue Trying'
    luckyNoDisplay.textContent = '?'
    player1GuessNoDisplay.textContent = '?'
    player2GuessNoDisplay.textContent = '?'
    luckyNoBtn.removeAttribute('disabled')
    player1Btn.removeAttribute('disabled')
    player2Btn.removeAttribute('disabled')
    congratulationImg.style.display = 'none'
  }

  function checkLuckyNumBeforePlay() {
    if (!luckyNumber) {
      alert('At First You Have To Get A Lucky Number')
      return false
    } else {
      return true
    }
  }

  function disablePlayerBtn(player) {
    if (player === 'player1') {
      console.log('Running')
      switch (player1.clicked) {
        case true:
          player1Btn.setAttribute('disabled', 'disabled')
          player2Btn.removeAttribute('disabled')
          break
        case false:
          player1Btn.removeAttribute('disabled')
          player2Btn.setAttribute('disabled', 'disabled')
          break
        default:
          player1Btn.removeAttribute('disabled')
          player2Btn.removeAttribute('disabled', 'disabled')
      }
    } else {
      switch (player2.clicked) {
        case true:
          player2Btn.setAttribute('disabled', 'disabled')
          player1Btn.removeAttribute('disabled')
          break
        case false:
          player2Btn.removeAttribute('disabled')
          player1Btn.setAttribute('disabled', 'disabled')
          break
        default:
          player1Btn.removeAttribute('disabled')
          player2Btn.removeAttribute('disabled', 'disabled')
      }
    }
  }
  function pickLuckyNum() {
    reset()
    return Math.floor(Math.random() * 10) + 1
  }

  luckyNoBtn.addEventListener('click', () => {
    luckyNumber = pickLuckyNum()
    luckyNoDisplay.textContent = luckyNumber
  })

  player1Btn.addEventListener('click', () => {
    const isLuckyNumberDefined = checkLuckyNumBeforePlay()
    if (!isLuckyNumberDefined) return

    player1.number = Math.floor(Math.random() * 10) + 1
    player1GuessNoDisplay.textContent = player1.number

    player1.clicked = true

    player1.lifespan--
    getDefaultPlayState()

    disablePlayerBtn('player1')
    checkWinner(player1.number, luckyNumber, 'player1')
  })

  player2Btn.addEventListener('click', () => {
    const isLuckyNumberDefined = checkLuckyNumBeforePlay()
    if (!isLuckyNumberDefined) return

    player2.number = Math.floor(Math.random() * 10) + 1
    player2GuessNoDisplay.textContent = player2.number
    player2.clicked = true
    player2.lifespan--

    disablePlayerBtn('player2')
    getDefaultPlayState()

    checkWinner(player2.number, luckyNumber, 'player2')
  })

  resetBtn.addEventListener('click', reset)
})()
