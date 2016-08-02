module WalkyCat.State {
  export class Main extends Phaser.State {
    background: WalkyCat.Scene;
    colliderCG: any;
    catCG: any;
  	cat: WalkyCat.Cat;
  	lane1: WalkyCat.Lane;
  	lane2: WalkyCat.Lane;
  	lane3: WalkyCat.Lane;

    create() {
      this.game.physics.startSystem(Phaser.Physics.P2JS);
      this.game.physics.p2.setImpactEvents(true);
      this.game.physics.p2.restitution = 0.8;
      this.game.physics.p2.updateBoundsCollisionGroup();

      this.colliderCG = this.game.physics.p2.createCollisionGroup();
      this.catCG = this.game.physics.p2.createCollisionGroup();

      this.background = new Scene("scene-bg", this.game, 0, 0, false);
      this.game.add.existing(this.background);
    	
    	this.lane1 = new Lane(this, 0, 400);
    	this.game.add.existing(this.lane1);

    	this.lane2 = new Lane(this, 0, 560);
    	this.game.add.existing(this.lane2);

    	this.lane3 = new Lane(this, 0, 720);
    	this.game.add.existing(this.lane3);

    	this.cat = new Cat(this.game, 200, 475);
    	this.game.add.existing(this.cat);
      this.game.physics.p2.enable(this.cat);
      this.cat.body.setCollisionGroup(this.catCG);
      this.cat.body.collides(this.colliderCG);

      var colliderRate = Phaser.Timer.SECOND / Game.walkingSpeed + 333;
      console.log(colliderRate);

      this.game.time.events.loop(colliderRate, this.addCollider, this);

      this.game.world.setBounds(0, 0, this.background.width * 2, this.background.height);
      // this.game.camera.follow(this.cat, Phaser.Camera.FOLLOW_PLATFORMER);
    }

    addCollider() {
      var heights = [315, 475, 635];
      var rand = Math.random();
      rand *= heights.length;
      rand = Math.floor(rand);
      var bomb = new Colliders.Bomb(this.game, heights[rand]);
      this.game.add.existing(bomb);
      this.game.physics.p2.enable(bomb, false);
      bomb.body.setCollisionGroup(this.colliderCG);
      bomb.body.collides(this.catCG, function() {
        this.game.state.start('gameOver');
      }, this);
    }
  }
}