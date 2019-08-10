const gameStart = {
    key: 'gameStart',
    preload: function(){
        this.load.image('bg1', 'images/bg/bg1.png');
        this.load.image('bg2', 'images/bg/bg2.png');
        this.load.image('bg3', 'images/bg/bg3.png');
        this.load.image('bg4', 'images/bg/bg4.png');
        this.load.image('footer', 'images/bg/footer.png');
        this.load.image('title', 'images/ui/txt-title.png');
        this.load.image('playBtn', 'images/ui/btn-press-start.png');
        this.load.image('logo', "images/ui/player-end.png");
    },
    create: function(){
        this.bg4 = this.add.tileSprite(400, 225, cw, ch, 'bg4');
        this.bg3 = this.add.tileSprite(400, 225, cw, ch, 'bg3');
        this.bg2 = this.add.tileSprite(400, 225, cw, ch, 'bg2');
        this.bg1 = this.add.tileSprite(400, 225, cw, ch, 'bg1');
        this.footer = this.add.tileSprite(400, 404, 800, 90, 'footer');

        let title = this.add.image(cw / 2, ch / 2 - 115, 'title');
        title.setScale(0.6);

        let playBtn = this.add.image(cw / 2, ch / 2, 'playBtn');
        playBtn.setScale(0.5);
        playBtn.setInteractive();
        playBtn.on('pointerdown', () => this.scene.start('gamePlay'))

        let logo = this.add.image(cw / 2, ch / 2 + 95, 'logo');
        logo.setScale(0.4);
        
    },
    update: function(){
        this.bg3.tilePositionX += 1;
        this.bg2.tilePositionX += 2;
        this.bg1.tilePositionX += 3;
        this.footer.tilePositionX += 3;
    }
}