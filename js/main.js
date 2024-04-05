let swiper = new Swiper(".popular_productSwiper", {
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
        850: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        993: {
            slidesPerView: 4,
            spaceBetween: 22,
        },
    },
});


try {
    const tabs = document.querySelectorAll('[data-tab-target]');
    const tabContents = document.querySelectorAll('[data-tab-content]');

    tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
        tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
    })
} catch(err) {
    console.log(err);
}