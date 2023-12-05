import Phaser from 'phaser';

export class GameOverText extends Phaser.GameObjects.Text {
    constructor(scene) {
        super(scene);
        scene.add.text(
            scene.cameras.main.centerX,
            scene.cameras.main.centerY,
            'Game Over',
            { fontFamily: 'Arial', fontSize: '32px', color: '#ffffff' }
        ).setOrigin(0.5, 0.5);
    }
}