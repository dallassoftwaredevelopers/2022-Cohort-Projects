// Isolated code
function startGetIdea() {
    $(document).click(function() {
        $( "#jar" ).effect( "shake", {direction: "up", times: 4, distance: 10}, 1000 );
      });
}

/* Mobile menu
    - applies to all pages
*/
const mobileMenu = document.getElementById('mobile-menu')
const navMenu = document.querySelector('.nav-list')

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')
    navMenu.classList.toggle('active')
    console.log("hi")
})

/* User form
    - TODO: Validate form data before storing
    - Store/Retrieve form data in userData.ideas[] with localStorage
*/

let userData = []

function displayIdeas() {    
    let ideaArray = userData.ideas

    // Creates a table row for every existing entry
    for (let i=0 ; i< ideaArray.length; i++) {
        createRow( ideaArray[i].name, ideaArray[i].URL, ideaArray[i].date, ideaArray[i].category)
    }
}

function createRow( name, url, date, category) {
    console.log(name,url,date,category)
    let ideaTable = document.querySelector('.idea-table')

    let row = document.createElement('tr')

    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    let cell3 = row.insertCell(2)
    let cell4 = row.insertCell(3)
    cell2.innerHTML = url
    cell3.innerHTML = date
    cell1.innerHTML = name
    cell4.innerHTML = `<label class="${category} category-options">${category}</label>`

    ideaTable.appendChild(row)

}

function addIdea(event) {
    //event.preventDefault() // Stops form reload on submit

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

    // Update idea table
    createRow(idea.name, idea.URL, idea.date, idea.category)

    // Animate jar shake
}

// Runs once when add-idea page has loaded
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