document.addEventListener('DOMContentLoaded', function() {
    const h1= document.querySelector('.head');
    const input= document.querySelector('.input');
    console.log(input)
    input.addEventListener('input', function (event){
        h1.textContent = event.target.value;
    })
});