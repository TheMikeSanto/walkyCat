module WalkyCat {
	export class Lane extends WalkyCat.Scene {
		state: WalkyCat.State.Main;

		constructor(state: WalkyCat.State.Main, x: number, y: number) {
			super("lane-bg", state.game, x, y, true);
			this.state = state;
			this.anchor.set(0.0, 1.0);

			this.events.onInputDown.add(this.onClick, this);
			this.nextFrame.events.onInputDown.add(this.onClick, this);
		}

		onClick (sprite, pointer) {
			var offsetY = this.y - this.height;
			this.game.add.tween(this.state.cat)
					.to({
							x: this.state.cat.x,
							y: offsetY
					}, 200, Phaser.Easing.Quadratic.InOut, true);
		}
	}
}