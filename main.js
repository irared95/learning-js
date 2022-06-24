document.addEventListener('DOMContentLoaded', function() {
    //Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18),
    // взрослым (18_60) или пенсионером (60– ...).
    // let userAge = +prompt('How old are you?')
    // let numberAge = Number(userAge)
    //
    // if (numberAge >= 0 && numberAge <= 12) {
    //     alert('You are a child');
    // } else{
    //     alert('oops')
    // }

    //Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
    //
    // let userNumber = prompt('введите трехзначное число')
    // const trimmedUserNumber = userNumber.trim()
    // if (trimmedUserNumber.length === 3){
    //     alert('ok')
    // } else {
    //     alert('no ok')
    // }
    //
    // if(userNumber[0] === userNumber[1]){
    //     alert('есть одиннаковый цифры')
    // } else{
    //     alert('нет одиннаковых цифр')
    // }

    // const text = prompt ('введите число')
    // let i = 0
    // let message = ''
    // while (i < text){
    //     message += '# '
    //     console.log(message)
    //     i++
    //
    //
    // }
    // let passport = '';
    // let age = 0;
    // passport = age > 18 ? 'exist passport' : 'not exist passport'
    // if (age > 18){
    //     passport = 'exist passport
    // } else{
    //     passport = 'not exist passport
    // }

    // console.log(passport)


    // //Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
    // let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    // num.join()
    // console.log(num.join('-'))

    //Дан массив числами, например: [10, 20, 30, 50, 235, 3000].
    // Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
    //
    // let nums = [10, 20, 30, 50, 235, 3000]
    //
    // let newNum = nums.filter(function (elem,index){
    //     let str = elem.toString()
    //     if (str[0] === '1' || str[0] === '2' || str[0] === '5'){
    //         return elem
    //     }
    //  })
    // console.log(newNum)

    ////Подсчитать сумму всех чисел в заданном пользователем диапазоне.  1  +2+3+4+5+6+7+8+9      10
    // let oneNum = +prompt('number one')
    // let twoNum = +prompt('number two')
    // let total = 0
    //
    // for (let i = oneNum; i <= twoNum; i++){
    //     total = total + i
    // }
    //
    // alert(total)

    //Выведите с помощью цикла столбец чисел от 1 до 100.

    // for (let i = 1; i <= 100; i++){
    //     console.log (i)
    // }
    //Выведите с помощью цикла столбец чисел от 100 до 1

    // for (let i = 100; i >= 1; i--){
    //     console.log (i)
    // }

    //Выведите с помощью цикла столбец четных чисел от 1 до 100
    //
    // for (let i = 0; i <= 100; i++){
    //     if ( i % 2 === 0){
    //         console.log(i)
    //     }
    //
    // }

    //Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.

    // let arr = [1,2,3,4,5]
    // let sum = 0
    //
    // arr.forEach(function(elem, index, array){
    //     sum += elem
    // })
    //
    // console.log(sum1)

    // let arr1 = [1, 2, 3, 4, 5];
    // let sum1 = 0;
    // for (let i = 0; i < arr1.length; i++) {
    //     sum1 += arr1[i];
    // }
    // console.log(sum1);

    /////////////
    // function checkAge(age) {
    //   let num =  age > 18 ? true : 'gjrf';
    //   return num
    // }
    // const y = checkAge(78)

    //Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.

    // function getMinNumber (a, b){
    //     if (a < b){
    //         return a
    //     }
    //     return b
    //
    // }
    // console.log(getMinNumber(10,5))

    //Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
    //


    // function getNum (x,n){
    //     let sum = 1
    //     for (let i = 0; i <= n; i++){
    //       sum *= x
            // sum = sum * x
    //     }
    //     return sum
    // }
    // console.log(getNum (10,10))


    //два числа 5 - х и 4 - н
    // 5 умножаеться на 1 потом 2 потои 3 потом 4, вышел с цикла


    // let arr1 = [1, 2, 3, 4, 5];
    // let sum1 = 0;
    // for (let i = 0; i < arr1.length; i++) {
    //     sum1 += arr1[i];
    // }
    // console.log(sum1);

    //Написать функцию, которая принимает 2 числа и возвращает -1,
    // если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

    // function getNum (a , b){
    //   if (a < b){
    //       return -1
    //   } else if(a > b){
    //       return 1
    //   } else {
    //       return 0
    //   }
    // }
    // console.log(getNum(4,1))


    //Написать функцию, которая вычисляет факториал переданного ей числа.
    // function factorial(n) {
    //     return (n != 1) ? n * factorial(n - 1) : 1;
    // }
    // console.log(factorial(5))

    //Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

    // function getNum (a, b, c){
       // let num1 = a.toString()
       // let num2 = b.toString()
       //  let num3= c.toString()
    //     return `${a} ${b} ${c}`
    //
    // }
    // console.log(getNum(1,2,3))

  //Написать функцию, которая принимает время (часы, минуты, секунды)
    // и выводит его на экран в формате «чч:мм:сс».
    // Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

    // function time (hours, min = 0, sec = 0){
    //     let formattedMin = formattingTime(min)
    //     let formattedSec =   formattingTime(sec)
    //
    //     return `${hours}:${formattedMin}:${formattedSec}`
    // }
    //
    // console.log(time(7,9, 8))
    //
    //
    //  function formattingTime(time) {
    //         return time > 9 ? time : `0${time}`
    //     }


    // function doubleChar(str) {
    //     let str1 = ''
    //     for (let i = 0; i <  str.length; i++){
    //        str1 += str[i] + str[i]
    //     }
    //     return str1
    // }
    // console.log(doubleChar('hello'))
    //
    // function calcFactorial(num){
    //     let result =1
    //     for (let i = 1; i <= num; i++){
    //         result *= i
    //     }
    //     return result
    // }
    // console.log(calcFactorial(6))

    ///////
    // const user = {
    //     name: 'Irina',
    //     age: '26',
    //     role: 'user',
    //     country : {
    //         city: 'Odessa',
    //         religion: 'UK',
    //     },
    //     length() {
    //     return console.log(Object.keys(this).length)
    //     },
    //     checkPermission() {
    //        if (this.role === 'admin'){
    //           console.log ("a")
    //         }
    //         if (this.role === 'user'){
    //             console.log ("b")
    //         }
    //     }
    // }
    // user.length()
    // user.checkPermission()
    //
    // const admin = {}
    // Object.assign(admin, user)
    // delete admin.role;
    // admin.length()

    ////////////////
    //
    // function CreateUser (name, age, height , weight){
    //     this.name = name;
    //     this.age = age;
    //     this.height = height;
    //     this.weight = weight;
    //
    //     if (typeof age !== 'number'){
    //         console.log('ошибка')
    //         return{}
    //     }
    // }
    //
    // const girl = new CreateUser('bhf',23,67,56)
    // const boy = new CreateUser('hij', 67)

    // const user = {
    //     name : 'John',
    //     surname : 'Smith',
    // }
    // user.name= 'Pete'
    // delete user.name
    //
    // function isEmptyObj (obj){
    //     for (let key in obj){
    //         return true
    //     } return false
    // }
    // console.log(isEmptyObj(user))

    ///сумирование свойств обьекта
    // let salaries = {
    //   Anna : 590,
    //     Bob : 300,
    // }
    //
    // function sumSalaries (obj){
    //
    //     let sum = 0
    //     for (let key in salaries){
    //         if (salaries[key] === 0){
    //             return 0
    //         }
    //         sum += salaries[key]
    //     }
    //     return sum
    //
    // }
    //
    // console.log(sumSalaries(salaries))

    // let menu = {
    //     width: 200,
    //     height: 300,
    //     title: "My menu",
    // }
    // function multiplyNumeric(obj){
    //     for (let key in obj){
    //         if (typeof obj[key] === 'number'){
    //             obj[key] *= 2
    //         }
    //     }
    //     return obj
    // }
    //
    // console.log(multiplyNumeric(menu))

    //Функция изменения времени на переданное количество секунд;
    //
    // Функция изменения времени на переданное количество минут;
    //
    // Функция изменения времени на переданное количество часов.

    // const time = {
    //     hour : 12,
    //     min : 30,
    //     sec : 49,
    //     outputOnDisplay (){
    //         console.log (`Now ${this.hour}:${this.min}:${this.sec}`)
    //     },
    //     changeSec (sec){
    //         this.sec = sec
    //     },
    // }
    //
    //
    // time.outputOnDisplay()
    // time.changeSec(10)
    // time.outputOnDisplay()


   //
   //  function addAnimal (arr, index, newitem){
   //      let newAnimal = [...animal]
   //      newAnimal.splice(index,0 ,newitem)
   //      return newAnimal
   //  }
   //
   // console.log(addAnimal(2, 1, 2))
   //  console.log(animal)

    // const animal = ['dog','cat','bird','parrot']
    // const flowers = ['rose' , 'romashka']
    //
    // function toUpperCaseArray (array){
    //     return array.map(function(item){
    //        return  item.toUpperCase()
    //   })
    // }
    //
    // console.log(toUpperCaseArray(flowers))
    // console.log(flowers)


    // const users = ['helen' , 'bob', 'john']
    // let usersObj = users.reduce(function (acc,elem,index){
    //     acc[index] = elem
    //     return acc
    // },{})
    // console.log(usersObj)

    // const checkList = [{
    //     name: 'orange',
    //     amount: 1,
    //     unitPrice: 5,
    // },
    //     {
    //         name: 'cheese',
    //         amount: 3,
    //         unitPrice: 10,
    //     },
    //     {
    //         name: 'milk',
    //         amount: 2,
    //         unitPrice: 4,
    //     },
    //     {
    //         name: 'chocolate',
    //         amount: 3,
    //         unitPrice: 5,
    //     },
    //     {
    //         name: 'cake',
    //         amount: 1,
    //         unitPrice: 67,
    //     }
    // ];
    //
    // checkList.forEach(function(item) {
    //     document.write('<div> name: ' + item.name + '; amount: ' + item.amount + '</div>')
    // })
    //
    // let sumAmount = checkList.reduce((acc, elem) => acc +=(elem.amount * elem.unitPrice), 0)
    //
    //
    // console.log(sumAmount)



});