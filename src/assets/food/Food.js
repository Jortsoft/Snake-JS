import Phaser from "phaser";
import { state } from "../state/state";

export class Food extends Phaser.GameObjects.Rectangle {
    constructor(scene) {
        super(scene);

        this.foodX = Phaser.Math.Between(0, scene.cols) * scene.blockSize;
        this.foodY = Phaser.Math.Between(0, scene.rows) * scene.blockSize;

        this.localScene = scene;

        this.localFood = scene.add.rectangle(this.foodX, this.foodY, scene.blockSize, scene.blockSize, 0xff0000)
    }
    replaceFood() {
        this.foodX = Phaser.Math.Between(0, this.localScene.cols) * this.localScene.blockSize;
        this.foodY = Phaser.Math.Between(0, this.localScene.rows) * this.localScene.blockSize;

        this.localFood.x = this.foodX;
        this.localFood.y = this.foodY;

        this.foodX = this.localFood.x;
        this.foodY = this.localFood.y;

        state.score += 1;
        this.localScene.createdScoreText.updateScore();
    }
}