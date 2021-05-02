const postSlide = document.querySelector('.slider');
const posts = document.querySelectorAll('.slider .banner-post');


const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');

let size = posts[0].clientWidth;
let counter = 0;
postSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button listeners
btnNext.addEventListener('click', () => {


    if (counter >= posts.length - 1) {
        return
    }
    postSlide.style.transition = 'transform 0.6s ease-in-out';
    counter++;
    postSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';


});
btnPrev.addEventListener('click', () => {
    if (counter <= 0) {
        return
    }
    postSlide.style.transition = 'transform 0.6s ease-in-out';
    counter--;
    postSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});


postSlide.addEventListener('transitionend', () => {
    if (posts[counter].id === 'lastClone') {
        postSlide.style.transition = 'none';
        counter = posts.length - 2;
        postSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (posts[counter].id === 'firstClone') {
        postSlide.style.transition = 'none';
        counter = posts.length - counter;
        postSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

});