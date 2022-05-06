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

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')
    navMenu.classList.toggle('active')
})

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

        //validates user choice and provides feedback
        if (!userData) {
            popUpWindow.innerText = "You have no activities in this category";
            return
        }
        //filters ideas based on chosen category
        let ideasInCategory = userData.ideas.filter(idea => idea.category == chosenCategory);

        if (chosenCategory == "other") {
            ideasInCategory = userData.ideas;
        }

        generateRandomIdea(ideasInCategory);
        
    }
}
//generates a random index and uses it to pick a random idea
function generateRandomIdea(ideasInCategory){
    let randomIdeaIndex = Math.floor(Math.random() * ideasInCategory.length);
    let randomIdea = ideasInCategory[randomIdeaIndex];


    popUpWindow.innerText = randomIdea.name;
    if (randomIdea.URL) {
        document.querySelector(".popup-url").innerText = randomIdea.URL;
    }
    if (randomIdea.date) {
        document.querySelector(".popup-date").innerText = `Date: ${randomIdea.date}`;
    }
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
    console.log(name, url, date, category)
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
        console.log("first")
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
    console.log("loaded")
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