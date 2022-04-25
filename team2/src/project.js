const mobileMenu = document.getElementById('mobile-menu')
const navMenu = document.querySelector('.nav-list')


// Mobil menu
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')
    navMenu.classList.toggle('active')
    console.log("hi")
})
// User form

userData = {
    userId: 1,
    events: {
        name: "",
        URL: "",
        date: "",
        category: ""
    }
}

const formName = document.getElementById('event-name')
const formURL = document.getElementById('event-url')
const formDate = document.getElementById('event-date')
const formCategory = document.getElementById('')


function setData(event) {
    // Stops page reload
    event.preventDefault()

    console.log(userData)
}
