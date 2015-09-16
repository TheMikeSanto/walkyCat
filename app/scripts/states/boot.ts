module WalkyCat.State {
  export class Boot extends Phaser.State {
    parentElement: HTMLElement = document.getElementById('game-content');

    preload() {
      this.load.image('preload-cat', 'assets/images/preload-cat.png');
      this.load.image('blue-bg', 'assets/images/blue-bg.png');
    }

    create() {
      this.game.scale.fullScreenTarget = this.parentElement;
      this.game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
      this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
      this.game.scale.pageAlignHorizontally = true;
      this.game.scale.pageAlignVertically = true;
      this.game.stage.disableVisibilityChange = true;
      this.game.input.maxPointers = 1;
      this.game.scale.setResizeCallback(function() {
        Utils.resize(this.parentElement, this);
      }, this)
      this.game.stage.backgroundColor = 0x000000;

      // Assign global settings here
      this.game.state.start('preload');
    }
  }
}