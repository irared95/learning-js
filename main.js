document.addEventListener('DOMContentLoaded', function() {
//находим элемент canvas с помощью команды document.getElementById (возвращает объект DOM для элемента с указанным id.) и сохраняем этот объект в переменной let canvas
//     let canvas = document.getElementById("canvas");
//Теперь нужно получить контекст рисования для элемента canvas. Контекст рисования — это JavaScript-объект, обладающий методами и свойствами, при помощи которых можно рисовать на «холсте».
// Чтобы получить этот объект,мы вызываем для canvas метод getContext, передавая ему строку "2d". Сохраняем контекст в переменной ctx с помощью команды var ctx = canvas.getContext("2d").
//    let ctx = canvas.getContext("2d");
   //метод контекста рисования fillRect, который принимает четыре аргумента: это, в порядке очередности, x- и y-координаты верхнего левого угла квадрата (0, 0), а также его ширина и высота (10, 10).
    // for (let i = 0; i < 8; i++) {
    //     ctx.fillRect(i * 10, i * 10, 10, 10);
    // }
    //робот
    // ctx.fillStyle = "Red";
    // ctx.fillRect(25, 0, 50, 50);
    // ctx.fillRect(45, 5, 10, 70);
    // ctx.fillRect(15, 73, 40, 10);
    // ctx.fillRect(45, 73, 40, 10);
    // ctx.fillRect(25, 0, 50, 50);
    // ctx.fillRect(20, 80, 60, 50);
    // ctx.fillRect(20, 120, 10, 50);
    // ctx.fillRect(70, 120, 10, 50);


    // ctx.strokeStyle = "Purple";
    // ctx.lineWidth = 4;
    // ctx.beginPath();
    // ctx.moveTo(10, 10);
    // ctx.lineTo(60, 60);
    // ctx.moveTo(60, 10);
    // ctx.lineTo(10, 60);
    // ctx.stroke();

 ///////////////////////////////////////////////////////////////////////////////////////////////////
//  let position = 0;
//
//  setInterval(function () {
//   ctx.clearRect(0, 0, 200, 200);
//   ctx.fillRect(0, 0, position, position);
//   position++;
// if (position > 200) {
//    position = 0;
//   }
// }, 10);

 //////////////////////////////////////////////////////////////////////////////////////////////////////

    // let canvas = document.getElementById("canvas");
    // let ctx = canvas.getContext("2d");


    let Ball = function () {
        this.x = 100;
        this.y = 100;
        this.xSpeed = -2;
        this.ySpeed = 3;
    };

    let circle = function (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
     if (fillCircle) {
     ctx.fill();
     } else {
     ctx.stroke();
     }
   };
    Ball.prototype.draw = function () {
        circle(this.x, this.y, 5, true);
    };

    Ball.prototype.move = function () {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    };

    Ball.prototype.checkCollision = function () {
     if (this.x < 0 || this.x > 200) {
            this.xSpeed = -this.xSpeed;
        }
     if (this.y < 0 || this.y > 200) {
            this.ySpeed = -this.ySpeed;
        }
    };


    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

     let ball = new Ball();
     setInterval(function () {
     ctx.clearRect(0, 0, 200, 200);
     ball.draw();
     ball.move();
     ball.checkCollision();
     ctx.strokeRect(0, 0, 200, 200);
 }, 30);


    // let drawBee = function (x, y) {
    //     ctx.lineWidth = 2;
    //     ctx.strokeStyle = 'Black';
    //     ctx.fillStyle = 'Gold';
    //     circle(x, y, 8, true);
    //     circle(x, y, 8, false);
    //     circle(x - 5, y - 11, 5, false);
    //     circle(x + 5, y - 11, 5, false);
    //     circle(x - 2, y - 1, 2, false);
    //     circle(x + 2, y - 1, 2, false);
    // }
    //
    // let update = function (coordinate) {
    // let offset = Math.random() * 4 - 2;
    //  coordinate += offset;
    //  if (coordinate > 200) {
    //         coordinate = 200;
    //     }
    //   if (coordinate < 0) {
    //         coordinate = 0;
    //     }
    //   return coordinate;
    // };
    // console.log()
    //
    // let canvas = document.getElementById("canvas");
    // let ctx = canvas.getContext("2d");
    // let x = 100;
    // let y = 100;
    // setInterval(function () {
    // ctx.clearRect(0, 0, 200, 200);
    //  drawBee(x, y);
    //   x = update(x);
    //   y = update(y);
    //  ctx.strokeRect(0, 0, 200, 200);
    // }, 30);


});