import Phaser from 'phaser';
import { Scene1 } from './assets/scene1/Scene1';
import { state } from './assets/state/state';

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    scale: {
        width: state.canvasWidth,
        mode: Phaser.Scale.FIT,
        parent: 'phaser',
        autoCenter: Phaser.Scale.CENTER_BOTH,
        height: state.canvasHeight, 
    },
    scene: Scene1
};

const game = new Phaser.Game(config);
