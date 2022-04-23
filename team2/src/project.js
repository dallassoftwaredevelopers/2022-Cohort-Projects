
const mobileMenu = document.getElementById('mobile-menu')
const navMenu = document.querySelector('.nav-list')


// Mobil menu
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')
    navMenu.classList.toggle('active')
    console.log("hi")
})