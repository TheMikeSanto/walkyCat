module WalkyCat {
	export class Cat extends Phaser.Sprite {
		game: Phaser.Game;

		public static MAX_SPEED: number = 30;

		constructor(game: Phaser.Game, x: number, y: number) {
			// Call Phaser.Sprite constructor
			super(game, x, y, "cat-sprite", 0);

			this.game = game;
			this.startWalking();
		}

		update() {
			// this.x += this.walkingSpeed * (60 / this.game.time.elapsedMS);
			// var stageWidth = this.game.stage.getChildAt(0).getBounds().width;
			// if (this.x > stageWidth * .75) {
			// 	this.x = stageWidth * .25;
			// }
		}

		startWalking() {
			// this.animations.add('walk');
			// this.animations.currentAnim.speed = this.walkingSpeed;
			// this.animations.play('walk', this.walkingSpeed, true);
		}
	}
}