//speed limit of computer paddle to make sure it isnt invincible:
const SPEED = 0.2

export default class Paddle {
    constructor(paddleElem) {
        this.paddleElem = paddleElem
    }

    get position() {
        return parseFloat(getComputedStyle(this.paddleElem).getPropertyValue("--position"))
    }

    set position(value) {
        this.paddleElem.style.setProperty("--position", value)
    }


    //function to control computer paddle position:
    update(delta, ballHeight) {
        this.position += SPEED * delta * (ballHeight - this.position)
    }




}
