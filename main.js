document.addEventListener('DOMContentLoaded', function () {

    const accordionItem = $('.accordion__item');

    accordionItem.on('click',function(event){
        //this текущие нажатие
        const content = $(this).find('.accordion__item-content')

        $('.accordion__item-content').not(content).slideUp(500).removeClass('active')

        if (content.hasClass('active')){
            content.removeClass('active')
            content.slideUp(500)
        } else {
            content.addClass('active')
            content.slideDown(500)
        }
    })

    console.log(accordionItem)

});