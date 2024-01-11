window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('header').style.backgroundColor = '#041F1E';
    } else {
        document.querySelector('header').style.backgroundColor = '#95BEBA';
    }
}