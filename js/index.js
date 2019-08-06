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
        this.load.spritesheet('user', 'images/player.png', {frameWidth: 144, frameHeight: 120});
    },
    create: function(){
        this.bg4 = this.add.tileSprite(400, 180, 800, 360, 'bg4');
        this.bg3 = this.add.tileSprite(400, 180, 800, 360, 'bg3');
        this.bg2 = this.add.tileSprite(400, 180, 800, 360, 'bg2');
        this.bg1 = this.add.tileSprite(400, 180, 800, 360, 'bg1');
        this.footer = this.add.tileSprite(400, 310, 800, 90, 'footer');
        this.rock1 = this.add.tileSprite(cw, 215, 200, 104, 'rock1');
        // this.rock1.setScale(0.6);

        //設定人物位置與加入物理效果
        this.player = this.physics.add.sprite(150, 50, 'user');
        this.player.setCollideWorldBounds(true); //角色邊界限制
        this.player.setBounce(0.2); //設定彈跳值
        this.player.setScale(0.6); //設定顯示大小
        this.player.setSize(110, 120, 0); //碰撞邊界

        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('user', { start: 0, end: 1 }),
            frameRate: 5,
            repeat: -1
        })
        this.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNumbers('user', { start: 2, end: 3 }),
            frameRate: 5,
            repeat: -1
        })
        this.anims.create({
            key: 'speed',
            frames: this.anims.generateFrameNumbers('user', { start: 4, end: 5 }),
            frameRate: 5,
            repeat: -1
        })

        const addPhysics = GameObject =>{
            this.physics.add.existing(GameObject);
            GameObject.body.immovable = true;
            GameObject.body.moves = false;
        }

        addPhysics(this.footer);
        addPhysics(this.rock1);

        this.physics.add.collider(this.player, this.footer);
        this.physics.add.collider(this.player, this.rock1);

        //播放動畫
        this.player.anims.play('run', true);
        console.log(this.player);
        
    },
    update: function(){
        this.bg3.tilePositionX += 1;
        this.bg2.tilePositionX += 2;
        this.bg1.tilePositionX += 3;
        this.footer.tilePositionX += 3;
        // this.rock1.x -= 3;

         // 啟動鍵盤事件
         let cursors = this.input.keyboard.createCursorKeys();
         if (cursors.right.isDown) {
             this.player.setVelocityX(200);
             this.player.flipX = false;
             this.player.setSize(144, 120, 0); //碰撞邊界
             this.player.anims.play('speed', true);
         } else if (cursors.left.isDown) {
             this.player.setVelocityX(-260);
             this.player.setSize(144, 120, 0); //碰撞邊界
             this.player.anims.play('speed', true);
         } else {
            this.player.setVelocityX(0);
            this.player.setSize(110, 120, 0); //碰撞邊界
            this.player.anims.play('run', true);
         }
         if (cursors.up.isDown && this.player.body.touching.down) {
             this.player.setVelocityY(-700);
         }
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
            // debug: true,
        },
    },
    scene: [
        gameStart,
    ]
}

const game = new Phaser.Game(config);