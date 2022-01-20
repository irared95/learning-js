document.addEventListener('DOMContentLoaded', function() {

// const age = 10;
// const isAccompanied = false;
// if(age >= 12 || isAccompanied){
//     console.log('вход разрешен');
// }else{
//     console.log('вход не разрешен');
// }
//
// function accessWatchFilm(age, isAccompanied){
//     if(age >= 12 || isAccompanied){
//         console.log('вход разрешен');
//     }else{
//         console.log('вход не разрешен');
//     }
// }
// accessWatchFilm(12, true);
// accessWatchFilm(10, true);
// accessWatchFilm(10, false);


    function checkPassword(password){
        const passwordLen = password.length;
        const passwordLastLetter = password[passwordLen-1];
        const passwordFirstLetter= password[0];

        if (passwordLen >= 5 && typeof(+passwordLastLetter) === 'number' && passwordFirstLetter === passwordFirstLetter.toUpperCase()) {
            console.log('норм пароль');
        } else {
            console.log('поменяйте пароль')
        }
    }

    checkPassword('Ffdfge2');
});

