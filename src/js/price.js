const manic = document.getElementById('manic');
const pedic = document.getElementById('pedic');
const eyebrow = document.getElementById('eyebrow');
const massage = document.getElementById('massage');
const manicBtn = document.getElementById('manic-btn');
const pedicBtn = document.getElementById('pedic-btn');
const eyebrowBtn = document.getElementById('eyebrow-btn');
const massageBtn = document.getElementById('massage-btn');

manicBtn.addEventListener('click', () => {
manic.classList.add('active');
manicBtn.classList.add('active-btn');
if (pedic.classList.contains('active')) {
    pedic.classList.remove('active')
    pedicBtn.classList.remove('active-btn')
}
if (eyebrow.classList.contains('active')) {
    eyebrow.classList.remove('active')
    eyebrowBtn.classList.remove('active-btn')
}
if (massage.classList.contains('active')) {
    massage.classList.remove('active')
    massageBtn.classList.remove('active-btn')
}
});

pedicBtn.addEventListener('click', () => {
pedic.classList.add('active');
pedicBtn.classList.add('active-btn');
if (manic.classList.contains('active')) {
    manic.classList.remove('active')
    manicBtn.classList.remove('active-btn')
}
if (eyebrow.classList.contains('active')) {
    eyebrow.classList.remove('active')
    eyebrowBtn.classList.remove('active-btn')
}
if (massage.classList.contains('active')) {
    massage.classList.remove('active')
    massageBtn.classList.remove('active-btn')
}
});


eyebrowBtn.addEventListener('click', () => {
    eyebrow.classList.add('active')
    eyebrowBtn.classList.add('active-btn')
    if (manic.classList.contains('active')) {
    manic.classList.remove('active')
    manicBtn.classList.remove('active-btn')
    }
    if (pedic.classList.contains('active')) {
        pedic.classList.remove('active')
        pedicBtn.classList.remove('active-btn')
    }
    if (massage.classList.contains('active')) {
        massage.classList.remove('active')
        massageBtn.classList.remove('active-btn')
    }

});

massageBtn.addEventListener('click', () => {
    massage.classList.add('active')
    massageBtn.classList.add('active-btn')
    if (manic.classList.contains('active')) {
    manic.classList.remove('active')
    manicBtn.classList.remove('active-btn')
    }
    if (pedic.classList.contains('active')) {
        pedic.classList.remove('active')
        pedicBtn.classList.remove('active-btn')
    }
    if (eyebrow.classList.contains('active')) {
        eyebrow.classList.remove('active')
        eyebrowBtn.classList.remove('active-btn')
    }
});
