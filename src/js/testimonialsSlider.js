    const swiper = new Swiper('.testimonials__slider', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    navigation: {
        nextEl: '.testimonials__slider-nextbtn',
        prevEl: '.testimonials__slider-prevbtn',
    },
    pagination: {
        el: '.testimonials__slider-pagination',
        type: 'progressbar'
    },
});
