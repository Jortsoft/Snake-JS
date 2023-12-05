import Phaser from "phaser";
import { state } from "../state/state";

export class ScoreText extends Phaser.GameObjects.Text {
    constructor(scene, score) {
        super(scene, score);

        this.localScoreText = scene.add.text(
            20,
            20,
            `Score ${score}`,
            {fontFamily: 'Arial', fontSize: '21px', color: '#ffffff'}
        );
    }
    updateScore() {
        this.localScoreText.setText(`Score ${state.score}`)
    }
}