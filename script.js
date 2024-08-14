const gameContainer = document.querySelector('.game-container');
const paddle = document.getElementById('paddle');
const ball = document.getElementById('ball');
const scoreElement = document.getElementById('score');

let score = 0;
let ballSpeed = 2;
let ballX = Math.random() * 380; 
let ballY = 0; 
let paddleX = 160; 


document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && paddleX > 0) {
        paddleX -= 20;
    } else if (event.key === 'ArrowRight' && paddleX < 320) {
        paddleX += 20;
    }
    paddle.style.left = `${paddleX}px`;
});


function gameLoop() {
    ballY += ballSpeed;
    ball.style.top = `${ballY}px`;
    ball.style.left = `${ballX}px`;

   
    if (ballY >= 580) {
        if (ballX + 20 >= paddleX && ballX <= paddleX + 80) {
            
            score++;
            scoreElement.textContent = score;
            resetBall();
        } else {
            // Game over
            alert('Game Over! Your final score is: ' + score);
            resetGame();
        }
    }

    
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
