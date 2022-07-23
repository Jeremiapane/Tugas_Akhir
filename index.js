const burgerBtn = document.querySelector('#burgerBtn');
const navLink = document.querySelector(".nav-links");


burgerBtn.addEventListener('click', () => {
    navLink.classList.toggle('expand')
});

window.addEventListener('scroll', () => {
    navLink.classList.remove('expand')
    // let navbar = document.querySelector('nav');
    // let windowPosition = window.scrollY > 0;
    // navbar.classList.toggle('scrolling-active', windowPosition)
})




