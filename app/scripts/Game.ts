/// <reference path="../vendor/phaser-official/typescript/phaser.d.ts"/>

/// <reference path='states/boot.ts'/>
/// <reference path='states/preload.ts'/>
/// <reference path='states/menu.ts'/>
/// <reference path='states/main.ts'/>
/// <reference path='objects/player.ts'/>

module WalkyCat {
  export class Game extends Phaser.Game {
    constructor() {
      super(1280, 720, Phaser.AUTO, 'game-div');

      this.state.add('boot', State.Boot);
      this.state.add('preload', State.Preload);
      this.state.add('menu', State.Menu);
      this.state.add('main', State.Main);

      this.state.start('boot');
    }
  }
}

window.onload = () => {
  var game = new WalkyCat.Game();
}