module WalkyCat {
	export class Lane extends WalkyCat.Scene {

		constructor(game: Phaser.Game, x: number, y: number) {
			super("lane-bg", game, x, y);

			this.anchor.set(0.0, 1.0);
		}
	}
}