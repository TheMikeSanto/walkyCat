module WalkyCat {
	export class Cat extends Phaser.Sprite {
		game: Phaser.Game;

		public static MAX_SPEED: number = 30;

		constructor(game: Phaser.Game, x: number, y: number) {
			// Call Phaser.Sprite constructor
			super(game, x, y, "cat-sprite", 0);

			this.game = game;
		}
	}
}