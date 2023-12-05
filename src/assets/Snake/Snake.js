import Phaser from "phaser";
import { state } from "../state/state";
import { GameOverText } from "../gameOverText/GameOverText";

export class Snake extends Phaser.GameObjects.Rectangle {
    constructor(scene) {
        super(scene);

        this.snakeX = scene.blockSize * 5;
        this.snakeY = scene.blockSize * 5;
        this.snakeVelocityX = 0;
        this.snakeVelocityY = 0;
        this.snakeBody = [];
        this.snakeSprites = [];

        this.parentScene = scene;
        this.lcoalSnake = scene.add.rectangle(this.snakeX, this.snakeY, scene.blockSize, scene.blockSize, 0x00FF00);
    }
    changeDetection() {
        this.gameOver();
        this.checkEatFood();

        // Manipulate snake other body
        for (let i = this.snakeBody.length - 1; i > 0; i--) {
            this.snakeBody[i] = this.snakeBody[i - 1];
        }
        if (this.snakeBody.length) {
            this.snakeBody[0] = [this.snakeX, this.snakeY];
        }

        this.snakeX += this.snakeVelocityX * this.parentScene.blockSize;
        this.snakeY += this.snakeVelocityY * this.parentScene.blockSize;
        this.lcoalSnake.x = this.snakeX;
        this.lcoalSnake.y = this.snakeY;

        for (let i = 0; i < this.snakeBody.length; i++) {
            this.snakeSprites[i].x = this.snakeBody[i][0];
            this.snakeSprites[i].y = this.snakeBody[i][1];
        }
    }
    checkEatFood() {
        if (this.snakeX == state.currentFood.foodX && this.snakeY == state.currentFood.foodY) {
            this.snakeBody.push([state.currentFood.foodX, state.currentFood.foodY])
            this.snakeSprites.push(this.parentScene.add.rectangle(state.currentFood.foodX, state.currentFood.foodX, this.parentScene.blockSize, this.parentScene.blockSize, 0x00FF00))

            // Replace food to another place
            state.currentFood.replaceFood();
        }
    }
    gameOver() {
        // If snake catch wallks
        if (this.snakeX < 0 || this.snakeX > this.parentScene.cols * this.parentScene.blockSize || this.snakeY < 0 || this.snakeY > this.parentScene.rows * this.parentScene.blockSize) {
            state.isGameOver = true;
            this.parentScene.add.existing(new GameOverText(this.parentScene));
        }

        // If snake catsh this length
        for (let i = 0; i < this.snakeBody.length; i++) {
            if (this.snakeX == this.snakeBody[i][0] && this.snakeY == this.snakeBody[i][1]) {
                state.isGameOver = true;
                this.parentScene.add.existing(new GameOverText(this.parentScene));
            }
        }
    }
}