class AddIdeaPage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
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
                        <img class="jar" src="../img/jar_2.png" alt="Idea jar">
                    </div>
                </section>

                <!--Stored Ideas-->
                <section class="card idea-container">
                    <h2 class="text-center">Your current ideas:</h2>

                    <table class="idea-table">
                        <tr>
                            <th>Event</th>
                            <th>Date</th>
                            <th>Event URL</th>
                            <th>Label</th>
                        </tr>

                    </table>

                </section>

            </div>
        </main>
        `;
    }
}

customElements.define('x-add-idea-page', AddIdeaPage);

