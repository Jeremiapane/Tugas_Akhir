const burgerBtn = document.querySelector('#burgerBtn');
const navLink = document.querySelector(".nav-links");

burgerBtn.addEventListener('click', () => {
    navLink.classList.toggle('expand');
});


