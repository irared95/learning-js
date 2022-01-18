document.addEventListener('DOMContentLoaded', function() {


    const string1 = 'hello world';
    const string2 ='I like js';
    let count = 0;
    const h1= document.querySelector('.head');

    setInterval(function () {
        count++
        if (count % 2){
            h1.innerHTML=string1
        }
            else{
            h1.innerHTML=string2
        }
    }, 1000);
});