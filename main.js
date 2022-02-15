document.addEventListener('DOMContentLoaded', function () {
    // let newHeadingText = prompt("Введите новый заголовок:");
    // $("#main__heading").text(newHeadingText);
    // $("body").append("<p>Это новый параграф</p>");
    // for (let i = 0; i < 5; i++) {
    //     $("h1").fadeOut(1000);
    //     $("h1").fadeIn(1000);
    // }
    // $("h1").fadeOut(3000);
    // $("h1").text("Этот текст скоро исчезнет").fadeOut(3000);
    // $("h1").fadeOut( 1000).fadeIn(1000);
    // $("h1").fadeOut(1000).fadeIn(1000);
    // $("h1").fadeOut(1000);
    // $("h1").fadeIn(1000);
    // $("h1").fadeOut(1000);
    // $("h1").show(1000).hide(1000);
    //
    // let friends = [
    //     'Ira',
    //     'Vladimir',
    //     'Kate',
    // ]
    // const time = 3000;
    // let newTitle = 'My friends';
    // for (let i = 0; i < friends.length; i++) {
    //     let friend = friends[i];
    //     $("body").append("<p>  " + friend +  "  </p>")
    //     $("p:last-child").hide().fadeIn((i + 1) * time)
    //
    // }
    //
    //
    // $("#main__heading").text(newTitle)
    // $("p").append(" best ");
    //////////////////////////////////////////////////////////////////////////////////////////////


    // for (let i = 0; i < 10; i++) {
    //     $("h1").fadeIn().hide((i * 1000))
    // }

    // $("h1").fadeOut( 500 ).delay( 5000 ).fadeIn( 500 );

    // $("h1").fadeTo(5000, 0.5);
    //////////////////////////////////////////////////////////////////////////
    // let timeUp = function () {
    //     console.log("Время вышло!");
    // };
    // setTimeout(timeUp, 3000);
    // console.log(setTimeout(timeUp, 3000))
    ////////////////////////////////////////////////////////////////////
    // let doHomeworkAlarm = function () {
    //     console.log("Эй! Пора делать домашку!");
    // };
    // let timeoutId = setTimeout(doHomeworkAlarm, 60000);
    // clearTimeout(timeoutId);

    ////////////////////////////////////////////////////////////////////////

    // let counter = 1;
    // let printMessage = function (){
    //     console.log ('you are look console' + counter + 'sek');
    //     counter++
    //     if (counter > 5){
    //         clearInterval(internalId);
    //     }
    // };
    // let internalId = setInterval(printMessage, 300);

    //////////////////////////////////////////////////////////////////////////////

    // let leftOffset = 0;
    // let moveHeading = function (){
    //     $('#main__heading').offset({top: leftOffset, left: leftOffset});
    //     leftOffset++
    //
    //     if (leftOffset > 100){
    //         leftOffset = 0;
    //     }
    // }
    // setInterval(moveHeading, 10);
////////////////////////////////////////////////////////////////////////////////////////////////
//   let clickHandler = function (event){
//       console.log("Клик! " + event.pageX + " " + event.pageY);
//   }
//     $("h1").click(clickHandler);
    ////////////////////////////////////////////////////////////////////////////////////////////////

    // $('html').on('click', function (event){
    //     $('#main__heading').offset({
    //         left: event.pageX,
    //         top: event.pageY
    //         }
    //     )
    // });
    /////////////////////////////////////////////////////////////////////////////////////////////////


    let leftOffset = 0;
    let topOffset = 0;

    let moveHeading = function () {
        $('#main__heading').offset({left: leftOffset, top: topOffset});
        //сдвиг слево направо
        if (leftOffset < 200 && topOffset === 0) {
            leftOffset++
            console.log(1)
        }
        //сдвиг сверху вниз
        if (leftOffset >= 200 && topOffset < 200) {
            topOffset++;
            console.log(2)
        }
        //сдвиг справо налево
        if (leftOffset <= 200 && topOffset >= 200) {
            leftOffset--
            console.log(3)
        }
        /////сдвиг сверзу внизу
        if (leftOffset === 0 && topOffset <= 200) {
            topOffset--
        }
    }

    //запуск интервала анимаций по квадрату
    let intervalLength = 15;
    let intervalId = setInterval(moveHeading, intervalLength);
    //счетик кликов
    let counter= 0;
    //текст вывода счетчика кликов
    let clickText = 'you click ';
    function clickAnimation(event) {
        //вывод текста в заголовок
        // console.log(clickText + counter)
        //вывод текста победы когда кликнули блольше 10 раз
        if (counter < 10){
            $("#main__heading").text(clickText + counter)
            counter++
            clearInterval(intervalId)
            intervalLength -=2;
            intervalId = setInterval(moveHeading, intervalLength)
        }
        if (counter >= 10){
            $("#main__heading").text("you win");
            clearInterval(intervalId)
        }
        //увелечение количества раз кликов
        console.log(counter)
    }

    //клик по заголовку
    $("h1").on("click", clickAnimation);
    
});

