export default class Ball {
    constructor(ballElem) {
        this.ballElem = ballElem
        this.reset()
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

    reset(){
        this.x = 50 
        this.y = 50
        this.direction = { x: 0.75, y: 0.5 }
        while (true) {
            const heading = randomNumberBetween(0 , 2 * Math.PI)
            this.direction = { x: Math.cos(heading), y: Math.sin(heading) }
        }
    }

    update(delta) {
        this.x = 5
        this.y = 15
    }
}