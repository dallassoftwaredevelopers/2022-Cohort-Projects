class AddIdeaPage extends HTMLElement {
    constructor() {
        super();
    }

    globalLogic(){
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
    addIdeaLogic() {
        // For userData object
        let userData = {}

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

        // Call function addIdea on form-btn submit
        document.querySelector('.form-btn').addEventListener('click', addIdea)

        //////////////////////////////////

        function addIdea(event) {
            event.preventDefault() // Stops form reload on submit
            
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
            if (document.getElementById('event-name').value && checkedRadio == "") {
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
            else {
                console.log("Add an idea first")
            }
        
            
        }

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
            cell1.innerHTML = name
            cell2.innerHTML = date
            cell3.innerHTML = `<label class="${category} category-options">${category}</label>`

            ideaTable.appendChild(row)
        }
    }

    connectedCallback() {
        this.render();
        this.globalLogic();
        this.addIdeaLogic();
    }

    render() {
        this.innerHTML = `
        <main id="add-item" onload="startAddIdea()">
            <div class="container">
                <!--Form and image-->
                <section class="split idea-form">
                    <div class="card">
                        <!--User submission form-->
                        <form>
                            <div class="split">
                                <div class="form-space">
                                    <h3>
                                        <label for="event-name">Event name:</label>
                                    </h3>

                                    <input autofocus class="form-input" type="text" name="event-name" id="event-name"
                                        placeholder="'FCC Dallas Meetup'" required />

                                    <h3>
                                        <label for="event-url">Event URL:</label>
                                    </h3>

                                    <input class="form-input" type="text" name="event-url" id="event-url" />
                                    <br>

                                    <h3>
                                        <label for="event-date">Date:</label>
                                    </h3>

                                    <input class="form-input" type="date" name="event-date" id="event-date" />

                                </div>

                                <div>
                                    <h3>
                                        <label for="category">Category:</label>
                                    </h3>

                                    <input type="radio" id="stay-home-btn" name="category" value="stay-home" />
                                    <label class="stay-home category-options" for="stay-home-btn">Stay Home</label>

                                    <input type="radio" id="restaurant-btn" name="category" value="restaurant" />
                                    <label class="restaurant category-options" for="restaurant-btn">Restaurant</label>

                                    <input type="radio" id="road-trip-btn" name="category" value="road-trip" />
                                    <label class="road-trip category-options" for="road-trip-btn">Road Trip</label>

                                    <input type="radio" id="indoors-btn" name="category" value="indoor" />
                                    <label class="indoor category-options" for="indoors-btn">Indoors</label>

                                    <input type="radio" id="outdoors-btn" name="category" value="outdoor" />
                                    <label class="outdoor category-options" for="outdoors-btn">Outdoors</label>

                                    <input type="radio" id="other-btn" name="category" value="other" />
                                    <label class="other category-options" for="other-btn">Other</label>
                                </div>
                            </div>
                            <input type="submit" value="Submit" class="form-btn" />
                        </form>
                    </div>

                    <div class="img-container">
                        <img class="jar" src="./src/img/jar_2.png" alt="Idea jar">
                    </div>
                </section>

                <!--Stored Ideas-->
                <section class="card idea-container">
                    <h2 class="text-center">Your current ideas:</h2>

                    <table class="idea-table">
                        <tr>
                            <th>Event</th>
                            <th>Date</th>
                            <th>Category</th>
                        </tr>

                    </table>

                </section>

            </div>
        </main>
        `;
    }
}

customElements.define('x-add-idea-page', AddIdeaPage);

