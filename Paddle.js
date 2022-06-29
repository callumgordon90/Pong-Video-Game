//speed limit of computer paddle to make sure it isnt invincible:
const SPEED = 0.02

export default class Paddle {
  constructor(paddleElem) {
    this.paddleElem = paddleElem
    this.reset()
  }

  get position() {
    return parseFloat(
      getComputedStyle(this.paddleElem).getPropertyValue("--position")
    )
  }

  set position(value) {
    this.paddleElem.style.setProperty("--position", value)
  }

  rect() {
    return this.paddleElem.getBoundingClientRect()
  }

  reset() {
    this.position = 50
  }

  //function to control computer paddle position:
  update(delta, ballHeight) {
    this.position += SPEED * delta * (ballHeight - this.position)
  }
}