var swiper = new Swiper(".popular_productSwiper", {
    spaceBetween: 20,
    navigation: {
        nextEl: ".popular_slider-button-next",
        prevEl: ".popular_slider-button-prev",
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        993: {
            slidesPerView: 4,
            spaceBetween: 22,
        },
    },
});