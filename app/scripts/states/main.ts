module WalkyCat.State {
  export class Main extends Phaser.State {
  	player: WalkyCat.Player;
  	background: Phaser.Sprite;
  	lane1: WalkyCat.Lane;
  	lane2: WalkyCat.Lane;
  	lane3: WalkyCat.Lane;

    create() {
    	this.background = this.add.sprite(0,0, 'sceneBG');
    	
    	this.lane1 = new Lane(this.game, 0, 400);
    	this.game.add.existing(this.lane1);

    	this.lane2 = new Lane(this.game, 0, 560);
    	this.game.add.existing(this.lane2);

    	this.lane3 = new Lane(this.game, 0, 720);
    	this.game.add.existing(this.lane3);

    	this.player = new Player(this.game, 25, 500);
    	this.game.add.existing(this.player);
    }
  }
}