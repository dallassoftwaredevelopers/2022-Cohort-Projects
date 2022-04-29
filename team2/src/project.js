const mobileMenu = document.getElementById('mobile-menu')
const navMenu = document.querySelector('.nav-list')

/* shake function on get idea */
$(document).click(function() {
    $( "#jar" ).effect( "shake", {direction: "up", times: 4, distance: 10}, 1000 );
  });

/* modal on get idea */
$(".open").on("click", function() {
    setTimeout(() => {
      $(".popup-overlay, .popup-content").addClass("active");
  }, 1300)
    });
 
  $(".close, .popup-overlay").on("click", function() {
    $(".popup-overlay, .popup-content").removeClass("active");
  });
the
// Mobil menu
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')
    navMenu.classList.toggle('active')
    console.log("hi")
})

/* User form
    - Validate form data before storing
    - Store form data in userData.ideas[] 
    - Clear form data after submit
*/

let userData = []

function addIdea(event) {
    event.preventDefault() // Stops form reload on submit

    // Get radio input
    let checkedRadio = ''
    let radioElements = document.getElementsByName('category')
    console.log(radioElements)

    for(let i =0 ; i< radioElements.length; i++) {
        if(radioElements[i].checked) {
            // incomplete
        }
    }

    let idea = {
        id: Date.now(),
        name: document.getElementById('event-name').value,
        URL: document.getElementById('event-url').value,
        date: document.getElementById('event-date').value,
        category: ""
    }
    userData.ideas.push(idea)

    console.log("Added idea",userData)

    document.querySelector('form').reset()

    // Add updated userData to localstorage
    localStorage.setItem('myIdeaList', JSON.stringify( userData))
}

// Runs once when page is loaded
document.addEventListener('DOMContentLoaded', () => {
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
    
    // Call function addIdea on form-btn click
    document.querySelector('.form-btn').addEventListener('click', addIdea)
})