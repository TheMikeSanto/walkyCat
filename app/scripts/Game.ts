/// <reference path="../vendor/phaser-official/typescript/phaser.d.ts"/>

/// <reference path='utils.ts'/>
/// <reference path='states/boot.ts'/>
/// <reference path='states/preload.ts'/>
/// <reference path='states/menu.ts'/>
/// <reference path='states/main.ts'/>
/// <reference path='states/gameOver.ts'/>
/// <reference path='objects/scene.ts'/>
/// <reference path='objects/lane.ts'/>
/// <reference path='objects/cat.ts'/>
/// <reference path='objects/colliders/collider.ts'/>
/// <reference path='objects/colliders/bomb.ts'/>

module WalkyCat {
  export class Game extends Phaser.Game {
    static walkingSpeed: number;

    constructor() {
      super(960, 640, Phaser.CANVAS, 'game-content');      
      this.state.add('boot', State.Boot);
      this.state.add('preload', State.Preload);
      this.state.add('menu', State.Menu);
      this.state.add('main', State.Main);
      this.state.add('gameOver', State.GameOver);

      this.state.start('boot');
      Game.walkingSpeed = 1.5;
    }
  }
}

window.onload = () => {
  var game = new WalkyCat.Game();
}