module WalkyCat.State {
  export class Main extends Phaser.State {
  	player: WalkyCat.Player;
  	background: Phaser.Sprite;

    create() {
    	this.background = this.add.sprite(0,0, 'scene');
    	this.player = new Player(this.game, 25, 500);
    	this.game.add.existing(this.player);  
      // Create game objects here
    }
  }
}