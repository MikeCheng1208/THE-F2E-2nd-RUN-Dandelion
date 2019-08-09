const getRandom = (max, min) =>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
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
        this.load.image('gameover', 'images/ui/txt-game-over.png');
        this.load.image('tryAgainBtn', 'images/ui/btn-try-again.png');
        this.load.image('congratulations', 'images/ui/txt-congratulations.png');
        this.load.image('playAgainBtn', 'images/ui/btn-play-again.png');
        this.load.spritesheet('user', 'images/player.png', {frameWidth: 144, frameHeight: 120});

        this.iskeyJump = true;   // 是否可以跳躍
        this.monsterArr = [];    // 存放所有怪物實體
        this.monsterArr2 = [];   // 存放所有怪物實體2
        this.masIdx = 0;         // 怪物索引
        this.masIdx2 = 1;        // 怪物索引2
        this.gameStop = false;   // 控制遊戲是否停止
        this.bgSpeed = 1.3;      // 速度
        this.TimeStep = 30;      // 遊戲時間
    },
    create: function(){
        this.bg4 = this.add.tileSprite(400, 225, cw, ch, 'bg4');
        this.bg3 = this.add.tileSprite(400, 225, cw, ch, 'bg3');
        this.bg2 = this.add.tileSprite(400, 225, cw, ch, 'bg2');
        this.bg1 = this.add.tileSprite(400, 225, cw, ch, 'bg1');
        this.footer = this.add.tileSprite(400, 404, 800, 90, 'footer');
        
        //設定人物位置與加入物理效果
        this.player = this.physics.add.sprite(150, 150, 'user');
        this.player.setCollideWorldBounds(true); //角色邊界限制
        this.player.setBounce(1); //設定彈跳值
        this.player.setScale(scale); //設定顯示大小
        
        //設定文字
        this.timeText = this.add.text(25, ch - 46, `TIME: ${this.TimeStep}`, { fontSize: '22px', fill: '#FFFFFF' })

        // 遊戲計時器
        let gametime = setInterval(()=>{
            this.TimeStep--;
            //重新設定文字
            this.timeText.setText(`TIME: ${this.TimeStep}`);
            if(this.TimeStep < 20 && this.TimeStep > 10 ){
                this.bgSpeed = 1.6;
            }else if(this.TimeStep < 10 && this.TimeStep > 0 ){
                this.bgSpeed = 3;
            }else if(this.TimeStep <= 0){
                this.gameStop = true;
                clearInterval(gametime);
                let congratulations = this.add.image(cw / 2, ch / 2 - 50, 'congratulations');
                congratulations.setScale(0.8);
                let playAgainBtn = this.add.image(cw / 2, ch / 2 + 40, 'playAgainBtn');
                playAgainBtn.setScale(0.6);
                playAgainBtn.setInteractive();
                playAgainBtn.on('pointerdown', () => this.scene.start('gameStart'));
            }
        }, 1000);

        
        // 動畫影格
        keyFrame(this);

        // 加入物理效果
        const addPhysics = GameObject =>{
            this.physics.add.existing(GameObject);
            GameObject.body.immovable = true;
            GameObject.body.moves = false;
        }

        // 怪物的座標資訊
        const masPos = [
            {name: 'rock1', x: cw + 200, y: 320, w: 160, h: 83},
            {name: 'rock2', x: cw + 200, y: ch / 2 - 30 , w: 200, h: 94},
            {name: 'rock3', x: cw + 200, y: 70, w: 130, h: 160},
        ]

        //碰撞到後停止遊戲
        const hittest = (player, rock) => {
            this.gameStop = true;
            this.player.setBounce(0);
            this.player.setSize(110, 100, 0);
            this.player.anims.play('deel', true);
            clearInterval(gametime);
            let gameover = this.add.image(cw / 2, ch / 2 - 40, 'gameover');
            gameover.setScale(0.8);
            let tryAgainBtn = this.add.image(cw / 2, ch / 2 + 30, 'tryAgainBtn');
            tryAgainBtn.setScale(0.6);
            tryAgainBtn.setInteractive();
            tryAgainBtn.on('pointerdown', () => this.scene.start('gameStart'));
        }
        
            
        // 產生怪物
        for (let i = 0; i < 10; i++) {
            let BoolIdx = getRandom(2, 0);
            let BoolIdx2 = getRandom(2, 0);
            this['rock'+ i] = this.add.tileSprite(masPos[BoolIdx].x, masPos[BoolIdx].y, masPos[BoolIdx].w, masPos[BoolIdx].h, masPos[BoolIdx].name);
            this['rockB'+ i] = this.add.tileSprite(masPos[BoolIdx2].x, masPos[BoolIdx2].y, masPos[BoolIdx2].w, masPos[BoolIdx2].h, masPos[BoolIdx2].name);
            this.monsterArr.push(this['rock'+ i]);
            this.monsterArr2.push(this['rockB'+ i]);
            addPhysics(this['rock'+i]);
            addPhysics(this['rockB'+i]);
            this.physics.add.collider(this.player, this['rock'+i], hittest);
            this.physics.add.collider(this.player, this['rockB'+i], hittest);
        }

        // 地板加入物理效果
        addPhysics(this.footer);

        // 地板跟人物碰撞綁定
        this.physics.add.collider(this.player, this.footer);

        //播放動畫
        this.player.anims.play('run', true);
        
    },
    update: function(){
        if(this.gameStop) return;

        this.bg3.tilePositionX += 1 * this.bgSpeed;
        this.bg2.tilePositionX += 2 * this.bgSpeed;
        this.bg1.tilePositionX += 3 * this.bgSpeed;
        this.footer.tilePositionX += 3 * this.bgSpeed;

        this.monsterArr[this.masIdx].x -= 3 * this.bgSpeed;

        if(this.TimeStep < 10 && this.TimeStep > 0 ){
            this.monsterArr2[this.masIdx2].x -= 3 * this.bgSpeed;
        }

        // 檢測怪物是否超出邊界然後返回
        for (let i = 0; i < this.monsterArr.length; i++) {
            if(this.monsterArr[i].x <= -100){
                this.monsterArr[i].x = cw + 200;
                this.masIdx = getRandom(this.monsterArr.length - 1, 0);
            }
            if(this.monsterArr2[i].x <= -100){
                this.monsterArr2[i].x = cw + getRandom(400, 200);
                this.masIdx2 = getRandom(this.monsterArr2.length - 1, 0);
            }
        }

         // 啟動鍵盤事件
        let cursors = this.input.keyboard.createCursorKeys();
        if (cursors.right.isDown) {
            this.player.setVelocityX(200);
            this.player.setSize(144, 120, 0); //碰撞邊界
            this.player.anims.play('speed', true);
            this.player.flipX = false;
        } else if (cursors.left.isDown) {
            this.player.setVelocityX(-300);
            this.player.anims.play('speed', true);
            this.player.flipX = true;
        } else {
            this.player.setVelocityX(0);
            this.player.anims.play('run', true);
            this.player.setSize(110, 90, 0); //碰撞邊界
            this.player.flipX = false;
        }
        if (cursors.up.isDown) {
            if(this.iskeyJump){
                this.iskeyJump = false;
                this.player.setVelocityY(-300);
            }
        }else{
            this.iskeyJump = true;
        }
    }
}