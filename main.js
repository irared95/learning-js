document.addEventListener('DOMContentLoaded', function() {
// const name ='Bob';
// console.log('Hi, ' + name)
// if (name.length > 6){
//     console.log('Yo have the longest name')
// } else {
//     console.log('You have not the longest name')
// }

    // const lemonChicken = false;
    // const beefWithBlackBean = false;
    // const sweetAndSourPork = false;
    // if (lemonChicken){
    //     console.log('олтично я буду курицу с лимоном')
    // } else if(beefWithBlackBean) {
    //     console.log('заказывай говядину')
    // } else if (sweetAndSourPork) {
    //     console.log('закажи свинину')
    // } else {
    //     console.log('закажи яйца с лапшой')
    // }

    // const name = 'Alex';
    // if (name === 'Ira'){
    //     console.log('hi Ira')
    // } else if (name === 'Alex') {
    //     console.log('hi dad')
    // }  else if (name=== 'Svetlana'){
    //     console.log('hi mom')
    // }
    // else {
    //     console.log('not hi')
    // }

    // let sheepCounted = 0;
    // while (sheepCounted < 10) {
    //     console.log( 'подсчитано овец' + sheepCounted);
    //     sheepCounted ++;
    // }
    // console.log ('sleep')


    // let time = 3;
    // for (let i = 0; i< time; i++){
    //     console.log('hi')
    // }
    //
    // let animals = ['cat', 'dog', 'rabbit'];
    // for (let i = 0; i < animals.length; i++){
    //     console.log( 'you have ' + animals[i] + '.')
    // }

    // let name = 'Nickpkkpokpok';
    // for (let i = 10; i >= 0; i--){
    //     console.log('Your name have ' + name[i])
    //     console.log(i)
    // }

    // for ( let x = 3; x < 1000; x = x * 3){
    //     console.log(x)
    // }
    //
    // let number = 2;
    // while (number < 1000){
    //     number = number * 2;
    //     console.log(number)
    // }


    // let animalsInZoo = ['cat', 'fish', 'dog', 'duck']
    //
    // for ( let i = 0; i < animalsInZoo.length; i++){
    //     animalsInZoo[i] = animalsInZoo[i] + ' beautiful animal'
    //     console.log(animalsInZoo[i] + ' beautiful animal')
    //     console.log(i)
    // }
    // console.log(animalsInZoo)


    // let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    // // console.log(alphabet)
    //
    // let randomString = '';
    // while (randomString.length < 6){
    //     randomString  += alphabet[Math.floor(Math.random()* alphabet.length)]
    // }
    // console.log(randomString)

    let input = 'javascript is awesome'.split('');
    let output = '';
    for (let i = 0; i < input.length; i++){
        if ( input[i] === 'e'){
            output += '3'
            continue
        }
        if( input[i] === 'i'){
            output += '1'
            continue
        }
        if( input[i] === 'o'){
            output += '0'
            continue
        }
        if ( input[i] === 'a'){
            output += '4'
            continue
        }
        output += input[i]
    }

    console.log(output)
    console.log(input)

});