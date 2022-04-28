// Isolated code
function startGetIdea() {
    $(document).click(function() {
        $( "#jar" ).effect( "shake", {direction: "up", times: 4, distance: 10}, 1000 );
      });
}

/* Mobile menu

*/
const mobileMenu = document.getElementById('mobile-menu')
const navMenu = document.querySelector('.nav-list')

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')
    navMenu.classList.toggle('active')
    console.log("hi")
})

/* User form
    - Validate form data before storing
    - Store form data in userData.ideas[] 
*/

let userData = []

function displayIdeas() {
    let ideaDisplay = document.querySelector('.user-ideas')
    ideaDisplay.textContent = '\n' + JSON.stringify(userData, '\t', 2)
}

function addIdea(event) {
    event.preventDefault() // Stops form reload on submit

    // Get radio input
    let checkedRadio = ''
    let radioElements = document.getElementsByName('category')

    for(let i =0 ; i< radioElements.length; i++) {
        if(radioElements[i].checked) {
            // incomplete
            console.log(radioElements[i].value)
            checkedRadio = radioElements[i].value
        }
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
    localStorage.setItem('myIdeaList', JSON.stringify( userData))
}

// Runs once when add-idea page is loaded
function startAddIdea() {
    console.log("loaded")
    // Import user data if previously submitted
    userData = JSON.parse(localStorage.getItem('myIdeaList'))

    if(!userData) {
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