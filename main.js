const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav')


burger.addEventListener('click', () => {
    nav.classList.toggle('active')
})





const swiperAlbum1 = new Swiper('.swiper-album-1', {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    allowTouchMove: false,

    speed: 20000
});


const swiperAlbum2 = new Swiper('.swiper-album-2', {
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true
    },
    allowTouchMove: false,

    speed: 20000
});
