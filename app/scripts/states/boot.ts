module WalkyCat.State {
  export class Boot extends Phaser.State {
    preload() {
      this.load.image('preload-cat', 'assets/images/preload-cat.png');
      this.load.image('blue-bg', 'assets/images/blue-bg.png');
    }

    create() {
      this.game.stage.backgroundColor = 0xFFFFFF;

      // Assign global settings here
      
      this.game.state.start('preload');
    }
  }
}