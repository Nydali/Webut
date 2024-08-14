const gameContainer = document.querySelector('.game-container');
const paddle = document.getElementById('paddle');
const ball = document.getElementById('ball');
const scoreElement = document.getElementById('score');

let score = 0;
let ballSpeed = 2;
let ballX = Math.random() * 380; // Initial horizontal position of the ball
let ballY = 0; // Initial vertical position of the ball
let paddleX = 160; // Initial position of the paddle

// Move the paddle with arrow keys
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && paddleX > 0) {
        paddleX -= 20;
    } else if (event.key === 'ArrowRight' && paddleX < 320) {
        paddleX += 20;
    }
    paddle.style.left = `${paddleX}px`;
});

// Game loop to move the ball
function gameLoop() {
    ballY += ballSpeed;
    ball.style.top = `${ballY}px`;
    ball.style.left = `${ballX}px`;

    // Check if ball hits the bottom of the screen (missed the paddle)
    if (ballY >= 580) {
        if (ballX + 20 >= paddleX && ballX <= paddleX + 80) {
            // Ball caught by the paddle
            score++;
            scoreElement.textContent = score;
            resetBall();
        } else {
            // Game over
            alert('Game Over! Your final score is: ' + score);
            resetGame();
        }
    }

    // Reset ball when it reaches the bottom
    if (ballY > 600) {
        resetBall();
    }

    requestAnimationFrame(gameLoop);
}

function resetBall() {
    ballX = Math.random() * 380;
    ballY = 0;
}

function resetGame() {
    score = 0;
    scoreElement.textContent = score;
    resetBall();
}

gameLoop();
