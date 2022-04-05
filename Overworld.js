class Overworld {
    constructor(config) {
    this.element = config.element
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d")
    }

    startGameLoop() {
        const step = () => {
            console.log("stepping")
            requestAnimationFrame(() =>{
                step();
            })
        }
        step();
    }
    init() {

        this.startGameLoop();

        const image = new Image()
        image.onload = () => {
            this.ctx.drawImage(image,-70,-70,300,300)
        };
        image.src = "images/maps/map-ship-colision.png";

        const hero = new GameObject({
            x: 5,
            y: 6,
        })
        const npc1 = new GameObject ({
            x:7,
            y:9,
            src: "/images/characters/people/npc1.png"
        })
        setTimeout(() => {
            hero.sprite.draw(this.ctx);
            npc1.sprite.draw(this.ctx);
        }, 200)
             
    }
}