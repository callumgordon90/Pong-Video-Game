export default class Ball {
    constructor(ballElem) {
        this.ballElem = ballElem
    }

    //x position
    get x() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"))
    }

    set x(value){
        this.ballElem.style.setProperty("--x", value)
    }


    //y position
    get y() {
        return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"))
    }

    set y(value){
        this.ballElem.style.setProperty("--y", value)
    }

    update(delta) {
        this.x = 5
        this.y = 15
    }
}