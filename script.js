const menubar = document.getElementsByClassName('menubar')[0]
const navbarmenu = document.getElementsByClassName('navbarmenu')[0]
menubar.addEventListener('click', () => {
    navbarmenu.classList.toggle('active')
})


const swiper = new Swiper('.swiper', {
    autoplay:{
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable:true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});