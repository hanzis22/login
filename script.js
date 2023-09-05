const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 480;
canvas.height = 600;

const carWidth = 50;
const carHeight = 100;
let carX = canvas.width / 2 - carWidth / 2;
const carSpeed = 5;

function drawCar() {
    ctx.fillStyle = "blue";
    ctx.fillRect(carX, canvas.height - carHeight, carWidth, carHeight);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function gameLoop() {
    clearCanvas();
    drawCar();
    requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft" && carX > 0) {
        carX -= carSpeed;
    } else if (event.key === "ArrowRight" && carX < canvas.width - carWidth) {
        carX += carSpeed;
    }
});

gameLoop();
