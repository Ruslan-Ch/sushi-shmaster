document.querySelector('.header__burger').onclick = function () {
    let toggleClassActive = document.querySelectorAll('.header__burger, .header__menu');
    let toggleClassLock = document.querySelector('body');
    toggleClassActive.forEach((e) => {
        e.classList.toggle('active');
    });
    toggleClassLock.classList.toggle('lock');
};