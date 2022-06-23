// Update Loop - every sinlge frame that passes is going to call a function, and that function will update positions and logic of all the elements of the game

import Ball from "./Ball.js"
import Paddle from "./Paddle.js"

const ball = new Ball(document.getElementById("ball"))
const playerPaddle = new Paddle (document.getElementById("player-paddle"))
const computerPaddle = new Paddle (document.getElementById("computer-paddle"))


let lastTime

function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime
       // ball.update(delta) 
    }
    
    lastTime = time
    window.requestAnimationFrame(update)
}



window.requestAnimationFrame(update)