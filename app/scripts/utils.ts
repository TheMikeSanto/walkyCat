module WalkyCat {
	export class Utils {
		static resize(element: HTMLElement, context: any, logging?: boolean) {
			var _this = context;

			var scale = Math.min(window.innerWidth / _this.game.width, window.innerHeight / _this.game.height );

			element.style.minHeight = window.innerHeight.toString() + "px";

			_this.game.scale.setUserScale(scale, scale, 0, 0);

			if (logging == true) {
				var w = Math.floor(_this.game.width * scale),
					h = Math.floor(_this.game.height * scale);
				console.info("The game has just been resized to: " + w + " x " + h);
			}
		}
	}
}