module WalkyCat {
	export class Scene extends Phaser.Sprite {
		game: Phaser.Game;
		nextFrame: Phaser.Sprite;
		walkingSpeed: number;

		constructor(bg: string, game: Phaser.Game, x: number, y: number, inputEnabled: boolean) {
			super(game, x, y, bg, 0);
			this.nextFrame = new Phaser.Sprite(this.game, this.x + this.width, this.y, bg, 0);
			if (inputEnabled) {
				this.inputEnabled = true;
				this.nextFrame.inputEnabled = true;
			}
			this.game.add.existing(this.nextFrame);

			this.game = game;
			this.walkingSpeed = 1;
		}

		update() {
			var offset = this.walkingSpeed * (60/this.game.time.elapsedMS);
			this.x -= offset;
			this.nextFrame.x -= offset;
			var breakPoint = this.width * -1;

			if (this.x < breakPoint) {
				this.x = 0;
				this.nextFrame.x = (this.x + this.width);
			}
		}
	}
}