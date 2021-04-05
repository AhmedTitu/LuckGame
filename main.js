const luckyNoDisplay = document.querySelector('#winningNoDis');
const luckyNoBtn = document.querySelector('#luckyNoBtn');
const winnerNameDisplay = document.querySelector('#winnerName');
const player1GuessNoDisplay = document.querySelector('#player1GuessNo');
const player2GuessNoDisplay = document.querySelector('#player2GuessNo');
const player1Btn = document.querySelector('#player1Btn');
const player2Btn = document.querySelector('#player2Btn');
const resetBtn = document.querySelector('#resetBtn');
const congratulationImg = document.querySelector('#congratulation');

congratulationImg.style.display = "none";

let luckyNumber= 0;
let player1Number = 0;
let player2Number = 0;
let p1Clicked = true;
let p2Clicked = true;

let player1Span = 0 ;
let player2Span = 0 ;

    function playerSpanFunc(){
        if (player1Span === 5){
            alert('Game Over') , reset()

        } else if (player2Span === 5){
            alert('Game Over') , reset()
        }
    };


    function winner(oldScore , luckyNumber){
        if(oldScore === luckyNumber){
            if(player1Number === luckyNumber && player1Number > 1){
                winnerNameDisplay.textContent = 'Player One'
                luckyNoBtn.setAttribute('disabled' , 'disabled')
                player1Btn.setAttribute('disabled' , 'disabled')
                player2Btn.setAttribute('disabled' , 'disabled')
                congratulationImg.style.display = "block"
                
            }else if (player2Number === luckyNumber && player2Number > 1){
                winnerNameDisplay.textContent = 'Player Two'
                luckyNoBtn.setAttribute('disabled' , 'disabled')
                player1Btn.setAttribute('disabled' , 'disabled')
                player2Btn.setAttribute('disabled' , 'disabled')
                congratulationImg.style.display = "block"
                } 
            }
        };

    function reset(){
        luckyNumber = 0
        player1Number = 0
        player2Number = 0
        winnerNameDisplay.textContent = 'Please Continue Trying'
        luckyNoDisplay.textContent = "?"
        player1GuessNoDisplay.textContent = "?"
        player2GuessNoDisplay.textContent = "?"
        luckyNoBtn.removeAttribute('disabled')
        player1Btn.removeAttribute('disabled')
        player2Btn.removeAttribute('disabled')
        congratulationImg.style.display = "none"
    };

    function validation(){
        if (luckyNumber === 0){
         alert('At First You Have To Get A Lucky Number') , reset()
        }
    };

    function fareGame1(){
        if(p1Clicked === false){
            player1Btn.setAttribute('disabled' , 'disabled')
            player2Btn.removeAttribute('disabled')
         }
    };
         
    function fareGame2(){
        if(p2Clicked === false){
        player2Btn.setAttribute('disabled' , 'disabled')
        player1Btn.removeAttribute('disabled')
        // p1Clicked = true
        }
    };

luckyNoBtn.addEventListener('click' , () => {
    luckyNumber = Math.floor(Math.random()* 10 ) + 1
    luckyNoDisplay.textContent = luckyNumber
    }
);

player1Btn.addEventListener('click' , () => {
    player1Number = Math.floor(Math.random() * 10) + 1
    player1GuessNoDisplay.textContent = player1Number
    p1Clicked = !p1Clicked
    winner(player1Number , luckyNumber)
    validation()
    fareGame1()
    player1Span++;
    playerSpanFunc()
});

player2Btn.addEventListener('click' , () => {
    player2Number = Math.floor(Math.random() * 10) + 1
    player2GuessNoDisplay.textContent = player2Number
    p2Clicked = !p2Clicked
    winner(player2Number , luckyNumber)
    validation()
    fareGame2()
    player2Span++;
    playerSpanFunc()
});
resetBtn.addEventListener('click', reset)
