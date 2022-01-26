document.addEventListener('DOMContentLoaded', function() {

// const cars = [
//     [2, 2, 44],
//     'BMW',
//     'Toyota',
//     'KIA',
//     'AUDI',
//     'Suzuki'
// ]
//     cars.length
//     cars[1]= 'Lada'
//     cars.push('Daewoo')
//     cars.pop()
//     cars.shift()
//     console.log(cars[0][2])
//     console.log(cars.length)
//     console.log(cars[cars.length - 1])
//     console.log(cars.push('Daewoo'))
//     console.log(cars)
//     console.log(cars.pop())
//     console.log(cars.shift())
//     const nameAdmin =[
//         'Vladimir',
//         'Irina',
//         'John'
//     ]
//     console.log(nameAdmin)
//     cars.concat(nameAdmin)
//     console.log(cars.concat(nameAdmin))
//     cars.indexOf('KIA')
//     console.log(cars.indexOf('KIA'))
//     cars.join(',')
//     console.log(cars.join(','))

    const randomPhrase = [
        'Have a nice day',
        'Good job',
        'You can do this',
        'Вo not be lazy',
    ]
    const randomPhraseResult = randomPhrase[Math.floor(Math.random() * 4)];
    console.log(randomPhraseResult)

    const randomPartOfTheBody =[
        'нога',
        'губы',
        'щеки',
        'палец'
    ]
    const randomAdjective =[
        'красивая',
        'дурная',
        'жирная'
    ]
    const randomAnimalBodyPart =[
        'хвост',
        'лапа',
        'крыло'
    ]
    const randomAnimal =[
        'лев',
        'кот',
        'щука',
        'лось'
    ]
    const randomPartOfTheBodyResult = randomPartOfTheBody[Math.floor(Math.random() * randomPartOfTheBody.length)];
    console.log(randomPartOfTheBodyResult)

    const randomAdjectiveResult = randomAdjective[Math.floor(Math.random() * randomAdjective.length)];
    console.log(randomAdjectiveResult)

    const randomAnimalBodyPartResult = randomAnimalBodyPart[Math.floor(Math.random() * randomAnimalBodyPart.length)];
    console.log(randomAnimalBodyPartResult)

    const randomAnimalResult = randomAnimal[Math.floor(Math.random() * randomAnimal.length)];
    console.log(randomAnimalResult)

    const randomSentence = 'У тебя ' + randomPartOfTheBodyResult + ' еще более ' + randomAdjectiveResult + ' чем ' + randomAnimalBodyPartResult + ' у ' + randomAnimalResult;
    console.log(randomSentence)

    const randomSentenceResult = ['У тебя',randomPartOfTheBodyResult,'еще более',randomAdjectiveResult,'чем',randomAnimalBodyPartResult,'у',randomAnimalResult].join(' ')
    console.log(randomSentenceResult)

    ////

    const num = [
        3,
        2,
        1
    ]
    num.join('больше,чем')
    console.log(num.join(' больше, чем '))

});