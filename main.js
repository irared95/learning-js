document.addEventListener('DOMContentLoaded', function() {

//     let dog = {
//         name: "Оладушек",
//         legs: 4,
//         isAwesome: true
//     };
//     dog.age = 6;
//     console.log(dog.name)
// console.log(dog)
//
//     let speak = function () {
//         console.log(this.sound + "! Меня зовут " + this.name + "!");
//     };
//     let cat = {
//         sound: "Мяу",
//         name: "Варежка",
//         speak: speak
// };
//     console.log(cat.speak())
//
//     let pig = {
//         sound: "Хрю",
//         name: "Чарли",
//         speak: speak
//     };
//    let horse = {
//         sound: "И-го-го",
//         name: "Мэри",
//         speak: speak
//     };
//     pig.speak();
//     horse.speak();

    //////////////////////////////////////////////////////////////////////////////////////////////

    let Car = function (x, y) {
        this.x = x;
        this.y = y;
        this.speed = 15;
        this.speedRandom = () => Math.floor(Math.random() * 11);
    };



    Car.prototype.draw = function () {
        let carHtml = '<img alt="car" src="./image/car-red.webp">';
        //передаем carHTML в функцию $, которая преобразует HTML в jQuery элемент
        this.carElement = $(carHtml);
        //мы вызываем для carElement метод css, чтобы задать изображению машины координаты, стили
        this.carElement.css({
            position: "absolute",
            left: this.x,
            top: this.y,
            backgroundColor: 'red',
            border: '4px solid blue',
        });
        //с помощью jQuery добавляем carElement к элементу body нашего HTML-документа
      $("body").append(this.carElement);
    };

    Car.prototype.moveRight = function () {
        if (this.x > 300){
            return false
        }
        this.x += this.speedRandom();
        this.carElement.css({
            left: this.x,
            top: this.y
        });
        console.log(this.speedRandom())
    }

    Car.prototype.moveLeft = function () {
        this.x -= 5;
        this.carElement.css({
            left: this.x,
            top: this.y
        });
    };
    Car.prototype.moveUp = function () {
        this.y -= 5;
        this.carElement.css({
            left: this.x,
            top: this.y
        });
    };
    Car.prototype.moveDown = function () {
        this.y += 5;
        this.carElement.css({
            left: this.x,
            top: this.y
        });
    };

    let tesla = new Car(10, 20);
    let nissan = new Car(10, 200);

    tesla.draw();
    nissan.draw();

    tesla.moveLeft()
    tesla.moveUp()
    tesla.moveDown()



    setInterval(function () {
        nissan.moveRight()
    }, 300)

    setInterval(function () {
        tesla.moveRight()
    }, 300)





});