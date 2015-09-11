module WalkyCat.State {
  export class Preload extends Phaser.State {
    private preloadCat: Phaser.Sprite;
    background: Phaser.Sprite;

    preload() {
      this.background = this.add.sprite(0,0, 'blue-bg');
      this.preloadCat = this.add.sprite(470, 190, 'preload-cat');
      this.load.setPreloadSprite(this.preloadCat, 1);

      this.load.image('menu-bg', 'assets/images/menu-bg.png');
      this.game.load.image('scene-bg', 'assets/images/scene-bg.png');
      this.game.load.image('lane-bg', 'assets/images/lane-bg.png');
      this.game.load.image('catSprite', 'assets/images/cat-sprite.png');
    }

    create() {
      this.game.state.start('menu');
    }
  }
}