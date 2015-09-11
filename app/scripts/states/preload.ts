module WalkyCat.State {
  export class Preload extends Phaser.State {
    private preloadBar: Phaser.Sprite;

    preload() {
      this.preloadBar = this.add.sprite(0, 148, 'preload-bar');
      this.load.setPreloadSprite(this.preloadBar);

      this.load.image('menu-background', 'assets/images/menu-background.png');
      this.game.load.image('sceneBG', 'assets/images/scene-background.png');
      this.game.load.image('laneBG', 'assets/images/lane-background.png');
      // Load remaining assets here
    }

    create() {
      this.game.state.start('menu');
    }
  }
}