module WalkyCat.State {
  export class GameOver extends Phaser.State {
    background: Phaser.Sprite;

    create() {
      this.background = this.add.sprite(0, 0, 'menu-bg');
      this.input.onDown.addOnce(() => {
        this.game.state.start('main');
      });
    }
  }
}