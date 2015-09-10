module WalkyCat.State {
  export class Main extends Phaser.State {
  	player: WalkyCat.Player;

    create() {
      this.stage.backgroundColor = 0x000000;
    	this.player = new Player(this.game, 0, this.game.height - 300);
    	this.game.add.existing(this.player);  
      // Create game objects here
    }
  }
}