# THE F2E 2nd : RUN-Dandelion

<img src="./assets/01.gif" alt="">

這是一款玩家必須扮演蒲公英閃避障礙物而飛行的遊戲

## DEMO
 - [完成範例](https://mikecheng1208.github.io/THE-F2E-2nd-RUN-Dandelion/)

## 操作
 - 鍵盤的上左右控制方向

## 框架
 - [phaser3](https://phaser.io/)

## API References
 - api 文件 [phaser3 docs](https://photonstorm.github.io/phaser3-docs/)
 - 遊戲設定 [Game Config](https://photonstorm.github.io/phaser3-docs/Phaser.Types.Core.html#.GameConfig)
 - 場景設定 [Scenes Config](https://photonstorm.github.io/phaser3-docs/Phaser.Types.Scenes.html)
 - 場景切換 [scene.start](https://photonstorm.github.io/phaser3-docs/Phaser.Scenes.ScenePlugin.html#start__anchor)
 - 物理引擎 [Phaser.Physics](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.html)
 - 物理引擎設定 [PhysicsConfig](https://photonstorm.github.io/phaser3-docs/Phaser.Types.Core.html#.PhysicsConfig)
 - 反彈値 [Bounce](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Components.Bounce.html)
 - 物理邊界相關設定 [Physics Bounds](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Components.Bounce.html)
 - 物理邊界大小設定 [Physics Size](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Components.Size.html)
 - 物理邊界變形設定 [Physics Transform](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Matter.Components.Transform.html#setScale__anchor)
 - Arcade物件碰撞事件 [Physics Arcade.Collider](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Collider.html)
 - 將 GameObject (遊戲物件)加入到物理世界 [Physics existing](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Factory.html#existing__anchor)
 - 物件碰撞移動設定 [Physics Arcade.Body.immovable](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Body.html#immovable__anchor)
 - 物件是否受到物理相關設定 [Physics Arcade.Body.moves](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Body.html#moves__anchor)
 - Arcade引擎相關api [Arcade.immovable](https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Body.html#immovable__anchor)
 - 事件相關api [Phaser.Events](https://photonstorm.github.io/phaser3-docs/Phaser.Input.Events.html)
 - 事件註冊器 [Phaser.Events. EventEmitter](https://photonstorm.github.io/phaser3-docs/Phaser.Events.EventEmitter.html)
 - 開啟物件互動設定 [setInteractive](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.GameObject.html#setInteractive)
 - 圖片容器 [image](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Image.html)
 - Sprite容器 [Sprite](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Sprite.html)
 - TileSprite容器 [TileSprite](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.TileSprite.html)
 - TileSprite水平位移 [TileSprite.tilePositionX ](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.TileSprite.html#tilePositionX__anchor)
 - 載入資源-圖片 [load.Image](https://photonstorm.github.io/phaser3-docs/Phaser.Loader.FileTypes.ImageFile.html)
 - 載入資源-SpriteSheet [load.SpriteSheet](https://photonstorm.github.io/phaser3-docs/Phaser.Loader.FileTypes.SpriteSheetFile.html)
 - 物件水平翻轉 [Phaser.GameObjects Flip](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Components.Flip.html)
 - 動畫設定 [Animations](https://photonstorm.github.io/phaser3-docs/Phaser.Types.Animations.html)
 - 動畫控制器 [Animation](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Components.Animation.html)
 - 文字物件 [Text](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Text.html)
 - 文字設定 [setText](https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Text.html#setText__anchor)
 - 鍵盤控制器 [KeyboardPlugin](https://photonstorm.github.io/phaser3-docs/Phaser.Input.Keyboard.KeyboardPlugin.html)
 - 特定鍵盤控制器 [keyboard.createCursorKeys](https://photonstorm.github.io/phaser3-docs/Phaser.Input.Keyboard.KeyboardPlugin.html#createCursorKeys__anchor)
 - 鍵盤控制別名 [Keyboard](https://photonstorm.github.io/phaser3-docs/Phaser.Types.Input.Keyboard.html)