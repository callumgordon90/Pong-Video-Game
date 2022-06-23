// Update Loop - every sinlge frame that passes is going to call a function, and that function will update positions and logic of all the elements of the game

import Ball from "./Ball.js"
import Paddle from "./Paddle.js"

const ball = new Ball(document.getElementById("ball"))
const playerPaddle = new Paddle(document.getElementById("player-paddle"))
const computerPaddle = new Paddle(document.getElementById("computer-paddle"))
const playerScoreElem = document.getElementById("player-score")
const computerScoreElem = document.getElementById("computer-score")

let lastTime

//function to control the movement of the ball:
function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime
        ball.update(delta, [playerPaddle.rect(), computerPaddle.rect()])  // THE LINE WHICH STARTS THE BALL MOVING
        computerPaddle.update(delta, ball.y)

        // function to change the hues of the background automatically:
        const hue = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hue"))
        document.documentElement.style.setProperty("--hue", hue + delta * .01)

        if (isLose()) handleLose()
    }

    lastTime = time
    window.requestAnimationFrame(update)
}

//if the ball goes out of bounds you lose
function isLose() {
    const rect = ball.rect()
    return rect.right >= window.innerWidth || rect.left <= 0
}

//funtion to reset the game when the ball goes out of bounds:
function handleLose() {
    const rect = ball.rect()
    if (rect.right >= window.innerWidth) {
        playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1
    } else {
        computerScoreElem.textContent = parseInt(computerScoreElem.textContent) + 1
    }


    ball.reset()
    computerPaddle.reset()
}

document.addEventListener("mousemove", e => {
    playerPaddle.position = (e.y / window.innerHeight) * 100
})


window.requestAnimationFrame(update)