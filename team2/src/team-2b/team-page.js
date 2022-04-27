const modalOpenBtn = document.getElementById('modal-btn')
const modal = document.getElementById('meeting-modal')
const modalContent = document.getElementById('modal-content')
const mobileMenu = document.getElementById('mobile-menu')
const navMenu = document.querySelector('.nav-list')

let modalContentHTML = `
    <section class="modal">
        <h2>
            Meeting: Mon 4/18
        </h2>
        <div class="split">
            <div>
                <h3 class="">Github</h3>
                <ul>
                    <li>Github accounts needed</li>
                    <li>GitHub Projects / GitHub Issues</li>
                    <li>May move to a repo with FCC-Dallas</li>
                </ul>
            </div>
            <div>
                <h3>Our Project Ideas</h3>
                <ul>
                    <li>Ideas</li>
                    <li>Lets take a vote</li>
                </ul>
            </div>
            <div>
                <h3>Cool Links</h3>
                <ul>
                    <li>
                        <a href="https://coolors.co/">Cooolors - Palette generator</a>
                    </li>
                    <li>
                        <a href="https://www.pexels.com/">Pexels - free images</a>
                    </li>
                    <li>
                        <a href="https://desktop.github.com/">Github desktop app</a>
                    </li>
                    <li>
                        <a href="https://gitforwindows.org/">Git for Windows</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=i9qCmQ2EeUA">What is Netlify</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    `

// Modal
modalContent.innerHTML = modalContentHTML

modalOpenBtn.addEventListener('click', () => {
    modal.showModal()
})

// Mobil menu
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')
    navMenu.classList.toggle('active')
    console.log("hi")
})