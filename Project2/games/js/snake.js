let grid = document.querySelector(".grid");
let width = 20;
let currentIndex = 0;
let appleIndex = 0;
let currentSnake = [2, 1, 0];
let direction = 1;
let score = 0;
let speed = 0.8;
let intervalTime = 0;
let interval = 0;
let stage = 0;
let boomIndex = 0;

grid.style.width = width * 20 + "px";
grid.style.height = width * 20 + "px";
localStorage.setItem("score", score);
stage = Number(localStorage.getItem("level-snake"));
if (stage > 1) {
    speed = 0.6;
}

document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("keyup", control);
    createBoard();
    startGame();
})

//createboard function
function createBoard() {
    for (let i = 0; i < width * width; i++) {
        let div = document.createElement("div");
        grid.appendChild(div);
    }
}

//startgame function
function startGame() {
    let squares = document.querySelectorAll(".grid div");
    randomApple(squares);
    //random apple 
    direction = 1;
    //scoreDisplay.innerHTML = score;
    localStorage.setItem("score", score);
    intervalTime = 1000;
    currentSnake = [2, 1, 0];
    currentIndex = 0;
    currentSnake.forEach(index => squares[index].classList.add("snake"));
    squares[currentSnake[0]].classList.add("head");
    interval = setInterval(moveOutcome, intervalTime);
}

function moveOutcome() {
    let squares = document.querySelectorAll(".grid div");
    if (checkForHits(squares)) {
        alert("you hit something");
        localStorage.setItem("score", 0);
        score = 0;
        clearInterval(interval);
        if (confirm("Play Again?") == true) {
            replay();
        }
    } else {
        moveSnake(squares);
    }
}

function moveSnake(squares) {
    let tail = currentSnake.pop();
    squares[tail].classList.remove("snake");
    currentSnake.unshift(currentSnake[0] + direction);
    // movement ends here  
    eatApple(squares, tail);
    squares[currentSnake[0]].classList.add("snake");
    squares[currentSnake[0]].classList.add("head");
    squares[currentSnake[1]].classList.remove("head");
}

function checkForHits(squares) {
    if (
        (currentSnake[0] + width >= (width * width) && direction === width) ||
        (currentSnake[0] % width === width - 1 && direction === 1) ||
        (currentSnake[0] % width === 0 && direction === -1) ||
        (currentSnake[0] - width <= 0 && direction === -width) ||
        squares[currentSnake[0] + direction].classList.contains("snake") ||
        (stage === 3 && isboom(squares))
    ) {
        return true;
    } else {
        return false;
    }
}
function isboom(squares) {
    if (squares[currentSnake[0]].classList.contains("boom")) {
        return true;
    }
    return false;
}

function eatApple(squares, tail) {
    if (squares[currentSnake[0]].classList.contains("apple")) {
        squares[currentSnake[0]].classList.remove("apple");
        squares[tail].classList.add("snake");
        currentSnake.push(tail);
        randomApple(squares);
        if (stage === 3) {
            squares[boomIndex].classList.remove("boom");
            randomBoom(squares);
        }
        score += stage;
        localStorage.setItem("score", score);
        clearInterval(interval);
        intervalTime = intervalTime * speed;
        interval = setInterval(moveOutcome, intervalTime);
    }
}

function randomApple(squares) {
    do {
        appleIndex = Math.floor(Math.random() * squares.length);
    } while (squares[appleIndex].classList.contains("snake"));
    squares[appleIndex].classList.add("apple");
}
function randomBoom(squares) {
    do {
        boomIndex = Math.floor(Math.random() * squares.length);
    } while (squares[boomIndex].classList.contains("snake") || squares[boomIndex].classList.contains("apple"));
    squares[boomIndex].classList.add("boom");
}

function control(e) {
    if (e.keycode === 39) {
        direction = 1; // right 
    } else if (e.keycode === 38) {
        direction = -width; //if we press the up arrow, the snake will go ten divs up
    } else if (e.keycode === 37) {
        direction = -1; // left, the snake will go left one div
    } else if (e.keycode === 40) {
        direction = +width; // down the snake head will instantly appear 10 divs below from the current div 
    }
}


document.addEventListener("keydown", function (e) {
    if (e.key == 'ArrowRight') {
        direction = 1;
    }
    if (e.key == 'ArrowLeft') {
        direction = -1;
    }
    if (e.key == 'ArrowUp') {
        direction = -width
    }
    if (e.key == 'ArrowDown') {
        direction = +width;
    }
});

function replay() {
    grid.innerHTML = "";
    createBoard();
    startGame();
    localStorage.setItem("score", 0);
    score = 0;
}  