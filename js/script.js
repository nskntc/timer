const playButton = document.querySelector("#play")
const stopButton = document.querySelector("#stop")
const plusButton = document.querySelector("#plus-five")
const lessButton = document.querySelector("#less-five")
let timer = document.querySelector(".numbers")
let minutes = Number(document.querySelector("#minutes").innerText)
let seconds = Number(document.querySelector("#seconds").innerText)
let timerTimeCount
let verifyTimerCountDown = false

const florestCard = document.querySelector("#florest")
const rainCard = document.querySelector("#rain")
const coffeCard = document.querySelector("#coffe-shop")
const bonfireCard = document.querySelector("#bonfire")
const cards = document.querySelectorAll(".card")

let audio = []
audio[0] = document.querySelector("#florest-audio")
audio[1] = document.querySelector("#rain-audio")
audio[2] = document.querySelector("#coffe-audio")
audio[3] = document.querySelector("#bonfire-audio")

function timerCountDown() {
    verifyTimerCountDown = true
    timerTimeCount = setTimeout(function () {
        if(minutes <= 0 && seconds == 0) {
            verifyTimerCountDown = false
            timer.innerHTML = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
            return
        }
        if(seconds <= 0) {
            minutes--
            seconds = 59
        }
        timer.innerHTML = `${String(minutes).padStart(2, '0')}:${String(seconds--).padStart(2, '0')}`
        timerCountDown()
    }, 1000)
}

playButton.addEventListener("click", () => {
    if(!verifyTimerCountDown) timerCountDown()
})

stopButton.addEventListener("click", () => {
    clearTimeout(timerTimeCount)
    verifyTimerCountDown = false
})

plusButton.addEventListener("click", () => {
    minutes += 5
    timer.innerHTML = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
})

lessButton.addEventListener("click", () => {
    if(minutes >= 5) minutes -= 5
    else minutes = 0
    timer.innerHTML = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
})

for(let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", () => {
        let cardSelected = document.querySelector(".isSelected")
        if(cardSelected) {
            cardSelected.classList.add("card")
            cardSelected.classList.remove("isSelected")
            for(let c = 0; c < cards.length; c++) if(i != c) audio[c].pause()
        }
    
        cards[i].classList.add("isSelected")
        cards[i].classList.remove("card")
        audio[i].play()
    })
}