// Update Loop - every sinlge frame that passes is going to call a function, and that function will update positions and logic of all the elements of the game

import Ball from "./Ball.js"

const ball = new Ball(document.getElementById("ball"))

let lastTime

function update(time) {
    if (lastTime != null) {
        const delta = time - lastTime
        ball.update(delta) 
    }
    
    lastTime = time
    window.requestAnimationFrame(update)
}



window.requestAnimationFrame(update)