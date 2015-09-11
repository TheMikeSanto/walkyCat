module WalkyCat {
	export class Scene extends Phaser.Sprite {
		game: Phaser.Game;
		nextFrame: Phaser.Sprite;

		constructor(bg: string, game: Phaser.Game, x: number, y: number) {
			super(game, x, y, bg, 0);
			this.nextFrame = new Phaser.Sprite(this.game, this.width, 0, "scene-bg", 0);
			this.game.add.existing(this.nextFrame);
		}
	}
}