// const all = document.getElementsByTagName("*")
// let docWidth = document.documentElement.offsetWidth;
// for ($el of all) {
//     let rect = $el.getBoundingClientRect();
//     if (rect.right > docWidth || rect.left < 0) {
//         console.log($el)
//         $el.style.border = '1px solid red'
//     }
// }

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    // autoplay: {
    //     delay: 3000,
    // },
    spacebetween: 60,
    slidesPerView: 1,
    // loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets'
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});


const btn = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if (window.pageYOffset > 600) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});


const details = document.querySelector('.people');
const option = document.querySelector('.details-option');
const opts = document.querySelectorAll('.option-item');
const time = document.querySelector('.time');
const timeOption = document.querySelector('.details-time-option');
const optsTime = document.querySelectorAll('.option-time');

opts.forEach(elem => {
    elem.addEventListener('mouseover', event => {
        event.target.style.color = '#E8C300';
    });
    elem.addEventListener('mouseout', event => {
        event.target.style.color = 'black';
    });
    elem.addEventListener('click', () => {
        const people = document.getElementById('people-name');
        let text = elem.textContent;
        people.innerHTML = text;
        details.removeAttribute('open');
    });
});

document.addEventListener('click', event => {
    if (!event.target.getAttribute('open')) {
        details.removeAttribute('open');
    }
});

optsTime.forEach(elem => {
    elem.addEventListener('mouseover', event => {
        event.target.style.color = '#E8C300';
    });
    elem.addEventListener('mouseout', event => {
        event.target.style.color = 'black';
    });
    elem.addEventListener('click', event => {
        const time = document.getElementById('timing');
        let text = elem.textContent;
        time.innerHTML = text;
        details.removeAttribute('open');
    });
});

document.addEventListener('click', event => {
    if (!event.target.getAttribute('open')) {
        time.removeAttribute('open');
    }
});
// debugger;
const menu = document.querySelector('.menu-open');
const btnMenu = document.querySelector('.header__burger');
const promo = document.querySelector('.promo .container');

btnMenu.addEventListener('click', function () {
    menu.classList.toggle("open-close");
});

promo.addEventListener('click', function (e) {
    e.preventDefault();
    if (!e.target.classList.contains('menu-open')) {
        e.stopPropagation();
    }
    menu.classList.remove('open-close');
});