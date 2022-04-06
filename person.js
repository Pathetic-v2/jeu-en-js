class Person extends GameObject {
    constructor(config){
        super(config);
        this.movingProgress = 16;

        this.directionUpdate = {
          "up": ["y", -1,],  
          "down": ["y", 1,], 
          "left": ["x", -1,],
          "right": ["x", 1,],    

        }
    }

    update(state){
        this.updatePosition();

        if (this.movingProgress === 0 && state.arrow){
            this.direction = state.arrow;
            this.movingProgress = 16;
        }
    }
    updatePosition() {
        if(this.movingProgress > 0) {
            const [property,change] = this.directionUpdate[this.direction];
            this[property] += change;
            this.movingProgress -= 1;
        }
    }
}