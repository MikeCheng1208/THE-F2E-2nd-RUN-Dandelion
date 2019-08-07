const gamePlay = {
    key: 'gamePlay',
    preload: function(){
        this.load.image('bg1', 'images/bg/bg1.png');
        this.load.image('bg2', 'images/bg/bg2.png');
        this.load.image('bg3', 'images/bg/bg3.png');
        this.load.image('bg4', 'images/bg/bg4.png');
        this.load.image('footer', 'images/bg/footer.png');
        this.load.image('rock1', 'images/item-level-1-rock.png');
        this.load.image('rock2', 'images/item-level-2-smoke-sm.png');
        this.load.image('rock3', 'images/item-level-1-branch.png');
        this.load.spritesheet('user', 'images/player.png', {frameWidth: 144, frameHeight: 120});

        this.iskeyJump = true;
        this.monsterArr = [];    // 存放所有怪物實體
        this.masIdx = Math.floor(Math.random() * (this.monsterArr.length - 0 + 0) + 0);
        this.gameStop = false;
    },
    create: function(){
        this.bg4 = this.add.tileSprite(400, 225, cw, ch, 'bg4');
        this.bg3 = this.add.tileSprite(400, 225, cw, ch, 'bg3');
        this.bg2 = this.add.tileSprite(400, 225, cw, ch, 'bg2');
        this.bg1 = this.add.tileSprite(400, 225, cw, ch, 'bg1');
        this.footer = this.add.tileSprite(400, 406, 800, 90, 'footer');
        
        //設定人物位置與加入物理效果
        this.player = this.physics.add.sprite(150, 150, 'user');
        this.player.setCollideWorldBounds(true); //角色邊界限制
        this.player.setBounce(1); //設定彈跳值
        this.player.setScale(scale); //設定顯示大小

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

        const masPos = [
            {name: 'rock1', x: cw + 200, y: 320, w: 160, h: 83},
            {name: 'rock2', x: cw + 200, y: 315, w: 200, h: 94},
            {name: 'rock3', x: cw + 200, y: 70, w: 130, h: 160},
        ]

        for (let i = 0; i < 6; i++) {
            let BoolIdx = Math.floor(Math.random() * (3 - 0 + 0) + 0);
            this['rock'+ i] = this.add.tileSprite(masPos[BoolIdx].x, masPos[BoolIdx].y, masPos[BoolIdx].w, masPos[BoolIdx].h, masPos[BoolIdx].name);
            this['rock'+ i].isRun = false;
            this.monsterArr.push(this['rock'+ i])
            addPhysics(this['rock'+i]);
            this.physics.add.collider(this.player, this['rock'+i], hittest);
        }

        const self = this;
        function hittest(player, rock){
            self.gameStop = true;
            self.player.setBounce(0);
        }


        addPhysics(this.footer);
        this.physics.add.collider(this.player, this.footer);

        //播放動畫
        this.player.anims.play('run', true);
        
    },
    update: function(){
        if(this.gameStop) return;

        this.bg3.tilePositionX += 1;
        this.bg2.tilePositionX += 2;
        this.bg1.tilePositionX += 3;
        this.footer.tilePositionX += 3;


        this.monsterArr[this.masIdx].x -= 3;

        for (let i = 0; i < this.monsterArr.length; i++) {
            if(this.monsterArr[i].x <= -100){
                this.monsterArr[i].x = cw + 200;
                this.masIdx = Math.floor(Math.random() * (this.monsterArr.length - 0 + 0) + 0);
            }
        }

         // 啟動鍵盤事件
        let cursors = this.input.keyboard.createCursorKeys();
        if (cursors.right.isDown) {
            this.player.setVelocityX(200);
            this.player.setSize(144, 120, 0); //碰撞邊界
            this.player.anims.play('speed', true);
        } else if (cursors.left.isDown) {
            this.player.setVelocityX(-300);
            this.player.anims.play('jump', true);
        } else {
            this.player.setVelocityX(0);
            this.player.anims.play('run', true);
            this.player.setSize(110, 90, 0); //碰撞邊界
        }
        if (cursors.up.isDown) {
            if(this.iskeyJump){
                this.iskeyJump = false;
                this.player.setVelocityY(-200);
            }
        }else{
            this.iskeyJump = true;
        }
    }
}