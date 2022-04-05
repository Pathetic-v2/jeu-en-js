class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;
        this.LowerImage = new Image();
        this.LowerImage.src = config.LowerSrc;
        this.UpperImage = new Image();
        this.UpperImage.src = config.upperSrc;

    }
    drawLowerImage(ctx){
        ctx.drawImage(this.LowerImage,0 , 0)
    }
    drawUpperImage(ctx){
        ctx.drawImage(this.UpperImage, 0, 0)
    }
}
window.OverworldMaps = {
    demoRoom:{
        // les 9 maps et src seront ici 
        LowerSrc: "",
        upperSrc: "",

        gameObjects: {
            hero: new GameObject({
                x: 5,
                y: 7,
            })
        }
    }
}