class DirectionInput {
    constructor(){
        this.helfDirection = [];

        this.map = {
            "KeyW": "up",
            "ArrowUp": "up" ,
            "KeyS": "down",
            "ArrowDown": "down",
            "KeyA": "left",
            "ArrowLeft": "left",
            "KeyD": "right",
            "ArrowRight": "right",                 
        }
    }

    get direction() {
        return this.helfDirection[0];
    }

    init(){
        document.addEventListener("keydown", e => {
            const dir = this.map[e.code];
            if (dir && this.helfDirection.indexOf(dir)=== -1){
                this.helfDirection.unshift(dir);
                console.log(this.helfDirection);
            }
        });
        document.addEventListener("keyup", e => {
            const dir = this.map[e.code];
            const index = this.helfDirection.indexOf(dir);
            if (index > -1){
                this.helfDirection.splice(index, 1);
                console.log(this.helfDirection);

            }
        })
    }
}