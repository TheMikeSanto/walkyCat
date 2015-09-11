module WalkyCat.State {
  export class Main extends Phaser.State {
  	cat: WalkyCat.Cat;
  	background: Phaser.Sprite;
  	lane1: WalkyCat.Lane;
  	lane2: WalkyCat.Lane;
  	lane3: WalkyCat.Lane;

    create() {
    	this.background = this.add.sprite(0,0, 'scene-bg');
    	
    	this.lane1 = new Lane(this.game, 0, 400);
    	this.game.add.existing(this.lane1);

    	this.lane2 = new Lane(this.game, 0, 560);
    	this.game.add.existing(this.lane2);

    	this.lane3 = new Lane(this.game, 0, 720);
    	this.game.add.existing(this.lane3);

    	this.cat = new Cat(this.game, 25, 500);
    	this.game.add.existing(this.cat);
    }
  }
}