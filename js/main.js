let burger_btn = document.querySelector('.burger_btn');
let header_media_bg = document.querySelector('.header_media_bg');
let header_media = document.querySelector('.header_media');
let header_media_close = document.querySelector('.header_media_close');


burger_btn.addEventListener('click', () => {
  header_media_bg.classList.toggle('active')
  header_media.classList.toggle('active')
})

header_media_close.addEventListener('click', () => {
  header_media_bg.classList.remove('active')
  header_media.classList.remove('active')
})

header_media_bg.addEventListener('click', () => {
  header_media_bg.classList.remove('active')
  header_media.classList.remove('active')
})


try {
  let counter = 1;

function increment() {
  counter++;
}

function decrement() {
  counter--;
}

function get() {
  return counter;
}

const inc = document.getElementById("increment");
const input = document.getElementById("input");
const dec = document.getElementById("decrement");

inc.addEventListener("click", () => {
  increment();
  input.value = get();
});

dec.addEventListener("click", () => {
  if (input.value > 1) {
    decrement();
  }
  input.value = get();
});
} catch (err) {
  console.log(err);
}

let index = 1;

const on = (listener, query, fn) => {
	document.querySelectorAll(query).forEach(item => {
		item.addEventListener(listener, el => {
			fn(el);
		})
	})
}

on('click', '.selectBtn', item => {
	const next = item.target.nextElementSibling;
	next.classList.toggle('toggle');
	next.style.zIndex = index++;
});
on('click', '.option', item => {
	item.target.parentElement.classList.remove('toggle');

	const parent = item.target.closest('.select').children[0];
	parent.setAttribute('data-type', item.target.getAttribute('data-type'));
	parent.innerText = item.target.innerText;
})


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
});


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



