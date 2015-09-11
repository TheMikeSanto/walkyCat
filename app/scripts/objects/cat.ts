module WalkyCat {
	export enum PlayerState { IDLE, WALKING }

	export class Cat extends Phaser.Sprite {
		game: Phaser.Game;
		playerState: PlayerState;
		walkingSpeed: number;

		public static MAX_SPEED: number = 30;

		constructor(game: Phaser.Game, x: number, y: number) {
			// Call Phaser.Sprite constructor
			super(game, x, y, "cat-sprite", 0);

			this.game = game;
			this.walkingSpeed = 1;

			this.anchor.set(0.0, 1.0);
			this.startWalking();
		}

		update() {
			this.x += this.walkingSpeed * (60 / this.game.time.elapsedMS);
		}

		startWalking() {
			this.animations.add('walk');
			this.animations.currentAnim.speed = this.walkingSpeed;
			this.animations.play('walk', this.walkingSpeed, true);
		}
	}
}