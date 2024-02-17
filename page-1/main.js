const dropdowns = document.querySelectorAll('.dropdown');


dropdowns.forEach(dropdown => {

    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');


    select.addEventListener('click', () => {

        select.classList.toggle('select-clicked');

        caret.classList.toggle('caret-rotate');

        menu.classList.toggle('menu-open');

});


options.forEach(option => {

    option.addEventListener('click', () => {

    selected.innerText = option.innerText;

    select.classList.remove('select-clicked');

    caret.classList.remove('caret-rotate');

    menu.classList.remove('menu-open');
    
    options.forEach(option => {
        option.classList.remove('active');
    });

    option.classList.add('active');
  });
});
});


//---------------FAQ ACCORDATION------------------------

const accordationBtns = document.querySelectorAll('.accordation-btn')

accordationBtns.forEach(btn => {
    btn.addEventListener('click', function () {
    this.classList.toggle('active')
    const accordationDescription = this.nextElementSibling
    const plusIcon = this.querySelector('.bi-plus')
    const minusIcon = this.querySelector('.bi-minus')

    if(accordationDescription.style.maxHeight) {
        accordationDescription.style.maxHeight = null
        plusIcon.style.display = 'block'
        minusIcon.style.display = 'none'
    }   else {
        accordationDescription.style.maxHeight = accordationDescription.scrollHeight + 'px'
        plusIcon.style.display = 'none'
        minusIcon.style.display = 'block'
    }
    })
})
