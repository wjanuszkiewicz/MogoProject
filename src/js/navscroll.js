var nav = document.querySelector('.nav');

function scrollTo(element) {
    element.scrollIntoView({behavior: 'smooth'});
}

function handleClick (e) {
    var element = e.target;
    var target = document.querySelector('.' + element.dataset.target)
    scrollTo(target);
}

nav.addEventListener('click', handleClick);