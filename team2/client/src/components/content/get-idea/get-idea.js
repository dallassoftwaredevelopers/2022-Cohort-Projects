class GetIdeaPage extends HTMLElement {
    constructor() {
        super();
    }

    startGetIdea() {

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

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <main>
            <section class="container">
                <h1 class="mainHeading text-center">What do you want to to today?</h1>
                <div class="containerGet">

                    <div class="containerJar">
                        <img src="../img/jar_2.png" id="jar" alt="jar with colored paper slips"></img>
                    </div>
                    <section class="activity-buttons">
                        <button class="other open shake">Any Activity</button>
                        <button class="stay-home open shake">Stay Home</button>
                        <button class="restaurant open shake">Restaurant</button>
                        <button class="indoor open shake">Indoor Activity</button>
                        <button class="outdoor open shake">Outdoor Activity</button>
                        <button class="road-trip open shake">Road Trip</button>
                    </section>
                </div>
                <!--Creates the popup body-->
                <div class="containerModal">
                    <div class="popup-overlay">
                        <!--Creates the popup content-->
                        <div class="popup-content">
                            <h2>I'M SO EXCITED THE POP-UP WORKS!!!!</h2>
                            <h3 class="popup-url"></h3>
                            <h3 class="popup-date"></h3>
                            <!--popup's close button-->
                            <div class="popup-btn-container">
                            <button class="close mdlBtn">Keep Idea in Jar</button>
                            <button class="close mdlBtn removeIdea">Remove Idea from Jar</button>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        `;
    }
}

customElements.define('x-get-idea-page', GetIdeaPage);

