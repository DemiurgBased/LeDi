document.addEventListener('DOMContentLoaded', function() {
    const targetElement = document.getElementById('home-btn');
    const viewportHeight = window.innerHeight;
    
    function checkScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollPosition > viewportHeight) {
            targetElement.classList.add('active-homeBtn');
        } else {
            targetElement.classList.remove('active-homeBtn');
        }
    }
    checkScroll();
    window.addEventListener('scroll', checkScroll);
});