document.addEventListener('DOMContentLoaded', function() {

   //
   // const name = prompt('Как вас зовут?');
   // console.log('привет, ' + name)

    // const likesCats = confirm('Do yo like cats?');
    // if (likesCats) {
    //    console.log('You are beautiful');
    // }   else {
    //    console.log('You are not beautiful');
    // }
    //
    // alert('javascript is cool')


    //Создаем массив со словами
    let words = [
        // 'программа',
        // 'макака',
        // 'прекрасный',
        // 'оладушек',
        'бу',
        // 'тролль',
    ]
    // Выбираем случайное слово
    let word = words[Math.floor(Math.random() * words.length)]
     console.log(word)

    //Создаем итоговый массив
    let answerArray = [];
    for (let i = 0; i < word.length; i++){
        answerArray[i] = ' _ ';
        console.log(answerArray)
    }


    let remainingLetters = word.length
    console.log(remainingLetters)
    let attemptCounter = 0;
    const ATTEMPT = 5;
    let switchGame = true;

    //Игровой цикл
     while (remainingLetters > 0 && switchGame){  //показываем состояние игры, сколько букв угадано
       alert(answerArray.join(''))
        //запрашиваем у игрока вариант ответа
        let guess = prompt('угадайте букву, или нажмите Отмена для выхода из игры. У вас осталось попыток:' + (ATTEMPT - attemptCounter));
         guess = guess.toLowerCase();
        if (guess===null){
            break;
        }
        if (guess.length !== 1) {
            alert('введите одну букву')
        }
        else {
          for (let j = 0; j < word.length; j++){
              if (word[j] === guess) { //проверяем совпадает ли текущая буква с ответом игрока
                  answerArray[j] = guess; //если да, то мы обновляем итоговый массив добавляя туда букву этой командой
                  remainingLetters--;
              }
          }
        }
        attemptCounter++;
        if (attemptCounter === ATTEMPT){
            alert('вы изчерпали количество попыток')
            switchGame = false
        }
         if(word === answerArray.join('')){
             alert('Отлчино! Было загадано слово ' + word);
         }
         console.log('attempt', attemptCounter)
         console.log('guess', guess)
         console.log('answerArray', answerArray.join(''))
         console.log('answerArray', answerArray)
    }
});