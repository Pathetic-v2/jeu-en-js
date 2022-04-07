class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;
        this.LowerImage = new Image();
        this.LowerImage.src = config.LowerSrc;
        this.UpperImage = new Image();
        this.UpperImage.src = config.upperSrc;

    }
    drawLowerImage(ctx){
        ctx.drawImage(this.LowerImage, 0, 0, 400, 400)
    }
    drawUpperImage(ctx){
        ctx.drawImage(this.UpperImage, 0, 0)
    }
}
window.OverworldMaps = {
     // les 9 maps et src seront ici 
    demoRoom:{       
        LowerSrc: "/images/maps/map.png",
        upperSrc: "/images/maps/DemoUpper.png",

        gameObjects: {
            // placement of the heroSSs
            hero: new Person({
                isPlayerControlled: true,
                x: utils.withGrid(5),
                y: utils.withGrid(6),
            }),
            // placement of the npc
            
        }
    },
    // new maps
    othermaps:{       
        LowerSrc: "/images/maps/KitchenLower.png",
        upperSrc: "/images/maps/KitchenUpper.png",

        gameObjects: {
            // placement of the hero
            hero: new GameObject({
                x: 3,
                y: 1,
            }),
            // placement of the npc
            npc1: new GameObject({
                x:9,
                y:1,
                src: "/images/characters/people/npc1.png"
            })
        }
    }
}