document.addEventListener('DOMContentLoaded', function() {
    // let keyNames = {
    //     32: "space", //пробел
    //     37: "left", //влево
    //     38: "up", //вверх
    //     39: "right", //вправо
    //     40: "down" //вниз
    // };
    // $("body").keydown(function (event) {
    // console.log(keyNames[event.keyCode]);
    // });

    //////////////////////////////////////////////////////////////
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    let width = canvas.width;
    let height = canvas.height;
    let circle = function (x, y, radius, fillCircle) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        if (fillCircle) {
            ctx.fill();
        } else {
            ctx.stroke();
        }
    };
     // Конструктор Ball
    let Ball = function () {
        this.x = width / 2;
        this.y = height / 2;
        this.xSpeed = 5;
        this.ySpeed = 0;
    };

    // Обновляем позицию мяча соответственно его скорости
    Ball.prototype.move = function () {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if (this.x < 0) {
            this.x = width;
        } else if (this.x > width) {
            this.x = 0;
        } else if (this.y < 0) {
            this.y = height;
        } else if (this.y > height) {
            this.y = 0;
        }
    };

    // Рисуем мяч в его текущей позиции
    Ball.prototype.draw = function () {
        circle(this.x, this.y, 10, true);
    };
// Задаем направление движения по строке с названием действия
    Ball.prototype.setDirection = function (direction) {
        if (direction === "up") {
            this.xSpeed = 0;
            this.ySpeed = -5;
        } else if (direction === "down") {
            this.xSpeed = 0;
            this.ySpeed = 5;
        } else if (direction === "left") {
            this.xSpeed = -5;
            this.ySpeed = 0;
        } else if (direction === "right") {
            this.xSpeed = 5;
            this.ySpeed = 0;
        } else if (direction === "stop") {
            this.xSpeed = 0;
            this.ySpeed = 0;
        }
    };
// Создаем объект-мяч
    let ball = new Ball();
// Объект для перевода кодов клавиш в названия действий
    let keyActions = {
        32: "stop", // остановка
        37: "left", // влево
        38: "up", // вверх
        39: "right",// вправо
        40: "down" // вниз
    };
// Обработчик события keydown, будет вызван при каждом нажатии
// клавиши
    $("body").keydown(function (event) {
       let direction = keyActions[event.keyCode];
        ball.setDirection(direction);
    });
// Функция анимации, вызывается раз в 30 мс
    setInterval(function () {
        ctx.clearRect(0, 0, width, height);
        ball.draw();
        ball.move();
        ctx.strokeRect(0, 0, width, height);
    }, 30);
});