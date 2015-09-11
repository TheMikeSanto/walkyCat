module WalkyCat{
	export class Lane extends Phaser.Sprite {
		game: Phaser.Game;

		constructor(game: Phaser.Game, x: number, y: number) {
			super(game, x, y, "laneBG", 0);

			this.game = game;
			this.anchor.set(0.0, 1.0);
		}
	}
}