document.addEventListener('DOMContentLoaded', function() {
   //  const color ='red';
   //  const cat ={
   //     legs: 4,
   //     name: 'Bob',
   //     color: color,
   // }
   //  cat['age'] = 5;
   // console.log(cat);
   //  console.log(cat.name)
   //  console.log(Object.keys(cat))
   //
   //  const dog = {}
   //      dog.legs = 3;
   //      dog.name = 'John';
   //      dog.color = 'black';
   //
   //  console.log(dog);
   //  console.log(dog.name)
   //  console.log(Object.keys(dog))
    //

    //////////////////////////////////////////////////////////////////////

//     const cars = [
//         { name : 'Toyota', date: 2015},
//         { name : 'KIA', date: 2016},
//         { name : 'AUDI', date: 2020},
//         { name : 'Suzuki', date: 1995},
// ]
//     console.log(cars);
//     console.log(cars[2])
//     console.log(cars[0].name)

    /////////////////////////////////////////////////////////////////////


    // const anna = { name: 'Anna' , age: 25, luckyNumbers :[ 2, 4, 8, 15] };
    // const dave = { name: 'Dave' , age: 24, luckyNumbers :[ 5, 14, 28, 17] };
    // const ira = { name: 'Ira' , age: 26, luckyNumbers :[ 20, 1, 9, 13] };
    // const friends= [
    //     anna,
    //     dave,
    //     ira,
    // ]
    // console.log(friends)
    // console.log(friends[1].name)
    // console.log(friends[1].luckyNumbers[2])
  //////////////////////////////////////////////////////////////////////
    // const owedMoney = {};
    // owedMoney['John'] = 5;
    // owedMoney['Kate'] = 4;
    // owedMoney['Dave'] = 6;
    //
    // owedMoney['John'] += 3;
    // console.log( owedMoney['John'] += 3)
    // console.log(owedMoney)

    // const movies = {
    //     'Король Лев': {
    //         releaseDate: 1992,
    //         duration: 100,
    //         format: 'DVD',
    //     },
    //     'Гарри Поттер': {
    //         releaseDate: 2001,
    //         duration: 150,
    //         format: 'Blu-ray',
    //     },
    // }
    //
    // const kingOfLine = movies['Король Лев'];
    // console.log(kingOfLine)
    // console.log(kingOfLine.releaseDate)
    //
    // const cars ={
    //     'Тачки': {
    //         releaseDate: 2004,
    //         duration: 110,
    //         format: 'Blu-ray',
    //     },
    // }
    // movies['Тачки'] = cars;
    // console.log(cars)
    // console.log(movies)
    // console.log(Object.keys(movies))
    ////////////////////////////////////////////////////////////////////////////
    const scores = {
        ira: 5,
        kate: 6,
        dave: 8,
    }
    // scores['ira']+=3;
    // console.log(scores)
    console.log(scores['ira']+=3)
    /////////////////////////////////////////////////////////////////////////////
    const myCrazyObject = {
        'name': 'Нелепий обьект',
        'some array': [ 7, 9, { purpose :'путаница', number: 123 }, 3.3],
        'random animal': 'банановая акула',
    }
    console.log(myCrazyObject["some array"][2].number)

});