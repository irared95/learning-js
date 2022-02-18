document.addEventListener('DOMContentLoaded', function() {


    //генерируем случайное число от 0 до 1 с помощью Math.random, умножаем его на аргумент size и затем используем Math.floor для округления до ближайшего снизу целого
    // числа. Далее мы возвращаем полученный результат из функции. Вызов getRandomNumber(400) вернет случайное число от 0 до 399.
    //функция,принимает размер в качестве аргумента и возвращает случайное число от 0 до этого размера (но не включая его)

    let getRandomNumber = function (size) {
        console.log('fn getRandomNumber', Math.floor(Math.random() * size) )
        return Math.floor(Math.random() * size);
    };



    //Чтобы выяснить, «горячо» или «холодно» (вблизи клада сделан клик или далеко от него), нужно найти расстояние между точкой клика и местом,где лежит клад. Для этого создаем функцию getDistance
    //Функция getDistance принимает два аргумента: event и target. Объект event — тот же самый, что передается  обработчику кликов, и в нем содержится информация о событии. В частности, это
    //свойства offsetX и offsetY, хранящие x- и y-координаты клика
    let getDistance = function (event, target) {
        //diffX хранит горизонтальное расстояние между кликом и кладом, которое мы получаем, вычитая target.x (x-координата клада) из event.offsetX (x-координата клика).
        let diffX = event.offsetX - target.x;
        // diffY вертикальное растояние
        let diffY = event.offsetY - target.y;
        console.log('fn getDistance', Math.sqrt((diffX * diffX) + (diffY * diffY)))
        return Math.sqrt((diffX * diffX) + (diffY * diffY));
    };

    let getDistanceHint = function (distance) {
        if (distance < 10) {
            console.log("Обожжешься!");
            return "Обожжешься!"
        } else if (distance < 20) {
            console.log("Очень горячо");
            return "Очень горячо"
        } else if (distance < 40) {
            console.log("Горячо")
            return "Горячо";
        } else if (distance < 80) {
            console.log("Тепло")
            return "Тепло";
        } else if (distance < 160) {
            console.log("Холодно")
            return "Холодно";
        } else  if (distance < 200){
            console.log("Очень холодно");
            return "Очень холодно"
        }
        else if (distance < 320) {
            console.log("Очень очень холодно");
            return "Очень холодно"
        } else {
            console.log("Замерзнешь!");
           return "Замерзнешь!";
        }
    };
    console.log('fn getDistanceHint',getDistanceHint ())



    //переменные width и height, соответствующие ширине и высоте элемента img в html
    let width = 400;
    let height = 400;
    let clicks = 0;
    let counterClicks = 5

    //создали объект под названием target с двумя свойствами x и y, обозначающими координаты клада. Значения x и y мы получаем из функции getRandomNumber.
    //он вычисляет расстояние между event (местом клика) и target (позицией клада)
    let target = {
        x: getRandomNumber(width),
        y: getRandomNumber(height)
    };
    console.log(target)

      // обрабочик кликов
    //функция, будет вызываться каждый раз, когда игрок кликнет по карте.
    $("#map").on( 'click' ,function (event) {
        if (counterClicks === 0){
            $("#heading").text("КОНЕЦ ИГРЫ");
            return false
        }

        // увеличиваеться счетчик каждый раз, когда игрок кликнет по карте.
        clicks++

        // Получаем расстояние от места клика до клада
        let distance = getDistance(event, target);

        //мы использовали функцию getDistanceHint для преобразования этого расстояния в строку ("Холодно", "Тепло" и т д)
        let distanceHint = getDistanceHint(distance);

        //мы обновляем подсказку на экране, чтобы игрок видел, насколько он близок к цели.
        $("#distance").text(distanceHint);

        // Если клик был достаточно близко, поздравляем с победой
        if (distance < 8) {
            alert("Клад найден! Сделано кликов: " + clicks);
        }

        if (counterClicks > 0){
            $("#heading").text('У вас осталось ' + counterClicks)
            counterClicks--
        }
    });






});