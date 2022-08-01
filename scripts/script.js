window.addEventListener('load', function () {
    const elMyAccordion = $('.my-accordion-btn');
    const elMyMenuBtn = this.document.querySelector('.header__navbar-bars');
    const elMyMenuList = this.document.querySelector('.header__menu-list')
    const elMyDropdown = this.document.querySelectorAll('.header__menu-link')
    const elMyDropdownMenu = this.document.querySelectorAll('.header__menu-dropdown');


    if (window.innerWidth >= 992) {
        // My slider
        // dropdown menu's
        for (let i = 0; i < elMyDropdown.length; i++) {
            elMyDropdown[i].addEventListener('mouseover', () => {
                elMyDropdownMenu[i].style.display = 'block'
            })
            elMyDropdownMenu[i].addEventListener('mouseover', () => {
                elMyDropdownMenu[i].style.display = 'block'
            })
            elMyDropdown[i].addEventListener('mouseout', () => {
                elMyDropdownMenu[i].style.display = 'none'
            })
            elMyDropdownMenu[i].addEventListener('mouseout', () => {
                elMyDropdownMenu[i].style.display = 'none'
            })
        }
    } else {
        // menu bars btn
        elMyMenuBtn.addEventListener('click', function () {
            elMyMenuList.classList.toggle('active')
        })
        // dropdown menu's
        $('.header__menu-link').click(function () {
            $('.header__menu-dropdown').removeClass('menu-active')
            $('.header__menu-dropdown').fadeOut()
            $(this).next().toggleClass('menu-active')
            $(this).next().toggleIn();
        })
        // My accordion
        elMyAccordion.on('click', function () {
            $(this).children().children().children().toggleClass('active')
            $(this).next().slideToggle();
        })
    }
})