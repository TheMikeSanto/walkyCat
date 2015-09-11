module WalkyCat.State {
  export class Preload extends Phaser.State {
    private preloadBar: Phaser.Sprite;

    preload() {
      this.preloadBar = this.add.sprite(0, 148, 'preload-bar');
      this.load.setPreloadSprite(this.preloadBar);

      this.load.image('menu-bg', 'assets/images/menu-bg.png');
      this.load.image('blue-bg', 'assets/images/blue-bg.png');
      this.game.load.image('scene-bg', 'assets/images/scene-bg.png');
      this.game.load.image('lane-bg', 'assets/images/lane-bg.png');
      this.game.load.image('catSprite', 'assets/images/cat-sprite.png');
      // Load remaining assets here
    }

    create() {
      this.game.state.start('menu');
    }
  }
}