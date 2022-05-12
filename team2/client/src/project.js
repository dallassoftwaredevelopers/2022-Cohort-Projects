/*  TABLE OF CONTENTS

    Mobile menu
    get-idea.html
    add-item.html
*/

/*------------------------- 
    Mobile menu
    - applies to all pages
--------------------------*/
const mobileMenu = document.getElementById('mobile-menu')
const navMenu = document.querySelector('.nav-list')
const nav = document.querySelector('nav')

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')
    navMenu.classList.toggle('active')
})

// Add background to Navbar on scroll
window.onscroll = () => {
    if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        nav.style.background = "rgba(123, 136, 209, .9)"
    }
    else {
        nav.style.background = "none"
    }
}

/*----------------------------
    Logged in behaviours
    - Still in testing
----------------------------*/

let isLoggedIn = false

console.log(isLoggedIn)

if(isLoggedIn === true) {
    console.log(navMenu.children)
}

/*---------------------------------- 
    Get-idea.html
----------------------------------*/
    function startGetIdea() {

    /* modal on get idea */
    $(".open").on("click", function () {
        let chosenCategory = this.classList[0]

        $("#jar").effect("shake", {
            direction: "up",
            times: 4,
            distance: 10
        }, 1000);

        getIdea(chosenCategory)

        setTimeout(() => {
            $(".popup-overlay, .popup-content").addClass("active");
        }, 1300)
    });

    $(".close, .popup-overlay").on("click", function () {
        $(".popup-overlay, .popup-content").removeClass("active");
    });


    userData = JSON.parse(localStorage.getItem('myIdeaList'));
    popUpWindow = document.querySelector(".popup-content > h2");


    function getIdea(chosenCategory) {
        //reset optional data fields
        document.querySelector(".popup-url").innerText = "";
        document.querySelector(".popup-date").innerText = "";

        if (!userData || !userData.ideas.length) {
            popUpWindow.innerText = "You have no activities in your idea jar!";
            return
        }

        let ideasInCategory = userData.ideas.filter(idea => idea.category == chosenCategory);


        if (chosenCategory == "other") {
            ideasInCategory = userData.ideas;
        }

        //validates user choice and provides feedback
        if (!ideasInCategory.length) {
            popUpWindow.innerText = "You have no activities in this category";
            return
        }

        //stores random idea data so it can be used to delete idea
        let randomIdea = generateRandomIdea(ideasInCategory);
        
        //button to remove idea from jar
        document.querySelector(".removeIdea").addEventListener("click", () => removeIdeaFromJar(randomIdea));
    }
}
//generates a random index and uses it to pick a random idea
function generateRandomIdea(ideasInCategory) {
    let randomIdeaIndex = Math.floor(Math.random() * ideasInCategory.length);
    let randomIdea = ideasInCategory[randomIdeaIndex];


    popUpWindow.innerText = randomIdea.name;
    if (randomIdea.URL) {
        document.querySelector(".popup-url").innerText = randomIdea.URL;
    }
    if (randomIdea.date) {
        document.querySelector(".popup-date").innerText = `Date: ${randomIdea.date}`;
    }
    return randomIdea
}

/*------------------------------------------
    Login/Sign up
    - Defaults to Login form
    - 
------------------------------------------*/
function loginSignUp() {
    const loginForm = document.querySelector('#login')
    const createAccountForm = document.querySelector('#createAccount')
    // In "Login", the link to go to "Create Account" form
    document.querySelector('#linkCreateAccount').addEventListener('click', (event) => {
        event.preventDefault()
        loginForm.classList.add('hide-element')
        createAccountForm.classList.remove('hide-element')
    })
    // In "Create Account", the link to go to "Login" form
    document.querySelector('#linkLogin').addEventListener('click', (event) => {
        event.preventDefault()
        loginForm.classList.remove('hide-element')
        createAccountForm.classList.add('hide-element')
    })
    
    // Submit from "Login" form
    loginForm.addEventListener('submit', event => {
        event.preventDefault();
        // Perform login

        // If sucess
        setFormMessage(loginForm, "success", "You're logged in")
        isLoggedIn = true
        // If failed
        //setFormMessage(loginForm, "error", "Invalid username password combination")
    })

    // Submit from "Create Account" form
    createAccountForm.addEventListener('submit', (event)=> {
        event.preventDefault()
        const createUsername = createAccountForm.querySelector('#createUsername').value
        const createPassword = createAccountForm.querySelector('#createPassword').value
        const createPasswordConfirm = createAccountForm.querySelector('#createPasswordConfirm').value

        // Valid pattern regex
        let validUsername = /^[a-zA-Z0-9]+$/
        let validPassword = /^[a-zA-Z0-9!@#$]+$/

        if(createUsername.length < 3) {
            setFormMessage(createAccountForm, "error", "Please enter a Username of 3 or more characters")
        }
        else if ( !validUsername.test(createUsername)) {
            setFormMessage(createAccountForm, "error", "Invalid characters in Username")
        }
        else {
            // Password validation, must be greater than 8 char with and 1 symbol

            // Check passwords match
            if(createPassword !== createPasswordConfirm)
                setFormMessage(createAccountForm, "error", "Passwords do not match")
            else {
                setFormMessage(createAccountForm, "success", "Account created")
                // Set Username and password
            }
        }
    })
}

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector('.form-message')
    messageElement.textContent = message
    messageElement.classList.remove('form-message-error', 'form-message-success')
    messageElement.classList.add(`form-message-${type}`)
}
/* ----------------------------------------
    Add-idea.html overview
    - On page load startAddIdea()
    - Checks for existing userData in displayIdeas() with localStorage
        - If present populate table in createRow()
    - User submits idea and calls addIdea()
        - Jar is animated startJar()

    TODO: 
    - Validate form data before storing
    - Change date to dd-mm-yy
--------------------------------------------*/
let userData = []

function displayIdeas() {
    let ideaArray = userData.ideas

    // Creates a table row for every existing entry
    for (let i = 0; i < ideaArray.length; i++) {
        createRow(ideaArray[i].name, ideaArray[i].URL, ideaArray[i].date, ideaArray[i].category)
    }
}

function createRow(name, url, date, category) {
    let ideaTable = document.querySelector('.idea-table')
    let row = document.createElement('tr')

    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    let cell3 = row.insertCell(2)
    let cell4 = row.insertCell(3)
    cell1.innerHTML = name
    cell2.innerHTML = date
    cell3.innerHTML = `<a href="${url}">${url}</a>`
    cell4.innerHTML = `<label class="${category} category-options">${category}</label>`

    ideaTable.appendChild(row)

}

function addIdea(event) {
    //event.preventDefault() // Stops form reload on submit
    
    // Get radio input
    let checkedRadio = ''
    let radioElements = document.getElementsByName('category')

    for (let i = 0; i < radioElements.length; i++) {
        if (radioElements[i].checked) {
            // incomplete
            console.log(radioElements[i].value)
            checkedRadio = radioElements[i].value
        }
    }

    // Validate input 
    if (!document.getElementById('event-name').value || checkedRadio == "") {
        alert("Please enter both an event name and category")
        return
    }

    let idea = {
        id: Date.now(),
        name: document.getElementById('event-name').value,
        URL: document.getElementById('event-url').value,
        date: document.getElementById('event-date').value,
        category: checkedRadio
    }
    userData.ideas.push(idea)

    document.querySelector('form').reset()

    // Add updated userData to localstorage
    localStorage.setItem('myIdeaList', JSON.stringify(userData))

    // Update idea table
    createRow(idea.name, idea.URL, idea.date, idea.category)

    // Animate jar shake
    let jar = document.querySelector('.jar')
    jar.classList.add('jar-shake')
}

// Runs once when add-idea page has loaded
function startAddIdea() {
    // Import user data if previously submitted
    userData = JSON.parse(localStorage.getItem('myIdeaList'))

    if (!userData) {
        userData = {
            userId: 1,
            userName: 'Default',
            ideas: []
        }
    }
    console.log(userData)

    // Populate data on page if present
    displayIdeas()

    // Call function addIdea on form-btn click
    document.querySelector('.form-btn').addEventListener('click', addIdea)
}