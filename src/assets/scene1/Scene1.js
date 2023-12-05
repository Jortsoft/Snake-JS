import Phaser from "phaser";
import { Snake } from "../Snake/Snake";
import { Food } from "../food/Food";
import { state } from "../state/state";
import { ScoreText } from "../scoreText/ScoreText";

export class Scene1 extends Phaser.Scene {
    constructor() {
        super("Scene1");
        this.blockSize = 25;
        this.rows = 20;
        this.cols = 20;
    }
    create() {
        this.keyBoardInteractive();
        this.createGameObjects();

        // Update loop
        window.setInterval(() => {
            if (state.isGameOver) return;
            this.createdSnake.changeDetection();
        }, 1000 / 10)
    }
    createGameObjects() {
        // Create score text ui
        this.createdScoreText = this.add.existing(new ScoreText(this, state.score));

        // Create snake
        this.createdSnake = this.add.existing(new Snake(this));

        // Create food
        this.createdFood = this.add.existing(new Food(this));
        state.currentFood = this.createdFood;
    }
    keyBoardInteractive() {
        document.addEventListener('keyup', (e) => {
            if (e.key == 'ArrowUp' && this.createdSnake.snakeVelocityY != 1) {
                this.createdSnake.snakeVelocityX = 0;
                this.createdSnake.snakeVelocityY = -1;
            } else if (e.key == 'ArrowDown' && this.createdSnake.snakeVelocityY != -1) {
                this.createdSnake.snakeVelocityX = 0;
                this.createdSnake.snakeVelocityY = 1;
            } else if (e.key == 'ArrowLeft' && this.createdSnake.snakeVelocityX != 1) {
                this.createdSnake.snakeVelocityX = -1;
                this.createdSnake.snakeVelocityY = 0;
            } else if (e.key == 'ArrowRight' && this.createdSnake.snakeVelocityX != -1) {
                this.createdSnake.snakeVelocityX = 1;
                this.createdSnake.snakeVelocityY = 0;
            }
        })
    }
}