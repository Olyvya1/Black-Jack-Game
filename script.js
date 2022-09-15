
let player = {
    Name: "Olive",
    Chips: 200

}
let cards = []
let sum = 0  
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message_el")
let sumEl = document.getElementById("sum_el")
let cardEl = document.getElementById("card_el")

let playerEl = document.getElementById("player_el")
playerEl.textContent = player.Name + ": $" + player.Chips  


function getRandomCard(){
    let randomNumber =  Math.floor(Math.random()*13  ) + 1
    if(randomNumber > 10) {
        return 10
    }else if (randomNumber === 1) {
        return 11
    }else{
        return randomNumber
    }
}

function startGame()  {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}
  

function renderGame() {
    cardEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if(sum <= 20) {
        message = "Do you want to draw another card?"
    }else if (sum === 21) {
        message = "Wohoo! You've got a BlackJack"
        hasBlackJack = true
    }else{
        message = "Oops! You're out of the game"
        isAlive = false
    }
    
    messageEl.textContent = message

}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
         renderGame()

    }
    
}


