module WalkyCat {
	export class Collider extends Phaser.Sprite {
		game: Phaser.Game;
		constructor (game: Phaser.Game, bg: string, y: number) {
			// 1300 is a placeholder, they just need to spawn off the right
			// hand side of the screen
			super(game, 1300, y, bg, 0);
			this.game = game;
		}

		update() {
			this.body.moveLeft(325);
		}
	}
}