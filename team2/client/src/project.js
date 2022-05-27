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
//     function startGetIdea() {

//     /* modal on get idea */
//     $(".open").on("click", function () {
//         let chosenCategory = this.classList[0]

//         $("#jar").effect("shake", {
//             direction: "up",
//             times: 4,
//             distance: 10
//         }, 1000);

//         getIdea(chosenCategory)

//         setTimeout(() => {
//             $(".popup-overlay, .popup-content").addClass("active");
//         }, 1300)
//     });

//     $(".close, .popup-overlay").on("click", function () {
//         $(".popup-overlay, .popup-content").removeClass("active");
//     });


//     userData = JSON.parse(localStorage.getItem('myIdeaList'));
//     popUpWindow = document.querySelector(".popup-content > h2");


//     function getIdea(chosenCategory) {
//         //reset optional data fields
//         document.querySelector(".popup-url").innerText = "";
//         document.querySelector(".popup-date").innerText = "";

//         if (!userData || !userData.ideas.length) {
//             popUpWindow.innerText = "You have no activities in your idea jar!";
//             return
//         }

//         let ideasInCategory = userData.ideas.filter(idea => idea.category == chosenCategory);


//         if (chosenCategory == "other") {
//             ideasInCategory = userData.ideas;
//         }

//         //validates user choice and provides feedback
//         if (!ideasInCategory.length) {
//             popUpWindow.innerText = "You have no activities in this category";
//             return
//         }

//         //stores random idea data so it can be used to delete idea
//         let randomIdea = generateRandomIdea(ideasInCategory);
        
//         //button to remove idea from jar
//         document.querySelector(".removeIdea").addEventListener("click", () => removeIdeaFromJar(randomIdea));
//     }
// }
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
