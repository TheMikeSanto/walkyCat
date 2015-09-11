module WalkyCat{
	export class Lane extends WalkyCat.Scene {
		game: Phaser.Game;

		constructor(game: Phaser.Game, x: number, y: number) {
			super("lane-bg", game, x, y, 0);

			this.anchor.set(0.0, 1.0);
		}
	}
}