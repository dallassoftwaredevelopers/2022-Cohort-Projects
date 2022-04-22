const modalOpenBtn = document.getElementById('modal-btn')
const modal = document.getElementById('meeting-modal')
const modalContent = document.getElementById('modal-content')
const mobileMenu = document.getElementById('mobile-menu')
const navMenu = document.querySelector('.nav-list')

// Modal
modalContent.innerHTML = ``

modalOpenBtn.addEventListener('click', () => {
    modal.showModal()
})

// Mobil menu
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')
    navMenu.classList.toggle('active')
})