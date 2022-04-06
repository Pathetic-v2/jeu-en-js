class Overworld {
    constructor(config) {
    this.element = config.element
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d")
    this.map = null;
    }
    // Game lOOP  TO LOAD OUR IMAGE     
    startGameLoop() {
        const step = () => {
            //clear off the canvas
            this.ctx.clearRect(0,0, this.canvas.width , this.canvas.height);

            // draw map
            this.map.drawLowerImage(this.ctx)

            // draw game object
            Object.values(this.map.gameObjects).forEach(object => {
                // Mouvement 
                object.update({
                    arrow: this.directionInput.direction
                })
                //draw
                object.sprite.draw(this.ctx)
            })

            //draw
            requestAnimationFrame(() =>{
                step();
            })
        }
        step();
    }
    init() {
        this.map = new OverworldMap(window.OverworldMaps.demoRoom);
        
        this.directionInput = new DirectionInput();
        this.directionInput.init();
        this.directionInput.direction;

        this.startGameLoop();
    }
}