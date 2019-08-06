const cw = 800;
const ch = 360;
const gameStart = {
    key: 'gameStart',
    preload: function(){
        this.load.image('bg1', 'images/bg/bg1.png');
        this.load.image('bg2', 'images/bg/bg2.png');
        this.load.image('bg3', 'images/bg/bg3.png');
        this.load.image('bg4', 'images/bg/bg4.png');
        this.load.image('footer', 'images/bg/footer.png');
        this.load.image('rock1', 'images/item-level-1-rock.png');
    },
    create: function(){
        this.bg4 = this.add.tileSprite(400, 180, 800, 360, 'bg4');
        this.bg3 = this.add.tileSprite(400, 180, 800, 360, 'bg3');
        this.bg2 = this.add.tileSprite(400, 180, 800, 360, 'bg2');
        this.bg1 = this.add.tileSprite(400, 180, 800, 360, 'bg1');
        this.footer = this.add.tileSprite(400, 310, 800, 90, 'footer');
        this.rock1 = this.add.tileSprite(cw, 215, 200, 104, 'rock1');

        this.physics.add.existing(this.footer);
        this.footer.body.immovable = true;
        this.footer.body.moves = false;

        this.physics.add.existing(this.rock1);
        this.rock1.body.immovable = true;
        this.rock1.body.moves = false;
    },
    update: function(){
        this.bg3.tilePositionX += 1;
        this.bg2.tilePositionX += 2;
        this.bg1.tilePositionX += 3;
        this.footer.tilePositionX += 3;
        this.rock1.x -= 3;
    }
}
const config = {
    type: Phaser.AUTO,
    width: cw,
    height: ch,
    parent: 'app',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 1500
            },
            debug: true,
        },
    },
    scene: [
        gameStart,
    ]
}

const game = new Phaser.Game(config);