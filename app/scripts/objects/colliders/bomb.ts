module WalkyCat.Colliders {
	export class Bomb extends WalkyCat.Collider {
		constructor (game: Phaser.Game, y: number) {
			super(game, 'bomb-sprite', y);
		}
	}
}