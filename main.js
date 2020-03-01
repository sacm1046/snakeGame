let matrizPlayer = [
    ["p1-ta1", "p1-tb1", "p1-tc1", "p1-td1", "p1-te1", "p1-tf1", "p1-tg1", "p1-th1", "p1-ti1", "p1-tj1"],
    ["p1-ta2", "p1-tb2", "p1-tc2", "p1-td2", "p1-te2", "p1-tf2", "p1-tg2", "p1-th2", "p1-ti2", "p1-tj2"],
    ["p1-ta3", "p1-tb3", "p1-tc3", "p1-td3", "p1-te3", "p1-tf3", "p1-tg3", "p1-th3", "p1-ti3", "p1-tj3"],
    ["p1-ta4", "p1-tb4", "p1-tc4", "p1-td4", "p1-te4", "p1-tf4", "p1-tg4", "p1-th4", "p1-ti4", "p1-tj4"],
    ["p1-ta5", "p1-tb5", "p1-tc5", "p1-td5", "p1-te5", "p1-tf5", "p1-tg5", "p1-th5", "p1-ti5", "p1-tj5"],
    ["p1-ta6", "p1-tb6", "p1-tc6", "p1-td6", "p1-te6", "p1-tf6", "p1-tg6", "p1-th6", "p1-ti6", "p1-tj6"],
    ["p1-ta7", "p1-tb7", "p1-tc7", "p1-td7", "p1-te7", "p1-tf7", "p1-tg7", "p1-th7", "p1-ti7", "p1-tj7"],
    ["p1-ta8", "p1-tb8", "p1-tc8", "p1-td8", "p1-te8", "p1-tf8", "p1-tg8", "p1-th8", "p1-ti8", "p1-tj8"],
    ["p1-ta9", "p1-tb9", "p1-tc9", "p1-td9", "p1-te9", "p1-tf9", "p1-tg9", "p1-th9", "p1-ti9", "p1-tj9"],
    ["p1-ta10", "p1-tb10", "p1-tc10", "p1-td10", "p1-te10", "p1-tf10", "p1-tg10", "p1-th10", "p1-ti10", "p1-tj10"]
]

let snake = []
let food = []
let randomX1 = 0
let randomY1 = 0
let up = 0
let down = 0
let left = 0
let rigth = 0
let time = 500
let count = 0

function finish() {
    location.reload()
    alert("Puntaje " + count + "\nInténtalo de nuevo")
    count = 0
}

function posSnake() {
    randomX1 = Math.floor(Math.random() * 10)
    randomY1 = Math.floor(Math.random() * 10)

    snake = [(matrizPlayer[randomX1][randomY1])]
    document.getElementById(snake[0]).style.background = "red"
    document.getElementById('score').innerHTML = count
}
posSnake();

function posSnakeFood() {
    let randX1 = Math.floor(Math.random() * 10)
    let randY1 = Math.floor(Math.random() * 10)
    if ([(matrizPlayer[randX1][randY1])] === snake) {
        randX1 = Math.floor(Math.random() * 10)
        randY1 = Math.floor(Math.random() * 10)
        food = [(matrizPlayer[randX1][randY1])];
    }
    else {
        food = [(matrizPlayer[randX1][randY1])];
    }
    document.getElementById(food[0]).style.background = "Green"
}
posSnakeFood();

function eaten() {
    if (snake[0] === food[0]) {
        posSnakeFood()
        time = time * 0.95
        count++
        document.getElementById('score').innerHTML = count
    }
}
function moveUp() {
    if (randomX1 > 0) {
        document.getElementById(snake[0]).style.background = "white"
        randomX1 = randomX1 - 1
        snake = [(matrizPlayer[randomX1][randomY1])]
        for (let x = 0; x < snake.length; x++) {
            document.getElementById(snake[x]).style.background = "red"
        }
        eaten()
    }
    else {
        finish()
    }
}
function moveDown() {
    if (randomX1 < 9) {
        document.getElementById(snake[0]).style.background = "white"
        randomX1 = randomX1 + 1
        snake = [(matrizPlayer[randomX1][randomY1])]
        for (let x = 0; x < snake.length; x++) {
            document.getElementById(snake[x]).style.background = "red"
        }
        eaten()
    }
    else {
        finish()
    }
}
function moveLeft() {
    if (randomY1 > 0) {
        document.getElementById(snake[0]).style.background = "white"
        randomY1 = randomY1 - 1
        snake = [(matrizPlayer[randomX1][randomY1])]
        for (let x = 0; x < snake.length; x++) {
            document.getElementById(snake[x]).style.background = "red"
        }
        eaten()
    }
    else {
        finish()
    }
}
function moveRigth() {
    if (randomY1 < 9) {
        document.getElementById(snake[0]).style.background = "white"
        randomY1 = randomY1 + 1
        snake = [(matrizPlayer[randomX1][randomY1])]
        for (let x = 0; x < snake.length; x++) {
            document.getElementById(snake[x]).style.background = "red"
        }
        eaten()
    }
    else {
        finish()
    }
}
let body = document.querySelector("body")
body.addEventListener("keydown", (e) => {
    e.preventDefault()
    if (e.keyCode === 38) {
        if (down !== 0) {
            finish()
        }
        else {
            clearInterval(down)
            clearInterval(left)
            clearInterval(rigth)
            down = 0
            left = 0
            rigth = 0
            up = setInterval('moveUp()', time)
        }
    }
    else if (e.keyCode === 40) {
        if (up !== 0) {
            finish()
        }
        else {
            clearInterval(up)
            clearInterval(left)
            clearInterval(rigth)
            down = setInterval('moveDown()', time)
            up = 0
            left = 0
            rigth = 0
        }
    }
    else if (e.keyCode === 37) {
        if (rigth !== 0) {
            finish()
        }
        else {
            clearInterval(up)
            clearInterval(down)
            clearInterval(rigth)
            up = 0
            down = 0
            rigth = 0
            left = setInterval('moveLeft()', time)
        }
    }
    else if (e.keyCode === 39) {
        if (left !== 0) {
            finish()
        }
        else {
            clearInterval(up)
            clearInterval(down)
            clearInterval(left)
            up = 0
            down = 0
            left = 0
            rigth = setInterval('moveRigth()', time)
        }
    }
    else {
        null
    }

})
