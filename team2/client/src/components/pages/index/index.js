class IndexPage extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <main>
            <section class="containerMain">
                <div class="btnContainerMain">
                    <a class="putIdeaBtnMain stay-home" href="./src/add-idea.html">Put Idea In Jar</a>
                    <a class="getIdeaBtnMain indoor" href="./src/get-idea.html">Take Idea From Jar</a>
                </div>

                <div class="containerOverview" id="overview">
                    <p>Do you have a difficulty deciding on a resturant or what you want to do when you are bored? Let
                        Idea Jar help!</p>
                    <p>Idea Jar keeps track of resturants you want to try and fun activities you want to do.</p>
                    <section class="containerExplain">
                        <section>
                            <div class="putIdeaExplain stay-home">PUT IDEA IN JAR</div>
                            <p>Use this function to add resturants and fun activities when you learn about them.</p>
                        </section>
                        <section>
                            <div class="takeIdeaExplain indoor">TAKE IDEA FROM JAR</div>
                            <p>Select this function when you are ready for IDEA JAR to randomly select from the ideas
                                you've entered, making the decision for you. </p>
                        </section>
                    </section>
                </div>
            </section>
        </main>
        `;
    }
}

customElements.define('x-index-page', IndexPage);

