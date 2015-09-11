module WalkyCat {
	export enum PlayerState { IDLE, WALKING }

	export class Player extends Phaser.Sprite {
		game: Phaser.Game;
		playerState: PlayerState;

		RIGHT_ARROW = Phaser.Key;
		ESCAPE = Phaser.Key;

		walkingSpeed: number;

		public static MAX_SPEED: number = 30;

		constructor(game: Phaser.Game, x: number, y: number) {
			// Call Phaser.Sprite constructor
			super(game, x, y, "catSprite", 0);

			this.game = game;
			this.walkingSpeed = 0;
			console.log(typeof this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT));
			// this.RIGHT_ARROW = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
			// this.RIGHT_ARROW.onDown.add(Player.prototype.moveRight, this);

			this.anchor.set(0.0, 1.0);
			this.startIdle();
		}

		moveRight() {
			// Do something
		}

		startIdle() {
			// Idle something
		}
	}
}